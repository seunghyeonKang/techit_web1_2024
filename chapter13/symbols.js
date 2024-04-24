var name1 = "김멋사";
var name2 = "김멋사";

console.log(name1 == name2);
// true 출력

var name3 = Symbol("이태킷");
var name4 = Symbol("이태킷");

console.log(name3 == name4);
// false 출력

var myclass = {
  [Symbol("이태킷")]: 1,
  [Symbol("이태킷")]: 2,
};
