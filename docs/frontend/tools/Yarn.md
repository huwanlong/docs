---
title: Yarn
---

## 简介

官网：[https://yarnpkg.com/](https://yarnpkg.com/)

中文文档：[https://yarn.bootcss.com/](https://yarn.bootcss.com/)

## 安装 yarn

```shell
npm install yarn -g # 安装yarn
yarn -v # 查看版本
npm update yarn -g # 更新yarn
```

## 新建工程

```shell
yarn init
yarn init -y
```

## 安装模块

```shell
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
yarn add [package] --dev # devDependencies 简写 yarn add [package] -D
yarn add [package] --peer # peerDependencies
yarn add [package] --optiona # optionalDependencies
yarn global add [package] # 全局安装
yarn install # 安装package.json中的包，如果node_modules中有的包刚不会重新下载
yarn install --force # 强制安装package.json中的包，node_modules中有的也会安装
```

## 卸载模块

```shell
yarn remove [package]
```

## 更新模块

```shell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
yarn upgrade --latest # 忽略版本规则，升级到最新版本
```

## 查看包信息

```shell
yarn info [package]
yarn info [package] --json # 输出json格式
yarn info [package] readme # 输出README部分
```

## 查看安装信息

```shell
yarn list
yarn global list
yarn list --depth=0 # 限制依赖的深度
```

## 管理配置

```shell
yarn config
yarn config set key value # 设置
yarn config get key # 读取值
yarn config delete key # 删除
yarn config list # 显示当前配置
yarn config set registry https://registry.npm.taobao.org # 设置淘宝镜像
```

## 缓存

```shell
yarn cache
yarn cache list # 列出已缓存的每个包
yarn cache dir # 返回全局缓存位置
yarn cache clean # 清除缓存
```
