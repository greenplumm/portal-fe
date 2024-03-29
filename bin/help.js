/*
 * @Author: your name
 * @Date: 2020-12-01 16:54:52
 * @LastEditTime: 2020-12-14 11:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /portal-fe/bin/help.js
 */
const chalk = require('chalk');
const figlet = require('figlet');

function help() {
  console.log(
    chalk.yellow(
      figlet.textSync('- portal - fe -', { horizontalLayout: 'full' })
    )
  );
  console.log('');
  console.log(chalk.red('欢迎使用 portal-fe 命令行工具'));
  console.log('');
  console.log(chalk.green('命令列表：'));
  console.log('');
  console.log(chalk.red('----> -v(简写), --version : 输出版本信息'));
  console.log(chalk.red('----> -s(简写), --start : 启动项目'));
  console.log(chalk.red('----> -b(简写), --build : 构建上传静态项目'));
  console.log(chalk.red('----> -p(简写), --prod : 上传服务器文件'));
  console.log(chalk.red('----> -l(简写), --lint : 代码检验'));
  console.log(
    chalk.red('----> -a(简写), --push : 构建并上传所有端口 静态 服务器')
  );
  console.log('');
  console.log(chalk.green('author cpx'));
}

module.exports = help;
