// 2.Object.entries
const obj = {
  name:"why",
  age: 18
}

console.log(Object.entries(obj));

const objEntries = Object.entries(obj)

objEntries.forEach(item => {
  console.log(item[0], item[1]);
})

const test = Object.fromEntries([['height',188], ['sex', '男']])
console.log(test);