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
# 恢复系统版本
pyenv global system
# 通过将版本号写入当前目录下的 .python-version 文件的方式设置 Python 本地版本
pyenv local <python_version>
# 取消本地版本设置
pyenv local –unset
# 安装特定版本的python
pyenv install <python_version> # pyenv install 3.8.7
# 移除特定版本的python
pyenv uninstall <python_version>
# 查看可安装的python
pyenv install -l
# 升级
pyenv update
# 重建环境变量，每当你增删python版本或增删带可执行性的包（如pip）以后，都应该执行一次本命令
pyenv rehash  
```

## 使用方法

```shell
# 将pyenv相关环境变量放到Path中所有python相关的最上面
# 使用pyenv global XXX 切换到一个特定的python版本
# 或在项目目录中pyenv local XXX 给项目一个固定的版本
# 进入项目目录创建虚拟环境
python -m venv .venv # python -m venv XXX（虚拟环境名）
# 激活虚拟环境
.\.venv\Scripts\activate
# 退出虚拟环境
deactivate
```

## Linux

[pyenv](/tools/system/ubuntu.html#pyenv)