let plus = (a, b) => {
  return a + b;
};
console.log(plus(2, 3));

let mult = (a, b) => a * b;
console.log(mult(2, 3));

// 파라미터가 하나인 경우 괄호를 치지 않아도 된다. word
let print = (word) => {
  console.log(word);
};
print("Hello");

let myfunc = () => {
  return 0;
};

console.log(myfunc());
