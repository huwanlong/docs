---
title: git
---
## 分支操作
```shell
# 将dev分支拉下来
git clone -b dev https://xxx.com/yyy.git dirName
# 列出所有分支
git branch -a
# 创建分支
git branch test
# 切换分支
git checkout test
# 提交到test分支，第一次要如此操作，以后就可以git push了
git push --set-upstream origin test
# 删除分支
git branch -d test
# 强制删除分支
git branch -D test
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
git config --global http.proxy localhost:10809
git config --global https.proxy localhost:10809
```

### 去掉代理

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 区分文件名大小写

```shell
git config core.ignorecase false
```

## 设置全局使用提交时名字和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
```

## 未检测到此文件的改变，或者这是一个二进制文件

```shell
# 因为文件的权限发生了变化，git默认权限的改变也算文件发生了变化
git config --add core.filemode false
```

