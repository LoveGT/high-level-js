
function foo () {
  return new Promise((resolve, reject) => {
    // resolve('success')
    reject('fail')
  })
}

const fooPromise = foo()

// then函数可以传两个值
fooPromise.then(res=> {
  console.log(res, 'res')
}, err => {
  console.log(err, 'err')
})
// 传入的这个函数，被称之为executor
// > resolve是一个回调函数,在成功时的回调
// > reject是一个回调函数，在失败时的回调
// const promise = new Promise((resolve, reject)=> {
//   console.log('Promise函数被执行了')
//   resolve()
// })