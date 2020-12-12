---
title: Matplotlib
---

## 介绍

Matplotlib 是专门用于开发2D图表（包括3D图表）的python库

对应的JS库有  [D3](https://d3js.org/) echarts

## 三层结构

容器层

1. 画板层Canvas
2. 画布层Figure
3. 绘图层/坐标系

辅助显示层

图像层

## 折线图

```python
# 温度变化拆线图
import matplotlib.pyplot as plt
%matplotlib inline
import random

# 1、准备数据
x = range(60)
y_shanghai = [random.uniform(15,18) for i in x]

# 中文显示问题
plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号

# 2、创建画布
plt.figure(figsize=(20,8),dpi=80)

# 3、绘制图像
plt.plot(x, y_shanghai)

# 修改x y刻度
x_label = ["11分{}秒".format(i) for i in x]
plt.xticks(x[::5],x_label[::5])
plt.yticks(range(0,40,5))

# 显示网格
plt.grid(linestyle='--', alpha=0.5)

# 添加描述 标题
plt.xlabel("时间")
plt.ylabel("温度")
plt.title("中午11点0分到12点之间的温度变化图示")

# 4、显示图像
plt.show()
```

### 多个坐标系显示

```python
figure, axes = plt.subplots(nrows=1, ncols=1, **fig_kw)
```

