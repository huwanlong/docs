---
title: 服务端渲染
---

## 代码地址

[https://gitee.com/huwanlong/Demo-SSR.git](https://gitee.com/huwanlong/Demo-SSR.git)

## 为什么使用服务端渲染

1. 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。

2. 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。

## 预渲染

如果你调研服务器端渲染 (SSR) 只是用来改善少数营销页面（例如 `/`, `/about`, `/contact` 等）的 SEO，那么你可能需要**预渲染**。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。

如果你使用 webpack，你可以使用 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) 轻松地添加预渲染。

vue init webpack prerender-spa

npm install prerender-spa-plugin -D

npx cross-env PUPPETEER_DOWNLOAD_HOST=https://npm.taobao.org/mirrors/ npm install prerender-spa-plugin -D

```javascript
// build/webpack.prod.conf.js

const PrerenderSpaPlugin = require('prerender-spa-plugin')
//调用渲染器
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer


plugins: [
    ...
    // 预渲染插件配置
    new PrerenderSpaPlugin({
      staticDir:path.join(__dirname,'../dist'),
      routes:['/about','/test'],
      // 这个配置很重要，如果没有这个配置，也不会进行预编译
      renderer:new Renderer({
        inject:{
          foo:"far"
        },
        headless:false,
        // 在项目的入口中使用 document.dispatchEvent(new Event('render-event'))
        renderAfterDocumentEvent:'render-event'
      })
    }),
    ...
]

```

```javascript
// main.js
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
})
```

npm run build

hs -o -p 9999

## 服务端渲染

Vue.js 是构建客户端应用程序的框架，默认情况下，可以在浏览器中输出 Vue 组件，进而生成 DOM 和操作 DOM，然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记“激活”为客户端上完全可交互的应用程序。

<img :src="$withBase('/assets/img/2-1.png')" alt="2-1" class="custom">

npm init -y

npm i vue express vue-server-renderer -S

```javascript
// server.js
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

const app = new Vue({
  template: '<div>hello</div>',
})

// 服务器端渲染的核心就在于
// 通过vue-server-renderer插件的renderToString()方法，将vue实例转换为字符串插入到html文件中
server.get('/', (req, res) => {
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})
server.listen(8080)
```

实际上我们第一次在浏览器输入 URL，并且得到返回页之后，所有的操作仍然是单页面应用在控制。我们所做的服务端渲染，只是在平时返回的单页面应用 HTML 上增加了对应路由的页面信息，好让爬虫获取到而已

明白了这一点，就可以将项目一分为二，也就是分为服务端渲染和客户端渲染。服务端渲染就是上面所做的，根据 VUE 实例获取对应路由的 seo 信息，然后添加到返回的单页面 HTML 上；

### 优点

1、更好的 SEO，搜索引擎爬虫抓取工具可以直接查看完全渲染的页面

2、更快的内容到达时间，用户将会更快速地看到完整渲染的页面，提升用户体验

### 缺点

1、开发条件有限，要使用通用代码

2、构建设置和部署更麻烦

3、更多的服务端负载

npm install vue-server-renderer -S

### 服务端渲染代码

```javascript
// build/webpack.server.conf.js

const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
module.exports = merge(base, {
  target: 'node',
  entry: './src/entry-server.js',
  output: {
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [],
})
```

```javascript
// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Test from '@/components/Test'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/test',
        name: 'Test',
        component: Test,
      },
    ],
  })
}
```

```javascript
// main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 单例
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// 工厂
export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    components: { App },
    template: '<App/>',
  })
  return { app }
}
```

```javascript
// entry-server.js
import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app } = createApp()
    const router = app.$router

    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // 更改路由
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      resolve(app)
    }, reject)
  })
}
```

```javascript
// package.json

"server": "webpack --config build/webpack.server.conf.js"
```

### 客户端渲染代码

```javascript
// src/entry-client.js
import { createApp } from '../src/main'

const { app } = createApp()
const router = app.$router

// 绑定app根元素
window.onload = function() {
  app.$mount('#app')
}
```

```javascript
// build/webpack.client.conf.js
const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
    filename: 'bundle.client.js',
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
      },
    ],
  },
}
```

```javascript
//server.js
const Vue = require('vue')
const exp = require('express')
const server = exp()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']

// 设置静态资源目录
server.use('/', exp.static(__dirname + '/dist'))
const clientBundleFileUrl = '/bundle.client.js'

// const app = new Vue({
//   template:'<div>hello</div>'
// })

// 服务器端渲染的核心就在于
// 通过vue-server-renderer插件的renderToString()方法，将vue实例转换为字符串插入到html文件中
server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(
    app => {
      renderer.renderToString(app, (err, html) => {
        if (err) {
          res.status(500).end('Internal Server Error')
          return
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>SSR</title></head>
          <script src="${clientBundleFileUrl}"></script>
          <body>${html}</body>
        </html>
      `)
      })
    },
    err => {
      if (err.code === 404) {
        res.status(404).end('404')
      }
    },
  )
})
server.listen(9999, () => {
  console.log('服务器已启动！')
})
```

```shell
npm run server
npm run client
nodemon server.js
```

### 如何处理请求接口

如果页面有数据是请求的接口的呢？

把接口数据放到 store 里面，然后在 HTML 页面加一个**INITIAL_STATE**,在 entry-client.js 里处理，把数据放到客户端实例 store 里

```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore() {
  let store = new Vuex.Store({
    state: {
      homeInfo: '',
    },
    mutations: {
      setHomeInfo(state, res) {
        state.homeInfo = res
      },
    },
    actions: {
      getHomeInfo({ commit }) {
        return axios.get('http://localhost:9999/api/getHomeInfo').then(res => {
          commit('setHomeInfo', res.data)
        })
      },
    },
  })
  return store
}
```

```vue
// Home.vue
<template>
  <div>
    我是首页
    <router-link to="/test">测试</router-link>
    <div>{{ homeInfo }}</div>
  </div>
</template>

<script>
export default {
  serverRequest(store) {
    return store.dispatch('getHomeInfo')
  },
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo
    },
  },
}
</script>

<style></style>
```

```javascript
// main.js
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

export function createApp() {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    components: { App },
    template: '<App/>',
  })
  return { app }
}
```

```javascript
// build/entry-server.js

import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app } = createApp()
    const router = app.$router

    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // 更改路由
    router.push(url)

    router.onReady(() => {
      // 获取相应路由下的组件
      const matchedComponents = router.getMatchedComponents()

      // 没有路由匹配 返回404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      // resolve(app)

      // 遍历路由下所有的组件，如果有需要服务端渲染的请求，则进行请求
      Promise.all(
        matchedComponents.map(component => {
          if (component.serverRequest) {
            // 组件中如果有serverRequest对象 判断是否需要服务端请求数屈打成招，并传入一个store参数
            return component.serverRequest(app.$store)
          }
        }),
      )
        .then(() => {
          context.state = app.$store.state
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
```

```javascript
// build/entry-client.js
import { createApp } from '../src/main'

const { app } = createApp()
const router = app.$router

if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__)
}

// 绑定app根元素
window.onload = function() {
  app.$mount('#app')
}
```

```javascript
// server.js
const Vue = require('vue')
const exp = require('express')
const server = exp()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']

// 设置静态资源目录
server.use('/', exp.static(__dirname + '/dist'))
const clientBundleFileUrl = '/bundle.client.js'

server.get('/api/getHomeInfo', (req, res) => {
  res.send('SSR发送请求了')
})

// const app = new Vue({
//   template:'<div>hello</div>'
// })

// 服务器端渲染的核心就在于
// 通过vue-server-renderer插件的renderToString()方法，将vue实例转换为字符串插入到html文件中
server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(
    app => {
      let state = JSON.stringify(context.state)
      renderer.renderToString(app, (err, html) => {
        if (err) {
          res.status(500).end('Internal Server Error')
          return
        }
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>SSR</title></head>
          <script>window.__INITIAL_STATE__=${state}</script>
          <script src="${clientBundleFileUrl}"></script>
          <body>${html}</body>
        </html>
      `)
      })
    },
    err => {
      if (err.code === 404) {
        res.status(404).end('404')
      }
    },
  )
})
server.listen(9999, () => {
  console.log('服务器已启动！')
})
```
