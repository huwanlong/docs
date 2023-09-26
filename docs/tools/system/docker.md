---
title: docker
---

## 安装

https://www.runoob.com/docker/ubuntu-docker-install.html

```shell
systemctl enable docker # 开机自启
```

## 镜像

### 拉镜像

镜像 http://hub.daocloud.io

docker pull 镜像名称[:tag]

如果要到`daocloud`上拉 `docker pull daocloud.io/library/tomcat:8.5.15-jre8`

### 查看本地镜像

docker images

### 删除本地镜像

`docker rmi 镜像的标识（通过docker images查看到 image id）`

### 镜像的导入导出（不规范）

导出 docker save -o 导出路径 镜像ID 如 `docker save -o ./tomcat.image b8`

导入 docker load -i 镜像文件 如 `docker load -i tomcat.image`

导入后没有名字和版本 通过 docker tag 镜像id 新镜像名称:版本 如 `docker tag b8 tomcat:8.5`


## 容器

### 运行容器

docker run -d -p 宿主机端口:窗口端口 --name 容器名称 镜像的标识|镜像名称[:tag]

-d: 后台运行

-p 宿主机端口:窗口端口: 为了映射当前Linux的端口和容器的端口

--name 容器名称 镜像的标识|镜像名称[:tag]:

如 `docker run -d -p 8081:8080 --name tomcat b8`

### 查看正在运行的容器

`docker ps [-qa]`

-a：查看全部的容器，包括没有运行的

-q：只查看容器得到标识

### 查看容器的日志

docker logs -f 容器ID

### 进入容器内部

docker exec -it 容器ID bash

### 退出容器 

`ctrl+p+q`

### 删除容器

删除前，需要先停止

停止指定的容器 `docker stop 容器ID`

停止全部容器 `docker stop $(docker ps -qa)`

删除指定的容器 `docker rm 容器id`

删除全部容器 `docker rm $(docker ps -qa)`

### 启动容器

docker start 容器ID

### 应用

#### 安装`mysql`

`docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root daocloud.io/library/mysql:5.7.4`

#### 安装`nginx`

`docker run -d -p 80:80 --name nginx daocloud.io/library/nginx:1.7.8`

把文件放到`nginx`里：

`docker cp 文件名 容器id:容器内部路径` 如 `docker cp test.html e0:/usr/share/nginx/html/`

### 数据卷

将宿主机的一个目录映射到容器的一个目录中。

#### 创建数据卷

docker volume create 数据卷名称

创建数据卷之后，默认会存放在一个目录下/var/lib/docker/volumes/数据卷名称/_data

#### 查看数据卷的详细信息

docker volume inspect 数据卷名称

#### 查看全部数据卷

docker volume ls

#### 删除数据卷

docker volume rm 数据卷名称

#### 应用数据卷

1、当映射数据卷时，如果数据卷不存在，docker会帮你自动创建，这种方式会将容器内部自带的文件，存储在默认的存放路径中。

`docker run -v 数据卷名称:容器内部的路径 镜像id`

`docker run -d -p 80:80 --name nginx -v nginx:/usr/share/nginx/html/ a3`

2、也可以直接指定一个路径作为数据卷的存放位置，这种方式路径下是空的，不会带上原来的。

`docker run -v 路径:容器内部的路径 镜像id`

## 自定义镜像

创建一个`Dockerfile`文件，并且指定自定义镜像信息

### `Dockerfile`

`Dockerfile`文件中常用的内容

from: 指定当前自定义镜像依赖的环境

copy: 将相对路径下的内容复制到自定义镜像中

`workdir`: 声明镜像的默认工作目录

`cmd`: 需要执行的命令（在`workdir`下执行的，`cmd`可以写多个，只以最后一个为准）

```dockerfile
from daocloud.io/library/nginx:1.7.8
copy test.html /usr/share/nginx/html
```

### 制作镜像

将准备好的`Dockerfile`和相应的文件放到同一个目录下，通过Docker的命令制作镜像

docker build -t 镜像名称:tag . (最后一个点不要忘掉，表示当前目录)

```dockerfile
docker build -t nginx-web-html:1.0.0 .
```

3、`Dockerfile`举例

```dockerfile
FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
```

## Docker-Compose

- 之前运行一个镜像，需要添加大量的参数
- 可以通过Docker-Compose编写这些参数
- Docker-Compose可以帮助我们批量的管理容器
- 只需要通过一个`docker-compose.yml`文件去维护即可。

### 管理容器命令

```shell
docker-compose up -d # 启动管理的容器
docker-compose down # 关闭并删除容器
docker-compose start|stop|restart # 开启或关闭已经存在的由docker-compose维护的容器
docker-compose ps # 查看由docker-compose管理的容器
docker-compose logs -f # 查看日志
```

### 应用

```dockerfile
version: "3.9"

services:
  mysql:
    image: 'mysql:8'
    ports:
      - 3306:3306
    env_file:
      - ./mysql/mysql.env
    volumes:
      - ./mysql/conf.d:/etc/mysql/conf.d
      - ./mysql/data:/var/lib/mysql
      - ./mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
    restart: always

  pma:
    image: phpmyadmin/phpmyadmin:latest
    env_file:
      - ./phpmyadmin/phpmyadmin.env
    depends_on:
      - mysql
    links:
      - "mysql:db"
    ports:
      - "1001:80"
    restart: always

  redis:
    image: 'redis:latest'
    command: redis-server /usr/local/etc/redis/redis.conf
    ports:
      - "6379:6379"
    volumes:
      - ./redis/data:/data
      - ./redis/redis.conf:/usr/local/etc/redis/redis.conf
    restart: always

  rabbitmq:
    image: 'rabbitmq:3-management'
    hostname: myrabbitmq
    env_file:
      - ./rabbitmq/rabbitmq.env
    volumes:
      - ./rabbitmq/data/:/var/lib/rabbitmq/
    ports:
      - 15672:15672
      - 5672:5672
      - 1883:1883
    restart: always
```









