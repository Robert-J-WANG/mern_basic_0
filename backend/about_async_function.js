import util from 'util'

// 复习回调函数和异步函数

// 1. js 是单线程，如果出现耗时任务时会发生阻塞，比如获取大量网络资源时，这样导致程序停止。为了保证程序运行不阻塞，引入了回调函数
// 2. 回调函数就是一个函数作为另外一个函数的参数进行使用的函数。简单理解为：等你干完某件事之后，回头调用一下我
    // 2.1 回调函数的同步执行：不常见，虽然使用了回调函数，但是回调函数的执行几乎同步

const nums=[1,2,3]
const result=nums.map(n=>n*2) // 回调函数n=>n*2同步执行
console.log(result)
console.log('会先执行一下吗？')

    // 2.2 回调函数的异步执行：最常见

console.log('程序开始运行')

const main=(callback) => {
    console.log(callback)
    const obj={
        text1:'hello',
        text2:'world'
    }
    console.log('开始获取对象数据')
    setTimeout(() => {
        console.log('2秒之后，获取数据成功')
        console.log('调用回调函数')
        callback(obj) // 2秒之后获取数据后，回头调用callback函数， 异步执行
        console.log('回调函数调用结束')
    }, 2000);
}

main(data=>console.log(`获取的数据是：${data.text1} ${data.text2}`))
console.log('我还会先执行吗')

    // 2.3 回调+异步执行，能解决阻塞的问题，但是，这种形式不利于调用和调式，多层嵌套会引发回调地狱问题，比如下

function fn2(a){
    console.log('fn2 被执行了, a 的值是:', a);
    return a;
}

function fn3(b,callback){
    console.log(b)
    console.log('fn3 准备执行回调...');
    // 在这里，callback 是一个可以被执行的函数
    const new_b=b*2
    callback(new_b); 
}

// 正确的调用方式
// 我们传递给 fn3 的是一个箭头函数 () => fn2(1)
// 这个箭头函数本身是一个完整的函数，它没有被立即执行
fn3(2,(c) => {
  fn2(c);
});

/*
控制台输出：
fn3 准备执行回调...
fn2 被执行了, a 的值是: 1
*/

// 3. 为了解决这个回调地狱问题，同时能执行异步函数，在es6 (2015)版本里引入了promise对象。可以理解为一个承诺：这个函数会被执行（成功的话，失败的话）

const promise= new Promise((resolve,reject) => {

    const data='yeah'
    setTimeout(() => {
        resolve(data)
    },2000)
})

promise.then((data) => {
    console.log(data)    
})

// 4. 这样链式调用也很麻烦，所以引入了async await 语法糖，来简化

const delay = async () => {
const data='yeah yeah'
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(data)
    },2000)
   })
}

const res = await delay()
console.log(res)