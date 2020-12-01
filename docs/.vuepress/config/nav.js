module.exports = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '指南',
    link: '/guide/'
  },
  {
    text: '前端',
    items: [
      { 
        text: '基础',
        items: [
          { text: 'HTML', link: '/front-end/html/' },
          { text: 'CSS', link: '/front-end/css/' },
          { text: 'JavaScript', link: '/front-end/javascript/' },
          { text: 'ES6', link: '/front-end/es6/' },
          { text: 'TypeScript', link: '/front-end/typescript/' },
          { text: 'Lodash', link: '/front-end/lodash/' }
        ]
      },
      { 
        text: '框架',
        items: [
          { text: 'Vue', link: '/front-end/vue/' },
          { text: 'React', link: '/front-end/react/' }
        ]
      },
      { 
        text: '其它',
        items: [
          { text: 'Electron', link: '/front-end/electron/' },
          { text: 'Flutter', link: '/front-end/flutter/' }
        ]
      }
    ]
  },
  {
    text: 'Node.js',
    link: '/nodejs/',
  },
  {
    text: 'Python',
    ariaLabel: 'Python',
    items: [
      { text: '基础', link: '/python/base/' },
      { text: 'Anaconda', link: '/python/anaconda/' },
      { text: '爬虫', link: '/python/spider/' },
      { text: 'Flask', link: '/python/flask/' },
      { text: '机器学习', link: '/python/machine-learning/' }
    ]
  },
  {
    text: '关于我',
    link: '/about.html'
  },
  { text: 'Github', link: 'https://github.com/huwanlong'},
]