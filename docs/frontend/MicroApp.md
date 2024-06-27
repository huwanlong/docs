---
title: 微前端
---

## 什么是微前端？

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

## 为什么要用微前端？

### 应用场景

1. 解决巨石应用的问题
   随着一个项目的发展，代码越来越多，项目向着巨石应用方向发展，前端可能出现的问题

   - 部署网站的时候，部署一次需要把整个网站都部署了，打包越来越慢；
   - 部署升级麻烦，一些插件的升级和公共组件的修改需要考虑的更多，很容易牵一发而动全身；
   - 项目太大，参与人员越多，代码规范比较难管理，代码冲突也频繁。

   把一个巨石应用拆分成一个个的小项目，这些小项目独立开发部署，又可以自由组合成一个或多个大项目。

2. 合并多个项目
   需要的功能在另一个项目中已经实现，考虑到整个功能的升级，使用的技术不一样等因素，直接拷过来不合适

3. 多个小功能需要根据需求自由组合成一个大项目

4. 项目升级改版，不可能一次都换成新版，风险太大

### 使用的好处

1. 技术栈无关，各个子项目可以自由选择框架，可以自己制定开发规范。
2. 快速打包，独立部署，互不影响，升级简单。
3. 可以很方便的复用已有的功能模块，避免重复开发。

## 如何实现微前端？

### iframe

常见问题

1. 数据传输的不便，一些数据无法共享（主要是本地存储、全局变量和公共插件），两个项目不同源（跨域）情况下数据传输需要依赖 `postMessage`
2. `iframe` 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载，阻塞 `onload` 事件
3. `iframe` 必须给一个指定的高度，否则会塌陷。子页面需要实时计算高度发送给父页面
4. 弹窗居中，解决方法：调用父窗口的弹窗或去掉遮罩层，重新计算位置
5. 全屏显示，解决方法：`iframe` 标签设置 `allow="fullscreen"` 属性
6. `iframe` 和主页面共用一个浏览历史，会影响页面的前进后退；且`iframe` 页面刷新会重置
7. `iframe` 加载失败的情况不好处理，非同源的 `iframe` 在火狐及 `chorme` 中都不支持 `onerror` 事件。

### single-spa

[文档](https://zh-hans.single-spa.js.org/docs/getting-started-overview)

#### 父应用

[代码地址](https://gitee.com/workbook/parent-vue.git)

安装：`yarn add single-spa`

`src/router/index.js`

```javascript
const router = new VueRouter({
  mode: 'history',
  routes,
})
```

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerApplication, start } from 'single-spa'

const loadScript = async url => {
  await new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

Vue.config.productionTip = false

/**
 * singleSpa 缺陷
 * 1、不够灵活，不能动态加载JS文件
 * 2、样式不隔离，没有JS沙箱的机制
 */
registerApplication(
  'myVueApp',
  async () => {
    console.log('加载模块')
    await loadScript('http://localhost:10001/js/chunk-vendors.js')
    await loadScript('http://localhost:10001/js/app.js')
    return window.singleVue
  },
  location => location.pathname.startsWith('/vue'), // 用户切换到/vue的路径下，需要加载子应用
)
start()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```

`src/App.vue`

```vue
<template>
  <div id="app">
    <router-link to="/vue">加载vue应用</router-link>
    <!-- 子应用加载的位置 -->
    <div id="vue"></div>
  </div>
</template>
```

#### 子应用

[代码地址](https://gitee.com/workbook/child-vue.git)

安装：`yarn add single-spa-vue`

`src/router/index.js`

```javascript
const router = new VueRouter({
  mode: 'history',
  base: '/vue',
  routes,
})
```

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

const appOptions = {
  el: '#vue', // 挂载到父应用中的id为vue的标签中
  router,
  store,
  render: h => h(App),
}
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions,
})

// 如果父应用引用
if (window.singleSpaNavigate) {
  // eslint-disable-next-line
  __webpack_public_path__ = 'http://localhost:10001/'
}

if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

// 协议接入 我定好了协议 父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount

// 我们需要父应用加载子应用，将子应用打包成一个个的lib去给父应用使用

// bootstrap mount unmount
// single-spa / single-spa-vue
```

`vue.config.js`

```javascript
module.exports = {
  configureWebpack: {
    output: {
      library: 'singleVue',
      libraryTarget: 'umd',
    },
    devServer: {
      port: 10001,
    },
  },
}
```

#### 缺陷

1. 不够灵活，不能动态加载 JS 文件
2. 样式不隔离，没有 JS 沙箱的机制

### `qiankun`

[文档](https://qiankun.umijs.org/zh)

#### 基座应用

[代码地址](https://gitee.com/workbook/qiankun-base.git)

安装：`npm i qiankun -S`

`src/router/index.js`

```javascript
const router = new VueRouter({
  mode: 'history',
  routes,
})
```

`src/main.js`

```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start } from 'qiankun'

Vue.use(ElementUI)
Vue.config.productionTip = false

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）fetch
    container: '#vue',
    activeRule: '/vue',
    props: { router, store },
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态的执行（子应用必须支持跨域）fetch
    container: '#react',
    activeRule: '/react',
  },
]
registerMicroApps(apps) // 注册应用
start() // 启动应用
// start({ prefetch: false }) // 取消预加载
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```

`src/App.vue`

```vue
<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <!-- 引用其他子应用 -->
      <el-menu-item index="/vue">vue应用</el-menu-item>
      <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view />
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>
```

#### 子应用（Vue）

[代码地址](https://gitee.com/workbook/qiankun-vue.git)

`src/router/index.js`

```javascript
const router = new VueRouter({
  mode: 'history',
  base: '/vue',
  routes,
})
```

`src/main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null
function render(props = {}) {
  instance = new Vue({
    router,
    store,
    render: h => h(App),
    data() {
      return {
        parentRouter: props.router ? props.router : {},
        parentStore: props.store ? props.store : {},
      }
    },
  }).$mount('#app') // 这里是挂载到自己的html中的 基座会拿到这个挂载后的html将其插入进去
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(props) {
  console.log(props)
}
export async function mount(props) {
  render(props)
}
export async function unmount(props) {
  instance.$destroy()
}
```

`vue.config.js`

```javascript
module.exports = {
  devServer: {
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
    },
  },
}
```

##### 使用基座的 router、Vuex

```javascript
this.$root.parentRouter.push('/test') // 跳转到基座应用的/test页面
console.log(this.$root.parentStore.state.token)
this.$root.parentStore.commit('SET_TOKEN', 'admin change')
```

#### 子应用（React）

[代码地址](https://gitee.com/workbook/qiankun-react.git)

`src/index.js`

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export async function bootstrap() {}
export async function mount() {
  render()
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
```

`src/App.js`

```javascript
import { BrowserRouter, Route, Link } from 'react-router-dom'
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/react' : ''
function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Route path="/" exact render={() => <h1>hello home</h1>}></Route>
      <Route path="/about" render={() => <h1>hello about</h1>}></Route>
    </BrowserRouter>
  )
}

export default App
```

`config-overrides.js`

```javascript
module.exports = {
  webpack: config => {
    config.output.library = 'reactApp'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = 'http://localhost:20000/'
    return config
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      }
      return config
    }
  },
}
```
