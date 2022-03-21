const maxInt = Number.MAX_SAFE_INTEGER //9007199254740991
console.log(maxInt)

const bigInt = 90071992547409911111n
console.log(bigInt + 10n)

// 普通数字转化成bigInt类型
const num = 10
const fromatNum = BigInt(num)
console.log(fromatNum + bigInt)

// bigInt转化成普通数字类型
console.log(Number(bigInt))