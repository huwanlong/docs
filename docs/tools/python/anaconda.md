---
title: Anaconda
---

## 下载安装

[https://docs.anaconda.com/anaconda/install/windows/](https://docs.anaconda.com/anaconda/install/windows/)

## 管理环境

```shell
# 版本
conda --version

# 更新
conda update conda

# 帮助
conda --help
# or
conda -h

# 创建新环境
conda create --name <env_name> <package_names>
# 如
conda create -n python3 python=3.5 numpy pandas

# 切换环境
activate <env_name>

# 退出当前环境到base，base退出到root
conda deactivate

# 显示已创建环境
conda info --envs
# or
conda info -e
# or
conda env list

# 复制环境
conda create --name <new_env_name> --clone <copied_env_name>

# 删除环境
conda remove --name <env_name> --all
```

## 管理包

```shell
# 查找可供安装的包版本
# 精确查找
conda search --full-name <package_full_name>
# 模糊查找
conda search <   text>

# 获取当前环境中已安装的包信息
conda list

# 安装包
# 在指定环境中安装包
conda install --name <env_name> <package_name>
# 在当前环境中安装包
conda install <package_name>
# 如果conda install无法进行安装时，可以用pip安装
pip install <package_name>
# 也可以到 http://anaconda.org 搜索包，通过点击进入包的详情页，复制安装命令进行安装

# 卸载包
# 卸载指定环境中的包
conda remove --name <env_name> <package_name>
# 卸载当前环境中的包
conda remove <package_name>

# 更新包
# 更新所有包
conda update --all
# or
conda upgrade --all
# 更新指定包
conda update <package_name>
# or
conda upgrade <package_name>

```

## 换源

创建文件 C:/Users/xxxx/.condarc

```shell
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
ssl_verify: true

```

## requirements

```shell
conda list -e > requirements.txt # 导出
conda install --yes --file requirements.txt # 导入
```

## Linux

```
https://blog.csdn.net/djfjkj52/article/details/107330301
```
