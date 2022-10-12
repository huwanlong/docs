---
title: linux
---

## 查杀进程

```shell
ps -ef | grep python
kill -9 pid
```

## 清空回收站 

```shell
sudo rm -rf ~/.local/share/Trash/*
```

## 磁盘详情 

```shell
df -h
```

## 日志不显示

```shell
nohup python3 app.py start >/dev/null 2>&1 &
```

## 解压

```shell
tar -zxvf xx.tar.gz 
```

## 打包解包

```shell
tar -cvf xxx.tar *.xx # 打包目录下以`.xx`结尾的文件
tar -xvf %s -C %s # 解包到某目录
```

## SSH远程拷贝文件

```shell
scp root@192.168.167.131:/home/root/dome.png /home/user/  
scp -r root@192.168.167.131:/home/root/test home/user/  
scp /home/user/dome.png root@192.168.167.131:/home/root/ 
scp -r /home/user/test root@192.168.167.131:/home/root/  
```

## screen

```shell
sudo apt-get install screen # 安装
screen python demo.py # 使用
screen -S test_screen # 创建新进程
screen -ls # 打印所有screen进程
screen -r test_screen # 进入screen
ctrl + a + d # 退出
```



