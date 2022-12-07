---
title: nvm
---

## 简介

nodejs 的版本管理工具，下载 nvm-setup.zip 包安装

下载地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

## 常用命令

```shell
nvm list [available] # 查看本地安装的所有版本；有可选参数available，显示所有可下载的版本
nvm install 11.13.0 # 安装，命令中的版本号可自定义，具体参考上一命令查询出来的列表
nvm use 11.13.0 # 切换版本
nvm uninstall 11.13.0 # 卸载
```

## 命令

```shell
nvm arch # 显示node是运行在32位还是64位。

nvm install <version> [arch] # 安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。

nvm list [available] # 显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。

nvm on # 开启node.js版本管理。

nvm off # 关闭node.js版本管理。

nvm proxy [url] # 设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。

nvm node_mirror [url] # 设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。

nvm npm_mirror [url] # 设置npm镜像。默认是https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。

nvm uninstall <version> # 卸载指定版本node。

nvm use [version] [arch] # 使用制定版本node。可指定32/64位。

nvm root [path] # 设置存储不同版本node的目录。如果未设置，默认使用当前目录。

nvm version # 显示nvm版本。version可简化为v。
```

## 报错

```shell
exit status 5: 乱码
exit status 1: 乱码
```

解决方法

使用管理员运行cmd执行命令

## 参考

[https://www.cnblogs.com/gaozejie/p/10689742.html](https://www.cnblogs.com/gaozejie/p/10689742.html)

[https://www.cnblogs.com/MrWangHao/p/14445715.html](https://www.cnblogs.com/MrWangHao/p/14445715.html)
