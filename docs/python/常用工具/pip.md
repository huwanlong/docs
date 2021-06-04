---
title: pip
---

## 查找软件

```shell
pip search package
```

## 安装软件

```shell
pip install package
pip install -r requirements.txt
```

## 更新软件

```shell
pip install -U package
```

## 卸载软件

```shell
pip uninstall package
```

## 列出已安装软件

```shell
pip list
```
## 导出依赖

```shell
pip freeze > requirements.txt
```

## 换源 

创建文件C:/Users/xxxx/pip/pip.ini

```shell
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```