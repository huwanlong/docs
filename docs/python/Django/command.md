---
title: 命令
---

 

## 根据主题

### 创建项目

```shell
# 创建项目
django-admin startproject mysite

# 创建默认数据库表
python manage.py migrate

# 创建管理员
python manage.py createsuperuser

# 启动项目
python manage.py runserver 0.0.0.0:8000 
```

### 创建应用

```shell
# 创建应用
python manage.py startapp myapp 

# 给myapp应用的模型创建迁移脚本文件
python manage.py makemigrations myapp 

# 查看myapp应用的0001迁移脚本文件的sql语句
python manage.py sqlmigrate myapp 0001 

# 运行迁移脚本文件来自动创建数据库表
python manage.py migrate 
```

### 其它相关

```shell
# 查看django版本
python -m django --version

# shell
python manage.py shell
```

## 所有命令

```shell
# 查看django版本
python -m django --version 

# 创建项目mysite，创建后根目录mysite只是项目的容器，可以随便改，不影响
django-admin startproject mysite 

# 启动项目
python manage.py runserver 0.0.0.0:8000 

# 创建一个新应用，应用名myapp
python manage.py startapp myapp 

# 给模型创建迁移脚本文件
python manage.py makemigrations 

# 给myapp应用的模型创建迁移脚本文件
python manage.py makemigrations myapp 

# 查看myapp应用的0001迁移脚本文件的sql语句
python manage.py sqlmigrate myapp 0001 

# 运行迁移脚本文件来自动创建数据库表
python manage.py migrate 

# 测试myapp
python manage.py test myapp

# shell
python manage.py shell
```
