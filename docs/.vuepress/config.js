const moment = require('moment')
moment.locale("zh-cn")

module.exports = {
  title: '走在小路上',
  description: '走在小路上的笔记',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
    ['meta', { rel: 'author', href: '走在小路上' }],
    ['meta', { rel: 'keywords', href: 'vuepress,走在小路上' }]
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
    logo: '/assets/img/logo.png',
    // navbar: false,
    sidebar: 'auto',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: '关于我',
        link: '/about.html'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
      {
        text: 'Languages',
        arialLabel: 'Language Menu',
        items: [
          {text: 'Chinese', link: ''},
          {text: 'Japanese',link:''}
        ]
      }
    ]
  }
}