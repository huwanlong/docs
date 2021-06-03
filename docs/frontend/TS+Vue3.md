# TS + Vue3

## TypeScript

### 安装

```shell
# 全局安装
npm install -g typescript
# update
npm update -g typescript
# 查看版本
tsc -V
```

ps :  如果安装typescript之后，执行命令 `tsc -V` 时终端报类似错误` tsc:无法加载文件C:\Users\....\tsc.ps1，因为在此系统上禁止运行脚本`，请用管理员权限重新打开当前终端，然后执行如下命令

```shell
get-ExecutionPolicy # 显示Restricted，表示状态是禁止的
set-ExecutionPolicy RemoteSigned
get-ExecutionPolicy # 显示RemoteSigned
```

### 编译 

#### 手动编译

```shell
# 编译成js
tsc XX.ts
# 运行js
node XX.js
```

#### VS Code自动编译

生成配置文件tsconfig.json

```shell
tsc --init
```
修改tsconfig.json配置

```js
"outDir": "./js",
"strict": false, 
```

启动监视任务:  终端 -> 运行任务 -> 监视tsconfig.json

### 打包

#### 使用webpack打包TS



### 基础

#### 类型注解



#### 接口



#### 类



#### 函数



#### 泛型



#### 其它



## Vue3

### 创建项目

#### 使用`vue-cli`创建



#### 使用`vite`创建



### Composition API













