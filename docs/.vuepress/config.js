const moment = require('moment')
moment.locale("zh-cn")

module.exports = {
  title: '走在小路上',
  description: '走在小路上的笔记',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { rel: 'author', href: '走在小路上' }],
    ['meta', { rel: 'keywords', href: '前端、Vue、Node.js、Python' }]
  ],
  plugins:[
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss")
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/apple-touch-icon.png',
    // navbar: false,
    sidebar: 'auto',
    nav: [
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
              { text: 'TypeScript', link: '/front-end/typescript/' }
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
          { text: '爬虫', link: '/python/spider/' },
          { text: 'Flask', link: '/python/flask/' },
          { text: '人工智能', link: '/python/machine-learning/' }
        ]
      },
      {
        text: '关于我',
        link: '/about.html'
      },
      { text: 'Github', link: 'https://github.com/huwanlong'},
    ]
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    evergreen: true
  }
}