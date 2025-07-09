
const fs = require ('fs')
const path= require ('path')

class File{
    constructor(filename, name, ext, isFile, size, createTime, updateTime){
        this.filename=filename
        this.name=name
        this.ext=ext
        this.isFile=isFile
        this.size=size
        this.createTime=createTime
        this.updateTime=updateTime
    }


    async getContent(isBuffer=false){
       if (this.isFile){
        
        if(isBuffer){
            return await fs.promises.readFile(this.filename)
        }
        else{
            return await fs.promises.readFile(this.filename,"utf-8")
        }
       }
     else return null
    }

    async getChildren(){

        if(this.isFile){
            return []
        }
       
        let children=await fs.promises.readdir(this.filename)
        children=children.map((c) => {
        const result=path.resolve(this.filename,c)
        return File.getFile(result)
       })
      return await Promise.all(children)
    }

    static async getFile (filename){
        filename=path.resolve(__dirname,filename)
        const stat=await fs.promises.stat(filename)
        const name=path.basename(filename)
        const ext=path.extname(filename)
        const isFile=stat.isFile()
        const size=stat.size
        const createTime=stat.ctime
        const updateTime=stat.mtime
        return new File(filename,name,ext,isFile,size,createTime,updateTime)
    }

}

// const testStaticFn= async(filename) => {
//     const file= await File.getFile(filename)
//     // console.log(file)
//     // console.log(await file.getContent())
//     console.log(await file.getChildren())
// }

// testStaticFn('./myfiles')

const readDir=async (dirname) => {
    const file= await File.getFile(dirname)
    return file.getChildren()
}

const test=async (filename) => {
    const result = await readDir(filename)
    console.log(result)
    // console.log(await result[2].getChildren())
}

test('./myfiles')

