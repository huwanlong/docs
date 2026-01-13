---
title: claude-code
---
Claude Code 是 Anthropic 推出的终端 AI 编码助手，在交互界面中通过 斜杠命令（Slash Commands）来控制 AI 助手的行为和上下文，合理使用斜杠命令，配合自然语言输入更加顺利完成开发操作。

## 安装

### 安装命令

```shell
npm install -g @anthropic-ai/claude-code
claude --version
```

### 环境变量

国内claude需要配置环境变量，举例：如使用deepseek，需要配置以下环境变量

```shell
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=${DEEPSEEK_API_KEY}
export API_TIMEOUT_MS=600000
export ANTHROPIC_MODEL=deepseek-chat
export ANTHROPIC_SMALL_FAST_MODEL=deepseek-chat
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```

## 使用

### 进入claude

```shell
cd my-project
claude
```

### 常用命令

#### 添加工作目录

在使用claude开始一个项目时，一般都会首先添加工作目录

```plain
/add-dir <你的工作目录>
```

#### 初始化

在创建工作目录后，使用初始化工具对该目录下的项目进行初始化分析，生成一份CLAUDE.md文档。

```plain
/init
```

CLAUDE.md 通常包含项目结构摘要、主要模块说明、依赖列表等内容，作用是建立上下文，让Claude Code理解当前项目的目标和结构、设置代码风格和一些规则、设置 Claude Code 的角色。可以在进行初始化之后通过自然语言输入让其修改该初始化说明文档，进而实现所需的设定。

#### 压缩对话

当会话长度接近模型上下文长度上限时，/compact 会将已有对话自动总结为更短的内容，从而释放大量上下文令牌供后续交流使用。

```plain
/compact [instructions]
```

可选的 instructions 参数允许你指定压缩时的侧重点，例如 /compact “保留尚未解决的问题” 

#### 清除对话历史

清除当前会话的对话历史，使 Claude 忘记之前的所有对话内容。执行后，相当于开启一个新会话，但不会退出 Claude Code 界面。

```plain
/clear
```

当对话持续很久、上下文累积过多时，可以使用 /clear 来重置上下文窗口，保持思路清晰。

#### 更新CLAUDE.md

用于直接打开并编辑当前项目的持久记忆文件 CLAUDE.md

```plain
/memory
```

通过 /memory 命令，你可以随时更新CLAUDE.md的内容，记得在保存退出后，使用 /clear 开启新会话，Claude 才会参照更新后的 CLAUDE.md 回答问题。

#### 会话状态检查

显示当前 Claude Code 会话和系统状态，包括工作目录、登录账户、所用模型、加载的项目记忆等

```plain
/status
```

可用来确认 Claude 指向的路径和模型，是否有正确加载 CLAUDE.md 等。

#### 令牌与费用统计

用于显示当前会话的令牌使用量统计，包括提示和回答分别用了多少 token，以及预估的 API 消耗费用。

```plain
/cost
```

#### 查看或修改配置

交互式查看和修改 Claude Code 配置参数。

```plain
/config
```

执行命令会显示配置菜单，你可以根据提示修改设置，例如启用/禁用自动压缩、设置主题、切换编辑模式等。部分配置也支持通过子命令直接设置，比如 /config set autocompact off 等。

#### 切换模型

不带参数时通常会显示当前使用的模型，并提示可选模型列表；指定参数则可切换Claude所用的AI模型。

```plain
/model [model_name]
```

#### 环境健康检查

检查当前安装环境的健康状态，验证所需依赖和权限是否正确配置，并报告潜在问题。

```plain
/doctor
```

当Claude Code行为异常（比如无法读取文件、工具调用总是失败等），/doctor 命令会自动检查后输出一份报告，指出哪些项目通过，哪些存在问题。

#### 集成ide开发环境

```plain
/ide
```

#### 忘记命令

```plain
/help
```

#### 非交互模式

类似于AI助手，一次性查询

```plain
claude -p "问题描述"
```

#### 恢复对话

恢复上次对话

```plain
claude --continue
```

### 进阶技巧

#### 档位

| 档位 | 关键词 | 思考 Token 上限 | 思考深度 |
| --- | --- | --- | --- |
| NONE | 不加任何关键词 | 0 | 快速执行，几乎不思考 |
| BASIC | think / 想 | 4K | 初级思考，快速粗略规划 |
| MIDDLE | think hard / 好好想 | 10K | 中度思考，适合复杂任务 |
| HIGHEST | ultrathink / 仔细思考 | 32K | 最深层思考，适合攻坚战 |

#### 命令

- 输入`!`把对话窗口切换成命令行模式，可以执行一些临时的命令，而不需要多开一个窗口。执行结果跟过程都会加入对话上下文。

- 输入`#`进入记忆模式，输入的文字会加入CLAUDE.md文件成为长期记忆。


#### 接入外部工具（MCP）

```shell
# 添加 MySQL 支持
claude mcp add mysql npx @benborla29/mcp-server-mysql \
  -e MYSQL_HOST=localhost \
  -e MYSQL_USER=root \
  -e MYSQL_PASS=password \
  -e MYSQL_DB=test

# 添加 Playwright（网页自动化）
claude mcp add playwright npx '@playwright/mcp@latest'
```

#### 自定义命令

在项目根目录下创建`.claude/commands.json`，定义快捷命令，如：
```shell
{
  "run-tests": "npm run test",
  "deploy": "npm run build && rsync -av dist/ server:/var/www/"
}
```