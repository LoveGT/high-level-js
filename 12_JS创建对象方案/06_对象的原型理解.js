var obj = {
  name:"why"
}

var info = {}

console.log(info.__proto__);

console.log(Object.getPrototypeOf(info));

//2原型有什么用呢？
//当我们从一个对象中获取一个属性时，他会触发[[get]]操作
  // 2-1. 在当前对象中去查找对应的属性，如果找到就直接使用
  // 2-2. 如果没有找到，那么会沿着他的原型链去查找
