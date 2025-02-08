(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{455:function(s,a,e){"use strict";e.r(a);var n=e(21),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("使用 ollama 在本地安装使用大模型")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ollama.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://ollama.com/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nollama serve\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建模型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 Modelfile 来创建一个新模型。你需要提供一个包含模型信息的 Modelfile")]),s._v("\nollama create /path/to/Modelfile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示模型信息")]),s._v("\nollama show model_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有模型")]),s._v("\nollama list\nollama "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行模型")]),s._v("\nollama run model_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出正在运行的模型")]),s._v("\nollama "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除模型")]),s._v("\nollama "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" model_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本")]),s._v("\nollama "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nollama "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制模型")]),s._v("\nollama "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" old_model new_model\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从注册表拉取模型")]),s._v("\nollama pull model_name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送模型到注册表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地模型推送到模型注册表中，以便他人或其他系统使用。")]),s._v("\nollama push model_name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h2",{attrs:{id:"配置模型下载目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置模型下载目录"}},[s._v("#")]),s._v(" 配置模型下载目录")]),s._v(" "),a("p",[s._v("配置环境变量 "),a("code",[s._v("OLLAMA_MODELS")]),s._v(" 为 "),a("code",[s._v("E:\\ollama_models")]),s._v("，注意：配置之后需要重启"),a("code",[s._v("ollama")])]),s._v(" "),a("h2",{attrs:{id:"安装deepseek-r1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装deepseek-r1"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("deepseek-r1")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ollama.com/library/deepseek-r1:32b",target:"_blank",rel:"noopener noreferrer"}},[s._v("deepseek-r1:32b"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ollama run deepseek-r1:32b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"vscode中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode中使用"}},[s._v("#")]),s._v(" vscode中使用")]),s._v(" "),a("p",[s._v("安装"),a("code",[s._v("Continue")]),s._v("插件，使用快捷键 "),a("code",[s._v("Cmd+L")]),s._v(" 打开对话框，切换模型")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.liuxiao.org/2024/09/%E5%9C%A8-mac-%E4%B8%8A%E4%BD%BF%E7%94%A8-vs-code%E3%80%81continue-%E5%92%8C-ollama-qwen2-5-coder-%E6%90%AD%E5%BB%BA%E6%9C%AC%E5%9C%B0-ai-%E7%BC%96%E7%A8%8B%E5%8A%A9%E6%89%8B/",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 Mac 上使用 VS Code、Continue 和 Ollama + Qwen2.5-Coder 搭建免费的本地 AI 编程助手"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);