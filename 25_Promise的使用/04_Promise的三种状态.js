// new Promise((resolve, reject) => { //第一个函数 executor 给promise划分状态
//   console.log('----------------')  //阶段：pending(悬而未决的) 函数执行是立即执行
//   resolve(111)
// }).then(res => { //第二个函数 成功的回调
//   console.log(res, 'res')  //阶段：fulfilled(固定、已敲定)
// }, err => {  //第三个函数 失败的回调
//   console.log(err,'err') //阶段：rejected （已拒绝）
// })


// // Tips: 状态一旦确定 就无法改变

var a 
let b = 0
if(true) {
  debugger
  a = 3
  function a() {}
  a= 7
  console.log(a);
}

console.log(a);