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
        [
            "music-bar",
            {
              playList: [],
              platform: [
                {
                  name: "music.163.com",
                  playListIDs: ["2758625950"]
                }
              ]
            }
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
    title: '',
    description: 'Just playing around',
    themeConfig: {
            logo: '/cuhksz_logo.png',  //网页顶端导航栏左上角的图标
            //顶部导航栏
            nav: [     
                { text: 'Motivation', link: '/pages/motivation/Motivation.md' },    
                {
                    text: 'Quantum Theory',   
                    ariaLabel: 'quantum_theory',   //用于识别的label
                    items: [ 
                        { text: 'Quantum Entanglement', link: '/pages/quantum_theory/quantum_entanglement.md' },
                        { text: 'Quantum Superposition', link: '/pages/quantum_theory/quantum_superposition.md' },
                    ]
                },
                { text: 'Qubit', link: '/pages/qubit/qubit.md' },     
                { text: 'Quantum Gate', link: '/pages/quantum_gate/Quantum_Gate.md' },
                {
                    text: 'Quantum Algorithm',   
                    ariaLabel: 'quantum_algorithm',   //用于识别的label
                    items: [
                        { text: 'HHL', link: '/pages/quantum_algorithm/HHL.md' },  
                        { text: 'Shor', link: '/pages/quantum_algorithm/Shor.md' },
                        { text: 'Grove', link: '/pages/quantum_algorithm/Grove.md' },
                        { text: 'Application', link: '/pages/quantum_algorithm/Application.md' },
                    ]
                },
                { text: 'Quantum Supremacy', link: '/pages/quantum_supremacy/Supremacy.md' }, 
                { text: 'Quantum Computer', link: '/pages/quantum_computer/quantum_computer.md' }, 
                { text: 'Limitation', link: '/pages/limitation/Limitation.md' }, 
                { text: 'Quiz', link: '/pages/quiz/quiz.md' },  
                { text: 'Github', link: 'https://github.com/ccjeff' },
            ],
            
            //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
            sidebar: {
                '/pages/limitation/':[         
                    {
                        title: 'Quantum Limitation', 
                        collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                        sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                        children: [
                            ['Limitation.md', 'Quantum Limitation']
                        ]
                    },
                ],
                '/pages/motivation/':[         
                    {
                        title: 'Motivation', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['Motivation.md', 'Motivation']
                        ]
                    },
                ],
                '/pages/quantum_theory/':[         
                    {
                        title: 'Quantum Theory', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['quantum_entanglement.md', 'Quantum Entanglement'],
                            ['quantum_superposition.md', 'Quantum Superposition']
                        ]
                    },
                ],
                '/pages/quantum_gate/':[         
                    {
                        title: 'Quantum Gate', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['Quantum_Gate.md', 'Quantum Gate'],
                        ]
                    },
                ],
                '/pages/quantum_supremacy/':[         
                    {
                        title: 'Quantum Supremacy', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['Supremacy.md', 'Quantum Supremacy'],
                        ]
                    },
                ],
                '/pages/quantum_computer/':[         
                    {
                        title: 'Quantum Computer', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['quantum_computer.md', 'Quantum Computer']
                        ]
                    },
                ],
                '/pages/qubit/':[         
                    {
                        title: 'Qubit', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['qubit.md', 'Qubit']
                        ]
                    },
                ],
                '/pages/quantum_algorithm/':[         
                    {
                        title: 'Quantum Algorithm', 
                        collapsable: false, 
                        sidebarDepth: 1,    
                        children: [
                            ['Grove.md', 'Grove Algorithm'], 
                            ['HHL.md', 'HHL'],
                            ['Shor.md', 'Shor Algorithm'],
                            ['Application.md', 'Application']
                        ]
                    },
                ],
                
            }
        }
    
  }