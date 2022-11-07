---
title: pyenv
---

## 安装配置

### 安装

```shell
pip install pyenv-win --target %USERPROFILE%/.pyenv
```

### 环境变量

设置一个系统变量`PYENV`，值为`C:\Users\用户名\.pyenv\pyenv-win`

path 里面添加：

```shell
%PYENV%\bin
%PYENV%\shims
```

### 换源

将`C:\Users\用户名\.pyenv\pyenv-win\.versions_cache.xml`中 `https://www.python.org/ftp/python` 全换成 `https://npm.taobao.org/mirrors/python`

## 常用命令

```shell
# 列出当前系统中所有安装的python
pyenv versions
# 显示出当前使用的python
pyenv version
# 设置使用哪一个python
pyenv global <python_version>
# 安装特定版本的python
pyenv install <python_version> # pyenv install 3.8.7
# 移除特定版本的python
pyenv uninstall <python_version>
# 查看可安装的python
pyenv install -l
```

## 使用方法

```shell
# 可以将用pyenv安装的python目录配置到环境变量中，
# 或是使用pyenv global XXX 切换到一个特定的python版本
# 然后进入项目目录中，创建虚拟环境
python -m venv myvirtuaenv # python -m venv XXX（虚拟环境名）
# 激活虚拟环境
.\myvirtuaenv\Scripts\activate
# 退出虚拟环境
deactivate
```
