import util from "util"

// console.log(util)

// 1. callbackify - transfer a promise function to a callback function

// const delay=(duration=1000) => {
//     return new Promise((resolve,err) => {
//         setTimeout(() => {
//              resolve(duration)
//         }, duration);
       
//     })
// }

// delay(5000).then(d=>console.log(d))
// console.log(10000)

// const delayCallback=util.callbackify(delay)
// delayCallback(500,(err,d) => {console.log(d)})
// console.log(10000)

// 2. promisify - transfer a callback function to an async (promise style) function

const delayCallback=(duration=1000,callback) => {
    setTimeout(() => {
        callback(null,duration)
    }, duration);
}
// delayCallback(5000,(err,d) => {console.log(d)})
// console.log(10000)

const delay=util.promisify(delayCallback);
// delay(500).then(d=>console.log(d))


(async() => {
    const r=await delay(5000)
    console.log(r)
})()


// 3. util.isDeepStrictEqual - 是否深度严格相等

const obj1={
    a:1,
    b:{
        c:2,
        d:{

        }
    }
}
const obj2={
    a:1,
    b:{
        c:2,
        d:{
            e:3
        }
    }
}

console.log(util.isDeepStrictEqual(obj1, obj2)) // false