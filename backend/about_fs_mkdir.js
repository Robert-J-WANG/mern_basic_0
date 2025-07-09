
const fs = require ('fs')
const path= require ('path')


// 5. fs.mkdir -- make a directory

const new_dir=path.resolve(__dirname,"./myfiles/dir1")
fs.promises.mkdir(new_dir).then(() => {console.log("create a new directory successfully")})

