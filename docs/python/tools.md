---
title: Tools
---

## 概述

python 开发中的常用工具、命令总结。

| 工具              | 作用                                                         |
| ----------------- | ------------------------------------------------------------ |
| conda             | pip + virtualenv + virtualenvwrapper                         |
| Anaconda          | 数据分析开发包 ，一个打包的集合，里面预装好了conda、某个版本的python、众多packages、科学计算工具等等，就是把很多常用的不常用的库都给你装好了 |
| Miniconda         | 只包含最基本的内容——python与conda，以及相关的必须依赖项      |
| pyenv             | 版本管理器                                                   |
| virtualenv        | 最为常用的虚拟环境工具                                       |
| virtualenvwrapper | 统一管理各个环境的扩展工具。virtualenv 的一个局限是无法统一管理你电脑上的所有虚拟环境，因此环境多了之后，可能会遗漏，或造成冗余。 |


## 管理工具

### Anaconda

#### 下载安装

[https://docs.anaconda.com/anaconda/install/windows/](https://docs.anaconda.com/anaconda/install/windows/)

#### 管理环境

```shell
# 版本
conda --version

# 查看当前配置
conda config --show

# 更新
conda update conda

# 帮助
conda --help
# or
conda -h

# 创建新环境
conda create --name <env_name> <package_names>
# 如
conda create -n python3 python=3.5 numpy pandas

# 切换环境
activate <env_name>

# 退出当前环境到base，base退出到root
conda deactivate

# 显示已创建环境
conda info --envs
# or
conda info -e
# or
conda env list

# 复制环境
conda create --name <new_env_name> --clone <copied_env_name>

# 删除环境
conda remove --name <env_name> --all
```

#### 管理包

```shell
# 查找可供安装的包版本
# 精确查找
conda search --full-name <package_full_name>
# 模糊查找
conda search <text>

# 获取当前环境中已安装的包信息
conda list

# 安装包
# 在指定环境中安装包
conda install --name <env_name> <package_name>
# 在当前环境中安装包
conda install <package_name>
# 如果conda install无法进行安装时，可以用pip安装
pip install <package_name>
# 也可以到 http://anaconda.org 搜索包，通过点击进入包的详情页，复制安装命令进行安装

# 卸载包
# 卸载指定环境中的包
conda remove --name <env_name> <package_name>
# 卸载当前环境中的包
conda remove <package_name>

# 更新包
# 更新所有包
conda update --all
# or
conda upgrade --all
# 更新指定包
conda update <package_name>
# or
conda upgrade <package_name>
```

#### 换源

创建文件 C:/Users/xxxx/.condarc

```shell
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
ssl_verify: true
```

#### requirements

```shell
conda list -e > requirements.txt # 导出
conda install --yes --file requirements.txt # 导入
```

#### env.yaml

```yaml
# yaml or yml，内容如下
name: facings-identifier
channels:
  - defaults
dependencies:
  - python=3.11
  - pip
  - pip:
    - -r requirements.txt
```

```shell
# 根据配置文件创建环境
conda env create -f env.yaml
# 以新名字创建环境
conda env create -f env.yaml --name my_new_env
```

```shell
# 导出环境配置文件
conda env export > env.yaml
# 导出json格式文件
conda env export --json > env.json
# 将env_name环境导出
conda env export --name <env_name> > env.yaml
# 导出不带前缀的环境
conda env export --no-builds > env.yaml
# 轻量级导出，不包括作为依赖项自动安装的包，避免重新创建环境时可能遇到的依赖冲突问题
conda env export --from-history > env.yaml
```

```shell
# 更新
conda env update --name <env_name> --file env.yaml
```

#### 其它配置

```shell
conda config --set auto_activate_base true # 打开powershell可以直接进base环境
```

### `miniconda`

> 参考：[https://blog.csdn.net/djfjkj52/article/details/107330301](https://blog.csdn.net/djfjkj52/article/details/107330301)

#### 下载安装
```shell
wget -c https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh # 下载
chmod 777 Miniconda3-latest-Linux-x86_64.sh #给执行权限
bash Miniconda3-latest-Linux-x86_64.sh #运行
```
不将conda加入环境变量
```shell
Do you wish the installer to initialize Miniconda3
by running conda init? [yes|no]
[no] >>> 
```

#### 添加源
```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
```
```shell
conda config --set show_channel_urls yes
conda config --get channels
```
```shell
vim ~/.condarc # 记录源文件
```

#### 命令
```shell
# 给权限
chmod 777 ~/miniconda3/bin/activate
# 启动
source ~/miniconda3/bin/activate
# 退出
source ./deactivate
# 或者
conda deactivate
```

### pip


#### 查找软件

```shell
pip search package
```

#### 安装软件

```shell
pip install package
pip install -r requirements.txt
```

#### 更新软件

```shell
pip install -U package
```

#### 卸载软件

```shell
pip uninstall package
```

#### 列出已安装软件

```shell
pip list
```

#### 导出依赖

```shell
pip freeze > requirements.txt
```

#### 换源

创建文件`C:/Users/xxxx/pip/pip.ini`

`linux`需要创建 `~/.pip/pip.conf`

```shell
mkdir ~/.pip
vim ~/.pip/pip.conf
```

然后写入

```shell
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

#### 更新自己

```
sudo pip3 install --upgrade pip
```

#### 查看版本

```shell
# 一般情况下这两个应该是一样的，当多个版本时这两个有可能不一样
python -m pip -V
pip -V
```

### pyenv


#### windows安装

##### 安装

```shell
pip install pyenv-win --target %USERPROFILE%/.pyenv
```

##### 环境变量

设置一个系统变量`PYENV`，值为`C:\Users\用户名\.pyenv\pyenv-win`

path 里面添加：

```shell
%PYENV%\bin
%PYENV%\shims
```

##### 换源

将`C:\Users\用户名\.pyenv\pyenv-win\.versions_cache.xml`中 `https://www.python.org/ftp/python` 全换成 `https://npm.taobao.org/mirrors/python`


##### 使用方法

```shell
# 将pyenv相关环境变量放到Path中所有python相关的最上面
# 使用pyenv global XXX 切换到一个特定的python版本
# 或在项目目录中pyenv local XXX 给项目一个固定的版本
# 进入项目目录创建虚拟环境
python -m venv .venv # python -m venv XXX（虚拟环境名）
# 激活虚拟环境
.\.venv\Scripts\activate
# 退出虚拟环境
deactivate
```

#### linux安装

> 参考：[https://blog.kyomind.tw/ubuntu-pyenv/](https://blog.kyomind.tw/ubuntu-pyenv/)
> [https://blog.csdn.net/weixin_42892543/article/details/122544900](https://blog.csdn.net/weixin_42892543/article/details/122544900)

##### 安装
```shell
# 系统没有python命令，安装python-is-python3包可以指定python为默认的python3
sudo apt install python-is-python3

git clone https://github.com/pyenv/pyenv.git ~/.pyenv
```

##### 环境变量
```shell
# 这一段貌似有问题
echo -e 'if shopt -q login_shell; then' \
      '\n  export PYENV_ROOT="$HOME/.pyenv"' \
      '\n  export PATH="$PYENV_ROOT/bin:$PATH"' \
      '\n eval "$(pyenv init --path)"' \
      '\nfi' >> ~/.bashrc
# 需要改成下面两条，先记录一下，后续观察
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc

echo -e 'if [ -z "$BASH_VERSION" ]; then'\
      '\n  export PYENV_ROOT="$HOME/.pyenv"'\
      '\n  export PATH="$PYENV_ROOT/bin:$PATH"'\
      '\n  eval "$(pyenv init --path)"'\
      '\nfi' >>~/.profile
echo 'if command -v pyenv >/dev/null; then eval "$(pyenv init -)"; fi' >> ~/.bashrc
source ~/.bashrc
```
##### 安装依赖
```shell
sudo apt-get install libc6-dev gcc
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm
```
##### 指定源下载

> 参考：[https://blog.csdn.net/qq_43213352/article/details/104343365](https://blog.csdn.net/qq_43213352/article/details/104343365)

```shell
v=3.6.0; wget https://npm.taobao.org/mirrors/python/$v/Python-$v.tar.xz -P ~/.pyenv/cache/; pyenv install $v 
```

##### 安装pyenv-virtualenv
```shell
git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
```


##### 使用方法
```shell
# 以3.8.7（需要先install）创建虚拟环境
pyenv virtualenv 3.8.7 test 
# 激活
pyenv activate test
# 退出
pyenv deactivate test
# 删除
pyenv uninstall test
# 或者在目录里创建虚拟环境
python -m venv .venv
# 激活
source ./.venv/bin/activate
# 退出
deactivate
```

#### 常用命令

```shell
# 列出当前系统中所有安装的python
pyenv versions
# 显示出当前使用的python
pyenv version
# 设置使用哪一个python
pyenv global <python_version>
# 恢复系统版本
pyenv global system
# 通过将版本号写入当前目录下的 .python-version 文件的方式设置 Python 本地版本
pyenv local <python_version>
# 取消本地版本设置
pyenv local –unset
# 安装特定版本的python
pyenv install <python_version> # pyenv install 3.8.7
# 移除特定版本的python
pyenv uninstall <python_version>
# 查看可安装的python
pyenv install -l
# 升级
pyenv update
# 重建环境变量，每当你增删python版本或增删带可执行性的包（如pip）以后，都应该执行一次本命令
pyenv rehash  
```

### py.exe

适用于 Windows 的 Python 启动器，有助于在 (Windows) 系统上执行具有不同Python版本的 Python 脚本，一般安装在`C:\Windows`

参考：[https://renenyffenegger.ch/notes/Windows/dirs/Windows/py_exe](https://renenyffenegger.ch/notes/Windows/dirs/Windows/py_exe)

#### 用法

```shell
# Show installed Python versions
py -0 # 电脑上通过.exe安装的python的列表
# Run a script (or here: command) with the newest Python 2 version
py -2 -c "import sys; print (sys.version)"
# Run a script (or here: command) with the newest Python 3 version
py -3 -c "import sys; print (sys.version)"
# Specify a more exact version
py -3.6 test.py
# Showing the «real» interpreter
py -c "import sys; print (sys.executable)"
```

### rye

#### 安装

[https://rye-up.com/guide/installation/#installing-rye](https://rye-up.com/guide/installation/#installing-rye)

#### 使用

[https://blog.csdn.net/Java_ZZZZZ/article/details/131201415](https://blog.csdn.net/Java_ZZZZZ/article/details/131201415)

## jupyter

### 使用

```shell
# 安装
conda install jupyter notebook
# 汉化，notebook版本7以上
conda install jupyterlab-language-pack-zh-CN
# or
conda install -c conda-forge jupyterlab-language-pack-zh-CN
# 启动，最好是在conda的base环境里启动
jupyter notebook
```

打开 [http://localhost:8888/](http://localhost:8888/)

```shell
# 如果报jupyterlab相关的错，可以将jupyterlab重新安装一下
pip uninstall jupyterlab
pip install jupyterlab
jupyter lab build
jupyter lab
```

### 切换内核

```shell
# 在需要新加入内核的环境里安装ipykernel
conda activate data-mining
conda install ipykernel
python -m ipykernel install --user --name [Your enviroment name] --display-name "[Name you want to show in jupyter]"
# 如
python -m ipykernel install --user --name data-mining --display-name data-mining
# 切换到base环境启动jupyter notebook
conda activate base
jupyter notebook
# 然后 在页面菜单里 内核->更换内核 切换

# 如果需要删除内核
jupyter kernelspec list # 查看内核列表
jupyter kernelspec remove data-mining # 删除名为data-mining的内核
```

### 卸载

删除`jupyter`、`notebook`开头的相关包

删除 `C:\Users\用户名\AppData\Roaming\jupyter`文件夹

### cell使用

一对 In Out 会话被视作一个代码单元，称为 cell

编辑模式：

- enter
- 鼠标直接点

命令模式：

- esc
- 鼠标在本单元格之外点一下

快捷键操作

- 执行代码：shift + enter

命令模式：

- A，在当前 cell 的上面添加 cell
- B，在当前 cell 的下面添加 cell
- 双击 D：删除当前 cell
- y or m 切换 code 和 markdown

编辑模式：

- 多光标操作：Ctrl 键点击鼠标
- 回退：Ctrl+Z
- 补全代码：变量、方法后跟 Tab 键
- 为一行或多行代码添加/取消注释：Ctrl+/

## 依赖库管理工具

### pipreqs
#### 特点
1. 搜索依赖库的范围是基于目录的方式，很有针对性。
2. 搜索的依据是脚本中所import的内容。
3. 可以在未安装依赖库的环境上生成依赖文件。
4. 查找软件包信息时，可以指定查询方式（只在本地查询，在Pypi查询、或者在自定义的Pypi服务）
安装
#### 安装
```shell
pip install pipreqs
```

#### 使用

```shell
pipreqs /home/project/location # 生成到location目录下
pipreqs ./ --encoding=utf-8 # 不加 --encoding=utf8 可能会出现编码问题
pipreqs ./ --encoding=utf-8 --force # 强制执行，覆盖原有的 requirements.txt 文件
```

### pigar

pigar 同样可以根据项目路径来生成依赖文件，而且会列出依赖库在文件中哪些位置使用到了

#### 安装

```shell
pip install pigar
```

#### 使用

```shell
pigar # 生成requirements.txt 文件
pigar -s bs4 MySQLdb # 通过“-s”参数，查找真实的依赖库
```

### pip-tools

pip-tools 包含一组管理项目依赖的工具：pip-compile 与 pip-sync，可以使用命令“pip install pip-tools”统一安装。它最大的优势是可以精准地控制项目的依赖库。

pip-compile 命令主要用于生成依赖文件和升级依赖库，支持在一个依赖文件中嵌套其它的依赖文件(例如，在 requirements.in 文件内，可以用“-c requirements.txt”方式，引入一个依赖文件)。

#### 安装

```shell
python -m pip install pip-tools -i https://pypi.douban.com/simple/
```

#### 使用

然后建立一个 `requirements.in` 文件，其中可以写入你需要的模块

```text
Django
jsonschema
```

执行命令

```shell
pip-compile requirements.in # 可生成带有关联依赖的`requirements.txt`
```

生成文件`requirements.txt`

```txt
asgiref==3.5.2
    # via django
attrs==22.1.0
    # via jsonschema
backports-zoneinfo==0.2.1
    # via django
django==4.1.2
    # via -r requirements.in
importlib-resources==5.10.0
    # via jsonschema
jsonschema==4.16.0
    # via -r requirements.in
pkgutil-resolve-name==1.3.10
    # via jsonschema
pyrsistent==0.19.1
    # via jsonschema
sqlparse==0.4.3
    # via django
tzdata==2022.6
    # via django
zipp==3.10.0
    # via importlib-resources
```
pip-sync 命令可以根据 requirements.txt 文件，来对虚拟环境中进行安装、升级或卸载依赖库(注意：除了 setuptools、pip 和 pip-tools 之外)。这样可以有针对性且按需精简地管理虚拟环境中的依赖库。

```shell
pip-sync dev-requirements.txt requirements.txt # 将多个“*.txt”依赖文件归并成一个
```

### pipdeptree

pipdeptree 是一个命令行实用程序，可识别安装在环境中python包，用于以依赖树的形式显示已安装的python包，它可为检测相互冲突的依赖包提供帮助。

#### 安装

```shell
pip install pipdeptree
```

#### 使用

```shell
pipdeptree # 查看所有包及其依赖
pipdeptree -p package # 查看指定包，其需要的依赖
pipdeptree -p package -r # 查看哪些包，依赖于此包
pipdeptree --json-tree > test.json # 生成json文件
pipdeptree -f | tee requirements.txt # 生成requirements.txt
```

## 格式化工具

[代码规范 PEP](https://peps.python.org/)

### pylint

检查违反 PEP 8 规范和常见错误的工具

#### 安装

```shell
pip install pylint
```

#### 使用

```shell
pylint [options] {source_file_or_directory}
```

### flake8

Python官方发布的一款辅助检测Python代码是否符合规范的工具

参考：[https://zhuanlan.zhihu.com/p/392178725](https://zhuanlan.zhihu.com/p/392178725)

#### 安装

```shell
pip install flake8
```

#### 使用

```shell
flake8 {directory}
```

### pycodestyle

pycodestyle 检查器提供基于 PEP-8 样式约定的代码建议，原名`pep8`

#### 安装

```shell
pip install pycodestyle
```

#### 使用

```shell
pycodestyle test.py
pycodestyle --statistics -qq test.py # 查看错误发生的频率
```

### black

代码格式化工具

参考：[https://muzing.top/posts/a29e4743/](https://muzing.top/posts/a29e4743/)

#### 安装

```shell
pip install black
```

#### 使用

```shell
black {source_file_or_directory}
# 跳过字符串格式化 Black 会默认将字符串格式化为使用双引号包裹，但有些项目已经使用了单引号的规范且不应修改为双引号，就需要加上一个 `-S / --skip-string-normalization` 的选项。
black -S {source_file_or_directory}
```

### autopep8

代码格式化工具

#### 安装

```shell
pip install autopep8
```

#### 使用

```shell
autopep8 --in-place --aggressive --aggressive test.py # 将格式化后的代码重新写入文件中
autopep8 --aggressive --aggressive test.py # 直接看格式化效果，不覆盖原有的代码
```

### yapf

Yapf是另一种有自己的配置项列表的重新格式化代码的工具。它与 Autopep8 的不同之处在于它不仅会指出代码中违反 PEP 8 规范的地方，还会对没有违反 PEP 8 但代码风格不一致的地方重新格式化，旨在令代码的可读性更强。

[配置项](https://github.com/google/yapf#usage)

#### 安装

```shell
pip install yapf
```

#### 使用

```shell
yapf [options] {source_file_or_directory}
```

### mypy

mypy是一款针对python的静态类型检查程序，默认情况下mypy不会提醒代码任何错误，如果使用的是Python3.6及以上版本，可以使用typing模块为代码进行类型标注，然后mypy就可以根据这些类型提示检查应用程序

参考：[https://www.modb.pro/db/127528](https://www.modb.pro/db/127528)

#### 安装

```shell
pip install mypy
```

#### 使用

```shell
mypy test.py
```

### pydocstyle

静态分析工具，用于检查是否符合python 文档字符串约定，支持 PEP 257 开箱即用

#### 安装

```shell
pip install pydocstyle
```

#### 使用

```shell
pydocstyle test.py # 格式化指定文件
pydocstyle . # 格式化目录
```

### isort

#### 背景

PEP8 有建议 Python 模块中 import 的导入顺序

1. 首先引入标准库里的模块
2. 然后引入第三方模块
3. 最后引入自己的模块

属于同一个部分的 import 语句按字母顺序排列

isort 可以自动将 Python 模块中的 import 进行排序，并自动按类型划分以满足上面说的 PEP8 规范

官网：[https://pycqa.github.io/isort/docs/configuration/options.html](https://pycqa.github.io/isort/docs/configuration/options.html)

参考：[https://zhuanlan.zhihu.com/p/392489048](https://zhuanlan.zhihu.com/p/392489048)

#### 安装

```shell
pip install isort
```

#### 使用

```shell
isort test.py test1.py # 格式化指定文件
isort . # 格式化目录
isort test.py --diff # 只显示修改建议，但不会修改文件
```

## 开发工具

### VS Code

配置：[https://code.visualstudio.com/docs/python/python-tutorial](https://code.visualstudio.com/docs/python/python-tutorial)

参考：[https://www.cnblogs.com/it-tsz/p/9346110.html](https://www.cnblogs.com/it-tsz/p/9346110.html)

## 参考

1. [Conda和Pyenv哪个好](https://www.zhihu.com/question/265550980/answer/1538304825)
2. [virtualenv和conda的区别](https://blog.csdn.net/zhouchen1998/article/details/84671528)
3. [依赖库管理](https://blog.csdn.net/qq_38556887/article/details/125426029)
5. [pylint、Flake8、Isort、Autopep8、Yapf、Black区别](https://www.cnblogs.com/bonelee/p/11045196.html)