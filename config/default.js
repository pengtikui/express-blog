module.exports = {
    port: 3000, // 程序启动监听端口
    session: {  // session 配置信息
        secret: 'express_blog',
        key: 'express_blog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/eblog'  // MongoDB 地址
}