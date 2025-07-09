
// node内置模块

import os, { type } from "os"


// console.log(os)

// const {type, platform, arch, release, tmpdir, freemem}=os
// console.log(type(), platform(),arch(),release(), tmpdir(), freemem());
// console.log(os.userInfo())

// 1. 操作系统的行尾标记
console.log(os.EOL==="\r\n")

// 2. 操作系统的架构
console.log(os.arch()) // x64

// 3. 操作系统的CPU信息
console.log(os.cpus().length) // 16核
os.cpus().forEach(item=>{
    console.log(item.model)
}) 

// 4. 空闲的内容大小
console.log(os.freemem()/1024**3) // GB

// 5. 用户根目录
console.log(os.homedir())

// 6. 主机名
console.log(os.hostname())

// 7.文件临时目录
console.log(os.tmpdir())
