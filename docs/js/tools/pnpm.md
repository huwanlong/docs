---
title: pnpm
---

## 简介

`pnpm`是 `performant npm`(高性能的`npm`)，通过`内容可寻址存储(CAS)`、`符号链接(Symbolic Link)`、`硬链接(Hard Link)`等管理依赖包，达到多项目之间依赖共享，减少安装时间。

## 使用

```shell
npm install -g pnpm # 安装
pnpm -v # 版本
pnpm init # 初始化
pnpm install xxx # 安装依赖
```

**示例**

```shell
# 使用pnpm create 启动套件（vite，只有存在的套件才可以）创建模板项目
pnpm create vite <project-name> -- --template vue
cd <project-name>
pnpm install
pnpm dev
```

## 常用命令

[官网查看更多命令](https://pnpm.io/zh/cli/add)

```shell
# 源
pnpm config get registry # 查看源
pnpm config set registry https://registry.npmmirror.com/ # 切换源

# 管理依赖
pnpm add <pkg> # 安装依赖包到 dependencies
pnpm add -D <pkg> # 安装依赖包到 devDependencies
pnpm add -O <pkg> # 安装依赖包到 optionalDependencies
pnpm add -g xxx # 全局安装依赖包
pnpm install / pnpm i # 安装项目全部依赖
pnpm update / pnpm up # 更新依赖包
pnpm remove / pnpm rm/uninstall/un # 删除依赖包
pnpm list / pnpm ls # 查看本地安装的依赖
pnpm list --global / pnpm ls --g # 查看全局安装的依赖
pnpm outdate # 检查过期的依赖
pnpm publish # 发布依赖包

# 运行脚本
pnpm run xxx / pnpm xxx # 运行自定义脚本
pnpm test # 运行test测试脚本
pnpm create # 启动套件创建项目
pnpm start # 运行start启动命令

# 管理node环境
pnpm env use <node版本号> # 本地安装并使用
pnpm env use --global <node版本号> # 全局安装并使用

# 包存储store
pnpm store path # pnpm资源在磁盘上的存储位置
pnpm store prune # 从存储中删除未引用的包
pnpm store status # 查看store中已修改的包，如果包的内容与拆包时时相同的话，返回退出代码0
pnpm store add # 只把包加入存储中，且没有修改存储外的任何项目或文件
```

## 转为`pnpm`

```shell
# 1.全局安装pnpm
npm install -g pnpm

# 2.删除npm或yarn生成的node_modules
rm -rf node_modules

# 3.pnpm import从其他软件包管理器的lock 文件生成 pnpm-lock.yaml，再执行pnpm install --frozen-lockfile（相当于npm ci）生成依赖，防止没有lock文件意外升级依赖包，导致项目出错
pnpm import # 生成`pnpm-lock.yaml`
pnpm install --frozen-lockfile # 安装依赖

# 4.删除npm或yarn生成的lock文件
rm -rf package-lock.json
rm -rf yarn.lock

# 5.项目中的npm命令等修改为pnpm，包括README文档、运行命令等
```

## 卸载`pnpm`

```shell
pnpm ls --g # 查看全局安装的包
pnpm rm -g xxx # 列出每个全局包进行删除
pnpm root -g # 找到全局目录的位置并手动删除它

rm -rf $(pnpm store path) # 删除全局内容可寻址存储，每个盘的`pnpm store path`目录都需要删除

npm rm -g pnpm # 卸载pnpm
```





