/**
 *  resolve(参数)
 *  1> 普通的值或者对象
 *  2> 传入一个Promise 那么当前的promise状态会有传入的Promise来决定(状态移交)
 *  3> 传入一个对象， 并且这个对象有实现then方法，那么也会执行该then方法， 并且又该then方法决定后续状态
 */

// 第二种参数案例
// const newPromise = new Promise((resolve, reject) => {
//   reject(2222);
// });

// new Promise((resolve, reject) => {
//   // pending -> fulfilled -> reject
//   resolve(newPromise);
// }).then(
//   (res) => {
//     console.log(res, "res");
//   },
//   (err) => {
//     console.log(err, "err");
//   }
// );

// 第三种参数案例
new Promise((resolve, reject) => {
  // pending -> fulfilled -> reject
  const obj = {
    then: function (resolve, reject) {
      reject("resolve msg");
    },
  };
  resolve(obj);
}).then(
  (res) => {
    console.log(res, "res");
  },
  (err) => {
    console.log(err, "err");
  }
);
