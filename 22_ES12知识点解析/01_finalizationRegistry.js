const finalRegistry = new FinalizationRegistry((value) => {
  console.log('有对象被销毁', value);
});

let obj = { name: "why" }
let info = { name: "why" }

finalRegistry.register(obj, 'obj')
finalRegistry.register(info, 'info')
obj = null
info = null