---
title: linux
---

## 查杀进程

ps -ef | grep python
kill -9 pid

## 日志不显示

nohup python3 app.py start >/dev/null 2>&1 &

## vim

```shell
n #搜索后，下一个
```

## 解压

tar -zxvf xx.tar.gz 