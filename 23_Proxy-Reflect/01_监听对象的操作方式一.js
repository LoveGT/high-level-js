const obj = {
  name: "wy",
  age: 18,
};
// // 监听单个属性
// Object.defineProperty(obj, "name", {
//   set: function (value) {
//     console.log("set方法", value);
//     return value;
//   },
//   get: function () {
//     console.log("get方法");
//   },
// });

// 监听对象所有的属性

Object.keys(obj).forEach((key) => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function (newVal) {
      console.log(`${key}set方法`);
      value = newVal
    },
    get: function () {
      console.log(`${key}get方法`);
      return value
    },
  });
});
obj.name = "kobe";
obj.age = 29
console.log(obj.name);
console.log(obj.age);
