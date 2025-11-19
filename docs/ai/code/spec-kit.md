---
title: spec-kit
---
Spec-Kit 是 Github 开源的一个 MCP 工具，用于实现规格驱动开发，它与 AI 编程工具集成，帮助开发者构建更高质量的软件。

## 安装

```shell
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

## 创建项目

```shell
# 创建新项目
specify init my-project --ai claude
 
# 或在当前目录初始化
specify init --here --ai claude
```

> 创建时需要选择AI编辑器，如果没有安装需要先安装

## 命令

### /constitution

创建或更新项目章程，基于交互式输入或既有的原则输入，并确保所有相关的依赖模板保持同步。主要用于建立项目的规则，明确必须遵守的最高原则。

可描述的方向：

- 代码质量
- 测试标准
- 用户体验一致性
- 性能要求
- 使用的框架的版本兼容问题

### /specify

生成规格说明书（spec.md），描述你要实现的功能和目标（做什么、为什么，不涉及怎么做），提供用户故事（User Stories）、功能需求（Requirements）

### /clarify

基于上一步之后产生的说明文档，有些可能还需要你来确认或补充内容，这一过程必须在`/plan`之前执行，即对你的需求实现目标的进一步确认。

### /plan

制定实施的技术实现计划，即要“怎么做”

### /tasks

将计划拆解成可执行的任务（tasks.md）

### /implement

根据任务清单完成代码实现，可以添加实现的任务清单号进行任务优先级完成

## 举例

/speckit.constitution 为vue.js项目制定:TypeScript 严格模式、统一ESLint+ Prettier规则、提交前必须通过 lint 与typecheck、所有新功能需附带单元测试与页面级 e2e 测试

/speckit.specify 构建一个待办事项(Todo)应用，帮助用户管理日常任务。用户可以添加、编辑、完成和删除任务。任务应按创建时间排序， 并可切换查看"全部任务""已完成任务""未完成任务"用户应能为任务添加截止日期和优先级，应用需要在任务到期当天提醒用户。所有任务仅存储在本地浏览器，不需要多设备同步。应用目标是提供简单直观的界面，帮助用户保持条理。成功标准包括:用户能顺利添加和完成任务，任务列表能正确更新且提醒功能在任务到期当天触发。

/speckit.clarify

/speckit.plan 项目采用 vue3+vite，结合ant-design 构建用户界面。应用的主要页面包括任务列表页、新建任务页和设置页。ant-design 提供按钮、表单、对话框等基础交互组件。前端状态管理使用 Pinia，数据保存到浏览器。

/speckit.tasks

/speckit.implement
