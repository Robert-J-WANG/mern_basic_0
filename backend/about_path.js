import path from 'path'


// const path=require("path")

// 1. 文件名

console.log(path.basename("d//fdkfajf//dfakfajladkf/123.html")) // 123.html
console.log(path.basename("d//fdkfajf//dfakfajladkf/123.html", ".html")) //123


// 2. 分隔符
console.log(path.sep) // \

// 3. 模块之间的分割符
console.log(path.delimiter) //;
console.log(process.env.path.split(path.delimiter)) //分割系统环境变量路径

// 4. 文件目录
console.log(path.dirname('a/b/c/d.txt'))  // a/b/c
process.env.path.split(path.delimiter).forEach(i=>console.log(path.dirname(i)))

// 5. 后缀名
console.log(path.extname("sdfadfa/123/abc.css")) // .css

// 6. 路径拼接
console.log(path.join('a/b','0', '123')) // a\b\0\123
console.log(path.join('a','b', '../','123')) // a\123

const basepath="api/"
const fullpath=path.join(basepath,'../', 'b.js')
console.log(fullpath)

// 7. normalize 解析成系统标准路径
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')) // 后面的..是返回上级目录， 所以得到 \foo\bar\baz\asdf
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\')) // C:\temp\foo\

// 8. relative 解析相对路径

console.log(path.relative("data/files/name/familyname","data/files/address")) // 后面的路径相对于前面路径的相对路劲

// 9. resolve 解析绝对路径

console.log(path.resolve('data/files', 'name')) // C:\Users\user\Desktop\github\MERN\MERN Toturial\backend\data\files\name
console.log(path.resolve('data/files', '../name')) // C:\Users\user\Desktop\github\MERN\MERN Toturial\backend\data\name

console.log(path.resolve('./abc'))
console.log(path.resolve(process.cwd(),'./abc')) 
// console.log(path.resolve(__dirname,"../abc"))