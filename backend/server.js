import express from 'express'

const app=express()

app.get("/api/hello",(req,res) => {

    res.send("this is a hello world 1")
})

















app.listen(5001,() => {
    console.log("server port: 5001")
})