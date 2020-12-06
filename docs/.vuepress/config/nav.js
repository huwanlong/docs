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
          // { text: 'HTML', link: '/front-end/html/' },
          // { text: 'CSS', link: '/front-end/css/' },
          { text: 'JavaScript', link: 'https://wangdoc.com/javascript/' },
          { text: 'ES6', link: 'https://wangdoc.com/es6/' },
          // { text: 'TypeScript', link: '/front-end/typescript/' },
        ]
      },
      { 
        text: '框架',
        items: [
          // { text: 'Vue', link: '/front-end/vue/' },
          // { text: 'React', link: '/front-end/react/' },
          { text: '微前端', link: '/front-end/微前端/' }
        ]
      },
      { 
        text: '其它',
        items: [
          { text: 'Lodash', link: 'https://www.lodashjs.com/' },
          { text: 'Electron', link: '/front-end/electron/' },
          // { text: 'Flutter', link: '/front-end/flutter/' }
        ]
      }
    ]
  },
  // {
  //   text: 'Node.js',
  //   link: '/nodejs/',
  // },
  {
    text: 'Python',
    ariaLabel: 'Python',
    items: [
      // { text: '基础', link: '/python/base/' },
      { text: '管理包', link: '/python/管理包/anaconda.html' },
      // { text: '爬虫', link: '/python/spider/' },
      // { text: 'Flask', link: '/python/flask/' },
      { text: '数据挖掘', link: '/python/数据挖掘/' },
      { text: '机器学习', link: '/python/机器学习/' },
      // { text: '深度学习', link: '/python/深度学习/' }
    ]
  },
  {
    text: '关于我',
    link: '/about.html'
  },
  // { text: 'Github', link: 'https://github.com/huwanlong'},
]