---
title: ollama
---

使用 ollama 在本地安装使用大模型

## 安装

[https://ollama.com/](https://ollama.com/)

## 命令

```shell
# 启动
ollama serve

# 创建模型
# 使用 Modelfile 来创建一个新模型。你需要提供一个包含模型信息的 Modelfile
ollama create /path/to/Modelfile

# 显示模型信息
ollama show model_name

# 列出所有模型
ollama list
ollama ls

# 运行模型
ollama run model_name

# 列出正在运行的模型
ollama ps

# 删除模型
ollama rm model_name

# 查看版本
ollama -v
ollama --version

# 复制模型
ollama cp old_model new_model

# 从注册表拉取模型
ollama pull model_name

# 推送模型到注册表
# 将本地模型推送到模型注册表中，以便他人或其他系统使用。
ollama push model_name
```

## 配置模型下载目录

配置环境变量 `OLLAMA_MODELS` 为 `E:\ollama_models`，注意：配置之后需要重启`ollama`

## 安装`deepseek-r1`

[deepseek-r1:32b](https://ollama.com/library/deepseek-r1:32b)

```shell
ollama run deepseek-r1:32b
```

## vscode中使用

安装`Continue`插件，使用快捷键 `Cmd+L` 打开对话框，切换模型

## 参考 
[在 Mac 上使用 VS Code、Continue 和 Ollama + Qwen2.5-Coder 搭建免费的本地 AI 编程助手](https://www.liuxiao.org/2024/09/%E5%9C%A8-mac-%E4%B8%8A%E4%BD%BF%E7%94%A8-vs-code%E3%80%81continue-%E5%92%8C-ollama-qwen2-5-coder-%E6%90%AD%E5%BB%BA%E6%9C%AC%E5%9C%B0-ai-%E7%BC%96%E7%A8%8B%E5%8A%A9%E6%89%8B/)
