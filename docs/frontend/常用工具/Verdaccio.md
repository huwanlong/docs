---
title: Verdaccio
---
##  简介
用来搭建npm私服
[https://github.com/verdaccio/verdaccio](https://github.com/verdaccio/verdaccio)
## 安装
```shell
npm install -g verdaccio --unsafe-perm
```
安装之后，修改文件 C:\Users\Administrator\AppData\Roaming\verdaccio\config.yaml，如果没有找个该文件，可以先启动一下verdaccio，该文件就会出现了

```shell
verdaccio # 启动
```

在config.yaml文件末尾添加listen: 0.0.0.0:4873，配置此选项则是允许任何外部的所有IP都可以访问到此服务

```shell
listen: 0.0.0.0:4873
```

修改storage参数为准备存储npm包的目录

```shell
storage: D:/npm-repo
```

配置uplinks，当本地没有这个版本的包时，就会到unlinks配置的地址去下载

```shell
uplinks:
  npmjs:
    url: https://registry.npm.taobao.org/
```

重新启动verdaccio，打开地址如 http://10.2.101.151:4873/可以看到管理页面

## 切换源

使用nrm切换源

```shell
nrm add local http://local:4873  #添加源
nrm use local # 切换源
npm adduser # 添加用户
```

## 使用

创建一个新项目，通过npm init初始化，然后登录，提交代码

```shell
npm login # 登录
npm publish # 提交
```


## 参考
[https://blog.csdn.net/sunxiaoju/article/details/88565353](https://blog.csdn.net/sunxiaoju/article/details/88565353)