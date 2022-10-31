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

创建文件`C:/Users/xxxx/pip/pip.ini`

`linux`需要创建 `~/.pip/pip.conf`

```shell
mkdir ~/.pip
vim ~/.pip/pip.conf
```

然后写入

```shell
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

## 更新自己

```
sudo pip3 install --upgrade pip
```

## 查看版本

```shell
# 一般情况下这两个应该是一样的，当多个版本时这两个有可能不一样
python -m pip -V
pip -V
```

## pip-compile

生成带有关联依赖的`requirements.txt`

```shell
# 安装
python -m pip install pip-tools -i https://pypi.douban.com/simple/
```

然后建立一个 `requirements.in` 文件，其中可以写入你需要的模块

```text
Django
jsonschema
```

执行命令

```shell
pip-compile requirements.in
```

生成文件`requirements.txt`

```txt
asgiref==3.5.2
    # via django
attrs==22.1.0
    # via jsonschema
backports-zoneinfo==0.2.1
    # via django
django==4.1.2
    # via -r requirements.in
importlib-resources==5.10.0
    # via jsonschema
jsonschema==4.16.0
    # via -r requirements.in
pkgutil-resolve-name==1.3.10
    # via jsonschema
pyrsistent==0.19.1
    # via jsonschema
sqlparse==0.4.3
    # via django
tzdata==2022.6
    # via django
zipp==3.10.0
    # via importlib-resources
```
