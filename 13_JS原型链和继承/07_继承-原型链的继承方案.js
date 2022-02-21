// 父类
function Person() {
  this.name= 'why'
}
Person.prototype.eating = function() {
  console.log(this.name + ' eating');
}
//子类
function Student() {
  this.sno = 111
}

Student.prototype.studying = function() {
  console.log(this.name+ " studying");
}
