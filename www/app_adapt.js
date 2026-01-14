// www/app_adapt.js - 安卓APP原生交互适配
document.addEventListener('plusready', function() {
    // 1. 安卓返回键处理（避免误退出）
    plus.key.addEventListener('backbutton', function() {
        const currentUrl = window.location.href;
        // 首页：双击返回键退出；子页面：返回上一页
        if (currentUrl.includes('index.html')) {
            if (plus.runtime.quitTime) {
                plus.runtime.quit(); // 第二次点击退出
            } else {
                plus.runtime.quitTime = new Date().getTime();
                plus.nativeUI.toast('再按一次退出地理乐-GeoFun', { duration: 'short' });
                // 3秒后重置标记
                setTimeout(() => plus.runtime.quitTime = 0, 3000);
            }
        } else {
            window.history.back();
        }
    }, false);

    // 2. 状态栏适配（避免遮挡导航栏，适配刘海屏）
    const statusBarHeight = plus.navigator.getStatusbarHeight();
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.paddingTop = `${statusBarHeight}px`;

    // 3. 锁定竖屏（可改为auto适配横竖屏）
    plus.screen.lockOrientation('portrait-primary');

    // 4. 全屏显示（隐藏虚拟按键）
    plus.navigator.setFullscreen(true);

    // 5. 屏幕旋转后重新渲染思维导图
    plus.screen.addEventListener('orientationchange', function() {
        mermaid.init(undefined, '.mermaid');
    }, false);
});