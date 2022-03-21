class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const depend = new Depend()
// 封装一个响应式的函数
let reactiveFn = []
function watchFn(fn) {
  depend.addDepend(fn)
}
// 对象的响应式
const obj = {
  name: "why",
  age: 18,
};

const info = {
  height: 1.88,
  address: '深圳市'
}

watchFn(function foo() {
  const newName = obj.name;
  console.log("你好啊，李银河");
});

watchFn(function demo() {
  console.log(obj.name);
});

function bar() {
  console.log("普通的其他函数");
}

obj.name = "kobe";
depend.notify()