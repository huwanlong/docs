---
title: openspec
---
OpenSpec 是一种为 AI 编码助手设计的 **规范驱动开发（Spec-driven development）** 方法论和工具链。其核心目标是在编写任何代码之前，通过一个轻量级的规范工作流程，使人类开发者与 AI 编码助手就“要构建什么”达成共识。

在传统的开发流程中，需求往往散落在聊天记录里，导致 AI 编码助手在执行任务时具有很强的不可预测性。OpenSpec 通过引入一个结构化的规范流程来解决这个问题，确保在实施前锁定意图，从而产出确定性的、可审查的、可审计的成果。最重要的是，它无需任何 API 密钥即可使用。

github: [https://github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

## 安装和使用方法

### 安装

#### 先决条件

Node.js>=v20.19.0

#### 安装命令

```shell
# 全局安装
npm install -g @fission-ai/openspec@latest

# 安装后验证是否成功
openspec --version
```

#### 初始化
```shell
# 进行项目目录
cd my-project

# 运行初始化命令
openspec init
```

### 使用方法

进入AI编辑器如`claude code`、 `qwen code` 等等，我这里使用的claude

```
# 安装claude（如已安装可跳过）
npm install -g @anthropic-ai/claude-code

# 进入claude
claude
```
#### 起草提案

```plain
/openspec.proposal <需求>
```

举例：
```plain
/openspec.proposal 帮我在`index.vue`中添加一个todolist功能，数据记录在浏览器中
```
AI会创建一个包含 proposal.md, tasks.md 和规范增量文件的变更文件夹 openspec/changes/add-todo-list/。

#### 验证与审查

使用命令检查和审查生成的提案。

```shell
# 查看当前活动的变更
openspec list
 
# 验证规范格式
openspec validate add-profile-filters
 
# 查看提案、任务和规范增量的详细信息
openspec show add-profile-filters
```

#### 完善规范

继续和AI对话，举例：

```plain
最多可以保存30条数据，最长可以保存60天
```
AI 会根据您的要求编辑 spec.md 和 tasks.md 文件。

#### 实施变更

当规范确认无误后，让 AI 开始编码：

```plain
/openspec:apply <add-todo-list>
```

AI 会根据 tasks.md 中的任务列表开始实现功能，并标记已完成的任务。

#### 归档变更

当所有任务完成后，归档变更：

```plain
/openspec:archive <add-todo-list>
```

AI 会将 changes 目录下的变更移动到 archive/ 目录，并更新主规范。


### 常用命令参考

```shell
# 查看活动的变更文件夹
openspec list

# 打开一个交互式仪表盘，查看规范和变更
openspec view

# 显示指定变更的详细信息（提案、任务、规范更新）
openspec show <change>

# 检查规范的格式和结构
openspec validate <change>

# 将已完成的变更归档
openspec archive <change> [--yes | -y]
```
