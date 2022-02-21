// WeakMap的key值只能存放對象

// WeakMap對对象的引用是弱引用

// weakMap没有size

//weakMap不能进行遍历

const obj = { name: "why" };
let weakMap = new WeakMap();
weakMap.set(obj, "aaaa");
// 3.get方法
console.log(weakMap.get(obj));

// 4.has方法
console.log(weakMap.has(obj));

// 5.delete方法

//weakMap的应用场景 