路由文件目录

* index.js 路由入口文件
* login.js 登录相关路由
* logout.js 退出登录相关路由
* posts.js 文章相关路由
* register.js 注册相关路由

路由设计：

- 首页跳转到 `/posts`
- 注册
    + 注册页面 `GET /register`
    + 注册表单提交 `POST /register`
- 登录
    + 登录页面 `GET /login`
    + 登录表单提交 `POST /login`\
    + 退出登录 `GET /logout`
- 文章
    + 文章列表（首页） `GET /posts`
    + 作者所有文章页面 `GET /posts?author=xxx`
    + 单篇文章页面 `GET /posts/:postId`
    + 文章发布页面 `GET /posts/create`
    + 文章发布表单提交 `POST /post/create`
    + 文章更新（编辑）页面 `GET /posts/:postId/edit`
    + 文章更新（编辑）表单提交 `POST /posts/:postId/edit`
    + 删除文章 `GET /posts/:postId/remove`
