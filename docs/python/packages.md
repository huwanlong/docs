---
title: Packages
---
## 概述

开发中常用包的使用

## python-dotenv

### 安装

```shell
conda install python-dotenv
```

### 使用

#### 1、创建.env文件

在项目根目录下创建一个 `.env` 文件

```shell
USERNAME=user
DATABASE_URL=postgres://${USERNAME}:password@localhost:5432/mydatabase
SECRET_KEY=mysecretkey
DEBUG=True
```

#### 2、从.env文件里加载环境变量

```python
from dotenv import load_dotenv
import os

# 加载 .env 文件中的环境变量
# verbose：True时会在加载 .env 文件时输出调试信息
# override：如果系统中已经存在该环境变量，False不覆盖，True覆盖，默认为False
# interpolate：是否启用变量插值
# encoding：默认"utf-8"
load_dotenv(dotenv_path=".env", verbose=True, override=True, interpolate=True)

# 获取环境变量
database_url = os.getenv('DATABASE_URL')
SECRET_KEY = os.getenv('SECRET_KEY', '123456')
debug = True if os.getenv('DEBUG') == "True" else False

print(f"Database URL: {database_url}")
```

