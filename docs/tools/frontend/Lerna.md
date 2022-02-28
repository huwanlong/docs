---
title: Lerna
---

## 简介

lerna是GitHub上面开源的一款js代码库管理软件， 用来对一系列相互耦合比较大、又相互独立的js git库进行管理。

## 基础

```shell
npm i -g lerna # 安装
lerna init # 一个目录下初始化
```

安装之后目录

```shell
packages/ # 保存多包的目录
package.json
lerna.json
```

## 管理模式

使用lerna管理项目时，可以选择两种模式。

### 固定模式

默认的为固定模式(Fixed mode)，当使用lerna init命令初始化项目时，就默认为固定模式，也可以使用 lerna init --independent 命令初始化项目，这个时候就为独立模式(Independent mode)。
 固定模式中，packages下的所有包共用一个版本号(version)，会自动将所有的包绑定到一个版本号上(该版本号也就是lerna.json中的version字段)，所以任意一个包发生了更新，这个共用的版本号就会发生改变。

### 独立模式

独立模式允许每一个包有一个独立的版本号，在使用lerna publish命令时，可以为每个包单独制定具体的操作，同时可以只更新某一个包的版本号。此种模式时，lerna.json中的version字段指定为`independent`即可。

## lerna.json解析

```json
{
  "version": "1.1.3",
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": [
        "ignored-file",
        "*.md"
      ]
    },
    "bootstrap": {
      "ignore": "component-*",
      "npmClientArgs": ["--no-package-lock"]      
    }
  },
  "packages": ["packages/*"]
}
```

- version , 当前库的版本
- npmClient , 允许指定命令使用的client， 默认是 npm， 可以设置成 yarn
- command.publish.ignoreChanges ， 可以指定那些目录或者文件的变更不会被publish
- command.bootstrap.ignore ， 指定不受 bootstrap 命令影响的包
- command.bootstrap.npmClientArgs ， 指定默认传给 lerna bootstrap 命令的参数
- command.bootstrap.scope ， 指定那些包会受 lerna bootstrap 命令影响
- packages ， 指定包所在的目录

## 常用命令

### lerna publish 

发布新的库版本

```shell
lerna publish  # 发布最新commit的修改
lerna publish <commit-id> # 发布指定commit-id的代码
```

### lerna version

- 识别出修改的包
- 创建新的版本号
- 修改package.json
- 提交修改 打上版本的tag
- 推送到git上

### lerna bootstrap

- 为每个包安装依赖
- 链接相互依赖的库到具体的目录
- 执行 npm run prepublish
- 执行 npm run prepare

### lerna list

列举当前lerna 库包含的包

### lerna changed

显示自上次relase tag以来有修改的包

### lerna diff

显示自上次relase tag以来有修改的包的差异， 执行 git diff

### lerna exec

在每个包目录下执行任意命令

```shell
lerna exec -- rm -rf ./node_modules # 删除每个目录下的node_modules
```

### lerna run

执行每个包package.json中的脚本命令

### lerna init

创建一个新的lerna库或者是更新lerna版本

- 修改package.json中lerna版本
- 创建lerna.json

### lerna add

添加一个包的版本为各个包的依赖

### lerna clean

删除各个包下的node_modules

### lerna import

导入指定git仓库的包作为lerna管理的包

```shell
lerna import <path-to-external-repository>
```

### lerna link

链接互相引用的库

### lerna create

新建包

```shell
lerna create <name>
```

## 参考

[https://www.jianshu.com/p/2f9c05b119c9](https://www.jianshu.com/p/2f9c05b119c9)

[https://www.jianshu.com/p/8b7e6025354b](https://www.jianshu.com/p/8b7e6025354b)