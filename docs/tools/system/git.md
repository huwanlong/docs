---
title: git
---

## git clone 其他分支到某个目录

```shell
git clone -b 'dev' https://xxx.com/yyy.git dirName
```

## 设置项目默认用户名和密码

```shell
echo "[credential]" >> .git/config
echo "    helper = store" >> .git/config
```

> 参考：https://blog.csdn.net/weixin_34401479/article/details/91703949

## 代理

### 配置代理

```shell
git config --global http.proxy localhost:1080
git config --global https.proxy localhost:1080
```

### 去掉代理

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 设置全局使用提交时名字和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
```



