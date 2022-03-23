// promise的状态管理
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        queueMicrotask(() => { //微任务
           // setTimeout(() => { //宏任务
          this.value = value;
          console.log("++++++++++++");
          console.log("resolve函数被调用");
          // then的第一个回调函数
          this.onFulfilled(this.value);
        });
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          console.log("reject函数被调用");
          // then的第二个回调函数
          this.onRejected(this.reason);
        });
      }
    };
    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const hyPromise = new HYPromise((resolve, reject) => {
  console.log("pending状态");
  resolve(1111);
  // reject(2222);
});
// 调用then方法
console.log("----------------");
hyPromise.then(
  (res) => {
    console.log(res, "res");
  },
  (err) => {
    console.log(err, 'err');
  }
);
