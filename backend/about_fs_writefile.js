

// console.log(fs)

const fs = require ('fs')
const path= require ('path')
const os=require('os')
const filepath=path.resolve(__dirname,"./myfiles/a.txt")

// 2. writeFile - write content to a file

// replace

fs.writeFile(filepath,"hello world", (err, data) => {
    console.log('write a file successfully')
})

fs.promises.writeFile(filepath,"hello node").then(() => {
    console.log('write a file successfully')
})

const writetest= async () => {
    await fs.promises.writeFile(filepath,"hello node hello")
     console.log('write a file successfully')
}
writetest()


// append

// callback module
fs.writeFile(filepath, "new hello", {
    flag:"a"
}, (err, data) => {
    console.log('new content write successfully')
})

// promise.then module
fs.promises.writeFile(filepath,'another hello', {
    flag:"a"
}).then(() =>  console.log('write anoter file successfully'))

// async await module

const writeTestAsync =async() => {
    await fs.promises.writeFile(filepath,"hello async", {
        flag:"a"
    })
    console.log('write async file successfully')
}
writeTestAsync()

// write a buffer content

const buf = Buffer.from(' this is from a buffer');

fs.promises.writeFile(filepath,buf,{
    flag:"a"
}).then (() => {
    console.log('write a buffer successfully')
})

// newline
console.log(os.EOL)
const newline=os.EOL
const newbuf = Buffer.from(`this is from a new buffer`);
console.log(newbuf)
fs.promises.writeFile(filepath,newline + newbuf , {
    flag:"a"
}).then(() => {console.log('write a new buffer successfully')})


// practice - copy a image file

const img_ori_path=path.resolve(__dirname, './myfiles/1.png')
const img_new_path=path.resolve(__dirname,"./myfiles/2.png")

// read the Image
fs.promises.readFile(img_ori_path).then((r) => {
    console.log(r)

        // write the image to another file
   
    fs.promises.writeFile(img_new_path,r,{
        encoding:"base64"
    }).then(() => {
        console.log('write a image successfully')
    })

})

const copyImage=async(ori_imag, new_img) => {
    const r=await fs.promises.readFile(ori_imag)
    fs.promises.writeFile(new_img,r)
    console.log("copy new image successfully")
}

copyImage(img_ori_path,img_new_path)
