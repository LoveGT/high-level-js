// promise的状态管理
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
// 工具函数
function execFnWithCatchError(excuFn, value, resolve, reject) {
  try {
    const result = excuFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}

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
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    //  判断reject是否有值 (确认是在catch还是then上面接受err)
    onRejected =
      onRejected === undefined
        ? (err) => {
            throw err;
          }
        : onRejected;

    return new HYPromise((resolve, reject) => {
      //链式调用优化
      // 1.如果在then调用的时候,状态已经确认了
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFnWithCatchError(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFnWithCatchError(onRejected, this.reason, resolve, reject);
      }

      // 2 将成功的回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled)
          this.onFulfilledFns.push(() => {
            execFnWithCatchError(onFulfilled, this.value, resolve, reject);
          });
        if (onRejected)
          this.onRejectedFns.push(() => {
            execFnWithCatchError(onRejected, this.reason, resolve, reject);
          });
      }
    });
  }
  catch(onRejected) {
    this.then(undefined, onRejected);
  }
}

const hyPromise = new HYPromise((resolve, reject) => {
  reject(3333);
});

hyPromise
  .then((res) => {
    console.log(res, "res");
  })
  .catch((err) => {
    console.log(err, "err");
  });
