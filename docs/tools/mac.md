---
title: mac
---
## 1、基础

### 1.1、brew

安装参考：https://blog.csdn.net/rockvine/article/details/121895416

官网：https://brew.sh/

```shell
# 修改homebrew相关的环境变量
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"

# 安装
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 配置，直接按照安装完成后的提示配置
(echo; echo 'eval "$(/usr/local/bin/brew shellenv)"') >> /Users/cyan/.zprofile
eval "$(/usr/local/bin/brew shellenv)"
echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/cyan/.zprofile
echo 'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"' >> /Users/cyan/.zprofile
echo 'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"' >> /Users/cyan/.zprofile


# 不需要如下操作
# 确认终端类型 /bin/bash配置文件为~/.bash_profile；/bin/zsh配置文件为~/.zshrc
echo $SHELL 
# 电脑型号 M1芯片ARM版Homebrew最终会被安装在/opt/homebrew路径下，而之前Intel芯片的Mac则会被安装到/usr/local/Homebrew路径下
uname -m 
# M1芯片
# zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
# bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
eval "$(/opt/homebrew/bin/brew shellenv)"
# Intel芯片
# zsh
echo 'eval "$(/usr/local/Homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/usr/local/Homebrew/bin/brew shellenv)"
# bash
echo 'eval "$(/usr/local/Homebrew/bin/brew shellenv)"' >> ~/.bash_profile
eval "$(/usr/local/Homebrew/bin/brew shellenv)"

```

### 1.2、docker

https://www.runoob.com/docker/macos-docker-install.html

```shell
#docker desktop找不到了,可以
/Applications/Docker.app/Contents/MacOS/Docker
```

### 1.3、ssh

设置 共享 勾选“远程登录” 勾选“允许远程用户对磁盘进行完全访问”

## 2、Java

### 2.1、java

参考：

https://blog.csdn.net/weixin_44143114/article/details/126807828

```shell
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home # 在.bash_profile中添加这一行
```

### 2.2、idea

https://baijiahao.baidu.com/s?id=1743957406665861124&wfr=spider&for=pc

## 3、前端

### 3.1、nvm

参考：https://blog.csdn.net/ForeverMyheart/article/details/127203419

```shell
brew install nvm

# 安装完成 安提示操作
mkdir ~/.nvm
# 再安提示将如下配置写入 .bash_profile
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
  
source ~/.bash_profile
```

## 4、python

### 4.1、Anaconda

https://www.likecs.com/show-451890.html

https://blog.csdn.net/qq_39234967/article/details/117554631

```shell
conda install --cask anaconda
export PATH="/usr/local/anaconda3/bin:$PATH" # 在.bash_profile中添加这一行
```

### 4.2、pyenv

http://www.tuohang.net/article/244919.html

### 4.3、pycharm

https://baijiahao.baidu.com/s?id=1743957406665861124&wfr=spider&for=pc

## 5、工具

### 5.1、brew

```shell
brew search xxx # 搜索软件
brew install xxx # 安装软件
brew uninstall xxx # 卸载软件
brew list # 已安装列表
brew info xxx # 查看具体的信息及依赖关系当前版本注意事项等
brew update # 更新
brew outdated # 列出所有有新版本的程序
brew cleanup # 清理不需要的版本及其安装缓存
brew upgrade # 升级所有
brew upgrade xxx # 升级软件
```





