---
title: git
---

### git clone 其他分支到某个目录

git clone -b 'dev' https://xxx.com/yyy.git dirName

### git 设置默认用户名和密码

```shell
echo "[credential]" >> .git/config
echo "    helper = store" >> .git/config
```

`参考：https://blog.csdn.net/weixin_34401479/article/details/91703949`

### 代理

需要配置git代理
git config --global http.proxy localhost:1080
git config --global https.proxy localhost:1080
否则去掉git代理
git config --global --unset http.proxy
git config --global --unset https.proxy

