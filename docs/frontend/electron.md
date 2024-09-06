---
title: Electron
---

## 介绍

Electron 是由 Github 开发，用 HTML，CSS 和 Javascript 来构建跨平台桌面应用程序的一个开源库。

Electron 通过将 Chromium 和 Node.js 合并到同一个运行时环境中，并将其打包为 Mac，Windows 和 Linux 系统下的应用来实现这一目的。

### 代码

[https://gitee.com/huwanlong/electron-quick-start.git](https://gitee.com/huwanlong/electron-quick-start.git)

### 官网

[https://www.electronjs.org/](https://www.electronjs.org/)

### 特点

1. 上手简单：只要会前端的知识就可以做桌面应用
2. 跨平台：Mac，Linux，Windows
3. 自动更新

## 安装

```shell
git clone https://github.com/electron/electron-quick-start.git
cd electorn-quick-start
npm install
# 如果下载慢  npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm start
```

## 调试

Electron 分为渲染进程和主进程。

### 渲染进程

用户所看到的 web 界面就是由渲染进程描绘出来的。包括 HTML、CSS、JS。

#### 调试方法

Ctrl+Shirt+i

### 主进程

Electron 运行 package.json 的 main 脚本的进程被称为主进程。在主进程中运行的脚本通过创建 web 页面来展示用户界面。一个 Electron 应用总是有且只有一个主进程。

#### 浏览器调试方法

1. 修改 package.json 中的"electron ."为"electorn --inspect=5858 ."
2. 打开浏览器输入：chrome://inspect
3. 点击 Configure，添加 localhost:5858
4. 重启程序，在 chrome://inspect 页面的 Remote Target 中点击 inspect
5. 在 Sources 中 Ctrl+p 找到 main.js，可以点击行标进行设置断点

#### VS Code 调试方法

1. 点击 VS Code 的 Debug 按钮，创建 launch.json
2. 写入如下配置，然后 main.js 文件断点 Debug

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": ["."],
      "outputCapture": "std"
    }
  ]
}
```

## 常用 api

### 事件

#### app 常用事件

文档地址：[https://www.electronjs.org/docs/all](https://www.electronjs.org/docs/all)

- ready: 当 Electron 完成初始化时被触发
- window-all-closed: 所有窗口被关闭
- before-quit： 在应用程序开始关闭窗口之前触发
- will-quit： 当所有窗口都已关闭并且应用程序将退出时发出
- quit： 在应用程序退出时发出

#### webContents 常用事件

文档地址： [https://www.electronjs.org/docs/api/web-contents](https://www.electronjs.org/docs/api/web-contents)

- did-finish-load: 导航完成时触发，即选项卡的旋转器将停止旋转，并指派 onload 事件后。
- dom-ready: 一个框架中的文本加载完成后触发该事件。

### 进程对象

文档地址： [https://www.electronjs.org/docs/api/process](https://www.electronjs.org/docs/api/process)

可以获得系统参数，比如内存，系统版本，进程 ID 等等

在 renderer.js 中写页面的 JS 代码，为了使用 process 对象和 require，需要在 main.js 的创建窗口时，在 webPreferences 中配置 nodeIntegration: true

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <div>
      <h2>process</h2>
      <button onclick="getProcessInfo()">查看process信息</button>
    </div>

    <!-- You can also require other files to run in this process -->
    <script src="./renderer.js"></script>
  </body>
</html>
```

```javascript
function getProcessInfo() {
  console.log('getCPUUsage', process.getCPUUsage())
  console.log('env', process.env)
  console.log('arch', process.arch)
}
```

### File 对象

文档地址： [https://www.electronjs.org/docs/api/file-object](https://www.electronjs.org/docs/api/file-object)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div class="for_file_drag" id="drag_test">
      <h2>File对象</h2>
      <span>往这里拖文件</span>
    </div>
    <!-- You can also require other files to run in this process -->
    <script src="./renderer.js"></script>
  </body>
</html>
```

```javascript
const fs = require('fs')

const dragWarpper = document.getElementById('drag_test')
dragWarpper.addEventListener('drop', e => {
  e.preventDefault()
  const files = e.dataTransfer.files
  if (files && files.length > 0) {
    const path = files[0].path
    console.log('path:', path)
    const content = fs.readFileSync(path)
    console.log(content.toString())
  }
})
dragWarpper.addEventListener('dragover', e => {
  e.preventDefault()
})
```

### webview

文档地址： [https://www.electronjs.org/docs/api/webview-tag](https://www.electronjs.org/docs/api/webview-tag)

需要在 main.js 的创建窗口时，在 webPreferences 中配置 webviewTag: true

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
    <link rel="stylesheet" href="./css/styles.css" />
  </head>
  <body>
    <div>
      <h2>Webview</h2>
      <span id="loading"></span>
      <!-- preload 在网页里插入JS -->
      <webview id="wb" src="http://baidu.com/" preload="./webview_test/preload.js"></webview>
    </div>
    <!-- You can also require other files to run in this process -->
    <script src="./renderer.js"></script>
  </body>
</html>
```

```javascript
// webview 实例
const wb = document.querySelector('#wb')
const loading = document.querySelector('#loading')
wb.addEventListener('did-start-loading', () => {
  console.log('loading...')
  loading.innerHTML = 'loading...'
})
wb.addEventListener('did-stop-loading', () => {
  console.log('OK.')
  loading.innerHTML = 'OK.'
  // 插入CSS样式
  wb.insertCSS(`
    #su {
      background: red !important;
    }
  `)
  // 插入JS脚本
  wb.executeJavaScript(`
      alert(document.getElementById('su').value)
  `)
  wb.openDevTools() // 打开webview里面网页的控制台
})
```

### window-open

通过 window-open 打开一个子窗口，通过 browser-window-proxy 对子窗口进行操作

文档地址： [https://www.electronjs.org/docs/api/window-open](https://www.electronjs.org/docs/api/window-open)

[https://www.electronjs.org/docs/api/browser-window-proxy](https://www.electronjs.org/docs/api/browser-window-proxy)

```html
<!-- 创建一个文件popup_page.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>子窗口</title>
  </head>
  <body>
    <h2>这是弹出的子窗口</h2>
    <button onclick="sendMessageToParent()">向父窗口传递信息</button>
  </body>
  <script>
    function sendMessageToParent() {
      window.opener.postMessage('这是来自子窗口的问候')
      window.opener.postMessage({
        type: 1,
        message: '这是来自子窗口的问候',
      })
    }
  </script>
</html>
```

```html
<div>
  <h2>弹出子窗口</h2>
  <button onclick="openNewWindow()">弹出</button>
  <button onclick="closeWindow()">关闭</button>
</div>
```

```javascript
// window-open
let subWin
function openNewWindow() {
  // window.open('https://www.baidu.com','baidu')
  subWin = window.open('popup_page.html', 'popup')
}
function closeWindow() {
  subWin.close()
}
window.addEventListener('message', msg => {
  console.log('接收到的消息', msg)
})
```

### browser-window

文档地址： [https://www.electronjs.org/docs/api/browser-window](https://www.electronjs.org/docs/api/browser-window)

```javascript
// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false, // 不显示菜单
    show: false, // 先不显示，加载完成了之后再显示
    // backgroundColor: '#ff0000', // 背景颜色
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      nodeIntegration: true,
    },
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // 子窗口
  childWin = new BrowserWindow({
    parent: mainWindow,
    x: 0, // 坐标
    y: 0,
  })

  // 模态窗口，只能操作这个窗口，可能用来做确认框
  // childWin = new BrowserWindow({
  //   parent: mainWindow,
  //   modal: true
  // })
}
```

### BrowserView

和 webview 类似，推荐使用 webview

文档地址： [https://www.electronjs.org/docs/api/browser-view](https://www.electronjs.org/docs/api/browser-view)

```javascript
const view = new BrowserView()
view.setBounds({
  x: 10,
  y: 10,
  width: 300,
  height: 200,
})

view.webContents.loadURL('https://www.baidu.com')
mainWindow.setBrowserView(view)

setTimeout(() => {
  view.destroy()
}, 5000)
```

### Dialog

需要在 main.js 的创建窗口时，在 webPreferences 中配置 nodeIntegration: true,enableRemoteModule: true

文档地址： [https://www.electronjs.org/docs/api/dialog](https://www.electronjs.org/docs/api/dialog)

```javascript
// 主线程使用方法
const { dialog } = require('electron')
// 渲染线程使用方法
const { dialog } = require('electron').remote
```

```html
<div>
  <h2>打开文件选择框</h2>
  <button onclick="openDialog()">打开</button>
  <button onclick="saveDialog()">保存文件</button>
  <button onclick="messageDialog()">弹出消息提示</button>
</div>
```

```javascript
const { dialog } = require('electron').remote
function openDialog() {
  dialog
    .showOpenDialog({
      title: '请选择你喜欢的文件',
      buttonLabel: '走你',
      filters: [{ name: 'Custom File Type', extensions: ['js', 'html', 'json'] }],
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
}

function saveDialog() {
  dialog
    .showSaveDialog({
      title: '请选择要保存的文件名',
      buttonLabel: '保存',
      filters: [{ name: 'Custom File Type', extensions: ['js', 'html', 'json'] }],
    })
    .then(result => {
      console.log(result)
      fs.writeFileSync(result.filePath, '保存文件测试！！！')
    })
    .catch(err => {
      console.log(err)
    })
}

function messageDialog() {
  dialog
    .showMessageBox({
      type: 'warning',
      title: '您确定吗？',
      message: '您真的想要删除这条数据么？',
      buttons: ['OK', 'Cancel'],
    })
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
}
```

### 系统快捷键

文档地址： [https://www.electronjs.org/docs/api/global-shortcut](https://www.electronjs.org/docs/api/global-shortcut)

```javascript
// 主进程
app.whenReady().then(() => {
  console.log('####ready')
  createWindow()

  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  // 注册一个'CommandOrControl+X'的全局快捷键
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // 检查快捷键是否注册成功
  console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
  // 注销快捷键
  globalShortcut.unregister('CommandOrControl+X')

  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
```

```javascript
// 在渲染进程注册快捷键
const { remote } = require('electron')
remote.globalShortcut.register('CommandOrControl+G', () => {
  console.log('您按下了Ctrl + G')
})
```

### ipcMain ipcRenderer

ipcMain 从主进程到渲染进程的异步通信

文档地址： [https://www.electronjs.org/docs/api/ipc-main](https://www.electronjs.org/docs/api/ipc-main)

ipcRenderer 从渲染进程到主进程的异步通信

文档地址： [https://www.electronjs.org/docs/api/ipc-renderer](https://www.electronjs.org/docs/api/ipc-renderer)

```html
<div>
  <h2>进程之间通信</h2>
  <button onclick="sendMessageToMain()">异步发送信息给主进程</button>
  <button onclick="sendMessageToMainAync()">同步发送信息给主进程</button>
</div>
```

```javascript
const { ipcRenderer } = require('electron')
function sendMessageToMain() {
  ipcRenderer.send('send-message-to-main-test', '这是来自于渲染进程的数据666')
}
ipcRenderer.on('send-message-to-renderer-test', (event, args) => {
  console.log('渲染进程接收到的数据', args)
})
function sendMessageToMainAync() {
  console.log(ipcRenderer.sendSync('sync-message', 'ping'))
}
```

```javascript
// 主进程主动和渲染进程通信
  setTimeout(() => {
    mainWindow.webContents.send("send-message-to-renderer-test", "我是主进程，我主动和你搭讪")
  }, 5000)

....

ipcMain.on("send-message-to-main-test", (event, args) => {
  console.log("主进程接收到的数据是：", args)
  event.reply("send-message-to-renderer-test", "这是来自于主进程的问候")
})

ipcMain.on("sync-message", (event, args) =>{
  console.log("data: ", args)
  event.returnValue = 'pong'
})
```

### Menu

原生应用菜单

文档地址： [https://www.electronjs.org/docs/api/menu](https://www.electronjs.org/docs/api/menu)

[https://www.electronjs.org/docs/api/menu-item](https://www.electronjs.org/docs/api/menu-item)

```javascript
// 主进程中弹菜单，主进程很少有需求需要弹出菜单
setTimeout(() => {
  const template = [{ label: '第一个菜单' }, { label: '第二个菜单' }, { role: 'undo' }, { type: 'separator' }, { label: '第三个菜单' }, { label: '第四个菜单' }]
  const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu) 这段是改变上面的横栏的菜单
  menu.popup()
}, 2000)
```

```html
<div>
  <h2>弹出菜单</h2>
  <input type="text" />
  <button onclick="openMenu()">弹出菜单</button>
</div>
```

```javascript
// 弹出菜单
const { remote } = require('electron')
const { Menu, MenuItem } = remote
function openMenu() {
  const template = [
    { label: '第一个菜单' },
    {
      label: '点击测试',
      click: () => {
        console.log('点击事件OK')
      },
    },
    { role: 'undo' },
    { role: 'redo' },
    { label: '旅游', type: 'checkbox', checked: true },
    { label: '吃', type: 'checkbox', checked: true },
    { label: '逛街', type: 'checkbox', checked: false },
    new MenuItem({
      label: '我是menuItem生成的菜单',
      click: () => {
        console.log('您点击了menuItem的菜单')
      },
    }),
    {
      label: '子菜单测试',
      submenu: [{ label: '子菜单-1' }, { label: '子菜单-2' }, { label: '子菜单-3' }],
    },
  ]
  const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu) 这段是改变上面的横栏的菜单
  menu.popup()
}
```

### net

文档地址： [https://www.electronjs.org/docs/api/net](https://www.electronjs.org/docs/api/net)

```html
<div>
  <h2>网络</h2>
  <button onclick="accessBaidu()">访问百度</button>
</div>
```

```javascript
// 网络
const { net } = require('electron').remote
function accessBaidu() {
  const request = net.request('https://www.baidu.com')
  request.on('response', response => {
    console.log(`**statusCode:${response.statusCode}`)
    console.log(`**headers:${JSON.stringify(response.headers)}`)
    response.on('data', chunk => {
      console.log('接收到的数据：', chunk.toString())
    })
    response.on('end', () => {
      console.log('数据接收完成')
    })
  })
  request.end()
}
```

## 与高级框架结合

### react

```shell
git clone --depth 1 --single-branch --branch master https://github.com/electron-react-boilerplate/electron-react-boilerplate.git electron-react-start
cd electron-react-start
yarn
yarn dev
```

```shell
// 切换yarn淘宝源
npm install yrm -g
yrm ls
yrm use taobao
```

```shell
// 打包命令
yarn package
// 如果有需要升级的就按 yarn add electron-builder@latest 格式升级
```

### vue

```shell
npm install -g vue-cli
vue init simulatedgreg/electron-vue electron-vue-start
cd electron-vue-start
yarn
yarn dev
// 如果报process相关的错：参考 https://github.com/SimulatedGREG/electron-vue/issues/871#issuecomment-564302194 把 src/index.ejs 中 <% if (!process.browser) { %> 改成 <% if (!require('process').browser) { %>
```

```shell
// windows 无法编辑 node-sass
npm install -g node-gyp
npm install --global --production windows-build-tools
// 可以自动安装跨平台的编译器：gym
```

```shell
// 打包
yarn build
```
