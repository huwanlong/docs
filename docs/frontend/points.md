---
title: 知识点
---
## vue2兼容IE9-11

通过JS判断是不是IE时

```js
if ((navigator.userAgent.indexOf('compatible') > -1 && navigator.userAgent.indexOf('MSIE') > -1) || (navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1)) {
  window.location.href = '/ie.html'
}
```

通过条件注释判断是不是IE时

```html
<!--[if IE]>
	<script>window.location.href = '/ie.html'</script>
<![endif]-->
```

兼容方法在问题 [https://forum.vuejs.org/t/vue-cli-3-babel-polyfills-and-ie11/89531/5](https://forum.vuejs.org/t/vue-cli-3-babel-polyfills-and-ie11/89531/5)  的 ignotus 回答中

安装 npm install --save-dev babel-polyfill

修改babel.config.js

```js
module.exports = {
  presets: [['@vue/cli-plugin-babel/preset', { useBuiltIns: 'entry', corejs: { version: 3, proposals: true } }]]
}
```

main.js添加

```js
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```

判断IE9以下时跳转到提示页，在index.html中添加

```html
<!--[if lt IE 9]>
    <script>window.location.href = '/ie.html'</script>
<![endif]-->
```


