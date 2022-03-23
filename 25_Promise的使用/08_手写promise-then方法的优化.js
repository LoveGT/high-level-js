// promise的状态管理
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = []; //接受所有的resolve的方法
    this.onRejectedFns = []; //接受所有的reject的方法

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          //微任务
          // setTimeout(() => { //宏任务
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;

          // then的第一个回调函数
          // this.onFulfilled(this.value); -
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;

          // then的第二个回调函数
          // this.onRejected(this.reason); -
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    console.log(this.status, "status");
    // 1.如果在then调用的时候,状态已经确认了
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason);
    }

    // 2 将成功的回调和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const hyPromise = new HYPromise((resolve, reject) => {
  resolve(2222);
});

// 调用then方法
// hyPromise.then(
//   (res) => {
//     console.log(res, "res1");
//   },
//   (err) => {
//     console.log(err, "err1");
//   }
// );

hyPromise.then(
  (res) => {
    console.log(res, "res2");
  },
  (err) => {
    console.log(err, "err2");
  }
);
// setTimeout(() => {
//   hyPromise.then(
//     (res) => {
//       console.log(res, "res3");
//     },
//     (err) => {
//       console.log(err, "err3");
//     }
//   );
// }, 1000);
