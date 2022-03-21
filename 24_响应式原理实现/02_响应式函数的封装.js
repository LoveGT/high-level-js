// 封装一个响应式的函数
let reactiveFn = []
function watchFn(fn) {
  reactiveFn.push(fn)
}
// 对象的响应式
const obj = {
  name: "why",
  age: 18,
};

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

reactiveFn.forEach(fn => {
  fn()
})