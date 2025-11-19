---
title: openspec
---
OpenSpec 是一种为 AI 编码助手设计的 **规范驱动开发（Spec-driven development）** 方法论和工具链。其核心目标是在编写任何代码之前，通过一个轻量级的规范工作流程，使人类开发者与 AI 编码助手就“要构建什么”达成共识。

在传统的开发流程中，需求往往散落在聊天记录里，导致 AI 编码助手在执行任务时具有很强的不可预测性。OpenSpec 通过引入一个结构化的规范流程来解决这个问题，确保在实施前锁定意图，从而产出确定性的、可审查的、可审计的成果。最重要的是，它无需任何 API 密钥即可使用。

[https://github.com/Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)

## 安装

**先决条件：** Node.js>=v20.19.0


```shell
# 全局安装
npm install -g @fission-ai/openspec@latest

# 安装后验证是否成功
openspec --version
```

## 使用方法

### 起草提案
/openspec.proposal <需求>


### 验证与审查
```shell
# 查看当前活动的变更
openspec list
 
# 验证规范格式
openspec validate add-profile-filters
 
# 查看提案、任务和规范增量的详细信息
openspec show add-profile-filters
```

### 完善规范
继续和AI对话

### 实施变更
/openspec:apply <add-profile-filters>

### 归档变更
/openspec:archive <add-profile-filters>


### 常用命令参考
openspec list: 查看活动的变更文件夹。
openspec view: 打开一个交互式仪表盘，查看规范和变更。
openspec show <change>: 显示指定变更的详细信息（提案、任务、规范更新）。
openspec validate <change>: 检查规范的格式和结构。
openspec archive <change> [--yes | -y]: 将已完成的变更归档。


## 使用
```shell
openspec init

claude
```

请阅读openspec/project.md，并帮我填写关于我的项目、技术栈和规范等的详细信息。

将文件CLAUDE.md、AGENTS.md、.claude\commands\openspec\apply.md、.claude\commands\openspec\archive.md、.claude\commands\openspec\proposal.md、openspec\AGENTS.md的内容转为中文


/openspec.proposal 新增课程管理和排课管理，课程和班级相关，班级每天4节课7:40-9:30,9:40-11:30,13:00-14:50,15:00-16:50，需要排上课程，请提供相关接口； 
/openspec:apply
/openspec:archive