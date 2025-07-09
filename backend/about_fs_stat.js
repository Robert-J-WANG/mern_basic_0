

const fs = require ('fs')
const path= require ('path')
const filepath=path.resolve(__dirname,"./myfiles/a.txt")

// 3. fs.stat - 获取文件的状态信息

fs.promises.stat(img_ori_path).then(s=>console.log(s))

// Stats {
//   dev: 2156450083,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 10977524091825160,
//   size: 15789,
//   blocks: 32,
//   atimeMs: 1751873840444.0618,
//   mtimeMs: 1751873586074.7825,
//   ctimeMs: 1751873586074.7825,
//   birthtimeMs: 1751872533215.783,
//   atime: 2025-07-07T07:37:20.444Z,
//   mtime: 2025-07-07T07:33:06.075Z,
//   ctime: 2025-07-07T07:33:06.075Z,
//   birthtime: 2025-07-07T07:15:33.216Z
// }


fs.promises.stat("./myfiles").then(s=>console.log(s)) // get a file path statue, the size is 0
