console.log(globalThis)

// for in 标准化

const obj = {
  name: 'why',
  age: 18
}

for (const o in obj) {
  if (Object.hasOwnProperty.call(object, o)) {
    const element = object[o];
  }
}