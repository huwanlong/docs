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
# 提交到test分支
git push origin test
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

## 设置全局使用提交时名字和邮箱

```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
```
