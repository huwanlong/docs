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

## 贮藏

```shell
# 【贮藏】将工作区内修改的内容存到缓冲区
git stash 
# 【弹出贮藏】将缓冲区的最新内容返回给工作区
git stash pop
```

## 代理

### 配置代理

```shell
git config --global http.proxy localhost:10809
git config --global https.proxy localhost:10809

git config http.proxy localhost:10809
git config https.proxy localhost:10809
```

### 去掉代理

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy

git config --unset http.proxy
git config --unset https.proxy
```

## 常用设置

```shell
# 设置默认用户名和密码
echo "[credential]" >> .git/config
echo "    helper = store" >> .git/config

# 区分文件名大小写
git config core.ignorecase false

# 设置全局使用提交时名字和邮箱
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"

# 未检测到此文件的改变，或者这是一个二进制文件
# 因为文件的权限发生了变化，git默认权限的改变也算文件发生了变化
git config --add core.filemode false
```
