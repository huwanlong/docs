---
title: 概述
---

## 资料

视频：[BiliBili](https://gitee.com/workbook/data-mining.git)

资料：[百度网盘](https://pan.baidu.com/s/1l5J_Lu5AjJU81qnM45RMQg?pwd=zsl2)

代码：[Gitee](https://gitee.com/workbook/data-mining.git)

## 库的安装

1. matplotlib 可视化
2. numpy 数据计算
3. pandas 数据处理
4. TA-Lib 股票技术分析指标库
5. tables hdf5 文件
6. jupyter 数据分析与展示的平台 # conda install jupyter notebook 或 conda install nb_conda

ps: 如果 TA-Lib 在 win 系统上无法下载，可以到下面的地址去下载

[https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib)

## jupyter notebook 使用

### 启动

最好是在conda的base环境里启动

```
jupyter notebook
# 或
ipython notebook
```

打开 [http://localhost:8888/](http://localhost:8888/)


### 切换内核

```shell
# 在需要新加入的环境里安装ipykernel
conda activate machine
conda install ipykernel
python -m ipykernel install --user --name [Your enviroment name] --display-name "[Name you want to show in jupyter]"
# 如
python -m ipykernel install --user --name machine --display-name machine
# 切换到base环境启动jupyter notebook
conda activate base
jupyter notebook
# 然后 在 内核->更换内核里切换

# 如果需要删除内核
jupyter kernelspec list # 查看内核列表
jupyter kernelspec remove machine # 删除名为machine的内核
```

### cell使用

一对 In Out 会话被视作一个代码单元，称为 cell

编辑模式：

- enter
- 鼠标直接点

命令模式：

- esc
- 鼠标在本单元格之外点一下

快捷键操作

- 执行代码：shift + enter

命令模式：

- A，在当前 cell 的上面添加 cell
- B，在当前 cell 的下面添加 cell
- 双击 D：删除当前 cell
- y or m 切换 code 和 markdown

编辑模式：

- 多光标操作：Ctrl 键点击鼠标
- 回退：Ctrl+Z
- 补全代码：变量、方法后跟 Tab 键
- 为一行或多行代码添加/取消注释：Ctrl+/

### 其它
```shell
# 改成中文 修改用户的环境变量LANG为zh_CN.UTF8
set LC_ALL=zh_CN.UTF-8
```