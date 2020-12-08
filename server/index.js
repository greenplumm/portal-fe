/*
 * @Author: your name
 * @Date: 2020-12-01 16:54:52
 * @LastEditTime: 2020-12-02 10:20:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /portal-fe/server/index.js
 */
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
// const session = require("koa-session-minimal");
// const MysqlStore = require("koa-mysql-session");
const config = require("./config/default.js");
const cors = require("koa2-cors");
const app = new Koa();

// session存储配置

// 配置session中间件

// 路由白名单
const origin = []; // 允许来自所有域名请求

app.use(
  cors({
    origin: function(ctx) {
      console.log(ctx.url);
      if (origin.includes(ctx.url)) {
        return ctx.request.header.origin;
      }
      // 本地测试用
      return "http://localhost:8080";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "content-type",
      "X-PINGOTHER"
    ]
  })
);

app.use(
  bodyParser({
    formLimit: "1mb"
  })
);

//  路由
// app.use(require("./routers/signin.js").routes());
// app.use(require("./routers/signup.js").routes());
// app.use(require("./routers/record.js").routes());
// app.use(require("./routers/user.js").routes());

app.listen(config.port);

console.log(`listening on port ${config.port}`);
