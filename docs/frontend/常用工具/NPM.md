---
title: NPM
---

官网：[https://www.npmjs.com/](https://www.npmjs.com/)

## 更新npm

```shell
# 版本
npm -v
# 更新
npm install npm -g
```

## 安装模块

```shell
npm install <Module Name> # 本地安装
npm install <Module Name> -g   # 全局安装
npm install # 安装package.json中的包，如果node_modules中有的包刚不会重新下载
npm install --force # 强制安装package.json中的包，node_modules中有的也会安装
```

如果出现以下错误

```shell
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决方法

```shell
npm config set proxy null
```

## 查看安装信息

```shell
npm list -g # 查看所有全局安装的模块
npm list # 查看安装的模块
npm list <Module Name> # 查看模块版本号
```

## 卸载模块

```shell
npm uninstall <Module Name>
```

## 更新模块

```shell
npm update <Module Name>
```

## 搜索模块

```shell
npm search <Module Name>
```

## 管理配置

```shell
npm config set key value # 设置
npm config get key # 读取值
npm config delete key # 删除
npm config list # 显示当前配置
npm config set registry https://registry.npm.taobao.org # 设置淘宝镜像
```



## 创建模块

```shell
npm init # 创建模块，生成package.json文件
# 如果要发布到npm
npm adduser # 如果没有npm账号，先创建
npm login # 如果有npm账号，先登录
npm publish # 发布模块到npm
```

## 版本号

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。

## 其它常用命令

```shell
npm help <command> # 查看某条命令的详细帮助
npm cache clear # 可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人
npm unpublish <package>@<version> # 可以撤销发布自己发布过的某个版本代码
```

## cnpm 

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org # 安装cnpm，使用淘宝镜像
cnpm install <Module Name> # 使用cnpm
```

## nrm

nrm(npm registry manager)是npm的镜像源管理工具

```shell
npm install -g nrm # 全局安装nrm
nrm ls # 查看源列表
nrm use <registry> # 切换源
nrm add <registry> <url> # 注册源
nrm del <registry> # 删除源
nrm test <registry> # 测试源
```

## rimraf

node环境下模拟`rm -rf`命令，可以用来快速删除node_modules文件夹

```shell
npm install -g rimraf # 全局安装
rimraf node_modules
```

