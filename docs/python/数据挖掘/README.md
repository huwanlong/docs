---
title: 概述
---
## 代码地址

[https://gitee.com/workbook/data-mining.git](https://gitee.com/workbook/data-mining.git)

## 库的安装

1. matplotlib 可视化
2. numpy    数据计算
3. pandas   数据处理
4. TA-Lib    股票技术分析指标库
5. tables     hdf5文件
6. jupyter    数据分析与展示的平台     # conda install jupyter notebook 或 conda install nb_conda

ps: 如果TA-Lib在win系统上无法下载，可以到下面的地址去下载

[https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ta-lib)

## jupyter  notebook使用

```
jupyter notebook
# 或
ipython notebook
```

打开 [http://localhost:8888/](http://localhost:8888/)

```shell
# 改成中文 修改用户的环境变量LANG为zh_CN.UTF8
set LC_ALL=zh_CN.UTF-8
```

### cell

一对In Out会话被视作一个代码单元，称为cell

编辑模式：

- enter
- 鼠标直接点

命令模式：

- esc
- 鼠标在本单元格之外点一下

快捷键操作

- 执行代码：shift + enter

命令模式：

- A，在当前cell的上面添加cell
- B，在当前cell的下面添加cell
- 双击D：删除当前cell
- y or m 切换 code 和 markdown

编辑模式：

- 多光标操作：Ctrl键点击鼠标
- 回退：Ctrl+Z
- 补全代码：变量、方法后跟Tab键
- 为一行或多行代码添加/取消注释：Ctrl+/