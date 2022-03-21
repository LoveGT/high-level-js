// 控制合并运算
let foo = 0
const bar = foo || "defaultValue"; //空字符串和0判断不了
const coo = foo ?? "defaultValue2";
console.log(foo);
console.log(bar);
console.log(coo)
