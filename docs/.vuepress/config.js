const head = require('./config/head')
const plugins = require('./config/plugins')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: '走在小路上',
  description: '走在小路上的笔记',
  head,
  plugins,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/icons/apple-touch-icon.png',
    // navbar: false,
    sidebar,
    nav,
    repo: 'huwanlong/docs',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    smoothScroll: true,
    sidebarDepth: 2,
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
    evergreen: true,
    extendMarkdown: md => {
      md.set({
        html: true,
      })
      md.use(require('markdown-it-katex'))
    },
  },
}
