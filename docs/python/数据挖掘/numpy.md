---
title: Numpy
---

## 介绍

Numpy (Numerical Python) 是一个开源的Python科学计算库，用于快速处理任意维度的数组。

Numpy支持常见的数组和矩阵操作。对于同样的数值计算任务，使用Numpy比直接使用Python要简洁的多。

Numpy使用ndarray对象来处理多维数组，该对象是一个快速而灵活的大数据容器。

## ndarray

NumPy提供了一个N维数组类型ndarray，它描述了相同类型的"items"的集合

### 优势

1. 存储风格
   - ndarray - 相同类型 - 通用性不强
   - list - 不同类型 - 通用性很强
2. 并行化运算
   - ndarray支持向量化运算
3. 底层语言
   - Numpy底层使用C语言编写，内部解除了GIL（全局解释器锁），其对数组的操作速度不受Python解释器的限制，效率远高于纯Python代码。

### 属性

| 属性名字         | 属性解释                   |
| ---------------- | -------------------------- |
| ndarray.shape    | 数组维度的元组             |
| ndarray.ndim     | 数组维数                   |
| ndarray.size     | 数组中的元素数量           |
| ndarray.itemsize | 一个数组元素的长度（字节） |
| ndarray.dtype    | 数组元素的类型             |

在创建ndarray的时候，如果没有指定类型，默认：整数 int64/int32 浮点数 float64/float32

### 使用

```python
import numpy as np
score = np.array([[80, 89, 86, 67, 79],
[78, 97, 89, 67, 81],
[90, 94, 78, 67, 74],
[91, 91, 90, 67, 69],
[76, 87, 75, 67, 86],
[70, 79, 84, 67, 84],
[94, 92, 93, 67, 64],
[86, 85, 83, 67, 80]])
print(type(score))
print(score.shape)
print(score.dtype)
```

```python
# 创建数组的时候指定类型
np.array([1.1, 2.2, 3.3], dtype="float32")
```

## 基本操作

### 生成数组

#### 1、生成0和1的数组

```python
np.zeros(shape=(3, 4), dtype="float32") # 生成一组0
np.ones(shape=[2, 3], dtype=np.int32) # 生成一组1
```

#### 2、从现有数组生成

```python
data1 = np.array(score) # 深拷贝
data2 = np.asarray(score) # 浅拷贝
data3 = np.copy(score) # 深拷贝
```

#### 3、生成固定范围的数组

```python
np.linspace(0, 10, 5) # 生成[0,10]之间等距离的5个数
np.arange(0, 11, 5) # [0,11)，5为步长生成数组
```

#### 4、生成随机数组

```python
# 生成均匀分布的一组数[low,high)
data1 = np.random.uniform(low=-1, high=1, size=1000000)
# 生成正态分布的一组数，loc：均值；scale：标准差
data2 = np.random.normal(loc=1.75, scale=0.1, size=1000000)
```

### 数组的索引、切片

```python
stock_change = np.random.normal(loc=0, scale=1, size=(8, 10))
# 获取第一个股票的前3个交易日的涨跌幅数据
print(stock_change[0, :3])
a1[1, 0, 2] = 100000
```

### 形状修改

```python
stock_change.reshape((10, 8)) # 返回新的ndarray,原始数据没有改变
stock_change.resize((10, 8)) # 没有返回值，对原始的ndarray进行了修改
stock_change.T # 转置 行变成列，列变成行
```



### 数组去重



## ndarray运算



## 数组间的运算



## 合并、分割



## IO操作与数据处理









