// promise的状态管理
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log("resolve函数被调用");
        // then的第一个回调函数
      }
    };

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log("reject函数被调用");
        // then的第二个回调函数
      }
    };
    executor(resolve, reject);
  }
}

const hyPromise = new HYPromise((resolve, reject) => {
  resolve()
  reject();
});
console.log(hyPromise);
