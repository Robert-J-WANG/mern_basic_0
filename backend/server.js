import express from 'express'

// 1. 创建app应用和基础服务器

const app=express()
const PORT=5001
app.listen(PORT, ()=> {
    console.log(`the server is running at PORT : ${PORT}`)
})

// 2. 路由方法 - 定义 API 端点 (Endpoints)
app.get("/api/user", (req,res) => {
    console.log(req.url)
    res.send("user")
})