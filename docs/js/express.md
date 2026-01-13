---
title: Express
---

## 文档

[expressjs](https://expressjs.com/zh-cn/)

## 入门

### 安装启动

```shell
npm init
npm install express
```

创建app.js

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

启动

```shell
node app.js
```

### 生成器

```shell
npx express-generator --view=pug demo02
```

### 基本路由

```shell
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

### 静态文件

```shell
app.use('/static', express.static(__dirname + '/public'));
```