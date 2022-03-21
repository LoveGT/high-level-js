const finalRegistry = new FinalizationRegistry((value) => {
  console.log('有对象被销毁', value);
});

let obj = { name: "why" }
let info = new WeakRef(obj)

finalRegistry.register(obj, 'obj')

console.log(info.deref().name)

obj = null