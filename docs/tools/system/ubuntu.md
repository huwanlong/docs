---
title: ubuntu
---

## 1、初始化

### 更新

安装环境之前将`Ubuntu20.04`切换到国内源下载安装包会快很多

> 换源 https://zhuanlan.zhihu.com/p/142014944

切换源之后,需要在命令行中完成更新

先得到软件包列表  `sudo apt-get update`

更新`ubuntu`和已安装的软件 `sudo apt-get dist-upgrade`

### root

先切换到root用户 `su root` (`Ubuntu`安装后,root默认密码是一串随机字符串,可以用`sudo passwd`改密码)

### ssh

安装ssh `apt-get install openssh-server`

使用`ps -e | grep ssh`，如果只有ssh-agent表示还没启动，需要`/etc/init.d/ssh start`；有`sshd`说明已启动。

`vim /etc/ssh/sshd_config`

`PermitRootLogin prohibit-password`  改成  `PermitRootLogin yes`

重启  `/etc/init.d/ssh restart `

### git

```shell
sudo apt-get install git
```

### 环境变量

在用户主目录下有一个 `.bashrc` 文件

## 2、开发环境

### 1、`Anaconda`

> 参考：https://blog.csdn.net/djfjkj52/article/details/107330301

#### 常用命令

```shell
# 激活环境
source ~/miniconda3/bin/activate
# 更新
conda update conda 
# 创建新环境
conda create --name <env_name> <package_names>
# 如
conda create -n python38 python=3.8 numpy pandas
# 切换环境
activate <env_name>
# 退出当前环境
conda deactivate 
# 显示已创建环境
conda info -e 
# 删除环境
conda remove --name <env_name> --all 
# 在当前环境中安装包
conda install <package_name>
# 卸载当前环境中的包
conda remove <package_name>
# 更新指定包
conda update <package_name>
# 更新所有包
conda update --all
# 导出
conda list -e > requirements.txt 
# 导入
conda install --yes --file requirements.txt 
```

###  2、`Node.js`

> 参考：https://zhuanlan.zhihu.com/p/140961618

##### a、直接安装

```shell
sudo apt install nodejs npm
```

##### b、`nvm`安装

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

脚本将会从 `Github` 克隆项目到`~/.nvm`文件夹，如果是`sudo`或使用root用户来执行这条命令，那么会克隆到`/root/.nvm`文件夹，重新打开终端

```shell
nvm --version
node --version
```

> 换源：https://blog.csdn.net/qq_14815199/article/details/104610163
>
> 在`ubuntu`中找到安装`nvm`的路径，找到`'.nvm/nvm.sh'`文件，用`sudo vim .nvm/nvm.sh`打开，然后用'/'搜索`‘NVM_NODEJS_ORG_MIRROR’`，enter定位到该位置，修改其中的网址为`https://npm.taobao.org/mirrors/node/`即可

##### c、 常用命令

```shell
nvm list [available] # 查看本地安装的所有版本；有可选参数available，显示所有可下载的版本
nvm install 16.0.0 # 安装，命令中的版本号可自定义，具体参考上一命令查询出来的列表
nvm use 16.0.0 # 切换版本
nvm uninstall 16.0.0 # 卸载
```

phpstudy

https://www.cnblogs.com/tilv37/p/5117005.html

## 3、开发软件

### `Ubuntu Software`中搜索安装

##### `Visual Studio Code`

##### `pycharm-community`
