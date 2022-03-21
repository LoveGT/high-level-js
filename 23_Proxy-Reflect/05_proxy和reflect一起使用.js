const obj = {
  name: "wy",
  age: 18,
};
const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log('调用了get方法')
    return Reflect.get(target,key)
  },
  set: function (target, key, newVal) {
    console.log('调用了set方法')
    Reflect.set(target, key, newVal) //返回boole值
  },
});

objProxy.name = "gaotao"
console.log(objProxy.name)
console.log(obj.name)