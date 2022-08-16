---
title: linux
---

## 查杀进程

ps -ef | grep python
kill -9 pid

## 清空回收站 

sudo rm -rf ~/.local/share/Trash/*
## 磁盘详情 

df -h

## 日志不显示

nohup python3 app.py start >/dev/null 2>&1 &

## 解压

tar -zxvf xx.tar.gz 

## 打包

### 打包目录下以`.xx`结尾的文件

tar -cvf xxx.tar *.xx

### 解压到某目录

tar -xvf %s -C %s