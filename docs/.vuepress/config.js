const moment = require('moment')
moment.locale("zh-cn")

module.exports = {
  title: '走在小路上',
  description: '走在小路上的笔记',
  head: [
    ['meta', { rel: 'author', href: '走在小路上' }],
    ['meta', { rel: 'keywords', href: '前端、Vue、Node.js、Python' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0aa' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins:{
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format("YYYY-MM-DD HH:mm:ss")
      }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'huwanlong',
      repo: 'docs',
      clientId: '95f98d463e55a2e2a0c2',
      clientSecret: '0331c9f383b4f18d1e2a5fed26cdce59d1732447',
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics':
    {
      'ga': 'UA-35557650-1' // UA-00000000-0
    }
  },
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/icons/apple-touch-icon.png',
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
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    evergreen: true,
    extendMarkdown: md => {
      md.set({
          html: true
      })
      md.use(require('markdown-it-katex'))
    }
  }
}