---
title: spec-kit
---
Spec-Kit 是 Github 开源的一个 MCP 工具，用于实现规格驱动开发，它可与 AI 编程工具集成，帮助开发者构建更高质量的软件项目。

使用Spec Kit的基本流程遵循严格的阶段划分：章程制定 → 规范定义 → 技术规划 → 任务分解 → 实现执行。每个阶段都有明确的输入输出和质量标准。

特别适合**从零开始创建新项目**。

## 安装和使用方法

### 安装

#### 安装命令

```shell
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

#### 初始化

```shell
# 创建新项目
specify init my-project

# 以claude编辑器创建新项目
specify init my-project --ai claude
 
# 或在当前目录初始化
specify init --here --ai claude

# 检查系统依赖，确保选择的AI编码助手正确安装和配置
specify check
```

### 使用方法

首先进入AI编辑器如`claude code`、 `qwen code` 等等，我这里使用的claude

```
# 安装claude（如已安装可跳过）
npm install -g @anthropic-ai/claude-code

# 进入claude
claude
```

#### 制定项目治理原则和开发准则

创建或更新项目章程,建立项目的规则，明确必须遵守的最高原则。

```plain
/constitution <章程内容>
```

一般描述的方向：
- 代码质量
- 测试标准
- 用户体验一致性
- 性能要求
- 使用的框架的版本兼容问题

举例：
```plain
/speckit.constitution 为Vue3 + TypeScript + Tailwindcss + Ant Design 项目制定以下规则: 
代码质量：

ESLint：
- 禁用 `no-debugger` 规则（仅在开发环境）
- 强制使用一致的类型导入方式 (`consistent-type-imports`)

Stylelint：
  - 使用 `stylelint-config-standard` 作为基础配置
  - 忽略 `rpx` 单位检查（适配移动端）
  - 允许特定的伪类和伪元素写法
  - 支持 Tailwind CSS 相关的 at-rule 指令

提交规范：
  - 遵循 conventional commit 规范
  - 提交信息包含类型、作用域和简短描述
  - 类型包括 feat、fix、perf、style、docs、test、refactor、build、ci、chore、revert、wip、workflow、types、release 等
  - 使用 Husky 和 Commitlint 进行提交前检查
  - 提交信息最大长度限制为 108 个字符
  - 提交正文和页脚需以空行开头

部署要求：

- 使用 `Docker` 进行容器化部署，确保环境一致性
- 通过 `Dockerfile` 构建镜像，支持多阶段构建以减小镜像体积
- 构建产物位于 `dist` 目录，可直接部署到静态服务器
- 生成nginx配置模板文件 `default.conf.template`，支持Vue的histroy路由模型，支持反向代理配置，处理 API 请求转发


测试规范：

单元测试：

  - 使用 Vitest 作为单元测试框架，与 Vite 深度集成

  - 组件测试可使用 @testing-library/vue 提供的工具

  - 测试文件建议与源码文件同目录，命名为 `*.test.ts` 或 `*.spec.ts`

端到端测试：

  - 使用Playwright 进行 E2E 测试

  - 覆盖核心业务流程和用户交互场景

测试策略：

  - 关键业务逻辑应编写单元测试，确保功能正确性
  - 重要用户流程应编写 E2E 测试，确保整体功能完整
  - 测试覆盖率目标建议达到 80% 以上

性能要求：

为提供良好的用户体验，应用需满足以下性能指标：

加载性能：

  - 首屏加载时间不超过 2 秒
  - 关键资源应进行压缩和优化
  - 合理使用懒加载和代码分割减少初始加载体积


运行性能：

  - 页面交互响应时间不超过 100ms
  - 复杂计算应使用 Web Workers 避免阻塞主线程
  - 优化渲染性能，避免不必要的重绘和回流
```

#### 生成规格说明书

根据自然语言的功能描述，创建或更新功能规格说明书（spec.md），描述你要实现的功能和目标，包括用户故事和功能需求。

```plain
/specify <功能描述>
```

注意：这里只要说明做什么、为什么，不涉及怎么做。

举例：
```plain
/speckit.specify 构建一个待办事项(Todo)应用，帮助用户管理日常任务。用户可以查看、添加、编辑、完成和删除任务。任务应按创建时间排序， 并可切换查看"全部任务""已完成任务""未完成任务"用户应能为任务添加截止日期和优先级，优先级分低、中、高三级。所有任务仅存储在本地浏览器，最多可以保存50条任务，超出时自动删除最早的任务，不需要多设备同步。应用目标是提供简单直观的界面，帮助用户保持条理。成功标准包括:用户能顺利添加、编辑、完成、删除任务，任务列表能正确更新。
```

#### 补充需求
基于上一步之后产生的说明文档，有些可能还需要你来确认或补充内容。

```plain
/clarify
```

注意：这一过程必须在/plan之前执行，对你的需求实现目标的进一步确认。

#### 制定实施计划

创建技术实施方案和架构设计，生成设计产物。

```plain
/speckit.plan <如何实现，包括技术细节>
```

举例：
```plain
/speckit.plan 项目采用 vue3+vite，结合ant-design 构建用户界面。应用的主要页面包括任务列表页、新建任务页。ant-design 提供按钮、表单、对话框等基础交互组件。前端状态管理使用 Pinia，数据保存到浏览器。
```

#### 任务分解

生成可执行的任务分解清单（tasks.md）

```plain
/speckit.tasks
```

#### 代码实现

根据任务清单完成代码实现，可以添加任务清单号进行指定实现

```plain
/speckit.implement
```


