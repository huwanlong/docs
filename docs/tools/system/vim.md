---
title: vim
---
## 命令模式

```shell
i # 进入编辑模式
w # 保存
q # 退出
! # 强制
wq a.py # 指定名字为a.py保存
syntax on # 打开语法高亮
set number # 显示行号
cc # 剪切当前行
pp # 粘贴到当前行
u # 撤销
yy # 复制当前行
dd # 删除当前行
ctrl + n # 自动补全
o # 在当前行之下新加一行，并进入插入模式
O # 在肖前行之上新加一行，并进行插入模式
```

## 编辑模式

### 光标

```shell
h # 向左
j # 向下
k # 向上
l # 向右
20j # 下跳20行
30k # 上跳30行
10gg/10G # 跳到第10行
w # 跳向下一个单词
b # 跳向上一个单词
0 # 跳到行首
$ # 跳到行尾
gg # 跳到文首
G # 跳到文末
```

### 翻页

```shell
ctrl + f # 下翻一页
ctrl + b # 上翻一页
```

### 查找

```shell
/name # 向下查找name
?name # 向上查找name
n # 下一个匹配
N # 上一个匹配
```

## 参考

[http://www.webzuan.cn/szk/9516.html](http://www.webzuan.cn/szk/9516.html)