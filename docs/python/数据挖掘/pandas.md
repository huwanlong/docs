---
title: Pandas
---

## 介绍

- 2008年WesMcKinney开发出的库
- 专门用于数据挖掘的开源Python库
- 以Numpy为基础，借力Numpy模块在计算方面性能高的优势
- 基于matplotlib，能够简便的画图
- 独特的数据结构

### 为什么用？

- 便捷的数据处理能力
- 读取文件方便
- 封装了Matplotlib、Numpy的画图和计算

### 核心数据结构

- DataFrame
- Pannel
- Series

### DataFrame

#### 结构

既有行索引，又有列索引的二维数组

行索引，表明不同行，横向索引，叫index

列索引，表明不同列，纵向索引，叫columns

#### 常用属性

shape

index 行索引列表

columns 列索引列表

values 直接获取其中array的值

T  行列转置

#### 常用方法

head()  开头几行

tail() 最后几行

```python
import numpy as np
import pandas as pd
# 创建一个符合正态分布的10个股票5天的涨跌幅数据
stock_change = np.random.normal(0, 1, (10, 5))
pd.DataFrame(stock_change)
# 添加行索引
stock = ["股票{}".format(i) for i in range(10)]
pd.DataFrame(stock_change, index=stock)
# 添加列索引
date = pd.date_range(start="20200101", periods=5, freq="B")
data = pd.DataFrame(stock_change, index=stock, columns=date)

# 属性
print(data.shape)
print(data.index)
print(data.columns)
print(data.values)
data.T # 行列转置

# 方法
data.head(3) # 开头3行
data.tail(2) # 最后2行
```

#### 索引的设置

```python
# 修改行列索引值
# data.index[2] = "股票88" 不能单独修改索引
stock_ = ["股票_{}".format(i) for i in range(10)]
data.index = stock_

# 重设索引
data.reset_index(drop=False) # drop=True把之前的索引删除

# 设置新索引
df = pd.DataFrame({'month': [1, 4, 7, 10],
                    'year': [2012, 2014, 2013, 2014],
                    'sale':[55, 40, 84, 31]})
# 以月份设置新的索引
df.set_index("month", drop=True)
# 设置多个索引，以年和月份
new_df = df.set_index(["year", "month"])
```

### MultiIndex与Panel

#### MultiIndex 

多级或分层索引对象

- index属性
  - names: levels的名称
  - levels: 每个level的元组值

```python
print(new_df.index)
print(new_df.index.names)
print(new_df.index.levels)
```

#### Panel

pandas.Panel(data=None,items=None,major_axis=None,minor_axis=None,copy=False,dtype=None)

存储3维数组的Panel结构

- items - axis 0，每个项目对应于内部包含的数据帧(DataFrame)。
- major_axis - axis 1，它是每个数据帧(DataFrame)的索引(行)。
- minor_axis - axis 2，它是每个数据帧(DataFrame)的列。

```python
p = pd.Panel(np.arange(24).reshape(4,3,2),
                 items=list('ABCD'),
                 major_axis=pd.date_range('20130101', periods=3),
                 minor_axis=['first', 'second'])
p["A"]
p.major_xs("2013-01-01")
p.minor_xs("first")
```

注：Pandas从版本0.20.0开始弃用，推荐的用于表示3D数据的方法是DataFrame上的MultiIndex方法

### Series

带索引的一维数组

#### 属性

- index
- values

```python
# 创建
pd.Series(np.arange(3, 9, 2), index=["a", "b", "c"])
# 或
pd.Series({'red':100, 'blue':200, 'green': 500, 'yellow':1000})

sr = data.iloc[1, :]
sr.index # 索引
sr.values # 值
```

总结：DataFrame是Series的容器，Panel是DataFrame的容器

## 基本数据操作



## DataFrame运算



## Pandas画图



## 文件读取与存储



## 高级处理-缺失值处理



## 高级处理-数据离散化



## 高级处理-合并



## 高级处理-交叉表与透视表



## 高级处理-分组与聚合



