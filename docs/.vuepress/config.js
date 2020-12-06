module.exports = {
    port: 1100,
    base: "/quantum_intro/",
    plugins: [
        [
          'vuepress-plugin-mathjax',
          {
            target: 'svg',
            macros: {
              '*': '\\times',
            },
          },
        ],
    ],
    markdown: {
        lineNumbers: false,
        config: _ =>{
            _.use(require('markdown-it-html5-embed'),{
                html5embed: {
                  useImageSyntax: true,
                  useLinkSyntax: false
                }
            })
        }
    },
    title: 'Quantum Computing',
    description: 'Just playing around',
    themeConfig: {
            logo: '/cuhksz_logo.png',  //网页顶端导航栏左上角的图标
            //顶部导航栏
            nav: [           
                //格式一：直接跳转，'/'为不添加路由，跳转至首页
                { text: '首页', link: '/' },    

                //格式二：添加下拉菜单，link指向的文件路径
                {
                    text: 'Quantum Theory',   
                    ariaLabel: 'quantum_theory',   //用于识别的label
                    items: [
                        { text: 'Qubit', link: '/pages/quantum_theory/qubit.md' },  
                        { text: 'Quantum Entanglement', link: '/pages/quantum_theory/quantum_entanglement.md' },
                        { text: 'Quantum Superposition', link: '/pages/quantum_theory/quantum_superposition.md' },
                    ]
                },
                { text: 'Quantum Computer', link: '/pages/quantum_computer/quantum_computer.md' },
                //格式二：添加下拉菜单，link指向的文件路径
                {
                    text: 'Quantum Algorithm',   
                    ariaLabel: 'quantum_algorithm',   //用于识别的label
                    items: [
                        { text: 'HHL', link: '/pages/quantum_algorithm/HHL.md' },  
                        { text: 'Shor', link: '/pages/quantum_algorithm/Shor.md' },
                        { text: 'Grove', link: '/pages/quantum_algorithm/Grove.md' },
                    ]
                },
                //格式三：跳转至外部网页，需http/https前缀
                { text: 'Github', link: 'https://github.com/ccjeff' },
            ],
            
            //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
            sidebar: {
                '/pages/quantum_theory/':[         
                    {
                        title: 'Quantum Theory', 
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['qubit.md', 'Qubit'], 
                            ['quantum_entanglement.md', 'Quantum Entanglement'],
                            ['quantum_superposition.md', 'Quantum Superposition']
                        ]
                    },
                ],
                '/pages/quantum_computer/':[         
                    {
                        title: 'Quantum Computer', 
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['quantum_computer.md', 'Quantum Computer']
                        ]
                    },
                ],
                '/pages/quantum_algorithm/':[         
                    {
                        title: 'Quantum Algorithm', 
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['Grove.md', 'Grove Algorithm'], 
                            ['HHL.md', 'HHL'],
                            ['Shor.md', 'Shor Algorithm']
                        ]
                    },
                ],
                
                //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
            }
        }
    
  }