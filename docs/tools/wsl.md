---
title: WSL
---

[https://learn.microsoft.com/zh-cn/windows/wsl/install](https://learn.microsoft.com/zh-cn/windows/wsl/install)

[https://zhuanlan.zhihu.com/p/29053435112](https://zhuanlan.zhihu.com/p/29053435112)

## 启动

在 Windows 底部的搜索框搜索“启用或关闭 Windows 功能”，勾选“适用于 Linux 的 Windows 子系统” 和 ”Virtual Machine Platform”，需要重启电脑。

## 安装

```shell
# 更新WSL
wsl --update
# 查看有效的发行版名称列表
wsl --list --online
# 安装ubuntu24.04
wsl --install Ubuntu-24.04
```

## 迁移

```shell
# 查看自己的wsl和ubuntu版本
wsl -l -v
# 关闭wsl服务
wsl --shutdown
# 将原位置的ubuntu导出到指定位置
wsl --export <Distribution Name> <FileName> 
# 注销原ubuntu
wsl --unregister <Distribution Name>
# 在指定位置导入ubuntu
wsl --import <Distribution Name> <InstallLocation> <FileName>
```

## 卸载

```shell
# 查看WSL当前的所有子系统列表
wsl --list
# 卸载子系统
wsl --unregister <DistributionName>
```

## 使用

- 在windows的PowerShell界面使用 `wsl` 命令，而在Linux发行版中使用 `wsl.exe`命令。
- Windows 访问 WSL 文件：通过 `\\wsl$\<DistroName>` 路径。这里我的是Ubuntu
- WSL 访问 Windows 文件：通过 `/mnt/c/`、`/mnt/d/` 等路径。
- 在 Windows 文件资源管理器左侧可以找到 Linux 的标志，点击 Linux 就可以操作 Linux 文件。
- 如果因为WSL故障，所以要重装WSL的话，可以从“设置”>“系统”>“系统组件”找到 适用于 Linux 的 Windows 子系统，然后选择重置或者修复。

## 存储位置

C盘不够用：[https://www.sysgeek.cn/move-wsl-distros-windows/](https://www.sysgeek.cn/move-wsl-distros-windows/)

## ubuntu24.04上安装docker

参考：[https://zhuanlan.zhihu.com/p/29053435112](https://zhuanlan.zhihu.com/p/29053435112)

### 安装

```shell
# 确保系统包是最新的
sudo apt update
sudo apt upgrade -y
# 安装 Docker 所需的依赖包
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
# 添加 Docker 的官方 GPG 密钥以确保下载的软件包是安全的
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o docker.gpg
sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg docker.gpg
# 将 Docker 的稳定版仓库添加到 APT 源中，再次更新软件源以包含 Docker 仓库中的包：
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
# 安装 Docker CE（社区版）、Docker CE CLI 和 Containerd
sudo apt install -y docker-ce docker-ce-cli containerd.io
# 启动 Docker 服务并设置为开机自启
sudo systemctl start docker
sudo systemctl enable docker
```

### 配置源

```shell
vi /etc/docker/daemon.json
```

输入以下内容：

```json
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io"
    ]
}
```

重启 Docker 服务

```shell
systemctl daemon-reload
systemctl restart docker
```

### 授权普通用户控制 docker

```shell
sudo usermod -aG docker 用户名
# 刷新用户会话
newgrp docker
```

### 国内镜像

[https://zhuanlan.zhihu.com/p/24461370776](https://zhuanlan.zhihu.com/p/24461370776)

### docker-compose

```shell
curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```
