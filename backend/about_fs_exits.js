
const fs = require ('fs')
const path= require ('path')


// 6. fs.exists -- check if a file exites --deprecated -- create a cunstom function to check
const filepath=path.resolve(__dirname,"./myfiles/c.txt")
const exists= async (file) => {
  try{
    await fs.promises.stat(file)
    return true
  }
  catch (err){
    if(err.code==="ENOENT") {
        return false
    }
    throw err
  }
}

const test = async (file)=>{
    const r = await exists(file)
    if (r){
        console.log("the file dose exist")
    }
    else {
        await fs.promises.mkdir(file)
        console.log("the file has been created successfully")
    }
}

test(filepath)
