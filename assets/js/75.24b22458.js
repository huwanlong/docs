(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{502:function(s,a,t){"use strict";t.r(a);var e=t(21),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"查杀进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查杀进程"}},[s._v("#")]),s._v(" 查杀进程")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" python\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" pid\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"清空回收站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清空回收站"}},[s._v("#")]),s._v(" 清空回收站")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" ~/.local/share/Trash/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"磁盘详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘详情"}},[s._v("#")]),s._v(" 磁盘详情")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"日志不显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志不显示"}},[s._v("#")]),s._v(" 日志不显示")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" python3 app.py start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" xx.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"打包解包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包解包"}},[s._v("#")]),s._v(" 打包解包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cvf")]),s._v(" xxx.tar *.xx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包目录下以`.xx`结尾的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解包到某目录")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"ssh-远程拷贝文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-远程拷贝文件"}},[s._v("#")]),s._v(" SSH 远程拷贝文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@192.168.167.131:/home/root/dome.png /home/user/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" root@192.168.167.131:/home/root/test home/user/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /home/user/dome.png root@192.168.167.131:/home/root/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" /home/user/test root@192.168.167.131:/home/root/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screen"}},[s._v("#")]),s._v(" screen")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" python demo.py "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" test_screen "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印所有screen进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("screen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" test_screen "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入screen")]),s._v("\nctrl + a + d "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);