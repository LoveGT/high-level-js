const names = ["abc", 'cba', 'nba', 'mba']
//不能判断NAN
if(names.indexOf('cba')!==-1) {
  console.log('包含abc元素');
}


// es7 ES2016（能判断NAN）
if(names.includes("cba",1)){
  console.log('包含cba元素');
}

