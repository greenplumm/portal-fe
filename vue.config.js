/* eslint-disable fun-call-spacing */
/*
 * @Author: your name
 * @Date: 2020-12-13 12:52:00
 * @LastEditTime: 2020-12-14 11:29:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /portal-fe/src/vue.config.js
 */
const port = 7070;
const title = 'portal项目';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
// const bodyParser = require('body-parser');
module.exports = {
  publicPath: '/', // 部署应用包时的基本 URL
  devServer: {
    port,
    proxy: {
      // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: ''
        }
      }
    }
    // before: app => {
    //   app.use(bodyParser.json());

    //   app.post("/dev-api/user/login", (req, res) => {
    //     const { username } = req.body;

    //     if (username === "admin" || username === "jerry") {
    //       res.json({
    //         code: 1,
    //         data: username
    //       });
    //     } else {
    //       res.json({
    //         code: 10204,
    //         message: "用户名或密码错误"
    //       });
    //     }
    //   });

    //   app.get("/dev-api/user/info", (req, res) => {
    //     const auth = req.headers["authorization"];
    //     const roles = auth.split(' ')[1] === "admin" ? ["admin"] : ["editor"];
    //     res.json({
    //       code: 1,
    //       data: roles
    //     });
    //   });
    // }
  },
  configureWebpack: {
    // 向index.html注入标题
    name: title
  },
  chainWebpack(config) {
    config.module.rule('svg')
      .exclude.add(resolve('./src/icons'));

    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });
  }
};
