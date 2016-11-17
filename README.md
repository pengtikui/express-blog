## Express Blog

一个基于 Express 的简单的博客 Demo，仅可用于初学者参考，具体内容请参考各文件夹下的 README 文件。

### 技术栈

* Node.js
* Express
* MongoDB
* Boostrap
* jQuery
* MVC
* RESTful

> 学习教程参考自：[一起学 Node.js](https://github.com/nswbmw/N-blog)

### 功能

* 注册
* 登录 / 退出登录
* 发布文章
* 修改文章
* 删除文章
* 修改和删除仅限自己的文章

### 运行

```bash
# 拉取项目
git clone https://github.com/pengtikui/express-blog.git

# 安装依赖
npm install

# 运行
node index.js
```

### 依赖模块

| 模块名称 | 作用 | 官网 / 项目地址 |
| ----- | ----- | ----- |
| express | 基于 Node.js 的 Web 框架 | http://expressjs.com |
| express-formidable | 用于表单处理的中间件 | https://github.com/noraesae/express-formidable |
| express-session | session 中间件 | https://github.com/expressjs/session |
| ejs | JS 模板引擎 | https://github.com/tj/ejs |
| config-lite | 配置模块 | https://github.com/nswbmw/config-lite |
| connect-flash | 页面消息中间件 | https://github.com/jaredhanson/connect-flash |
| connect-mongo | 将 session 存入 MongoDB | https://github.com/jdesboeufs/connect-mongo |
| mongolass | MongoDB 驱动 | https://github.com/mongolass/mongolass |
| marked | Markdown 解析器 | https://github.com/chjj/marked |
| moment | 时间格式化 | http://momentjs.com |
| objectid-to-timestamp | 根据 ObjectId 生成时间戳 | http://steveridout.github.io/mongo-object-time |
| sha1 | sha1 加密密码 | https://github.com/pvorb/node-sha1 |

### TO DO

* 完善现有功能
* 完善代码注释
* 不再添加新功能

