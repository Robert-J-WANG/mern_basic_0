const fs = require ('fs')
const path= require ('path')
const filepath=path.resolve(__dirname,"./myfiles/a.txt")

// 1. readFile - read a file content

fs.readFile(filepath, (err, data) => {
    console.log(data)
    console.log(data.toString('utf-8'))
})


fs.readFile(filepath,"utf-8", (err,data) => {
    console.log(data)
} )

fs.readFile(filepath,{
    encoding:"utf-8"
}, (err, data) => {
  console.log(data)
})

fs.promises.readFile(filepath,"utf-8").then(d=>console.log(d))

const test= async() => {
    const r=await fs.promises.readFile(filepath,"utf-8")
    console.log(r)
}
test()
