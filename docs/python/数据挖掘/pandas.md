---
title: Pandas
---

## 介绍

- 2008 年 WesMcKinney 开发出的库
- 专门用于数据挖掘的开源 Python 库
- 以 Numpy 为基础，借力 Numpy 模块在计算方面性能高的优势
- 基于 matplotlib，能够简便的画图
- 独特的数据结构

### 为什么用？

- 便捷的数据处理能力
- 读取文件方便
- 封装了 Matplotlib、Numpy 的画图和计算

### 核心数据结构

- DataFrame
- Pannel
- Series

### DataFrame

#### 结构

既有行索引，又有列索引的二维数组

行索引，表明不同行，横向索引，叫 index

列索引，表明不同列，纵向索引，叫 columns

#### 常用属性

shape

index 行索引列表

columns 列索引列表

values 直接获取其中 array 的值

T 行列转置

#### 常用方法

head() 开头几行

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

### MultiIndex 与 Panel

#### MultiIndex

多级或分层索引对象

- index 属性
  - names: levels 的名称
  - levels: 每个 level 的元组值

```python
print(new_df.index)
print(new_df.index.names)
print(new_df.index.levels)
```

#### Panel

pandas.Panel(data=None,items=None,major_axis=None,minor_axis=None,copy=False,dtype=None)

存储 3 维数组的 Panel 结构

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

注：Pandas 从版本 0.20.0 开始弃用，推荐的用于表示 3D 数据的方法是 DataFrame 上的 MultiIndex 方法

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

总结：DataFrame 是 Series 的容器，Panel 是 DataFrame 的容器

## 基本数据操作

### 索引操作

```python
data = pd.read_csv("./stock_day/stock_day.csv")
data = data.drop(["ma5","ma10","ma20","v_ma5","v_ma10","v_ma20"], axis=1) # 去掉一些不要的列
data["open"]["2018-02-26"] # 直接索引，先列后行

data.loc["2018-02-26"]["open"] # 按名字索引
data.loc["2018-02-26", "open"]
data.iloc[1, 0] # 数字索引

# 组合索引
# 获取行第1天到第4天，['open', 'close', 'high', 'low']这个四个指标的结果
data.iloc[:4, ['open', 'close', 'high', 'low']] # 不能用了
data.loc[data.index[0:4], ['open', 'close', 'high', 'low']]
data.iloc[0:4, data.columns.get_indexer(['open', 'close', 'high', 'low'])]
```

### 赋值操作

```python
data.open = 100
data.iloc[1, 0] = 222
```

### 排序操作

排序有两种形式，一种对内容进行排序，一种对索引进行排序

#### 内容排序

使用 df.sort_values(key=,ascending=)对内容进行排序

单个键或者多个键进行排序，默认升序

ascending=False:降序 True:升序

#### 索引排序

使用 df.sort_index 对索引进行排序

```python
data.sort_values(by="high", ascending=False) # DataFrame内容排序

data.sort_values(by=["high", "p_change"], ascending=False).head() # 多个列内容排序

data.sort_index().head()

sr = data["price_change"]

sr.sort_values(ascending=False).head()

sr.sort_index().head()
```

## DataFrame 运算

### 算术运算

```python
data["open"].add(3).head() # open统一加3  data["open"] + 3
data.sub(100).head() # 所有统一减100 data - 100
data["close"].sub(data["open"]).head() # close减open
```

### 逻辑运算

query(expr) expr:查询字符串

isin(values) 判断是否为 values

```python
data[data["p_change"] > 2].head() # p_change > 2
data[(data["p_change"] > 2) & (data["low"] > 15)].head()

data.query("p_change > 2 & low > 15").head()

# 判断'turnover'是否为4.19, 2.39
data[data["turnover"].isin([4.19, 2.39])]
```

### 统计运算

describe()

综合分析：能够直接得出很多统计结果，count,mean,std,min,max 等

```python
data.describe()
data.max(axis=0)
data.idxmax(axis=0) #最大值位置
```

#### 累计统计函数

cumsum 计算前 1/2/3/../n 个数的和

cummax 计算前 1/2/3/../n 个数的最大值

cummin 计算前 1/2/3/../n 个数的最小值

cumprod 计算前 1/2/3/../n 个数的积

```python
data["p_change"].sort_index().cumsum().plot()
```

### 自定义运算

apply(func, axis=0)

func: 自定义函数

axis=0: 默认按列运算，axis=1 按行运算

```python
data.apply(lambda x: x.max() - x.min())
```

## Pandas 画图

### pandas.DataFrame.plot

DataFrame.plot(x=None, y=None, kind='line')

- x: label or position, default None
- y: label, position or list of label, positions, default None
  - Allows plotting of one column versus another
- kind: str
  - 'line': line plot(default)
  - ''bar": vertical bar plot
  - "barh": horizontal bar plot
  - "hist": histogram
  - "pie": pie plot
  - "scatter": scatter plot

```python
data.plot(x="volume", y="turnover", kind="scatter")
data.plot(x="high", y="low", kind="scatter")
```

### pandas.Series.plot

```python
sr.plot(kind="line")
```

## 文件读取与存储

### CSV

```python
pd.read_csv("./stock_day/stock_day.csv", usecols=["high", "low", "open", "close"]).head() # 读哪些列

data = pd.read_csv("stock_day2.csv", names=["open", "high", "close", "low", "volume", "price_change", "p_change", "ma5", "ma10", "ma20", "v_ma5", "v_ma10", "v_ma20", "turnover"]) # 如果列没有列名，用names传入

data[:10].to_csv("test.csv", columns=["open"]) # 保存open列数据

data[:10].to_csv("test.csv", columns=["open"], index=False, mode="a", header=False) # 保存opend列数据，index=False不要行索引，mode="a"追加模式|mode="w"重写，header=False不要列索引

```

### HDF5

read_hdf()与 to_hdf()

HDF5 文件的读取和存储需要指定一个键，值为要存储的 DataFrame

pandas.read_hdf(path_or_buf, key=None, \*\*kwargs)

从 h5 文件当中读取数据

- path_or_buffer: 文件路径
- key: 读取的键
- mode: 打开文件的模式
- reurn: The Selected object

DataFrame.to_hdf(path_or_buf, key, \*\*kwargs)

```python
day_close = pd.read_hdf("./stock_data/day/day_close.h5")
day_close.to_hdf("test.h5", key="close")
```

### JSON

read_json()

pandas.read_json(path_or_buf=None,orient=None,typ="frame",lines=False)

- 将 JSON 格式转换成默认的 Pandas DataFrame 格式
- orient: string,Indication of expected JSON string format.
  - 'split': dict like {index -> [index], columns -> [columns], data -> [values]}
  - 'records': list like [{column -> value}, ..., {column -> value}]
  - 'index': dict like {index -> {column -> value}}
  - 'columns': dict like {column -> {index -> value}}, 默认该格式
  - 'values': just the values array
- lines: boolean, default False
  - 按照每行读取 json 对象
- typ: default 'frame'，指定转换成的对象类型 series 或者 dataframe

```python
sa = pd.read_json("Sarcasm_Headlines_Dataset.json", orient="records", lines=True)

sa.to_json("test.json", orient="records", lines=True)
```

## 缺失值处理

- replace 实现数据替换
- dropna 实现缺失值的删除
- fillna 实现缺失值的填充
- isnull 判断是否有缺失数据 NaN

如何进行缺失值处理？

- 删除含有缺失值的样本
- 替换/插补数据

### 如何处理 NaN?

- 判断是否有 NaN
  - pd.isnull(df)
  - pd.notnull(df)
- 删除含有缺失值的样本
  - df.dropna(inplace=True) 默认按行删除 inplace:True 修改原数据，False 返回新数据，默认 False
- 替换/插补数据
  - df.fillna(value,inplace=True) value 替换的值 inplace:True 修改原数据，False 返回新数据，默认 False

```python
import pandas as pd
import numpy as np
movie = pd.read_csv("./IMDB/IMDB-Movie-Data.csv")
# 1）判断是否存在NaN类型的缺失值
np.any(pd.isnull(movie)) # 返回True，说明数据中存在缺失值
np.all(pd.notnull(movie)) # 返回False，说明数据中存在缺失值
pd.isnull(movie).any()
pd.notnull(movie).all()

# 2）缺失值处理
# 方法1：删除含有缺失值的样本
data1 = movie.dropna()
pd.notnull(data1).all()

# 方法2：替换
# 含有缺失值的字段
# Revenue (Millions)
# Metascore
movie["Revenue (Millions)"].fillna(movie["Revenue (Millions)"].mean(), inplace=True)
movie["Metascore"].fillna(movie["Metascore"].mean(), inplace=True)
```

### 不是缺失值 NaN

不是缺失值 NaN，有默认标记的

```python
# 读取数据
path = "https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/breast-cancer-wisconsin.data"
name = ["Sample code number", "Clump Thickness", "Uniformity of Cell Size", "Uniformity of Cell Shape", "Marginal Adhesion", "Single Epithelial Cell Size", "Bare Nuclei", "Bland Chromatin", "Normal Nucleoli", "Mitoses", "Class"]

data = pd.read_csv(path, names=name)

# 1）替换
data_new = data.replace(to_replace="?", value=np.nan)

# 2）删除缺失值
data_new.dropna(inplace=True)
```

## 数据离散化

### 什么是数据的离散化

连续属性的离散化就是将连续属性的值域上，将值域划分为若干个离散的区间，最后用不同的符号或整数 值代表落在每个子区间的属性值。

### 为什么要离散化

连续属性离散化的目的是为了简化数据结构，数据离散化技术可以用来减少给定连续属性值的个数。离散化方法经常作为数据挖掘的工具。

### 如何实现数据的离散化

1. 分组

   - 自动分组 sr = pd.qcut(data, bins)
   - 自定义分组 sr = pd.cut(data, [])

2. 将分组好的结果转换成 one-hot 编码（哑变量）

   pd.get_dummies(sr, prefix=)

```python
# 1）准备数据
data = pd.Series([165,174,160,180,159,163,192,184], index=['No1:165', 'No2:174','No3:160', 'No4:180', 'No5:159', 'No6:163', 'No7:192', 'No8:184'])
# 2）分组
# 自动分组
sr = pd.qcut(data, 3)
sr.value_counts()  # 看每一组有几个数据
# 3）转换成one-hot编码
pd.get_dummies(sr, prefix="height")

# 自定义分组
bins = [150, 165, 180, 195]
sr = pd.cut(data, bins)
# get_dummies
pd.get_dummies(sr, prefix="身高")
```

## 合并

### 按方向

pd.concat([data1, data2], axis=1) axis：0 为列索引；1 为行索引

### 按索引

pd.merge(left, right, how="inner", on=[]) on：索引

```python
left = pd.DataFrame({'key1': ['K0', 'K0', 'K1', 'K2'],
                        'key2': ['K0', 'K1', 'K0', 'K1'],
                        'A': ['A0', 'A1', 'A2', 'A3'],
                        'B': ['B0', 'B1', 'B2', 'B3']})

right = pd.DataFrame({'key1': ['K0', 'K1', 'K1', 'K2'],
                        'key2': ['K0', 'K0', 'K0', 'K0'],
                        'C': ['C0', 'C1', 'C2', 'C3'],
                        'D': ['D0', 'D1', 'D2', 'D3']})

pd.merge(left, right, how="inner", on=["key1", "key2"])

pd.merge(left, right, how="left", on=["key1", "key2"])

pd.merge(left, right, how="outer", on=["key1", "key2"])
```

## 交叉表与透视表

找到、探索两个变量之间的关系

### 交叉表

交叉表用于计算一列数据对于另外一列数据的分组个数（寻找两个列之间的关系）

pd.crosstab(value1, value2)

```python
data = pd.crosstab(stock["week"], stock["pona"])
data.div(data.sum(axis=1), axis=0).plot(kind="bar", stacked=True)
```

### 透视表

DataFrame.pivot_table([], index=[])

```python
# 透视表操作
stock.pivot_table(["pona"], index=["week"])
```

## 分组与聚合

分组与聚合通常是分析数据的一种方式，通常与一些统计函数一起使用，查看数据的分组情况。

DataFrame.groupby(key, as_index=False) key：分组的列数据，可以多个

```python
col =pd.DataFrame({'color': ['white','red','green','red','green'], 'object': ['pen','pencil','pencil','ashtray','pen'],'price1':[5.56,4.20,1.30,0.56,2.75],'price2':[4.75,4.12,1.60,0.75,3.15]})

# 进行分组，对颜色分组，price1进行聚合
# 用dataframe的方法进行分组
col.groupby(by="color")["price1"].max()

# 或者用Series的方法进行分组聚合
col["price1"].groupby(col["color"]).max()
```
