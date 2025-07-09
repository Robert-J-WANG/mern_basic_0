

const fs = require ('fs')
const path= require ('path')


// 4. fs.readdir - read all content Directory, including files and sub directories

file_dir=path.resolve(__dirname, './myfiles')
fs.promises.readdir(file_dir).then(d=>console.log(d)) // [ '1.png', '2.png', 'a.txt', 'sub' ]


