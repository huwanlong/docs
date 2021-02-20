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
    text: '笔记',
    items: [
      { 
        text: '前端',
        items: [
          { text: 'Electron', link: '/front-end/electron/' },
          { text: 'webpack4', link: '/front-end/webpack4/' },
          { text: 'Vue SSR', link: '/front-end/SSR/' },
          { text: '微前端', link: '/front-end/微前端/' },
        ]
      },
      { 
        text: 'Python',
        items: [
          { text: '数据挖掘', link: '/python/数据挖掘/' },
          { text: '机器学习', link: '/python/机器学习/' },
          { text: '管理包', link: '/python/管理包/anaconda/' },
        ]
      }
    ]
  },
  {
    text: '收藏',
    items: [
      { text: '库', link: '/repository/库/' },
      { text: '网站', link: '/repository/网站/' },
      { text: '文章', link: '/repository/文章/' },
    ],
  },
  {
    text: 'Blog',
    link: '/blog/前端/'
  },
  // {
  //   text: '前端',
  //   items: [
  //     { 
  //       text: '基础',
  //       items: [
  //         // { text: 'HTML', link: '/front-end/html/' },
  //         // { text: 'CSS', link: '/front-end/css/' },
  //         { text: 'JavaScript', link: 'https://wangdoc.com/javascript/' },
  //         { text: 'ES6', link: 'https://wangdoc.com/es6/' },
  //         // { text: 'TypeScript', link: '/front-end/typescript/' },
  //       ]
  //     },
  //     { 
  //       text: '框架',
  //       items: [
  //         // { text: 'Vue', link: '/front-end/vue/' },
  //         // { text: 'React', link: '/front-end/react/' },
  //         { text: 'Electron', link: '/front-end/electron/' }
  //         // { text: 'Flutter', link: '/front-end/flutter/' }
  //       ]
  //     },
  //     { 
  //       text: '工具',
  //       items: [
  //         { text: 'webpack4', link: '/front-end/webpack4/' },
  //         { text: 'Lodash', link: 'https://www.lodashjs.com/' },
  //         // { text: 'Flutter', link: '/front-end/flutter/' }
  //       ]
  //     },
  //     { 
  //       text: '专题',
  //       items: [
  //         // { text: 'Vue', link: '/front-end/vue/' },
  //         // { text: 'React', link: '/front-end/react/' },
  //         { text: '微前端', link: '/front-end/微前端/' },
  //         { text: 'Vue SSR', link: '/front-end/SSR/' },
          
  //       ]
  //     }
  //   ]
  // },
  // {
  //   text: 'Node.js',
  //   link: '/nodejs/',
  // },
  // {
  //   text: 'Python',
  //   ariaLabel: 'Python',
  //   items: [
  //     // { text: '基础', link: '/python/base/' },
  //     { text: '管理包', link: '/python/管理包/anaconda/' },
  //     // { text: '爬虫', link: '/python/spider/' },
  //     // { text: 'Flask', link: '/python/flask/' },
  //     { text: '数据挖掘', link: '/python/数据挖掘/' },
  //     { text: '机器学习', link: '/python/机器学习/' },
  //     // { text: '深度学习', link: '/python/深度学习/' }
  //   ]
  // },
  // { text: 'Github', link: 'https://github.com/huwanlong'},
]