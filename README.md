#####技术栈选择

- 前端整合：vue-cli3.0、axios、elementUI 等
- 命令行工具整合：commander、chalk、figlet、shelljs 等
- 后端整合：node、 koa2、koa-mysql-session、mysql 等
- 服务器整合：nginx、pm2、node 等

#####基本功能模块实现

- 一键部署
  基于本地的命令行工具，可以快速打包 view 端的静态文件并上传到服务器，也可快速上传 server 端的文件到服务器文件夹，配合 pm2 的监控功能进行代码的热更新，无缝更新接口逻辑
- 快速迭代
  提供基本的使用案例，包括前端的 view 层的容器案例与组件案例，组件的 api 设定以及集合了 axios 的中间件逻辑，方便用户快速搭建自己的项目，代码清晰，易于分析与修改，

#####基本模块举例 1.登录页面(一期不做)

- 登录 -正确反馈 错误反馈 登录成功后 session 的设定
- 注册 -重名检测 正确反馈 错误反馈

2. 主要模块功能

- 模块增删查改基本功能的实现

3. 后台 koa2 服务模块(第一期没有)

- 配合 koa-mysql-session 进行 session 的设定储存
- checkLogin 中间件的实现
- cors 跨域白名单的设定
- middlewer 中间件的设定
- mysql 连接池的封装
  等等。。。

4. 服务端

- nginx 的基本配置与前端端分离的配置
- pm2 多实例构建配置文件的配置文件 pm2config.json

#####使用流程

1. 本地调试

- 安装 mysql （第一期没有）

```
// 进入sql命令行
$ mysql -u root -p
// 创建名为nodesql的数据库
$ create database nodesql
```

- 安装 pm2
- 过程请百度
- 拉取项目代码

```

cd portal-fe
// 安装插件
cnpm i 或 npm i 或者 yarn add
// 安装link
sudo npm link
//  然后就能使用命令行工具了
portal start
// 命令行
yarn run serve
```

#####主要代码解析

- 代码逻辑
  ![image.png](https://upload-images.jianshu.io/upload_images/2591469-172a9e0daa29ab70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- server
  ![image.png](https://upload-images.jianshu.io/upload_images/2591469-8e93f7b5e33b3c69.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- bin

![image.png](https://upload-images.jianshu.io/upload_images/2591469-37d18014383d8a35.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 启动效果

```
启动项目
yarn run v1.3.2
$ pm2 restart ./server/index.js && vue-cli-service serve
Use --update-env to update environment variables
[PM2] Applying action restartProcessId on app [./server/index.js](ids: 0,1)
┌──────────┬────┬─────────┬─────────┬───────┬────────┬─────────┬────────┬─────┬───────────┬───────────┬──────────┐
│ App name │ id │ version │ mode    │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user      │ watching │
├──────────┼────┼─────────┼─────────┼───────┼────────┼─────────┼────────┼─────┼───────────┼───────────┼──────────┤
│ index    │ 0  │ 0.1.0   │ fork    │ 77439 │ online │ 2640    │ 0s     │ 0%  │ 15.4 MB   │ koala_cpx │ disabled │
└──────────┴────┴─────────┴─────────┴───────┴────────┴─────────┴────────┴─────┴───────────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
 INFO  Starting development server...
 98% after emitting CopyPlugin DONE  Compiled successfully in 10294ms16:31:55


  App running at:
  - Local:   http://localhost:7070/

 
```


- nginx 配置

```
       location ^~ /api {
          proxy_pass http://127.0.0.1:7070;
        }

        location ^~ /file/ {
            alias /home/server/controller/public/;
        }

        location / {
            root   /home/dist/;
            index  index.html index.htm;
        }
```
