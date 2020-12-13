---
title: Matplotlib
---

## 介绍

Matplotlib 是专门用于开发2D图表（包括3D图表）的python库

对应的JS库有  [D3](https://d3js.org/) echarts

官网：[Matplotlib](https://matplotlib.org/index.html)

## 三层结构

容器层

1. 画板层Canvas
2. 画布层Figure
3. 绘图层/坐标系

辅助显示层

图像层

## 折线图

```python
# 温度变化折线图
import matplotlib.pyplot as plt
%matplotlib inline
import random

# 1、准备数据
x = range(60)
y_shanghai = [random.uniform(15,18) for i in x]
y_beijing = [random.uniform(1,3) for i in x]

# 中文显示问题
plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号

# 2、创建画布
plt.figure(figsize=(20,8),dpi=80)

# 3、绘制图像
plt.plot(x, y_shanghai, color="r",linestyle='-.',label="上海")
plt.plot(x, y_beijing, color="b",label="北京")

# 显示图例
plt.legend()
# plt.legend(loc="lower left")
# plt.legend(loc=4)

# 修改x y刻度
x_label = ["11分{}秒".format(i) for i in x]
plt.xticks(x[::5],x_label[::5])
plt.yticks(range(0,40,5))

# 显示网格
plt.grid(linestyle='--', alpha=0.5)

# 添加描述 标题
plt.xlabel("时间")
plt.ylabel("温度")
plt.title("上海、北京11点0分到12点之间的温度变化图示")

# 4、显示图像
plt.show()
```

### 多坐标系

```python
figure, axes = plt.subplots(nrows=1, ncols=1, **fig_kw)
```

```python
# 温度变化折线图
import matplotlib.pyplot as plt
%matplotlib inline
import random

# 1、准备数据
x = range(60)
y_shanghai = [random.uniform(15,18) for i in x]
y_beijing = [random.uniform(1,3) for i in x]

# 2、创建画布
# plt.figure(figsize=(20,8),dpi=80)
figure, axes = plt.subplots(nrows=1,ncols=2,figsize=(20,8),dpi=80)

# 3、绘制图像
axes[0].plot(x, y_shanghai, color="r",linestyle='-.',label="上海")
axes[1].plot(x, y_beijing, color="b",label="北京")

# 显示图例
axes[0].legend()
axes[1].legend()
# plt.legend(loc="lower left")
# plt.legend(loc=4)

# 修改x y刻度
x_label = ["11分{}秒".format(i) for i in x]
axes[0].set_xticks(x[::5])
axes[0].set_xticklabels(x_label[::5])
axes[0].set_yticks(range(0,40,5))
axes[1].set_xticks(x[::5])
axes[1].set_xticklabels(x_label[::5])
axes[1].set_yticks(range(0,40,5))

# 显示网格
axes[0].grid(linestyle='--', alpha=0.5)
axes[1].grid(linestyle='--', alpha=0.5)

# 添加描述 标题
axes[0].set_xlabel("时间")
axes[0].set_ylabel("温度")
axes[0].set_title("上海11点0分到12点之间的温度变化图示")

axes[1].set_xlabel("时间")
axes[1].set_ylabel("温度")
axes[1].set_title("北京11点0分到12点之间的温度变化图示")

# 4、显示图像
plt.show()
```

### 数学函数

```python
import matplotlib.pyplot as plt
%matplotlib inline
import numpy as np

# 1、准备x、y数据
x = np.linspace(-1,1,1000)
y = 2 * x * x

# 2、创建画布
plt.figure(figsize=(20,8), dpi=80)

# 3、绘制图像
plt.plot(x, y)

plt.grid(linestyle="--",alpha=0.5)

plt.show()
```

