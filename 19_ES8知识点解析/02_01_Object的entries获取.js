// // 2.Object.entries
// const obj = {
//   name: "why",
//   age: 18,
// };

// console.log(Object.entries(obj));

// const objEntries = Object.entries(obj);

// objEntries.forEach((item) => {
//   console.log(item[0], item[1]);
// });

// const test = Object.fromEntries([
//   ["height", 188],
//   ["sex", "男"],
// ]);
// console.log(test);

// fromEntries的应用场景
const queryString = "name=why&age=18&height=1.88";
const queryParams = new URLSearchParams(queryString)
const objParams = Object.fromEntries(queryParams)
console.log(objParams)
// console.log(queryParams)
// const obj = {}
// for (const param of queryParams) {
//   obj[param[0]] = param[1]
// }
// console.log(obj)
// const entries = Object.entries(obj)

// console.log(entries, 'eeee')