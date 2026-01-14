// js/data.js - Part 1

// ==========================================
// 1. 书籍配置 (Books Configuration)
// ==========================================
const books = {
    'b1': {
        title: '必修 第一册',
        status: 'active',
        color: '#3498db',
        icon: '🌍',
        desc: '宇宙 · 地球 · 地貌 · 植被土壤 · 灾害'
    },
    'b2': {
        title: '必修 第二册',
        status: 'active',
        color: '#d35400',
        icon: '🔥',
        desc: '人口 · 城镇 · 产业 · 交通 · 环境'
    },
    'xb1': {
        title: '选择性必修1',
        status: 'active',
        color: '#27ae60',
        icon: '🐶',
        desc: '自然地理基础 (爱宠主题)'
    },
    'xb2': {
        title: '选择性必修2',
        status: 'active',
        color: '#9b59b6',
        icon: '🐰',
        desc: '区域发展 (彼得兔主题)'
    },
    'xb3': {
        title: '选择性必修3',
        status: 'active',
        color: '#e74c3c',
        icon: '🐼',
        desc: '资源与国家安全 (功夫熊猫主题)'
    }
};

// ==========================================
// 2. 思维导图配置 (Mindmaps Configuration)
// 注意：使用反引号 (`) 处理多行字符串，这是解决 Syntax Error 的关键
// ==========================================
const mindmaps = {
    // --- 必修一 (完整版) ---
        'b1': `graph TB
        Root["🌍 必修第一册"]:::rootClass
        
        %% --- 第一章 宇宙中的地球 ---
        subgraph C1 ["第一章 宇宙中的地球"]
            direction TB
            C1S1("1.1 宇宙环境"):::activeNode
            C1S2("1.2 太阳对地球的影响"):::activeNode
            C1S3("1.3 地球的历史"):::activeNode
            C1S4("1.4 地球的圈层结构"):::activeNode
            C1QR("问题: 火星移民"):::specialNode
            C1S1 --> C1S2 --> C1S3 --> C1S4 --> C1QR
        end
    
        %% --- 第二章 地球上的大气 ---
        subgraph C2 ["第二章 地球上的大气"]
            direction TB
            C2S1("2.1 大气组成与垂直分层"):::activeNode
            C2S2("2.2 大气受热过程"):::activeNode
            C2QR("问题: 城市热岛"):::specialNode
            C2S1 --> C2S2 --> C2QR
        end
    
        %% --- 第三章 地球上的水 ---
        subgraph C3 ["第三章 地球上的水"]
            direction TB
            C3S1("3.1 水循环"):::activeNode
            C3S2("3.2 海水的性质"):::activeNode
            C3S3("3.3 海水的运动"):::activeNode
            C3QR("问题: 海水淡化"):::specialNode
            C3S1 --> C3S2 --> C3S3 --> C3QR
        end
    
        %% --- 第四章 地貌 ---
        subgraph C4 ["第四章 地貌"]
            direction TB
            C4S1("4.1 常见地貌类型"):::activeNode
            C4S2("4.2 地貌的观察"):::activeNode
            C4QR("问题: 高铁选线"):::specialNode
            C4S1 --> C4S2 --> C4QR
        end
    
        %% --- 第五章 植被与土壤 ---
        subgraph C5 ["第五章 植被与土壤"]
            direction TB
            C5S1("5.1 植被"):::activeNode
            C5S2("5.2 土壤"):::activeNode
            C5QR("问题: 黑土保护"):::specialNode
            C5S1 --> C5S2 --> C5QR
        end
    
        %% --- 第六章 自然灾害 ---
        subgraph C6 ["第六章 自然灾害"]
            direction TB
            C6S1("6.1 气象灾害"):::activeNode
            C6S2("6.2 地质灾害"):::activeNode
            C6S3("6.3 防灾减灾"):::activeNode
            C6S4("6.4 地理信息技术"):::activeNode
            C6QR("问题: AI救援"):::specialNode
            C6S1 --> C6S2 --> C6S3 --> C6S4 --> C6QR
        end
    
        %% --- 根节点连接 ---
        Root --> C1S1
        Root --> C2S1
        Root --> C3S1
        Root --> C4S1
        Root --> C5S1
        Root --> C6S1
    
        %% --- 布局优化 ---
        C1S1 ~~~ C2S1 ~~~ C3S1 ~~~ C4S1 ~~~ C5S1 ~~~ C6S1
    
        %% --- 点击事件 ---
        click C1S1 "section_learn.html?id=c1s1" "进入课堂"
        click C1S2 "section_learn.html?id=c1s2" "进入课堂"
        click C1S3 "section_learn.html?id=c1s3" "进入课堂"
        click C1S4 "section_learn.html?id=c1s4" "进入课堂"
        click C1QR "project_research.html?bid=b1&open=0" "进入研究"
    
        click C2S1 "section_learn.html?id=c2s1" "进入课堂"
        click C2S2 "section_learn.html?id=c2s2" "进入课堂"
        click C2QR "project_research.html?bid=b1&open=1" "进入研究"
    
        click C3S1 "section_learn.html?id=c3s1" "进入课堂"
        click C3S2 "section_learn.html?id=c3s2" "进入课堂"
        click C3S3 "section_learn.html?id=c3s3" "进入课堂"
        click C3QR "project_research.html?bid=b1&open=2" "进入研究"
    
        click C4S1 "section_learn.html?id=c4s1" "进入课堂"
        click C4S2 "section_learn.html?id=c4s2" "进入课堂"
        click C4QR "project_research.html?bid=b1&open=3" "进入研究"
    
        click C5S1 "section_learn.html?id=c5s1" "进入课堂"
        click C5S2 "section_learn.html?id=c5s2" "进入课堂"
        click C5QR "project_research.html?bid=b1&open=4" "进入研究"
    
        click C6S1 "section_learn.html?id=c6s1" "进入课堂"
        click C6S2 "section_learn.html?id=c6s2" "进入课堂"
        click C6S3 "section_learn.html?id=c6s3" "进入课堂"
        click C6S4 "section_learn.html?id=c6s4" "进入课堂"
        click C6QR "project_research.html?bid=b1&open=5" "进入研究"
    
        %% --- 样式定义 ---
        classDef rootClass fill:#2c3e50,stroke:#fff,color:white,font-size:18px,stroke-width:3px;
        classDef activeNode fill:#3498db,stroke:#2980b9,color:white,cursor:pointer,rx:5,ry:5;
        classDef specialNode fill:#f39c12,stroke:#d35400,color:white,cursor:pointer,stroke-dasharray: 5 5,stroke-width:3px,font-weight:bold;
        linkStyle default stroke:#3498db,stroke-width:2px;`,
    
        // --- 必修二 (完整版) ---
        'b2': `graph TB
        Root["🔥 必修第二册"]:::rootClass
        
        %% --- 第一章 人口 ---
        subgraph C1 ["第一章 人口"]
            direction TB
            B2C1S1("1.1 人口分布"):::activeNode
            B2C1S2("1.2 人口迁移"):::activeNode
            B2C1S3("1.3 人口容量"):::activeNode
            B2C1QR("问题: 农民工"):::specialNode
            B2C1S1 --> B2C1S2 --> B2C1S3 --> B2C1QR
        end
    
        %% --- 第二章 乡村和城镇 ---
        subgraph C2 ["第二章 乡村和城镇"]
            direction TB
            B2C2S1("2.1 空间结构"):::activeNode
            B2C2S2("2.2 城镇化"):::activeNode
            B2C2S3("2.3 地域文化"):::activeNode
            B2C2QR("问题: 居住选择"):::specialNode
            B2C2S1 --> B2C2S2 --> B2C2S3 --> B2C2QR
        end
    
        %% --- 第三章 产业区位因素 ---
        subgraph C3 ["第三章 产业区位因素"]
            direction TB
            B2C3S1("3.1 农业区位"):::activeNode
            B2C3S2("3.2 工业区位"):::activeNode
            B2C3S3("3.3 服务业区位"):::activeNode
            B2C3QR("问题: 实体店"):::specialNode
            B2C3S1 --> B2C3S2 --> B2C3S3 --> B2C3QR
        end
    
        %% --- 第四章 交通运输布局 ---
        subgraph C4 ["第四章 交通运输布局"]
            direction TB
            B2C4S1("4.1 区域发展对交通影响"):::activeNode
            B2C4S2("4.2 交通对区域发展影响"):::activeNode
            B2C4QR("问题: 城市交通"):::specialNode
            B2C4S1 --> B2C4S2 --> B2C4QR
        end
    
        %% --- 第五章 环境与发展 ---
        subgraph C5 ["第五章 环境与发展"]
            direction TB
            B2C5S1("5.1 环境问题"):::activeNode
            B2C5S2("5.2 可持续发展"):::activeNode
            B2C5S3("5.3 国家战略"):::activeNode
            B2C5QR("问题: 低碳食品"):::specialNode
            B2C5S1 --> B2C5S2 --> B2C5S3 --> B2C5QR
        end
    
        %% --- 根节点连接 ---
        Root --> B2C1S1
        Root --> B2C2S1
        Root --> B2C3S1
        Root --> B2C4S1
        Root --> B2C5S1
    
        %% --- 布局优化 ---
        B2C1S1 ~~~ B2C2S1 ~~~ B2C3S1 ~~~ B2C4S1 ~~~ B2C5S1
    
        %% --- 点击事件 ---
        click B2C1S1 "section_learn.html?id=b2c1s1" "进入课堂"
        click B2C1S2 "section_learn.html?id=b2c1s2" "进入课堂"
        click B2C1S3 "section_learn.html?id=b2c1s3" "进入课堂"
        click B2C1QR "project_research.html?bid=b2&open=0" "进入研究"
    
        click B2C2S1 "section_learn.html?id=b2c2s1" "进入课堂"
        click B2C2S2 "section_learn.html?id=b2c2s2" "进入课堂"
        click B2C2S3 "section_learn.html?id=b2c2s3" "进入课堂"
        click B2C2QR "project_research.html?bid=b2&open=1" "进入研究"
    
        click B2C3S1 "section_learn.html?id=b2c3s1" "进入课堂"
        click B2C3S2 "section_learn.html?id=b2c3s2" "进入课堂"
        click B2C3S3 "section_learn.html?id=b2c3s3" "进入课堂"
        click B2C3QR "project_research.html?bid=b2&open=2" "进入研究"
    
        click B2C4S1 "section_learn.html?id=b2c4s1" "进入课堂"
        click B2C4S2 "section_learn.html?id=b2c4s2" "进入课堂"
        click B2C4QR "project_research.html?bid=b2&open=3" "进入研究"
    
        click B2C5S1 "section_learn.html?id=b2c5s1" "进入课堂"
        click B2C5S2 "section_learn.html?id=b2c5s2" "进入课堂"
        click B2C5S3 "section_learn.html?id=b2c5s3" "进入课堂"
        click B2C5QR "project_research.html?bid=b2&open=4" "进入研究"
    
        %% --- 样式定义 ---
        classDef rootClass fill:#d35400,stroke:#fff,color:white,font-size:18px,stroke-width:3px;
        classDef activeNode fill:#e67e22,stroke:#d35400,color:white,cursor:pointer,rx:5,ry:5;
        classDef specialNode fill:#f1c40f,stroke:#f39c12,color:white,cursor:pointer,stroke-dasharray: 5 5,stroke-width:3px,font-weight:bold;
        linkStyle default stroke:#d35400,stroke-width:2px;`,

    // --- 选必一 (爱宠) ---
    'xb1': `graph TB
    Root["🐶 选择性必修1"]:::rootClass
    
    %% --- 第一章 ---
    subgraph C1 ["第一章 地球的运动"]
        direction TB
        XB1C1S1("1.1 自转和公转"):::activeNode
        XB1C1S2("1.2 地理意义"):::activeNode
        XB1C1QR("问题: 人造月亮"):::specialNode
        XB1C1S1 --> XB1C1S2 --> XB1C1QR
    end

    %% --- 第二章 ---
    subgraph C2 ["第二章 地表形态"]
        direction TB
        XB1C2S1("2.1 塑造力量"):::activeNode
        XB1C2S2("2.2 构造地貌"):::activeNode
        XB1C2S3("2.3 河流地貌"):::activeNode
        XB1C2QR("问题: 崇明岛"):::specialNode
        XB1C2S1 --> XB1C2S2 --> XB1C2S3 --> XB1C2QR
    end

    %% --- 第三章 ---
    subgraph C3 ["第三章 大气的运动"]
        direction TB
        XB1C3S1("3.1 天气系统"):::activeNode
        XB1C3S2("3.2 气压带风带"):::activeNode
        XB1C3S3("3.3 气候影响"):::activeNode
        XB1C3QR("问题: 造山引雨"):::specialNode
        XB1C3S1 --> XB1C3S2 --> XB1C3S3 --> XB1C3QR
    end

    %% --- 第四章 ---
    subgraph C4 ["第四章 水的运动"]
        direction TB
        XB1C4S1("4.1 陆地水体"):::activeNode
        XB1C4S2("4.2 洋流"):::activeNode
        XB1C4S3("4.3 海气作用"):::activeNode
        XB1C4QR("问题: 南极冰山"):::specialNode
        XB1C4S1 --> XB1C4S2 --> XB1C4S3 --> XB1C4QR
    end

    %% --- 第五章 ---
    subgraph C5 ["第五章 整体性与差异性"]
        direction TB
        XB1C5S1("5.1 整体性"):::activeNode
        XB1C5S2("5.2 差异性"):::activeNode
        XB1C5QR("问题: 欧洲草坪"):::specialNode
        XB1C5S1 --> XB1C5S2 --> XB1C5QR
    end

    Root --> XB1C1S1
    Root --> XB1C2S1
    Root --> XB1C3S1
    Root --> XB1C4S1
    Root --> XB1C5S1

    %% 点击事件 (注意全部改为 .html)
    click XB1C1S1 "section_learn.html?id=xb1c1s1" "进入课堂"
    click XB1C1S2 "section_learn.html?id=xb1c1s2" "进入课堂"
    click XB1C1QR "project_research.html?bid=xb1&open=0" "进入研究"
    
    click XB1C2S1 "section_learn.html?id=xb1c2s1" "进入课堂"
    click XB1C2S2 "section_learn.html?id=xb1c2s2" "进入课堂"
    click XB1C2S3 "section_learn.html?id=xb1c2s3" "进入课堂"
    click XB1C2QR "project_research.html?bid=xb1&open=1" "进入研究"
    
    click XB1C3S1 "section_learn.html?id=xb1c3s1" "进入课堂"
    click XB1C3S2 "section_learn.html?id=xb1c3s2" "进入课堂"
    click XB1C3S3 "section_learn.html?id=xb1c3s3" "进入课堂"
    click XB1C3QR "project_research.html?bid=xb1&open=2" "进入研究"
    
    click XB1C4S1 "section_learn.html?id=xb1c4s1" "进入课堂"
    click XB1C4S2 "section_learn.html?id=xb1c4s2" "进入课堂"
    click XB1C4S3 "section_learn.html?id=xb1c4s3" "进入课堂"
    click XB1C4QR "project_research.html?bid=xb1&open=3" "进入研究"
    
    click XB1C5S1 "section_learn.html?id=xb1c5s1" "进入课堂"
    click XB1C5S2 "section_learn.html?id=xb1c5s2" "进入课堂"
    click XB1C5QR "project_research.html?bid=xb1&open=4" "进入研究"

    classDef rootClass fill:#27ae60,stroke:#fff,color:white,font-size:18px,stroke-width:3px;
    classDef activeNode fill:#2ecc71,stroke:#27ae60,color:white,cursor:pointer,rx:5,ry:5;
    classDef specialNode fill:#f1c40f,stroke:#f39c12,color:white,cursor:pointer,stroke-dasharray: 5 5,stroke-width:3px,font-weight:bold;
    linkStyle default stroke:#2ecc71,stroke-width:2px;`,
	// js/data.js - Part 2
	
	    // --- 选必二 (彼得兔) ---
	    'xb2': `graph TB
	    Root["🐰 选择性必修2"]:::rootClass
	
	    %% --- 第一章 ---
	    subgraph C1 ["第一章 区域与区域发展"]
	        direction TB
	        XB2C1S1("1.1 多种多样的区域"):::activeNode
	        XB2C1S2("1.2 整体性与关联性"):::activeNode
	        XB2C1QR("问题: 毛里求斯"):::specialNode
	        XB2C1S1 --> XB2C1S2 --> XB2C1QR
	    end
	
	    %% --- 第二章 ---
	    subgraph C2 ["第二章 资源环境与发展"]
	        direction TB
	        XB2C2S1("2.1 自然环境基础"):::activeNode
	        XB2C2S2("2.2 生态脆弱区治理"):::activeNode
	        XB2C2S3("2.3 资源枯竭型城市"):::activeNode
	        XB2C2QR("问题: 景德镇瓷都"):::specialNode
	        XB2C2S1 --> XB2C2S2 --> XB2C2S3 --> XB2C2QR
	    end
	
	    %% --- 第三章 ---
	    subgraph C3 ["第三章 城市产业与发展"]
	        direction TB
	        XB2C3S1("3.1 城市辐射功能"):::activeNode
	        XB2C3S2("3.2 产业结构变化"):::activeNode
	        XB2C3QR("问题: 汽车产业"):::specialNode
	        XB2C3S1 --> XB2C3S2 --> XB2C3QR
	    end
	
	    %% --- 第四章 ---
	    subgraph C4 ["第四章 区际联系与协调"]
	        direction TB
	        XB2C4S1("4.1 流域协调发展"):::activeNode
	        XB2C4S2("4.2 资源跨区域调配"):::activeNode
	        XB2C4S3("4.3 产业转移"):::activeNode
	        XB2C4S4("4.4 国际合作"):::activeNode
	        XB2C4QR("问题: 藏水入疆"):::specialNode
	        XB2C4S1 --> XB2C4S2 --> XB2C4S3 --> XB2C4S4 --> XB2C4QR
	    end
	
	    Root --> XB2C1S1
	    Root --> XB2C2S1
	    Root --> XB2C3S1
	    Root --> XB2C4S1
	
	    %% 布局优化
	    XB2C1S1 ~~~ XB2C2S1 ~~~ XB2C3S1 ~~~ XB2C4S1
	
	    %% 点击事件 (.html)
	    click XB2C1S1 "section_learn.html?id=xb2c1s1" "进入课堂"
	    click XB2C1S2 "section_learn.html?id=xb2c1s2" "进入课堂"
	    click XB2C1QR "project_research.html?bid=xb2&open=0" "进入研究"
	    
	    click XB2C2S1 "section_learn.html?id=xb2c2s1" "进入课堂"
	    click XB2C2S2 "section_learn.html?id=xb2c2s2" "进入课堂"
	    click XB2C2S3 "section_learn.html?id=xb2c2s3" "进入课堂"
	    click XB2C2QR "project_research.html?bid=xb2&open=3" "进入研究"
	    
	    click XB2C3S1 "section_learn.html?id=xb2c3s1" "进入课堂"
	    click XB2C3S2 "section_learn.html?id=xb2c3s2" "进入课堂"
	    click XB2C3QR "project_research.html?bid=xb2&open=6" "进入研究"
	    
	    click XB2C4S1 "section_learn.html?id=xb2c4s1" "进入课堂"
	    click XB2C4S2 "section_learn.html?id=xb2c4s2" "进入课堂"
	    click XB2C4S3 "section_learn.html?id=xb2c4s3" "进入课堂"
	    click XB2C4S4 "section_learn.html?id=xb2c4s4" "进入课堂"
	    click XB2C4QR "project_research.html?bid=xb2&open=9" "进入研究"
	
	    classDef rootClass fill:#9b59b6,stroke:#fff,color:white,font-size:18px,stroke-width:3px;
	    classDef activeNode fill:#a569bd,stroke:#8e44ad,color:white,cursor:pointer,rx:5,ry:5;
	    classDef specialNode fill:#f39c12,stroke:#d35400,color:white,cursor:pointer,stroke-dasharray: 5 5,stroke-width:3px,font-weight:bold;
	    linkStyle default stroke:#9b59b6,stroke-width:2px;`,
	
	    // --- 选必三 (功夫熊猫) ---
	    'xb3': `graph TB
	    Root["🐼 选择性必修3"]:::rootClass
	
	    %% --- 第一章 ---
	    subgraph C1 ["第一章 自然资源与安全"]
	        direction TB
	        XB3C1S1("1.1 自然资源与人类"):::activeNode
	        XB3C1S2("1.2 石油资源与安全"):::activeNode
	        XB3C1S3("1.3 煤炭资源与安全"):::activeNode
	        XB3C1QR("问题: 耕地红线"):::specialNode
	        XB3C1S1 --> XB3C1S2 --> XB3C1S3 --> XB3C1QR
	    end
	
	    %% --- 第二章 ---
	    subgraph C2 ["第二章 资源安全"]
	        direction TB
	        XB3C2S1("2.1 资源安全影响"):::activeNode
	        XB3C2S2("2.2 中国能源安全"):::activeNode
	        XB3C2S3("2.3 耕地与粮食安全"):::activeNode
	        XB3C2S4("2.4 海洋空间与安全"):::activeNode
	        XB3C2QR("问题: 藏粮于地"):::specialNode
	        XB3C2S1 --> XB3C2S2 --> XB3C2S3 --> XB3C2S4 --> XB3C2QR
	    end
	
	    %% --- 第三章 ---
	    subgraph C3 ["第三章 环境安全"]
	        direction TB
	        XB3C3S1("3.1 环境安全影响"):::activeNode
	        XB3C3S2("3.2 环境污染与安全"):::activeNode
	        XB3C3S3("3.3 生态保护与安全"):::activeNode
	        XB3C3S4("3.4 全球气候与安全"):::activeNode
	        XB3C3QR("问题: 发展核能"):::specialNode
	        XB3C3S1 --> XB3C3S2 --> XB3C3S3 --> XB3C3S4 --> XB3C3QR
	    end
	
	    %% --- 第四章 ---
	    subgraph C4 ["第四章 战略与行动"]
	        direction TB
	        XB3C4S1("4.1 走向生态文明"):::activeNode
	        XB3C4S2("4.2 国家战略举措"):::activeNode
	        XB3C4S3("4.3 国际合作"):::activeNode
	        XB3C4QR("问题: 环保问卷"):::specialNode
	        XB3C4S1 --> XB3C4S2 --> XB3C4S3 --> XB3C4QR
	    end
	
	    Root --> XB3C1S1
	    Root --> XB3C2S1
	    Root --> XB3C3S1
	    Root --> XB3C4S1
	
	    XB3C1S1 ~~~ XB3C2S1 ~~~ XB3C3S1 ~~~ XB3C4S1
	
	    %% 点击事件 (.html)
	    click XB3C1S1 "section_learn.html?id=xb3c1s1" "进入课堂"
	    click XB3C1S2 "section_learn.html?id=xb3c1s2" "进入课堂"
	    click XB3C1S3 "section_learn.html?id=xb3c1s3" "进入课堂"
	    click XB3C1QR "project_research.html?bid=xb3&open=0" "进入研究"
	    
	    click XB3C2S1 "section_learn.html?id=xb3c2s1" "进入课堂"
	    click XB3C2S2 "section_learn.html?id=xb3c2s2" "进入课堂"
	    click XB3C2S3 "section_learn.html?id=xb3c2s3" "进入课堂"
	    click XB3C2S4 "section_learn.html?id=xb3c2s4" "进入课堂"
	    click XB3C2QR "project_research.html?bid=xb3&open=3" "进入研究"
	    
	    click XB3C3S1 "section_learn.html?id=xb3c3s1" "进入课堂"
	    click XB3C3S2 "section_learn.html?id=xb3c3s2" "进入课堂"
	    click XB3C3S3 "section_learn.html?id=xb3c3s3" "进入课堂"
	    click XB3C3S4 "section_learn.html?id=xb3c3s4" "进入课堂"
	    click XB3C3QR "project_research.html?bid=xb3&open=6" "进入研究"
	    
	    click XB3C4S1 "section_learn.html?id=xb3c4s1" "进入课堂"
	    click XB3C4S2 "section_learn.html?id=xb3c4s2" "进入课堂"
	    click XB3C4S3 "section_learn.html?id=xb3c4s3" "进入课堂"
	    click XB3C4QR "project_research.html?bid=xb3&open=9" "进入研究"
	
	    classDef rootClass fill:#c0392b,stroke:#fff,color:white,font-size:18px,stroke-width:3px;
	    classDef activeNode fill:#e74c3c,stroke:#c0392b,color:white,cursor:pointer,rx:5,ry:5;
	    classDef specialNode fill:#f1c40f,stroke:#d35400,color:white,cursor:pointer,stroke-dasharray: 5 5,stroke-width:3px,font-weight:bold;
	    linkStyle default stroke:#c0392b,stroke-width:2px;`
	};
	
	// ==========================================
	// 3. 问题研究专题库 (Research Projects)
	// ==========================================
	const research_projects = {
	    'b1': [],
	    'b2': [],
	    
	    // --- XB1 选必一 (爱宠) ---
	    'xb1': [
	        {
	            id: 'xb1_c1_p1', 
	            icon: '🌕', 
	            title: '1.1 人类是否需要人造月亮', 
	            points: '背景：俄罗斯反射镜试验。支持：节能、救灾。反对：光污染、生物节律。', 
	            value: '辩证看待技术与生态伦理。'
	        },
	        {
	            id: 'xb1_c2_p1', 
	            icon: '🏝️', 
	            title: '2.1 崇明岛的未来', 
	            points: '北积南冲，人类围垦加速岛屿生长。', 
	            value: '自然与人类对地貌的共同塑造。'
	        },
	        {
	            id: 'xb1_c3_p1', 
	            icon: '⛰️', 
	            title: '3.1 阿联酋“造山引雨”', 
	            points: '设想造山阻挡水汽。挑战：工程难度大。', 
	            value: '改造自然的边界。'
	        },
	        {
	            id: 'xb1_c4_p1', 
	            icon: '🧊', 
	            title: '4.1 南极冰山解决缺水', 
	            points: '利用南极淡水。挑战：运输与生态风险。', 
	            value: '跨区域资源调配的极限设想。'
	        },
	        {
	            id: 'xb1_c5_p1', 
	            icon: '🌱', 
	            title: '5.1 欧洲草坪是否合适', 
	            points: '耗水量大，水土不服。', 
	            value: '因地制宜的生态观。'
	        }
	    ],
	}
// js/data.js - Part 3

// ==========================================
// 4. 课程内容总库 (Courses Content)
// ==========================================
const courses = {
    // ------------------------------------
    // 必修一 B1
    // ------------------------------------
    'c1s1': {
        title: '1.1 宇宙中的地球',
        ppt: [
            {role:'nick', title:'宇宙特工任务', content:'嗨！我是尼克狐。欢迎来到地理特工局。<br>第一项任务：搞清楚地球在宇宙中的位置。<br>看这张图，天体系统是有等级的。<br>地球 < 地月系 < 太阳系 < 银河系 < 可观测宇宙。<br>就像俄罗斯套娃一样！', visual:'icon_star', anim_type:'fadeIn'},
            {role:'judy', title:'太阳系的八大行星', content:'我是朱迪兔。太阳系有八大行星。<br>离太阳由近到远：水、金、地、火、木、土、天王、海王。<br><b>口诀：</b> 水金地火木土天海。<br>小行星带在哪里？在火星和木星之间哦！', visual:'icon_map_scatter', anim_type:'slideInLeft'},
            {role:'flash', title:'特殊的地球', content:'我是闪电...地球...是...独特...的。<br>因为它...有...生命！<br><b>原因：</b><br>1. 外部：安全的轨道，稳定的光照。<br>2. 内部：温度适宜（距离适中），有大气（体积质量适中），有液态水。', visual:'icon_life', anim_type:'zoomIn'},
            {role:'bogo', title:'太阳辐射的影响', content:'我是牛局长。太阳源源不断地向地球输送能量。<br>1. <b>直接提供</b>：光和热，让植物生长。<br>2. <b>动力来源</b>：风、流水、波浪的能量都来自太阳。<br>3. <b>能源</b>：煤、石油其实是古代存下来的太阳能！', visual:'icon_fire', anim_type:'fadeInUp'},
            {role:'nick', title:'太阳活动的捣乱', content:'太阳有时候也会发脾气。<br>1. <b>光球层</b>：黑子（变暗了）。<br>2. <b>色球层</b>：耀斑（突然变亮）、日珥。<br>3. <b>日冕层</b>：太阳风。<br><b>影响：</b> 干扰无线电短波通讯，产生磁暴（指南针失灵），两极出现极光。', visual:'icon_alert_red', anim_type:'shake'},
            {role:'judy', title:'地层与化石', content:'地球有本日记，叫<b>地层</b>。<br>地层里的字，叫<b>化石</b>。<br><b>规律：</b> 下层老，上层新。<br>化石能告诉我们当时的环境：<br>有鱼化石 -> 说明以前是海洋；<br>有恐龙化石 -> 说明以前是中生代陆地。', visual:'icon_search', anim_type:'fadeIn'},
            {role:'flash', title:'地球的历史', content:'地球...46亿岁...了。<br>1. <b>前寒武纪</b>：蓝细菌制造氧气。<br>2. <b>古生代</b>：三叶虫、鱼类、两栖类，蕨类造煤。<br>3. <b>中生代</b>：恐龙称霸，裸子植物。<br>4. <b>新生代</b>：哺乳动物，被子植物，人类出现。', visual:'icon_time', anim_type:'rotateIn'},
            {role:'bogo', title:'地球的圈层结构', content:'地球像个煮熟的鸡蛋。<br><b>内部圈层：</b><br>1. <b>地壳</b>（蛋壳）：薄，硅铝层。<br>2. <b>地幔</b>（蛋清）：上地幔有软流层（岩浆源地）。<br>3. <b>地核</b>（蛋黄）：铁镍核心，温度极高。<br><b>莫霍界面</b>：地壳/地幔分界；<b>古登堡界面</b>：地幔/地核分界。', visual:'icon_earth_layers', anim_type:'slideInRight'},
            {role:'nick', title:'外部圈层', content:'地球外面还裹着几层衣服。<br>1. <b>大气圈</b>：保护伞。<br>2. <b>水圈</b>：连续但不规则。<br>3. <b>生物圈</b>：最活跃，渗透在其他圈层中。<br>它们相互联系，缺一不可。', visual:'icon_integration', anim_type:'zoomIn'},
            {role:'judy', title:'全节总结', content:'特工们，记住：<br>1. 宇宙环境：天体系统等级，八大行星顺序。<br>2. 太阳对地球：辐射提供能量，活动干扰地球。<br>3. 地球历史：化石记录，演化阶段。<br>4. 圈层结构：内三层外三层。<br>准备好接受考核了吗？', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'距离地球最近的自然天体是？', opt:['A. 太阳','B. 月球','C. 金星','D. 火星'], ans:'B', expl:'月球是地球的天然卫星，距离最近。'},
                {type:'single', q:'太阳能量来源于？', opt:['A. 核裂变','B. 核聚变','C. 化学燃烧','D. 地热'], ans:'B', expl:'太阳内部高温高压下发生核聚变反应。'},
                {type:'single', q:'太阳活动最激烈的显示是？', opt:['A. 黑子','B. 耀斑','C. 日珥','D. 太阳风'], ans:'B', expl:'耀斑是色球层突然增亮的现象，能量巨大。'},
                {type:'single', q:'恐龙繁盛的地质年代是？', opt:['A. 前寒武纪','B. 古生代','C. 中生代','D. 新生代'], ans:'C', expl:'中生代被称为“爬行动物的时代”。'},
                {type:'single', q:'软流层位于？', opt:['A. 地壳','B. 上地幔上部','C. 下地幔','D. 地核'], ans:'B', expl:'一般认为软流层是岩浆的发源地，位于上地幔上部。'},
                {type:'single', q:'大气圈中与人类关系最密切的是？', opt:['A. 对流层','B. 平流层','C. 高层大气','D. 电离层'], ans:'A', expl:'对流层天气现象复杂，与人类生活最密切。'},
                {type:'single', q:'下列属于可再生资源的是？', opt:['A. 煤炭','B. 石油','C. 太阳能','D. 天然气'], ans:'C', expl:'太阳能取之不尽，属于可再生能源。'},
                {type:'multi', q:'【多选】地球存在生命的条件包括？', opt:['A. 适宜的温度','B. 适合生物呼吸的大气','C. 液态水','D. 地球体积巨大'], ans:'ABC', expl:'地球体积质量适中，能吸附大气，而不是巨大。'},
                {type:'multi', q:'【多选】太阳活动对地球的影响？', opt:['A. 极光','B. 磁暴','C. 无线电短波通讯中断','D. 地震'], ans:'ABC', expl:'地震主要由地球内力作用引起，与太阳活动无直接关系。'},
                {type:'multi', q:'【多选】地球的外部圈层包括？', opt:['A. 大气圈','B. 水圈','C. 生物圈','D. 岩石圈'], ans:'ABC', expl:'岩石圈包括地壳和上地幔顶部，属于内部圈层。'}
            ],
            part_b: [
                {title:'🦊 尼克的推理', q:'如果太阳突然熄灭，地球上先消失的是什么？', ans:'<b>光和热。</b><br>8分钟后，地球将陷入黑暗。接着气温骤降，植物停止光合作用，食物链崩溃。'},
                {title:'🐰 朱迪的化石', q:'如果你在山上捡到了贝壳化石，这说明了什么？', ans:'<b>沧海桑田。</b><br>说明这里曾经是海洋，后来地壳抬升变成了高山。'},
                {title:'🦥 闪电的旅行', q:'我想挖个洞...穿过...地心，会...经过...哪些...层？', ans:'<b>地壳 -> 莫霍界面 -> 地幔 -> 古登堡界面 -> 外核 -> 内核。</b><br>不过闪电你肯定挖不到，地核温度6000度呢！'}
            ]
        }
    },
// js/data.js - Part 4

    // ------------------------------------
    // 必修二 B2
    // ------------------------------------
    'b2c1s1': {
        title: '1.1 人口分布',
        ppt: [
            {role:'nezha', title:'哪吒查户口', content:'我是哪吒。师父让我查查人都住哪儿。<br>世界人口70多亿，分布极不平衡！<br><b>四大稠密区</b>：东亚、南亚、欧洲西部、北美东部。<br><b>四大稀疏区</b>：高纬（冷）、雨林（湿热）、沙漠（干）、高原（高寒）。', visual:'icon_map_scatter', anim_type:'fadeIn'},
            {role:'aobing', title:'自然因素的影响', content:'我是敖丙。人喜欢住舒服的地方。<br>1. <b>气候</b>：温暖湿润（中低纬度沿海）。<br>2. <b>地形</b>：平原地区（占50%以上人口）。<br>3. <b>水源</b>：河流沿岸（供水、交通）。<br>像我的东海龙宫，除了虾兵蟹将，也没人愿意住！', visual:'icon_climate_soil', anim_type:'slideInLeft'},
            {role:'taiyi', title:'人文因素的影响', content:'我是太乙真人。除了自然，还要看发展。<br>1. <b>经济</b>：经济越发达，人口越密集（如长三角）。<br>2. <b>交通</b>：交通便利的地方人多。<br>3. <b>历史</b>：开发早的地方人多（如黄河流域）。<br>这叫“人往高处走”！', visual:'icon_money', anim_type:'zoomIn'},
            {role:'lijing', title:'中国人口分布', content:'我是李靖。看“<b>胡焕庸线</b>”（黑河—腾冲线）。<br>东南半壁：面积43%，人口94%（人多地少）。<br>西北半壁：面积57%，人口6%（地广人稀）。<br>这条线80多年了，基本没变过！', visual:'icon_hu_line', anim_type:'fadeInUp'},
            {role:'nezha', title:'全节总结', content:'特工们，记住：<br>1. 人口分布不均：四密四疏。<br>2. 影响因素：自然（气地水）+ 人文（经交历）。<br>3. 中国：胡焕庸线定格局。<br>准备好接受考核了吗？', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'世界人口最稠密的地区是？', opt:['A. 亚马孙平原','B. 青藏高原','C. 亚洲东部','D. 南极洲'], ans:'C', expl:'亚洲东部自然条件优越，开发历史悠久，人口稠密。'},
                {type:'single', q:'影响人口分布最基本的因素是？', opt:['A. 自然环境因素','B. 政治因素','C. 军事因素','D. 文化因素'], ans:'A', expl:'自然环境（气候、地形、水）是人类生存的基础。'},
                {type:'single', q:'著名的“胡焕庸线”连接的两个城市是？', opt:['A. 漠河—三亚','B. 黑河—腾冲','C. 北京—拉萨','D. 哈尔滨—昆明'], ans:'B', expl:'黑河—腾冲线是我国重要的人口地理分界线。'},
                {type:'single', q:'下列地区中，人口分布较为稀疏的是？', opt:['A. 恒河平原','B. 西欧平原','C. 撒哈拉沙漠','D. 长江中下游平原'], ans:'C', expl:'沙漠地区气候干旱，水源缺乏，不适宜人类居住。'},
                {type:'single', q:'在热带地区，人口主要集中分布在？', opt:['A. 平原','B. 盆地','C. 高原','D. 海边'], ans:'C', expl:'热带平原气候湿热，而高原气候凉爽，适宜居住（如巴西高原）。'},
                {type:'single', q:'我国人口分布的特点是？', opt:['A. 东多西少','B. 西多东少','C. 北多南少','D. 均匀分布'], ans:'A', expl:'胡焕庸线揭示了我国人口东密西疏的格局。'},
                {type:'single', q:'随着科技进步，自然因素对人口分布的影响？', opt:['A. 越来越大','B. 越来越小','C. 没有变化','D. 决定性增强'], ans:'B', expl:'科技增强了人类改造自然的能力，使自然因素的限制作用减弱。'},
                {type:'multi', q:'【多选】影响人口分布的人文因素包括？', opt:['A. 经济发展水平','B. 交通运输条件','C. 历史文化','D. 地形地貌'], ans:'ABC', expl:'地形地貌属于自然因素。'},
                {type:'multi', q:'【多选】人口稀疏区通常具备的自然特征？', opt:['A. 极端干旱','B. 过于湿热','C. 终年严寒','D. 地势平坦'], ans:'ABC', expl:'地势平坦通常利于人口集聚。'},
                {type:'multi', q:'【多选】胡焕庸线东南侧人口稠密的原因？', opt:['A. 地形以平原丘陵为主','B. 气候温暖湿润','C. 经济发达','D. 交通便利'], ans:'ABCD', expl:'东南侧自然和人文条件均优越。'}
            ],
            part_b: [
                {title:'🐲 敖丙的疑问', q:'为什么巴西的人口不爱住亚马孙平原（平地），反而爱住巴西高原（高地）？', ans:'<b>气候选择。</b><br>亚马孙平原是热带雨林气候，过于湿热，容易滋生病菌。巴西高原海拔高，气候凉爽，更适合人类居住。'},
                {title:'🔥 哪吒的发现', q:'塔里木盆地的人口为什么都像珠子一样串在盆地边缘？', ans:'<b>水源决定。</b><br>盆地内部是沙漠，边缘有高山冰雪融水形成的绿洲。有水才能种地和生活，所以人口和城市都分布在绿洲上。'},
                {title:'🍶 太乙的计算', q:'如果把全中国的人都搬到西北去，会发生什么？（提示：环境承载力）', ans:'<b>生态崩溃。</b><br>西北地区水资源短缺，生态脆弱，环境承载力低。根本养活不了这么多人，会导致严重的生态灾难。'}
            ]
        }
    },
// js/data.js - Part 5

    // ------------------------------------
    // 选必一 XB1 (爱宠主题)
    // ------------------------------------
    
    // --- XB1 1.1 地球的自转和公转 ---
    'xb1c1s1': {
        title: '1.1 地球的自转和公转',
        ppt: [
            {role:'max', title:'欢迎加入特工队！', content:'嘿！我是<b>麦克</b>。欢迎来到“爱宠特工队”地理分部。<br>今天我们要执行任务：<b>破解地球运动的密码</b>。<br>地球这家伙一刻不停地在动，它不仅自己转（自转），还绕着太阳跑（公转）。<br>这不仅决定了我们什么时候睡觉，还决定了什么时候换毛！', visual:'icon_earth', anim_type:'fadeIn'},
            {role:'snowball', title:'自转：疯狂的陀螺', content:'我是<b>小白</b>！地球就像我一样，是个疯狂的陀螺！<br><b>旋转中心：</b> 地轴（北端指向北极星附近）。<br><b>方向：</b> 自西向东。<br>从北极看是<b>逆时针</b>（N逆），从南极看是<b>顺时针</b>（S顺）。<br>记住：南顺北逆，别转晕了！', visual:'css_rotation', anim_type:'rotateIn'},
            {role:'chloe', title:'自转周期：挑剔的时间', content:'我是<b>克洛伊</b>。关于“一天”有多长，我可是很挑剔的。<br>1. <b>太阳日</b>：24小时。以太阳为参照，是你们人类用的时间。<br>2. <b>恒星日</b>：23时56分4秒。以遥远恒星为参照，这才是地球<b>真正的自转周期</b>。<br>少那3分56秒去哪了？被公转吃掉了。', visual:'css_clock', anim_type:'fadeInLeft'},
            {role:'duke', title:'自转速度：谁跑得快？', content:'我是<b>杜老大</b>。地球上各地的速度不一样哦。<br>1. <b>角速度</b>：除了南北极点是0，其他地方都一样，约15°/小时。<br>2. <b>线速度</b>：<b>赤道最快</b>（1670km/h），向两极递减，极点为0。<br>想减肥？去赤道甩得快（离心力大）！', visual:'css_speed_map', anim_type:'zoomIn'},
            {role:'gidget', title:'公转：浪漫的圆舞曲', content:'我是<b>啾啾</b>。地球绕着太阳跳舞，这叫公转。<br><b>轨道：</b> 近似正圆的椭圆。<br><b>方向：</b> 也是自西向东。<br><b>周期：</b> 一年。<br><b>回归年</b>：365日5时48分46秒（我们用的年）。<br><b>恒星年</b>：365日6时9分10秒（真正的周期）。', visual:'css_orbit', anim_type:'fadeInRight'},
            {role:'max', title:'公转速度：快慢节奏', content:'跳舞讲究节奏。<br><b>近日点</b>（1月初）：离太阳近，跑得<b>快</b>（冬至附近）。<br><b>远日点</b>（7月初）：离太阳远，跑得<b>慢</b>（夏至附近）。<br>口诀：<b>近快远慢</b>。<br>这就是为什么北半球的冬天比夏天短几天的原因！', visual:'css_perihelion', anim_type:'pulse'},
            {role:'snowball', title:'黄赤交角：搞事情的角度', content:'地球不是直着身子跑的，它是歪的！<br><b>赤道平面</b>（自转）和<b>黄道平面</b>（公转）有个夹角，叫<b>黄赤交角</b>。<br>目前度数：<b>23°26′</b>。<br>正是这个倾斜，导致了太阳直射点在地球上跑来跑去！', visual:'css_angle', anim_type:'swing'},
            {role:'duke', title:'太阳直射点的回归运动', content:'太阳直射点就像我追的球，在南北回归线之间来回跑。<br><b>夏至 (6.22)</b>：直射北回归线 (23°26′N)。<br><b>冬至 (12.22)</b>：直射南回归线 (23°26′S)。<br><b>春/秋分</b>：直射赤道。<br>这个周期叫<b>回归年</b>。', visual:'css_sun_move', anim_type:'slideInUp'},
            {role:'gidget', title:'特别关注：郭守敬', content:'我们的祖先很厉害！<br>元代的<b>郭守敬</b>编了《授时历》。<br>他测出的回归年长度是365.2425日，和现代科技测的一模一样！<br>但他比西方早了300年！为中国智慧点赞！', visual:'icon_star', anim_type:'fadeIn'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 自转：南顺北逆，角速度相等线速度赤道大。<br>2. 公转：1月初近日点快，7月初远日点慢。<br>3. 黄赤交角：23°26′，决定了太阳直射点的回归。<br>准备好接受考核了吗？', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'地球自转的真正周期是？', opt:['A. 24小时','B. 23时56分4秒','C. 365日','D. 一个太阳日'], ans:'B', expl:'恒星日（23时56分4秒）是地球自转360°的时间，是真正周期。'},
                {type:'single', q:'关于地球自转速度的说法，正确的是？', opt:['A. 全球各地角速度都相等','B. 纬度越高，线速度越大','C. 赤道线速度最大','D. 南北极点角速度最大'], ans:'C', expl:'线速度由赤道向两极递减。极点角速度和线速度均为0。'},
                {type:'single', q:'从南极上空看，地球自转方向是？', opt:['A. 顺时针','B. 逆时针','C. 自东向西','D. 垂直向下'], ans:'A', expl:'北逆南顺。'},
                {type:'single', q:'地球公转速度最快的时候是？', opt:['A. 1月初','B. 7月初','C. 夏至日','D. 冬至日'], ans:'A', expl:'1月初位于近日点，公转速度最快。'},
                {type:'single', q:'目前的黄赤交角度数是？', opt:['A. 66°34′','B. 23°26′','C. 90°','D. 0°'], ans:'B', expl:'黄赤交角约为23°26′。'},
                {type:'single', q:'当太阳直射点位于北回归线时，是北半球的？', opt:['A. 春分日','B. 夏至日','C. 秋分日','D. 冬至日'], ans:'B', expl:'夏至日太阳直射北回归线。'},
                {type:'single', q:'郭守敬编制的历法是？', opt:['A. 《太初历》','B. 《大衍历》','C. 《授时历》','D. 《十二气历》'], ans:'C', expl:'元代郭守敬编制了《授时历》。'},
                {type:'multi', q:'【多选】关于太阳直射点的移动，正确的是？', opt:['A. 在南北回归线之间移动','B. 周期为一个回归年','C. 春分日直射赤道','D. 冬至日直射北回归线'], ans:'ABC', expl:'冬至日直射南回归线。'},
                {type:'multi', q:'【多选】地球公转的特征包括？', opt:['A. 轨道是椭圆','B. 方向是自西向东','C. 太阳位于椭圆中心','D. 周期是一年'], ans:'ABD', expl:'太阳位于椭圆的一个焦点上，不是中心。'},
                {type:'multi', q:'【多选】下列关于恒星日与太阳日的区别？', opt:['A. 参照物不同','B. 恒星日比太阳日短','C. 太阳日是昼夜交替周期','D. 恒星日是生活通用时间'], ans:'ABC', expl:'生活中通用的是太阳日（24小时）。'}
            ],
            part_b: [
                {title:'🐶 麦克的推理', q:'如果黄赤交角变大（比如变成30°），地球上热带和寒带的范围会怎么变？', ans:'<b>变大。</b><br>热带范围是南北回归线之间（2×黄赤交角），寒带是极圈以内（90°-黄赤交角）。<br>交角变大 -> 回归线度数变大 -> 热带变大；极圈度数变小（90-30=60）-> 寒带范围扩大。温带则变小。'},
                {title:'🐰 小白的计算', q:'发射卫星时，为了省燃料，应该选择在什么纬度、向什么方向发射？', ans:'<b>低纬度（赤道附近），向东发射。</b><br>原因：赤道自转线速度最大，向东发射可以利用地球自转的离心力，获得最大的初速度，从而节省燃料。'},
                {title:'🐱 克洛伊的疑问', q:'既然1月初地球离太阳最近，为什么北半球反而是冬天？', ans:'因为<b>季节主要由太阳高度（直射点位置）决定</b>，而不是日地距离。<br>1月初虽然距离近，但太阳直射南半球，北半球正午太阳高度小，白昼短，接收的热量少，所以是冬天。'}
            ]
        }
    },

    // --- XB1 1.2 地球运动的地理意义 ---
    'xb1c1s2': {
        title: '1.2 地球运动的地理意义',
        ppt: [
            {role:'max', title:'时间去哪了？', content:'特工们！有个神秘案件：<br>美国空军F-22战机飞越180°经线时，系统突然崩溃了。<br>为什么？因为它们忽略了<b>“国际日界线”</b>！<br>地球自转带来了昼夜交替和时差，搞不清时间，可是会迷失在时空里的！', visual:'icon_plane', anim_type:'fadeIn'},
            {role:'snowball', title:'昼夜交替：光明与黑暗', content:'我是<b>小白</b>。太阳只能照亮地球的一半。<br><b>昼半球</b>：亮的那半。<br><b>夜半球</b>：黑的那半。<br><b>晨昏线</b>：白天和黑夜的分界线。<br>顺着地球转，从黑进白叫<b>晨线</b>（日出），从白进黑叫<b>昏线</b>（日落）。', visual:'css_day_night', anim_type:'rotateIn'},
            {role:'chloe', title:'时差：不想起床', content:'我是<b>克洛伊</b>。地球自西向东转，<b>东边比西边先看到太阳</b>。<br>所以东边的时间比西边早。<br><b>地方时</b>：经度每差15°，时间差1小时。<br>这就是为什么我在纽约吃晚饭，麦克在伦敦已经睡着了。', visual:'css_clock', anim_type:'fadeInLeft'},
            {role:'duke', title:'时区与区时', content:'为了方便，全球分了24个时区。<br>每个时区跨15°。<br><b>中央经线</b>的地方时，就是这个时区的<b>区时</b>。<br>北京在东八区，用的是120°E的地方时。<br>公式：<b>所求区时 = 已知区时 ± 时区差</b>（东加西减）。', visual:'icon_chart', anim_type:'zoomIn'},
            {role:'gidget', title:'国际日界线：穿越时空', content:'这里有条神奇的线：<b>180°经线</b>。<br>从东十二区向东跨过它，进入西十二区：<b>日期减一天</b>（回到昨天）。<br>从西十二区向西跨过它，进入东十二区：<b>日期加一天</b>（进入明天）。<br>F-22战机就是因为没处理好日期变更才死机的！', visual:'css_date_line', anim_type:'slideInRight'},
            {role:'norman', title:'地转偏向力：路痴的借口', content:'我是<b>诺曼</b>。在地球上跑直线，会跑偏！<br>受<b>地转偏向力</b>影响：<br><b>北半球向右偏</b>。<br><b>南半球向左偏</b>。<br>赤道不偏。<br>这影响了风向、洋流，甚至河流哪边被冲刷得更厉害。', visual:'css_coriolis', anim_type:'pulse'},
            {role:'snowball', title:'昼夜长短的变化', content:'夏天白天长，冬天晚上长，为啥？<br><b>夏至</b>：北半球昼最长，北极圈极昼。<br><b>冬至</b>：北半球夜最长，北极圈极夜。<br><b>春秋分</b>：全球昼夜等长。<br>规律：太阳直射哪个半球，哪个半球就昼长夜短。', visual:'css_day_length', anim_type:'fadeIn'},
            {role:'max', title:'正午太阳高度', content:'影子什么时候最短？正午！<br><b>规律：</b> 离直射点越近，高度角越大，影子越短。<br>夏至日，北回归线以北达到最大值。<br>冬至日，北半球达到最小值。<br>这决定了楼间距，不想被前楼挡光，楼间距得大点！', visual:'css_sun_height', anim_type:'slideInUp'},
            {role:'duke', title:'四季与五带', content:'根据热量，地球分五带：<br><b>热带</b>（有直射）、<b>温带</b>（四季分明）、<b>寒带</b>（有极昼极夜）。<br>我国大部分在北温带。<br>二十四节气，就是古人根据地球位置总结的智慧，指导我们什么时候种地！', visual:'icon_tree', anim_type:'fadeIn'},
            {role:'max', title:'全节总结', content:'特工们，记住：<br>1. 东早西晚算时差，日界线上换日期。<br>2. 北右南左地转力。<br>3. 直射点跑，昼夜长短和太阳高度跟着变。<br>4. 四季五带由此生。<br>现在，开始终极考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'北京时间是指？', opt:['A. 北京的地方时','B. 120°E的地方时','C. 东八区的区时','D. B和C'], ans:'D', expl:'北京时间是东八区区时，即120°E的地方时，不是北京所在经度（116°E）的地方时。'},
                {type:'single', q:'从东十二区向东越过国际日界线，日期应该？', opt:['A. 加上一天','B. 减去一天','C. 不变','D. 减去一小时'], ans:'B', expl:'东十二区是最早的，西十二区是最晚的（昨天），向东跨过日界线是回到昨天，减一天。'},
                {type:'single', q:'北半球夏至日，下列说法正确的是？', opt:['A. 北极圈出现极夜','B. 北京昼长夜短','C. 太阳直射南回归线','D. 地球公转速度最快'], ans:'B', expl:'夏至日直射北回归线，北半球昼长夜短。'},
                {type:'single', q:'由于地转偏向力，长江口南岸和北岸相比？', opt:['A. 南岸侵蚀严重','B. 北岸侵蚀严重','C. 两岸一样','D. 南岸堆积'], ans:'A', expl:'北半球向右偏，江水偏向南岸（右岸），侵蚀严重；北岸堆积。'},
                {type:'single', q:'如果不考虑地形，在我国建房，为了采光好，大门和窗户应朝向？', opt:['A. 东','B. 南','C. 西','D. 北'], ans:'B', expl:'我国位于北半球，正午太阳在南方，朝南采光好。'},
                {type:'single', q:'晨昏线上，太阳高度角是？', opt:['A. 0°','B. 90°','C. 45°','D. 23°26′'], ans:'A', expl:'晨昏线是昼夜分界，太阳刚出或刚落，高度为0。'},
                {type:'single', q:'二十四节气中，白昼最长的是？', opt:['A. 春分','B. 夏至','C. 秋分','D. 冬至'], ans:'B', expl:'夏至日北半球白昼最长。'},
                {type:'multi', q:'【多选】影响正午太阳高度的因素？', opt:['A. 纬度','B. 季节（直射点位置）','C. 经度','D. 地形'], ans:'AB', expl:'正午太阳高度随纬度和季节变化。'},
                {type:'multi', q:'【多选】五带的划分界线是？', opt:['A. 回归线','B. 极圈','C. 赤道','D. 本初子午线'], ans:'AB', expl:'回归线界定热带，极圈界定寒带。'},
                {type:'multi', q:'【多选】若黄赤交角变为0°，则？', opt:['A. 全球全年昼夜平分','B. 无四季变化','C. 太阳永远直射赤道','D. 极圈内无极昼极夜'], ans:'ABCD', expl:'直射点不移动，所有季节变化和昼夜长短变化消失。'}
            ],
            part_b: [
                {title:'🐰 小白的诡计', q:'小白想过两次生日，他应该怎么做？（利用日界线）', ans:'他应该<b>自西向东</b>越过国际日界线。<br>比如在东十二区过完生日后，马上坐飞机向东飞到西十二区。因为西十二区比东十二区晚一天，那里还是他的生日，这样就能再过一次！'},
                {title:'🐶 麦克的导航', q:'在北半球发射远程导弹，为了命中目标，瞄准时应该偏左一点还是偏右一点？', ans:'应该<b>偏左一点</b>。<br>因为导弹在飞行中受地转偏向力影响会向右偏。为了抵消这个偏差，发射时要人为向左修正。'},
                {title:'🧱 楼间距的秘密', q:'同样高度的楼房，在哈尔滨建得密一点，还是在广州建得密一点？为什么？', ans:'在<b>广州</b>可以建得密一点。<br>哈尔滨纬度高，冬至日正午太阳高度角小，影予长，为了不挡光，楼间距必须大。广州纬度低，太阳高度角大，影子短，楼间距可以小。'}
            ]
        }
    },

    // --- XB1 2.1 塑造地表形态的力量 ---
    'xb1c2s1': {
        title: '2.1 塑造地表形态的力量',
        ppt: [
            {role:'max', title:'特工任务：寻找力量之源', content:'我是<b>麦克</b>。欢迎来到第二章！<br>我们的地球表面为什么有高山深谷？<br>这背后有两股巨大的力量在较劲：<br>1. <b>内力作用</b>（来自地球内部的热能）。<br>2. <b>外力作用</b>（来自地球外部的太阳能）。<br>就像装修队，一个负责“粗坯”，一个负责“精修”。', visual:'icon_mountain', anim_type:'fadeIn'},
            {role:'duke', title:'内力作用：大力出奇迹', content:'我是<b>杜老大</b>。内力作用力气大！<br>主要表现为：<br>1. <b>地壳运动</b>：塑造地表的主要方式（如喜马拉雅山隆起）。<br>2. <b>岩浆活动</b>：火山喷发（基拉韦厄火山）。<br>3. <b>变质作用</b>：在地下高温高压下“变身”（一般不直接改变地表）。<br>总趋势：让地表变得<b>高低不平</b>。', visual:'icon_volcano', anim_type:'shake'},
            {role:'gidget', title:'外力作用：时间的雕刻刀', content:'我是<b>啾啾</b>。外力作用虽然温柔，但水滴石穿。<br>主要方式：<br>1. <b>风化</b>：岩石自己碎了（物理/化学/生物）。<br>2. <b>侵蚀</b>：被水、风、冰川带走（如V形谷）。<br>3. <b>搬运</b>：快递员。4. <b>堆积</b>：停下来安家。<br>总趋势：<b>削高填低</b>，让地表趋于平缓。', visual:'icon_shovel', anim_type:'fadeInRight'},
            {role:'snowball', title:'岩石圈物质循环', content:'我是<b>小白</b>！岩石也是会变身的！<br>三大类岩石：<br>1. <b>岩浆岩</b>：岩浆冷却变的（只能由岩浆变来）。<br>2. <b>沉积岩</b>：碎屑堆积压实的（有层理、有化石）。<br>3. <b>变质岩</b>：高温高压烤出来的。<br>它们在地下熔化后又变成岩浆，循环不息！', visual:'icon_recycle', anim_type:'rotateIn'},
            {role:'chloe', title:'案例：庐山的身世', content:'我是<b>克洛伊</b>。看看庐山（P18）。<br>它之所以“飞峙大江边”，是因为<b>内力作用</b>（断层抬升）。<br>山上的平台和奇石，则是<b>外力作用</b>（风化侵蚀）长期雕琢的结果。<br>所以，地貌是内忧外患...哦不，内力外力共同作用的结果。', visual:'icon_mountain', anim_type:'fadeInLeft'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 内力（地壳运动）造就高山盆地。<br>2. 外力（风化侵蚀）雕刻细节。<br>3. 岩石在圈层中循环转化。<br>准备好接受考核了吗？', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'下列地质作用中，属于内力作用的是？', opt:['A. 风化作用','B. 侵蚀作用','C. 地壳运动','D. 堆积作用'], ans:'C', expl:'地壳运动、岩浆活动、变质作用属于内力作用。'},
                {type:'single', q:'黄土高原千沟万壑的地表形态，主要成因是？', opt:['A. 风力堆积','B. 流水侵蚀','C. 地壳抬升','D. 冰川侵蚀'], ans:'B', expl:'流水侵蚀切割了黄土高原表面。'},
                {type:'single', q:'岩石圈物质循环中，只能由岩浆形成的岩石是？', opt:['A. 沉积岩','B. 变质岩','C. 岩浆岩','D. 石灰岩'], ans:'C', expl:'岩浆冷却凝固只能形成岩浆岩。'},
                {type:'single', q:'具有层理构造并可能含有化石的岩石是？', opt:['A. 侵入岩','B. 喷出岩','C. 变质岩','D. 沉积岩'], ans:'D', expl:'层理构造和化石是沉积岩的两大特征。'},
                {type:'single', q:'外力作用的总趋势是？', opt:['A. 使地表变得高低不平','B. 削高填低，使地表趋于平缓','C. 形成高山深谷','D. 没什么变化'], ans:'B', expl:'内力使地表起伏，外力通过侵蚀和堆积削高填低。'},
                {type:'single', q:'花岗岩属于？', opt:['A. 侵入岩','B. 喷出岩','C. 沉积岩','D. 变质岩'], ans:'A', expl:'花岗岩是岩浆侵入地壳冷却形成的。'},
                {type:'single', q:'基拉韦厄火山喷发属于？', opt:['A. 地壳运动','B. 变质作用','C. 岩浆活动','D. 外力作用'], ans:'C', expl:'火山喷发是岩浆活动的典型表现。'},
                {type:'multi', q:'【多选】下列地貌主要由外力作用形成的是？', opt:['A. 长江三角洲','B. 喜马拉雅山','C. 沙丘','D. 东非大裂谷'], ans:'AC', expl:'三角洲是流水堆积，沙丘是风力堆积。山脉和裂谷是内力作用。'},
                {type:'multi', q:'【多选】关于岩石圈物质循环，正确的是？', opt:['A. 各类岩石都能直接转化为岩浆','B. 沉积岩可以直接转化为岩浆岩','C. 变质岩可以转化为沉积岩','D. 岩浆岩可以转化为变质岩'], ans:'ACD', expl:'B错误，沉积岩需先熔化成岩浆，再冷却才能成岩浆岩；或者经变质作用成变质岩。'},
                {type:'multi', q:'【多选】风化作用的主要因素包括？', opt:['A. 温度变化','B. 水','C. 生物','D. 岩浆'], ans:'ABC', expl:'岩浆是内力因素。'}
            ],
            part_b: [
                {title:'🐱 克洛伊的推理', q:'既然外力作用一直在“削高填低”，为什么地球上的山还没有被铲平？', ans:'因为<b>内力作用</b>从未停止。<br>地壳运动不断地挤压抬升，制造新的高山（如喜马拉雅山还在长高），抵消了外力的削平作用。地貌是内力和外力<b>同时、长期</b>博弈的结果。'},
                {title:'🐶 麦克的发现', q:'在山上发现了海洋生物化石（如螺蚌壳），这说明了什么？', ans:'说明这里<b>曾经是海洋</b>，后来经过地壳<b>抬升</b>变成了高山。<br>这是“沧海桑田”地壳运动的直接证据。'},
                {title:'🐰 小白的计算', q:'如果沉积岩层A在B的上面，一般情况下谁更老？如果它们被一条岩浆岩C穿透了，C和它们谁更年轻？', ans:'1. <b>B更老</b>（下老上新）。<br>2. <b>C最年轻</b>（穿透者晚于被穿透者）。<br>岩浆必须先有地层存在才能侵入，所以岩浆岩往往比它穿透的岩层年轻。'}
            ]
        }
    },

    // --- XB1 2.2 构造地貌的形成 ---
    'xb1c2s2': {
        title: '2.2 构造地貌的形成',
        ppt: [
            {role:'max', title:'地壳的伤疤与褶皱', content:'地壳运动留下的痕迹叫<b>地质构造</b>。<br>主要有两种：<br>1. <b>褶皱</b>：岩层弯曲了（像挤压地毯）。<br>2. <b>断层</b>：岩层断裂并错位了（像掰断饼干）。<br>它们造就了无数名山大川！', visual:'icon_mountain', anim_type:'fadeIn'},
            {role:'snowball', title:'褶皱：背斜与向斜', content:'岩层受挤压变形：<br>🔴 <b>背斜</b>：岩层向上拱起（一般成山）。<br>🔵 <b>向斜</b>：岩层向下弯曲（一般成谷）。<br><b>反转：</b> 有时候背斜顶被侵蚀反而成了谷（背斜谷），向斜槽被挤压很结实反而成了山（向斜山）。这就叫<b>地形倒置</b>！', visual:'css_fold', anim_type:'swing'},
            {role:'duke', title:'断层：华山一条路', content:'岩层受力断裂且有位移。<br>1. <b>地垒</b>（上升岩块）：形成断块山（华山、庐山、泰山）。<br>2. <b>地堑</b>（下降岩块）：形成谷地或平原（渭河平原、汾河谷地）。<br>断层线附近岩石破碎，容易发育成河流。', visual:'css_fault', anim_type:'slideInUp'},
            {role:'gidget', title:'板块运动：全球拼图', content:'地球表层由六大板块拼合而成。<br>1. <b>消亡边界</b>（碰撞）：<br>   - 陆陆碰撞：巨大山系（喜马拉雅）。<br>   - 陆洋碰撞：海沟、海岸山脉、岛弧。<br>2. <b>生长边界</b>（张裂）：裂谷（东非大裂谷）、海岭（红海）。', visual:'icon_map_scatter', anim_type:'rotateIn'},
            {role:'chloe', title:'山地对交通的影响', content:'在山区修路太难了！<br>1. <b>成本高、难度大</b>。<br>2. <b>方式</b>：首选公路（灵活成本低），其次铁路。<br>3. <b>选线</b>：走地势缓的河谷、山间盆地。<br>4. <b>形态</b>：呈“之”字形迂回前进（为了减缓坡度）。', visual:'icon_road', anim_type:'fadeInLeft'},
            {role:'pops', title:'红海的预言', content:'我是巴布。给你们讲个未来。<br>红海位于非洲板块和印度洋板块的<b>生长边界</b>。<br>它在不断扩张！<br>几千万年后，红海可能会变成新的大洋。而地中海（消亡边界）可能会消失！', visual:'icon_water_drop', anim_type:'pulse'},
            {role:'max', title:'全节总结', content:'特工们，记住：<br>1. 褶皱看弯曲，断层看错位。<br>2. 背斜找油，向斜找水。<br>3. 板块运动决定宏观地貌。<br>4. 山区修路走“之”字。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'背斜的岩层形态通常是？', opt:['A. 向上拱起','B. 向下弯曲','C. 断裂错位','D. 水平分布'], ans:'A', expl:'背斜岩层向上拱起，向斜向下弯曲。'},
                {type:'single', q:'我国的华山、庐山属于哪种构造地貌？', opt:['A. 背斜山','B. 向斜山','C. 断块山（地垒）','D. 火山'], ans:'C', expl:'它们都是断层上升岩块形成的断块山。'},
                {type:'single', q:'喜马拉雅山脉是由哪两大板块碰撞形成的？', opt:['A. 亚欧板块与太平洋板块','B. 亚欧板块与印度洋板块','C. 亚欧板块与非洲板块','D. 太平洋板块与美洲板块'], ans:'B', expl:'亚欧板块与印度洋板块碰撞挤压隆起。'},
                {type:'single', q:'在野外判断背斜和向斜，最科学的依据是？', opt:['A. 地表形态（山或谷）','B. 岩层的新老关系','C. 岩层的颜色','D. 植被状况'], ans:'B', expl:'地表形态可能倒置。岩层中间老两翼新是背斜，中间新两翼老是向斜。'},
                {type:'single', q:'山区公路常呈“之”字形分布，主要目的是？', opt:['A. 欣赏风景','B. 减缓坡度','C. 连接更多村镇','D. 增加路程'], ans:'B', expl:'延长线路长度以降低坡度，利于行车安全。'},
                {type:'single', q:'渭河平原在地质构造上属于？', opt:['A. 背斜','B. 向斜','C. 地垒','D. 地堑'], ans:'D', expl:'断层相对下降的岩块（地堑）形成谷地或平原。'},
                {type:'single', q:'板块生长边界通常形成？', opt:['A. 海沟','B. 裂谷或海岭','C. 褶皱山系','D. 岛弧'], ans:'B', expl:'生长边界板块张裂，形成裂谷（陆地）或海岭（海洋）。'},
                {type:'multi', q:'【多选】背斜成谷的原因是？', opt:['A. 顶部受张力','B. 岩石破碎','C. 易被侵蚀','D. 槽部受挤压'], ans:'ABC', expl:'背斜顶部受张力，岩石破碎，容易被侵蚀成谷地。'},
                {type:'multi', q:'【多选】隧道选址通常选择在背斜而不是向斜，因为？', opt:['A. 背斜呈天然拱形，结构稳定','B. 背斜不易积水','C. 背斜岩石软','D. 向斜易导水，隧道可能变“水道”'], ans:'ABD', expl:'背斜结构稳且利于排水，向斜是储水构造，易渗水。'},
                {type:'multi', q:'【多选】山区交通建设应遵循的原则？', opt:['A. 优先发展公路','B. 线路避开断层和滑坡地段','C. 尽量走直线','D. 在河谷地带选线'], ans:'ABD', expl:'山区一般不走直线，需迂回前进。'}
            ],
            part_b: [
                {title:'🐶 麦克的找油法', q:'如果要在地下寻找石油和天然气，应该在背斜找还是向斜找？为什么？', ans:'<b>在背斜找。</b><br>原因：油气密度小，水密度大。在岩层弯曲中，油气会浮在上面（背斜顶部），水沉在下面（向斜槽部）。所以<b>“背斜找油，向斜找水”</b>。'},
                {title:'🐰 小白的工程学', q:'修水库大坝时，如果选址处有断层，能修吗？为什么？', ans:'<b>不能修。</b><br>1. <b>不安全</b>：断层地壳不稳定，易诱发地震导致大坝崩塌。<br>2. <b>漏水</b>：水会顺着断层裂隙渗漏流失。'},
                {title:'🏞️ 地形倒置', q:'为什么有时候山顶上会发现原本应该在下面的老岩层，或者谷底是新岩层？（提示：背斜成谷）', ans:'这是<b>“地形倒置”</b>现象。<br>例如“背斜成谷”：背斜顶部受张力岩石破碎，被侵蚀掉了，露出了下面较老的岩层，且地势变低成谷。而旁边的向斜槽部受挤压岩石坚硬，保留下来反而成了山。'}
            ]
        }
    },

    // --- XB1 2.3 河流地貌的发育 ---
    'xb1c2s3': {
        title: '2.3 河流地貌的发育',
        ppt: [
            {role:'max', title:'水的雕刻艺术', content:'河流是地表最活跃的雕刻师。<br>它主要干两件事：<br>1. <b>侵蚀</b>（把土石带走）：形成河谷。<br>2. <b>堆积</b>（把土石放下）：形成平原。<br>河流在不同河段，脾气不一样！', visual:'icon_water_drop', anim_type:'fadeIn'},
            {role:'duke', title:'河谷的演变：从V到U', content:'1. <b>初期（上游）</b>：落差大，水急。向下切！形成<b>“V”形谷</b>（深而窄）。<br>2. <b>中期（中游）</b>：向两边扩！出现河湾。凹岸侵蚀，凸岸堆积。<br>3. <b>成熟期（下游）</b>：变成宽而浅的<b>槽形谷</b>（U形），甚至形成牛轭湖。', visual:'css_river_valley', anim_type:'slideInUp'},
            {role:'snowball', title:'凹岸与凸岸', content:'河流弯曲处有大学问！<br>🌊 <b>凹岸</b>：水流急，<b>侵蚀</b>严重（岸陡，水深，适合建港口）。<br>🏖️ <b>凸岸</b>：水流缓，<b>堆积</b>泥沙（岸缓，水浅，适合建聚落/挖金矿）。<br>口诀：<b>凹侵凸堆</b>。', visual:'icon_compare', anim_type:'rotateIn'},
            {role:'gidget', title:'冲积平原的三兄弟', content:'泥沙堆积形成了平原：<br>1. <b>冲积扇</b>：出山口处（山前）。像把扇子。<br>2. <b>河漫滩平原</b>：中下游。洪水淹没，枯水露出的地方。<br>3. <b>三角洲</b>：入海口。像个三角形（如长江三角洲）。', visual:'icon_map_scatter', anim_type:'fadeInRight'},
            {role:'chloe', title:'河流与聚落', content:'人喜欢逐水而居。<br><b>好处</b>：水源充足、水运便利、土壤肥沃（冲积平原）。<br><b>坏处</b>：洪水威胁。<br><b>选址</b>：<br>山区：选河谷阶地（高处）。<br>平原：沿河聚落带，或加高地基。', visual:'icon_park', anim_type:'fadeInLeft'},
            {role:'pops', title:'案例：镇江的变迁', content:'长江镇江段（P33）。<br>西津渡以前是渡口，现在离江边很远。<br>因为受<b>地转偏向力</b>和<b>惯性</b>影响，江水不断冲刷北岸（凹岸），在南岸（凸岸）堆积。<br>导致江岸线北移，南岸淤积成了陆地。', visual:'icon_ship', anim_type:'pulse'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 上游V谷下切，下游槽谷侧蚀。<br>2. 凹岸侵蚀建港，凸岸堆积建房。<br>3. 冲积扇在山前，三角洲在海边。<br>4. 聚落选址要避洪。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'河流上游“V”形谷的主要成因是？', opt:['A. 向下侵蚀（下切）','B. 向源头侵蚀（溯源）','C. 向两侧侵蚀（侧蚀）','D. 堆积作用'], ans:'A', expl:'上游流速快，以下切侵蚀为主，河谷深而窄。'},
                {type:'single', q:'在河流曲流处，适合建港口的是？', opt:['A. 凸岸','B. 凹岸','C. 都可以','D. 都不行'], ans:'B', expl:'凹岸受侵蚀，水深，泥沙不易淤积，利于船舶停靠。'},
                {type:'single', q:'冲积扇通常位于河流的？', opt:['A. 入海口','B. 中游河道','C. 出山口','D. 源头'], ans:'C', expl:'河流流出山口，流速突降，泥沙堆积形成扇状地貌。'},
                {type:'single', q:'长江三角洲形成的主要原因是？', opt:['A. 海浪侵蚀','B. 流水堆积','C. 风力堆积','D. 冰川堆积'], ans:'B', expl:'河流携带泥沙在河口沉积形成三角洲。'},
                {type:'single', q:'河漫滩平原主要分布在？', opt:['A. 河流源头','B. 陡峭峡谷','C. 河流中下游','D. 山顶'], ans:'C', expl:'中下游地势平坦，侧蚀和堆积作用强，形成宽广的河漫滩平原。'},
                {type:'single', q:'关于河流地貌对聚落的影响，正确的是？', opt:['A. 平原低地聚落规模一般较小','B. 山区聚落多分布在山脊','C. 聚落通常沿河分布','D. 聚落选址不考虑洪水风险'], ans:'C', expl:'河流提供水源和交通，聚落常沿河呈带状分布。'},
                {type:'single', q:'“三十年河东，三十年河西”描述的是？', opt:['A. 瀑布后退','B. 河流曲流的摆动与改道','C. 潮汐涨落','D. 海平面升降'], ans:'B', expl:'平原河流河道弯曲，裁弯取直频繁，导致河道位置变迁。'},
                {type:'multi', q:'【多选】河流堆积地貌包括？', opt:['A. 冲积扇','B. 河漫滩平原','C. 三角洲','D. V形谷'], ans:'ABC', expl:'V形谷是侵蚀地貌。'},
                {type:'multi', q:'【多选】聚落分布在河流两岸的有利条件？', opt:['A. 水源充足','B. 土壤肥沃','C. 水运便利','D. 无洪水威胁'], ans:'ABC', expl:'河流两岸通常有洪水威胁，D错误。'},
                {type:'multi', q:'【多选】凸岸适合？', opt:['A. 建设港口','B. 发展农业','C. 建设住宅','D. 淘金'], ans:'BCD', expl:'凸岸堆积，土地肥沃，且易富集重金属矿砂（金），水流缓也相对安全，但不适合建港。'}
            ],
            part_b: [
                {title:'🏗️ 港口选址', q:'如果让你在长江下游选址建一个深水港，你会选在凹岸还是凸岸？为什么？', ans:'选在<b>凹岸</b>。<br>原因：河流在凹岸流速快，<b>侵蚀作用强</b>，河床深，利于大型船只停靠；且泥沙不易淤积，减少航道维护成本。'},
                {title:'🏡 麦克的家', q:'麦克想在河边盖房子，为了安全（不容易被水冲走）和地基稳固，他应该选在凹岸还是凸岸？', ans:'选在<b>凸岸</b>。<br>原因：凸岸是<b>堆积岸</b>，陆地在不断向河中延伸，地基相对稳固，且水流缓慢，受洪水冲击风险比凹岸小。'},
                {title:'🏝️ 崇明岛的命运', q:'受地转偏向力（北半球向右偏）影响，长江口的崇明岛未来可能会和哪边的岸连在一起？', ans:'和<b>北岸（左岸）</b>连在一起。<br>推理：长江水向东流，受地转偏向力影响向<b>右（南岸）偏</b>，所以南岸水流急、侵蚀强（深水航道）；<b>北岸流速慢、堆积强</b>。崇明岛北侧航道会越来越窄，最终淤死与陆地相连。'}
            ]
        }
    },
// js/data.js - Part 6

    // --- XB1 3.1 常见天气系统 ---
    'xb1c3s1': {
        title: '3.1 常见天气系统',
        ppt: [
            {role:'max', title:'天气的幕后推手', content:'我是麦克！为什么今天晴空万里，明天就狂风暴雨？<br>因为天上有“推手”！我们叫它<b>天气系统</b>。<br>主要有两类狠角色：<br>1. <b>锋面系统</b>（冷暖气团打架）。<br>2. <b>气压系统</b>（气旋和反气旋）。<br>掌握它们的行踪，就能预知天气！', visual:'icon_storm', anim_type:'fadeIn'},
            {role:'snowball', title:'冷锋：霸道总裁', content:'我是小白！<b>冷锋</b>就是我这样霸气的冷气团，主动向暖气团进攻！<br><b>符号：</b> 三角形（▲）。<br><b>过境前：</b> 暖气团控制，气温高、气压低、天气晴。<br><b>过境时：</b> 阴天、<b>大风、降温、雨雪</b>（雨在锋后）。<br><b>过境后：</b> 冷气团控制，气温降、气压升、天气转晴。', visual:'icon_cold', anim_type:'slideInLeft'},
            {role:'gidget', title:'暖锋：温柔小姐', content:'我是啾啾。<b>暖锋</b>是温柔的暖气团，主动向冷气团靠近。<br><b>符号：</b> 半圆形（●）。<br><b>特点：</b> 暖气团轻，慢慢爬在冷气团上面。<br><b>天气：</b> 形成<b>连续性降水</b>（雨在锋前）。<br>过境后，气温升高，气压降低，天气变暖。', visual:'icon_climate_soil', anim_type:'slideInRight'},
            {role:'chloe', title:'准静止锋：懒得动', content:'我是克洛伊。如果冷暖气团势均力敌，谁也推不动谁，就叫<b>准静止锋</b>。<br><b>后果：</b> 锋面在原地徘徊，造成<b>阴雨连绵</b>的天气。<br>比如我国长江中下游的“梅雨”（江淮准静止锋），一下就是一个月，烦死了。', visual:'icon_water_drop', anim_type:'fadeIn'},
            {role:'duke', title:'气旋与反气旋', content:'这是气压系统：<br>1. <b>气旋（低压）</b>：中心气压低。四周空气向中心辐合（北逆南顺）。中心气流<b>上升</b> -> 容易<b>阴雨</b>（如台风）。<br>2. <b>反气旋（高压）</b>：中心气压高。空气向四周辐散（北顺南逆）。中心气流<b>下沉</b> -> 天气<b>晴朗</b>（如伏旱）。', visual:'icon_radar', anim_type:'rotateIn'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 冷锋降温大风雨在后，暖锋连续降水雨在前。<br>2. 低压气旋阴雨天，高压反气旋晴朗天。<br>3. 台风是热带气旋。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'冷锋过境时，常出现的天气是？', opt:['A. 连续性降水','B. 大风、降温、雨雪','C. 气温升高、天气晴朗','D. 气压降低'], ans:'B', expl:'冷锋过境，冷气团取代暖气团，常伴随大风降温和雨雪。'},
                {type:'single', q:'我国夏季长江流域的“伏旱”天气，是由什么系统控制形成的？', opt:['A. 冷锋','B. 暖锋','C. 气旋（低压）','D. 反气旋（高压）'], ans:'D', expl:'伏旱是由副热带高压（反气旋）控制形成的，盛行下沉气流，高温少雨。'},
                {type:'single', q:'下图中，表示北半球气旋（低压）的是？', opt:['A. 顺时针辐散','B. 逆时针辐合','C. 顺时针辐合','D. 逆时针辐散'], ans:'B', expl:'北半球气旋呈逆时针方向向中心辐合。'},
                {type:'single', q:'暖锋降水主要发生在？', opt:['A. 锋前','B. 锋后','C. 锋线左右','D. 锋面下方'], ans:'A', expl:'暖气团沿锋面爬升，降水区主要在锋前。'},
                {type:'multi', q:'【多选】影响我国的主要气象灾害有？', opt:['A. 寒潮','B. 台风','C. 地震','D. 洪涝'], ans:'ABD', expl:'地震属于地质灾害。'}
            ],
            part_b: [
                {title:'🐰 小白的战术', q:'小白在北方寒潮来袭前，给农作物盖上了塑料大棚。这是为了防御什么？原理是什么？', ans:'防御<b>冻害</b>。<br>原理：大棚可以增强大气逆辐射（保温作用），减少地面热量散失，防止农作物被冷锋带来的剧烈降温冻死。'},
                {title:'🐱 克洛伊的梅雨', q:'为什么江南的梅雨季节衣服总是晾不干？是什么系统在作怪？', ans:'是<b>江淮准静止锋</b>。<br>初夏时，冷暖气团在长江中下游地区势均力敌，锋面徘徊不前，导致长达一个月的阴雨连绵天气，空气湿度极大。'}
            ]
        }
    },

    // --- XB1 3.2 气压带和风带 ---
    'xb1c3s2': {
        title: '3.2 气压带和风带',
        ppt: [
            {role:'max', title:'全球的大气跑步机', content:'地球上的风不是乱吹的！<br>如果地球不转也没摩擦力，风会直接从赤道（热）吹向两极（冷）。<br>但地球在转！地转偏向力把大气切成了<b>三圈环流</b>：<br>1. 低纬环流。<br>2. 中纬环流。<br>3. 高纬环流。<br>这造就了全球的“7压6风”。', visual:'icon_earth', anim_type:'fadeIn'},
            {role:'duke', title:'七个气压带', content:'记住这个口诀：<b>高低相间，南北对称</b>。<br>1. <b>赤道低压带</b>（0°）：热，气流上升 -> 多雨。<br>2. <b>副热带高压带</b>（30°）：动力下沉 -> 干旱（沙漠）。<br>3. <b>副极地低压带</b>（60°）：冷暖相撞上升 -> 多雨。<br>4. <b>极地高压带</b>（90°）：冷，下沉 -> 干旱。', visual:'icon_chart', anim_type:'zoomIn'},
            {role:'snowball', title:'六个风带', content:'气压带之间就是风带！<br>1. <b>信风带</b>（0°-30°）：北半球东北风，南半球东南风。<br>2. <b>西风带</b>（30°-60°）：北半球西南风，南半球西北风（温和湿润）。<br>3. <b>极地东风带</b>（60°-90°）：冷而干。<br><b>西风带</b>是特工们最喜欢的，因为它能送来水汽！', visual:'css_coriolis', anim_type:'slideInLeft'},
            {role:'gidget', title:'随太阳起舞：季节移动', content:'气压带和风带不是不动的。<br>它们随着太阳直射点的移动而移动。<br><b>北半球夏季：</b> 向北移。<br><b>北半球冬季：</b> 向南移。<br>这一移，就让很多地方的季节变了样！', visual:'css_sun_move', anim_type:'slideInUp'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 0°、60°上升多雨，30°、90°下沉少雨。<br>2. 气压带风带随太阳季节移动。<br>3. 东亚季风看海陆差异。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'赤道低气压带控制下的天气特征是？', opt:['A. 高温多雨','B. 炎热干燥','C. 温和湿润','D. 寒冷干燥'], ans:'A', expl:'赤道受热气流上升，终年高温多雨。'},
                {type:'single', q:'北半球的盛行西风带风向是？', opt:['A. 东北风','B. 西北风','C. 西南风','D. 东南风'], ans:'C', expl:'北半球西风带由副热带高压吹向副极地低压，受地转偏向力向右偏，形成西南风。'},
                {type:'multi', q:'【多选】副热带高气压带控制下的区域通常？', opt:['A. 盛行下沉气流','B. 气候干燥','C. 多沙漠分布','D. 阴雨连绵'], ans:'ABC', expl:'高压下沉气流，难以成云致雨，多形成沙漠。'}
            ],
            part_b: [
                {title:'🌍 麦克的旅行', q:'麦克想去一个终年温和湿润，草地常绿的地方度假。他应该去受哪个风带控制的地区？', ans:'<b>西风带（中纬度西岸）。</b><br>原因：西风带从海洋带来温暖湿润的气流，全年控制形成温带海洋性气候（如英国），终年温和湿润。'}
            ]
        }
    },

    // --- XB1 3.3 气压带和风带对气候的影响 ---
    'xb1c3s3': {
        title: '3.3 气压带和风带对气候的影响',
        ppt: [
            {role:'max', title:'气候的幕后导演', content:'气候是什么？就是长期的天气平均状态。<br>谁决定的？<b>气压带和风带</b>是总导演！<br>它们单一控制或交替控制，导演出了全球各地的气候大戏。<br>比如热带雨林、地中海、温带海洋性气候...都是它们的杰作。', visual:'icon_climate_soil', anim_type:'fadeIn'},
            {role:'snowball', title:'单一控制：从一而终', content:'有些地方被一个系统长期霸占：<br>1. <b>热带雨林气候</b>：全年在<b>赤道低压</b>控制下 -> 终年高温多雨。<br>2. <b>热带沙漠气候</b>：全年在<b>副热带高压</b>或信风控制下 -> 终年炎热干燥。<br>3. <b>温带海洋性气候</b>：全年在<b>中纬西风</b>控制下 -> 终年温和湿润。', visual:'icon_drought', anim_type:'slideInLeft'},
            {role:'gidget', title:'交替控制：双重人格', content:'有些地方随季节换导演：<br>1. <b>地中海气候</b>（30°-40°大陆西岸）：<br>   - 夏季：<b>副高</b>控制 -> 炎热干燥（去海滩晒太阳）。<br>   - 冬季：<b>西风</b>控制 -> 温和多雨（躲在家里睡觉）。<br>2. <b>热带草原气候</b>：赤道低压（湿）和信风（干）交替控制。', visual:'icon_run_direction', anim_type:'slideInRight'},
            {role:'duke', title:'季风气候：海陆大片', content:'在大陆东岸，海陆热力差异是主角。<br><b>温带/亚热带季风气候</b>：<br>   - 夏季：东南季风（海->陆）-> 雨热同期。<br>   - 冬季：西北季风（陆->海）-> 低温少雨。<br>这种气候最适合种水稻，养活了好多人！', visual:'icon_china_map', anim_type:'zoomIn'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 气候类型由气压带风带决定。<br>2. 地中海气候夏干冬雨（副高+西风）。<br>3. 季风气候雨热同期。<br>4. 气候决定了自然景观。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'下列气候类型中，终年受西风带控制的是？', opt:['A. 地中海气候','B. 温带海洋性气候','C. 热带雨林气候','D. 温带季风气候'], ans:'B', expl:'温带海洋性气候分布在40°-60°大陆西岸，终年受西风控制。'},
                {type:'single', q:'地中海气候的特征是？', opt:['A. 夏季高温多雨，冬季寒冷干燥','B. 终年温和湿润','C. 夏季炎热干燥，冬季温和多雨','D. 终年高温多雨'], ans:'C', expl:'受副高（夏）和西风（冬）交替控制，夏干冬雨。'},
                {type:'multi', q:'【多选】受气压带和风带交替控制形成的气候有？', opt:['A. 热带草原气候','B. 地中海气候','C. 热带雨林气候','D. 温带海洋性气候'], ans:'AB', expl:'C和D是单一系统控制。A是赤道低压+信风，B是副高+西风。'}
            ],
            part_b: [
                {title:'🍇 葡萄的秘密', q:'地中海沿岸盛产优质葡萄（如法国、意大利），为什么？（提示：光照）', ans:'因为<b>夏季炎热干燥，光照充足</b>。<br>地中海气候夏季受副高控制，晴天多，太阳辐射强，有利于葡萄进行光合作用积累糖分。夜间气温下降快，利于糖分保存。'}
            ]
        }
    },

    // --- XB1 4.1 陆地水体及其相互关系 ---
    'xb1c4s1': {
        title: '4.1 陆地水体及其相互关系',
        ppt: [
            {role:'max', title:'特工任务：水源调查', content:'我是麦克！水是生命之源，地球表面的水体主要都在海洋里（占96.5%）。<br>但我们陆地特工更关心<b>陆地水体</b>。<br>主要包括：河流、湖泊、冰川、沼泽、地下水等。<br>它们之间不是孤立的，而是像兄弟一样互相帮忙（补给）！', visual:'icon_water_drop', anim_type:'fadeIn'},
            {role:'snowball', title:'河流的补给：谁在喂它？', content:'我是小白！河流的水从哪来？<br>1. <b>雨水补给</b>：最常见。下雨水就涨（夏汛）。<br>2. <b>季节性积雪融水</b>：春天雪化了，形成春汛（我国东北）。<br>3. <b>冰川融水</b>：夏天太热冰川化了，水才多（西北地区）。<br>4. <b>湖泊和地下水</b>：常年稳定的“好兄弟”。', visual:'icon_rain', anim_type:'slideInLeft'},
            {role:'duke', title:'湖泊与河流：削峰补枯', content:'我是杜老大。湖泊就像河流的<b>调节水库</b>。<br><b>洪水期：</b> 河流水位高，水流进湖泊（削峰）。<br><b>枯水期：</b> 河流水位低，湖水补给河流（补枯）。<br>著名的案例是<b>洞里萨湖</b>和<b>湄公河</b>，它们互相吐纳，维持了东南亚的生态平衡。', visual:'icon_compare', anim_type:'zoomIn'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 大气降水是河流最主要的补给。<br>2. 湖泊能调节河流径流（削峰补枯）。<br>3. 地下水补给最稳定。<br>4. 保护水体生态至关重要。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'我国东部季风区河流的主要补给形式是？', opt:['A. 冰川融水','B. 大气降水','C. 地下水','D. 湖泊水'], ans:'B', expl:'季风区降水丰富，雨水是主要补给来源。'},
                {type:'single', q:'我国西北内陆河流（如塔里木河）的汛期主要出现在？', opt:['A. 春季','B. 夏季','C. 秋季','D. 冬季'], ans:'B', expl:'主要靠高山冰川融水补给，夏季气温高，融化量大，形成汛期。'},
                {type:'multi', q:'【多选】关于陆地水体的相互联系，正确的是？', opt:['A. 河流与湖泊通常互补','B. 冰川融水主要补给春汛','C. 地下水是河流稳定的补给源','D. 水位高低决定补给方向'], ans:'ACD', expl:'B错，冰川融水主要补给夏汛；季节性积雪融水补给春汛。'}
            ],
            part_b: [
                {title:'🌊 洪水去哪了', q:'为什么在鄱阳湖周边地区，人们常说“大水冲了龙王庙”？湖泊在洪水期起了什么作用？', ans:'<b>削峰作用。</b><br>当长江发洪水时，水位高于鄱阳湖，江水倒灌入湖，鄱阳湖像海绵一样吸纳洪水，降低了长江下游的水位，减轻了洪涝灾害。'}
            ]
        }
    },

    // --- XB1 4.2 洋流 ---
    'xb1c4s2': {
        title: '4.2 洋流',
        ppt: [
            {role:'max', title:'大海的传送带', content:'我是麦克！大海里也有“河流”，我们叫它<b>洋流</b>。<br>故事时间：1992年，一艘货船遇风暴，数万只<b>橡胶鸭子</b>掉进太平洋。<br>结果它们漂流到了世界各地，甚至到了北极！<br>是谁在运送它们？就是全球洋流系统！', visual:'icon_ship', anim_type:'fadeIn'},
            {role:'snowball', title:'北半球：顺时针的圈', content:'我是小白！在北半球中低纬度，洋流是<b>顺时针</b>转的！<br>例如北大西洋：<br>赤道暖流 -> 墨西哥湾暖流 -> 北大西洋暖流 -> 加那利寒流。<br>形成一个闭合的圈。', visual:'css_rotation', anim_type:'rotateIn'},
            {role:'gidget', title:'寒流与暖流', content:'我是啾啾。洋流有冷暖之分。<br><b>暖流</b>：从低纬流向高纬（水热）。<br><b>寒流</b>：从高纬流向低纬（水冷）。<br><b>影响：</b> <br>暖流=增温增湿（像开了暖气）。<br>寒流=降温减湿（像开了冷气）。', visual:'icon_compare', anim_type:'slideInRight'},
            {role:'chloe', title:'气候的魔法师', content:'我是克洛伊。看看英国和拉布拉多半岛。<br>都在北纬50°-60°。<br><b>英国</b>：受北大西洋<b>暖流</b>影响，森林茂密，温和湿润。<br><b>拉布拉多</b>：受拉布拉多<b>寒流</b>影响，冻土广布，寒冷荒凉。<br>这就是洋流的威力！', visual:'icon_climate_soil', anim_type:'zoomIn'},
            {role:'pops', title:'渔场去哪找？', content:'我是巴布。鱼儿喜欢在哪聚餐？<br>1. <b>寒暖流交汇处</b>：海水搅动，营养物质上浮（北海道、北海、纽芬兰渔场）。<br>2. <b>上升流海区</b>：底层海水泛上来（秘鲁渔场）。<br>跟着洋流走，才有大鱼吃！', visual:'icon_life', anim_type:'pulse'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 中低纬环流：北顺南逆。<br>2. 暖流增温增湿，寒流降温减湿。<br>3. 寒暖流交汇出大渔场。<br>4. 航海要顺风顺水。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'北半球中低纬度海区大洋环流的方向是？', opt:['A. 顺时针','B. 逆时针','C. 无规律','D. 夏季顺时针冬季逆时针'], ans:'A', expl:'受地转偏向力影响，北半球中低纬环流呈顺时针方向。'},
                {type:'single', q:'下列洋流中，属于风海流的是？', opt:['A. 日本暖流','B. 北赤道暖流','C. 秘鲁寒流','D. 墨西哥湾暖流'], ans:'B', expl:'北赤道暖流是在东北信风吹拂下形成的，属于风海流。'},
                {type:'multi', q:'【多选】寒流流经的沿岸地区通常？', opt:['A. 气温较低','B. 降水较少','C. 气温较高','D. 降水丰富'], ans:'AB', expl:'寒流具有降温减湿的作用。'}
            ],
            part_b: [
                {title:'🦆 鸭子的奇幻漂流', q:'1992年在太平洋丢失的玩具鸭子，为什么有些会出现在大西洋的美国东海岸？', ans:'<b>洋流接力。</b><br>鸭子可能随<b>北太平洋暖流</b>到达北美西岸，部分穿过北冰洋（随极地漂流），或者通过其他洋流交换进入大西洋系统，最终被北大西洋的洋流带到美国东岸。'},
                {title:'🌵 寒冷的沙漠', q:'南美洲西海岸的阿塔卡马沙漠是世界上最干旱的沙漠之一，这和旁边的洋流有什么关系？', ans:'<b>秘鲁寒流降温减湿。</b><br>强大的秘鲁寒流流经沿岸，使低层大气变冷，空气稳定，难以形成对流降雨；加上副热带高压控制，导致极端干旱。'}
            ]
        }
    },

    // --- XB1 4.3 海—气相互作用 ---
    'xb1c4s3': {
        title: '4.3 海—气相互作用',
        ppt: [
            {role:'max', title:'巨大的热量引擎', content:'我是麦克！海洋不仅仅是一盆水，它是地球的<b>空调</b>和<b>加湿器</b>。<br>1. <b>热量</b>：海洋吸收了大部分太阳辐射，储存了85%的热量。<br>2. <b>水分</b>：大气中87.5%的水汽来自海洋蒸发。<br>海洋和大气每天都在交换热量和水分，这就是海—气相互作用。', visual:'icon_water_drop', anim_type:'fadeIn'},
            {role:'snowball', title:'海气如何“通话”？', content:'我是小白！它们怎么交流？<br><b>海洋 -> 大气</b>：通过<b>蒸发</b>输送水汽（潜热）和<b>长波辐射</b>输送热量。<br><b>大气 -> 海洋</b>：通过<b>风</b>吹动海水（动能），从云里下雨淡化海水。<br>这是一个双向奔赴的过程！', visual:'icon_compare', anim_type:'slideInLeft'},
            {role:'gidget', title:'厄尔尼诺：淘气的男孩', content:'我是啾啾。<b>厄尔尼诺 (El Niño)</b> 来了！<br><b>起因：</b> 东南信风减弱。<br><b>后果：</b> 暖水向东倒流，堆积在秘鲁沿岸。<br><b>影响：</b> <br>1. <b>秘鲁（东岸）：</b> 发大水（沙漠开花，鱼死光）。<br>2. <b>印尼/澳洲（西岸）：</b> 大旱灾（森林大火）。<br>整个太平洋的脾气都反了！', visual:'icon_fire', anim_type:'shake'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 海洋是大气的主要热源和水源。<br>2. 厄尔尼诺：东暖西冷（东涝西旱）。<br>3. 拉尼娜：加强版正常（东旱西涝）。<br>4. 全球气候是联动的。<br>任务完成，全员休息！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'大气中水汽的最主要来源是？', opt:['A. 河流蒸发','B. 湖泊蒸发','C. 海洋蒸发','D. 植物蒸腾'], ans:'C', expl:'海洋占据地球表面积的71%，提供了大气中约87.5%的水汽。'},
                {type:'single', q:'厄尔尼诺现象发生时，赤道太平洋东部（秘鲁沿岸）会出现？', opt:['A. 持续干旱','B. 暴雨洪涝','C. 气温异常降低','D. 渔业大丰收'], ans:'B', expl:'厄尔尼诺导致东太平洋水温升高，气流上升，引发暴雨；冷海水上泛减弱，渔业减产。'},
                {type:'multi', q:'【多选】海洋对大气的作用主要表现在？', opt:['A. 提供水汽','B. 储存热量','C. 吸收二氧化碳','D. 驱动板块运动'], ans:'ABC', expl:'D是地球内力作用。'}
            ],
            part_b: [
                {title:'🎣 渔民的眼泪', q:'为什么厄尔尼诺发生时，秘鲁的渔民会很伤心？', ans:'<b>鱼饿死或跑了。</b><br>厄尔尼诺导致冷海水上泛（上升流）减弱或消失，表层海水营养物质减少，浮游生物饿死，鱼类因缺乏食物而大量死亡或迁徙，导致渔业崩溃。'}
            ]
        }
    },

    // --- XB1 5.1 自然环境的整体性 ---
    'xb1c5s1': {
        title: '5.1 自然环境的整体性',
        ppt: [
            {role:'max', title:'特工任务：牵一发而动全身', content:'我是麦克！自然界是个大家庭。<br>大气、水、土壤、生物、岩石，这五大要素不是孤立的，它们通过<b>物质迁移</b>和<b>能量交换</b>，紧紧绑在一起。<br>这种“你中有我，我中有你”的关系，就是<b>整体性</b>。<br>动了一个，其他的都会变！', visual:'icon_integration', anim_type:'fadeIn'},
            {role:'chloe', title:'案例：黄山四绝', content:'我是克洛伊。看看黄山（P84）。<br>“奇松、怪石、云海、温泉”是怎么凑到一起的？<br><b>花岗岩</b>（岩石）断裂隆起 -> 形成险峻<b>地貌</b> -> 气流抬升形成<b>云海</b>（大气） -> 降水丰富利于<b>松树</b>生长（生物）。<br>这叫<b>统一演化</b>，谁也离不开谁。', visual:'icon_mountain', anim_type:'fadeInLeft'},
            {role:'gidget', title:'连锁反应：蝴蝶效应', content:'我是啾啾。一旦有人捣乱，后果很严重！<br>比如在黄土高原<b>砍伐森林</b>（生物变了）：<br>-> <b>土壤</b>流失（变贫瘠）<br>-> <b>地貌</b>千沟万壑<br>-> <b>河流</b>含沙量大增（下游淤积洪水）<br>-> <b>气候</b>变得更干旱。<br>这就叫<b>“牵一发而动全身”</b>。', visual:'icon_drought', anim_type:'shake'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 五大要素通过循环联系在一起。<br>2. 具有生产和稳定两大功能。<br>3. 牵一发而动全身（连锁反应）。<br>4. 统一演化（黄山案例）。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'“牵一发而动全身”体现了自然环境的？', opt:['A. 差异性','B. 整体性','C. 稳定性','D. 复杂性'], ans:'B', expl:'某一要素变化会导致其他要素甚至整体发生变化，是整体性的体现。'},
                {type:'multi', q:'【多选】黄山“四绝”的形成体现了？', opt:['A. 自然环境的整体性','B. 各要素的独立发展','C. 要素间的统一演化','D. 人类活动的主导作用'], ans:'AC', expl:'花岗岩、气候、植被等要素协同演化形成了景观组合。'}
            ],
            part_b: [
                {title:'🦋 蝴蝶效应', q:'为什么在南美洲的亚马逊雨林砍伐树木，会影响到全球的气候变暖？', ans:'<b>碳循环被破坏。</b><br>雨林是巨大的“储碳库”和“制氧机”。砍伐雨林不仅释放了储存的碳，还减少了吸收CO2的能力。大气中CO2增加，温室效应增强，导致全球变暖。这是整体性在全球尺度的体现。'}
            ]
        }
    },

    // --- XB1 5.2 自然环境的地域差异性 ---
    'xb1c5s2': {
        title: '5.2 自然环境的地域差异性',
        ppt: [
            {role:'max', title:'为什么世界这么多姿多彩？', content:'我是麦克！虽然地球是个整体，但不同地方长得完全不一样。<br>赤道是绿色的雨林，两极是白色的冰雪。<br>沿海是湿润的森林，内陆是黄色的沙漠。<br>这就是<b>地域差异性</b>。<br>主要有三个规律，特工们要记好！', visual:'icon_map_scatter', anim_type:'fadeIn'},
            {role:'snowball', title:'规律一：从赤道到两极', content:'我是小白！如果你从海南岛走到黑龙江：<br><b>景观变化：</b> 雨林 -> 常绿林 -> 落叶林 -> 针叶林。<br><b>主导因素：</b> <b>热量</b>（太阳辐射）。<br><b>特点：</b> 东西延伸，南北更替（纬度地带性）。<br>越往北越冷，衣服穿得越厚！', visual:'icon_climate_soil', anim_type:'slideInLeft'},
            {role:'gidget', title:'规律二：从沿海到内陆', content:'我是啾啾。如果你从上海走到新疆：<br><b>景观变化：</b> 森林 -> 草原 -> 荒漠。<br><b>主导因素：</b> <b>水分</b>（海陆位置）。<br><b>特点：</b> 南北延伸，东西更替（经度地带性）。<br>在中纬度地区最明显，因为那里陆地最宽。', visual:'icon_run_direction', anim_type:'slideInRight'},
            {role:'duke', title:'规律三：从山麓到山顶', content:'我是杜老大。爬山就是缩微版的旅行。<br><b>垂直地带性</b>：海拔越高，气温越低，水热变化大。<br><b>景观变化：</b> 就像从赤道走向两极。<br>山脚是阔叶林，山顶可能就是冰川了。<br><b>规律：</b> 山越高，纬度越低，带谱越复杂（比如喜马拉雅山）。', visual:'icon_mountain', anim_type:'zoomIn'},
            {role:'max', title:'全节总结', content:'特工们，汇报重点：<br>1. 纬度地带性看热量（南北更替）。<br>2. 经度地带性看水分（东西更替）。<br>3. 垂直地带性看海拔（山地）。<br>4. 地方性分异看局部细节。<br>全书任务完成！为自己鼓掌！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'从赤道到两极的地域分异规律，主导因素是？', opt:['A. 水分','B. 热量','C. 地形','D. 土壤'], ans:'B', expl:'太阳辐射随纬度变化，导致热量差异。'},
                {type:'single', q:'我国“东绿西黄”（东部森林，西部荒漠）的景观差异体现了？', opt:['A. 纬度地带性','B. 经度地带性（干湿度）','C. 垂直地带性','D. 非地带性'], ans:'B', expl:'由沿海向内陆，水分递减，体现了经度地带性。'},
                {type:'multi', q:'【多选】影响山地垂直自然带谱复杂程度的因素有？', opt:['A. 山脉所在的纬度','B. 山脉的海拔高度','C. 山脉的相对高度','D. 山脉的走向'], ans:'ABC', expl:'纬度越低、海拔越高、相对高度越大，带谱越复杂。'}
            ],
            part_b: [
                {title:'🏔️ 乞力马扎罗的雪', q:'乞力马扎罗山位于赤道附近，为什么山顶会有积雪？这体现了什么规律？', ans:'<b>垂直地带性。</b><br>虽然基带是热带，但随着海拔升高，气温逐渐降低（每升1000米降6℃）。到了海拔近6000米的山顶，气温终年低于0℃，降水以雪的形式存在，形成冰川。'}
            ]
        }
    },
// js/data.js - Part 7

    // ------------------------------------
    // 选必二 XB2 (彼得兔主题)
    // ------------------------------------

    // --- XB2 1.1 多种多样的区域 ---
    'xb2c1s1': {
        title: '1.1 多种多样的区域',
        ppt: [
            {role:'peter', title:'欢迎来到区域花园！', content:'嘿！我是<b>彼得兔</b>。欢迎来到“地理大花园”。<br>我们的世界就像这个大花园，被划分成了一块块不同的地盘，我们管它叫<b>“区域”</b>。<br>麦奎格先生的菜园是一个区域，远处的森林又是另一个区域。<br>今天，我们就来探险，看看这些区域到底有什么名堂！', visual:'icon_map_scatter', anim_type:'fadeIn'},
            {role:'lily', title:'什么是区域？', content:'我是<b>莉莉</b>。区域可不是随便画的。<br>它是人们在地球表面按照一定的<b>目的和标准</b>划定的空间单元。<br>1. <b>客观性</b>：地表是真实存在的。<br>2. <b>主观性</b>：怎么划是人决定的（比如按气候划，还是按行政管辖划）。', visual:'icon_chart', anim_type:'slideInLeft'},
            {role:'benjamin', title:'边界：清楚还是模糊？', content:'我是<b>本杰明</b>。有些区域的界线很清楚，像<b>行政区</b>（国家、省、县），就像麦奎格先生的围栏，过线就是过线！<br>有些区域界线是模糊的，像<b>自然区</b>（气候区、植被区），就像森林和草地的过渡带，你很难说清哪里是分界线。', visual:'icon_hu_line', anim_type:'zoomIn'},
            {role:'tod', title:'层层嵌套的盒子', content:'我是<b>托德先生</b>。哼，区域是有等级的。<br>大区域套着小区域。<br>比如：<b>东北平原</b>（大）包含<b>松嫩平原</b>（中）；<br><b>广东省</b>（大）包含<b>佛山市</b>（中）包含<b>南海区</b>（小）。<br>层级越高，面积通常越大。', visual:'icon_integration', anim_type:'fadeInRight'},
            {role:'peter', title:'发展条件的差异', content:'每一块区域的“性格”都不一样。<br>有的适合种胡萝卜（平原、水足），有的适合躲猫猫（山区、林密）。<br><b>因地制宜</b>就是：在合适的地方做合适的事。<br>比如在平沙岛（P3），因为是江心岛，适合搞农业和旅游，不适合建大工厂。', visual:'icon_climate_soil', anim_type:'pulse'},
            {role:'jemima', title:'功能区：各司其职', content:'我是<b>杰米玛鸭霸</b>。人类为了特定目标，会划定<b>功能区</b>。<br>比如：<br>1. <b>基本农田保护区</b>：专门种地，不能盖楼。<br>2. <b>生态保护区</b>：保护环境，不能破坏。<br>3. <b>工业区</b>：专门生产产品。<br>大家各司其职，花园才能井井有条！', visual:'icon_factory', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住啦：<br>1. 区域是人划定的空间单元。<br>2. 行政区界线清楚，自然区界线模糊。<br>3. 区域有层级，大套小。<br>4. 发展要看条件，因地制宜。<br>准备好接受托德先生的测试了吗？', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'下列区域中，边界具有过渡性质（模糊）的是？', opt:['A. 广东省','B. 热带雨林区','C. 深圳市','D. 浦东新区'], ans:'B', expl:'自然区域（如植被、气候）的边界通常是模糊的、过渡的；行政区域边界是明确的。'},
                {type:'single', q:'下列关于区域的说法，正确的是？', opt:['A. 区域内部没有任何差异','B. 区域之间界线都是明确的','C. 区域具有一定的区位特征（位置）','D. 区域是纯客观存在的，与人无关'], ans:'C', expl:'区域具有特定的地理位置（区位）。区域内部有相对一致性但也有差异；划分含有主观性。'},
                {type:'single', q:'东北平原和松嫩平原的关系体现了区域的？', opt:['A. 整体性','B. 差异性','C. 层次性（层级）','D. 开放性'], ans:'C', expl:'东北平原包含松嫩平原，体现了区域的层级嵌套关系。'},
                {type:'single', q:'广东省佛山市划定“基本农田保护区”，这属于？', opt:['A. 自然区域','B. 行政区域','C. 功能区域','D. 文化区域'], ans:'C', expl:'为了特定目标（保护耕地）划定的区域，属于功能区。'},
                {type:'single', q:'平沙岛适合发展农业和旅游，主要因为？', opt:['A. 它是江心岛，环境优美，冲积土肥沃','B. 矿产资源丰富','C. 劳动力成本极高','D. 交通非常拥堵'], ans:'A', expl:'因地制宜利用其自然条件（土壤、水、环境）。'},
                {type:'single', q:'“一方水土养一方人”说明了？', opt:['A. 区域具有开放性','B. 区域环境对人类活动有深刻影响','C. 人类可以随意改变区域','D. 区域之间没有联系'], ans:'B', expl:'自然环境（水土）影响人类的生活方式和文化。'},
                {type:'single', q:'下列不属于行政区域的是？', opt:['A. 香港特别行政区','B. 广西壮族自治区','C. 长江三角洲','D. 巴西'], ans:'C', expl:'长江三角洲是自然/经济区域，不是单一的行政管辖区。'},
                {type:'multi', q:'【多选】区域划分的依据可以是？', opt:['A. 自然特征（如气候）','B. 人文特征（如语言）','C. 综合特征','D. 行政管理需要'], ans:'ABCD', expl:'区域划分指标多种多样，单一或综合均可。'},
                {type:'multi', q:'【多选】关于区域尺度的说法，正确的是？', opt:['A. 尺度越大，描述越宏观','B. 尺度越小，描述越详细','C. 高层级区域包含低层级区域','D. 不同尺度的区域发展条件完全相同'], ans:'ABC', expl:'不同尺度的区域发展条件和重点不同。'},
                {type:'multi', q:'【多选】下列属于自然区域的是？', opt:['A. 亚热带季风气候区','B. 黄土高原','C. 深圳市南山区','D. 汉语方言区'], ans:'AB', expl:'C是行政区，D是文化区（人文）。'}
            ],
            part_b: [
                {title:'🦊 托德的陷阱', q:'托德先生说：“既然区域是人划出来的，那我想怎么划就怎么划，完全凭心情。”他的说法对吗？', ans:'<b>不对。</b><br>虽然区域划分有主观性（人去划），但它是建立在<b>客观地域差异</b>基础上的。比如你不能硬把沙漠划进热带雨林区，必须尊重客观事实和科学标准。'},
                {title:'🐰 彼得的观察', q:'彼得发现麦奎格的菜园有围栏，而外面的树林没有围栏直接连着草地。这对应了哪两种区域边界？', ans:'<b>明确边界</b>和<b>模糊边界</b>。<br>菜园围栏像行政区或功能区，界线清晰；树林连着草地像自然区，界线是过渡的、模糊的。'},
                {title:'🥕 大萝卜与小萝卜', q:'“萝卜地”里有“红萝卜区”，这体现了区域的什么特点？', ans:'<b>层次性（或层级性）。</b><br>大区域（萝卜地）包含小区域（红萝卜区），这是区域的空间嵌套关系。'}
            ]
        }
    },

    // --- XB2 1.2 区域整体性和关联性 ---
    'xb2c1s2': {
        title: '1.2 区域整体性和关联性',
        ppt: [
            {role:'peter', title:'万物皆有关联', content:'嘿！在我们的田园里，没有什么是孤立存在的。<br>阳光、土壤、水、萝卜、还有我们兔子，大家都是一家人。<br>这一节我们要学两个大词：<br>1. <b>整体性</b>（内部团结）。<br>2. <b>关联性</b>（外部交流）。', visual:'icon_chain', anim_type:'fadeIn'},
            {role:'lily', title:'整体性：牵一发而动全身', content:'我是莉莉。区域内部的要素（自然+人文）是相互作用的。<br><b>案例：</b> 福建培田村（P7）。<br>那里山环水绕（自然），人们就依山傍水建房（人文）。<br>房子设计排水好，因为那里雨水多。<br>这就叫<b>自然与人文的和谐统一</b>，构成了区域的整体。', visual:'icon_park', anim_type:'slideInLeft'},
            {role:'benjamin', title:'关联性：互通有无', content:'我是本杰明。不同的区域之间也是好朋友。<br>因为<b>差异</b>（我有胡萝卜，你有白菜），所以产生了<b>流动</b>（交换）。<br>流动的可以是：自然要素（河水、风）、人文要素（人口、资金、技术）。<br>这种联系就是<b>区域关联性</b>。', visual:'icon_compare', anim_type:'rotateIn'},
            {role:'jemima', title:'案例：稻田养鱼', content:'我是杰米玛。看浙江青田的智慧（P8）！<br><b>稻鱼共生系统</b>：<br>1. 鱼吃虫和草，拉粑粑肥田。<br>2. 稻子给鱼遮阴。<br>3. 人收稻子又抓鱼。<br>这就是自然（稻、鱼、土、水）和人紧密合作的整体性典范！', visual:'icon_life', anim_type:'zoomIn'},
            {role:'tod', title:'关联性的影响', content:'我是托德。区域关联能改变世界。<br>比如<b>长江三角洲</b>带动了周边发展（辐射作用）。<br>比如<b>全球化</b>，就是地球上最大的区域关联。<br>如果不搞关联，闭关锁国，就像我躲在洞里不出来，会饿死的！', visual:'icon_map_scatter', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. <b>整体性</b>：区域内部各要素相互作用，直接影响区域发展。<br>2. <b>关联性</b>：区域之间存在差异，导致要素流动。<br>3. 就像稻鱼共生，我们要追求和谐共处！<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'区域内部各要素之间相互作用、相互影响，构成一个统一体，这是区域的？', opt:['A. 差异性','B. 整体性','C. 开放性','D. 动态性'], ans:'B', expl:'整体性强调内部要素的相互联系和统一。'},
                {type:'single', q:'区域之间发生联系（关联性）的基础是？', opt:['A. 区域差异','B. 区域一致','C. 行政命令','D. 人口迁移'], ans:'A', expl:'区域差异（如资源禀赋不同）是导致要素流动和区域联系的根本动力。'},
                {type:'single', q:'浙江青田“稻鱼共生系统”体现了？', opt:['A. 人类对自然的征服','B. 自然环境的恶化','C. 区域要素间的良性互动（整体性）','D. 区域间的恶性竞争'], ans:'C', expl:'稻、鱼、人、环境和谐共处，是整体性的体现。'},
                {type:'single', q:'下列现象体现了区域关联性的是？', opt:['A. 西气东输','B. 培田村依山而建','C. 青藏高原高寒缺氧','D. 沙漠地区植被稀少'], ans:'A', expl:'西气东输是能源在不同区域间的流动，体现了关联性。B、C、D主要体现区域内部特征（整体性）。'},
                {type:'single', q:'福建培田村的古建筑排水系统发达，主要为了适应当地？', opt:['A. 地形崎岖','B. 降水丰富','C. 气温较高','D. 台风频发'], ans:'B', expl:'人文景观（建筑）适应自然环境（多雨），体现了整体性。'},
                {type:'single', q:'发达国家向发展中国家转移产业，属于？', opt:['A. 自然要素流动','B. 人文要素流动（资本/技术）','C. 生态破坏','D. 文化交流'], ans:'B', expl:'产业转移伴随着资金、技术等要素的流动。'},
                {type:'single', q:'区域关联性对区域发展的影响是？', opt:['A. 只有利没有弊','B. 只有弊没有利','C. 促进区域互补和共同发展','D. 导致区域封闭'], ans:'C', expl:'通过互通有无，实现优势互补。'},
                {type:'multi', q:'【多选】区域人文要素包括？', opt:['A. 人口','B. 经济','C. 文化','D. 地貌'], ans:'ABC', expl:'地貌是自然要素。'},
                {type:'multi', q:'【多选】青田稻鱼共生系统中，鱼的作用是？', opt:['A. 吃掉害虫','B. 吃掉杂草','C. 粪便肥田','D. 支撑水稻防止倒伏'], ans:'ABC', expl:'鱼在系统中起到除虫、除草、施肥的作用。'},
                {type:'multi', q:'【多选】当代世界，区域关联性越来越强的原因？', opt:['A. 交通通信技术进步','B. 国际贸易发展','C. 全球化趋势','D. 各国资源完全自给自足'], ans:'ABC', expl:'D是错误的，资源分布不均是关联的原因。'}
            ],
            part_b: [
                {title:'🦊 托德的生意', q:'托德先生把森林里的坚果卖给草原上的兔子，换回胡萝卜。这体现了区域的什么性质？', ans:'<b>关联性。</b><br>森林（坚果多）和草原（胡萝卜多）存在物产差异，导致了商品的流动和交换，这就是区域间的关联。'},
                {title:'🏠 莉莉的房子', q:'莉莉发现南方的房子屋顶尖尖的，北方的房子墙厚厚的。这是为什么？体现了什么？', ans:'<b>整体性。</b><br>南方雨多，尖顶利于排水；北方冷，厚墙利于保温。这说明民居（人文要素）必须适应当地的气候（自然要素），两者是一个整体。'},
                {title:'🐟 鱼儿救水稻', q:'在稻鱼共生系统中，如果把鱼都抓光了，水稻可能会怎么样？', ans:'<b>减产或生病。</b><br>没有鱼吃害虫和杂草，水稻虫害会增加，杂草会抢营养；没有鱼粪肥田，土壤肥力下降。这说明系统内部要素是相互依存的。'}
            ]
        }
    },

    // --- XB2 2.1 区域发展的自然环境基础 ---
    'xb2c2s1': {
        title: '2.1 区域发展的自然环境基础',
        ppt: [
            {role:'peter', title:'萝卜生长的秘密', content:'嘿！我是彼得兔。为什么麦奎格先生的菜园能长出那么大的胡萝卜？<br>因为那里有肥沃的<b>土壤</b>和充足的<b>水</b>！<br>自然环境是区域发展的“地基”。<br>有的地方地基好（资源多），有的地方地基差（环境恶劣）。今天我们来看看大自然的馈赠！', visual:'icon_climate_soil', anim_type:'fadeIn'},
            {role:'benjamin', title:'家里有矿：澳大利亚', content:'我是本杰明。看澳大利亚（P18），被称为“<b>坐在矿车上的国家</b>”。<br>铁矿石多得用不完，卖给全世界赚钱。<br><b>自然资源</b>是区域发展的物质基础。<br>特别是发展初期，有资源就是“赢在起跑线”！', visual:'icon_drill', anim_type:'slideInLeft'},
            {role:'lily', title:'没矿也富有：瑞士', content:'我是莉莉。但是，没矿就不能发展吗？<br>看看<b>瑞士</b>（P19），山多地少，没啥矿产。<br>但他们发展金融、钟表、医药（高端产业）。<br><b>结论：</b> 自然条件只是基础，不是决定生死的唯一条件。人才是关键！', visual:'icon_money', anim_type:'rotateIn'},
            {role:'tod', title:'山西煤炭：成也萧何', content:'我是托德。山西省煤炭多（P21）。<br>靠挖煤，山西富过。<br>但现在呢？环境污染、地表塌陷、产业单一。<br>这就是<b>“资源诅咒”</b>：太依赖资源，反而容易产生惰性，阻碍长远发展。', visual:'icon_fire', anim_type:'shake'},
            {role:'jemima', title:'环境的制约', content:'我是杰米玛。自然环境不仅提供资源，也会<b>限制</b>我们。<br>比如古代文明都发源于温带河谷（好种地）。<br>到了热带雨林或极地冰原，环境太恶劣，不仅不能种地，连生存都难。<br>所以，发展要<b>尊重自然规律</b>。', visual:'icon_drought', anim_type:'zoomIn'},
            {role:'peter', title:'人与自然的博弈', content:'随着科技进步，我们对自然的依赖在减弱。<br>以前没水就不能种地，现在有滴灌技术。<br>但无论科技多牛，我们都不能破坏环境底线。<br><b>绿水青山就是金山银山</b>，这才是真理！', visual:'icon_tree', anim_type:'slideInUp'},
            {role:'lily', title:'四大文明古国', content:'古巴比伦、古埃及、古印度、中国。<br>它们都在北温带，都在大河旁边。<br>这说明在农业社会，<b>自然条件</b>（气候、水源、地形）对区域发展起着决定性作用。', visual:'icon_map_scatter', anim_type:'fadeIn'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 自然环境是发展的基础。<br>2. 有资源不一定强（要防资源诅咒），没资源不一定弱（靠技术人才）。<br>3. 随着发展，自然条件的束缚在变小，但环保红线不能碰！<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'下列关于自然条件对区域发展影响的叙述，正确的是？', opt:['A. 自然条件是区域发展的唯一决定因素','B. 随着科技进步，自然条件的影响在减弱','C. 自然资源丰富的地区经济一定发达','D. 自然资源贫乏的地区经济一定落后'], ans:'B', expl:'自然条件是基础，但不是唯一决定因素；科技能改造环境，减弱限制。'},
                {type:'single', q:'被誉为“坐在矿车上的国家”是？', opt:['A. 瑞士','B. 日本','C. 澳大利亚','D. 新加坡'], ans:'C', expl:'澳大利亚矿产资源丰富，出口量大。'},
                {type:'single', q:'山西省经济发展的支柱产业长期是？', opt:['A. 电子信息','B. 煤炭工业','C. 纺织工业','D. 旅游业'], ans:'B', expl:'山西是我国煤炭大省，长期依赖煤炭。'},
                {type:'single', q:'四大古代文明发祥地共同的自然条件是？', opt:['A. 位于热带雨林','B. 位于高纬度地区','C. 位于北温带大河流域','D. 矿产资源丰富'], ans:'C', expl:'适宜的气候（温带）和水源（大河）利于农业发展。'},
                {type:'single', q:'瑞士自然资源贫乏，但成为世界富裕国家，主要依靠？', opt:['A. 掠夺他国资源','B. 发展高端制造业和金融服务业','C. 大量出口农产品','D. 接受国际援助'], ans:'B', expl:'依靠人才、技术和资本优势。'},
                {type:'single', q:'“资源诅咒”现象指的是？', opt:['A. 资源开发导致环境污染','B. 资源丰富的地区经济反而发展缓慢','C. 资源枯竭导致城市衰退','D. 资源价格下跌'], ans:'B', expl:'过度依赖资源导致产业单一、创新不足，反而落后。'},
                {type:'single', q:'下列哪项技术降低了农业对自然条件的依赖？', opt:['A. 依靠雨水灌溉','B. 温室大棚技术','C. 刀耕火种','D. 顺其自然'], ans:'B', expl:'温室大棚改变了热量条件，使反季节种植成为可能。'},
                {type:'multi', q:'【多选】自然资源对区域发展的作用包括？', opt:['A. 提供物质基础','B. 影响产业结构','C. 决定发展水平','D. 初期作用显著'], ans:'ABD', expl:'自然资源是基础，但不决定最终发展水平（C错）。'},
                {type:'multi', q:'【多选】山西省煤炭工业面临的挑战有？', opt:['A. 资源开采成本上升','B. 环境污染严重','C. 生态破坏','D. 替代能源竞争'], ans:'ABCD', expl:'开采难度大、污染重、新能源冲击都是挑战。'},
                {type:'multi', q:'【多选】为了摆脱自然环境的制约，人类采取了哪些措施？', opt:['A. 跨流域调水','B. 修建铁路隧道','C. 改良土壤','D. 放弃发展'], ans:'ABC', expl:'人类通过工程措施改造自然环境。'}
            ],
            part_b: [
                {title:'🥕 彼得的菜园选择', q:'彼得想建一个新菜园，有两个地方：A是肥沃的河谷，但经常发洪水；B是贫瘠的山坡，但很安全。如果有了现代科技，他会选哪里？怎么做？', ans:'<b>选A或B都可以。</b><br>选A（河谷）：可以修堤坝防洪，利用肥沃土壤。选B（山坡）：可以修梯田保土，施肥改良土壤。科技让彼得有了更多选择！'},
                {title:'⌚ 瑞士的智慧', q:'瑞士没有铁矿，为什么能生产出世界上最好的机械手表？', ans:'<b>因为技术和工艺。</b><br>瑞士人把极少的原材料（钢铁），通过精湛的工艺加工成高附加值的手表。这说明<b>人才和技术</b>可以弥补自然资源的不足。'},
                {title:'⛏️ 山西的烦恼', q:'托德说：“山西只要一直挖煤就能永远富下去。”你觉得对吗？为什么？', ans:'<b>不对。</b><br>煤炭是<b>非可再生资源</b>，总有一天会挖完。而且单一依赖煤炭，环境会变差，一旦煤价下跌或资源枯竭，经济就会崩塌。必须转型！'}
            ]
        }
    },

    // --- XB2 2.2 生态脆弱区的综合治理 ---
    'xb2c2s2': {
        title: '2.2 生态脆弱区的综合治理',
        ppt: [
            {role:'peter', title:'脆弱的边缘地带', content:'嘿！有些地方很脆弱，轻轻一碰就坏了。<br><b>生态脆弱区</b>：生态系统抗干扰能力弱，容易退化，很难恢复。<br>通常在<b>过渡带</b>：农牧交错带、水陆交界带、林草交界带。<br>就像本杰明站在围栏上，摇摇欲坠！', visual:'icon_alert_yellow', anim_type:'fadeIn'},
            {role:'benjamin', title:'浑善达克：消失的草场', content:'我是本杰明。内蒙古的<b>浑善达克沙地</b>（P26）。<br>以前是水草丰美，后来人多了，养的羊也多了。<br><b>超载过牧</b>：羊把草根都刨出来吃了。<br>结果：草场退化，变成了沙源地，北京的沙尘暴就从这儿来！', visual:'icon_sandstorm', anim_type:'slideInLeft'},
            {role:'lily', title:'南方喀斯特：石头长出来了', content:'我是莉莉。在南方（贵州、广西），有一种病叫<b>石漠化</b>。<br>山上土很薄，一下雨，土被冲走，石头露出来。<br>原因：乱砍滥伐，陡坡开荒。<br>后果：寸草不生，像荒漠一样。', visual:'icon_rock_plant', anim_type:'rotateIn'},
            {role:'tod', title:'为什么会脆弱？', content:'我是托德。这事儿赖谁？<br>1. <b>自然原因</b>：气候干旱、地形陡峭、降水集中。（底子薄）<br>2. <b>人为原因</b>：人口增长、过度开垦、过度放牧。（折腾狠）<br>人地矛盾是根本原因！', visual:'icon_compare', anim_type:'shake'},
            {role:'jemima', title:'治理：把绿色找回来', content:'我是杰米玛。怎么治？<br>1. <b>退耕还林还草</b>：不适合种地的地方，还给大自然。<br>2. <b>围栏封育</b>：把草场围起来，让它自己休息恢复。<br>3. <b>生态移民</b>：人搬走，减轻土地压力。<br>就像让生病的麦奎格休息几天，别去烦他。', visual:'icon_park', anim_type:'zoomIn'},
            {role:'peter', title:'乌兰察布的土豆', content:'看案例（P29）：乌兰察布。<br>以前瞎种地，风沙大。<br>后来调整结构：少种粮，多种<b>马铃薯（土豆）</b>和牧草。<br>土豆耐旱、产量高。现在成了“中国薯都”！<br>既保护了环境，又赚了钱。', visual:'icon_life', anim_type:'slideInUp'},
            {role:'lily', title:'南方治理：种草养牛', content:'在喀斯特地区，不能种玉米（因为要翻土）。<br>改种<b>牧草</b>，发展养牛羊。<br>草能固土，牛羊能卖钱。<br>这就是“生态产业化，产业生态化”。', visual:'icon_hu_line', anim_type:'fadeIn'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 生态脆弱区多在过渡带。<br>2. 北方沙化，南方石漠化。<br>3. 根本原因是人地矛盾（人多地少）。<br>4. 治理要退耕、禁牧、移民、调结构。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'生态脆弱区主要分布在？', opt:['A. 城市中心','B. 农牧交错带、水陆交界带等过渡地带','C. 资源丰富的矿区','D. 热带雨林核心区'], ans:'B', expl:'生态系统的过渡地带稳定性最差，最脆弱。'},
                {type:'single', q:'导致浑善达克沙地草场退化的主要人为原因是？', opt:['A. 气候变暖','B. 过度放牧和过度开垦','C. 城市化','D. 工业污染'], ans:'B', expl:'人口增加导致超载过牧和盲目开垦。'},
                {type:'single', q:'我国南方喀斯特地区面临的主要生态问题是？', opt:['A. 土地沙化','B. 石漠化（水土流失）','C. 盐碱化','D. 冰川融化'], ans:'B', expl:'土层薄，植被破坏后土壤流失，岩石裸露，形成石漠化。'},
                {type:'single', q:'解决生态脆弱区问题的根本措施是？', opt:['A. 继续开荒','B. 恢复生态，协调人地关系','C. 跨流域调水','D. 全面停止生产'], ans:'B', expl:'既要保护生态，又要发展经济，协调人地矛盾。'},
                {type:'single', q:'乌兰察布市治理生态环境的措施包括？', opt:['A. 全面种树','B. 调整农业结构，种植耐旱作物（马铃薯）','C. 发展重工业','D. 引进大量人口'], ans:'B', expl:'因地制宜，种植适应当地环境的作物。'},
                {type:'single', q:'“生态移民”的主要目的是？', opt:['A. 促进城市化','B. 减轻脆弱地区的人口压力','C. 开发新地区','D. 增加旅游收入'], ans:'B', expl:'将人口从生态承载力超标的地区迁出，让环境自然修复。'},
                {type:'single', q:'土地退化的表现不包括？', opt:['A. 土地沙化','B. 土壤肥力增加','C. 土壤盐碱化','D. 土壤侵蚀'], ans:'B', expl:'肥力增加是改良，不是退化。'},
                {type:'multi', q:'【多选】北方农牧交错带生态脆弱的自然原因？', opt:['A. 降水变率大','B. 多大风','C. 土质疏松（沙质）','D. 植被稀少'], ans:'ABCD', expl:'干湿交替、风大沙多，自然条件本身不稳定。'},
                {type:'multi', q:'【多选】南方石漠化的危害包括？', opt:['A. 耕地减少','B. 旱涝灾害加剧','C. 生物多样性锐减','D. 经济贫困'], ans:'ABCD', expl:'生态恶化导致贫困，陷入恶性循环。'},
                {type:'multi', q:'【多选】生态治理中的生物措施有？', opt:['A. 植树造林','B. 种草','C. 封沙育林','D. 修梯田'], ans:'ABC', expl:'修梯田属于工程措施。'}
            ],
            part_b: [
                {title:'🐑 羊吃草的数学题', q:'如果一片草地只能养10只羊，本杰明养了20只。第一年他赚了双倍的钱，第二年、第三年会发生什么？', ans:'<b>草场退化，羊饿死或减产。</b><br>第一年是透支生态。羊把草根吃光了，草长不出来，土地沙化。后面几年草地变成沙漠，本杰明不仅赚不到钱，连原来的10只羊也养不活了。这就是<b>不可持续发展</b>。'},
                {title:'⛰️ 搬家的石头', q:'在贵州山区，为什么农民说“种地一年，石头长高一截”？', ans:'<b>水土流失（石漠化）。</b><br>并不是石头真的长高了，而是雨水把石头缝里的土壤冲走了，土层变薄，石头裸露出来的部分变多了。这是土地退化的严重信号。'},
                {title:'🥔 土豆的胜利', q:'为什么乌兰察布改种土豆后，生态反而变好了？', ans:'<b>适应性强。</b><br>土豆耐旱、耐寒，不需要大量灌溉，适合当地气候。而且种植土豆和牧草结合，增加了地表植被覆盖，减少了风蚀沙化，实现了生态与经济双赢。'}
            ]
        }
    },

    // --- XB2 2.3 资源枯竭型城市的转型发展 ---
    'xb2c2s3': {
        title: '2.3 资源枯竭型城市的转型发展',
        ppt: [
            {role:'peter', title:'老矿坑的故事', content:'嘿！我是彼得兔。还记得托德先生的那个旧狐狸洞吗？<br>以前那里有好多好吃的（资源），大家都在那聚会（城市兴起）。<br>现在东西吃光了（资源枯竭），大家就散了（城市衰退）。<br>这就是<b>资源枯竭型城市</b>的命运。我们能救它吗？', visual:'icon_earth_crack', anim_type:'fadeIn'},
            {role:'benjamin', title:'生命周期：生老病死', content:'我是本杰明。资源型城市也有生命周期：<br>1. <b>兴起期</b>：发现资源，大家来挖。<br>2. <b>繁荣期</b>：产量最高，城市最热闹。<br>3. <b>衰退期</b>：资源挖没了，环境坏了，人走了。<br>比如<b>阜新市</b>（煤城），煤挖完了，剩下一堆坑。', visual:'icon_chart', anim_type:'slideInLeft'},
            {role:'lily', title:'面临的问题', content:'我是莉莉。这些城市“病”得很重：<br>1. <b>产业单一</b>：除了挖矿啥也不会。<br>2. <b>失业率高</b>：矿关了，工人没工作。<br>3. <b>环境污染</b>：塌陷、粉尘、脏乱差。<br>4. <b>人才流失</b>：年轻人都跑了。', visual:'icon_alert_red', anim_type:'rotateIn'},
            {role:'tod', title:'转型之路：怎么救？', content:'我是托德。我有办法！<br>1. <b>延长产业链</b>：以前卖煤（甚至亏本），现在把煤变成电、变成化工产品（深加工），这叫“吃干榨净”。<br>2. <b>多元化发展</b>：搞旅游、搞农业、搞高科技。别在一棵树上吊死。', visual:'icon_integration', anim_type:'shake'},
            {role:'jemima', title:'案例：焦作的逆袭', content:'我是杰米玛。看<b>河南焦作</b>（P33）。<br>以前是“黑”的（煤城），现在是“绿”的（旅游城）。<br>他们利用废弃矿山开发<b>云台山</b>旅游。<br>利用农业优势种“四大怀药”（山药等）。<br>实现了从“黑色印象”到“绿色主题”的转身！', visual:'icon_park', anim_type:'zoomIn'},
            {role:'peter', title:'案例：德国鲁尔区', content:'德国鲁尔区也是老大哥。<br>他们把旧钢铁厂改成了<b>工业公园</b>，把煤气罐变成了<b>潜水俱乐部</b>。<br>这也太酷了吧！<br>这叫<b>工业遗产旅游</b>。', visual:'icon_rebuild', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 资源总有枯竭的一天。<br>2. 衰退期面临失业和污染。<br>3. 转型要靠延长产业链和多元化。<br>4. 焦作和鲁尔区是好榜样。<br>任务完成，去吃胡萝卜咯！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'资源型城市发展的生命周期一般不包括？', opt:['A. 兴起期','B. 繁荣期','C. 衰退期','D. 永生期'], ans:'D', expl:'资源不可再生，城市发展必然经历兴起-繁荣-衰退（或转型）。'},
                {type:'single', q:'资源枯竭型城市面临的主要问题是？', opt:['A. 资源过多无法运输','B. 产业结构单一，环境污染严重','C. 人口增长过快','D. 交通拥堵'], ans:'B', expl:'“一矿独大”导致结构单一，开采导致环境破坏。'},
                {type:'single', q:'阜新市被称为“煤电之城”，其转型的背景是？', opt:['A. 煤炭资源枯竭','B. 石油资源发现','C. 森林资源丰富','D. 农业发达'], ans:'A', expl:'阜新是因煤而兴，因煤而衰的典型。'},
                {type:'single', q:'焦作市转型的成功经验是？', opt:['A. 继续加大煤炭开采','B. 发展山水旅游和特色农业','C. 整体搬迁','D. 发展航天工业'], ans:'B', expl:'利用云台山发展旅游，利用怀药发展农业，实现多元化。'},
                {type:'single', q:'延长产业链的目的是？', opt:['A. 增加产品附加值','B. 减少就业','C. 加快资源消耗','D. 单纯增加产量'], ans:'A', expl:'深加工可以提高产品价值，增加利润。'},
                {type:'single', q:'德国鲁尔区将废弃工厂改造成工业公园，属于？', opt:['A. 发展高新技术','B. 发展工业遗产旅游','C. 恢复农业','D. 发展物流'], ans:'B', expl:'利用工业遗迹发展第三产业。'},
                {type:'single', q:'判断一个城市是否是资源型城市，主要看？', opt:['A. 城市的主导产业是否依赖自然资源开采加工','B. 城市的人口数量','C. 城市的面积','D. 城市的绿化率'], ans:'A', expl:'定义依据是主导产业与资源的关系。'},
                {type:'multi', q:'【多选】资源枯竭型城市转型的措施有？', opt:['A. 优化产业结构','B. 治理环境污染','C. 发展接续替代产业','D. 政策支持'], ans:'ABCD', expl:'需要综合治理，包括经济、环境、政策等多方面。'},
                {type:'multi', q:'【多选】焦作市“四大怀药”包括？', opt:['A. 山药','B. 地黄','C. 菊花','D. 牛膝'], ans:'ABCD', expl:'这是焦作的特色农产品。'},
                {type:'multi', q:'【多选】资源型城市在繁荣期往往表现为？', opt:['A. 资源开采量大','B. 城市经济增长快','C. 环境问题开始显现','D. 产业结构非常复杂'], ans:'ABC', expl:'繁荣期产业结构通常比较单一，依赖资源。'}
            ],
            part_b: [
                {title:'🏭 托德的工厂', q:'托德的煤矿挖空了，工人没活干。他想把矿坑填了种地，还是改成地下探险乐园？哪个更适合转型？', ans:'<b>改成探险乐园（旅游）。</b><br>煤矿填埋复垦成本高且土壤可能污染。改为旅游项目（工业遗产），利用了现有的矿井设施，发展第三产业，安置了工人（当导游），不仅赚了钱还保护了环境，这是<b>产业升级</b>。'},
                {title:'🥦 焦作的转身', q:'为什么焦作市从“黑色”变成了“绿色”？这里的颜色分别代表什么？', ans:'<b>产业结构变了。</b><br>“黑色”代表<b>煤炭工业</b>（高污染）；“绿色”代表<b>生态旅游</b>（云台山）和<b>特色农业</b>（怀药）。这说明焦作成功摆脱了对资源的依赖，实现了绿色转型。'},
                {title:'💰 产业链魔术', q:'直接卖煤炭赚10块钱，把煤炭发电卖电赚50块，把煤灰做成砖头卖赚20块。这叫什么？', ans:'<b>延长产业链。</b><br>通过深加工，把资源“吃干榨净”，每一环节都产生新的价值（附加值），不仅赚得多，废弃物还变少了。'}
            ]
        }
    },
// js/data.js - Part 8

    // --- XB2 3.1 城市的辐射功能 ---
    'xb2c3s1': {
        title: '3.1 城市的辐射功能',
        ppt: [
            {role:'peter', title:'火车拉来的城市：郑州', content:'嘿！我是彼得兔。听说有个城市叫<b>郑州</b>（P43），以前只是个小县城。<br>后来“京汉”和“陇海”两条铁路在这儿一交叉，哇！它就像吃了超级胡萝卜一样，长得飞快！<br>现在它是中原城市群的老大，这就叫<b>交通枢纽</b>的力量！', visual:'icon_train', anim_type:'fadeIn'},
            {role:'benjamin', title:'什么是城市辐射？', content:'我是本杰明。城市就像一个<b>“能量源”</b>。<br>它把自己的资金、技术、人才、信息、产品，像光一样射向周围。<br>这叫<b>辐射功能</b>。<br>能量越强（城市等级越高），射得越远（腹地越广）。<br>就像麦奎格先生的菜园，香味能飘到很远的森林里！', visual:'icon_radar', anim_type:'slideInLeft'},
            {role:'lily', title:'世界的中心：纽约', content:'我是莉莉。看看<b>纽约</b>（P45）。<br>它不仅是美国的，更是世界的！<br><b>华尔街</b>（金融）、<b>联合国</b>（政治）、<b>百老汇</b>（文化）。<br>它的辐射范围是<b>全球</b>！全世界的钱都听它的指挥。', visual:'icon_money', anim_type:'rotateIn'},
            {role:'tod', title:'武汉的“九省通衢”', content:'我是托德。再看<b>武汉</b>（P46）。<br>位于长江中游，铁路水路都通。<br>它是湖北的老大，辐射周边8个城市（武汉城市圈）。<br>虽然它比纽约小，但在中国中部，它就是那个说了算的“狐狸王”！', visual:'icon_ship', anim_type:'shake'},
            {role:'jemima', title:'腹地：城市的地盘', content:'我是杰米玛。城市辐射到的区域叫<b>“腹地”</b>。<br>腹地越大，城市发展潜力越大。<br>腹地给城市提供原料、劳动力和市场。<br>城市给腹地提供产品和服务。<br>大家是互利共赢的伙伴关系！', visual:'icon_map_scatter', anim_type:'zoomIn'},
            {role:'peter', title:'如何增强辐射？', content:'想让城市更强？<br>1. <b>修路</b>：交通要快（高铁、高速）。<br>2. <b>搞产业</b>：要有拿得出手的产品。<br>3. <b>强服务</b>：医院、学校要好。<br>这样周围的小伙伴（周边城市）才会心甘情愿跟着你混！', visual:'icon_rebuild', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 城市是区域的中心。<br>2. 辐射就是带动周边发展。<br>3. 纽约辐射全球，武汉辐射中部。<br>4. 腹地和城市是命运共同体。<br>任务完成，去坐火车咯！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'郑州之所以能发展成为中原城市群的核心，最初主要得益于？', opt:['A. 丰富的水资源','B. 优越的铁路交通条件','C. 悠久的历史文化','D. 丰富的矿产资源'], ans:'B', expl:'郑州是京广线和陇海线交汇的铁路枢纽，被称为“火车拉来的城市”。'},
                {type:'single', q:'关于城市辐射功能的说法，正确的是？', opt:['A. 城市规模越小，辐射能力越强','B. 城市辐射功能只体现在经济方面','C. 城市等级越高，辐射范围越大','D. 城市辐射会导致周边地区贫困'], ans:'C', expl:'城市等级越高，功能越全，辐射范围（腹地）越大。'},
                {type:'single', q:'纽约作为全球中心城市，其辐射功能主要体现在？', opt:['A. 仅仅辐射美国本土','B. 辐射范围覆盖全球','C. 主要依赖农业辐射','D. 仅辐射周边邻国'], ans:'B', expl:'纽约在金融、贸易、文化等方面具有全球影响力。'},
                {type:'single', q:'武汉城市圈以武汉为核心，这体现了武汉的什么作用？', opt:['A. 辐射带动作用','B. 资源掠夺作用','C. 环境污染源','D. 交通阻碍作用'], ans:'A', expl:'中心城市对周边区域具有辐射带动作用。'},
                {type:'single', q:'城市的“腹地”是指？', opt:['A. 城市的中心区域','B. 城市的地下空间','C. 城市周围接受其辐射和服务的区域','D. 城市的绿化带'], ans:'C', expl:'腹地是城市的服务范围和辐射区域。'},
                {type:'single', q:'下列哪项措施有利于增强城市的辐射功能？', opt:['A. 完善交通运输网络','B. 限制外来人口流入','C. 关闭工厂','D. 减少对外贸易'], ans:'A', expl:'便捷的交通是辐射功能发挥的载体。'},
                {type:'single', q:'“上海本身没有资源，但全国的资源都往上海跑”，这说明上海？', opt:['A. 腹地广阔，集聚能力强','B. 依靠行政命令掠夺','C. 交通不便','D. 产业落后'], ans:'A', expl:'上海凭借强大的服务功能和市场，吸引全国资源。'},
                {type:'multi', q:'【多选】城市在区域发展中的作用包括？', opt:['A. 区域的管理中心','B. 区域的服务中心','C. 区域的经济增长中心','D. 区域的农业生产中心'], ans:'ABC', expl:'城市主要发展二三产业，通常不是农业中心。'},
                {type:'multi', q:'【多选】纽约之所以能成为全球金融中心，是因为？', opt:['A. 拥有华尔街等金融集聚区','B. 强大的经济实力','C. 完善的信息网络','D. 丰富的煤炭资源'], ans:'ABC', expl:'金融中心依赖经济实力和信息服务，而非矿产资源。'},
                {type:'multi', q:'【多选】武汉发展成为交通枢纽的有利条件？', opt:['A. 长江与汉江交汇（水运）','B. 京广铁路穿过（陆运）','C. 位于中国中部（位置）','D. 地形崎岖'], ans:'ABC', expl:'武汉九省通衢，水陆交通便利。'}
            ],
            part_b: [
                {title:'🥕 大萝卜的引力', q:'如果彼得兔把最大的胡萝卜放在花园中间，所有的兔子都会围过来。这像城市的什么功能？', ans:'<b>集聚功能（和辐射功能）。</b><br>大胡萝卜（大城市）有资源和机会，能把周围的兔子（人口、资金）吸引过来（集聚）。吃饱了的兔子又会把能量带回各自的洞穴（辐射）。'},
                {title:'🚂 火车来了', q:'郑州以前比开封小，后来比开封大，为什么？', ans:'<b>铁路改变了区位。</b><br>在水运时代，开封（运河）厉害。在铁路时代，郑州（铁路十字路口）交通更便利，人流物流汇聚更快，腹地更广，所以后来居上。'},
                {title:'🏙️ 纽约的喷嚏', q:'人们说“华尔街打个喷嚏，全世界都感冒”。这说明了什么？', ans:'<b>纽约的全球辐射力。</b><br>纽约是世界金融中心，它的股市波动（打喷嚏）会通过紧密的金融网络瞬间传导到世界各地（感冒），影响全球经济。'}
            ]
        }
    },

    // --- XB2 3.2 地区产业结构变化 ---
    'xb2c3s2': {
        title: '3.2 地区产业结构变化',
        ppt: [
            {role:'peter', title:'小渔村的变身术', content:'嘿！我是彼得兔。听说有个叫<b>深圳</b>的地方（P49）。<br>40年前，那里的人像我一样，每天在海边抓鱼（第一产业）。<br>后来，他们开始盖工厂做衣服（第二产业）。<br>现在，他们都在写代码、搞金融、玩无人机（第三产业）。<br>这就是<b>产业结构升级</b>！', visual:'icon_ship', anim_type:'fadeIn'},
            {role:'lily', title:'什么是产业结构？', content:'我是莉莉。就是大家都在干什么活。<br>1. <b>第一产业</b>：种地、养鱼（靠天吃饭）。<br>2. <b>第二产业</b>：工厂、建筑（加工制造）。<br>3. <b>第三产业</b>：服务、金融、科技（脑力劳动）。<br>越发达的地方，第三产业占比越高！', visual:'icon_chart', anim_type:'slideInLeft'},
            {role:'benjamin', title:'上海的进阶之路', content:'我是本杰明。看上海（P53）。<br><b>初期</b>：那是轻纺工业基地（做衣服）。<br><b>中期</b>：变成了重化工业基地（造船、炼钢）。<br><b>现在</b>：是金融、贸易、航运中心（陆家嘴高楼大厦）。<br>产业一直在变“高级”，这就叫<b>转型</b>。', visual:'icon_money', anim_type:'rotateIn'},
            {role:'tod', title:'为什么要变？', content:'我是托德。为什么不一直做衣服？<br>1. <b>比较优势变了</b>：地价贵了，工人工资高了，做衣服不赚钱了。<br>2. <b>政策引导</b>：政府想搞高科技。<br>3. <b>技术进步</b>：有了新技术，才能造飞船。<br>适者生存，产业也要进化！', visual:'icon_rebuild', anim_type:'shake'},
            {role:'jemima', title:'四大地区的差异', content:'我是杰米玛。中国太大了，大家进度不一样。<br><b>东部</b>：跑得最快，主搞高科技和服务业。<br><b>中部/西部</b>：正在承接东部的工厂，第二产业占比大。<br><b>东北</b>：老工业基地，正在努力换新貌。<br>大家像接力赛一样，互相配合。', visual:'icon_china_map', anim_type:'zoomIn'},
            {role:'peter', title:'产业升级的秘诀', content:'怎么才能升级？<br>靠<b>创新</b>！<br>就像我不只会偷吃胡萝卜，我还学会了用手机买胡萝卜（电商）。<br>科技创新是推动产业结构升级的根本动力。', visual:'icon_phone', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 产业分一二三，三产越高越发达。<br>2. 深圳和上海是升级的榜样。<br>3. 升级动力：技术、政策、优势变化。<br>4. 东部快，中西部追。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'改革开放初期，深圳的主导产业主要是？', opt:['A. 高新技术产业','B. 金融服务业','C. 劳动密集型加工制造业','D. 现代农业'], ans:'C', expl:'初期利用廉价劳动力和土地，发展“三来一补”加工业。'},
                {type:'single', q:'衡量一个地区经济发展水平的重要指标是？', opt:['A. 产业结构','B. 城市面积','C. 人口数量','D. 矿产储量'], ans:'A', expl:'产业结构（尤其是第三产业比重）反映了经济发展的阶段和质量。'},
                {type:'single', q:'目前，上海市的主导产业是？', opt:['A. 纺织工业','B. 钢铁工业','C. 金融、贸易、航运等现代服务业','D. 煤炭开采'], ans:'C', expl:'上海已转型为国际经济、金融、贸易中心。'},
                {type:'single', q:'推动地区产业结构升级的根本动力是？', opt:['A. 资源开发','B. 技术创新','C. 人口增长','D. 环境破坏'], ans:'B', expl:'技术创新能提高生产效率，催生新产业。'},
                {type:'single', q:'关于我国四大地区产业结构的叙述，正确的是？', opt:['A. 东部地区第一产业比重最高','B. 西部地区第三产业比重最高','C. 东部地区产业结构相对最优化','D. 东北地区以轻工业为主'], ans:'C', expl:'东部经济最发达，二三产业比重高，结构最优。'},
                {type:'single', q:'产业结构“软化”是指？', opt:['A. 工业产品越来越软','B. 服务业（第三产业）比重上升','C. 农业比重上升','D. 重工业比重上升'], ans:'B', expl:'“软化”指经济发展中知识、信息、服务等无形要素的作用增强。'},
                {type:'single', q:'某地区第三产业比重超过第二产业，说明该地区？', opt:['A. 工业衰退','B. 农业发达','C. 处于工业化后期或后工业化阶段','D. 刚刚起步'], ans:'C', expl:'这是经济发达、进入成熟阶段的标志。'},
                {type:'multi', q:'【多选】影响产业结构的因素包括？', opt:['A. 资源禀赋','B. 技术水平','C. 消费需求','D. 政策导向'], ans:'ABCD', expl:'资源、技术、市场、政策共同作用。'},
                {type:'multi', q:'【多选】上海浦东开发开放后，重点发展的产业有？', opt:['A. 金融贸易','B. 高新技术','C. 现代物流','D. 传统纺织'], ans:'ABC', expl:'浦东瞄准的是高附加值的现代产业。'},
                {type:'multi', q:'【多选】产业结构升级的表现？', opt:['A. 产值比重由“一二三”向“三二一”转变','B. 就业比重由第一产业向二三产业转移','C. 劳动密集型向技术密集型转变','D. 高污染向绿色低碳转变'], ans:'ABCD', expl:'这是产业升级的普遍规律。'}
            ],
            part_b: [
                {title:'📱 手机的变迁', q:'以前深圳做手机是“组装”（赚10块），现在是“研发芯片”（赚1000块）。这说明了什么？', ans:'<b>产业向价值链高端攀升。</b><br>从简单的加工制造（劳动密集型）转向设计研发（技术密集型），附加值更高，竞争力更强，这是产业升级的核心。'},
                {title:'🏭 托德的烦恼', q:'托德在上海开了个袜子厂，最近他想搬到安徽去，为什么？', ans:'<b>成本上升（比较优势丧失）。</b><br>上海的地租和工人工资太高了，做袜子利润薄，划不来。安徽（中部）成本低，适合劳动密集型产业。这就是<b>产业转移</b>。'},
                {title:'🧑‍🌾 莉莉的观察', q:'为什么发达国家种地的人很少（第一产业比重低），但大家都有饭吃？', ans:'<b>农业现代化（效率高）。</b><br>虽然人少，但机械化、科技化水平高，产量大。产业结构中第一产业占比低，不代表农业不重要，而是代表工业和服务业更发达。'}
            ]
        }
    },

    // --- XB2 4.1 流域内协调发展 ---
    'xb2c4s1': {
        title: '4.1 流域内协调发展',
        ppt: [
            {role:'peter', title:'一条河，一家人', content:'嘿！我是彼得兔。看这条长长的<b>黄河</b>。<br>上游的本杰明在喝水，中游的莉莉在洗萝卜，下游的我在……等水喝。<br>如果不商量好（协调），上游把水喝光了，下游就干了！<br><b>流域</b>就是一个整体，大家必须协同发展。', visual:'icon_water_drop', anim_type:'fadeIn'},
            {role:'benjamin', title:'黄河的“病”', content:'我是本杰明。黄河以前病得很重。<br>1. <b>断流</b>：70-90年代，下游经常没水，最长一年断了226天！<br>2. <b>泥沙</b>：中游黄土高原水土流失，下游变成“地上河”。<br>3. <b>污染</b>：大家都往河里排脏水。', visual:'icon_drought', anim_type:'slideInLeft'},
            {role:'lily', title:'上中下游怎么分工？', content:'我是莉莉。要治好黄河，得分工合作。<br><b>上游（水源地）</b>：保护生态，修水库调水。<br><b>中游（产沙区）</b>：种树种草，保持水土（减少泥沙）。<br><b>下游（用水区）</b>：节约用水，疏通河道。<br>全流域一盘棋！', visual:'icon_map_scatter', anim_type:'rotateIn'},
            {role:'tod', title:'统一调度令', content:'我是托德。为了解决断流，国家下了死命令：<b>统一调度</b>。<br>谁能用水，用多少，国家说了算。<br>1999年开始，黄河再也没有断流过！<br>这就是行政手段的威力。', visual:'icon_chart', anim_type:'shake'},
            {role:'jemima', title:'案例：莱茵河的治理', content:'我是杰米玛。欧洲的莱茵河也臭过。<br>后来沿河9个国家坐下来开会（国际合作）。<br>成立委员会，监测水质，甚至把三文鱼都养回来了。<br><b>启示：</b> 跨区域河流，更需要跨界合作。', visual:'icon_ship', anim_type:'zoomIn'},
            {role:'peter', title:'流域协作机制', content:'怎么才能长久合作？<br>1. <b>法律</b>：定规矩。<br>2. <b>行政</b>：河长制（谁管河段谁负责）。<br>3. <b>市场</b>：生态补偿（下游给上游钱，感谢上游保护水质）。<br>只有利益捆绑，关系才铁！', visual:'icon_integration', anim_type:'slideInUp'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 流域是整体，牵一发而动全身。<br>2. 黄河治理靠统一调度和水土保持。<br>3. 莱茵河治理靠国际合作。<br>4. 保护母亲河，人人有责！<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'实施流域内协调发展的根本原因是？', opt:['A. 流域的整体性','B. 流域的差异性','C. 流域的开放性','D. 流域的封闭性'], ans:'A', expl:'水流将流域各部分联系成一个整体，上下游相互影响。'},
                {type:'single', q:'黄河下游断流的主要自然原因是？', opt:['A. 流域内降水季节变化大，径流量小','B. 沿岸工业用水量大','C. 农业灌溉用水过多','D. 上游水库截水'], ans:'A', expl:'B、C、D是人为原因。自然原因是黄河本身水量偏小且季节变化大。'},
                {type:'single', q:'解决黄河断流最有效的行政措施是？', opt:['A. 跨流域调水','B. 实施水资源统一调度','C. 提高水价','D. 植树造林'], ans:'B', expl:'1999年实施的水量统一调度彻底解决了断流问题。'},
                {type:'single', q:'黄河中游水土流失治理的主要措施是？', opt:['A. 加固大堤','B. 疏浚河道','C. 小流域综合治理（保水保土）','D. 发展航运'], ans:'C', expl:'中游是泥沙来源，需通过生物和工程措施保持水土。'},
                {type:'single', q:'莱茵河治理成功的关键在于？', opt:['A. 下游国家单独治理','B. 上游国家单独治理','C. 建立流域内多国协作机制','D. 封锁河道禁止排污'], ans:'C', expl:'莱茵河流经多国，国际合作委员会发挥了关键作用。'},
                {type:'single', q:'关于“河长制”，说法正确的是？', opt:['A. 只有大江大河才设立河长','B. 河长主要负责河道捕鱼','C. 是一种行政监管制度，谁管辖谁负责','D. 河长制不利于流域治理'], ans:'C', expl:'河长制落实了地方党政领导对河湖管理的责任。'},
                {type:'single', q:'流域上游地区的主要生态功能是？', opt:['A. 发展重工业','B. 涵养水源，保持水土','C. 发展城市群','D. 倾倒垃圾'], ans:'B', expl:'上游通常是水源地，生态保护优先。'},
                {type:'multi', q:'【多选】黄河下游“地上河”的成因？', opt:['A. 中游水土流失严重，含沙量大','B. 下游地势平坦，流速减慢','C. 泥沙淤积，河床抬升','D. 下游水量大增'], ans:'ABC', expl:'输沙量大、流速慢导致淤积。'},
                {type:'multi', q:'【多选】流域协调发展的内容包括？', opt:['A. 水量分配','B. 水质保护','C. 防洪减灾','D. 水能开发'], ans:'ABCD', expl:'涉及水资源利用的方方面面。'},
                {type:'multi', q:'【多选】下游地区对上游地区的生态补偿是因为？', opt:['A. 上游为保护水质牺牲了发展机会','B. 上游水质好，下游受益','C. 下游经济通常比上游发达','D. 上游强行索要'], ans:'ABC', expl:'体现了受益者付费、保护者受偿的原则。'}
            ],
            part_b: [
                {title:'💧 彼得的烦恼', q:'如果本杰明在上游把胡萝卜叶子扔进河里，彼得在下游喝水会拉肚子。这说明了流域的什么特性？', ans:'<b>关联性（整体性）。</b><br>上游的水质直接影响下游。水流是纽带，把上中下游紧密联系在一起，所以污染治理必须上下游同步进行。'},
                {title:'🛑 谁来管水', q:'以前大家随便抽黄河水浇地，结果河干了。后来国家派人专门管闸门，谁也不能多抽。这叫什么制度？', ans:'<b>水资源统一调度。</b><br>将水权收归国家统一管理，根据全流域的水量情况，给每个省分配用水指标，保证河道里始终有水流（生态流量）。'},
                {title:'💰 下游给上游钱', q:'为什么处于下游的经济发达城市要给上游的贫困山区钱？', ans:'<b>生态补偿。</b><br>上游山区为了保护水源，不能办工厂、不能砍树，牺牲了经济发展。下游享受了清洁水源，理应在经济上对上游进行补偿，这叫“吃水不忘挖井人”。'}
            ]
        }
    },

    // --- XB2 4.2 资源跨区域调配 ---
    'xb2c4s2': {
        title: '4.2 资源跨区域调配',
        ppt: [
            {role:'peter', title:'搬运工彼得兔', content:'嘿！我是彼得兔。看这幅图：<br>南方水多得发洪水，北方旱得裂口子。<br>西部天然气多得用不完，东部烧煤污染大。<br>这就是<b>资源分布不均</b>。<br>怎么办？当搬运工！把多的地方搬到少的地方。', visual:'icon_compare', anim_type:'fadeIn'},
            {role:'benjamin', title:'南水北调：超级水渠', content:'我是本杰明。我们修了三条超级水渠把长江水运到北方：<br>1. <b>东线</b>：利用京杭大运河，虽然要抽水（扬水），但工程量小。<br>2. <b>中线</b>：从丹江口水库自流到北京，水质好，能喝！<br>3. <b>西线</b>：还在计划中，太难了（要穿过高山）。', visual:'icon_water_drop', anim_type:'slideInLeft'},
            {role:'tod', title:'西气东输：能源大动脉', content:'我是托德。我把新疆（塔里木盆地）的天然气，通过管道送到上海。<br><b>好处：</b><br>西部：把气变成钱（资源优势变经济优势）。<br>东部：烧气比烧煤干净（改善环境），还缓解了能源短缺。<br>这就是<b>双赢</b>！', visual:'icon_fire', anim_type:'rotateIn'},
            {role:'lily', title:'西电东送：空中运煤', content:'我是莉莉。煤炭运输太麻烦，我们在西部直接把煤烧成电（火电），或者利用水能发电（水电）。<br>然后通过电线送到东部。<br>这叫<b>变输煤为输电</b>。<br>减轻了铁路压力，也把污染留在了西部（需要治理哦）。', visual:'icon_drill', anim_type:'shake'},
            {role:'jemima', title:'影响：几家欢喜？', content:'调配资源影响深远：<br><b>调入区</b>：解渴、清洁、发展。<br><b>调出区</b>：赚钱、就业、基础设施建设。<br><b>沿线</b>：带动相关产业。<br>当然，也要注意生态保护，比如不要破坏沙漠植被。', visual:'icon_integration', anim_type:'zoomIn'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 资源调配是因为分布不均和需求不匹配。<br>2. 南水北调：东、中、西三线。<br>3. 西气东输、西电东送：东西互补。<br>4. 这是一个双赢的战略！<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'实施资源跨区域调配的根本原因是？', opt:['A. 资源分布不均与消费需求不匹配','B. 交通运输发达','C. 资源开采技术进步','D. 为了增加就业'], ans:'A', expl:'资源的产地和消费地不一致，导致需要调配。'},
                {type:'single', q:'南水北调中线工程的水源地是？', opt:['A. 扬州江都','B. 丹江口水库','C. 三峡水库','D. 葛洲坝'], ans:'B', expl:'中线从汉江上的丹江口水库引水。'},
                {type:'single', q:'西气东输工程对东部地区的主要生态环境效益是？', opt:['A. 缓解能源短缺','B. 改善大气质量','C. 增加就业机会','D. 带动相关产业'], ans:'B', expl:'A、C、D是社会经济效益。天然气清洁，能减少煤炭燃烧，改善空气（生态效益）。'},
                {type:'single', q:'西气东输对西部地区的影响不包括？', opt:['A. 将资源优势转化为经济优势','B. 推动基础设施建设','C. 增加就业','D. 彻底解决西部水资源短缺'], ans:'D', expl:'西气东输是输气，不能解决缺水问题。'},
                {type:'single', q:'南水北调东线工程的主要优点是？', opt:['A. 水质最好','B. 全线自流','C. 利用京杭大运河河道，工程量小','D. 输水量最大'], ans:'C', expl:'东线利用已有运河，成本低，但水质稍差且需逐级提水。'},
                {type:'single', q:'“西电东送”中，北线主要输送的是？', opt:['A. 水电','B. 火电','C. 核电','D. 风电'], ans:'B', expl:'北线主要将山西、内蒙古的坑口火电送往京津唐。'},
                {type:'single', q:'我国水资源空间分布特点是？', opt:['A. 南丰北缺','B. 北丰南缺','C. 东少西多','D. 均匀分布'], ans:'A', expl:'受季风影响，降水南多北少。'},
                {type:'multi', q:'【多选】西气东输管道经过的生态脆弱区有？', opt:['A. 塔里木盆地（沙漠）','B. 黄土高原（水土流失）','C. 江南丘陵','D. 长江中下游平原'], ans:'AB', expl:'工程穿越了干旱和水土流失严重地区。'},
                {type:'multi', q:'【多选】变输煤为输电对输入地（东部）的好处？', opt:['A. 减轻交通运输压力','B. 改善能源消费结构','C. 减轻环境污染','D. 增加煤炭储量'], ans:'ABC', expl:'输电避免了运煤的拥堵和烧煤的污染。'},
                {type:'multi', q:'【多选】我国主要的资源跨区域调配工程有？', opt:['A. 南水北调','B. 西气东输','C. 西电东送','D. 北煤南运'], ans:'ABCD', expl:'这些都是著名的调配工程。'}
            ],
            part_b: [
                {title:'🥕 萝卜搬家', q:'彼得兔为什么要把森林里的木头搬到草原，又把草原的胡萝卜搬到森林？', ans:'<b>资源互补（调配）。</b><br>森林木头多但没胡萝卜，草原相反。通过搬运（调配），两个地方都能盖房子又能吃饱，实现了资源优化配置。'},
                {title:'🔥 烧煤还是烧气', q:'上海以前烧煤做饭，满屋子烟；现在烧天然气，干净卫生。这是谁的功劳？', ans:'<b>西气东输。</b><br>西部送来的天然气属于清洁能源，优化了上海的能源结构，大大减少了雾霾和酸雨。'},
                {title:'🌊 东线的水', q:'南水北调东线的水为什么黄黄的？', ans:'<b>流经平原，且位于下游。</b><br>东线利用京杭大运河，流经人口稠密、工业发达的东部地区，易受污染；且处于河流下游，泥沙含量可能较高。所以东线治污是关键。'}
            ]
        }
    },

    // --- XB2 4.3 产业转移 ---
    'xb2c4s3': {
        title: '4.3 产业转移',
        ppt: [
            {role:'peter', title:'工厂长脚了？', content:'嘿！我是彼得兔。奇怪，村口的鞋厂不见了，搬到了很远的越南。<br>隔壁的纺织厂也不见了，搬到了新疆。<br>这就叫<b>产业转移</b>。<br>企业为了赚钱（利润最大化），会像候鸟一样迁徙。', visual:'icon_factory', anim_type:'fadeIn'},
            {role:'tod', title:'为什么要搬家？', content:'我是托德。我在城里开工厂，房租贵、工资高、环保查得严。<br>我要破产了！<br>但在欠发达地区，地便宜、人工便宜、政策还优惠。<br>所以我搬过去，成本低了，利润就回来了！<br>这叫<b>降低成本，开拓市场</b>。', visual:'icon_money', anim_type:'slideInLeft'},
            {role:'lily', title:'谁在搬？搬去哪？', content:'我是莉莉。一般是<b>劳动密集型</b>（做衣服鞋子）和<b>资源密集型</b>（挖矿冶炼）先搬。<br>方向：发达地区 -> 欠发达地区。<br>国际：美国/日本 -> 中国 -> 东南亚/非洲。<br>国内：东部沿海 -> 中西部/东北。', visual:'icon_map_scatter', anim_type:'rotateIn'},
            {role:'benjamin', title:'对转出地的好处', content:'我是本杰明。旧工厂搬走了，地腾出来了。<br>我们可以盖写字楼，搞研发，搞金融（发展第三产业）。<br>虽然短期内工人会失业，但长期看，环境变好了，产业升级了。<br>这就叫<b>“腾笼换鸟”</b>。', visual:'icon_rebuild', anim_type:'shake'},
            {role:'jemima', title:'对承接地的好处', content:'我是杰米玛。工厂搬来我们村了！<br>我们有工作了（增加就业），村里修了路（基础设施），大家有钱了（城市化）。<br>但是……烟囱也多了，水变脏了。<br>我们要注意<b>环境污染</b>的转移！', visual:'icon_alert_red', anim_type:'zoomIn'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 产业转移是为了降成本、扩市场。<br>2. 劳动密集型产业最爱跑。<br>3. 转出地：腾笼换鸟，产业升级。<br>4. 承接地：加快发展，但这把双刃剑。<br>准备考核！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'影响国际产业转移的主要因素通常不包括？', opt:['A. 劳动力成本','B. 内部交易成本','C. 市场','D. 气候条件'], ans:'D', expl:'气候通常不是工业选址的主要因素。A、B、C是三大主要因素。'},
                {type:'single', q:'目前，全球劳动密集型产业转移的总体趋势是？', opt:['A. 向发达国家转移','B. 向拥有丰富廉价劳动力的发展中国家转移','C. 向高纬度地区转移','D. 向沿海地区集中'], ans:'B', expl:'追逐低成本劳动力是其转移规律。'},
                {type:'single', q:'“东锭西移”是指我国哪种产业由东部向西部转移？', opt:['A. 电子装配','B. 棉纺织业','C. 钢铁工业','D. 石油化工'], ans:'B', expl:'新疆盛产棉花，将东部棉纺织业移至西部接近原料产地。'},
                {type:'single', q:'产业转移对转出地的积极影响是？', opt:['A. 增加就业机会','B. 促进产业升级','C. 加剧环境污染','D. 降低城市化水平'], ans:'B', expl:'腾出空间发展高新技术和服务业，实现升级。'},
                {type:'single', 'q':'产业转移对承接地的消极影响主要是？', opt:['A. 造成人才流失','B. 带来环境污染','C. 减缓工业化进程','D. 减少财政收入'], ans:'B', expl:'落后产能往往伴随高污染，承接地可能成为“污染避难所”。'},
                {type:'single', q:'日本汽车企业在美国投资建厂，主要目的是？', opt:['A. 利用美国廉价劳动力','B. 避开贸易壁垒，占领市场','C. 利用美国丰富资源','D. 提高技术水平'], ans:'B', expl:'产品直接在市场地生产，可避开关税等壁垒。'},
                {type:'single', q:'一般最早进行转移的产业部门是？', opt:['A. 纺织、服装制造','B. 航空航天','C. 生物制药','D. 软件开发'], ans:'A', expl:'劳动密集型产业对成本最敏感，最早转移。'},
                {type:'multi', q:'【多选】我国中西部地区承接产业转移的优势有？', opt:['A. 劳动力成本较低','B. 土地价格较低','C. 矿产、能源丰富','D. 科技力量雄厚'], ans:'ABC', expl:'D是东部的优势。'},
                {type:'multi', q:'【多选】产业转移伴随着哪些要素的流动？', opt:['A. 资金','B. 技术','C. 管理经验','D. 污染'], ans:'ABCD', expl:'产业转移是综合要素的流动。'},
                {type:'multi', q:'【多选】深圳产业结构升级，大量工厂外迁，原因是？', opt:['A. 劳动力成本上升','B. 土地资源紧张','C. 政策引导创新','D. 市场萎缩'], ans:'ABC', expl:'生产要素成本上升逼迫低端产业外迁。'}
            ],
            part_b: [
                {title:'👟 鞋子的旅行', q:'彼得兔发现他的运动鞋以前写着“Made in China”，现在写着“Made in Vietnam”（越南）。这是为什么？', ans:'<b>产业转移。</b><br>制鞋是劳动密集型产业。随着中国工人工资上涨，制鞋成本变高。企业为了省钱，把工厂搬到了工资更低的越南。'},
                {title:'🏭 腾笼换鸟', q:'托德把他的脏兮兮的煤球厂关了，在原址上建了一个高科技机器人研发中心。这对他的领地有什么好处？', ans:'<b>环境改善，经济效益提高。</b><br>煤球厂污染环境且利润低；机器人中心无污染且附加值高。这就是通过产业转移（淘汰落后产能）实现产业升级。'},
                {title:'🏭 新疆的棉被', q:'为什么广东的纺织厂要搬到新疆去？', ans:'<b>接近原料产地。</b><br>新疆是我国最大的优质棉花产地。纺织厂搬过去，可以直接用当地的棉花，省去了长途运输原料的运费，降低了成本。'}
            ]
        }
    },

    // --- XB2 4.4 国际合作 ---
    'xb2c4s4': {
        title: '4.4 国际合作',
        ppt: [
            {role:'peter', title:'地球村的邻居', content:'嘿！我是彼得兔。世界这么大，没有哪个国家能啥都有。<br>我有胡萝卜，你有石油；我有技术，你有市场。<br>大家必须做生意（贸易）、搞合作。<br>现在的地球是一个<b>“地球村”</b>，经济全球化把我们紧紧绑在一起。', visual:'icon_earth', anim_type:'fadeIn'},
            {role:'lily', title:'一部手机的环球旅行', content:'我是莉莉。看这部手机。<br>设计在美国，芯片在日本，屏幕在韩国，组装在中国，卖到全世界。<br>这就是<b>全球供应链</b>。<br>任何一个环节出问题（比如日本地震），全世界都造不出手机！', visual:'icon_phone', anim_type:'slideInLeft'},
            {role:'tod', title:'一带一路：超级朋友圈', content:'我是托德。中国提出了<b>“一带一路”</b>倡议。<br><b>丝绸之路经济带</b>（陆上）+ <b>21世纪海上丝绸之路</b>（海上）。<br>我们帮别人修路、架桥、建港口（基建狂魔）。<br>大家一起赚钱，互利共赢！', visual:'icon_map_scatter', anim_type:'rotateIn'},
            {role:'jemima', title:'中欧班列：钢铁驼队', content:'我是杰米玛。看那列火车！<b>“渝新欧”</b>班列。<br>从重庆出发，穿过哈萨克斯坦、俄罗斯……一直开到德国！<br>把中国的电脑运过去，把欧洲的汽车运回来。<br>比海运快，比空运便宜，太棒了！', visual:'icon_train', anim_type:'shake'},
            {role:'benjamin', title:'合作解决大问题', content:'我是本杰明。还有些事，一个国家搞不定。<br>比如<b>气候变暖</b>、<b>海洋污染</b>、<b>跨国犯罪</b>。<br>这需要全球治理，大家坐下来开会签协议（如《巴黎协定》）。<br>单打独斗不行，团结就是力量！', visual:'icon_integration', anim_type:'zoomIn'},
            {role:'peter', title:'全节总结', content:'小探险家们，记住：<br>1. 经济全球化是趋势。<br>2. 一带一路是中国给世界的礼物。<br>3. 中欧班列连通亚欧大陆。<br>4. 环境问题需要全球合作。<br>彼得兔的选必二冒险圆满结束！', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'经济全球化的主要表现不包括？', opt:['A. 生产全球化','B. 贸易全球化','C. 金融全球化','D. 人口分布全球均匀化'], ans:'D', expl:'人口分布受自然和经济因素影响，极不均匀，全球化不意味着人口均匀。'},
                {type:'single', q:'“一带一路”中的“一路”指的是？', opt:['A. 丝绸之路经济带','B. 21世纪海上丝绸之路','C. 茶马古道','D. 川藏公路'], ans:'B', expl:'一带是丝绸之路经济带，一路是21世纪海上丝绸之路。'},
                {type:'single', q:'中欧班列（如渝新欧）相比于海运的优势是？', opt:['A. 运量更大','B. 运费更低','C. 运输时间更短','D. 连续性更差'], ans:'C', expl:'铁路比海运快，比空运便宜。'},
                {type:'single', q:'一部手机的零部件来自世界各地，体现了？', opt:['A. 工业惯性','B. 工业集聚','C. 工业分散与全球产业链','D. 工业地域'], ans:'C', expl:'跨国公司在全球寻找最优区位，属于工业分散。'},
                {type:'single', q:'解决全球气候变暖问题，需要各国加强？', opt:['A. 贸易壁垒','B. 国际合作','C. 军事竞赛','D. 边境封锁'], ans:'B', expl:'气候变暖是全球性问题，必须共同治理。'},
                {type:'single', q:'“一带一路”建设遵循的原则是？', opt:['A. 独立自主','B. 共商、共建、共享','C. 强者为王','D. 零和博弈'], ans:'B', expl:'这是“一带一路”的核心理念。'},
                {type:'single', q:'日本大地震导致全球电子产品价格上涨，说明？', opt:['A. 日本垄断了电子产品','B. 区域经济具有独立性','C. 经济全球化下各国相互依赖','D. 地震有利于经济发展'], ans:'C', expl:'产业链中断影响全球，体现了相互依赖。'},
                {type:'multi', q:'【多选】中国推进“一带一路”建设的意义？', opt:['A. 促进沿线国家基础设施建设','B. 深化国际产能合作','C. 开拓新的出口市场','D. 掠夺他国资源'], ans:'ABC', expl:'D错误，是互利共赢。'},
                {type:'multi', q:'【多选】属于全球性环境问题需要国际合作的是？', opt:['A. 臭氧层空洞','B. 全球变暖','C. 某城市垃圾分类','D. 生物多样性减少'], ans:'ABD', expl:'C是局部问题。'},
                {type:'multi', q:'【多选】跨国公司在发展中国家建厂，主要为了？', opt:['A. 帮助当地致富','B. 降低生产成本','C. 占领当地市场','D. 利用廉价原料'], ans:'BCD', expl:'企业本质是逐利的。'}
            ],
            part_b: [
                {title:'🚂 钢铁驼队', q:'为什么说“中欧班列”是现代的“骆驼队”？', ans:'<b>贸易通道。</b><br>古代骆驼队在丝绸之路上运输丝绸和瓷器；现代火车（中欧班列）在同一条路线上运输电脑和汽车。它们都是连接东西方贸易的桥梁。'},
                {title:'📱 谁制造了手机', q:'彼得兔说他的手机是“世界公民”，为什么？', ans:'<b>全球分工。</b><br>因为手机的几百个零件可能来自十几个国家，设计、制造、销售也在不同国家完成。它凝聚了全世界的技术和劳动。'},
                {title:'🤝 为什么要合作', q:'托德说：“我自己种萝卜自己吃，不跟别人来往。”这样好吗？', ans:'<b>不好（效率低）。</b><br>如果托德只会种萝卜，那他想吃白菜怎么办？想穿衣服怎么办？只有通过交换（贸易）和合作，大家发挥各自的长处，才能过上更丰富的生活。'}
            ]
        }
    },
// js/data.js - Part 9

    // ------------------------------------
    // 选必三 XB3 (功夫熊猫主题)
    // ------------------------------------

    // --- XB3 第一章 (基础铺垫) ---
    'xb3c1s1': {
        title: '1.1 自然资源与人类活动',
        ppt: [
            {role:'po', title:'什么是自然资源？', content:'我是<b>阿宝</b>。自然资源就是大自然给我们的礼物，比如竹子、水、矿产。但不是所有的东西都是资源，得是有用的、能弄到手的才算！', visual:'icon_life', anim_type:'fadeIn'},
            {role:'shifu', title:'资源的分类', content:'我是<b>师父</b>。资源分两类：<br>1. <b>可再生</b>：水、生物、气候（用之不竭，但要保护）。<br>2. <b>非可再生</b>：矿产（用一点少一点）。', visual:'icon_tree', anim_type:'slideInLeft'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'下列属于非可再生资源的是？', opt:['A. 森林','B. 煤炭','C. 阳光','D. 鱼类'], ans:'B', expl:'矿产资源形成周期漫长，属于非可再生。'}
            ],
            part_b: []
        }
    },
    'xb3c1s2': {title: '1.2 石油资源与国家安全', ppt: [{role:'tigress', title:'石油安全', content:'石油是工业血液，对外依存度高会威胁安全...', visual:'icon_oil'}], quiz:{part_a:[], part_b:[]}},
    'xb3c1s3': {title: '1.3 煤炭资源与国家安全', ppt: [{role:'po', title:'煤炭地位', content:'煤炭是我国能源安全的压舱石...', visual:'icon_coal'}], quiz:{part_a:[], part_b:[]}},

    // --- XB3 2.1 资源安全对国家安全的影响 ---
    'xb3c2s1': {
        title: '2.1 资源安全对国家安全的影响',
        ppt: [
            {role:'po', title:'神龙大侠的包子危机', content:'大家好！我是<b>阿宝</b>。如果和平谷的包子铺突然没有面粉了，大家就会饿肚子，可能会为了抢包子打架！<br>这就是<b>资源安全</b>问题。<br>资源不仅是生活的必需品，更是国家安全（National Security）的基石。', visual:'icon_life', anim_type:'fadeIn'},
            {role:'shifu', title:'战略资源的赌局', content:'我是<b>师父</b>。1980年，美国两位教授打赌资源价格涨跌。<br>结果赌“跌”的赢了。<br>为什么？因为<b>技术进步</b>（替代品出现）和<b>市场调节</b>。但这并不意味着资源安全没问题！', visual:'icon_chart', anim_type:'slideInLeft'},
            {role:'tigress', title:'供需失衡的风险', content:'我是<b>悍娇虎</b>。资源安全的核心是<b>供给与需求</b>的平衡。<br>如果供给中断（如战争），或者需求暴增，安全红灯就会亮起。<br>这会引发经济危机，甚至军事冲突。', visual:'icon_alert_red', anim_type:'rotateIn'},
            {role:'ping', title:'案例：“的确良”救了棉花', content:'我是<b>平先生</b>。70年代棉花不够穿。<br>后来引进了化纤技术（“的确良”）。<br>这不仅解决了穿衣问题，还省下了种棉花的土地去种粮食。<br><b>科技创新</b>是保障资源安全的神器！', visual:'icon_clothing', anim_type:'zoomIn'},
            {role:'po', title:'全节总结', content:'大侠们，记住：<br>1. 资源安全关乎国家生死存亡。<br>2. 供需平衡是关键。<br>3. 科技能缓解资源短缺。<br>4. 开源节流、储备合作是四大法宝。', visual:'icon_final', anim_type:'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'资源安全的核心问题是？', opt:['A. 价格越低越好','B. 储备越多越好','C. 供给与需求的平衡','D. 停止开发'], ans:'C', expl:'保障供给满足合理需求是核心。'},
                {type:'single', q:'“的确良”普及主要缓解了哪种资源压力？', opt:['A. 水','B. 石油','C. 耕地（棉田）','D. 森林'], ans:'C', expl:'化纤替代棉花，腾出了耕地。'}
            ],
            part_b: [
                {title:'🪨 稀土的秘密', q:'为什么卖稀土像卖土一样便宜是危险的？', ans:'<b>战略价值流失。</b><br>稀土是高科技关键原料。廉价出口耗尽储备，还可能被对手利用，威胁国防安全。'}
            ]
        }
    },

    // --- XB3 2.2 中国的能源安全 ---
    'xb3c2s2': {
        title: '2.2 中国的能源安全',
        ppt: [
            {role:'po', title:'功夫与能量', content:'练功夫需要“气”，国家发展需要<b>“能源”</b>。<br>我们中国是能源大国，但挑战很大：<br><b>“富煤、少油、缺气、丰水、多风”</b>。<br>这个天赋点得有点偏科啊！', visual:'icon_fire', anim_type:'fadeIn'},
            {role:'tigress', title:'煤炭：老大哥', content:'我是悍娇虎。煤炭占我们能源消费的60%左右。<br><b>优点：</b> 自己有，安全。<br><b>缺点：</b> 脏！排放CO2和烟尘。<br><b>策略：</b> 清洁利用（煤变油、超低排放）。', visual:'icon_coal', anim_type:'slideInLeft'},
            {role:'shifu', title:'石油：脆弱的血管', content:'我是师父。石油对外依存度>70%。<br>进口通道（马六甲海峡）风险大。<br><b>策略：</b> 1. 多元化进口（中俄管道）。2. 建立战略石油储备。', visual:'icon_oil', anim_type:'rotateIn'},
            {role:'po', title:'未来：清洁能源', content:'为了蓝天白云，我们要换“新气”。<br><b>风能、太阳能、水电、核能</b>。<br>目标：<b>碳达峰、碳中和</b>！', visual:'icon_wind', anim_type:'slideInUp'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'我国能源禀赋特点？', opt:['A. 富油少煤','B. 富煤少油缺气','C. 富气少煤','D. 均丰富'], ans:'B', expl:'富煤少油缺气是基本国情。'},
                {type:'single', q:'保障石油安全的措施不包括？', opt:['A. 战略储备','B. 进口多元化','C. 彻底停用石油','D. 煤变油'], ans:'C', expl:'彻底停用不现实。'}
            ],
            part_b: [
                {title:'🚗 电动车的使命', q:'为什么国家补贴电动车？', ans:'<b>能源安全+环保。</b><br>减少对进口石油的依赖，电可以用国内的煤或新能源发，更安全且低碳。'}
            ]
        }
    },

    // --- XB3 2.3 耕地与粮食安全 ---
    'xb3c2s3': {
        title: '2.3 中国的耕地资源与粮食安全',
        ppt: [
            {role:'ping', title:'谁来养活中国？', content:'我是平先生。<b>中国人自己养活自己！</b><br>我们的“谷物”基本自给，口粮绝对安全。<br>手中有粮，心中不慌！', visual:'icon_wheat', anim_type:'fadeIn'},
            {role:'po', title:'耕地红线', content:'我是阿宝。耕地是粮食的妈妈。<br>红线：<b>18亿亩</b>。<br>这就像翡翠宫的围墙，绝对不能突破！', visual:'icon_alert_red', anim_type:'slideInLeft'},
            {role:'tigress', title:'藏粮于地，藏粮于技', content:'我是悍娇虎。<br><b>藏粮于地</b>：保护耕地质量，建高标准农田。<br><b>藏粮于技</b>：靠科技（杂交水稻、无人机）提高产量。', visual:'icon_satellite', anim_type:'zoomIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'我国耕地红线是？', opt:['A. 15亿亩','B. 18亿亩','C. 20亿亩','D. 22亿亩'], ans:'B', expl:'18亿亩是底线。'},
                {type:'single', q:'“藏粮于地”是指？', opt:['A. 埋在地下','B. 保护耕地生产能力','C. 增加仓库','D. 停止耕作'], ans:'B', expl:'保护耕地潜力。'}
            ],
            part_b: [
                {title:'🚜 袁隆平的魔术', q:'地没变，粮食为什么多了？', ans:'<b>藏粮于技。</b><br>科技进步（如杂交水稻）提高了单产。'}
            ]
        }
    },

    // --- XB3 2.4 海洋空间与安全 ---
    'xb3c2s4': {
        title: '2.4 海洋空间资源开发与国家安全',
        ppt: [
            {role:'po', title:'蓝色的国土', content:'我是阿宝。海洋是<b>蓝色国土</b>。<br>空间包括：海面、海水、海底、海岸带。', visual:'icon_sea', anim_type:'fadeIn'},
            {role:'tigress', title:'海洋权益', content:'我是悍娇虎。根据《海洋法公约》：<br>1. <b>领海</b>：12海里（绝对主权）。<br>2. <b>专属经济区</b>：200海里（资源归我）。<br>守住岛屿，就是守住海洋权益！', visual:'icon_shield', anim_type:'rotateIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'领海宽度为？', opt:['A. 12海里','B. 24海里','C. 200海里','D. 公海'], ans:'A', expl:'领海宽度为12海里。'}
            ],
            part_b: [
                {title:'🏝️ 消失的岛屿', q:'岛屿被淹没会损失什么？', ans:'<b>领海和专属经济区。</b><br>岛屿是划定海域权益的基点。'}
            ]
        }
    },

    // --- XB3 3.1 环境安全对国家安全的影响 ---
    'xb3c3s1': {
        title: '3.1 环境安全对国家安全的影响',
        ppt: [
            {role:'po', title:'看不见的敌人', content:'我是阿宝。环境问题（污染、退化）如果超过<b>临界值</b>，就会变成环境安全问题，威胁国家安全。', visual:'icon_storm', anim_type:'fadeIn'},
            {role:'shifu', title:'应对之道', content:'我是师父。三招：<br>1. <b>源头防控</b>。<br>2. <b>过程治理</b>。<br>3. <b>应急响应</b>。', visual:'icon_shield', anim_type:'slideInUp'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'环境安全的核心是？', opt:['A. 无污染','B. 支撑人类生存不发生重大损害','C. 零开发','D. 资源无限'], ans:'B', expl:'环境服务功能维持在安全范围内。'}
            ],
            part_b: [
                {title:'🐫 压死骆驼', q:'“稻草”代表什么？', ans:'<b>临界值。</b><br>环境承载力的极限，超过就会崩溃。'}
            ]
        }
    },

    // --- XB3 3.2 环境污染与国家安全 ---
    'xb3c3s2': {
        title: '3.2 环境污染与国家安全',
        ppt: [
            {role:'tigress', title:'突发事件', content:'我是悍娇虎。像漏油、化工厂爆炸，这类<b>突发环境事件</b>危害极大。', visual:'icon_alert_red', anim_type:'fadeIn'},
            {role:'ping', title:'洋垃圾', content:'我是平先生。我们<b>禁止洋垃圾入境</b>！不当世界的垃圾场。', visual:'icon_rebuild', anim_type:'shake'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'禁止洋垃圾是为了？', opt:['A. 涨价','B. 保护国内环境健康','C. 贸易战','D. 资源过剩'], ans:'B', expl:'洋垃圾加工污染严重。'}
            ],
            part_b: [
                {title:'🌊 河流责任', q:'上游泄漏要先做什么？', ans:'<b>通报下游。</b><br>跨界污染需要合作应对。'}
            ]
        }
    },

    // --- XB3 3.3 生态保护与国家安全 ---
    'xb3c3s3': {
        title: '3.3 生态保护与国家安全',
        ppt: [
            {role:'crane', title:'自然保护区', content:'我是仙鹤。建立<b>自然保护区</b>（如大熊猫公园）是保护生物多样性最有效的措施。', visual:'icon_park', anim_type:'fadeIn'},
            {role:'tigress', title:'生态红线', content:'我是悍娇虎。<b>生态保护红线</b>是底线，绝对不能踩！', visual:'icon_alert_red', anim_type:'shake'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'保护生物多样性最有效的措施？', opt:['A. 动物园','B. 建立自然保护区','C. 标本馆','D. 宠物养殖'], ans:'B', expl:'就地保护最有效。'}
            ],
            part_b: [
                {title:'🐼 生态走廊', q:'为什么要建走廊？', ans:'<b>基因交流。</b><br>连接破碎的栖息地，防止近亲繁殖。'}
            ]
        }
    },

    // --- XB3 3.4 全球气候变化 ---
    'xb3c3s4': {
        title: '3.4 全球气候变化与国家安全',
        ppt: [
            {role:'po', title:'热锅上的包子', content:'我是阿宝。<b>全球变暖</b>导致海平面上升，威胁沿海城市。', visual:'icon_fire', anim_type:'fadeIn'},
            {role:'shifu', title:'国际合作', content:'各国签署《巴黎协定》，共同减排。中国承诺“双碳”。', visual:'icon_earth', anim_type:'slideInUp'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'全球变暖主要原因？', opt:['A. 太阳活动','B. 碳排放增加','C. 火山','D. 地热'], ans:'B', expl:'温室气体排放是主因。'}
            ],
            part_b: [
                {title:'🏝️ 马尔代夫', q:'为什么水下开会？', ans:'<b>生存危机。</b><br>海平面上升威胁低地岛国生存。'}
            ]
        }
    },

    // --- XB3 4.1 走向生态文明 ---
    'xb3c4s1': {
        title: '4.1 走向生态文明',
        ppt: [
            {role:'po', title:'安吉余村', content:'从炸山采矿到生态旅游，“绿水青山就是金山银山”。', visual:'icon_park', anim_type:'fadeIn'},
            {role:'shifu', title:'生态文明', content:'人与自然<b>和谐共生</b>。生产要循环，生活要低碳。', visual:'icon_tree', anim_type:'slideInLeft'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'生态文明核心？', opt:['A. 征服自然','B. 人与自然和谐共生','C. 崇拜自然','D. 停止发展'], ans:'B', expl:'尊重、顺应、保护自然。'}
            ],
            part_b: [
                {title:'🥤 减塑', q:'为什么用纸吸管？', ans:'<b>生活方式绿色化。</b><br>减少白色污染。'}
            ]
        }
    },

    // --- XB3 4.2 国家战略与政策 ---
    'xb3c4s2': {
        title: '4.2 国家战略与政策',
        ppt: [
            {role:'tigress', title:'公地悲剧', content:'公共资源没人管会被滥用。需要<b>产权明晰</b>或政策干预。', visual:'icon_life', anim_type:'fadeIn'},
            {role:'shifu', title:'四大手段', content:'经济（税/补）、法律、行政、技术。', visual:'icon_chart', anim_type:'slideInUp'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'排污权交易属于？', opt:['A. 行政手段','B. 市场（经济）手段','C. 法律手段','D. 技术手段'], ans:'B', expl:'利用市场机制。'}
            ],
            part_b: [
                {title:'🏭 谁污染谁付费', q:'征收环保税的意义？', ans:'<b>外部成本内部化。</b><br>逼迫企业主动治污。'}
            ]
        }
    },

    // --- XB3 4.3 国际合作 ---
    'xb3c4s3': {
        title: '4.3 国际合作',
        ppt: [
            {role:'crane', title:'环境无国界', content:'空气和水会流动，全球问题需全球解决。', visual:'icon_earth', anim_type:'fadeIn'},
            {role:'shifu', title:'基本原则', content:'<b>共同但有区别的责任</b>。发达国家要多出钱多减排。', visual:'icon_balance', anim_type:'slideInLeft'},
            {role:'po', title:'中国担当', content:'澜湄合作水资源调度，一带一路绿色发展。', visual:'icon_china_map', anim_type:'rotateIn'}
        ],
        quiz: {
            part_a: [
                {type:'single', q:'国际环境合作核心原则？', opt:['A. 平均分配','B. 共同但有区别的责任','C. 谁强谁管','D. 免责'], ans:'B', expl:'历史责任和能力不同。'}
            ],
            part_b: [
                {title:'🌍 为什么不AA？', q:'减排为何不平均分摊？', ans:'<b>历史债务。</b><br>发达国家历史上排得多，现在有钱有技术，理应多承担。'}
            ]
        }
    }
};
// js/data.js - Part 10

  Object.assign(courses, {
      'xb3c3s3': {
        title: '3.3 生态保护与国家安全',
        ppt: [
            {role: 'po', title: '自然的护盾', content: '我是阿宝。生态系统就像我们身上的“气”，保护着我们。<br>森林涵养水源，湿地净化水质，草原防风固沙。<br>如果<b>生态退化</b>（森林砍光、草地变沙），这层护盾就碎了。<br>后果：洪水、干旱、沙尘暴，直接威胁国家安全。', visual: 'icon_shield', anim_type: 'fadeIn'},
            {role: 'shifu', title: '生态退化的恶果', content: '我是师父。生态退化是渐进的，像温水煮青蛙。<br>1. <b>自然环境服务功能下降</b>：地不长粮，水不能喝。<br>2. <b>动摇发展基础</b>：贫困加剧（越穷越垦，越垦越穷）。<br>3. <b>威胁生存</b>：土地沙化让人生存空间缩小。', visual: 'icon_drought', anim_type: 'slideInLeft'},
            {role: 'crane', title: '建立自然保护区', content: '我是仙鹤。为了保护珍稀动植物，我们划了<b>自然保护区</b>。<br>比如大熊猫国家公园、三江源国家公园。<br>在这里，禁止乱砍乱猎，让自然休养生息。<br>这是保护生物多样性最有效的措施，是给后代留下的诺亚方舟。', visual: 'icon_park', anim_type: 'rotateIn'},
            {role: 'tigress', title: '生态红线：高压线', content: '我是悍娇虎。国家划定了<b>生态保护红线</b>。<br>这是国家生态安全的底线和生命线！<br>在红线内，严禁开发建设。<br>谁敢碰红线，我就用虎鹤双形拳教训他！', visual: 'icon_alert_red', anim_type: 'shake'},
            {role: 'ping', title: '生态修复：还债', content: '我是平先生。以前我们欠了自然的债，现在要还。<br><b>退耕还林、退牧还草</b>。<br>虽然短期少种了地，但环境好了，也是金山银山。<br>比如塞罕坝，从荒漠变成了林海，多漂亮啊！', visual: 'icon_tree', anim_type: 'zoomIn'},
            {role: 'po', title: '全节总结', content: '大侠们，汇报重点：<br>1. 生态退化威胁生存基础。<br>2. 建立自然保护区（就地保护）。<br>3. 严守生态红线。<br>4. 实施生态修复工程。<br>保护生态就是保护我们自己！', visual: 'icon_final', anim_type: 'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '生态退化对国家安全的影响主要体现在？', opt: ['A. 动摇经济社会发展基础', 'B. 仅仅影响野生动物', 'C. 导致旅游收入减少', 'D. 增加木材产量'], ans: 'A', expl: '生态退化会导致生存空间丧失、资源支撑能力下降。'},
                {type: 'single', q: '保护生物多样性最为有效的措施是？', opt: ['A. 建立植物园', 'B. 建立动物园', 'C. 建立自然保护区', 'D. 禁止生物贸易'], ans: 'C', expl: '就地保护（建立自然保护区）是最有效的。'},
                {type: 'single', q: '划定生态保护红线的目的是？', opt: ['A. 限制所有人类活动', 'B. 保护关键生态功能区，保障国家生态安全', 'C. 增加建设用地', 'D. 开发旅游资源'], ans: 'B', expl: '红线是为了守住国家生态安全的底线。'},
                {type: 'single', 'q': '下列不属于我国重大生态工程的是？', opt: ['A. “三北”防护林', 'B. 退耕还林还草', 'C. 南水北调', 'D. 长江中上游防护林'], ans: 'C', expl: '南水北调是资源调配工程，虽有生态效益，但主旨是调水。其他全是生态修复工程。'},
                {type: 'single', q: '马永顺从“伐木英雄”变成“植树模范”，反映了？', opt: ['A. 职业爱好的变化', 'B. 国家发展战略从资源开发转向生态保护', 'C. 树木长得太快', 'D. 木材价格下跌'], ans: 'B', expl: '反映了我国对生态保护的重视程度提升。'},
                {type: 'single', q: '外来物种入侵可能造成的危害是？', opt: ['A. 丰富本地物种基因库', 'B. 挤占本地物种生存空间，破坏生物多样性', 'C. 增加农林产量', 'D. 改善生态环境'], ans: 'B', expl: '外来物种缺乏天敌，可能疯长，威胁本地物种。'},
                {type: 'single', q: '土壤侵蚀（水土流失）严重的后果是？', opt: ['A. 土壤肥力增加', 'B. 河流含沙量减少', 'C. 耕地退化，威胁粮食安全', 'D. 地下水位上升'], ans: 'C', expl: '表土流失导致土地贫瘠。'},
                {type: 'multi', q: '【多选】自然保护区的功能包括？', opt: ['A. 保护自然本底', 'B. 储备物种', 'C. 科研监测', 'D. 大规模工业开发'], ans: 'ABC', expl: 'D是绝对禁止的。'},
                {type: 'multi', q: '【多选】生态保护红线包括？', opt: ['A. 生态功能极重要区域', 'B. 所有的耕地', 'C. 生态环境极敏感脆弱区域', 'D. 所有的城市建成区'], ans: 'AC', expl: '红线主要针对生态功能区和脆弱区。'},
                {type: 'multi', q: '【多选】我国实施的生态补偿机制体现了？', opt: ['A. 受益者付费', 'B. 保护者受偿', 'C. 破坏者赔偿', 'D. 谁污染谁治理'], ans: 'ABCD', expl: '这是生态文明建设的制度保障。'}
            ],
            part_b: [
                {title: '🐼 熊猫的走廊', q: '为什么要在隔离的熊猫栖息地之间修建“生态走廊”？', ans: '<b>促进基因交流。</b><br>如果栖息地碎片化，熊猫种群被隔离，近亲繁殖会导致退化。生态走廊让熊猫能串门、找对象，增加遗传多样性，提高种群生存能力。'},
                {title: '🔴 红线能不能踩', q: '阿宝想在生态红线区里盖个豪华面馆，可以吗？为什么？', ans: '<b>绝对不行。</b><br>生态红线是国家生态安全的底线，实行严格管控。在红线内进行不符合主体功能定位的开发建设是被法律禁止的。阿宝必须遵守规矩。'},
                {title: '🌲 马永顺的账', q: '马永顺大爷为什么要还“砍伐账”？这体现了什么观念？', ans: '<b>可持续发展（代际公平）。</b><br>他意识到年轻时过度砍伐破坏了环境，为了给子孙后代留下青山绿水，他晚年拼命种树。这体现了对自然负责、对后代负责的生态文明观念。'}
            ]
        }
    },

    // --- XB3 3.4 全球气候变化与国家安全 ---
    xb3c3s4: {
        title: '3.4 全球气候变化与国家安全',
        ppt: [
            {role: 'po', title: '热锅上的包子', content: '我是阿宝。地球正在变热，就像蒸笼里的包子。<br><b>全球变暖</b>是事实。原因是我们烧了太多煤和油，排放了太多<b>二氧化碳（温室气体）</b>。<br>这层“棉被”越来越厚，地球快透不过气了！', visual: 'icon_fire', anim_type: 'fadeIn'},
            {role: 'shifu', title: '变暖的后果', content: '我是师父。变暖不只是热一点：<br>1. <b>海平面上升</b>：冰川融化，海水膨胀。马尔代夫等小岛国可能要灭国（生存空间丧失）。<br>2. <b>极端天气</b>：暴雨、干旱、台风更猛烈。<br>3. <b>资源危机</b>：粮食减产，水资源争夺。', visual: 'icon_sea', anim_type: 'slideInLeft'},
            {role: 'tigress', title: '对国家安全的威胁', content: '我是悍娇虎。气候变化会打乱世界秩序。<br><b>北极</b>冰化了，航道通了，资源露出来了，各国开始抢地盘（地缘政治）。<br>受灾国产生<b>气候难民</b>，冲击邻国边境（非传统安全威胁）。<br>这不是玩笑，是现实！', visual: 'icon_ship', anim_type: 'rotateIn'},
            {role: 'ping', title: '减缓与适应', content: '我是平先生。我们能做什么？<br>1. <b>减缓</b>：少排碳。随手关灯，多坐公交，多种树（吸收CO2）。<br>2. <b>适应</b>：既然变暖了，就修高堤坝防海浪，培育耐热农作物。<br>我们要学会和变化了的地球相处。', visual: 'icon_integration', anim_type: 'zoomIn'},
            {role: 'crane', title: '国际合作：巴黎协定', content: '我是仙鹤。气候是全球性的，谁也跑不掉。<br>各国签署了<b>《巴黎协定》</b>，承诺控制升温幅度（不超过2℃）。<br>“共同但有区别的责任”：发达国家多出钱多减排，发展中国家尽力而为。<br>中国承诺：2030碳达峰，2060碳中和！', visual: 'icon_shield', anim_type: 'shake'},
            {role: 'po', title: '全节总结', content: '大侠们，汇报重点：<br>1. 全球变暖主因是碳排放。<br>2. 海平面上升威胁沿海安全。<br>3. 减缓和适应双管齐下。<br>4. 国际合作，共同应对。<br>守护地球，人人有责！', visual: 'icon_final', anim_type: 'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '全球气候变暖的主要人为原因是？', opt: ['A. 太阳活动增强', 'B. 火山喷发', 'C. 大量燃烧化石燃料和毁林', 'D. 核能利用'], ans: 'C', expl: '燃烧排放CO2和毁林减少CO2吸收，导致温室效应增强。'},
                {type: 'single', q: '海平面上升对国家安全最直接的威胁是？', opt: ['A. 淹没沿海低地，压缩生存空间', 'B. 增加降水', 'C. 导致火山爆发', 'D. 改善海洋航运'], ans: 'A', expl: '沿海低地和岛国面临被淹没风险，领土主权受威胁。'},
                {type: 'single', q: '应对全球气候变化的策略主要包括？', opt: ['A. 减缓和适应', 'B. 逃避和忽视', 'C. 对抗和战争', 'D. 移民外星'], ans: 'A', expl: '减缓（减少排放）和适应（调整适应）是两大基本策略。'},
                {type: 'single', q: '《巴黎协定》确定的全球升温控制目标是？', opt: ['A. 不超过5℃', 'B. 远低于2℃，争取1.5℃', 'C. 保持不变', 'D. 降低2℃'], ans: 'B', expl: '控制在工业化前水平以上2℃之内，争取1.5℃。'},
                {type: 'single', q: '“共同但有区别的责任”原则是指？', opt: ['A. 所有国家责任一样', 'B. 只有发达国家有责任', 'C. 只有发展中国家有责任', 'D. 发达国家应承担更多历史责任和义务'], ans: 'D', expl: '考虑到历史排放和能力差异，发达国家应多做贡献。'},
                {type: 'single', q: '北极冰川融化对国家安全的影响，不包括？', opt: ['A. 开辟新航道，改变交通格局', 'B. 暴露资源，引发争夺', 'C. 改变地缘政治环境', 'D. 增加北极熊数量'], ans: 'D', expl: '栖息地减少，北极熊数量会减少。'},
                {type: 'single', q: '中国提出的“双碳”目标是指？', opt: ['A. 2030碳达峰，2060碳中和', 'B. 2020碳达峰，2050碳中和', 'C. 2050碳达峰，2080碳中和', 'D. 碳排放无限增加'], ans: 'A', expl: '这是中国对世界的庄严承诺。'},
                {type: 'multi', q: '【多选】全球变暖可能引发的非传统安全威胁？', opt: ['A. 粮食减产引发饥荒', 'B. 水资源短缺引发冲突', 'C. 气候难民冲击边境', 'D. 疾病传播范围扩大'], ans: 'ABCD', expl: '气候变化的影响是全方位的。'},
                {type: 'multi', q: '【多选】下列属于适应气候变化的措施？', opt: ['A. 修筑防海堤坝', 'B. 培育耐旱作物品种', 'C. 减少温室气体排放', 'D. 制定气候应急预案'], ans: 'ABD', expl: 'C属于减缓措施。'},
                {type: 'multi', q: '【多选】碳循环过程中，属于碳源（排放）的是？', opt: ['A. 化石燃料燃烧', 'B. 森林光合作用', 'C. 动植物呼吸', 'D. 海洋吸收'], ans: 'AC', expl: 'B和D是碳汇（吸收）。'}
            ],
            part_b: [
                {title: '🏝️ 马尔代夫的会议', q: '为什么马尔代夫要在水下开内阁会议？', ans: '<b>发出求救信号。</b><br>马尔代夫是低海拔岛国，海平面上升直接威胁其生存（亡国灭种）。水下会议是为了警示全球：如果不控制变暖，我们国家就会像这样沉入海底。'},
                {title: '🚢 北极新航道', q: '北极冰化了，俄罗斯和加拿大为什么很高兴又很紧张？', ans: '<b>机遇与挑战并存。</b><br>高兴的是：新航道（西北/东北航道）开通，运输成本大降，还有石油可挖。紧张的是：别国也想来分一杯羹，地缘政治博弈加剧，国防安全面临新挑战。'},
                {title: '📉 碳达峰与碳中和', q: '阿宝问：“碳达峰”和“碳中和”是什么意思？', ans: '<b>转折点与平衡点。</b><br>碳达峰：碳排放总量达到最高点，以后不再增长，开始下降（拐点）。碳中和：排出去的碳 = 吸收掉的碳（种树、碳捕获），实现“净零排放”（平衡）。'}
            ]
        }
    },

    // --- XB3 4.1 走向生态文明 ---
    xb3c4s1: {
        title: '4.1 走向生态文明',
        ppt: [
            {role: 'po', title: '从安吉到和平谷', content: '大家好！我是<b>阿宝</b>。还记得浙江安吉县的余村吗（P93）？<br>以前他们炸山采矿，环境脏乱差；后来关停矿山，搞起了生态旅游。<br>现在那里是“绿水青山就是金山银山”。<br>这不仅是安吉的改变，也是我们从<b>工业文明</b>走向<b>生态文明</b>的缩影。', visual: 'icon_park', anim_type: 'fadeIn'},
            {role: 'shifu', title: '什么是生态文明？', content: '我是<b>师父</b>。人类文明经历了四个阶段：<br>1. <b>原始文明</b>：敬畏自然（人怕自然）。<br>2. <b>农业文明</b>：顺应自然（人依赖自然）。<br>3. <b>工业文明</b>：征服自然（人破坏自然）。<br>4. <b>生态文明</b>：人与自然和谐共生（人保护自然）。', visual: 'icon_tree', anim_type: 'slideInLeft'},
            {role: 'tigress', title: '生产方式的绿色化', content: '我是<b>悍娇虎</b>。要练好“绿色功夫”，首先得改生产方式。<br><b>循环经济</b>是核心招式：<br>资源 -> 产品 -> 废弃物 -> 再生资源。<br>把垃圾变成宝贝，像把对手的力量借力打力，不浪费一丝一毫！', visual: 'icon_recycle', anim_type: 'rotateIn'},
            {role: 'ping', title: '生活方式的绿色化', content: '我是<b>平先生</b>。生活也要绿色！<br><b>衣</b>：少买不必要的衣服。<br><b>食</b>：光盘行动，拒绝野味。<br><b>住</b>：节水节电，垃圾分类。<br><b>行</b>：多走路，多骑车。<br>这就是“极简生活”，既省钱又环保！', visual: 'icon_life', anim_type: 'zoomIn'},
            {role: 'po', title: '资源与环境安全观', content: '新的安全观是：<b>人地和谐</b>。<br>以前为了安全拼命囤资源（像我囤包子）。<br>现在要保护环境服务功能，让自然能持续产出。<br>不仅要自己安全，还要全球安全（人类命运共同体）。', visual: 'icon_shield', anim_type: 'slideInUp'},
            {role: 'shifu', title: '全节总结', content: '大侠们，汇报重点：<br>1. 生态文明是人与自然和谐共生。<br>2. 生产要循环，生活要低碳。<br>3. 绿水青山就是金山银山。<br>4. 每个人都是生态文明的建设者。<br>准备好接受师父的考核了吗？', visual: 'icon_final', anim_type: 'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '人类文明发展的四个阶段，按时间顺序排列正确的是？', opt: ['A. 农业-工业-原始-生态', 'B. 原始-农业-工业-生态', 'C. 原始-工业-农业-生态', 'D. 农业-原始-工业-生态'], ans: 'B', expl: '从采猎到农耕，再到工业革命，最后是生态文明。'},
                {type: 'single', q: '生态文明的核心思想是？', opt: ['A. 征服自然', 'B. 崇拜自然', 'C. 人与自然和谐共生', 'D. 停止开发自然'], ans: 'C', expl: '生态文明强调尊重、顺应和保护自然。'},
                {type: 'single', q: '“绿水青山就是金山银山”体现了？', opt: ['A. 经济发展必须牺牲环境', 'B. 环境保护与经济发展是矛盾的', 'C. 生态优势可以转化为经济优势', 'D. 只要环境好，不发展经济也可以'], ans: 'C', expl: '良好的生态环境本身就是一种生产力。'},
                {type: 'single', q: '下列生产方式符合“绿色化”要求的是？', opt: ['A. 高能耗、高排放', 'B. 循环经济（清洁生产）', 'C. 垃圾直接填埋', 'D. 滥砍滥伐'], ans: 'B', expl: '循环经济通过资源高效利用和循环利用，降低污染。'},
                {type: 'single', q: '公众参与生态文明建设的具体行动不包括？', opt: ['A. 垃圾分类', 'B. 购买过度包装的商品', 'C. 绿色出行', 'D. 节约用水'], ans: 'B', expl: '过度包装浪费资源，不符合绿色生活理念。'},
                {type: 'single', q: '浙江安吉余村的发展历程说明了？', opt: ['A. 矿产资源枯竭后只能贫困', 'B. 发展生态旅游是资源型乡村转型的有效途径', 'C. 只有城市才需要生态文明', 'D. 农村应该完全放弃工业'], ans: 'B', expl: '从“卖石头”到“卖风景”的成功转型。'},
                {type: 'single', q: '新的资源与环境安全观强调？', opt: ['A. 资源无限，随意开发', 'B. 先污染后治理', 'C. 战略资源的管控与国际合作并重', 'D. 闭关锁国，独自安全'], ans: 'C', expl: '强调资源的可持续利用和全球视野。'},
                {type: 'multi', q: '【多选】工业文明时期的人地关系特征？', opt: ['A. 试图征服自然', 'B. 资源消耗巨大', 'C. 环境污染严重', 'D. 人地关系极其和谐'], ans: 'ABC', expl: '工业文明带来了物质财富，但也造成了严重的环境危机。'},
                {type: 'multi', q: '【多选】循环经济的“3R”原则是指？', opt: ['A. 减量化 (Reduce)', 'B. 再利用 (Reuse)', 'C. 资源化 (Recycle)', 'D. 重复 (Repeat)'], ans: 'ABC', expl: '3R原则是循环经济的核心。'},
                {type: 'multi', q: '【多选】建设生态文明需要？', opt: ['A. 转变发展方式', 'B. 调整产业结构', 'C. 改变生活方式', 'D. 完善法律法规'], ans: 'ABCD', expl: '需要全方位、全过程的变革。'}
            ],
            part_b: [
                {title: '🐼 阿宝的竹林', q: '阿宝如果把和平谷的竹子全部砍光卖钱，会有什么后果？符合生态文明吗？', ans: '<b>不符合。</b><br>后果：阿宝自己没竹子吃了（资源枯竭），山坡会水土流失（生态破坏），最后和平谷变得不适合居住。这叫“杀鸡取卵”。生态文明要求我们<b>取之有度，用之有节</b>。'},
                {title: '🥤 塑料吸管', q: '为什么现在奶茶店不给塑料吸管，改用纸吸管或可降解吸管了？', ans: '<b>生活方式绿色化（减塑）。</b><br>塑料吸管难以降解，会造成白色污染，危害海洋生物。改用环保材料虽然成本高一点、口感差一点，但为了地球的健康，这是值得的牺牲。'},
                {title: '🏭 工厂的烟囱', q: '悍娇虎发现一家工厂偷偷排黑烟，她应该怎么做？', ans: '<b>举报（公众参与）。</b><br>生态文明不仅是政府的事，也是每个公民的责任。通过监督举报，迫使企业进行<b>清洁生产</b>改造，共同维护环境安全。'}
            ]
        }
    },

    // --- XB3 4.2 国家战略与政策 ---
    xb3c4s2: {
        title: '4.2 国家战略与政策',
        ppt: [
            {role: 'tigress', title: '公地悲剧：谁偷吃了包子？', content: '我是<b>悍娇虎</b>。想象一下，如果翡翠宫厨房有个大碗，谁都可以随便吃。<br>结果会怎样？大家会拼命吃，甚至把碗打破，最后谁也没得吃。<br>这就是<b>“公地悲剧”</b>。<br>环境就像这个大碗（公共物品），没人管就会被滥用。所以必须有规矩！', visual: 'icon_life', anim_type: 'fadeIn'},
            {role: 'shifu', title: '四大政策工具', content: '我是<b>师父</b>。国家怎么管？<br>1. <b>经济手段</b>：收税（资源税、环保税）、补贴（新能源车）。让你疼，或者给你糖。<br>2. <b>法律手段</b>：定法（环境保护法）。谁污染，谁坐牢。<br>3. <b>行政手段</b>：下命令（关停落后工厂、划定红线）。<br>4. <b>技术手段</b>：开发新技术（监测污染、提高效率）。', visual: 'icon_chart', anim_type: 'slideInLeft'},
            {role: 'crane', title: '主体功能区战略', content: '我是<b>仙鹤</b>。中国那么大，不能一把抓。<br>我们把国土划分为四类功能区：<br>1. <b>优化开发区</b>（长三角）：太挤了，要转型。<br>2. <b>重点开发区</b>（中原）：有潜力，接着建。<br>3. <b>限制开发区</b>（农田、森林）：主要产粮和产氧气。<br>4. <b>禁止开发区</b>（自然保护区）：绝对不能动！', visual: 'icon_map_scatter', anim_type: 'rotateIn'},
            {role: 'po', title: '生态红线：高压电网', content: '我是<b>阿宝</b>。生态保护红线就是国家安全的<b>高压线</b>！<br>涵盖了水源涵养区、水土保持区、防风固沙区等。<br>在这个圈子里，必须实行最严格的管控。<br>守护红线，就是守护我们的命根子！', visual: 'icon_alert_red', anim_type: 'shake'},
            {role: 'ping', title: '排污权交易', content: '我是<b>平先生</b>。我发现了一个赚钱的法子！<br>如果我的面馆改进了炉子，省下了排污指标，我可以把这个指标卖给隔壁老王。<br>这就是<b>排污权交易</b>（市场手段）。<br>它鼓励大家主动减排，还能赚钱，太聪明了！', visual: 'icon_money', anim_type: 'zoomIn'},
            {role: 'shifu', title: '全节总结', content: '大侠们，汇报重点：<br>1. 解决公地悲剧需要政策干预。<br>2. 经济、法律、行政、技术四管齐下。<br>3. 主体功能区：因地制宜，各司其职。<br>4. 生态红线神圣不可侵犯。<br>准备考核！', visual: 'icon_final', anim_type: 'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '“公地悲剧”产生的主要原因是？', opt: ['A. 资源太少', 'B. 人口太多', 'C. 产权不明晰，公共资源被过度使用', 'D. 科技落后'], ans: 'C', expl: '公共资源缺乏排他性，个体的理性导致集体的非理性。'},
                {type: 'single', q: '国家向购买新能源汽车的消费者发放补贴，这属于？', opt: ['A. 行政手段', 'B. 法律手段', 'C. 经济手段', 'D. 技术手段'], ans: 'C', expl: '利用财政补贴激励环保行为，属于经济手段。'},
                {type: 'single', q: '我国主体功能区中，主要承担农产品供给和生态服务功能的是？', opt: ['A. 优化开发区域', 'B. 重点开发区域', 'C. 限制开发区域', 'D. 禁止开发区域'], ans: 'C', expl: '限制开发区不是不开发，而是限制大规模工业化城镇化，重点发展农业和生态。'},
                {type: 'single', q: '在禁止开发区域（如国家公园核心区）内，正确的做法是？', opt: ['A. 进行适度的旅游开发', 'B. 建设高档别墅', 'C. 严禁一切工程建设，实行强制性保护', 'D. 开垦耕地解决吃饭问题'], ans: 'C', expl: '禁止开发区受到法律的强制性保护。'},
                {type: 'single', q: '排污权交易制度体现了环境管理的什么原则？', opt: ['A. 利用市场机制优化资源配置', 'B. 完全依靠政府指令', 'C. 放任企业随意排污', 'D. 只要有钱就可以无限排污'], ans: 'A', expl: '通过市场交易，使治污成本低的企业多减排，从而降低社会总减排成本。'},
                {type: 'single', 'q': '下列属于法律手段保障环境安全的是？', opt: ['A. 征收环境保护税', 'B. 颁布《水污染防治法》', 'C. 推广清洁煤技术', 'D. 开展环保宣传教育'], ans: 'B', expl: '法律法规具有强制性。'},
                {type: 'single', q: '划定生态保护红线的意义在于？', opt: ['A. 限制经济发展', 'B. 维护国家生态安全底线', 'C. 增加政府收入', 'D. 解决就业问题'], ans: 'B', expl: '红线是保障国家生态安全的生命线。'},
                {type: 'multi', q: '【多选】国家保障资源环境安全的政策体系包括？', opt: ['A. 法律法规', 'B. 战略规划', 'C. 经济政策', 'D. 宣传教育'], ans: 'ABCD', expl: '是多手段综合的体系。'},
                {type: 'multi', q: '【多选】关于优化开发区域（如珠三角），说法正确的是？', opt: ['A. 国土开发密度已经较高', 'B. 资源环境承载能力开始减弱', 'C. 应重点进行产业结构升级', 'D. 应大规模扩大城市面积'], ans: 'ABC', expl: '优化开发区要控制规模，提升质量，D错误。'},
                {type: 'multi', q: '【多选】环境税的作用是？', opt: ['A. 增加企业排污成本', 'B. 倒逼企业进行技术改造', 'C. 筹集环保资金', 'D. 鼓励企业搬迁'], ans: 'ABC', expl: '通过税收杠杆调节企业行为。'}
            ],
            part_b: [
                {title: '🛑 牧羊人的困境', q: '为什么公用牧场上的羊会越来越多，直到草场退化？如何解决？', ans: '<b>因为收益归个人，成本归集体。</b><br>每多养一只羊，牧羊人独得全部利润，而草场破坏的后果由大家分摊。解决：1. <b>私有化</b>（划分牧场，自己管自己的地）；2. <b>配额制</b>（规定每个人只能养几只）。'},
                {title: '🏭 谁来买单', q: '化工厂把污水排进河里，省了处理费，但下游居民病了。这叫“外部性”。国家怎么把这个成本算回化工厂头上？', ans: '<b>内部化（污染者付费）。</b><br>通过征收<b>环保税</b>或<b>排污费</b>，让化工厂必须为污染付出真金白银的代价，迫使它主动治理污染，把社会成本变成企业成本。'},
                {title: '🗺️ 分区发展', q: '为什么不让神农架（限制开发区）像武汉（重点开发区）那样大搞工业？这公平吗？', ans: '<b>这是基于主体功能的公平。</b><br>神农架生态脆弱但生态价值高，它的任务是产氧气、保水源。如果搞工业，生态毁了，下游武汉也要遭殃。国家会通过<b>生态补偿</b>（给钱）来弥补神农架的发展损失，实现另一种公平。'}
            ]
        }
    },

    // --- XB3 4.3 国际合作 ---
    xb3c4s3: {
        title: '4.3 国际合作',
        ppt: [
            {role: 'crane', title: '环境无国界', content: '我是<b>仙鹤</b>。我在天上飞，发现空气和水是不认国界的。<br>中国的雾霾可能飘到韩国，日本的核污水会流到美国。<br><b>全球性问题</b>（如气候变暖、臭氧层空洞）和<b>跨国问题</b>（跨境河流、酸雨）必须靠全人类一起解决。<br>单打独斗是行不通的！', visual: 'icon_earth', anim_type: 'fadeIn'},
            {role: 'shifu', title: '国际合作的原则', content: '我是<b>师父</b>。合作要有规矩：<br>1. <b>共同但有区别的责任</b>：大家都要出力（共同），但富国要多出钱多减排（区别），因为他们以前排得多，现在更有钱。<br>2. <b>公平原则</b>：穷国也要发展，不能剥夺他们的生存权。<br>3. <b>各自能力原则</b>：有多大劲使多大劲。', visual: 'icon_balance', anim_type: 'slideInLeft'},
            {role: 'po', title: '中国的担当', content: '我是<b>阿宝</b>。中国是负责任的大国！<br>我们批准了《巴黎协定》，承诺“双碳”目标。<br>我们在“一带一路”建设中推广绿色能源。<br>我们还帮助非洲兄弟建太阳能电站。<br>这叫<b>“人类命运共同体”</b>！', visual: 'icon_china_map', anim_type: 'rotateIn'},
            {role: 'tigress', title: '案例：澜沧江-湄公河', content: '我是<b>悍娇虎</b>。澜沧江流出中国就叫湄公河。<br>2016年越南大旱，中国克服困难，从景洪水库开闸放水。<br>这股“救命水”流到了东南亚各国。<br>这就是<b>跨境水资源合作</b>的典范！', visual: 'icon_water_drop', anim_type: 'shake'},
            {role: 'ping', title: '合作的挑战', content: '我是<b>平先生</b>。合作也不容易。<br>有的国家（如某大国）退出了气候协定，这就很自私。<br>资金和技术转让也总是落实不到位。<br>但不管别人怎么样，我们要做好自己，还要带动大家一起做！', visual: 'icon_alert_red', anim_type: 'zoomIn'},
            {role: 'po', title: '全节总结', content: '大侠们，汇报重点：<br>1. 环境问题全球化，必须国际合作。<br>2. 坚持“共同但有区别的责任”。<br>3. 中国积极参与全球环境治理。<br>4. 澜湄合作是好榜样。<br>全书任务圆满完成！大家都是神龙大侠！', visual: 'icon_final', anim_type: 'bounceIn'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '国际环境合作必须要遵循的核心原则是？', opt: ['A. 谁污染谁治理', 'B. 共同但有区别的责任', 'C. 发达国家承担全部责任', 'D. 发展中国家优先发展'], ans: 'B', expl: '这是《联合国气候变化框架公约》确立的基石原则。'},
                {type: 'single', q: '“共同但有区别的责任”中，“区别”主要基于？', opt: ['A. 各国人口数量的差异', 'B. 各国历史排放责任和当前能力的差异', 'C. 各国国土面积的差异', 'D. 各国军事力量的强弱'], ans: 'B', expl: '发达国家历史排放多、资金技术强，应承担更多责任。'},
                {type: 'single', q: '下列属于全球性环境问题，必须全球共同行动的是？', opt: ['A. 某城市的噪声污染', 'B. 气候变暖与臭氧层空洞', 'C. 某河流的富营养化', 'D. 某矿区的塌陷'], ans: 'B', expl: 'A、C、D属于局部问题，B影响全球。'},
                {type: 'single', q: '2016年中国向湄公河下游应急补水，体现了？', opt: ['A. 资源掠夺', 'B. 污染物转移', 'C. 负责任大国的形象与国际合作', 'D. 干涉他国内政'], ans: 'C', expl: '帮助邻国缓解旱情，体现了睦邻友好的合作精神。'},
                {type: 'single', q: '中国提出的全球环境治理理念是？', opt: ['A. 霸权主义', 'B. 优先发展经济', 'C. 构建人类命运共同体', 'D. 零和博弈'], ans: 'C', expl: '强调全人类利益休戚与共。'},
                {type: 'single', q: '发达国家向发展中国家提供资金和技术支持，是为了？', opt: ['A. 慈善施舍', 'B. 履行国际公约义务，帮助全球减排', 'C. 控制发展中国家经济', 'D. 销售过时设备'], ans: 'B', expl: '这是《巴黎协定》等公约规定的义务。'},
                {type: 'single', q: '《巴黎协定》的主要目标是应对？', opt: ['A. 生物多样性减少', 'B. 全球气候变化', 'C. 荒漠化', 'D. 持久性有机污染物'], ans: 'B', expl: '旨在控制全球平均气温升幅。'},
                {type: 'multi', q: '【多选】国际合作的主要领域包括？', opt: ['A. 气候变化', 'B. 跨界水体治理', 'C. 危险废弃物越境转移', 'D. 濒危物种贸易管控'], ans: 'ABCD', expl: '凡是涉及多国利益的环境问题都需要合作。'},
                {type: 'multi', q: '【多选】中国在国际合作中的角色？', opt: ['A. 参与者', 'B. 贡献者', 'C. 引领者', 'D. 破坏者'], ans: 'ABC', expl: '中国正日益走向世界舞台中央，发挥引领作用。'},
                {type: 'multi', q: '【多选】“未来地球计划”旨在？', opt: ['A. 移民火星', 'B. 加强自然科学与社会科学的融合', 'C. 为可持续发展提供科学支撑', 'D. 开发地心资源'], ans: 'BC', expl: '这是一个全球可持续发展研究项目。'}
            ],
            part_b: [
                {title: '🌍 为什么不AA制？', q: '在应对气候变化时，为什么不能要求所有国家平均分摊减排任务（AA制）？', ans: '<b>历史责任不同。</b><br>工业革命以来，发达国家排放了大气中大部分的温室气体，他们靠排碳变富了。发展中国家刚刚起步，还在解决温饱。让穷国和富国分摊一样的责任是不公平的，所以要“有区别”。'},
                {title: '💧 上游的权力', q: '澜沧江-湄公河是国际河流。上游国家修水库发电，下游国家担心没水用。怎么解决这个矛盾？', ans: '<b>建立合作机制（如澜湄合作机制）。</b><br>通过定期会晤、信息共享（雨季旱季水情）、联合调度，兼顾上下游的利益。上游蓄水可以防洪，放水可以抗旱，只要配合好，就是双赢。'},
                {title: '🤝 技术的墙', q: '阿宝想造太阳能板救地球，但核心技术在别人手里，别人不卖给他。这说明国际合作中缺什么？', ans: '<b>技术转让与共享。</b><br>发达国家掌握先进环保技术，如果不愿低价或无偿转让给发展中国家，全球减排就会卡壳。打破技术壁垒，是国际合作的重要痛点。'}
            ]
        }
    }
});

// js/data.js - Part 11 (补充 B1 第五章)

Object.assign(courses, {
    // === 5.1 植被 ===
    c5s1: {
        title: '第一节 植被',
        ppt: [
            {role: 'judy', title: '任务简报：绿色搜查令', content: '警员们，欢迎来到<b>植物园</b>！<br>植被是地球的“外衣”，它们不仅美化环境，还藏着环境的秘密。<br>今天的任务是学会“看树识环境”。<br>为什么沙漠里突然开了花？为什么有的树根长在地上？<br>让我们一探究竟！', visual: 'icon_tree'},
            {role: 'nick', title: '一、植被与环境', content: '植被分两种：<br>1. <b>天然植被</b>：森林、草原、荒漠（自然形成的）。<br>2. <b>人工植被</b>：农田、果园、人工草场（人类种的）。<br>🦊 <b>规律：</b> 气温越高、降水越多，植被越高大，种类越多，结构越复杂。', visual: 'css_veg_layer'},
            {role: 'bogo', title: '二、森林：热带雨林', content: '这是地球上最热闹的地方！<br><b>分布：</b> 热带雨林/季风气候区（终年高温多雨）。<br><b>特征：</b> <br>1. 垂直结构复杂（抢阳光）。<br>2. 有<b>板状根</b>、<b>茎花</b>、藤本植物。<br>3. 全年旺盛，四季常绿。', visual: 'css_rainforest'},
            {role: 'flash', title: '常...绿...阔...叶...林...', content: '分...布...在...亚热带...<br>夏季...炎热...多雨...<br>冬季...温和...<br>叶子...表面...有...蜡质...（革质叶片）...<br>这...是...为了...反光...和...保水...', visual: 'icon_leaf_shiny'},
            {role: 'judy', title: '森林：落叶阔叶林 & 针叶林', content: '1. <b>落叶阔叶林</b>（温带）：春夏绿油油，秋冬落叶（为了防寒）。叶片宽阔。<br>2. <b>亚寒带针叶林</b>：冷！叶子缩成<b>针状</b>（抗寒抗旱）。主要分布在俄罗斯、加拿大。', visual: 'css_forest_types'},
            {role: 'nick', title: '特别档案：红树林 (Mangrove)', content: '这种树很酷，长在海边的淤泥里（热带/亚热带海岸）。<br>为了活下去，它们进化出了三件神器：<br>1. <b>支柱根</b>：支撑身体，防海浪。<br>2. <b>呼吸根</b>：在淤泥里呼吸。<br>3. <b>“胎生”</b>：种子在树上发芽，掉下来直接插在泥里。', visual: 'css_mangrove'},
            {role: 'bogo', title: '三、草原：热带 vs 温带', content: '草长得怎么样，全看雨水。<br>1. <b>热带草原</b>：分干湿两季。湿季葱绿，干季枯黄（动物大迁徙）。<br>2. <b>温带草原</b>：夏绿冬枯。由于降水少，一般没有乔木。', visual: 'icon_grass'},
            {role: 'judy', title: '四、荒漠植被', content: '这里是生存挑战赛。<br><b>特点：</b> 叶子变成刺（减少蒸发），根系超级长（吸地下水）。<br><b>奇迹：</b> 智利沙漠雨后花海（短命植物，遇水迅速开花结果）。', visual: 'css_cactus'},
            {role: 'nick', title: '校园调查：因地制宜', content: '我们在皇城根遗址公园发现：<br>1. <b>乡土树种</b>：最好养，最适应本地环境。<br>2. <b>复层结构</b>：乔木+灌木+草本，生态效益最高。<br>3. <b>因地制宜</b>：别老想着引进外来物种，适合自己的才是最好的！', visual: 'icon_park'},
            {role: 'flash', title: '植...被...总...结...', content: '看...植被...<br>识...气...候...<br>热...雨...林...有...板...根...<br>红...树...林...会...胎...生...<br>针...叶...林...抗...严...寒...<br>考...核...开...始...', visual: 'icon_badge'},
            {role: 'judy', title: '全节回顾', content: '本次行动代码：<br>🌳 <b>森林</b>：雨林(板根)、常绿(革质)、落叶(冬枯)、针叶(抗寒)<br>🌿 <b>草原</b>：热带(干湿季)、温带(夏绿冬枯)<br>🌵 <b>荒漠</b>：旱生结构(根深叶刺)<br>🌊 <b>特殊</b>：红树林(海岸卫士)', visual: 'icon_forest_map'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '下列植被类型中，垂直结构最复杂的是？', opt: ['A. 热带雨林', 'B. 常绿阔叶林', 'C. 落叶阔叶林', 'D. 亚寒带针叶林'], ans: 'A', expl: '热带雨林水热条件最好，植物种类最丰富，争夺阳光导致垂直结构最复杂。'},
                {type: 'single', q: '“革质叶片、四季常绿”是哪种森林的特征？', opt: ['A. 热带雨林', 'B. 亚热带常绿阔叶林', 'C. 温带落叶阔叶林', 'D. 亚寒带针叶林'], ans: 'B', expl: '革质叶片（表面有蜡质光泽）有助于反射强光和减少蒸腾，是常绿阔叶林的特征。'},
                {type: 'single', q: '红树林主要分布在？', opt: ['A. 温带浅海区', 'B. 热带/亚热带淤泥深厚的海岸', 'C. 深海盆地', 'D. 高山湖泊'], ans: 'B', expl: '红树林是热带、亚热带海岸生态系统的典型代表。'},
                {type: 'single', q: '骆驼刺等荒漠植物的根系非常发达，主要是为了？', opt: ['A. 抵抗大风', 'B. 吸收深层地下水', 'C. 储存养分', 'D. 支撑高大的地上部分'], ans: 'B', expl: '荒漠地表缺水，植物必须将根扎得很深才能吸收到水分。'},
                {type: 'single', q: '温带落叶阔叶林落叶的主要季节是？', opt: ['A. 春季', 'B. 夏季', 'C. 秋冬季节', 'D. 旱季'], ans: 'C', expl: '温带地区冬季寒冷，植物落叶是为了减少蒸腾，保持体温，顺利过冬。'},
                {type: 'single', q: '猴面包树（树干粗大存水）常见于？', opt: ['A. 热带雨林', 'B. 热带草原', 'C. 温带草原', 'D. 亚寒带针叶林'], ans: 'B', expl: '热带草原分干湿两季，粗大的树干是为了在湿季储水以度过漫长的干季。'},
                {type: 'multi', q: '【多选】红树林植物适应环境的特征包括？', opt: ['A. 支柱根', 'B. 呼吸根', 'C. 胎生现象', 'D. 针状叶'], ans: 'ABC', expl: 'D是针叶林的特征。红树林需要支柱根防浪，呼吸根通气，胎生繁衍。'},
                {type: 'multi', q: '【多选】关于植被垂直结构的叙述，正确的是？', opt: ['A. 气温越高降水越多，结构越复杂', 'B. 森林的垂直结构比草原复杂', 'C. 垂直结构主要是为了争夺水分', 'D. 顶层通常是高大的乔木'], ans: 'ABD', expl: 'C错误，垂直结构主要是为了争夺阳光。'},
                {type: 'multi', q: '【多选】下列属于人工植被的是？', opt: ['A. 长白山原始森林', 'B. 城市行道树', 'C. 小麦田', 'D. 呼伦贝尔草原'], ans: 'BC', expl: '行道树和农田是人类栽培的，属于人工植被。'},
                {type: 'multi', q: '【多选】在沙漠地区出现“雨后花海”现象，说明？', opt: ['A. 荒漠中也有短命植物的种子', 'B. 水分是限制荒漠植物生长的关键', 'C. 沙漠生态系统非常稳定', 'D. 这些植物生命周期极短'], ans: 'ABD', expl: '说明荒漠土层中休眠着种子，一旦有水迅速完成生命周期。'}
            ],
            part_b: [
                {title: '逻辑推理：聪明的树叶', q: '为什么亚寒带针叶林的叶子是针状的，而热带雨林的叶子很大且有滴水尖？', ans: '1. <b>针叶林</b>：生活在寒冷地区，针状叶面积小，表皮厚，能减少蒸腾和热量散失，以此<b>抗寒抗旱</b>。<br>2. <b>雨林</b>：高温多雨，大叶子能最大限度进行光合作用；滴水尖（叶尖下垂）能让雨水迅速排走，防止叶片积水腐烂或滋生苔藓。'},
                {title: '案情分析：消失的树叶', q: '在温带地区，落叶阔叶林在秋天变黄落叶，为什么隔壁的松树却还是绿的？', ans: '这是<b>进化策略</b>的不同。<br>1. <b>落叶树</b>：选择“休眠策略”，舍弃叶子以降低能耗过冬。<br>2. <b>常绿针叶树</b>：叶片有厚厚的角质层和树脂（防冻液），耐寒能力强，选择“忍耐策略”，冬天也能微弱光合作用。'},
                {title: '生存挑战：红树林', q: '如果把红树林移栽到淡水湖里，它还能表现出“胎生”和“排盐腺”的特征吗？', ans: '<b>很难或者退化。</b><br>这些特征是长期适应<b>高盐度海水</b>和<b>潮间带淤泥</b>环境的结果。如果环境改变（变成淡水），这些高耗能的生存机制（如排盐）就不再是必要的，可能会在漫长的演化中退化，但在短期移栽中可能因无法适应环境突变而死亡或生长不良。'}
            ]
        }
    },

    // === 5.2 土壤 ===
    c5s2: {
        title: '第二节 土壤',
        ppt: [
            {role: 'judy', title: '任务简报：大地之肤', content: '欢迎来到地下一层！<br>土壤是地球的皮肤，虽薄，但至关重要。<br>没有它，植物没法长，我们也没饭吃。<br>本节课我们要挖土三尺，看看土里到底有什么！', visual: 'icon_soil_layers'},
            {role: 'nick', title: '一、土壤的组成', content: '土壤不是纯土，它是个混合物：<br>1. <b>矿物质</b> (骨架，来自岩石)<br>2. <b>有机质</b> (养分，来自生物)<br>3. <b>水分</b> & <b>空气</b> (这俩互斥，水多了气就少)<br>理想土壤：一半是固相，一半是孔隙(水+气)。', visual: 'css_soil_comp'},
            {role: 'bogo', title: '二、土壤的观察', content: '作为侦探，要学会观察：<br>1. <b>颜色</b>：黑土(腐殖质多)、红土(含铁氧化物)。<br>2. <b>质地</b>：<br>   - 砂土 (颗粒大，漏水，通气好)<br>   - 黏土 (颗粒小，保水，不透气)<br>   - 壤土 (完美的混合，种地最好)', visual: 'css_soil_texture'},
            {role: 'flash', title: '三...剖...面...构...造...', content: '森林...土壤...从上...到下...<br>1. <b>有机层</b> (枯枝落叶)<br>2. <b>腐殖质层</b> (黑黑的，肥)<br>3. <b>淋溶层</b> (颜色浅，营养跑了)<br>4. <b>淀积层</b> (颜色深，营养聚在这)<br>5. <b>母质层</b> & <b>母岩层</b>', visual: 'css_soil_profile'},
            {role: 'judy', title: '耕作土壤剖面', content: '农田的土是被人类改造过的：<br>1. <b>耕作层</b>：疏松，有机质多。<br>2. <b>犁底层</b>：紧实（被犁压的），能保水保肥。<br>3. <b>自然土层</b>：下面没动过的土。', visual: 'icon_shovel'},
            {role: 'nick', title: '四、成土因素：老妈和生物', content: '谁造就了土壤？<br>1. <b>成土母质</b> (岩石风化)：土壤的“妈妈”，决定了土壤的化学成分。<br>2. <b>生物</b> (最活跃)：土壤的“厨师”，提供有机质，加快风化。<br>没有生物，土壤就只是碎石屑！', visual: 'icon_rock_plant'},
            {role: 'bogo', title: '四、成土因素：气候与时间', content: '3. <b>气候</b>：<br>   - 湿热：风化快，土层厚，但淋溶强（养分流失，如亚马孙红壤）。<br>   - 干冷：风化慢，土层薄。<br>4. <b>时间</b>：时间越长，土层越厚，分化越明显。', visual: 'css_climate_soil'},
            {role: 'judy', title: '五、土壤功能与保护', content: '土壤很珍贵：<br>1. <b>功能</b>：长庄稼、蓄水保水、降解污染。<br>2. <b>改良</b>：<br>   - 亚马孙黑土（生物炭）<br>   - 盐碱地（引淡淋盐、井灌井排）<br>   - 红壤（加石灰中和酸性）', visual: 'icon_protect_soil'},
            {role: 'nick', title: '案例：盐碱地治理', content: '华北平原的盐碱地怎么治？<br>核心是<b>“水盐运动”</b>。<br>夏季雨多——淋盐（洗澡）；<br>春季干旱——返盐（上来）；<br>治理：<b>井灌井排</b>（抽咸水，灌淡水），覆盖地膜（减少蒸发返盐）。', visual: 'icon_salt'},
            {role: 'bogo', title: '全节总结', content: '结案陈词：<br>1. <b>成分</b>：矿、有、水、气。<br>2. <b>质地</b>：砂、黏、壤。<br>3. <b>因素</b>：母质(基底)、生物(核心)、气候(动力)。<br>4. <b>养护</b>：休耕、轮作、种绿肥。<br>所有人，立刻归队，进行终极考核！', visual: 'icon_badge'},
            {role: 'flash', title: '等...等...', content: '还有...<b>黑...土...</b><br>分布...在...东北...<br>气温...低...<br>微生物...分解...慢...<br>有机质...积...累...多...<br>所以...黑...', visual: 'css_black_soil'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '理想的农业土壤质地是？', opt: ['A. 砂土', 'B. 黏土', 'C. 壤土', 'D. 砾石土'], ans: 'C', expl: '壤土兼具砂土通气透水和黏土保水保肥的优点。'},
                {type: 'single', q: '森林土壤剖面中，颜色最深、肥力最高的是？', opt: ['A. 有机层', 'B. 腐殖质层', 'C. 淋溶层', 'D. 淀积层'], ans: 'B', expl: '腐殖质层积累了大量腐殖质，颜色呈灰黑色。'},
                {type: 'single', q: '决定土壤矿物质成分和养分状况的基础因素是？', opt: ['A. 气候', 'B. 生物', 'C. 成土母质', 'D. 时间'], ans: 'C', expl: '成土母质是岩石风化的产物，提供土壤的矿物质骨架。'},
                {type: 'single', q: '影响土壤发育最基本、最活跃的因素是？', opt: ['A. 地貌', 'B. 气候', 'C. 生物', 'D. 人类活动'], ans: 'C', expl: '生物通过生物循环使营养元素在表层富集，没有生物就没有真正的土壤。'},
                {type: 'single', q: '我国东北平原黑土肥沃的主要原因是？', opt: ['A. 降水丰富，淋溶作用强', 'B. 气候寒冷，有机质分解慢', 'C. 地形平坦，成土母质好', 'D. 人类耕作历史悠久'], ans: 'B', expl: '冷湿环境下，微生物活动弱，枯枝落叶分解缓慢，腐殖质大量积累。'},
                {type: 'single', q: '亚马孙河流域的自然土壤（红壤）往往比较贫瘠，原因是？', opt: ['A. 岩石风化慢', 'B. 淋溶作用强，养分流失快', 'C. 没有生物提供有机质', 'D. 土层太薄'], ans: 'B', expl: '湿热气候下，化学风化和淋溶作用极强，大量盐基离子被淋失，只剩下氧化铁/铝，土壤酸性且贫瘠。'},
                {type: 'multi', q: '【多选】野外观察土壤的主要内容包括？', opt: ['A. 土壤颜色', 'B. 土壤质地', 'C. 剖面构造', 'D. 土壤气味'], ans: 'ABC', expl: '气味一般不是主要的观察指标，前三项是核心。'},
                {type: 'multi', q: '【多选】关于土壤质地的说法，正确的是？', opt: ['A. 砂土通气透水性好，但保肥差', 'B. 黏土保水保肥好，但耕作困难', 'C. 壤土适合大多数作物生长', 'D. 砂土有机质分解缓慢'], ans: 'ABC', expl: 'D错误，砂土通气好，氧化作用强，有机质分解快。'},
                {type: 'multi', q: '【多选】治理华北盐碱地的措施包括？', opt: ['A. 井灌井排', 'B. 覆盖地膜', 'C. 大水漫灌', 'D. 种植耐盐碱作物'], ans: 'ABD', expl: 'C错误，大水漫灌会导致地下水位上升，加剧盐碱化。'},
                {type: 'multi', q: '【多选】耕作土壤剖面通常分为？', opt: ['A. 耕作层', 'B. 犁底层', 'C. 自然土层', 'D. 淀积层'], ans: 'ABC', expl: '淀积层是自然土壤剖面的结构，耕作土壤分为前三层。'}
            ],
            part_b: [
                {title: '逻辑推理：穷富之谜', q: '热带雨林生物量最大，为什么土壤反而很贫瘠？东北黑土地生物量不如雨林，为什么土壤却最肥沃？', ans: '这是<b>气候与生物循环</b>的博弈。<br>1. <b>雨林</b>：高温多雨，微生物分解极快，有机质刚落地就被分解并被植物吸收，或者被雨水淋走，土壤里留不住养分。<br>2. <b>黑土</b>：气候冷湿，微生物分解极慢，枯枝落叶层层堆积，变成了厚厚的腐殖质，像存钱一样把养分存在了土里。'},
                {title: '案情分析：红色的土', q: '朱迪在南方办案，发现这里的土是红色的，而且酸性很强。这是为什么？', ans: '这是<b>湿热气候</b>的产物。<br>高温多雨导致土壤中的易溶元素（如钙、镁、钾）被雨水淋溶冲走了，留下了难溶的<b>铁和铝的氧化物</b>。氧化铁是红色的，所以土壤呈红色（红壤），且因为缺乏碱性离子而呈酸性。'},
                {title: '农业智慧：犁底层', q: '耕作土壤中的“犁底层”紧实不透气，听起来不好，为什么对水稻种植却很重要？', ans: '犁底层虽然阻碍了根系下扎，但它<b>紧实不透水</b>。<br>种植水稻需要水田，犁底层能托住上面的水，防止水分过快下渗流失，起到了<b>保水保肥</b>的关键作用。'}
            ]
        }
    }
});
// js/data.js - Part 12 (补充 B2 第三章 & 第四章)

Object.assign(courses, {
    // === B2 第三章 产业区位因素 ===
    
    // 3.1 农业区位因素及其变化
    b2c3s1: {
        title: '3.1 农业区位因素及其变化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：什么是农业？', content: '徒儿们，所谓农业，就是利用土地的自然生产力，种庄稼（种植业）或养牲口（畜牧业）。<br>但这事儿讲究“因地制宜”。<br>比如水稻喜欢热和水，小麦喜欢温凉。<br>这背后的道理，就是<b>农业区位因素</b>。', visual: 'icon_tree_planting'},
            {role: 'aobing', title: '敖丙分析：自然因素', content: '我掌管水族，深知自然之力的重要。<br>1. <b>气候</b>：热量、光照、降水（决定了种什么，熟几季）。<br>2. <b>水源</b>：干旱地区有水才能活（如绿洲农业）。<br>3. <b>地形</b>：平原种地，山地种树（防止水土流失）。<br>4. <b>土壤</b>：肥沃的黑土长得好，红壤酸性大。', visual: 'icon_water_drop'},
            {role: 'lijing', title: '李靖：人文因素', content: '光有地不行，还得有人去经营。<br>1. <b>市场</b>：城里人爱吃啥，农民就种啥（决定类型和规模）。<br>2. <b>交通</b>：路修好了，东西才能卖出去。<br>3. <b>政策</b>：朝廷（国家）给补贴，大家积极性就高。<br>4. <b>科技</b>：良种、化肥、机械，能提高产量。', visual: 'icon_badge'},
            {role: 'nezha', title: '哪吒：桑蚕大转移', content: '以前说“桑蚕看江浙”，现在是“桑蚕看广西”（图3.1）！<br>为啥？<br>因为江浙人忙着搞工业，地贵人贵（城镇化）。<br>广西地便宜人多，气候还热，桑树长得快。<br>这就叫<b>区位因素的变化</b>！', visual: 'icon_map_scatter'},
            {role: 'shengongbao', title: '申公豹：人定胜天？', content: '哼，现在的人类，想逆天改命？<br>冬天吃西瓜（温室大棚），山上种梯田（改造地形），沙漠里种菜（滴灌技术）。<br>这确实是<b>改造自然</b>。<br>但别忘了，改造过度可是要遭天谴的（生态破坏）！', visual: 'icon_shield'},
            {role: 'aobing', title: '鲜花的旅程', content: '荷兰是“花卉王国”，但现在南美、非洲的花也卖遍全球（图3.14）。<br>靠的是什么？<br>1. <b>冷藏保鲜技术</b>（不怕坏）。<br>2. <b>航空运输</b>（跑得快）。<br>这让农业的“市场”范围从周边扩大到了全世界。', visual: 'icon_life'},
            {role: 'nezha', title: '哪吒：绿色农业', content: '现在的农业不光要产量，还要质量！<br><b>绿色食品</b>、<b>生态农业</b>才是王道。<br>比如稻田里养鱼（稻鱼共生），不用农药化肥，鱼吃虫，粪肥田。<br>这才是智慧！', visual: 'icon_leaf_shiny'},
            {role: 'lijing', title: '全节总结', content: '自然是基础，人文在变化。<br>市场定规模，交通拓天下。<br>科技改条件，政策来护驾。<br>因地制宜好，农业现代化！', visual: 'icon_star'},
            {role: 'taiyi', title: '全节考核', content: '种地也是门大学问！<br>答不对题的，罚去蟠桃园除草！', visual: 'icon_alert_red'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '决定农业生产类型和规模的主导因素是？', opt: ['A.交通运输', 'B.市场需求', 'C.政府政策', 'D.气候条件'], ans: 'B', expl: '市场需求量最终决定了农业生产的类型和规模。'},
                {type: 'single', q: '我国“桑蚕东移西送”的主要原因是？', opt: ['A.东部水热条件变差', 'B.西部交通条件优于东部', 'C.东部土地、劳动力成本上升', 'D.西部技术水平高于东部'], ans: 'C', expl: '东部工业化城镇化导致成本上升，产业向中西部转移。'},
                {type: 'single', q: '寿光蔬菜能销往全国甚至海外，主要得益于？', opt: ['A.交通运输和保鲜技术的发展', 'B.气候条件的改善', 'C.地形平坦开阔', 'D.土壤肥沃'], ans: 'A', expl: '远程销售依赖于快速交通和冷链物流。'},
                {type: 'single', q: '下列农业生产活动符合因地制宜原则的是？', opt: ['A.在陡坡上修梯田种粮', 'B.在围湖造田扩大耕地', 'C.在江南丘陵种植茶树', 'D.在内蒙古草原过度放牧'], ans: 'C', expl: '茶树喜酸性红壤，适合江南丘陵；其他选项均破坏生态。'},
                {type: 'single', q: '温室大棚主要改造了农业生产的什么自然条件？', opt: ['A.地形', 'B.热量', 'C.土壤', 'D.水源'], ans: 'B', expl: '利用温室效应提高温度，改善热量条件。'},
                {type: 'multi', q: '【多选】影响农业的自然区位因素包括？', opt: ['A.气候', 'B.地形', 'C.劳动力', 'D.土壤'], ans: 'ABD', expl: '劳动力属于人文因素。'},
                {type: 'multi', q: '【多选】现代农业中，科技的作用体现在？', opt: ['A.培育良种', 'B.改进灌溉技术', 'C.农业机械化', 'D.扩大耕地面积'], ans: 'ABC', expl: '科技主要是提高单产和效率，而非单纯扩大面积。'},
                {type: 'multi', q: '【多选】荷兰花卉种植业的有利条件？', opt: ['A.温带海洋性气候，湿润', 'B.技术先进', 'C.距离欧洲市场近', 'D.劳动力廉价'], ans: 'ABC', expl: '荷兰是发达国家，劳动力成本高。'},
                {type: 'multi', q: '【多选】绿色农业的特点是？', opt: ['A.无污染', 'B.高投入高产出', 'C.生态循环', 'D.可持续发展'], ans: 'ACD', expl: '绿色农业不一定追求高投入高产出，更注重生态效益。'},
                {type: 'multi', q: '【多选】导致长江中下游平原油菜种植减少，小麦种植增加的原因？', opt: ['A.小麦更适宜机械化生产', 'B.油菜耗费劳动力多', 'C.气候变暖', 'D.市场需求变化'], ans: 'AB', expl: '为了适应农村劳动力减少和机械化趋势。'}
            ],
            part_b: [
                {title: '🔥 哪吒的挑战', q: '我想在陈塘关（假设是干旱区）种水稻，除了引水，还需要注意什么环境问题？', ans: '必须注意<b>次生盐碱化</b>。大水漫灌会导致地下水位上升，水分蒸发后盐分留在地表。必须采用<b>滴灌、喷灌</b>等节水技术，并配合排水设施。'},
                {title: '🐉 敖丙的分析', q: '为什么海南岛成为了我国冬季的“菜篮子”？', ans: '1. <b>热量优势</b>：地处热带，冬季温暖，可露天种菜。<br>2. <b>交通改善</b>：铁路、海运、高速公路网完善。<br>3. <b>市场广阔</b>：北方冬季缺新鲜蔬菜。'},
                {title: '🏯 李靖的考题', q: '城郊农业（如蔬菜、鲜花、奶牛）的布局有什么特点？为什么？', ans: '通常布局在<b>城市周边</b>。<br>原因：这些产品<b>易腐烂、变质</b>，且<b>单位面积产值高</b>（付租能力强）。靠近城市可以接近消费市场，降低运输成本和损耗。'}
            ]
        }
    },

    // 3.2 工业区位因素及其变化
    b2c3s2: {
        title: '3.2 工业区位因素及其变化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：工业怎么搞？', content: '工业就是把原料变成产品的过程。<br>这需要很多条件：原料、动力（电/火）、劳动力、地、钱（资金）。<br>工厂建在哪，得算一笔账，看哪里<b>成本最低，利润最高</b>。<br>这就是工业区位选择的原则。', visual: 'icon_shovel'},
            {role: 'lijing', title: '李靖：五大导向型', content: '根据最需要的那个条件，我们把工业分为五类（图3.18）：<br>1. <b>原料导向</b>：原料重/烂，产品轻（如制糖厂）。<br>2. <b>市场导向</b>：产品重/烂，原料轻（如啤酒厂、家具厂）。<br>3. <b>动力导向</b>：耗电大户（如炼铝厂）。<br>4. <b>劳动力导向</b>：要人多（如普通服装厂）。<br>5. <b>技术导向</b>：要脑子（如芯片、生物制药）。', visual: 'icon_chart'},
            {role: 'shengongbao', title: '申公豹：环境的代价', content: '工厂虽然赚钱，但有污染！<br>💨 <b>废气</b>：要放在下风向。<br>💧 <b>废水</b>：要放在河流下游。<br>🗑️ <b>废渣</b>：要远离居民区。<br>现在环保查得严，很多厂子都得搬家！', visual: 'icon_storm'},
            {role: 'nezha', title: '哪吒：首钢大搬迁', content: '首钢以前在北京石景山，虽然离市场近，但污染太重，还缺水。<br>后来搬到了<b>河北曹妃甸</b>（图3.25）。<br>好处：<br>1. 临海，方便进口铁矿石（交通）。<br>2. 土地便宜，空间大。<br>3. 吹走污染（环境）。<br>这是一举多得！', visual: 'icon_rebuild'},
            {role: 'aobing', title: '敖丙：区位因素在变', content: '时代变了，规矩也变了。<br>1. <b>原料影响变弱</b>：交通好了，可以从很远运原料。<br>2. <b>市场/科技影响变强</b>：产品要卖得出去，技术要跟得上。<br>3. <b>信息通达性</b>：现在是互联网时代，信息闭塞的地方没法搞工业。', visual: 'icon_train'},
            {role: 'nezha', title: '哪吒：工业集聚与分散', content: '<b>集聚</b>：大家挤在一起（如开发区），共用基础设施，省钱，还能交流技术。<br><b>分散</b>：太挤了就分开，或者为了寻找最优区位（如波音飞机，零件全球造）。<br>分分合合，都是为了利益！', visual: 'icon_map_scatter'},
            {role: 'lijing', title: '工业4.0', content: '现在的工厂越来越聪明。<br><b>柔性生产</b>：根据客户需求定制（个性化）。<br><b>智能制造</b>：机器人干活，不需要那么多普工了，需要工程师。<br>所以，劳动力素质越来越重要！', visual: 'icon_phone'},
            {role: 'taiyi', title: '全节总结', content: '五大导向看需求，<br>环境效益心中留。<br>首钢搬迁因环保，<br>集聚分散利为头。<br>科技交通在进步，<br>工业升级争上游！', visual: 'icon_star'},
            {role: 'nezha', title: '全节考核', content: '你是想当厂长还是当工人？<br>先通过我的考核再说！<br>火尖枪准备好了吗？', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '制糖厂属于哪种导向型工业？', opt: ['A.原料导向型', 'B.市场导向型', 'C.动力导向型', 'D.劳动力导向型'], ans: 'A', expl: '甘蔗/甜菜体积大，运输成本高，原料不便运输。'},
                {type: 'single', q: '啤酒厂通常布局在城市内部或周边，主要是因为？', opt: ['A.原料易腐烂', 'B.产品体积大，不便长途运输', 'C.需要大量廉价劳动力', 'D.技术要求高'], ans: 'B', expl: '啤酒成品（水多瓶重）比原料难运，且需新鲜，属于市场导向型。'},
                {type: 'single', q: '炼铝厂等有色金属冶炼工业应布局在？', opt: ['A.大城市中心', 'B.能源丰富（水电/火电）地区', 'C.科技发达地区', 'D.劳动力丰富地区'], ans: 'B', expl: '电解铝耗电量极大，属于动力导向型。'},
                {type: 'single', q: '首钢从北京迁至曹妃甸，主要考虑的因素不包括？', opt: ['A.改善北京环境质量', 'B.曹妃甸有深水良港', 'C.曹妃甸土地价格低', 'D.曹妃甸科技力量雄厚'], ans: 'D', expl: '曹妃甸科技不如北京，D不是搬迁原因（甚至是劣势）。'},
                {type: 'single', q: '现代工业区位选择中，影响力逐渐减弱的是？', opt: ['A.市场', 'B.原料', 'C.科技', 'D.环境'], ans: 'B', expl: '交通运输技术的进步使得原料的束缚减弱。'},
                {type: 'multi', q: '【多选】工业集聚的好处有？', opt: ['A.共用基础设施，降低成本', 'B.加强信息交流与协作', 'C.减轻环境污染', 'D.降低运输费用和能源消耗'], ans: 'ABD', expl: '集聚往往会加剧环境污染（污染集中排放），C错误。'},
                {type: 'multi', q: '【多选】以芯片研发为核心的工业园区，主导区位因素是？', opt: ['A.科技', 'B.人才', 'C.环境', 'D.原料'], ans: 'ABC', expl: '高新技术产业对科技、人才、环境（洁净优美）要求高。'},
                {type: 'multi', q: '【多选】对环境有严重污染的工厂，布局原则是？', opt: ['A.河流上游', 'B.盛行风下风向', 'C.远离水源地', 'D.垂直于季风郊外'], ans: 'BCD', expl: '不能在河流上游和上风向。'},
                {type: 'multi', q: '【多选】服装厂的区位变化趋势？', opt: ['A.从发达国家向发展中国家转移', 'B.从技术导向转为劳动力导向', 'C.对设计和品牌的依赖增强', 'D.完全依赖手工制作'], ans: 'AC', expl: '低端制造转移找廉价劳动力，高端转向品牌设计。'},
                {type: 'multi', q: '【多选】工业分散的主要原因？', opt: ['A.寻求最优区位', 'B.降低生产成本', 'C.避免过度集聚带来的问题', 'D.为了增加运输成本'], ans: 'ABC', expl: 'D明显错误。'}
            ],
            part_b: [
                {title: '🔥 哪吒的决策', q: '如果我要建一个高端机器人工厂，我是选在陈塘关的老城区（人多地少），还是选在新建的“高新科技园”？', ans: '选<b>高新科技园</b>。<br>原因：1. <b>集聚效应</b>：产业链上下游配套完善。2. <b>政策优惠</b>：税收、土地支持。3. <b>环境优美</b>：适合吸引高端人才。4. <b>基础设施</b>：网络、电力更有保障。'},
                {title: '🐉 敖丙的推演', q: '一家跨国服装公司，把设计部放在巴黎，把加工厂放在东南亚，这是为什么？', ans: '这是<b>工业分散</b>，为了寻求<b>全球最优区位</b>。<br>1. <b>巴黎</b>：时尚之都，信息通达，人才聚集（技术/市场导向）。2. <b>东南亚</b>：劳动力丰富且廉价，土地租金低（劳动力导向），能大幅降低成本。'},
                {title: '🐆 申公豹的质疑', q: '现在的工厂都在搞自动化，那以后的工人都去哪？', ans: '1. <b>转型</b>：去服务业（如快递、餐饮）。<br>2. <b>升级</b>：学习技术，变成操作机器的高级蓝领。<br>3. <b>失业</b>：低技能劳动力确实面临淘汰风险，需要社会提供培训和保障。'}
            ]
        }
    },

    // 3.3 服务业区位因素及其变化
    b2c3s3: {
        title: '3.3 服务业区位因素及其变化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：服务业是个啥？', content: '农业产粮，工业造物，服务业则是<b>“为人服务”</b>。<br>分两类：<br>1. <b>商业性服务业</b>：为了赚钱（零售、餐饮、娱乐）。<br>2. <b>非商业性服务业</b>：为了公益（教育、卫生、社工）。<br>现在服务业是经济的大头！', visual: 'icon_money'},
            {role: 'nezha', title: '哪吒：开店选址秘籍', content: '我想开个“风火轮专卖店”，选哪？<br>1. <b>市场</b>：人多的地方（市中心、居民区）。<br>2. <b>交通</b>：路口、地铁站（方便来）。<br>3. <b>集聚</b>：去商场，大家扎堆卖，人流量大。<br>这就是商业性服务业的区位法宝！', visual: 'icon_map_scatter'},
            {role: 'aobing', title: '敖丙：非商业服务业', content: '学校和医院怎么选址？<br>不光看钱，要看<b>“均衡”</b>。<br>主要是为了方便大家使用。<br>一般要均衡分布在居住区内，让每个人都能享受到服务（服务半径）。', visual: 'icon_life'},
            {role: 'lijing', title: '李靖：中心地理论', content: '城市里的商店是有等级的（图2.24引申）。<br><b>高级中心地</b>（大城市）：职能多，服务范围大，数量少，距离远（如三甲医院）。<br><b>低级中心地</b>（小城镇）：职能少，服务范围小，数量多，距离近（如小卖部）。<br>层层嵌套，等级分明。', visual: 'icon_chart'},
            {role: 'shengongbao', title: '申公豹：电商的冲击', content: '现在谁还逛街？都在网上买！<br><b>互联网+</b>改变了一切。<br>1. <b>空间限制没了</b>：在家就能买全球。<br>2. <b>实体店惨了</b>：关门潮。<br>3. <b>物流火了</b>：快递小哥满街跑。<br>服务业的区位，现在看的是“网络”和“物流”！', visual: 'icon_phone'},
            {role: 'nezha', title: '哪吒：新业态', content: '别光看衰，新东西多着呢！<br><b>外卖</b>：不需要临街旺铺，深巷里也能火。<br><b>共享单车</b>：随处可停。<br><b>远程医疗</b>：千里之外看病。<br>科技让服务更灵活！', visual: 'icon_train'},
            {role: 'aobing', title: '案例：物流机器人', content: '看现代物流中心（图3.33）。<br>都是机器人在分拣，速度快，不送错。<br>这需要<b>信息技术</b>的支持。<br>未来的服务业是高科技的舞台。', visual: 'icon_drill'},
            {role: 'taiyi', title: '全节总结', content: '服务分为商与非，<br>市场交通定盈亏。<br>等级理论分高下，<br>网络冲击起惊雷。<br>线上线下相融合，<br>便民利民是作为！', visual: 'icon_star'},
            {role: 'nezha', title: '全节考核', content: '想当大老板？<br>先算好这笔账！<br>最后一关，通关者随我出海！', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '下列属于商业性服务业的是？', opt: ['A.公立学校', 'B.街道办事处', 'C.电影院', 'D.市人民医院'], ans: 'C', expl: '电影院以营利为目的。'},
                {type: 'single', q: '影响零售业布局的最主要因素是？', opt: ['A.自然资源', 'B.市场和交通', 'C.能源供应', 'D.技术水平'], ans: 'B', expl: '人流量（市场）和通达度（交通）是关键。'},
                {type: 'single', q: '关于中心地理论，说法正确的是？', opt: ['A.高级中心地数量多', 'B.低级中心地服务范围大', 'C.高级中心地包含低级中心地的职能', 'D.中心地等级越低', '距离越远'], ans: 'C', expl: '高等级覆盖低等级。'},
                {type: 'single', q: '大型购物中心（Mall）通常布局在？', opt: ['A.城市中心或交通枢纽', 'B.偏远山区', 'C.工业区内部', 'D.农业区'], ans: 'A', expl: '需要巨大的客流量。'},
                {type: 'single', q: '互联网技术的发展对服务业区位的影响？', opt: ['A.增强了距离的限制', 'B.减弱了地理空间限制', 'C.实体店数量必然增加', 'D.完全取代了实体店'], ans: 'B', expl: '网上交易打破了物理空间限制。'},
                {type: 'multi', q: '【多选】非商业性服务业（如学校）布局主要考虑？', opt: ['A.营利最大化', 'B.服务对象的分布（人口均衡）', 'C.方便群众', 'D.交通便利'], ans: 'BCD', expl: '公益性不追求营利。'},
                {type: 'multi', q: '【多选】现代物流业迅速发展的原因？', opt: ['A.电子商务的兴起', 'B.交通运输条件的改善', 'C.信息技术的进步', 'D.人们消费习惯的改变'], ans: 'ABCD', expl: '综合因素推动。'},
                {type: 'multi', q: '【多选】下列受互联网冲击较大的实体店是？', opt: ['A.书店', 'B.服装店', 'C.理发店', 'D.餐饮店'], ans: 'AB', expl: '标准化产品易被电商替代，体验式服务（理发、餐饮）难以替代。'},
                {type: 'multi', q: '【多选】高级中心地（如省会城市）提供的服务包括？', opt: ['A.大型综合医院', 'B.重点大学', 'C.歌剧院', 'D.小卖部'], ans: 'ABCD', expl: '高级中心地拥有各级职能，包括低级的。'},
                {type: 'multi', q: '【多选】外卖产业的兴起对餐饮业区位的影响？', opt: ['A.必须选址在繁华路口', 'B.对店铺位置要求降低', 'C.更依赖网络平台评价', 'D.扩大了服务半径'], ans: 'BCD', expl: '外卖店可以在深巷或楼层高处，降低租金。'}
            ],
            part_b: [
                {title: '🔥 哪吒的商业嗅觉', q: '为什么现在的商场里，卖衣服的少了，吃饭、看电影、亲子乐园变多了？', ans: '这是<b>体验式消费</b>的转型。<br>衣服可以在网上买（电商冲击），但吃饭、看电影、带娃玩必须亲自到场（不可替代性）。商场为了吸引客流，必须增加这些体验业态。'},
                {title: '🐉 敖丙的规划', q: '如果要新建一所小学，应该选在城市的哪里？', ans: '应选在<b>居民区的中心位置</b>。<br>1. <b>就近入学</b>：方便学生上下学，减少通勤。<br>2. <b>环境安静</b>：避开嘈杂的闹市区和交通干线。<br>3. <b>安全性</b>：周边交通安全设施要完善。'},
                {title: '🐆 申公豹的疑问', q: '网上看病（远程医疗）这么方便，那以后的实体医院是不是都没用了？', ans: '<b>不会。</b><br>远程医疗只能解决<b>问诊、咨询</b>和轻症处理。需要<b>检查（CT、验血）、手术、急救</b>等操作，必须在实体医院进行。两者是互补关系，不是替代关系。'}
            ]
        }
    },

    // === B2 第四章 交通运输布局与区域发展 ===
    
    // 4.1 区域发展对交通运输布局的影响
    b2c4s1: {
        title: '4.1 区域发展对交通运输布局的影响',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：交通布局是啥？', content: '徒儿们，交通运输布局就是织网。<br><b>线</b>：铁路、公路、航道（血管）。<br><b>站</b>：车站、港口、机场（穴位）。<br><b>网</b>：它们交织在一起，覆盖全区域。<br>这网怎么织，得看区域发展的“脸色”！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：义乌奇迹', content: '看义乌（图4.1）！一个县级市，居然有<b>国际机场</b>！<br>为啥？<br>因为它是“世界小商品之都”，客商云集，物流需求巨大。<br>这说明：<b>运输需求</b>（量和质）决定了交通线站的标准和规模！', visual: 'icon_plane'},
            {role: 'aobing', title: '敖丙分析：需求差异', content: '不同地方，需求不一样。<br><b>城市</b>：人多货多，网密，标准高（如地铁、高架）。<br><b>乡村</b>：人少货少，网稀，标准低（如国道、县道）。<br>区域发展的<b>不平衡</b>，造就了交通网的疏密差异。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：钱从哪来？', content: '修路得花钱！<br><b>资金</b>是交通建设的保障。<br>以前穷，修不起路；现在国力强盛，高铁通到了大西北。<br>经济水平不仅决定了<b>能不能修</b>，还决定了<b>修什么样的</b>（普通铁路 vs 高速铁路）。', visual: 'icon_money'},
            {role: 'shengongbao', title: '申公豹：天险难越？', content: '以前说“蜀道难，难于上青天”。<br>遇到高山大河、冻土沙漠怎么办？<br>那是大自然的诅咒！<br>只有最顶尖的<b>技术</b>才能破解，比如青藏铁路解决冻土问题，港珠澳大桥解决海洋腐蚀问题。', visual: 'icon_mountain'},
            {role: 'taiyi', title: '技术的力量', content: '科技进步让自然障碍变小了。<br>以前修路要<b>“之”字形</b>盘山（躲着走）。<br>现在修路直接<b>以桥代路、以隧代路</b>（穿过去）。<br>虽然贵了点，但路直了，跑得快了！', visual: 'css_slope_tri'},
            {role: 'nezha', title: '哪吒：北京新机场', content: '看北京大兴机场，多霸气！<br>为啥要修？因为首都机场挤爆了（需求溢出）。<br>这就是<b>区域发展变化</b>倒逼交通升级。<br>老的线站满足不了新需求，就得扩建或新建。', visual: 'icon_rebuild'},
            {role: 'lijing', title: '政治与国防', content: '有时候，修路不光为了赚钱。<br><b>政策</b>也很重要。<br>比如“村村通”公路（为了扶贫），边防公路（为了国防）。<br>这是国家的大义！', visual: 'icon_shield'},
            {role: 'aobing', title: '全节总结', content: '需求定规模，资金做保障。<br>技术破天险，政策指方向。<br>区域在发展，交通更顺畅。<br>线站织成网，国运日兴旺！', visual: 'icon_star'},
            {role: 'nezha', title: '全节考核', content: '想驾驭风火轮日行千里？<br>先得看懂地图，算好路线！<br>答错了就只能走路去取经！', visual: 'icon_alert_red'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '决定交通运输线、站布局的决定性因素是？', opt: ['A.自然条件', 'B.科学技术', 'C.社会经济需求', 'D.资金储备'], ans: 'C', expl: '需求是根本动力，没有需求就没有建设的必要。'},
                {type: 'single', q: '义乌机场得以不断扩建并成为国际口岸，主要得益于？', opt: ['A.优越的地理位置', 'B.商贸经济的快速发展', 'C.地形平坦开阔', 'D.科技水平高'], ans: 'B', expl: '小商品贸易带来了巨大的人流和物流需求。'},
                {type: 'single', q: '青藏铁路在建设中攻克的最大技术难题是？', opt: ['A.高寒缺氧', 'B.多年冻土', 'C.生态脆弱', 'D.地形崎岖'], ans: 'B', expl: '冻土的不稳定性是铁路建设的最大障碍，依靠科技攻克。'},
                {type: 'single', q: '现代高速公路和铁路建设中，常采取“以桥代路”的方式，主要目的是？', opt: ['A.欣赏沿途风景', 'B.节约耕地，减少对地面干扰', 'C.降低建设成本', 'D.展示技术水平'], ans: 'B', expl: '桥梁可以跨越农田、河流，保证线路平直，且少占耕地。'},
                {type: 'single', q: '京沪高铁建设的主导因素是？', opt: ['A.缓解京沪间运力紧张', 'B.沿线地形平坦', 'C.沿线矿产丰富', 'D.展示高铁技术'], ans: 'A', expl: '京沪通道经济最发达，运输需求最大。'},
                {type: 'multi', q: '【多选】影响交通运输布局的区位因素包括？', opt: ['A.经济需求', 'B.资金', 'C.技术', 'D.政策'], ans: 'ABCD', expl: '综合因素共同作用。'},
                {type: 'multi', q: '【多选】山区交通线路布局的特点？', opt: ['A.线路呈“之”字形', 'B.优先选择山谷或河谷', 'C.线路尽量走直线', 'D.避开地质灾害区'], ans: 'ABD', expl: '山区受地形限制，不能走直线。'},
                {type: 'multi', q: '【多选】北京大兴国际机场的建设说明？', opt: ['A.交通布局随区域发展而变化', 'B.交通建设受资金和技术支撑', 'C.自然因素已不再起作用', 'D.为了缓解北京交通压力'], ans: 'ABD', expl: '自然因素（如空域、地质）依然重要，C错。'},
                {type: 'multi', q: '【多选】“村村通”公路工程体现了交通布局的什么原则？', opt: ['A.市场最优', 'B.平衡地区发展', 'C.社会公平', 'D.利益最大化'], ans: 'BC', expl: '扶贫性质的工程主要考虑社会效益。'},
                {type: 'multi', q: '【多选】港口选址的自然条件？', opt: ['A.港阔水深', 'B.避风条件好', 'C.腹地广阔', 'D.依托大城市'], ans: 'AB', expl: 'CD是社会经济条件。'}
            ],
            part_b: [
                {title: '🔥 哪吒的判断', q: '如果在陈塘关（假设是山区）和东海边（平原）各修一条同样长度的铁路，哪条更贵？为什么？', ans: '<b>陈塘关的更贵。</b><br>山区地形复杂，需要开凿隧道、架设桥梁，工程量大，技术难度高，所以单位里程造价远高于平原。'},
                {title: '🐉 敖丙的分析', q: '为什么现在的高速铁路和高速公路都尽量“走直线”，不再绕弯去照顾沿途的小村镇？', ans: '1. <b>速度要求</b>：弯道太多会限制速度，无法发挥高速优势。<br>2. <b>效率优先</b>：主要服务于大城市间的快速联系（直达）。<br>3. <b>技术支撑</b>：现在的桥隧技术允许逢山开路、遇水架桥。'},
                {title: '🏯 李靖的策略', q: '在进行区域交通规划时，为什么要搞“适度超前”？', ans: '因为交通建设<b>周期长</b>，而经济发展<b>速度快</b>。<br>如果按现在的需求修，等修好了可能已经不够用了（这就叫拥堵）。所以要预判未来的需求，提前留出余量，避免重复建设。'}
            ]
        }
    },

    // 4.2 交通运输布局对区域发展的影响
    b2c4s2: {
        title: '4.2 交通运输布局对区域发展的影响',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：要想富，先修路', content: '这句话是真理！<br>交通运输是区域发展的<b>“加速器”</b>。<br>它能让资源（人、物、钱、信息）跑起来。<br>跑得越快，效率越高，区域发展就越好。', visual: 'icon_money'},
            {role: 'nezha', title: '哪吒：时空压缩', content: '以前从北京到天津要一天，现在高铁只要30分钟。<br>这就是<b>“同城效应”</b>！<br>交通缩短了时间，也就拉近了距离。<br>大家白天在天津上班，晚上回北京睡觉（虽然有点累），这就是交通改变了生活方式。', visual: 'icon_train'},
            {role: 'aobing', title: '敖丙：扬州的眼泪', content: '看历史（图4.10）。<br>唐朝时，扬州靠着<b>京杭大运河</b>，繁华无比（二分明月是扬州）。<br>后来运河淤塞，<b>海运和铁路</b>兴起，扬州没跟上，就衰落了。<br>结论：<b>交通兴，城市兴；交通衰，城市衰。</b>', visual: 'icon_water_drop'},
            {role: 'lijing', title: '李靖：火车拉来的城市', content: '有些城市本是小村庄，因为铁路交会，变成了大城市。<br>比如<b>石家庄</b>（正太铁路+京汉铁路）、<b>株洲</b>（京广+沪昆）。<br>这叫<b>交通枢纽城市</b>。<br>交通不仅能把城市拉大，还能决定城市的形状（沿交通线延伸）。', visual: 'icon_map_scatter'},
            {role: 'shengongbao', title: '申公豹：虹吸效应', content: '别高兴太早！<br>交通太好了，大城市会把周边小城市的人才和资金都吸走，这就是<b>“虹吸效应”</b>。<br>小地方可能变得更穷！<br>这就是强者恒强，弱者恒弱的残酷法则。', visual: 'icon_storm'},
            {role: 'aobing', title: '案例：新加坡', content: '新加坡（图4.15）也就是个小岛。<br>但它守着<b>马六甲海峡</b>的咽喉。<br>利用港口优势，发展炼油、修船、转口贸易、金融。<br>硬是把自己变成了发达国家。<br>这就是<b>依托交通优势发展经济</b>的典范。', visual: 'icon_ship'},
            {role: 'nezha', title: '哪吒：产业集聚', content: '工厂喜欢扎堆在交通便利的地方。<br><b>临空经济区</b>：芯片、生物制药（要快）。<br><b>临港工业区</b>：钢铁、石化（要重）。<br>交通在哪，产业带就在哪（如日本太平洋沿岸工业带）。', visual: 'icon_factory'},
            {role: 'lijing', title: '一带一路', content: '这是国家的大战略。<br><b>丝绸之路经济带</b> + <b>21世纪海上丝绸之路</b>。<br>通过高铁、港口连接世界，促进沿线国家的共同繁荣。<br>交通不仅改变区域，还能改变世界格局！', visual: 'icon_earth'},
            {role: 'taiyi', title: '全节总结', content: '交通促进大流通，<br>要素配置更从容。<br>枢纽兴城古今同，<br>扬州石家各西东。<br>产业沿线聚成龙，<br>一带一路贯长虹！', visual: 'icon_star'},
            {role: 'nezha', title: '全节考核', content: '路通了，你的脑子通了吗？<br>最后一关逻辑题，<br>答对了带你去兜风！', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '“天下三分明月夜，二分无赖是扬州”。扬州兴衰的主要原因是？', opt: ['A.自然资源的枯竭', 'B.交通运输方式的改变', 'C.政治中心的迁移', 'D.战争的破坏'], ans: 'B', expl: '京杭运河淤塞，海运和铁路兴起，导致运河城市衰落。'},
                {type: 'single', q: '被称为“火车拉来的城市”的是？', opt: ['A.北京、上海', 'B.石家庄、株洲', 'C.扬州、济宁', 'D.重庆、武汉'], ans: 'B', expl: '这两个城市因铁路枢纽而兴起。'},
                {type: 'single', q: '京津城际铁路通车后，出现“同城效应”，说明交通运输可以？', opt: ['A.缩短空间距离', 'B.缩短通行时间', 'C.消除行政界线', 'D.改变地形地貌'], ans: 'B', expl: '物理距离没变，时间距离缩短了。'},
                {type: 'single', q: '日本工业集中分布在太平洋沿岸和濑户内海沿岸，主要原因是？', opt: ['A.海运便利，利于原料进口和产品出口', 'B.气候温暖湿润', 'C.人口稠密，劳动力丰富', 'D.科技发达'], ans: 'A', expl: '日本资源匮乏，市场狭小，严重依赖海运。'},
                {type: 'single', q: '新加坡经济腾飞的主要依托是？', opt: ['A.丰富的矿产资源', 'B.广阔的国内市场', 'C.优越的地理位置和港口', 'D.发达的农业'], ans: 'C', expl: '扼守马六甲海峡，发展转口贸易和临港工业。'},
                {type: 'multi', q: '【多选】交通运输布局变化对聚落的影响？', opt: ['A.影响聚落的兴衰', 'B.影响聚落的形态（沿交通线延伸）', 'C.影响聚落的等级', 'D.决定聚落的文化'], ans: 'ABC', expl: '文化受多重因素影响，交通不是决定性因素。'},
                {type: 'multi', q: '【多选】临空经济区适合布局的产业？', opt: ['A.电子芯片研发', 'B.生物医药', 'C.钢铁冶炼', 'D.鲜花冷链物流'], ans: 'ABD', expl: '空运成本高、速度快，适合高附加值、轻薄短小或急需保鲜的货物。钢铁太重且附加值低。'},
                {type: 'multi', q: '【多选】“一带一路”建设对沿线地区的意义？', opt: ['A.促进基础设施建设', 'B.加强贸易往来', 'C.促进文化交流', 'D.消除地区贫富差距'], ans: 'ABC', expl: '只能缩小差距，难以消除。'},
                {type: 'multi', q: '【多选】下列受交通运输条件改善影响明显的产业是？', opt: ['A.物流业', 'B.旅游业', 'C.商业零售', 'D.软件开发'], ans: 'ABC', expl: '软件开发主要依赖网络和人才，对实体交通依赖相对较小。'},
                {type: 'multi', q: '【多选】高铁站选址往往在城市边缘，这对城市的影响？', opt: ['A.拉大城市骨架，促进新城区发展', 'B.方便市中心居民出行', 'C.可能形成新的商业中心', 'D.加剧老城区拥堵'], ans: 'AC', expl: '离市中心远，不便老城居民，但利于新区开发。'}
            ],
            part_b: [
                {title: '🔥 哪吒的商业眼光', q: '如果陈塘关新修了一个高铁站，我想去那里做生意，你建议我做什么？', ans: '建议做<b>快消品、餐饮、特产礼品</b>或<b>商务酒店</b>。<br>原因：高铁站人流量大，且旅客停留时间短，流动性强，适合快速消费和住宿服务。不适合做大型家具或重工业。'},
                {title: '🐉 敖丙的推演', q: '为什么内河航运发达的地区，城市往往沿河呈条带状分布？', ans: '因为<b>河流是主要的交通通道</b>。<br>城市为了利用水运（客货流）和水源，会尽量靠近河岸建设。随着城市规模扩大，只能沿着河岸向两头延伸，形成条带状。'},
                {title: '🐆 申公豹的冷思考', q: '大城市之间修了高铁，对中间的小城市一定是好事吗？（过道效应）', ans: '<b>不一定。</b><br>如果高铁在小城市设站且班次多，能带动旅游和投资。但如果小城市自身产业没特色，人才和资金反而可能加速流向大城市（虹吸效应），导致小城市空心化，成为单纯的“过道”。'}
            ]
        }
    }
});
// js/data.js - Part 13 (补充 B1 第二、三、四章)

Object.assign(courses, {
    // === B1 第二章 大气 ===
    
    // 2.1 大气的组成与垂直分层
    c2s1: {
        title: '2.1 大气的组成与垂直分层',
        ppt: [
            {role: 'judy', title: '任务简报：天空巡逻', content: '欢迎回到警校！我是<b>朱迪</b>。<br>这次我们要向上飞，去巡逻保护地球的“防弹衣”——大气层。<br>这层衣服决定了地球的冷暖和生物的生存！', visual: 'icon_cloud'},
            {role: 'bogo', title: '一、大气的组成', content: '低层大气主要由三部分组成：<br>1. <b>干洁空气</b>（混合气体，主要成分）<br>2. <b>水汽</b>（成云致雨的关键，含量变化大）<br>3. <b>杂质</b>（凝结核，但也带来雾霾）', visual: 'css_composition'},
            {role: 'nick', title: '干洁空气成分表', content: '听好了，这里面学问大着呢：<br>🦊 <b>氮气 (78%)</b>：生物体的基本成分（蛋白质）。<br>🦊 <b>氧气 (21%)</b>：维持生命活动。<br>🦊 <b>二氧化碳</b>：光合作用原料，还能<b>吸收地面辐射</b>保温。<br>🦊 <b>臭氧</b>：在平流层，吸收紫外线，被称为“地球生命的保护伞”。', visual: 'icon_chart'},
            {role: 'flash', title: '二...垂...直...分...层...', content: '我们要...一层...一层...往上飞...<br>1. <b>对流层</b> (贴近地面)<br>2. <b>平流层</b> (中间)<br>3. <b>高层大气</b> (最上面)', visual: 'css_atmos_layers'},
            {role: 'judy', title: '第一站：对流层 (0-12km)', content: '我们现在就在这！特点如下：<br>1. <b>气温随高度下降</b>：地面是主要热源，每升100米降0.6℃。<br>2. <b>对流运动显著</b>：热气上升，冷气下降。<br>3. <b>天气现象复杂</b>：云雨雾雪都在这，因为它集中了几乎全部的水汽和杂质。', visual: 'icon_rain'},
            {role: 'nick', title: '第二站：平流层 (12-50km)', content: '这里适合开飞机，因为：<br>1. <b>气温随高度升高</b>：有臭氧层吸收紫外线增温。<br>2. <b>平流运动为主</b>：上热下冷，大气稳定，不颠簸。<br>3. <b>天气晴朗</b>：水汽杂质少，能见度极好。', visual: 'icon_plane'},
            {role: 'bogo', title: '第三站：高层大气 (>50km)', content: '这里空气极其稀薄。重点关注<b>电离层</b>（80-500km）。<br>作用：它能反射无线电波，这对我们的警用通讯至关重要！<br>注意：极光也发生在这里。', visual: 'css_radio_wave'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '低层大气中占比最大的气体是？', opt: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 臭氧'], ans: 'B', expl: '氮气占78%，是生物体蛋白质的重要组成部分。'},
                {type: 'single', q: '被称为“地球生命的保护伞”的是？', opt: ['A. 二氧化碳', 'B. 水汽', 'C. 臭氧', 'D. 氧气'], ans: 'C', expl: '臭氧大量吸收紫外线，保护生物免受伤害。'},
                {type: 'single', q: '对流层气温垂直变化规律是？', opt: ['A. 随高度增加而升高', 'B. 随高度增加而降低', 'C. 高度变化不明显', 'D. 先升高后降低'], ans: 'B', expl: '对流层热量主要来自地面，离地面越远越冷。'},
                {type: 'single', q: '适合民航飞机飞行的是？', opt: ['A. 对流层', 'B. 平流层', 'C. 高层大气', 'D. 电离层'], ans: 'B', expl: '平流层大气平稳（平流运动），且能见度高。'},
                {type: 'multi', q: '【多选】关于对流层，正确的是？', opt: ['A. 厚度赤道厚两极薄', 'B. 天气现象复杂', 'C. 包含全部臭氧', 'D. 空气对流运动显著'], ans: 'ABD', expl: '臭氧主要在平流层。对流层厚度随纬度变化，赤道约17-18km，两极8-9km。'}
            ],
            part_b: [
                {title: '情境一：登山穿衣', q: '为什么爬高山时，即使是大晴天，也要带棉大衣？', ans: '因为山在<b>对流层</b>。对流层的热量主要来自地面辐射，<b>海拔越高，气温越低</b>（每升高100米约降0.6℃）。'},
                {title: '情境二：无线电中断', q: '当太阳活动（如耀斑）爆发时，为什么警局的无线电会失灵？', ans: '因为无线电通讯依赖<b>高层大气中的电离层</b>反射。太阳活动爆发会发射高能带电粒子流，扰动电离层，导致通讯中断。'}
            ]
        }
    },

    // 2.2 大气受热过程与热力环流
    c2s2: {
        title: '2.2 大气受热过程与热力环流',
        ppt: [
            {role: 'bogo', title: '紧急案件：热量去哪了？', content: '警员们！太阳把热量传给地球，为什么地球没有热爆炸？为什么晚上没有太阳却不结冰？<br>我们要调查代号为<b>“温室效应”</b>的嫌疑案！', visual: 'icon_detective'},
            {role: 'judy', title: '一、大气的受热过程', content: '这是一个接力赛：<br>1. <b>太阳暖大地</b>：太阳辐射（短波）穿过大气，大气削弱得少，大部分被地面吸收。<br>2. <b>大地暖大气</b>：地面增温后，释放地面辐射（长波），绝大部分被大气（CO2、水汽）吸收。<br>结论：<b>地面</b>是近地面大气主要的直接热源！', visual: 'css_heating'},
            {role: 'nick', title: '二、大气暖大地 (保温作用)', content: '大气拿了地面的热量，也不白拿。<br>它会通过<b>大气逆辐射</b>把热量还给地面。<br>这就像给地球盖了一层被子，这就叫<b>保温作用</b>（温室效应）。<br>多云的夜晚比晴朗的夜晚温暖，就是因为被子厚！', visual: 'css_blanket'},
            {role: 'flash', title: '热...力...环...流...', content: '这是大气运动的...最简单形式...<br>1. 地面热 -> 空气膨胀上升 -> 近地面低压。<br>2. 地面冷 -> 空气收缩下沉 -> 近地面高压。<br>3. 水平方向：空气从高压...流向...低压。', visual: 'css_thermal'},
            {role: 'judy', title: '三、大气的水平运动——风', content: '风是怎么跑起来的？受三个力控制：<br>1. <b>水平气压梯度力</b>：起动器（垂直等压线，高压指低压）。<br>2. <b>地转偏向力</b>：方向盘（北半球右偏，不改速度）。<br>3. <b>摩擦力</b>：刹车（减速，使风向斜穿等压线）。', visual: 'css_wind'},
            {role: 'bogo', title: '全课总结', content: '结案！<br>1. 太阳短波进得来，地面长波出不去（保温）。<br>2. 冷热不均引起热力环流（热升冷降）。<br>3. 三个力决定风向（高空平行，近地面斜穿）。<br>立刻归队，进行热力考核！', visual: 'icon_badge'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '近地面大气的直接热源是？', opt: ['A. 太阳辐射', 'B. 地面辐射', 'C. 大气辐射', 'D. 大气逆辐射'], ans: 'B', expl: '大气对太阳短波吸收很少，主要吸收地面长波辐射。'},
                {type: 'single', q: '对地面起保温作用的是？', opt: ['A. 太阳辐射', 'B. 地面辐射', 'C. 大气逆辐射', 'D. 反射作用'], ans: 'C', expl: '大气逆辐射将热量返还给地面，起到保温作用。'},
                {type: 'single', q: '形成风的直接原因是？', opt: ['A. 水平气压梯度力', 'B. 地转偏向力', 'C. 摩擦力', 'D. 重力'], ans: 'A', expl: '气压梯度力是风的原始动力，决定风速和初始风向。'},
                {type: 'single', q: '北半球近地面风向？', opt: ['A. 垂直等压线', 'B. 平行等压线', 'C. 向右偏转斜穿等压线', 'D. 向左偏转斜穿等压线'], ans: 'C', expl: '受三力合力（梯度力+偏向力+摩擦力），北半球向右偏转，最终斜穿等压线。'},
                {type: 'multi', q: '【多选】热力环流实例？', opt: ['A. 海陆风', 'B. 山谷风', 'C. 城市热岛环流', 'D. 季风'], ans: 'ABCD', expl: '这些都是由于冷热不均引起的大气运动形式。'}
            ],
            part_b: [
                {title: '情境一：温室大棚', q: '为什么农民伯伯在冬天用塑料大棚种菜？原理是什么？', ans: '利用<b>温室效应</b>原理。塑料膜允许太阳短波辐射进入，但阻挡地面长波辐射散失，增强了棚内的大气逆辐射（<b>保温作用</b>）。'},
                {title: '情境二：海边度假', q: '白天在海边，你会感觉风从哪里吹来？为什么？', ans: '从<b>海洋吹向陆地</b>（海风）。<br>原因：白天陆地升温快（热/低压），海洋升温慢（冷/高压），风从高压吹向低压。'}
            ]
        }
    },

    // === B1 第三章 地球上的水 ===
    
    // 3.1 水循环
    c3s1: {
        title: '3.1 水循环',
        ppt: [
            {role: 'judy', title: '新任务：追踪小水滴', content: '警员们！地球上的水从哪里来，到哪里去？<br>这节课我们要追踪一滴水的奇幻漂流。<br>水循环被称为“大自然的血液”，它维持着全球水的动态平衡。', visual: 'icon_water_drop'},
            {role: 'nick', title: '三大循环圈', content: '水循环分三个圈子：<br>1. <b>海陆间循环</b>（大循环）：大海蒸发->飘到陆地->下雨->流回大海（最重要的！）。<br>2. <b>海上内循环</b>：海里蒸发->海里下雨（水量最大）。<br>3. <b>陆地内循环</b>：陆地蒸发->陆地下雨。', visual: 'css_water_cycle'},
            {role: 'flash', title: '主...要...环...节...', content: '蒸发...<br>水汽输送...<br>降水...<br>下渗...<br>地表径流...<br>地下径流...', visual: 'css_rain'},
            {role: 'bogo', title: '人类的干预', content: '听着！我们也可以影响水循环：<br>1. <b>修水库</b>：调节径流的时间分配。<br>2. <b>跨流域调水</b>：调节径流的空间分配（如南水北调）。<br>3. <b>铺水泥路</b>：导致下渗减少，容易积水！', visual: 'icon_dam'},
            {role: 'judy', title: '水循环的意义', content: '为什么它这么重要？<br>1. 维持全球水量平衡。<br>2. 更新陆地淡水资源。<br>3. 塑造地表形态（流水侵蚀、堆积）。<br>4. 调节全球热量平衡。', visual: 'icon_balance'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地球上淡水的主体是？', opt: ['A. 河水', 'B. 湖泊水', 'C. 冰川', 'D. 地下水'], ans: 'C', expl: '冰川占淡水总量的2/3。'},
                {type: 'single', q: '下列环节中，人类影响最大的是？', opt: ['A. 蒸发', 'B. 水汽输送', 'C. 地表径流', 'D. 降水'], ans: 'C', expl: '人类通过修水库、调水等措施改变地表径流。'},
                {type: 'single', q: '塔里木河参与的水循环类型是？', opt: ['A. 海陆间循环', 'B. 海上内循环', 'C. 陆地内循环', 'D. 大循环'], ans: 'C', expl: '内流河最终未入海，属于陆地内循环。'},
                {type: 'single', q: '“黄河之水天上来”描述的环节是？', opt: ['A. 蒸发', 'B. 降水', 'C. 径流', 'D. 下渗'], ans: 'B', expl: '天上来指大气降水。'},
                {type: 'multi', q: '【多选】海陆间循环的主要环节包括？', opt: ['A. 蒸发', 'B. 水汽输送', 'C. 降水', 'D. 径流'], ans: 'ABCD', expl: '海陆间循环包含所有这些环节。'}
            ],
            part_b: [
                {title: '情境一：海绵城市', q: '为什么要建设“海绵城市”？它影响了哪些水循环环节？', ans: '为了<b>防洪排涝</b>和<b>利用雨水</b>。它增加了<b>下渗</b>，减少了<b>地表径流</b>，补充了<b>地下径流</b>。'},
                {title: '情境二：植树造林', q: '在河流上游植树造林，对下游有什么好处？', ans: '森林能<b>涵养水源</b>，增加下渗。使下游河流的<b>水位变化更平稳</b>（削减洪峰，补充枯水期流量），减少洪涝灾害。'}
            ]
        }
    },

    // 3.2 海水的性质
    c3s2: {
        title: '3.2 海水的性质',
        ppt: [
            {role: 'judy', title: '任务简报：深海体检', content: '警员们，我们这节课要潜入深海！<br>给大海做个“体检”。主要检测三个指标：<b>温度</b>、<b>盐度</b>、<b>密度</b>。<br>这三个指标决定了海洋鱼类的分布，也影响着我们的潜艇航行！', visual: 'icon_submarine'},
            {role: 'nick', title: '指标一：海水温度', content: '海水热量主要来自太阳。<br>1. <b>水平规律</b>：纬度越高，水温越低（废话，赤道热嘛）。<br>2. <b>垂直规律</b>：越深越冷。但在1000米以下，水温就保持低温，变化不大了。', visual: 'css_temp_chart'},
            {role: 'bogo', title: '指标二：海水盐度', content: '我是牛局长。盐度就是海水的咸度，平均3.5%。<br>规律：<b>副热带海区最高</b>（蒸发大，降水少），向两侧递减。<br>思考：为什么赤道不是最咸的？（因为赤道雨多，稀释了！）', visual: 'css_salinity_curve'},
            {role: 'flash', title: '指...标...三...密...度...', content: '密度...随纬度...升高...而增大...<br>密度...随深度...增加...而增大...<br>这关系到...潜艇...的...沉浮...', visual: 'icon_anchor'},
            {role: 'nick', title: '特殊案例：红海与波罗的海', content: '这是考试必考题！<br>🏆 <b>盐度最高：红海</b>（位于副热带，蒸发强，降水少，封闭）。<br>📉 <b>盐度最低：波罗的海</b>（纬度高蒸发弱，降水多，大量河水注入）。', visual: 'icon_trophy'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '世界大洋表层海水盐度分布规律是？', opt: ['A. 从赤道向两极递减', 'B. 从副热带海区向两侧递减', 'C. 从高纬向低纬递减', 'D. 全球均匀分布'], ans: 'B', expl: '副热带海区蒸发量大于降水量，盐度最高。'},
                {type: 'single', q: '海水温度垂直变化的规律是？', opt: ['A. 随深度增加而升高', 'B. 随深度增加而降低，1000米以下变化不大', 'C. 随深度增加均匀降低', 'D. 随深度增加先升后降'], ans: 'B', expl: '1000米以上随深度增加迅速降低，1000米以下保持低温。'},
                {type: 'single', q: '世界上盐度最高的海域是？', opt: ['A. 红海', 'B. 波罗的海', 'C. 地中海', 'D. 死海'], ans: 'A', expl: '红海位于副热带，蒸发旺盛，降水稀少，且海域封闭。'},
                {type: 'single', q: '“海中断崖”现象主要与海水的哪个性质有关？', opt: ['A. 温度', 'B. 盐度', 'C. 密度', 'D. 透明度'], ans: 'C', expl: '海水密度随深度异常减小，导致浮力骤减。'},
                {type: 'multi', q: '【多选】影响表层海水盐度的因素有？', opt: ['A. 蒸发量与降水量', 'B. 入海径流', 'C. 洋流', 'D. 海域封闭程度'], ans: 'ABCD', expl: '这些都是影响盐度的重要因素。'}
            ],
            part_b: [
                {title: '情境一：吃水深度', q: '一艘轮船从长江驶入东海，船身是浮起来一些还是沉下去一些？为什么？', ans: '<b>浮起来一些。</b><br>原因：海水的盐度比河水高，因此<b>密度大</b>。根据阿基米德原理，同样的重力下，密度大则排开水的体积小，所以船会浮起。'},
                {title: '情境二：潜艇危机', q: '朱迪驾驶潜艇遭遇“海中断崖”，潜艇急剧掉深。这说明此时海水的垂直密度结构是怎样的？', ans: '说明<b>上层密度大，下层密度小</b>。<br>正常情况下越深密度越大，但如果反常，下层密度突然变小，浮力减小，潜艇就会像掉下悬崖一样下沉。'}
            ]
        }
    },

    // 3.3 海水的运动
    c3s3: {
        title: '3.3 海水的运动',
        ppt: [
            {role: 'judy', title: '任务简报：冲浪行动', content: '大海可不是静止不动的！它一直在跳舞。<br>这节课我们学习海水运动的三种形式：<br>1. <b>波浪</b>（风吹出来的）<br>2. <b>潮汐</b>（月亮吸出来的）<br>3. <b>洋流</b>（大海的传送带）', visual: 'icon_surf'},
            {role: 'nick', title: '形式一：波浪', content: '最常见的是<b>风浪</b>。风越大，浪越高。<br>还有一种可怕的叫<b>海啸</b>，那是海底地震或火山爆发引起的巨浪。<br>🦊 提示：遇到海啸要往高处跑，别去海边拍照！', visual: 'css_wave_motion'},
            {role: 'bogo', title: '形式二：潮汐', content: '我是牛局长。潮汐是海水在<b>月球和太阳引力</b>作用下的周期性涨落。<br>白天叫<b>潮</b>，晚上叫<b>汐</b>。<br>规律：初一、十五是大潮（引力叠加）。<br>应用：我们要利用潮汐发电，或者趁落潮去赶海！', visual: 'css_tide_moon'},
            {role: 'flash', title: '形...式...三...洋...流...', content: '海里的...高速...公路...<br>暖流：热->冷（增温增湿）<br>寒流：冷->热（降温减湿）<br>E...A...C...（东澳大...利...亚...暖...流...）', visual: 'css_current_map'},
            {role: 'judy', title: '洋流的影响', content: '洋流对我们很重要：<br>1. <b>气候</b>：暖流让森林茂密，寒流让沙漠逼近海岸。<br>2. <b>渔场</b>：寒暖流交汇处鱼特别多（北海道渔场）。<br>3. <b>航行</b>：顺流快，逆流慢。<br>4. <b>污染</b>：扩大污染范围，但加快净化速度。', visual: 'icon_fish'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '波浪的主要动力来源是？', opt: ['A. 月球引力', 'B. 太阳辐射', 'C. 风能', 'D. 地球内能'], ans: 'C', expl: '最常见的海浪是由风力形成的。'},
                {type: 'single', q: '潮汐现象的主要成因是？', opt: ['A. 风力吹拂', 'B. 月球和太阳的引力', 'C. 海水密度差异', 'D. 地转偏向力'], ans: 'B', expl: '潮汐是海水受天体引力产生的周期性涨落。'},
                {type: 'single', q: '关于洋流的性质，叙述正确的是？', opt: ['A. 从高纬流向低纬的是暖流', 'B. 从低纬流向高纬的是寒流', 'C. 暖流的水温一定比寒流高', 'D. 暖流比流经海区的水温高'], ans: 'D', expl: '暖流定义是比流经海区水温高。C错误，比如赤道附近的寒流可能比极地的暖流温度高。'},
                {type: 'single', q: '世界著名渔场多分布在？', opt: ['A. 寒暖流交汇处', 'B. 暖流流经处', 'C. 寒流流经处', 'D. 深海盆地'], ans: 'A', expl: '寒暖流交汇搅动海水，营养物质上泛，浮游生物多，鱼类丰富。'},
                {type: 'multi', q: '【多选】海水运动的主要形式包括？', opt: ['A. 波浪', 'B. 潮汐', 'C. 洋流', 'D. 泥石流'], ans: 'ABC', expl: '泥石流是陆地灾害。'},
                {type: 'multi', q: '【多选】洋流对地理环境的影响？', opt: ['A. 调节全球热量平衡', 'B. 影响沿岸气候', 'C. 影响海洋生物分布', 'D. 影响航海速度'], ans: 'ABCD', expl: '这些都是洋流的重要影响。'}
            ],
            part_b: [
                {title: '情境一：漂流瓶', q: '朱迪在动物城海边扔了一个漂流瓶，几年后在千里之外的冰川岛被发现了。是谁把瓶子带过去的？', ans: '是<b>洋流</b>。洋流是海洋中的大规模传送带，能长距离输送漂浮物。'},
                {title: '情境二：哥伦布的航行', q: '哥伦布两次去美洲，第一次走了直线却很慢，第二次绕了个大圈（顺着洋流）反而很快。这说明了什么？', ans: '说明<b>洋流对航海有重要影响</b>。顺风顺流航行速度快，省燃料；逆风逆流速度慢，耗能多。'}
            ]
        }
    },

    // === B1 第四章 地貌 ===
    
    // 4.1 常见地貌类型
    c4s1: {
        title: '4.1 常见地貌类型',
        ppt: [
            {role: 'judy', title: '任务简报：地形侦察', content: '警员们，欢迎来到<b>地貌侦察科</b>！<br>地球表面不是平坦的停车场，而是千姿百态的。<br>今天的任务是学会识别四种关键地形：<br>1. <b>喀斯特</b>（石头会溶化？）<br>2. <b>河流</b>（水的雕刻刀）<br>3. <b>风沙</b>（风的搬运工）<br>4. <b>海岸</b>（海浪的拍打）', visual: 'icon_mountain'},
            {role: 'nick', title: '一、喀斯特地貌 (Karst)', content: '这名字源于克罗地亚。<br><b>核心机密：</b> 可溶性岩石（主要是<b>石灰岩</b>）被水溶蚀了。<br><b>分布：</b> 我国广西、贵州、云南最典型。<br>徐霞客说的“峭峰离立”，就是指这个！', visual: 'css_karst'},
            {role: 'bogo', title: '地表 vs 地下', content: '喀斯特分两层楼：<br>1. <b>地表</b>：溶沟（路难走）、洼地（也叫坝子，适合种地）、峰林（像树林一样的山峰）。<br>2. <b>地下</b>：溶洞。里面有石钟乳（往下长）、石笋（往上长）、石柱（连在一起）。', visual: 'icon_cave'},
            {role: 'flash', title: '二...河...流...地...貌...', content: '河流...是...雕刻师...<br><b>上游（山区）：</b> 水流急，向下切。形成<b>“V”形河谷</b>，深而窄。<br><b>下游（平原）：</b> 水流缓，向两边扩。形成宽浅的<b>槽形河谷</b>和<b>冲积平原</b>。', visual: 'css_river_valley'},
            {role: 'nick', title: '特殊的河流作品', content: '注意这两个特殊形态：<br>1. <b>河曲与牛轭湖</b>：河道弯成S形，洪水一来把弯冲直了，留下的弯道就成了牛轭湖。<br>2. <b>三角洲</b>：河流入海时流速变慢，泥沙卸货，形成喇叭口状的陆地（如黄河三角洲）。', visual: 'css_delta'},
            {role: 'judy', title: '三、风沙地貌', content: '去西北地区看风的杰作：<br>🌬️ <b>风力侵蚀</b>：风吹石头，变成<b>风蚀蘑菇</b>和<b>雅丹</b>。<br>🏜️ <b>风力堆积</b>：风停了沙子落下，变成<b>沙丘</b>。<br>丹娘沙丘就在雅鲁藏布江边，也是风吹出来的哦！', visual: 'css_dune'},
            {role: 'bogo', title: '重点情报：新月形沙丘', content: '这是沙漠里的指南针！<br>形状像新月。<br><b>迎风坡</b>：缓而且呈凸形。<br><b>背风坡</b>：陡而且呈凹形。<br>记住：风是从缓坡吹向陡坡的！', visual: 'icon_compass'},
            {role: 'nick', title: '四、海岸地貌', content: '大海边缘的战争：<br>1. <b>海浪侵蚀</b>（进攻）：形成海蚀崖（陡壁）、海蚀柱（像石林）。<br>2. <b>海浪堆积</b>（防守）：形成沙滩、泥滩。<br>以后去海边度假，记得区分这是谁的杰作！', visual: 'css_coast'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '“峭峰离立，分行竞颖”描述的是哪种地貌？', opt: ['A. 风沙地貌', 'B. 河流地貌', 'C. 喀斯特地貌', 'D. 冰川地貌'], ans: 'C', expl: '徐霞客描述的是广西、贵州一带典型的喀斯特峰林地貌。'},
                {type: 'single', q: '下列地貌属于地下喀斯特地貌的是？', opt: ['A. 峰林', 'B. 溶沟', 'C. 石笋', 'D. 洼地'], ans: 'C', expl: '石笋位于溶洞底部，属于地下喀斯特；其他均为地表喀斯特。'},
                {type: 'single', q: '河流入海口常见的堆积地貌是？', opt: ['A. 冲积扇', 'B. 三角洲', 'C. 河漫滩', 'D. 牛轭湖'], ans: 'B', expl: '河流入海处流速减慢，泥沙淤积形成三角洲。'},
                {type: 'single', q: '关于新月形沙丘，说法正确的是？', opt: ['A. 迎风坡陡', 'B. 背风坡缓', 'C. 迎风坡缓，背风坡陡', 'D. 两侧坡度一样'], ans: 'C', expl: '根据流体力学，迎风坡受风压力坡度缓，背风坡有涡流塌落坡度陡。'},
                {type: 'single', q: '雅丹地貌主要分布在我国哪里？', opt: ['A. 湿润的南方', 'B. 西北干旱地区', 'C. 青藏高原', 'D. 东北平原'], ans: 'B', expl: '雅丹是典型的风蚀地貌，常见于干旱多风的西北地区。'},
                {type: 'multi', q: '【多选】下列属于海浪侵蚀地貌的是？', opt: ['A. 海蚀崖', 'B. 沙滩', 'C. 海蚀拱桥', 'D. 海蚀柱'], ans: 'ACD', expl: '沙滩属于海浪堆积地貌，其余为侵蚀地貌。'}
            ],
            part_b: [
                {title: '逻辑推理：倒置的扫把', q: '在野外看到一棵树的根部裸露，像倒置的扫把，且根部下方有大量的沙土堆积（红柳沙包）。这能告诉我们该地过去的气候变化吗？', ans: '<b>能。</b><br>红柳沙包的纹层结构像树木年轮。沙层厚说明当时<b>风沙大、气候干旱</b>；枯枝落叶层厚说明当时<b>湿润、植被好</b>。通过分析纹层，可以推测近百年的气候干湿变化。'},
                {title: '案情分析：消失的凶器', q: '在喀斯特地区，凶手把作案工具扔进了一条小河，警方第二天去打捞，发现河水干了，下游也没有踪迹。工具去哪了？', ans: '很可能进入了<b>地下河</b>。<br>喀斯特地区裂隙发育，地表河流容易通过落水洞转入地下，变成地下河。工具随水流进入了复杂的地下溶洞系统。'},
                {title: '生存挑战：沙漠求生', q: '如果你在沙漠里迷路了，看到远处有一片新月形沙丘。已知当地盛行西北风，你应该往哪个方向走才能找到背风坡躲避风沙？', ans: '往<b>东南方向</b>的沙丘凹面走。<br>逻辑：盛行西北风，说明风从西北吹来。新月形沙丘的凸面（迎风坡）朝向西北，凹面（背风坡）朝向东南。'}
            ]
        }
    },

    // 4.2 地貌的观察
    c4s2: {
        title: '4.2 地貌的观察',
        ppt: [
            {role: 'judy', title: '任务简报：鹰眼行动', content: '警员们，识别地貌只是第一步。<br>作为一名高级侦探，你必须学会<b>“科学观察”</b>。<br>不仅仅是看，而是要测量、分析、记录。<br>就像詹天佑修铁路一样，观察不到位，火车就上不去！', visual: 'icon_telescope'},
            {role: 'bogo', title: '一、观察的顺序', content: '乱看是看不出名堂的，必须遵守纪律：<br>1. <b>宏观 -> 微观</b>：先看大的（是山地还是平原？），再看小的（有几条沟？）。<br>2. <b>面 -> 点</b>：先看整体区域，再选一个点详细勘察。<br>辅助工具：地形图、无人机、卫星影像。', visual: 'css_zoom'},
            {role: 'nick', title: '二、观察内容：高度', content: '高度分两种：<br>1. <b>绝对高度</b>（海拔）：划分地貌类型（高原>500m，平原<200m）。<br>2. <b>相对高度</b>（落差）：反映地面起伏状况。<br>🦊 提示：爬山累不累，主要看相对高度！', visual: 'css_height_diff'},
            {role: 'flash', title: '三...坡...度...', content: '坡度...就是...陡不陡...<br>公式：垂直距离 / 水平距离...<br>坡度大...容易水土流失...<br>坡度小...适合种地...修路...', visual: 'css_slope_tri'},
            {role: 'judy', title: '詹天佑的智慧', content: '案例分析：<b>“人”字形铁路</b>。<br>京张铁路八达岭段坡度太大，火车爬不动。<br><b>解决方案：</b> 把线路修成“人”字形。<br><b>原理：</b> 延长了水平距离，在垂直高度不变的情况下，<b>降低了坡度</b>。', visual: 'icon_railway'},
            {role: 'nick', title: '四、坡向 (Aspect)', content: '山也有阴阳两面：<br>☀️ <b>阳坡</b>：光照好，暖和（北半球南坡是阳坡）。<br>🌑 <b>阴坡</b>：光照差，冷，蒸发弱。<br>💨 <b>迎风坡</b>：雨水多（地形雨）。<br>🍂 <b>背风坡</b>：雨水少。', visual: 'css_sun_mountain'},
            {role: 'bogo', title: '五、其他要素', content: '除了高和坡，还要看：<br>1. <b>形状</b>：是圆的还是尖的？<br>2. <b>面积</b>：有多大？<br>3. <b>分布</b>：是成片还是孤立？<br>4. <b>破碎程度</b>：比如我国西南山区，地形破碎，路很难修。', visual: 'icon_map_scatter'},
            {role: 'judy', title: '六、野外实战', content: '出发前准备：<br>1. <b>资料</b>：地形图、指南针、记录表。<br>2. <b>路线</b>：设计好观察点。<br>3. <b>安全</b>：避开滑坡、崩塌区。<br>到了现场要勤拍照、画素描、记数据！', visual: 'icon_backpack'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地貌观察的最佳顺序是？', opt: ['A. 从微观到宏观', 'B. 从点到面', 'C. 从宏观到微观，从面到点', 'D. 随机观察'], ans: 'C', expl: '整体把握，细节填充。先看大的，再看小的。'},
                {type: 'single', q: '绝对高度主要用于？', opt: ['A. 反映地面起伏', 'B. 划分地貌类型（如平原、高原）', 'C. 计算坡度', 'D. 判断坡向'], ans: 'B', expl: '绝对高度（海拔）是区分平原（<200m）和高原（>500m）等类型的依据。'},
                {type: 'single', q: '铁路建设中，最大坡度通常限制在？', opt: ['A. 15%', 'B. 2.5%-3%', 'C. 10%', 'D. 45%'], ans: 'B', expl: '铁路对坡度要求极高，通常不超过3%，否则机车拉不动。'},
                {type: 'single', q: '在北半球中纬度地区，关于坡向的说法正确的是？', opt: ['A. 南坡是阴坡', 'B. 北坡是阳坡', 'C. 南坡是阳坡', 'D. 东西坡光照无差异'], ans: 'C', expl: '北半球太阳在南方，南坡朝阳。'},
                {type: 'single', q: '京张铁路“人”字形线路的设计原理是？', opt: ['A. 缩短路程', 'B. 延长水平距离以降低坡度', 'C. 增加垂直高度', 'D. 为了美观'], ans: 'B', expl: '坡度=垂直/水平。延长水平距离，可以减小坡度。'},
                {type: 'single', q: '一般不适宜发展种植业的坡度界限是？', opt: ['A. 5°', 'B. 15°', 'C. 25°', 'D. 2°'], ans: 'C', expl: '通常坡度大于25°严禁开垦，应退耕还林。'},
                {type: 'multi', q: '【多选】地貌观察的主要内容包括？', opt: ['A. 高度', 'B. 坡度', 'C. 坡向', 'D. 形状和面积'], ans: 'ABCD', expl: '这些都是描述地貌特征的核心要素。'}
            ],
            part_b: [
                {title: '工程难题：盘山公路', q: '为什么山区的公路都要修成“之”字形？直接直着修上去不行吗？', ans: '<b>不行。</b><br>直着修坡度太大，汽车爬不上去，且下坡极易失控。修成“之”字形，虽然路程变长了，但增加了<b>水平距离</b>，从而<b>降低了坡度</b>，保证行车安全。'},
                {title: '选址智慧：古寺庙', q: '朱迪发现很多古老的寺庙都建在山的南坡，而且后面有山挡着。这是为什么？（从坡向角度分析）', ans: '1. <b>采光</b>：北半球南坡是阳坡，冬暖夏凉。<br>2. <b>避风</b>：背靠山脉可以阻挡冬季寒冷的北风（背风坡）。<br>这是古人利用地貌改善微气候的智慧。'}
            ]
        }
    }
});

// js/data.js - Part 15 (补充 B2 Ch2, Ch5 及 B1/B2 问题研究)

// ==========================================
// 补充课程内容：必修二 (B2)
// ==========================================
Object.assign(courses, {
    // --- B2 2.1 乡村和城镇空间结构 ---
    b2c2s1: {
        title: '2.1 乡村和城镇空间结构',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：土地的用法', content: '徒儿们！乡村和城镇都是人们聚居的地方。<br>但地有限，怎么用？这就叫<b>土地利用</b>。<br>主要类型：耕地、林地、草地（乡村为主）；商业、工业、居住、建设用地（城镇为主）。<br>合理的布局能让乾坤有序！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：城镇功能区', content: '城里最热闹的地方就是<b>商业区</b>（市中心、街角），像我的风火轮一样红火，但面积小。<br><b>工业区</b>（郊外、交通边）又吵又脏，我不去，但它是城市生产的主力。<br><b>居住区</b>（最大）是我们睡觉的地方，分高级和普通，高级的在风景好的上风上水处。', visual: 'icon_fire'},
            {role: 'aobing', title: '敖丙分析：空间结构模式', content: '城市长得都不一样，但有规律：<br>1. <b>同心圆模式</b>：像洋葱，一层层往外扩（平原多见）。<br>2. <b>扇形模式</b>：沿着交通线向外延伸。<br>3. <b>多核心模式</b>：有几个中心，像龙的九子各占一方。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：影响因素之经济', content: '谁决定地给谁用？看谁出钱多（<b>付租能力</b>）！<br><b>商业</b>：这帮人最有钱，必须占市中心（人流大）。<br><b>住宅</b>：出钱中等，占中间。<br><b>工业</b>：出钱少，还要地大，只能去郊区。<br>这就形成了<b>地租曲线</b>。', visual: 'icon_money'},
            {role: 'shengongbao', title: '申公豹：仅仅是钱吗？', content: '哼，除了钱，还有人情世故！<br>1. <b>历史</b>：北京故宫在市中心，谁敢拆？那是文物！<br>2. <b>社会</b>：种族、收入导致贫民窟和富人区隔离。<br>3. <b>行政</b>：政府说要建开发区，地就得划过去。<br>这也是命数！', visual: 'icon_shield'},
            {role: 'aobing', title: '案例：大圩古镇', content: '看广西大圩古镇。<br>它沿着漓江展开，呈长条形。<br>这是受<b>河流（交通/水源）</b>和<b>地形</b>的制约。<br>商业街贴着码头，方便做生意。', visual: 'icon_water_drop'},
            {role: 'taiyi', title: '全节总结', content: '商业居中工业边，<br>住宅占地最为先。<br>经济地租是关键，<br>历史社会也相连。<br>结构随世在演变，<br>合理规划天地宽！', visual: 'icon_star'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '城市中最广泛的土地利用方式是？', opt: ['A.商业用地', 'B.工业用地', 'C.居住用地', 'D.行政用地'], ans: 'C', expl: '居住区是城市的主体，占地面积最大。'},
                {type: 'single', q: '直接影响城市地租高低的主要因素有？', opt: ['A.距离市中心的远近和交通通达度', 'B.地形和气候', 'C.人口密度和文化', 'D.工业产值'], ans: 'A', expl: '离市中心越近、交通越好，地租越高。'},
                {type: 'single', q: '高级居住区通常分布在？', opt: ['A.市中心交通便利处', 'B.城市外缘，环境优美处', 'C.工业区附近', 'D.低洼处'], ans: 'B', expl: '富人追求环境质量，常位于上风上水的高处或风景区。'},
                {type: 'multi', q: '【多选】商业区的布局特点是？', opt: ['A.位于市中心', 'B.位于交通干线两侧', 'C.位于街角路口', 'D.位于河流下游'], ans: 'ABC', expl: '商业追求人流量（市场最优）和交通便利（交通最优）。'}
            ],
            part_b: [
                {title: '🔥 哪吒的挑战', q: '为什么市中心虽然地租最高，但还是有很多小商店活下来了？', ans: '1. <b>付租能力高</b>：出售高附加值商品（奢侈品）。<br>2. <b>薄利多销</b>：人流量巨大。<br>3. <b>立体利用</b>：在这个“寸土寸金”的地方，楼盖得特别高，分摊了成本。'}
            ]
        }
    },

    // --- B2 2.2 城镇化 ---
    b2c2s2: {
        title: '2.2 城镇化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：什么是城镇化？', content: '乡下人进城，农村变城市，这就是<b>城镇化</b>。<br>三大标志要记牢：<br>1. 城镇人口增加。<br>2. <b>城镇人口占总人口比例上升</b>（最核心指标！）。<br>3. 城镇建设用地规模扩大。<br>这是社会进步的必经之路！', visual: 'icon_chart'},
            {role: 'nezha', title: '哪吒：S形曲线', content: '城镇化就像我踩风火轮，速度有快有慢：<br>1. <b>初期阶段</b>（<30%）：慢，水平低。<br>2. <b>中期阶段</b>（30%-70%）：<b>快！</b>（加速冲刺，问题也多）。<br>3. <b>后期阶段</b>（>70%）：慢，水平高（甚至出现逆城市化）。<br>中国现在就在<b>中期加速阶段</b>！', visual: 'css_curve'},
            {role: 'aobing', title: '敖丙分析：发达 vs 发展中', content: '<b>发达国家</b>：起步早，水平高，现在慢，出现“逆城市化”（富人搬去郊区）。<br><b>发展中国家</b>：起步晚，水平低，现在快，但容易出现“虚假城镇化”（人进城了，城没建好）或“滞后城镇化”。', visual: 'icon_compare'},
            {role: 'shengongbao', title: '申公豹：城市病', content: '看看现在的城市，那是“水泥森林”！<br>🌧️ <b>雨岛效应</b>：由于热气流上升，城市雨水多。<br>🔥 <b>热岛效应</b>：城市比郊区热。<br>🌫️ <b>雾霾</b>：汽车尾气排不出去。<br>这难道就是你们向往的生活？', visual: 'icon_storm'},
            {role: 'nezha', title: '哪吒：智慧城市', content: '别怕，我们有法宝！<br>📱 <b>GIS</b>：帮我们规划公交线路，选址医院。<br>🛰️ <b>RS</b>：监测城市扩张，看绿地少了没。<br>📡 <b>GNSS</b>：导航防堵车。<br>智慧城市，我命由我不由天！', visual: 'icon_phone'},
            {role: 'taiyi', title: '生态城市', content: '未来的路是<b>生态城市</b>。<br>发展低污染、节能建筑、绿色交通。<br>把城市轻轻放进大自然里，而不是把大自然铲平。<br>这就是“天人合一”。', visual: 'icon_tree_planting'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '衡量城镇化水平最重要的指标是？', opt: ['A.城镇人口数量', 'B.城镇建设用地规模', 'C.城镇人口占区域总人口的比例', 'D.城镇数量'], ans: 'C', expl: '比例最能反映结构变化。'},
                {type: 'single', q: '目前我国处于城镇化的哪个阶段？', opt: ['A.初期阶段', 'B.中期加速阶段', 'C.后期成熟阶段', 'D.逆城市化阶段'], ans: 'B', expl: '我国城镇化率约65%，处于30%-70%的加速区间。'},
                {type: 'single', q: '逆城市化现象表现为？', opt: ['A.城市中心人口向郊区和小城镇迁移', 'B.郊区人口向市中心迁移', 'C.农村人口向城市迁移', 'D.城市人口大量减少'], ans: 'A', expl: '追求环境质量，富人逃离市中心。'},
                {type: 'multi', q: '【多选】解决“城市病”的合理措施？', opt: ['A.建设卫星城，分散大城市职能', 'B.发展公共交通', 'C.扩大城市绿地', 'D.禁止人口迁入'], ans: 'ABC', expl: 'D不现实且违规。'}
            ],
            part_b: [
                {title: '🐉 敖丙的诊断', q: '某城市下大雨就“看海”，天晴就“干渴”，这是什么病？怎么治？', ans: '这是<b>“城市硬化病”</b>。<br>原因：水泥路面阻挡了下渗。<br>药方：建设<b>“海绵城市”</b>。铺设透水砖，建下凹式绿地、雨水花园，让城市像海绵一样吸水、蓄水、渗水、净水。'}
            ]
        }
    },

    // --- B2 2.3 地域文化与城乡景观 ---
    b2c2s3: {
        title: '2.3 地域文化与城乡景观',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：文化是什么？', content: '文化就像空气，看不见但无处不在。<br><b>地域文化</b>是在特定地域内形成的，有鲜明个性的文化。<br>它分两种：<br>1. <b>物质方面</b>：建筑、服饰、饮食（看得见）。<br>2. <b>非物质方面</b>：方言、习俗、价值观（看不见）。', visual: 'icon_life'},
            {role: 'lijing', title: '李靖：景观是文化的容器', content: '城乡景观是地域文化最直接的体现。<br>看一个地方的房子，就知道那里的人怎么生活，信奉什么。<br>比如<b>北京四合院</b>：<br>四四方方，长幼有序，体现了儒家的<b>“长幼尊卑”</b>和<b>“天圆地方”</b>思想。', visual: 'icon_park'},
            {role: 'nezha', title: '哪吒：福建土楼', content: '看我家乡（神话里的陈塘关可能有）类似的<b>福建土楼</b>！<br>圆圆的像个碉堡。<br>为什么？<br>1. <b>防御</b>：防强盗（墙厚）。<br>2. <b>聚族而居</b>：全村人住一栋楼，团结！<br>这就是客家人的文化。', visual: 'icon_rebuild'},
            {role: 'aobing', title: '敖丙：江南水乡', content: '我去过江南。<br>“小桥流水人家”。<br>房子临河而建，屋顶坡度大（为了排水），墙是白的（为了反光降温、素雅）。<br>这体现了<b>“人与自然和谐”</b>的文化。', visual: 'icon_water_drop'},
            {role: 'shengongbao', title: '申公豹：外国的月亮？', content: '看看国外。<br><b>美国城市</b>：棋盘格状，摩天大楼林立，体现了<b>“自由、开放、资本主义”</b>。<br><b>欧洲城市</b>：有中心广场和教堂，道路呈放射状，体现了<b>“皇权、宗教、历史”</b>。<br>风格大不同啊！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '全节总结', content: '看房知文化，看路知性格。<br>保护老祖宗留下的宝贝，建设有灵魂的城市。<br>最后一关考核，通关者赏风火轮体验券一张！', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地域文化最直观的体现是？', opt: ['A.方言', 'B.饮食', 'C.城乡景观', 'D.节日习俗'], ans: 'C', expl: '景观（建筑、聚落）是固化的文化，最直观。'},
                {type: 'single', q: '北京四合院体现了中国传统文化中的？', opt: ['A.御外凝内，长幼有序', 'B.崇尚自由，开拓创新', 'C.人与自然高度和谐', 'D.开放包容，中西合璧'], ans: 'A', expl: '儒家礼教思想。'},
                {type: 'single', q: '江南水乡屋顶坡度大，主要为了？', opt: ['A.美观', 'B.防雪压', 'C.排水', 'D.通风'], ans: 'C', expl: '南方雨水多。'},
                {type: 'multi', q: '【多选】地域文化对城市的影响体现在？', opt: ['A.建筑风格', 'B.城市格局', 'C.土地利用方式', 'D.居民消费习惯'], ans: 'ABCD', expl: '全方位影响。'}
            ],
            part_b: [
                {title: '🔥 哪吒的发现', q: '为什么我国北方的墙比南方厚，窗户比南方小？', ans: '为了<b>适应气候</b>。<br>北方寒冷，厚墙小窗为了<b>保温防寒</b>。<br>南方湿热，薄墙大窗为了<b>通风散热</b>。'},
                {title: '🐉 敖丙的对比', q: '同样是皇宫，为什么凡尔赛宫前面是大花园，故宫前面是大广场？', ans: '文化差异。<br>凡尔赛宫体现<b>“人定胜天”</b>和浪漫主义，修剪整齐的园林展示对自然的控制。<br>故宫体现<b>“皇权至上”</b>，广场用于举行盛大庆典，展示天子的威严。'}
            ]
        }
    },

    // --- B2 5.1 人类面临的主要环境问题 ---
    b2c5s1: {
        title: '5.1 人类面临的主要环境问题',
        ppt: [
            {role: 'nezha', title: '哪吒：地球病了！', content: '最近我踩着风火轮巡视，发现地球状态不对劲！<br>森林秃了（资源枯竭），河水黑了（环境污染），沙漠变大了（生态破坏）。<br>人类在创造财富的同时，也把自己逼到了悬崖边上。<br>这是怎么回事？', visual: 'icon_alert_red'},
            {role: 'taiyi', title: '太乙课堂：环境问题的本质', content: '徒儿莫慌，这是<b>人地关系不协调</b>的结果。<br>1. <b>索取 > 再生</b> = 资源枯竭（如煤炭挖光了）。<br>2. <b>排放 > 自净</b> = 环境污染（如雾霾）。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：三大类型', content: '环境问题主要分三类：<br>1. <b>资源枯竭</b>：水、土、矿、林少了。<br>2. <b>生态破坏</b>：水土流失、荒漠化、生物多样性减少。<br>3. <b>环境污染</b>：大气、水、土壤、噪声、固体废弃物污染。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：城乡有别', content: '城里和乡下的病症不一样。<br><b>城市</b>：人多车多工厂多，主要是<b>环境污染</b>。<br><b>乡村</b>：利用资源方式不当，主要是<b>生态破坏</b>。', visual: 'icon_map_scatter'},
            {role: 'aobing', title: '全球性问题', content: '有些问题是全世界共同的麻烦。<br><b>全球变暖</b>：海平面上升。<br><b>臭氧层破坏</b>：紫外线伤人。<br><b>酸雨</b>：腐蚀建筑，毁坏森林。<br>不仅要各扫门前雪，还得管管瓦上霜。', visual: 'icon_earth'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '环境问题产生的根本原因是？', opt: ['A.人类主观意愿', 'B.自然环境的变化', 'C.人类活动索取资源和排放废弃物的速度超过了环境的承载能力', 'D.科技发展的必然结果'], ans: 'C', expl: '输入超过再生能力，输出超过自净能力。'},
                {type: 'single', q: '下列属于生态破坏的是？', opt: ['A.光化学烟雾', 'B.水土流失', 'C.噪声污染', 'D.酸雨'], ans: 'B', expl: 'A、C、D属于环境污染。'},
                {type: 'single', q: '全球气候变暖会导致？', opt: ['A.海平面上升', 'B.臭氧层破坏', 'C.酸雨范围扩大', 'D.地震频繁'], ans: 'A', expl: '冰川融化和海水热膨胀导致海平面上升。'},
                {type: 'multi', q: '【多选】环境污染的主要表现形式有？', opt: ['A.大气污染', 'B.水体污染', 'C.土地荒漠化', 'D.固体废弃物污染'], ans: 'ABD', expl: 'C是生态破坏。'}
            ],
            part_b: [
                {title: '🐉 敖丙的分析', q: '为什么说“绿水青山就是金山银山”？', ans: '1. <b>生态价值</b>：良好的生态环境是人类生存的基础。<br>2. <b>经济价值</b>：好环境可以发展生态旅游、生态农业，直接转化为经济效益。<br>3. <b>可持续性</b>：保护环境就是保护生产力。'}
            ]
        }
    },

    // --- B2 5.2 走向人地协调——可持续发展 ---
    b2c5s2: {
        title: '5.2 走向人地协调——可持续发展',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：可持续发展', content: '什么叫<b>可持续发展</b>？<br>定义：<b>“既满足当代人的需求，而又不危及后代人满足其需求的发展。”</b><br>就是说，别把子孙后代的饭碗给砸了！', visual: 'icon_tree'},
            {role: 'lijing', title: '李靖：三大原则', content: '这事儿有规矩：<br>1. <b>公平性原则</b>：人与人、人与生物都要公平。<br>2. <b>持续性原则</b>：要在地球承载力之内发展。<br>3. <b>共同性原则</b>：地球是大家的，各国要联手合作。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：怎么做？（生产篇）', content: '工厂要搞<b>清洁生产</b>。<br>从原料开采到废物处理，全过程都要干净。<br>农业要搞<b>生态农业</b>（如循环经济）。<br>废物利用：秸秆喂牛 -> 牛粪产沼气 -> 沼渣肥田。<br>变废为宝，这就是智慧！', visual: 'icon_rebuild'},
            {role: 'nezha', title: '哪吒：怎么做？（消费篇）', content: '我们每个人都能做！<br><b>绿色消费</b>：<br>少买过度包装的东西（减量）。<br>垃圾分类（回收）。<br>出门坐公交、骑车（低碳）。', visual: 'icon_train'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '可持续发展的核心定义是？', opt: ['A.经济高速增长', 'B.保护环境不动摇', 'C.满足当代需求且不危及后代', 'D.维持现状不发展'], ans: 'C', expl: '布伦特兰委员会的定义。'},
                {type: 'single', q: '“竭泽而渔”违背了可持续发展的什么原则？', opt: ['A.公平性原则', 'B.持续性原则', 'C.共同性原则', 'D.阶段性原则'], ans: 'B', expl: '破坏了资源的再生能力，无法持续。'},
                {type: 'multi', q: '【多选】公众参与可持续发展的行为包括？', opt: ['A.选购绿色产品', 'B.垃圾分类', 'C.使用一次性餐具', 'D.步行或公交出行'], ans: 'ABD', expl: 'C不仅浪费资源还增加垃圾。'}
            ],
            part_b: [
                {title: '🔥 哪吒的行动', q: '我想把陈塘关变成“无废城市”，这可能吗？', ans: '<b>理论上是目标，实践中是过程。</b><br>“无废”不是说没有垃圾，而是通过<b>源头减量</b>、<b>资源化利用</b>和<b>安全填埋</b>，最大限度减少填埋量。这需要全城百姓一起努力，从垃圾分类做起。'}
            ]
        }
    },

    // --- B2 5.3 中国国家发展战略举例 ---
    b2c5s3: {
        title: '5.3 中国国家发展战略举例',
        ppt: [
            {role: 'lijing', title: '李靖：国家战略', content: '为了实现生态文明，国家制定了好多大计划。<br>今天讲两个最重要的：<br>1. <b>主体功能区战略</b>（国土怎么用）。<br>2. <b>海洋强国战略</b>（海怎么管）。', visual: 'icon_badge'},
            {role: 'taiyi', title: '太乙课堂：主体功能区', content: '中国地大，但不能乱用。<br>我们要把国土划分为四类：<br>1. <b>优化开发区域</b>（如长三角）：要转型。<br>2. <b>重点开发区域</b>（如中原）：能撑大梁。<br>3. <b>限制开发区域</b>（如粮仓）：要保护。<br>4. <b>禁止开发区域</b>（如自然保护区）：绝对不能动！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：向海图强', content: '建设<b>海洋强国</b>：<br>1. 发展海洋经济。<br>2. 保护海洋环境。<br>3. 维护海洋权益。<br>我的闹海本事终于有用武之地了！', visual: 'icon_ship'},
            {role: 'aobing', title: '敖丙：南海与钓鱼岛', content: '南海诸岛和钓鱼岛自古就是中国的！<br>有历史记载，有法理依据（《海洋法公约》）。<br>设立<b>三沙市</b>就是行政管辖的铁证。<br>谁敢抢，我龙族第一个不答应！', visual: 'icon_water_drop'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '建设主体功能区的主要目的是？', opt: ['A.开发所有国土资源', 'B.停止一切开发活动', 'C.因地制宜，有序开发', 'D.均衡各地区经济水平'], ans: 'C', expl: '根据资源环境承载能力，确定不同区域的功能定位。'},
                {type: 'single', q: '下列属于“限制开发区域”的是？', opt: ['A.国家级自然保护区', 'B.长三角地区', 'C.东北平原主产粮区', 'D.中原城市群'], ans: 'C', expl: '农产品主产区和重点生态功能区属于限制开发。'},
                {type: 'single', q: '海洋权益的核心是？', opt: ['A.领土主权', 'B.经济开发权', 'C.自由航行权', 'D.科学考察权'], ans: 'A', expl: '主权是基础，其他权益由主权衍生。'},
                {type: 'multi', q: '【多选】建设海洋强国的战略举措包括？', opt: ['A.拓展蓝色经济空间', 'B.改善海洋生态环境', 'C.维护海洋权益', 'D.填海造陆扩大领土'], ans: 'ABC', expl: 'D不是主要战略，且破坏生态。'}
            ],
            part_b: [
                {title: '🔥 哪吒的领地', q: '如果别国的船闯入我国领海，我有权赶他走吗？领海范围是多少？', ans: '<b>当然有权！</b><br>领海是国家领土的一部分，国家拥有完全的主权。我国的领海宽度是<b>12海里</b>（约22公里）。未经允许进入就是侵犯主权。'}
            ]
        }
    }
});

// ==========================================
// 补充：问题研究专题库 (完善 B1 和 B2)
// ==========================================
Object.assign(research_projects, {
    // --- B1 项目 (必修一) ---
    'b1': [
        {id: 'p1', icon: '🪐', title: '火星移民计划：基地选址与微环境构建', points: '结合《地球的宇宙环境》与《圈层结构》，分析火星与地球的自然环境差异。探讨如何在火星表面寻找“宜居带”（如地下熔岩管），并模拟构建适合人类生存的大气、水和土壤循环系统。', value: '随着SpaceX星舰等深空探测技术的发展，地外文明探索成为热点。本课题培养学生在极端环境下运用地理原理解决生存问题的能力。'},
        {id: 'p2', icon: '☀️', title: '太阳风暴警报：对现代智慧城市的脆弱性评估', points: '基于《太阳对地球的影响》，分析超级太阳耀斑对电网、卫星导航（GNSS）、无线电通信的潜在破坏。以所在城市为例，评估高度依赖电力的“智慧城市”系统在遭遇极端空间天气时的脆弱环节。', value: '从关注自然到关注“自然-技术”耦合系统，提升对非传统安全（空间天气灾害）的认知和风险防控意识。'},
        {id: 'p3', icon: '🏙️', title: '城市微气候：热岛与雨岛效应的双重治理', points: '运用《大气受热过程》与《热力环流》原理，实地测量或模拟城市中心与郊区的温差。分析高层建筑对城市风道的阻挡，探讨如何通过“蓝绿空间”（水体与植被）布局来缓解热岛效应和城市内涝。', value: '响应国家“双碳”目标和宜居城市建设，将抽象的大气物理知识转化为城市规划的实用策略。'},
        {id: 'p4', icon: '💧', title: '海绵城市设计：校园雨水收集利用方案', points: '结合《水循环》原理，调查校园地表径流情况。设计一套包含“渗、滞、蓄、净、用、排”的校园微型海绵系统，计算其对削减洪峰和补充地下水的贡献。', value: '从小尺度入手解决大问题，培养工程思维和生态文明理念，是地理实践力的典型体现。'},
        {id: 'p5', icon: '🚂', title: '超级工程与地貌：喀斯特山区的高铁选线', points: '结合《常见地貌类型》，分析云贵高原喀斯特地貌（溶洞、地下河）对交通建设的工程地质风险。探讨“桥隧比”极高的原因，以及高铁开通对贫困山区经济的拉动作用。', value: '理解“人地协调观”，感受大国重器背后的地理智慧，弘扬科学家精神。'}
    ],

    // --- B2 项目 (必修二) ---
    'b2': [
        {id: 'b2_p1', icon: '👷', title: '第一章：如何看待农民工现象', points: '收集数据，计算农民工在建筑、制造、服务业中的占比。没有他们，北京的“鸟巢”、上海的中心大厦能建起来吗？探讨他们对工业化和城镇化的巨大贡献。', value: '价值：培养社会责任感，理解国家人口流动政策的调整与城乡融合发展的必然性，致敬每一位奋斗者。'},
        {id: 'b2_p2', icon: '🏡', title: '第二章：从市中心到郊区，你选择住在哪里', points: '收集城市不同地段的房价/租金数据，绘制“房价-距离”曲线。结合家庭收入，分析付租能力对居住地选择的决定性作用。', value: '将抽象的同心圆模式、地租理论应用于个人生活决策，培养在复杂约束条件下进行理性选择的能力。'},
        {id: 'b2_p3', icon: '🛒', title: '第三章：实体商店何去何从', points: '结合“中关村电子城”的兴衰史，分析互联网技术如何改变人们的消费习惯。调研一家成功的“网红实体店”，分析它们如何利用“体验消费”建立护城河。', value: '紧跟数字经济时代潮流，培养商业地理思维和创新意识，理解虚实融合的商业新形态。'},
        {id: 'b2_p4', icon: '🚦', title: '第四章：城市交通如何疏堵', points: '在早晚高峰时段，对学校周边或主要路口进行车流量观测。分析拥堵的“病因”：是道路狭窄、私家车太多，还是信号灯设置不合理？', value: '培养解决复杂城市问题的系统思维，树立绿色出行意识，理解交通规划与城市发展的协同关系。'},
        {id: 'b2_p5', icon: '🥗', title: '第五章：低碳食品知多少', points: '绘制一张“饼干的生命周期图”。从小麦种植、收割加工到包装运输，计算每个环节的碳排放。对比本地应季苹果与进口反季节车厘子的“食物里程”。', value: '从日常小事入手落实国家“双碳”战略，树立人地协调观，做负责任的消费者。'}
    ]
});
// js/data.js - Part 16 (全量问题研究整合、工具函数与文件收尾)

// ==========================================
// 8. 全量问题研究专题库 (Research Projects Integration)
// 使用 Object.assign 确保覆盖之前可能分散定义的变量，保证数据统一性
// ==========================================
Object.assign(research_projects, {
    // --- 必修一 (B1) ---
    'b1': [
        {
            id: 'p1', icon: '🪐', title: '火星移民计划：基地选址与微环境构建',
            points: '结合《地球的宇宙环境》与《圈层结构》，分析火星与地球的自然环境差异。探讨如何在火星表面寻找“宜居带”（如地下熔岩管），并模拟构建适合人类生存的大气、水和土壤循环系统。',
            value: '随着SpaceX星舰等深空探测技术的发展，地外文明探索成为热点。本课题培养学生在极端环境下运用地理原理解决生存问题的能力。'
        },
        {
            id: 'p2', icon: '☀️', title: '太阳风暴警报：对现代智慧城市的脆弱性评估',
            points: '基于《太阳对地球的影响》，分析超级太阳耀斑对电网、卫星导航（GNSS）、无线电通信的潜在破坏。以所在城市为例，评估高度依赖电力的“智慧城市”系统在遭遇极端空间天气时的脆弱环节。',
            value: '从关注自然到关注“自然-技术”耦合系统，提升对非传统安全（空间天气灾害）的认知和风险防控意识。'
        },
        {
            id: 'p3', icon: '🏙️', title: '城市微气候：热岛与雨岛效应的双重治理',
            points: '运用《大气受热过程》与《热力环流》原理，实地测量或模拟城市中心与郊区的温差。分析高层建筑对城市风道的阻挡，探讨如何通过“蓝绿空间”（水体与植被）布局来缓解热岛效应和城市内涝。',
            value: '响应国家“双碳”目标和宜居城市建设，将抽象的大气物理知识转化为城市规划的实用策略。'
        },
        {
            id: 'p4', icon: '💧', title: '海绵城市设计：校园雨水收集利用方案',
            points: '结合《水循环》原理，调查校园地表径流情况。设计一套包含“渗、滞、蓄、净、用、排”的校园微型海绵系统，计算其对削减洪峰和补充地下水的贡献。',
            value: '从小尺度入手解决大问题，培养工程思维和生态文明理念，是地理实践力的典型体现。'
        },
        {
            id: 'p5', icon: '🧊', title: '淡水危机解方：海水淡化 vs 极地拖冰',
            points: '基于《海水的性质》，对比中东地区“海水淡化”与理论上的“拖运南极冰山”两种方案的成本、能源消耗及环境影响。探讨在环渤海缺水地区实施的可行性。',
            value: '涉及资源安全与跨区域资源调配，培养在复杂情境下进行多要素综合权衡的决策能力。'
        },
        {
            id: 'p6', icon: '🚂', title: '超级工程与地貌：喀斯特山区的高铁选线',
            points: '结合《常见地貌类型》，分析云贵高原喀斯特地貌（溶洞、地下河）对交通建设的工程地质风险。探讨“桥隧比”极高的原因，以及高铁开通对贫困山区经济的拉动作用。',
            value: '理解“人地协调观”，感受大国重器背后的地理智慧，弘扬科学家精神。'
        },
        {
            id: 'p7', icon: '🌾', title: '黑土粮仓保卫战：退化机理与保护性耕作',
            points: '运用《土壤》知识，分析东北黑土有机质流失的原因（风蚀、水蚀、过度耕作）。研究“梨树模式”（秸秆还田、免耕少耕）如何通过干扰生物循环来恢复土壤肥力。',
            value: '关乎国家粮食安全，了解农业可持续发展的最前沿技术，培养家国情怀。'
        },
        {
            id: 'p8', icon: '🌳', title: '行道树的智慧：乡土树种与生物多样性',
            points: '基于《植被》章节，调查城市行道树的种类。辨析“引进网红树种”与“保留乡土树种”的优劣，探讨植物群落垂直结构对城市噪音、尘埃的过滤效果。',
            value: '引导关注身边的地理，反思城市生态建设中的形式主义，倡导尊重自然的生态伦理。'
        },
        {
            id: 'p9', icon: '📡', title: '空天地一体化：AI在自然灾害救援中的应用',
            points: '整合《地理信息技术》与《自然灾害》，设计一套救援方案：利用遥感(RS)识别受灾范围，北斗(GNSS)定位被困人员，GIS规划无人机物资投送路径。',
            value: '紧跟“数字中国”建设步伐，体验地理信息技术在应急管理中的核心作用，感受科技向善的力量。'
        },
        {
            id: 'p10', icon: '♻️', title: '未来家园：设计一个自给自足的生态循环社区',
            points: '综合全书知识（光能利用、水循环回收、土壤改良、防灾避险），设计一个在极端封锁条件下能维持100人自给自足生存3个月的社区模型。',
            value: '全书知识的终极综合应用，考验系统思维和创新能力，是对“人类与地理环境协调发展”的最高致敬。'
        }
    ],

    // --- 必修二 (B2) ---
    'b2': [
        {
            id: 'b2_p1', icon: '👷', title: '第一章：如何看待农民工现象',
            points: '收集数据，计算农民工在建筑、制造、服务业中的占比。没有他们，北京的“鸟巢”、上海的中心大厦能建起来吗？探讨他们对工业化和城镇化的巨大贡献。',
            value: '价值：培养社会责任感，理解国家人口流动政策的调整与城乡融合发展的必然性，致敬每一位奋斗者。'
        },
        {
            id: 'b2_p2', icon: '🏡', title: '第二章：从市中心到郊区，你选择住在哪里',
            points: '收集城市不同地段的房价/租金数据，绘制“房价-距离”曲线。结合家庭收入，分析付租能力对居住地选择的决定性作用。',
            value: '将抽象的同心圆模式、地租理论应用于个人生活决策，培养在复杂约束条件下进行理性选择的能力。'
        },
        {
            id: 'b2_p3', icon: '🛒', title: '第三章：实体商店何去何从',
            points: '结合“中关村电子城”的兴衰史，分析互联网技术如何改变人们的消费习惯。调研一家成功的“网红实体店”，分析它们如何利用“体验消费”建立护城河。',
            value: '紧跟数字经济时代潮流，培养商业地理思维和创新意识，理解虚实融合的商业新形态。'
        },
        {
            id: 'b2_p4', icon: '🚦', title: '第四章：城市交通如何疏堵',
            points: '在早晚高峰时段，对学校周边或主要路口进行车流量观测。分析拥堵的“病因”：是道路狭窄、私家车太多，还是信号灯设置不合理？',
            value: '培养解决复杂城市问题的系统思维，树立绿色出行意识，理解交通规划与城市发展的协同关系。'
        },
        {
            id: 'b2_p5', icon: '🥗', title: '第五章：低碳食品知多少',
            points: '绘制一张“饼干的生命周期图”。从小麦种植、收割加工到包装运输，计算每个环节的碳排放。对比本地应季苹果与进口反季节车厘子的“食物里程”。',
            value: '从日常小事入手落实国家“双碳”战略，树立人地协调观，做负责任的消费者。'
        }
    ],

    // --- 选择性必修1 (XB1) ---
    'xb1': [
        {
            id: 'xb1_c1_p1', icon: '🌕', title: '1.1 人类是否需要人造月亮',
            points: '背景：俄罗斯反射镜试验。支持：节能、救灾。反对：光污染、生物节律。',
            value: '辩证看待技术与生态伦理。'
        },
        {
            id: 'xb1_c2_p1', icon: '🏝️', title: '2.1 崇明岛的未来',
            points: '北积南冲，人类围垦加速岛屿生长。',
            value: '自然与人类对地貌的共同塑造。'
        },
        {
            id: 'xb1_c3_p1', icon: '⛰️', title: '3.1 阿联酋“造山引雨”',
            points: '设想造山阻挡水汽。挑战：工程难度大。',
            value: '改造自然的边界。'
        },
        {
            id: 'xb1_c4_p1', icon: '🧊', title: '4.1 南极冰山解决缺水',
            points: '利用南极淡水。挑战：运输与生态风险。',
            value: '跨区域资源调配的极限设想。'
        },
        {
            id: 'xb1_c5_p1', icon: '🌱', title: '5.1 欧洲草坪是否合适',
            points: '耗水量大，水土不服。',
            value: '因地制宜的生态观。'
        }
    ],

    // --- 选择性必修2 (XB2) ---
    'xb2': [
        {
            id: 'xb2_c1_p1', icon: '🏝️', title: '1.1 毛里求斯的发展模式',
            points: '因地制宜发展加工、旅游、金融。',
            value: '资源贫乏地区的逆袭。'
        },
        {
            id: 'xb2_c2_p1', icon: '🏺', title: '2.1 景德镇瓷都之路',
            points: '资源枯竭后转型文创。',
            value: '传统品牌保护与升级。'
        },
        {
            id: 'xb2_c3_p1', icon: '🚗', title: '3.1 汽车工业带动家乡',
            points: '产业链长，但投资大。',
            value: '主导产业选择。'
        },
        {
            id: 'xb2_c4_p1', icon: '💧', title: '4.1 藏水入疆',
            points: '跨流域调水的大胆设想。',
            value: '综合思维与工程伦理。'
        }
    ],

    // --- 选择性必修3 (XB3) ---
    'xb3': [
        {
            id: 'xb3_c1_p1', icon: '⚡', title: '1.1 稀土资源安全',
            points: '高科技关键原料。',
            value: '战略资源管控。'
        },
        {
            id: 'xb3_c2_p1', icon: '🌾', title: '2.1 藏粮于地',
            points: '保护耕地数量和质量。',
            value: '粮食安全根本。'
        },
        {
            id: 'xb3_c3_p1', icon: '⚛️', title: '3.1 发展核能',
            points: '清洁高效但有风险。',
            value: '权衡环境与资源安全。'
        },
        {
            id: 'xb3_c4_p1', icon: '📋', title: '4.1 环保问卷调查',
            points: '问卷设计步骤与实施。',
            value: '社会实践能力。'
        }
    ]
});

// ==========================================
// 9. 实用工具函数库 (GeoTools)
// 提供给前端页面调用的便捷接口
// ==========================================
const GeoTools = {
    /**
     * 根据书籍ID获取主题色
     * @param {string} bid - 书籍ID (e.g., 'b1', 'xb2')
     * @returns {string} Hex颜色代码
     */
    getThemeColor: function(bid) {
        if (books[bid]) return books[bid].color;
        // 尝试从课程ID推断
        if (bid.startsWith('b1')) return books['b1'].color;
        if (bid.startsWith('b2')) return books['b2'].color;
        if (bid.startsWith('xb1')) return books['xb1'].color;
        if (bid.startsWith('xb2')) return books['xb2'].color;
        if (bid.startsWith('xb3')) return books['xb3'].color;
        return '#3498db'; // 默认蓝色
    },

    /**
     * 获取书籍对应的角色列表
     * @param {string} bid - 书籍ID
     * @returns {Array} 角色对象数组
     */
    getRoles: function(bid) {
        const roles = {
            'b1': [{id:'judy', name:'朱迪'}, {id:'nick', name:'尼克'}, {id:'flash', name:'闪电'}, {id:'bogo', name:'牛局长'}],
            'b2': [{id:'nezha', name:'哪吒'}, {id:'aobing', name:'敖丙'}, {id:'taiyi', name:'太乙'}, {id:'lijing', name:'李靖'}],
            'xb1': [{id:'max', name:'麦克'}, {id:'snowball', name:'小白'}, {id:'gidget', name:'啾啾'}, {id:'chloe', name:'克洛伊'}],
            'xb2': [{id:'peter', name:'彼得兔'}, {id:'benjamin', name:'本杰明'}, {id:'lily', name:'莉莉'}, {id:'tod', name:'托德'}],
            'xb3': [{id:'po', name:'阿宝'}, {id:'tigress', name:'悍娇虎'}, {id:'shifu', name:'师父'}, {id:'ping', name:'平先生'}]
        };
        if (bid.startsWith('b1')) return roles['b1'];
        if (bid.startsWith('b2')) return roles['b2'];
        if (bid.startsWith('xb1')) return roles['xb1'];
        if (bid.startsWith('xb2')) return roles['xb2'];
        if (bid.startsWith('xb3')) return roles['xb3'];
        return [];
    },

    /**
     * 搜索课程
     * @param {string} keyword - 关键词
     * @returns {Array} 匹配的课程列表
     */
    searchCourses: function(keyword) {
        if (!keyword) return [];
        const results = [];
        keyword = keyword.toLowerCase();
        for (const [id, course] of Object.entries(courses)) {
            if (course.title.toLowerCase().includes(keyword)) {
                // 推断所属书籍
                let bookId = 'b1';
                if (id.includes('b2')) bookId = 'b2';
                else if (id.includes('xb1')) bookId = 'xb1';
                else if (id.includes('xb2')) bookId = 'xb2';
                else if (id.includes('xb3')) bookId = 'xb3';
                
                results.push({
                    id: id,
                    title: course.title,
                    bookId: bookId,
                    bookTitle: books[bookId].title
                });
            }
        }
        return results;
    },

    /**
     * 检查数据完整性
     * 在控制台输出各本书的章节数量，用于开发调试
     */
    checkDataIntegrity: function() {
        console.group('🌍 GeoFun Data Integrity Check');
        const counts = { b1:0, b2:0, xb1:0, xb2:0, xb3:0 };
        
        for (const id of Object.keys(courses)) {
            if (id.startsWith('xb1')) counts.xb1++;
            else if (id.startsWith('xb2')) counts.xb2++;
            else if (id.startsWith('xb3')) counts.xb3++;
            else if (id.startsWith('b2')) counts.b2++;
            else counts.b1++;
        }
        
        console.table(counts);
        
        if (Object.values(counts).some(c => c === 0)) {
            console.warn('⚠️ Warning: Some books have 0 courses. Please check data loading.');
        } else {
            console.log('✅ All books have course data.');
        }
        console.groupEnd();
    }
};
// js/data.js - Part 13 (补充 B2 Ch2, Ch5 及 B1/B2 问题研究)

// ==========================================
// 补充课程内容：必修二 (B2)
// ==========================================
Object.assign(courses, {
    // --- B2 2.1 乡村和城镇空间结构 ---
    b2c2s1: {
        title: '2.1 乡村和城镇空间结构',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：土地的用法', content: '徒儿们！乡村和城镇都是人们聚居的地方。<br>但地有限，怎么用？这就叫<b>土地利用</b>。<br>主要类型：耕地、林地、草地（乡村为主）；商业、工业、居住、建设用地（城镇为主）。<br>合理的布局能让乾坤有序！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：城镇功能区', content: '城里最热闹的地方就是<b>商业区</b>（市中心、街角），像我的风火轮一样红火，但面积小。<br><b>工业区</b>（郊外、交通边）又吵又脏，我不去，但它是城市生产的主力。<br><b>居住区</b>（最大）是我们睡觉的地方，分高级和普通，高级的在风景好的上风上水处。', visual: 'icon_fire'},
            {role: 'aobing', title: '敖丙分析：空间结构模式', content: '城市长得都不一样，但有规律：<br>1. <b>同心圆模式</b>：像洋葱，一层层往外扩（平原多见）。<br>2. <b>扇形模式</b>：沿着交通线向外延伸。<br>3. <b>多核心模式</b>：有几个中心，像龙的九子各占一方。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：影响因素之经济', content: '谁决定地给谁用？看谁出钱多（<b>付租能力</b>）！<br><b>商业</b>：这帮人最有钱，必须占市中心（人流大）。<br><b>住宅</b>：出钱中等，占中间。<br><b>工业</b>：出钱少，还要地大，只能去郊区。<br>这就形成了<b>地租曲线</b>。', visual: 'icon_money'},
            {role: 'shengongbao', title: '申公豹：仅仅是钱吗？', content: '哼，除了钱，还有人情世故！<br>1. <b>历史</b>：北京故宫在市中心，谁敢拆？那是文物！<br>2. <b>社会</b>：种族、收入导致贫民窟和富人区隔离。<br>3. <b>行政</b>：政府说要建开发区，地就得划过去。<br>这也是命数！', visual: 'icon_shield'},
            {role: 'aobing', title: '案例：大圩古镇', content: '看广西大圩古镇。<br>它沿着漓江展开，呈长条形。<br>这是受<b>河流（交通/水源）</b>和<b>地形</b>的制约。<br>商业街贴着码头，方便做生意。', visual: 'icon_water_drop'},
            {role: 'taiyi', title: '全节总结', content: '商业居中工业边，<br>住宅占地最为先。<br>经济地租是关键，<br>历史社会也相连。<br>结构随世在演变，<br>合理规划天地宽！', visual: 'icon_star'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '城市中最广泛的土地利用方式是？', opt: ['A.商业用地', 'B.工业用地', 'C.居住用地', 'D.行政用地'], ans: 'C', expl: '居住区是城市的主体，占地面积最大。'},
                {type: 'single', q: '直接影响城市地租高低的主要因素有？', opt: ['A.距离市中心的远近和交通通达度', 'B.地形和气候', 'C.人口密度和文化', 'D.工业产值'], ans: 'A', expl: '离市中心越近、交通越好，地租越高。'},
                {type: 'single', q: '高级居住区通常分布在？', opt: ['A.市中心交通便利处', 'B.城市外缘，环境优美处', 'C.工业区附近', 'D.低洼处'], ans: 'B', expl: '富人追求环境质量，常位于上风上水的高处或风景区。'},
                {type: 'multi', q: '【多选】商业区的布局特点是？', opt: ['A.位于市中心', 'B.位于交通干线两侧', 'C.位于街角路口', 'D.位于河流下游'], ans: 'ABC', expl: '商业追求人流量（市场最优）和交通便利（交通最优）。'}
            ],
            part_b: [
                {title: '🔥 哪吒的挑战', q: '为什么市中心虽然地租最高，但还是有很多小商店活下来了？', ans: '1. <b>付租能力高</b>：出售高附加值商品（奢侈品）。<br>2. <b>薄利多销</b>：人流量巨大。<br>3. <b>立体利用</b>：在这个“寸土寸金”的地方，楼盖得特别高，分摊了成本。'}
            ]
        }
    },

    // --- B2 2.2 城镇化 ---
    b2c2s2: {
        title: '2.2 城镇化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：什么是城镇化？', content: '乡下人进城，农村变城市，这就是<b>城镇化</b>。<br>三大标志要记牢：<br>1. 城镇人口增加。<br>2. <b>城镇人口占总人口比例上升</b>（最核心指标！）。<br>3. 城镇建设用地规模扩大。<br>这是社会进步的必经之路！', visual: 'icon_chart'},
            {role: 'nezha', title: '哪吒：S形曲线', content: '城镇化就像我踩风火轮，速度有快有慢：<br>1. <b>初期阶段</b>（<30%）：慢，水平低。<br>2. <b>中期阶段</b>（30%-70%）：<b>快！</b>（加速冲刺，问题也多）。<br>3. <b>后期阶段</b>（>70%）：慢，水平高（甚至出现逆城市化）。<br>中国现在就在<b>中期加速阶段</b>！', visual: 'css_curve'},
            {role: 'aobing', title: '敖丙分析：发达 vs 发展中', content: '<b>发达国家</b>：起步早，水平高，现在慢，出现“逆城市化”（富人搬去郊区）。<br><b>发展中国家</b>：起步晚，水平低，现在快，但容易出现“虚假城镇化”（人进城了，城没建好）或“滞后城镇化”。', visual: 'icon_compare'},
            {role: 'shengongbao', title: '申公豹：城市病', content: '看看现在的城市，那是“水泥森林”！<br>🌧️ <b>雨岛效应</b>：由于热气流上升，城市雨水多。<br>🔥 <b>热岛效应</b>：城市比郊区热。<br>🌫️ <b>雾霾</b>：汽车尾气排不出去。<br>这难道就是你们向往的生活？', visual: 'icon_storm'},
            {role: 'nezha', title: '哪吒：智慧城市', content: '别怕，我们有法宝！<br>📱 <b>GIS</b>：帮我们规划公交线路，选址医院。<br>🛰️ <b>RS</b>：监测城市扩张，看绿地少了没。<br>📡 <b>GNSS</b>：导航防堵车。<br>智慧城市，我命由我不由天！', visual: 'icon_phone'},
            {role: 'taiyi', title: '生态城市', content: '未来的路是<b>生态城市</b>。<br>发展低污染、节能建筑、绿色交通。<br>把城市轻轻放进大自然里，而不是把大自然铲平。<br>这就是“天人合一”。', visual: 'icon_tree_planting'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '衡量城镇化水平最重要的指标是？', opt: ['A.城镇人口数量', 'B.城镇建设用地规模', 'C.城镇人口占区域总人口的比例', 'D.城镇数量'], ans: 'C', expl: '比例最能反映结构变化。'},
                {type: 'single', q: '目前我国处于城镇化的哪个阶段？', opt: ['A.初期阶段', 'B.中期加速阶段', 'C.后期成熟阶段', 'D.逆城市化阶段'], ans: 'B', expl: '我国城镇化率约65%，处于30%-70%的加速区间。'},
                {type: 'single', q: '逆城市化现象表现为？', opt: ['A.城市中心人口向郊区和小城镇迁移', 'B.郊区人口向市中心迁移', 'C.农村人口向城市迁移', 'D.城市人口大量减少'], ans: 'A', expl: '追求环境质量，富人逃离市中心。'},
                {type: 'multi', q: '【多选】解决“城市病”的合理措施？', opt: ['A.建设卫星城，分散大城市职能', 'B.发展公共交通', 'C.扩大城市绿地', 'D.禁止人口迁入'], ans: 'ABC', expl: 'D不现实且违规。'}
            ],
            part_b: [
                {title: '🐉 敖丙的诊断', q: '某城市下大雨就“看海”，天晴就“干渴”，这是什么病？怎么治？', ans: '这是<b>“城市硬化病”</b>。<br>原因：水泥路面阻挡了下渗。<br>药方：建设<b>“海绵城市”</b>。铺设透水砖，建下凹式绿地、雨水花园，让城市像海绵一样吸水、蓄水、渗水、净水。'}
            ]
        }
    },

    // --- B2 2.3 地域文化与城乡景观 ---
    b2c2s3: {
        title: '2.3 地域文化与城乡景观',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：文化是什么？', content: '文化就像空气，看不见但无处不在。<br><b>地域文化</b>是在特定地域内形成的，有鲜明个性的文化。<br>它分两种：<br>1. <b>物质方面</b>：建筑、服饰、饮食（看得见）。<br>2. <b>非物质方面</b>：方言、习俗、价值观（看不见）。', visual: 'icon_life'},
            {role: 'lijing', title: '李靖：景观是文化的容器', content: '城乡景观是地域文化最直接的体现。<br>看一个地方的房子，就知道那里的人怎么生活，信奉什么。<br>比如<b>北京四合院</b>：<br>四四方方，长幼有序，体现了儒家的<b>“长幼尊卑”</b>和<b>“天圆地方”</b>思想。', visual: 'icon_park'},
            {role: 'nezha', title: '哪吒：福建土楼', content: '看我家乡（神话里的陈塘关可能有）类似的<b>福建土楼</b>！<br>圆圆的像个碉堡。<br>为什么？<br>1. <b>防御</b>：防强盗（墙厚）。<br>2. <b>聚族而居</b>：全村人住一栋楼，团结！<br>这就是客家人的文化。', visual: 'icon_rebuild'},
            {role: 'aobing', title: '敖丙：江南水乡', content: '我去过江南。<br>“小桥流水人家”。<br>房子临河而建，屋顶坡度大（为了排水），墙是白的（为了反光降温、素雅）。<br>这体现了<b>“人与自然和谐”</b>的文化。', visual: 'icon_water_drop'},
            {role: 'shengongbao', title: '申公豹：外国的月亮？', content: '看看国外。<br><b>美国城市</b>：棋盘格状，摩天大楼林立，体现了<b>“自由、开放、资本主义”</b>。<br><b>欧洲城市</b>：有中心广场和教堂，道路呈放射状，体现了<b>“皇权、宗教、历史”</b>。<br>风格大不同啊！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '全节总结', content: '看房知文化，看路知性格。<br>保护老祖宗留下的宝贝，建设有灵魂的城市。<br>最后一关考核，通关者赏风火轮体验券一张！', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地域文化最直观的体现是？', opt: ['A.方言', 'B.饮食', 'C.城乡景观', 'D.节日习俗'], ans: 'C', expl: '景观（建筑、聚落）是固化的文化，最直观。'},
                {type: 'single', q: '北京四合院体现了中国传统文化中的？', opt: ['A.御外凝内，长幼有序', 'B.崇尚自由，开拓创新', 'C.人与自然高度和谐', 'D.开放包容，中西合璧'], ans: 'A', expl: '儒家礼教思想。'},
                {type: 'single', q: '江南水乡屋顶坡度大，主要为了？', opt: ['A.美观', 'B.防雪压', 'C.排水', 'D.通风'], ans: 'C', expl: '南方雨水多。'},
                {type: 'multi', q: '【多选】地域文化对城市的影响体现在？', opt: ['A.建筑风格', 'B.城市格局', 'C.土地利用方式', 'D.居民消费习惯'], ans: 'ABCD', expl: '全方位影响。'}
            ],
            part_b: [
                {title: '🔥 哪吒的发现', q: '为什么我国北方的墙比南方厚，窗户比南方小？', ans: '为了<b>适应气候</b>。<br>北方寒冷，厚墙小窗为了<b>保温防寒</b>。<br>南方湿热，薄墙大窗为了<b>通风散热</b>。'},
                {title: '🐉 敖丙的对比', q: '同样是皇宫，为什么凡尔赛宫前面是大花园，故宫前面是大广场？', ans: '文化差异。<br>凡尔赛宫体现<b>“人定胜天”</b>和浪漫主义，修剪整齐的园林展示对自然的控制。<br>故宫体现<b>“皇权至上”</b>，广场用于举行盛大庆典，展示天子的威严。'}
            ]
        }
    },

    // --- B2 5.1 人类面临的主要环境问题 ---
    b2c5s1: {
        title: '5.1 人类面临的主要环境问题',
        ppt: [
            {role: 'nezha', title: '哪吒：地球病了！', content: '最近我踩着风火轮巡视，发现地球状态不对劲！<br>森林秃了（资源枯竭），河水黑了（环境污染），沙漠变大了（生态破坏）。<br>人类在创造财富的同时，也把自己逼到了悬崖边上。<br>这是怎么回事？', visual: 'icon_alert_red'},
            {role: 'taiyi', title: '太乙课堂：环境问题的本质', content: '徒儿莫慌，这是<b>人地关系不协调</b>的结果。<br>1. <b>索取 > 再生</b> = 资源枯竭（如煤炭挖光了）。<br>2. <b>排放 > 自净</b> = 环境污染（如雾霾）。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：三大类型', content: '环境问题主要分三类：<br>1. <b>资源枯竭</b>：水、土、矿、林少了。<br>2. <b>生态破坏</b>：水土流失、荒漠化、生物多样性减少。<br>3. <b>环境污染</b>：大气、水、土壤、噪声、固体废弃物污染。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：城乡有别', content: '城里和乡下的病症不一样。<br><b>城市</b>：人多车多工厂多，主要是<b>环境污染</b>。<br><b>乡村</b>：利用资源方式不当，主要是<b>生态破坏</b>。', visual: 'icon_map_scatter'},
            {role: 'aobing', title: '全球性问题', content: '有些问题是全世界共同的麻烦。<br><b>全球变暖</b>：海平面上升。<br><b>臭氧层破坏</b>：紫外线伤人。<br><b>酸雨</b>：腐蚀建筑，毁坏森林。<br>不仅要各扫门前雪，还得管管瓦上霜。', visual: 'icon_earth'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '环境问题产生的根本原因是？', opt: ['A.人类主观意愿', 'B.自然环境的变化', 'C.人类活动索取资源和排放废弃物的速度超过了环境的承载能力', 'D.科技发展的必然结果'], ans: 'C', expl: '输入超过再生能力，输出超过自净能力。'},
                {type: 'single', q: '下列属于生态破坏的是？', opt: ['A.光化学烟雾', 'B.水土流失', 'C.噪声污染', 'D.酸雨'], ans: 'B', expl: 'A、C、D属于环境污染。'},
                {type: 'single', q: '全球气候变暖会导致？', opt: ['A.海平面上升', 'B.臭氧层破坏', 'C.酸雨范围扩大', 'D.地震频繁'], ans: 'A', expl: '冰川融化和海水热膨胀导致海平面上升。'},
                {type: 'multi', q: '【多选】环境污染的主要表现形式有？', opt: ['A.大气污染', 'B.水体污染', 'C.土地荒漠化', 'D.固体废弃物污染'], ans: 'ABD', expl: 'C是生态破坏。'}
            ],
            part_b: [
                {title: '🐉 敖丙的分析', q: '为什么说“绿水青山就是金山银山”？', ans: '1. <b>生态价值</b>：良好的生态环境是人类生存的基础。<br>2. <b>经济价值</b>：好环境可以发展生态旅游、生态农业，直接转化为经济效益。<br>3. <b>可持续性</b>：保护环境就是保护生产力。'}
            ]
        }
    },

    // --- B2 5.2 走向人地协调——可持续发展 ---
    b2c5s2: {
        title: '5.2 走向人地协调——可持续发展',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：可持续发展', content: '什么叫<b>可持续发展</b>？<br>定义：<b>“既满足当代人的需求，而又不危及后代人满足其需求的发展。”</b><br>就是说，别把子孙后代的饭碗给砸了！', visual: 'icon_tree'},
            {role: 'lijing', title: '李靖：三大原则', content: '这事儿有规矩：<br>1. <b>公平性原则</b>：人与人、人与生物都要公平。<br>2. <b>持续性原则</b>：要在地球承载力之内发展。<br>3. <b>共同性原则</b>：地球是大家的，各国要联手合作。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：怎么做？（生产篇）', content: '工厂要搞<b>清洁生产</b>。<br>从原料开采到废物处理，全过程都要干净。<br>农业要搞<b>生态农业</b>（如循环经济）。<br>废物利用：秸秆喂牛 -> 牛粪产沼气 -> 沼渣肥田。<br>变废为宝，这就是智慧！', visual: 'icon_rebuild'},
            {role: 'nezha', title: '哪吒：怎么做？（消费篇）', content: '我们每个人都能做！<br><b>绿色消费</b>：<br>少买过度包装的东西（减量）。<br>垃圾分类（回收）。<br>出门坐公交、骑车（低碳）。', visual: 'icon_train'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '可持续发展的核心定义是？', opt: ['A.经济高速增长', 'B.保护环境不动摇', 'C.满足当代需求且不危及后代', 'D.维持现状不发展'], ans: 'C', expl: '布伦特兰委员会的定义。'},
                {type: 'single', q: '“竭泽而渔”违背了可持续发展的什么原则？', opt: ['A.公平性原则', 'B.持续性原则', 'C.共同性原则', 'D.阶段性原则'], ans: 'B', expl: '破坏了资源的再生能力，无法持续。'},
                {type: 'multi', q: '【多选】公众参与可持续发展的行为包括？', opt: ['A.选购绿色产品', 'B.垃圾分类', 'C.使用一次性餐具', 'D.步行或公交出行'], ans: 'ABD', expl: 'C不仅浪费资源还增加垃圾。'}
            ],
            part_b: [
                {title: '🔥 哪吒的行动', q: '我想把陈塘关变成“无废城市”，这可能吗？', ans: '<b>理论上是目标，实践中是过程。</b><br>“无废”不是说没有垃圾，而是通过<b>源头减量</b>、<b>资源化利用</b>和<b>安全填埋</b>，最大限度减少填埋量。这需要全城百姓一起努力，从垃圾分类做起。'}
            ]
        }
    },

    // --- B2 5.3 中国国家发展战略举例 ---
    b2c5s3: {
        title: '5.3 中国国家发展战略举例',
        ppt: [
            {role: 'lijing', title: '李靖：国家战略', content: '为了实现生态文明，国家制定了好多大计划。<br>今天讲两个最重要的：<br>1. <b>主体功能区战略</b>（国土怎么用）。<br>2. <b>海洋强国战略</b>（海怎么管）。', visual: 'icon_badge'},
            {role: 'taiyi', title: '太乙课堂：主体功能区', content: '中国地大，但不能乱用。<br>我们要把国土划分为四类：<br>1. <b>优化开发区域</b>（如长三角）：要转型。<br>2. <b>重点开发区域</b>（如中原）：能撑大梁。<br>3. <b>限制开发区域</b>（如粮仓）：要保护。<br>4. <b>禁止开发区域</b>（如自然保护区）：绝对不能动！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：向海图强', content: '建设<b>海洋强国</b>：<br>1. 发展海洋经济。<br>2. 保护海洋环境。<br>3. 维护海洋权益。<br>我的闹海本事终于有用武之地了！', visual: 'icon_ship'},
            {role: 'aobing', title: '敖丙：南海与钓鱼岛', content: '南海诸岛和钓鱼岛自古就是中国的！<br>有历史记载，有法理依据（《海洋法公约》）。<br>设立<b>三沙市</b>就是行政管辖的铁证。<br>谁敢抢，我龙族第一个不答应！', visual: 'icon_water_drop'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '建设主体功能区的主要目的是？', opt: ['A.开发所有国土资源', 'B.停止一切开发活动', 'C.因地制宜，有序开发', 'D.均衡各地区经济水平'], ans: 'C', expl: '根据资源环境承载能力，确定不同区域的功能定位。'},
                {type: 'single', q: '下列属于“限制开发区域”的是？', opt: ['A.国家级自然保护区', 'B.长三角地区', 'C.东北平原主产粮区', 'D.中原城市群'], ans: 'C', expl: '农产品主产区和重点生态功能区属于限制开发。'},
                {type: 'single', q: '海洋权益的核心是？', opt: ['A.领土主权', 'B.经济开发权', 'C.自由航行权', 'D.科学考察权'], ans: 'A', expl: '主权是基础，其他权益由主权衍生。'},
                {type: 'multi', q: '【多选】建设海洋强国的战略举措包括？', opt: ['A.拓展蓝色经济空间', 'B.改善海洋生态环境', 'C.维护海洋权益', 'D.填海造陆扩大领土'], ans: 'ABC', expl: 'D不是主要战略，且破坏生态。'}
            ],
            part_b: [
                {title: '🔥 哪吒的领地', q: '如果别国的船闯入我国领海，我有权赶他走吗？领海范围是多少？', ans: '<b>当然有权！</b><br>领海是国家领土的一部分，国家拥有完全的主权。我国的领海宽度是<b>12海里</b>（约22公里）。未经允许进入就是侵犯主权。'}
            ]
        }
    }
});

// ==========================================
// 补充：问题研究专题库 (完善 B1 和 B2)
// ==========================================
Object.assign(research_projects, {
    // --- B1 项目 (必修一) ---
    'b1': [
        {id: 'p1', icon: '🪐', title: '火星移民计划：基地选址与微环境构建', points: '结合《地球的宇宙环境》与《圈层结构》，分析火星与地球的自然环境差异。探讨如何在火星表面寻找“宜居带”（如地下熔岩管），并模拟构建适合人类生存的大气、水和土壤循环系统。', value: '随着SpaceX星舰等深空探测技术的发展，地外文明探索成为热点。本课题培养学生在极端环境下运用地理原理解决生存问题的能力。'},
        {id: 'p2', icon: '☀️', title: '太阳风暴警报：对现代智慧城市的脆弱性评估', points: '基于《太阳对地球的影响》，分析超级太阳耀斑对电网、卫星导航（GNSS）、无线电通信的潜在破坏。以所在城市为例，评估高度依赖电力的“智慧城市”系统在遭遇极端空间天气时的脆弱环节。', value: '从关注自然到关注“自然-技术”耦合系统，提升对非传统安全（空间天气灾害）的认知和风险防控意识。'},
        {id: 'p3', icon: '🏙️', title: '城市微气候：热岛与雨岛效应的双重治理', points: '运用《大气受热过程》与《热力环流》原理，实地测量或模拟城市中心与郊区的温差。分析高层建筑对城市风道的阻挡，探讨如何通过“蓝绿空间”（水体与植被）布局来缓解热岛效应和城市内涝。', value: '响应国家“双碳”目标和宜居城市建设，将抽象的大气物理知识转化为城市规划的实用策略。'},
        {id: 'p4', icon: '💧', title: '海绵城市设计：校园雨水收集利用方案', points: '结合《水循环》原理，调查校园地表径流情况。设计一套包含“渗、滞、蓄、净、用、排”的校园微型海绵系统，计算其对削减洪峰和补充地下水的贡献。', value: '从小尺度入手解决大问题，培养工程思维和生态文明理念，是地理实践力的典型体现。'},
        {id: 'p5', icon: '🚂', title: '超级工程与地貌：喀斯特山区的高铁选线', points: '结合《常见地貌类型》，分析云贵高原喀斯特地貌（溶洞、地下河）对交通建设的工程地质风险。探讨“桥隧比”极高的原因，以及高铁开通对贫困山区经济的拉动作用。', value: '理解“人地协调观”，感受大国重器背后的地理智慧，弘扬科学家精神。'}
    ],

    // --- B2 项目 (必修二) ---
    'b2': [
        {id: 'b2_p1', icon: '👷', title: '第一章：如何看待农民工现象', points: '收集数据，计算农民工在建筑、制造、服务业中的占比。没有他们，北京的“鸟巢”、上海的中心大厦能建起来吗？探讨他们对工业化和城镇化的巨大贡献。', value: '价值：培养社会责任感，理解国家人口流动政策的调整与城乡融合发展的必然性，致敬每一位奋斗者。'},
        {id: 'b2_p2', icon: '🏡', title: '第二章：从市中心到郊区，你选择住在哪里', points: '收集城市不同地段的房价/租金数据，绘制“房价-距离”曲线。结合家庭收入，分析付租能力对居住地选择的决定性作用。', value: '将抽象的同心圆模式、地租理论应用于个人生活决策，培养在复杂约束条件下进行理性选择的能力。'},
        {id: 'b2_p3', icon: '🛒', title: '第三章：实体商店何去何从', points: '结合“中关村电子城”的兴衰史，分析互联网技术如何改变人们的消费习惯。调研一家成功的“网红实体店”，分析它们如何利用“体验消费”建立护城河。', value: '紧跟数字经济时代潮流，培养商业地理思维和创新意识，理解虚实融合的商业新形态。'},
        {id: 'b2_p4', icon: '🚦', title: '第四章：城市交通如何疏堵', points: '在早晚高峰时段，对学校周边或主要路口进行车流量观测。分析拥堵的“病因”：是道路狭窄、私家车太多，还是信号灯设置不合理？', value: '培养解决复杂城市问题的系统思维，树立绿色出行意识，理解交通规划与城市发展的协同关系。'},
        {id: 'b2_p5', icon: '🥗', title: '第五章：低碳食品知多少', points: '绘制一张“饼干的生命周期图”。从小麦种植、收割加工到包装运输，计算每个环节的碳排放。对比本地应季苹果与进口反季节车厘子的“食物里程”。', value: '从日常小事入手落实国家“双碳”战略，树立人地协调观，做负责任的消费者。'}
    ]
});
// js/data.js - Part 14 (补充 B1 Ch2, Ch3, Ch4)

Object.assign(courses, {
    // === B1 第二章 地球上的大气 ===
    
    // 2.1 大气的组成与垂直分层
    c2s1: {
        title: '2.1 大气的组成与垂直分层',
        ppt: [
            {role: 'judy', title: '任务简报：天空巡逻', content: '欢迎回到警校！我是<b>朱迪</b>。<br>这次我们要向上飞，去巡逻保护地球的“防弹衣”——大气层。<br>这层衣服决定了地球的冷暖和生物的生存！', visual: 'icon_cloud'},
            {role: 'bogo', title: '一、大气的组成', content: '低层大气主要由三部分组成：<br>1. <b>干洁空气</b>（混合气体，主要成分）<br>2. <b>水汽</b>（成云致雨的关键，含量变化大）<br>3. <b>杂质</b>（凝结核，但也带来雾霾）', visual: 'css_composition'},
            {role: 'nick', title: '干洁空气成分表', content: '听好了，这里面学问大着呢：<br>🦊 <b>氮气 (78%)</b>：生物体的基本成分（蛋白质）。<br>🦊 <b>氧气 (21%)</b>：维持生命活动。<br>🦊 <b>二氧化碳</b>：光合作用原料，还能<b>吸收地面辐射</b>保温。<br>🦊 <b>臭氧</b>：在平流层，吸收紫外线，被称为“地球生命的保护伞”。', visual: 'icon_chart'},
            {role: 'flash', title: '二...垂...直...分...层...', content: '我们要...一层...一层...往上飞...<br>1. <b>对流层</b> (贴近地面)<br>2. <b>平流层</b> (中间)<br>3. <b>高层大气</b> (最上面)', visual: 'css_atmos_layers'},
            {role: 'judy', title: '第一站：对流层 (0-12km)', content: '我们现在就在这！特点如下：<br>1. <b>气温随高度下降</b>：地面是主要热源，每升100米降0.6℃。<br>2. <b>对流运动显著</b>：热气上升，冷气下降。<br>3. <b>天气现象复杂</b>：云雨雾雪都在这，因为它集中了几乎全部的水汽和杂质。', visual: 'icon_rain'},
            {role: 'nick', title: '第二站：平流层 (12-50km)', content: '这里适合开飞机，因为：<br>1. <b>气温随高度升高</b>：有臭氧层吸收紫外线增温。<br>2. <b>平流运动为主</b>：上热下冷，大气稳定，不颠簸。<br>3. <b>天气晴朗</b>：水汽杂质少，能见度极好。', visual: 'icon_plane'},
            {role: 'bogo', title: '第三站：高层大气 (>50km)', content: '这里空气极其稀薄。重点关注<b>电离层</b>（80-500km）。<br>作用：它能反射无线电波，这对我们的警用通讯至关重要！<br>注意：极光也发生在这里。', visual: 'css_radio_wave'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '低层大气中占比最大的气体是？', opt: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 臭氧'], ans: 'B', expl: '氮气占78%，是生物体蛋白质的重要组成部分。'},
                {type: 'single', q: '被称为“地球生命的保护伞”的是？', opt: ['A. 二氧化碳', 'B. 水汽', 'C. 臭氧', 'D. 氧气'], ans: 'C', expl: '臭氧大量吸收紫外线，保护生物免受伤害。'},
                {type: 'single', q: '对流层气温垂直变化规律是？', opt: ['A. 随高度增加而升高', 'B. 随高度增加而降低', 'C. 高度变化不明显', 'D. 先升高后降低'], ans: 'B', expl: '对流层热量主要来自地面，离地面越远越冷。'},
                {type: 'single', q: '适合民航飞机飞行的是？', opt: ['A. 对流层', 'B. 平流层', 'C. 高层大气', 'D. 电离层'], ans: 'B', expl: '平流层大气平稳（平流运动），且能见度高。'},
                {type: 'single', q: '电离层位于？', opt: ['A. 对流层', 'B. 平流层', 'C. 高层大气', 'D. 地壳'], ans: 'C', expl: '电离层位于高层大气，能反射无线电波。'},
                {type: 'multi', q: '【多选】关于对流层，正确的是？', opt: ['A. 厚度赤道厚两极薄', 'B. 天气现象复杂', 'C. 包含全部臭氧', 'D. 空气对流运动显著'], ans: 'ABD', expl: '臭氧主要在平流层。对流层厚度随纬度变化，赤道约17-18km，两极8-9km。'},
                {type: 'multi', q: '【多选】二氧化碳的作用？', opt: ['A. 光合作用原料', 'B. 吸收紫外线', 'C. 吸收地面红外线保温', 'D. 成云致雨'], ans: 'AC', expl: 'B是臭氧的作用，D是水汽和杂质的作用。'}
            ],
            part_b: [
                {title: '情境一：登山穿衣', q: '为什么爬高山时，即使是大晴天，也要带棉大衣？', ans: '因为山在<b>对流层</b>。对流层的热量主要来自地面辐射，<b>海拔越高，气温越低</b>（每升高100米约降0.6℃）。'},
                {title: '情境二：无线电中断', q: '当太阳活动（如耀斑）爆发时，为什么警局的无线电会失灵？', ans: '因为无线电通讯依赖<b>高层大气中的电离层</b>反射。太阳活动爆发会发射高能带电粒子流，扰动电离层，导致通讯中断。'}
            ]
        }
    },

    // 2.2 大气受热过程与热力环流
    c2s2: {
        title: '2.2 大气受热过程与热力环流',
        ppt: [
            {role: 'bogo', title: '紧急案件：热量去哪了？', content: '警员们！太阳把热量传给地球，为什么地球没有热爆炸？为什么晚上没有太阳却不结冰？<br>我们要调查代号为<b>“温室效应”</b>的嫌疑案！', visual: 'icon_detective'},
            {role: 'judy', title: '一、大气的受热过程', content: '这是一个接力赛：<br>1. <b>太阳暖大地</b>：太阳辐射（短波）穿过大气，大气削弱得少，大部分被地面吸收。<br>2. <b>大地暖大气</b>：地面增温后，释放地面辐射（长波），绝大部分被大气（CO2、水汽）吸收。<br>结论：<b>地面</b>是近地面大气主要的直接热源！', visual: 'css_heating'},
            {role: 'nick', title: '二、大气暖大地 (保温作用)', content: '大气拿了地面的热量，也不白拿。<br>它会通过<b>大气逆辐射</b>把热量还给地面。<br>这就像给地球盖了一层被子，这就叫<b>保温作用</b>（温室效应）。<br>多云的夜晚比晴朗的夜晚温暖，就是因为被子厚！', visual: 'css_blanket'},
            {role: 'flash', title: '热...力...环...流...', content: '这是大气运动的...最简单形式...<br>1. 地面热 -> 空气膨胀上升 -> 近地面低压。<br>2. 地面冷 -> 空气收缩下沉 -> 近地面高压。<br>3. 水平方向：空气从高压...流向...低压。', visual: 'css_thermal'},
            {role: 'judy', title: '三、大气的水平运动——风', content: '风是怎么跑起来的？受三个力控制：<br>1. <b>水平气压梯度力</b>：起动器（垂直等压线，高压指低压）。<br>2. <b>地转偏向力</b>：方向盘（北半球右偏，不改速度）。<br>3. <b>摩擦力</b>：刹车（减速，使风向斜穿等压线）。', visual: 'css_wind'},
            {role: 'bogo', title: '全课总结', content: '结案！<br>1. 太阳短波进得来，地面长波出不去（保温）。<br>2. 冷热不均引起热力环流（热升冷降）。<br>3. 三个力决定风向（高空平行，近地面斜穿）。<br>立刻归队，进行热力考核！', visual: 'icon_badge'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '近地面大气的直接热源是？', opt: ['A. 太阳辐射', 'B. 地面辐射', 'C. 大气辐射', 'D. 大气逆辐射'], ans: 'B', expl: '大气对太阳短波吸收很少，主要吸收地面长波辐射。'},
                {type: 'single', q: '对地面起保温作用的是？', opt: ['A. 太阳辐射', 'B. 地面辐射', 'C. 大气逆辐射', 'D. 反射作用'], ans: 'C', expl: '大气逆辐射将热量返还给地面，起到保温作用。'},
                {type: 'single', q: '形成风的直接原因是？', opt: ['A. 水平气压梯度力', 'B. 地转偏向力', 'C. 摩擦力', 'D. 重力'], ans: 'A', expl: '气压梯度力是风的原始动力，决定风速和初始风向。'},
                {type: 'single', q: '热力环流中，气温高的地方？', opt: ['A. 气流下沉，近地面高压', 'B. 气流上升，近地面低压', 'C. 气流下沉，近地面低压', 'D. 气流上升，近地面高压'], ans: 'B', expl: '热胀冷缩，热空气上升，导致近地面空气密度减小，形成低压。'},
                {type: 'single', q: '北半球近地面风向？', opt: ['A. 垂直等压线', 'B. 平行等压线', 'C. 向右偏转斜穿等压线', 'D. 向左偏转斜穿等压线'], ans: 'C', expl: '受三力合力（梯度力+偏向力+摩擦力），北半球向右偏转，最终斜穿等压线。'},
                {type: 'multi', q: '【多选】关于大气受热过程？', opt: ['A. 太阳暖大地', 'B. 大地暖大气', 'C. 大气暖大地', 'D. 大气直接吸收太阳能'], ans: 'ABC', expl: 'D错误，大气直接吸收太阳短波辐射很少，主要靠地面辐射加热。'},
                {type: 'multi', q: '【多选】影响风向的力有？', opt: ['A. 水平气压梯度力', 'B. 地转偏向力', 'C. 摩擦力', 'D. 万有引力'], ans: 'ABC', expl: '万有引力不是直接影响风向的大气动力。'},
                {type: 'multi', q: '【多选】热力环流实例？', opt: ['A. 海陆风', 'B. 山谷风', 'C. 城市热岛环流', 'D. 季风'], ans: 'ABCD', expl: '这些都是由于冷热不均引起的大气运动形式。'}
            ],
            part_b: [
                {title: '情境一：温室大棚', q: '为什么农民伯伯在冬天用塑料大棚种菜？原理是什么？', ans: '利用<b>温室效应</b>原理。塑料膜允许太阳短波辐射进入，但阻挡地面长波辐射散失，增强了棚内的大气逆辐射（<b>保温作用</b>）。'},
                {title: '情境二：海边度假', q: '白天在海边，你会感觉风从哪里吹来？为什么？', ans: '从<b>海洋吹向陆地</b>（海风）。<br>原因：白天陆地升温快（热/低压），海洋升温慢（冷/高压），风从高压吹向低压。'},
                {title: '情境三：孔明灯', q: '孔明灯为什么能飞上天？这属于什么地理原理？', ans: '属于<b>热力环流</b>原理。灯内空气受热膨胀变轻而<b>上升</b>，产生浮力，体现了“热升冷降”的规律。'}
            ]
        }
    },

    // === B1 第三章 地球上的水 ===
    
    // 3.1 水循环
    c3s1: {
        title: '3.1 水循环',
        ppt: [
            {role: 'judy', title: '新任务：追踪小水滴', content: '警员们！地球上的水从哪里来，到哪里去？<br>这节课我们要追踪一滴水的奇幻漂流。<br>水循环被称为“大自然的血液”，它维持着全球水的动态平衡。', visual: 'icon_water_drop'},
            {role: 'nick', title: '三大循环圈', content: '水循环分三个圈子：<br>1. <b>海陆间循环</b>（大循环）：大海蒸发->飘到陆地->下雨->流回大海（最重要的！）。<br>2. <b>海上内循环</b>：海里蒸发->海里下雨（水量最大）。<br>3. <b>陆地内循环</b>：陆地蒸发->陆地下雨。', visual: 'css_water_cycle'},
            {role: 'flash', title: '主...要...环...节...', content: '蒸发...<br>水汽输送...<br>降水...<br>下渗...<br>地表径流...<br>地下径流...', visual: 'css_rain'},
            {role: 'bogo', title: '人类的干预', content: '听着！我们也可以影响水循环：<br>1. <b>修水库</b>：调节径流的时间分配。<br>2. <b>跨流域调水</b>：调节径流的空间分配（如南水北调）。<br>3. <b>铺水泥路</b>：导致下渗减少，容易积水！', visual: 'icon_dam'},
            {role: 'judy', title: '水循环的意义', content: '为什么它这么重要？<br>1. 维持全球水量平衡。<br>2. 更新陆地淡水资源。<br>3. 塑造地表形态（流水侵蚀、堆积）。<br>4. 调节全球热量平衡。', visual: 'icon_balance'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地球上淡水的主体是？', opt: ['A. 河水', 'B. 湖泊水', 'C. 冰川', 'D. 地下水'], ans: 'C', expl: '冰川占淡水总量的2/3。'},
                {type: 'single', q: '下列环节中，人类影响最大的是？', opt: ['A. 蒸发', 'B. 水汽输送', 'C. 地表径流', 'D. 降水'], ans: 'C', expl: '人类通过修水库、调水等措施改变地表径流。'},
                {type: 'single', q: '塔里木河参与的水循环类型是？', opt: ['A. 海陆间循环', 'B. 海上内循环', 'C. 陆地内循环', 'D. 大循环'], ans: 'C', expl: '内流河最终未入海，属于陆地内循环。'},
                {type: 'single', q: '“黄河之水天上来”描述的环节是？', opt: ['A. 蒸发', 'B. 降水', 'C. 径流', 'D. 下渗'], ans: 'B', expl: '天上来指大气降水。'},
                {type: 'single', q: '城市铺设透水砖是为了增加哪个环节？', opt: ['A. 蒸发', 'B. 降水', 'C. 下渗', 'D. 输送'], ans: 'C', expl: '透水砖利于雨水下渗，减少地表径流。'},
                {type: 'multi', q: '【多选】海陆间循环的主要环节包括？', opt: ['A. 蒸发', 'B. 水汽输送', 'C. 降水', 'D. 径流'], ans: 'ABCD', expl: '海陆间循环包含所有这些环节。'},
                {type: 'multi', q: '【多选】水循环的地理意义有？', opt: ['A. 维持全球水量平衡', 'B. 塑造地表形态', 'C. 调节全球热量平衡', 'D. 加剧温室效应'], ans: 'ABC', expl: '水循环通过蒸发吸热、降水放热调节热量，与加剧温室效应无直接恶性关联。'}
            ],
            part_b: [
                {title: '情境一：海绵城市', q: '为什么要建设“海绵城市”？它影响了哪些水循环环节？', ans: '为了<b>防洪排涝</b>和<b>利用雨水</b>。它增加了<b>下渗</b>，减少了<b>地表径流</b>，补充了<b>地下径流</b>。'},
                {title: '情境二：植树造林', q: '在河流上游植树造林，对下游有什么好处？', ans: '森林能<b>涵养水源</b>，增加下渗。使下游河流的<b>水位变化更平稳</b>（削减洪峰，补充枯水期流量），减少洪涝灾害。'},
                {title: '情境三：路面硬化', q: '城市路面硬化（铺水泥）会导致什么后果？', ans: '阻碍<b>下渗</b>，导致<b>地表径流</b>汇聚速度加快，容易引发城市<b>内涝</b>（看海模式）。'}
            ]
        }
    },

    // 3.2 海水的性质
    c3s2: {
        title: '3.2 海水的性质',
        ppt: [
            {role: 'judy', title: '任务简报：深海体检', content: '警员们，我们这节课要潜入深海！<br>给大海做个“体检”。主要检测三个指标：<b>温度</b>、<b>盐度</b>、<b>密度</b>。<br>这三个指标决定了海洋鱼类的分布，也影响着我们的潜艇航行！', visual: 'icon_submarine'},
            {role: 'nick', title: '指标一：海水温度', content: '海水热量主要来自太阳。<br>1. <b>水平规律</b>：纬度越高，水温越低（废话，赤道热嘛）。<br>2. <b>垂直规律</b>：越深越冷。但在1000米以下，水温就保持低温，变化不大了。', visual: 'css_temp_chart'},
            {role: 'bogo', title: '指标二：海水盐度', content: '我是牛局长。盐度就是海水的咸度，平均3.5%。<br>规律：<b>副热带海区最高</b>（蒸发大，降水少），向两侧递减。<br>思考：为什么赤道不是最咸的？（因为赤道雨多，稀释了！）', visual: 'css_salinity_curve'},
            {role: 'flash', title: '指...标...三...密...度...', content: '密度...随纬度...升高...而增大...<br>密度...随深度...增加...而增大...<br>这关系到...潜艇...的...沉浮...', visual: 'icon_anchor'},
            {role: 'nick', title: '特殊案例：红海与波罗的海', content: '这是考试必考题！<br>🏆 <b>盐度最高：红海</b>（位于副热带，蒸发强，降水少，封闭）。<br>📉 <b>盐度最低：波罗的海</b>（纬度高蒸发弱，降水多，大量河水注入）。', visual: 'icon_trophy'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '世界大洋表层海水盐度分布规律是？', opt: ['A. 从赤道向两极递减', 'B. 从副热带海区向两侧递减', 'C. 从高纬向低纬递减', 'D. 全球均匀分布'], ans: 'B', expl: '副热带海区蒸发量大于降水量，盐度最高。'},
                {type: 'single', q: '海水温度垂直变化的规律是？', opt: ['A. 随深度增加而升高', 'B. 随深度增加而降低，1000米以下变化不大', 'C. 随深度增加均匀降低', 'D. 随深度增加先升后降'], ans: 'B', expl: '1000米以上随深度增加迅速降低，1000米以下保持低温。'},
                {type: 'single', q: '世界上盐度最高的海域是？', opt: ['A. 红海', 'B. 波罗的海', 'C. 地中海', 'D. 死海'], ans: 'A', expl: '红海位于副热带，蒸发旺盛，降水稀少，且海域封闭。'},
                {type: 'single', q: '影响海水密度的主要因素不包括？', opt: ['A. 温度', 'B. 盐度', 'C. 深度（压力）', 'D. 风浪'], ans: 'D', expl: '密度主要取决于温度、盐度和深度（压力）。'},
                {type: 'multi', q: '【多选】影响表层海水盐度的因素有？', opt: ['A. 蒸发量与降水量', 'B. 入海径流', 'C. 洋流', 'D. 海域封闭程度'], ans: 'ABCD', expl: '这些都是影响盐度的重要因素。'},
                {type: 'multi', q: '【多选】关于海水温度的叙述，正确的是？', opt: ['A. 暖流流经海区水温偏高', 'B. 夏季水温高于冬季', 'C. 低纬度水温低于高纬度', 'D. 表层水温主要受太阳辐射影响'], ans: 'ABD', expl: 'C错误，低纬度受热多，水温高。'}
            ],
            part_b: [
                {title: '情境一：吃水深度', q: '一艘轮船从长江驶入东海，船身是浮起来一些还是沉下去一些？为什么？', ans: '<b>浮起来一些。</b><br>原因：海水的盐度比河水高，因此<b>密度大</b>。根据阿基米德原理，同样的重力下，密度大则排开水的体积小，所以船会浮起。'},
                {title: '情境二：潜艇危机', q: '朱迪驾驶潜艇遭遇“海中断崖”，潜艇急剧掉深。这说明此时海水的垂直密度结构是怎样的？', ans: '说明<b>上层密度大，下层密度小</b>。<br>正常情况下越深密度越大，但如果反常，下层密度突然变小，浮力减小，潜艇就会像掉下悬崖一样下沉。'}
            ]
        }
    },

    // 3.3 海水的运动
    c3s3: {
        title: '3.3 海水的运动',
        ppt: [
            {role: 'judy', title: '任务简报：冲浪行动', content: '大海可不是静止不动的！它一直在跳舞。<br>这节课我们学习海水运动的三种形式：<br>1. <b>波浪</b>（风吹出来的）<br>2. <b>潮汐</b>（月亮吸出来的）<br>3. <b>洋流</b>（大海的传送带）', visual: 'icon_surf'},
            {role: 'nick', title: '形式一：波浪', content: '最常见的是<b>风浪</b>。风越大，浪越高。<br>还有一种可怕的叫<b>海啸</b>，那是海底地震或火山爆发引起的巨浪。<br>🦊 提示：遇到海啸要往高处跑，别去海边拍照！', visual: 'css_wave_motion'},
            {role: 'bogo', title: '形式二：潮汐', content: '我是牛局长。潮汐是海水在<b>月球和太阳引力</b>作用下的周期性涨落。<br>白天叫<b>潮</b>，晚上叫<b>汐</b>。<br>规律：初一、十五是大潮（引力叠加）。<br>应用：我们要利用潮汐发电，或者趁落潮去赶海！', visual: 'css_tide_moon'},
            {role: 'flash', title: '形...式...三...洋...流...', content: '海里的...高速...公路...<br>暖流：热->冷（增温增湿）<br>寒流：冷->热（降温减湿）<br>E...A...C...（东澳大...利...亚...暖...流...）', visual: 'css_current_map'},
            {role: 'judy', title: '洋流的影响', content: '洋流对我们很重要：<br>1. <b>气候</b>：暖流让森林茂密，寒流让沙漠逼近海岸。<br>2. <b>渔场</b>：寒暖流交汇处鱼特别多（北海道渔场）。<br>3. <b>航行</b>：顺流快，逆流慢。<br>4. <b>污染</b>：扩大污染范围，但加快净化速度。', visual: 'icon_fish'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '波浪的主要动力来源是？', opt: ['A. 月球引力', 'B. 太阳辐射', 'C. 风能', 'D. 地球内能'], ans: 'C', expl: '最常见的海浪是由风力形成的。'},
                {type: 'single', q: '潮汐现象的主要成因是？', opt: ['A. 风力吹拂', 'B. 月球和太阳的引力', 'C. 海水密度差异', 'D. 地转偏向力'], ans: 'B', expl: '潮汐是海水受天体引力产生的周期性涨落。'},
                {type: 'single', q: '关于洋流的性质，叙述正确的是？', opt: ['A. 从高纬流向低纬的是暖流', 'B. 从低纬流向高纬的是寒流', 'C. 暖流的水温一定比寒流高', 'D. 暖流比流经海区的水温高'], ans: 'D', expl: '暖流定义是比流经海区水温高。C错误，比如赤道附近的寒流可能比极地的暖流温度高。'},
                {type: 'single', q: '世界著名渔场多分布在？', opt: ['A. 寒暖流交汇处', 'B. 暖流流经处', 'C. 寒流流经处', 'D. 深海盆地'], ans: 'A', expl: '寒暖流交汇搅动海水，营养物质上泛，浮游生物多，鱼类丰富。'},
                {type: 'multi', q: '【多选】海水运动的主要形式包括？', opt: ['A. 波浪', 'B. 潮汐', 'C. 洋流', 'D. 泥石流'], ans: 'ABC', expl: '泥石流是陆地灾害。'},
                {type: 'multi', q: '【多选】洋流对地理环境的影响？', opt: ['A. 调节全球热量平衡', 'B. 影响沿岸气候', 'C. 影响海洋生物分布', 'D. 影响航海速度'], ans: 'ABCD', expl: '这些都是洋流的重要影响。'}
            ],
            part_b: [
                {title: '情境一：漂流瓶', q: '朱迪在动物城海边扔了一个漂流瓶，几年后在千里之外的冰川岛被发现了。是谁把瓶子带过去的？', ans: '是<b>洋流</b>。洋流是海洋中的大规模传送带，能长距离输送漂浮物。'},
                {title: '情境二：哥伦布的航行', q: '哥伦布两次去美洲，第一次走了直线却很慢，第二次绕了个大圈（顺着洋流）反而很快。这说明了什么？', ans: '说明<b>洋流对航海有重要影响</b>。顺风顺流航行速度快，省燃料；逆风逆流速度慢，耗能多。'}
            ]
        }
    },

    // === B1 第四章 地貌 ===
    
    // 4.1 常见地貌类型
    c4s1: {
        title: '4.1 常见地貌类型',
        ppt: [
            {role: 'judy', title: '任务简报：地形侦察', content: '警员们，欢迎来到<b>地貌侦察科</b>！<br>地球表面不是平坦的停车场，而是千姿百态的。<br>今天的任务是学会识别四种关键地形：<br>1. <b>喀斯特</b>（石头会溶化？）<br>2. <b>河流</b>（水的雕刻刀）<br>3. <b>风沙</b>（风的搬运工）<br>4. <b>海岸</b>（海浪的拍打）', visual: 'icon_mountain'},
            {role: 'nick', title: '一、喀斯特地貌 (Karst)', content: '这名字源于克罗地亚。<br><b>核心机密：</b> 可溶性岩石（主要是<b>石灰岩</b>）被水溶蚀了。<br><b>分布：</b> 我国广西、贵州、云南最典型。<br>徐霞客说的“峭峰离立”，就是指这个！', visual: 'css_karst'},
            {role: 'bogo', title: '地表 vs 地下', content: '喀斯特分两层楼：<br>1. <b>地表</b>：溶沟（路难走）、洼地（也叫坝子，适合种地）、峰林（像树林一样的山峰）。<br>2. <b>地下</b>：溶洞。里面有石钟乳（往下长）、石笋（往上长）、石柱（连在一起）。', visual: 'icon_cave'},
            {role: 'flash', title: '二...河...流...地...貌...', content: '河流...是...雕刻师...<br><b>上游（山区）：</b> 水流急，向下切。形成<b>“V”形河谷</b>，深而窄。<br><b>下游（平原）：</b> 水流缓，向两边扩。形成宽浅的<b>槽形河谷</b>和<b>冲积平原</b>。', visual: 'css_river_valley'},
            {role: 'nick', title: '特殊的河流作品', content: '注意这两个特殊形态：<br>1. <b>河曲与牛轭湖</b>：河道弯成S形，洪水一来把弯冲直了，留下的弯道就成了牛轭湖。<br>2. <b>三角洲</b>：河流入海时流速变慢，泥沙卸货，形成喇叭口状的陆地（如黄河三角洲）。', visual: 'css_delta'},
            {role: 'judy', title: '三、风沙地貌', content: '去西北地区看风的杰作：<br>🌬️ <b>风力侵蚀</b>：风吹石头，变成<b>风蚀蘑菇</b>和<b>雅丹</b>。<br>🏜️ <b>风力堆积</b>：风停了沙子落下，变成<b>沙丘</b>。<br>丹娘沙丘就在雅鲁藏布江边，也是风吹出来的哦！', visual: 'css_dune'},
            {role: 'bogo', title: '重点情报：新月形沙丘', content: '这是沙漠里的指南针！<br>形状像新月。<br><b>迎风坡</b>：缓而且呈凸形。<br><b>背风坡</b>：陡而且呈凹形。<br>记住：风是从缓坡吹向陡坡的！', visual: 'icon_compass'},
            {role: 'nick', title: '四、海岸地貌', content: '大海边缘的战争：<br>1. <b>海浪侵蚀</b>（进攻）：形成海蚀崖（陡壁）、海蚀柱（像石林）。<br>2. <b>海浪堆积</b>（防守）：形成沙滩、泥滩。<br>以后去海边度假，记得区分这是谁的杰作！', visual: 'css_coast'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '“峭峰离立，分行竞颖”描述的是哪种地貌？', opt: ['A. 风沙地貌', 'B. 河流地貌', 'C. 喀斯特地貌', 'D. 冰川地貌'], ans: 'C', expl: '徐霞客描述的是广西、贵州一带典型的喀斯特峰林地貌。'},
                {type: 'single', q: '下列地貌属于地下喀斯特地貌的是？', opt: ['A. 峰林', 'B. 溶沟', 'C. 石笋', 'D. 洼地'], ans: 'C', expl: '石笋位于溶洞底部，属于地下喀斯特；其他均为地表喀斯特。'},
                {type: 'single', q: '河流入海口常见的堆积地貌是？', opt: ['A. 冲积扇', 'B. 三角洲', 'C. 河漫滩', 'D. 牛轭湖'], ans: 'B', expl: '河流入海处流速减慢，泥沙淤积形成三角洲。'},
                {type: 'single', q: '关于新月形沙丘，说法正确的是？', opt: ['A. 迎风坡陡', 'B. 背风坡缓', 'C. 迎风坡缓，背风坡陡', 'D. 两侧坡度一样'], ans: 'C', expl: '根据流体力学，迎风坡受风压力坡度缓，背风坡有涡流塌落坡度陡。'},
                {type: 'single', q: '雅丹地貌主要分布在我国哪里？', opt: ['A. 湿润的南方', 'B. 西北干旱地区', 'C. 青藏高原', 'D. 东北平原'], ans: 'B', expl: '雅丹是典型的风蚀地貌，常见于干旱多风的西北地区。'},
                {type: 'multi', q: '【多选】下列属于海浪侵蚀地貌的是？', opt: ['A. 海蚀崖', 'B. 沙滩', 'C. 海蚀拱桥', 'D. 海蚀柱'], ans: 'ACD', expl: '沙滩属于海浪堆积地貌，其余为侵蚀地貌。'}
            ],
            part_b: [
                {title: '逻辑推理：倒置的扫把', q: '在野外看到一棵树的根部裸露，像倒置的扫把，且根部下方有大量的沙土堆积（红柳沙包）。这能告诉我们该地过去的气候变化吗？', ans: '<b>能。</b><br>红柳沙包的纹层结构像树木年轮。沙层厚说明当时<b>风沙大、气候干旱</b>；枯枝落叶层厚说明当时<b>湿润、植被好</b>。通过分析纹层，可以推测近百年的气候干湿变化。'},
                {title: '案情分析：消失的凶器', q: '在喀斯特地区，凶手把作案工具扔进了一条小河，警方第二天去打捞，发现河水干了，下游也没有踪迹。工具去哪了？', ans: '很可能进入了<b>地下河</b>。<br>喀斯特地区裂隙发育，地表河流容易通过落水洞转入地下，变成地下河。工具随水流进入了复杂的地下溶洞系统。'},
                {title: '生存挑战：沙漠求生', q: '如果你在沙漠里迷路了，看到远处有一片新月形沙丘。已知当地盛行西北风，你应该往哪个方向走才能找到背风坡躲避风沙？', ans: '往<b>东南方向</b>的沙丘凹面走。<br>逻辑：盛行西北风，说明风从西北吹来。新月形沙丘的凸面（迎风坡）朝向西北，凹面（背风坡）朝向东南。'}
            ]
        }
    },

    // 4.2 地貌的观察
    c4s2: {
        title: '4.2 地貌的观察',
        ppt: [
            {role: 'judy', title: '任务简报：鹰眼行动', content: '警员们，识别地貌只是第一步。<br>作为一名高级侦探，你必须学会<b>“科学观察”</b>。<br>不仅仅是看，而是要测量、分析、记录。<br>就像詹天佑修铁路一样，观察不到位，火车就上不去！', visual: 'icon_telescope'},
            {role: 'bogo', title: '一、观察的顺序', content: '乱看是看不出名堂的，必须遵守纪律：<br>1. <b>宏观 -> 微观</b>：先看大的（是山地还是平原？），再看小的（有几条沟？）。<br>2. <b>面 -> 点</b>：先看整体区域，再选一个点详细勘察。<br>辅助工具：地形图、无人机、卫星影像。', visual: 'css_zoom'},
            {role: 'nick', title: '二、观察内容：高度', content: '高度分两种：<br>1. <b>绝对高度</b>（海拔）：划分地貌类型（高原>500m，平原<200m）。<br>2. <b>相对高度</b>（落差）：反映地面起伏状况。<br>🦊 提示：爬山累不累，主要看相对高度！', visual: 'css_height_diff'},
            {role: 'flash', title: '三...坡...度...', content: '坡度...就是...陡不陡...<br>公式：垂直距离 / 水平距离...<br>坡度大...容易水土流失...<br>坡度小...适合种地...修路...', visual: 'css_slope_tri'},
            {role: 'judy', title: '詹天佑的智慧', content: '案例分析：<b>“人”字形铁路</b>。<br>京张铁路八达岭段坡度太大，火车爬不动。<br><b>解决方案：</b> 把线路修成“人”字形。<br><b>原理：</b> 延长了水平距离，在垂直高度不变的情况下，<b>降低了坡度</b>。', visual: 'icon_railway'},
            {role: 'nick', title: '四、坡向 (Aspect)', content: '山也有阴阳两面：<br>☀️ <b>阳坡</b>：光照好，暖和（北半球南坡是阳坡）。<br>🌑 <b>阴坡</b>：光照差，冷，蒸发弱。<br>💨 <b>迎风坡</b>：雨水多（地形雨）。<br>🍂 <b>背风坡</b>：雨水少。', visual: 'css_sun_mountain'},
            {role: 'bogo', title: '五、其他要素', content: '除了高和坡，还要看：<br>1. <b>形状</b>：是圆的还是尖的？<br>2. <b>面积</b>：有多大？<br>3. <b>分布</b>：是成片还是孤立？<br>4. <b>破碎程度</b>：比如我国西南山区，地形破碎，路很难修。', visual: 'icon_map_scatter'},
            {role: 'judy', title: '六、野外实战', content: '出发前准备：<br>1. <b>资料</b>：地形图、指南针、记录表。<br>2. <b>路线</b>：设计好观察点。<br>3. <b>安全</b>：避开滑坡、崩塌区。<br>到了现场要勤拍照、画素描、记数据！', visual: 'icon_backpack'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地貌观察的最佳顺序是？', opt: ['A. 从微观到宏观', 'B. 从点到面', 'C. 从宏观到微观，从面到点', 'D. 随机观察'], ans: 'C', expl: '整体把握，细节填充。先看大的，再看小的。'},
                {type: 'single', q: '绝对高度主要用于？', opt: ['A. 反映地面起伏', 'B. 划分地貌类型（如平原、高原）', 'C. 计算坡度', 'D. 判断坡向'], ans: 'B', expl: '绝对高度（海拔）是区分平原（<200m）和高原（>500m）等类型的依据。'},
                {type: 'single', q: '铁路建设中，最大坡度通常限制在？', opt: ['A. 15%', 'B. 2.5%-3%', 'C. 10%', 'D. 45%'], ans: 'B', expl: '铁路对坡度要求极高，通常不超过3%，否则机车拉不动。'},
                {type: 'single', q: '在北半球中纬度地区，关于坡向的说法正确的是？', opt: ['A. 南坡是阴坡', 'B. 北坡是阳坡', 'C. 南坡是阳坡', 'D. 东西坡光照无差异'], ans: 'C', expl: '北半球太阳在南方，南坡朝阳。'},
                {type: 'single', q: '京张铁路“人”字形线路的设计原理是？', opt: ['A. 缩短路程', 'B. 延长水平距离以降低坡度', 'C. 增加垂直高度', 'D. 为了美观'], ans: 'B', expl: '坡度=垂直/水平。延长水平距离，可以减小坡度。'},
                {type: 'single', q: '一般不适宜发展种植业的坡度界限是？', opt: ['A. 5°', 'B. 15°', 'C. 25°', 'D. 2°'], ans: 'C', expl: '通常坡度大于25°严禁开垦，应退耕还林。'},
                {type: 'multi', q: '【多选】地貌观察的主要内容包括？', opt: ['A. 高度', 'B. 坡度', 'C. 坡向', 'D. 形状和面积'], ans: 'ABCD', expl: '这些都是描述地貌特征的核心要素。'}
            ],
            part_b: [
                {title: '工程难题：盘山公路', q: '为什么山区的公路都要修成“之”字形？直接直着修上去不行吗？', ans: '<b>不行。</b><br>直着修坡度太大，汽车爬不上去，且下坡极易失控。修成“之”字形，虽然路程变长了，但增加了<b>水平距离</b>，从而<b>降低了坡度</b>，保证行车安全。'},
                {title: '选址智慧：古寺庙', q: '朱迪发现很多古老的寺庙都建在山的南坡，而且后面有山挡着。这是为什么？（从坡向角度分析）', ans: '1. <b>采光</b>：北半球南坡是阳坡，冬暖夏凉。<br>2. <b>避风</b>：背靠山脉可以阻挡冬季寒冷的北风（背风坡）。<br>这是古人利用地貌改善微气候的智慧。'}
            ]
        }
    }
});
// js/data.js - Part 15 (补充 B2 Ch2, Ch5)

Object.assign(courses, {
    // === B2 第二章 乡村和城镇 ===
    
    // 2.1 乡村和城镇空间结构
    b2c2s1: {
        title: '2.1 乡村和城镇空间结构',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：土地的用法', content: '徒儿们！乡村和城镇都是人们聚居的地方。<br>但地有限，怎么用？这就叫<b>土地利用</b>。<br>主要类型：耕地、林地、草地（乡村为主）；商业、工业、居住、建设用地（城镇为主）。<br>合理的布局能让乾坤有序！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：城镇功能区', content: '城里最热闹的地方就是<b>商业区</b>（市中心、街角），像我的风火轮一样红火，但面积小。<br><b>工业区</b>（郊外、交通边）又吵又脏，我不去，但它是城市生产的主力。<br><b>居住区</b>（最大）是我们睡觉的地方，分高级和普通，高级的在风景好的上风上水处。', visual: 'icon_fire'},
            {role: 'aobing', title: '敖丙分析：空间结构模式', content: '城市长得都不一样，但有规律：<br>1. <b>同心圆模式</b>：像洋葱，一层层往外扩（平原多见）。<br>2. <b>扇形模式</b>：沿着交通线向外延伸。<br>3. <b>多核心模式</b>：有几个中心，像龙的九子各占一方。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：影响因素之经济', content: '谁决定地给谁用？看谁出钱多（<b>付租能力</b>）！<br><b>商业</b>：这帮人最有钱，必须占市中心（人流大）。<br><b>住宅</b>：出钱中等，占中间。<br><b>工业</b>：出钱少，还要地大，只能去郊区。<br>这就形成了<b>地租曲线</b>。', visual: 'icon_money'},
            {role: 'shengongbao', title: '申公豹：仅仅是钱吗？', content: '哼，除了钱，还有人情世故！<br>1. <b>历史</b>：北京故宫在市中心，谁敢拆？那是文物！<br>2. <b>社会</b>：种族、收入导致贫民窟和富人区隔离。<br>3. <b>行政</b>：政府说要建开发区，地就得划过去。<br>这也是命数！', visual: 'icon_shield'},
            {role: 'aobing', title: '案例：大圩古镇', content: '看广西大圩古镇。<br>它沿着漓江展开，呈长条形。<br>这是受<b>河流（交通/水源）</b>和<b>地形</b>的制约。<br>商业街贴着码头，方便做生意。', visual: 'icon_water_drop'},
            {role: 'taiyi', title: '全节总结', content: '商业居中工业边，<br>住宅占地最为先。<br>经济地租是关键，<br>历史社会也相连。<br>结构随世在演变，<br>合理规划天地宽！', visual: 'icon_star'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '城市中最广泛的土地利用方式是？', opt: ['A.商业用地', 'B.工业用地', 'C.居住用地', 'D.行政用地'], ans: 'C', expl: '居住区是城市的主体，占地面积最大。'},
                {type: 'single', q: '直接影响城市地租高低的主要因素有？', opt: ['A.距离市中心的远近和交通通达度', 'B.地形和气候', 'C.人口密度和文化', 'D.工业产值'], ans: 'A', expl: '离市中心越近、交通越好，地租越高。'},
                {type: 'single', q: '高级居住区通常分布在？', opt: ['A.市中心交通便利处', 'B.城市外缘，环境优美处', 'C.工业区附近', 'D.低洼处'], ans: 'B', expl: '富人追求环境质量，常位于上风上水的高处或风景区。'},
                {type: 'multi', q: '【多选】商业区的布局特点是？', opt: ['A.位于市中心', 'B.位于交通干线两侧', 'C.位于街角路口', 'D.位于河流下游'], ans: 'ABC', expl: '商业追求人流量（市场最优）和交通便利（交通最优）。'}
            ],
            part_b: [
                {title: '🔥 哪吒的挑战', q: '为什么市中心虽然地租最高，但还是有很多小商店活下来了？', ans: '1. <b>付租能力高</b>：出售高附加值商品（奢侈品）。<br>2. <b>薄利多销</b>：人流量巨大。<br>3. <b>立体利用</b>：在这个“寸土寸金”的地方，楼盖得特别高，分摊了成本。'}
            ]
        }
    },

    // 2.2 城镇化
    b2c2s2: {
        title: '2.2 城镇化',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：什么是城镇化？', content: '乡下人进城，农村变城市，这就是<b>城镇化</b>。<br>三大标志要记牢：<br>1. 城镇人口增加。<br>2. <b>城镇人口占总人口比例上升</b>（最核心指标！）。<br>3. 城镇建设用地规模扩大。<br>这是社会进步的必经之路！', visual: 'icon_chart'},
            {role: 'nezha', title: '哪吒：S形曲线', content: '城镇化就像我踩风火轮，速度有快有慢：<br>1. <b>初期阶段</b>（<30%）：慢，水平低。<br>2. <b>中期阶段</b>（30%-70%）：<b>快！</b>（加速冲刺，问题也多）。<br>3. <b>后期阶段</b>（>70%）：慢，水平高（甚至出现逆城市化）。<br>中国现在就在<b>中期加速阶段</b>！', visual: 'css_curve'},
            {role: 'aobing', title: '敖丙分析：发达 vs 发展中', content: '<b>发达国家</b>：起步早，水平高，现在慢，出现“逆城市化”（富人搬去郊区）。<br><b>发展中国家</b>：起步晚，水平低，现在快，但容易出现“虚假城镇化”（人进城了，城没建好）或“滞后城镇化”。', visual: 'icon_compare'},
            {role: 'shengongbao', title: '申公豹：城市病', content: '看看现在的城市，那是“水泥森林”！<br>🌧️ <b>雨岛效应</b>：由于热气流上升，城市雨水多。<br>🔥 <b>热岛效应</b>：城市比郊区热。<br>🌫️ <b>雾霾</b>：汽车尾气排不出去。<br>这难道就是你们向往的生活？', visual: 'icon_storm'},
            {role: 'nezha', title: '哪吒：智慧城市', content: '别怕，我们有法宝！<br>📱 <b>GIS</b>：帮我们规划公交线路，选址医院。<br>🛰️ <b>RS</b>：监测城市扩张，看绿地少了没。<br>📡 <b>GNSS</b>：导航防堵车。<br>智慧城市，我命由我不由天！', visual: 'icon_phone'},
            {role: 'taiyi', title: '生态城市', content: '未来的路是<b>生态城市</b>。<br>发展低污染、节能建筑、绿色交通。<br>把城市轻轻放进大自然里，而不是把大自然铲平。<br>这就是“天人合一”。', visual: 'icon_tree_planting'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '衡量城镇化水平最重要的指标是？', opt: ['A.城镇人口数量', 'B.城镇建设用地规模', 'C.城镇人口占区域总人口的比例', 'D.城镇数量'], ans: 'C', expl: '比例最能反映结构变化。'},
                {type: 'single', q: '目前我国处于城镇化的哪个阶段？', opt: ['A.初期阶段', 'B.中期加速阶段', 'C.后期成熟阶段', 'D.逆城市化阶段'], ans: 'B', expl: '我国城镇化率约65%，处于30%-70%的加速区间。'},
                {type: 'single', q: '逆城市化现象表现为？', opt: ['A.城市中心人口向郊区和小城镇迁移', 'B.郊区人口向市中心迁移', 'C.农村人口向城市迁移', 'D.城市人口大量减少'], ans: 'A', expl: '追求环境质量，富人逃离市中心。'},
                {type: 'multi', q: '【多选】解决“城市病”的合理措施？', opt: ['A.建设卫星城，分散大城市职能', 'B.发展公共交通', 'C.扩大城市绿地', 'D.禁止人口迁入'], ans: 'ABC', expl: 'D不现实且违规。'}
            ],
            part_b: [
                {title: '🐉 敖丙的诊断', q: '某城市下大雨就“看海”，天晴就“干渴”，这是什么病？怎么治？', ans: '这是<b>“城市硬化病”</b>。<br>原因：水泥路面阻挡了下渗。<br>药方：建设<b>“海绵城市”</b>。铺设透水砖，建下凹式绿地、雨水花园，让城市像海绵一样吸水、蓄水、渗水、净水。'}
            ]
        }
    },

    // 2.3 地域文化与城乡景观
    b2c2s3: {
        title: '2.3 地域文化与城乡景观',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：文化是什么？', content: '文化就像空气，看不见但无处不在。<br><b>地域文化</b>是在特定地域内形成的，有鲜明个性的文化。<br>它分两种：<br>1. <b>物质方面</b>：建筑、服饰、饮食（看得见）。<br>2. <b>非物质方面</b>：方言、习俗、价值观（看不见）。', visual: 'icon_life'},
            {role: 'lijing', title: '李靖：景观是文化的容器', content: '城乡景观是地域文化最直接的体现。<br>看一个地方的房子，就知道那里的人怎么生活，信奉什么。<br>比如<b>北京四合院</b>：<br>四四方方，长幼有序，体现了儒家的<b>“长幼尊卑”</b>和<b>“天圆地方”</b>思想。', visual: 'icon_park'},
            {role: 'nezha', title: '哪吒：福建土楼', content: '看我家乡（神话里的陈塘关可能有）类似的<b>福建土楼</b>！<br>圆圆的像个碉堡。<br>为什么？<br>1. <b>防御</b>：防强盗（墙厚）。<br>2. <b>聚族而居</b>：全村人住一栋楼，团结！<br>这就是客家人的文化。', visual: 'icon_rebuild'},
            {role: 'aobing', title: '敖丙：江南水乡', content: '我去过江南。<br>“小桥流水人家”。<br>房子临河而建，屋顶坡度大（为了排水），墙是白的（为了反光降温、素雅）。<br>这体现了<b>“人与自然和谐”</b>的文化。', visual: 'icon_water_drop'},
            {role: 'shengongbao', title: '申公豹：外国的月亮？', content: '看看国外。<br><b>美国城市</b>：棋盘格状，摩天大楼林立，体现了<b>“自由、开放、资本主义”</b>。<br><b>欧洲城市</b>：有中心广场和教堂，道路呈放射状，体现了<b>“皇权、宗教、历史”</b>。<br>风格大不同啊！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '全节总结', content: '看房知文化，看路知性格。<br>保护老祖宗留下的宝贝，建设有灵魂的城市。<br>最后一关考核，通关者赏风火轮体验券一张！', visual: 'icon_final'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '地域文化最直观的体现是？', opt: ['A.方言', 'B.饮食', 'C.城乡景观', 'D.节日习俗'], ans: 'C', expl: '景观（建筑、聚落）是固化的文化，最直观。'},
                {type: 'single', q: '北京四合院体现了中国传统文化中的？', opt: ['A.御外凝内，长幼有序', 'B.崇尚自由，开拓创新', 'C.人与自然高度和谐', 'D.开放包容，中西合璧'], ans: 'A', expl: '儒家礼教思想。'},
                {type: 'single', q: '江南水乡屋顶坡度大，主要为了？', opt: ['A.美观', 'B.防雪压', 'C.排水', 'D.通风'], ans: 'C', expl: '南方雨水多。'},
                {type: 'multi', q: '【多选】地域文化对城市的影响体现在？', opt: ['A.建筑风格', 'B.城市格局', 'C.土地利用方式', 'D.居民消费习惯'], ans: 'ABCD', expl: '全方位影响。'}
            ],
            part_b: [
                {title: '🔥 哪吒的发现', q: '为什么我国北方的墙比南方厚，窗户比南方小？', ans: '为了<b>适应气候</b>。<br>北方寒冷，厚墙小窗为了<b>保温防寒</b>。<br>南方湿热，薄墙大窗为了<b>通风散热</b>。'},
                {title: '🐉 敖丙的对比', q: '同样是皇宫，为什么凡尔赛宫前面是大花园，故宫前面是大广场？', ans: '文化差异。<br>凡尔赛宫体现<b>“人定胜天”</b>和浪漫主义，修剪整齐的园林展示对自然的控制。<br>故宫体现<b>“皇权至上”</b>，广场用于举行盛大庆典，展示天子的威严。'}
            ]
        }
    },

    // === B2 第五章 环境与发展 ===
    
    // 5.1 人类面临的主要环境问题
    b2c5s1: {
        title: '5.1 人类面临的主要环境问题',
        ppt: [
            {role: 'nezha', title: '哪吒：地球病了！', content: '最近我踩着风火轮巡视，发现地球状态不对劲！<br>森林秃了（资源枯竭），河水黑了（环境污染），沙漠变大了（生态破坏）。<br>人类在创造财富的同时，也把自己逼到了悬崖边上。<br>这是怎么回事？', visual: 'icon_alert_red'},
            {role: 'taiyi', title: '太乙课堂：环境问题的本质', content: '徒儿莫慌，这是<b>人地关系不协调</b>的结果。<br>1. <b>索取 > 再生</b> = 资源枯竭（如煤炭挖光了）。<br>2. <b>排放 > 自净</b> = 环境污染（如雾霾）。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：三大类型', content: '环境问题主要分三类：<br>1. <b>资源枯竭</b>：水、土、矿、林少了。<br>2. <b>生态破坏</b>：水土流失、荒漠化、生物多样性减少。<br>3. <b>环境污染</b>：大气、水、土壤、噪声、固体废弃物污染。', visual: 'icon_chart'},
            {role: 'lijing', title: '李靖：城乡有别', content: '城里和乡下的病症不一样。<br><b>城市</b>：人多车多工厂多，主要是<b>环境污染</b>。<br><b>乡村</b>：利用资源方式不当，主要是<b>生态破坏</b>。', visual: 'icon_map_scatter'},
            {role: 'aobing', title: '全球性问题', content: '有些问题是全世界共同的麻烦。<br><b>全球变暖</b>：海平面上升。<br><b>臭氧层破坏</b>：紫外线伤人。<br><b>酸雨</b>：腐蚀建筑，毁坏森林。<br>不仅要各扫门前雪，还得管管瓦上霜。', visual: 'icon_earth'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '环境问题产生的根本原因是？', opt: ['A.人类主观意愿', 'B.自然环境的变化', 'C.人类活动索取资源和排放废弃物的速度超过了环境的承载能力', 'D.科技发展的必然结果'], ans: 'C', expl: '输入超过再生能力，输出超过自净能力。'},
                {type: 'single', q: '下列属于生态破坏的是？', opt: ['A.光化学烟雾', 'B.水土流失', 'C.噪声污染', 'D.酸雨'], ans: 'B', expl: 'A、C、D属于环境污染。'},
                {type: 'single', q: '全球气候变暖会导致？', opt: ['A.海平面上升', 'B.臭氧层破坏', 'C.酸雨范围扩大', 'D.地震频繁'], ans: 'A', expl: '冰川融化和海水热膨胀导致海平面上升。'},
                {type: 'multi', q: '【多选】环境污染的主要表现形式有？', opt: ['A.大气污染', 'B.水体污染', 'C.土地荒漠化', 'D.固体废弃物污染'], ans: 'ABD', expl: 'C是生态破坏。'}
            ],
            part_b: [
                {title: '🐉 敖丙的分析', q: '为什么说“绿水青山就是金山银山”？', ans: '1. <b>生态价值</b>：良好的生态环境是人类生存的基础。<br>2. <b>经济价值</b>：好环境可以发展生态旅游、生态农业，直接转化为经济效益。<br>3. <b>可持续性</b>：保护环境就是保护生产力。'}
            ]
        }
    },

    // 5.2 走向人地协调——可持续发展
    b2c5s2: {
        title: '5.2 走向人地协调——可持续发展',
        ppt: [
            {role: 'taiyi', title: '太乙课堂：可持续发展', content: '什么叫<b>可持续发展</b>？<br>定义：<b>“既满足当代人的需求，而又不危及后代人满足其需求的发展。”</b><br>就是说，别把子孙后代的饭碗给砸了！', visual: 'icon_tree'},
            {role: 'lijing', title: '李靖：三大原则', content: '这事儿有规矩：<br>1. <b>公平性原则</b>：人与人、人与生物都要公平。<br>2. <b>持续性原则</b>：要在地球承载力之内发展。<br>3. <b>共同性原则</b>：地球是大家的，各国要联手合作。', visual: 'icon_balance'},
            {role: 'aobing', title: '敖丙：怎么做？（生产篇）', content: '工厂要搞<b>清洁生产</b>。<br>从原料开采到废物处理，全过程都要干净。<br>农业要搞<b>生态农业</b>（如循环经济）。<br>废物利用：秸秆喂牛 -> 牛粪产沼气 -> 沼渣肥田。<br>变废为宝，这就是智慧！', visual: 'icon_rebuild'},
            {role: 'nezha', title: '哪吒：怎么做？（消费篇）', content: '我们每个人都能做！<br><b>绿色消费</b>：<br>少买过度包装的东西（减量）。<br>垃圾分类（回收）。<br>出门坐公交、骑车（低碳）。', visual: 'icon_train'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '可持续发展的核心定义是？', opt: ['A.经济高速增长', 'B.保护环境不动摇', 'C.满足当代需求且不危及后代', 'D.维持现状不发展'], ans: 'C', expl: '布伦特兰委员会的定义。'},
                {type: 'single', q: '“竭泽而渔”违背了可持续发展的什么原则？', opt: ['A.公平性原则', 'B.持续性原则', 'C.共同性原则', 'D.阶段性原则'], ans: 'B', expl: '破坏了资源的再生能力，无法持续。'},
                {type: 'multi', q: '【多选】公众参与可持续发展的行为包括？', opt: ['A.选购绿色产品', 'B.垃圾分类', 'C.使用一次性餐具', 'D.步行或公交出行'], ans: 'ABD', expl: 'C不仅浪费资源还增加垃圾。'}
            ],
            part_b: [
                {title: '🔥 哪吒的行动', q: '我想把陈塘关变成“无废城市”，这可能吗？', ans: '<b>理论上是目标，实践中是过程。</b><br>“无废”不是说没有垃圾，而是通过<b>源头减量</b>、<b>资源化利用</b>和<b>安全填埋</b>，最大限度减少填埋量。这需要全城百姓一起努力，从垃圾分类做起。'}
            ]
        }
    },

    // 5.3 中国国家发展战略举例
    b2c5s3: {
        title: '5.3 中国国家发展战略举例',
        ppt: [
            {role: 'lijing', title: '李靖：国家战略', content: '为了实现生态文明，国家制定了好多大计划。<br>今天讲两个最重要的：<br>1. <b>主体功能区战略</b>（国土怎么用）。<br>2. <b>海洋强国战略</b>（海怎么管）。', visual: 'icon_badge'},
            {role: 'taiyi', title: '太乙课堂：主体功能区', content: '中国地大，但不能乱用。<br>我们要把国土划分为四类：<br>1. <b>优化开发区域</b>（如长三角）：要转型。<br>2. <b>重点开发区域</b>（如中原）：能撑大梁。<br>3. <b>限制开发区域</b>（如粮仓）：要保护。<br>4. <b>禁止开发区域</b>（如自然保护区）：绝对不能动！', visual: 'icon_map_scatter'},
            {role: 'nezha', title: '哪吒：向海图强', content: '建设<b>海洋强国</b>：<br>1. 发展海洋经济。<br>2. 保护海洋环境。<br>3. 维护海洋权益。<br>我的闹海本事终于有用武之地了！', visual: 'icon_ship'},
            {role: 'aobing', title: '敖丙：南海与钓鱼岛', content: '南海诸岛和钓鱼岛自古就是中国的！<br>有历史记载，有法理依据（《海洋法公约》）。<br>设立<b>三沙市</b>就是行政管辖的铁证。<br>谁敢抢，我龙族第一个不答应！', visual: 'icon_water_drop'}
        ],
        quiz: {
            part_a: [
                {type: 'single', q: '建设主体功能区的主要目的是？', opt: ['A.开发所有国土资源', 'B.停止一切开发活动', 'C.因地制宜，有序开发', 'D.均衡各地区经济水平'], ans: 'C', expl: '根据资源环境承载能力，确定不同区域的功能定位。'},
                {type: 'single', q: '下列属于“限制开发区域”的是？', opt: ['A.国家级自然保护区', 'B.长三角地区', 'C.东北平原主产粮区', 'D.中原城市群'], ans: 'C', expl: '农产品主产区和重点生态功能区属于限制开发。'},
                {type: 'single', q: '海洋权益的核心是？', opt: ['A.领土主权', 'B.经济开发权', 'C.自由航行权', 'D.科学考察权'], ans: 'A', expl: '主权是基础，其他权益由主权衍生。'},
                {type: 'multi', q: '【多选】建设海洋强国的战略举措包括？', opt: ['A.拓展蓝色经济空间', 'B.改善海洋生态环境', 'C.维护海洋权益', 'D.填海造陆扩大领土'], ans: 'ABC', expl: 'D不是主要战略，且破坏生态。'}
            ],
            part_b: [
                {title: '🔥 哪吒的领地', q: '如果别国的船闯入我国领海，我有权赶他走吗？领海范围是多少？', ans: '<b>当然有权！</b><br>领海是国家领土的一部分，国家拥有完全的主权。我国的领海宽度是<b>12海里</b>（约22公里）。未经允许进入就是侵犯主权。'}
            ]
        }
    }
});

// 10. 文件收尾与初始化
// ==========================================

// 辅助函数：获取URL参数 (Legacy support)
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 自动运行完整性检查
setTimeout(GeoTools.checkDataIntegrity, 1000);

console.log('✅ data.js loaded successfully. Ready to explore the world!');
