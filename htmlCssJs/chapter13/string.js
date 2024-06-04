// 문자열 선언
var greeting = "Hello!";
var farewell = "Bye!";
var myname = "김태킷";

var sentence = greeting + "\n" + myname;
console.log(sentence);

console.log(farewell + 2); // Bye!2 출력

// 이스케이프 시퀀스
var greeting = "Hello!";
var farewell = "Bye!";
var myname = "김태킷";

var sentence = greeting + "\n" + myname; // enter
var sentence = greeting + "\t" + myname; // tab
var sentence = greeting + "'" + myname;
var sentence = greeting + '"' + myname;
var sentence = greeting + "\\" + myname;

console.log(sentence);

// 템플릿 리터럴(ES6)
var a = `안녕하세요!
여러분:)`;
console.log(a);

var price = 1000;
var b = "이 물건은 " + price + "원 입니다.";
console.log(b);

var c = `이 물건은 ${price}원 입니다.`;
console.log(c);

var d = `이 물건은 ${200 + 450}원 입니다.`;
console.log(d);

// 문자열 함수
var abc = "I am Iron man";

console.log(abc.indexOf("man")); // man의 위치, 10 출력
console.log(abc.slice(0, 4)); // 0부터 4 이전까지 문자열 출력, I am 출력
console.log(abc.toUpperCase()); // 모두 대문자로 출력
console.log(abc.toLowerCase()); // 모두 소문자로 출력

var efg = "This is my car.";

console.log(efg.startsWith("Th")); // 해당 문자열이 Th로 시작하는가, true 출력
console.log(efg.endsWith("car.")); // 해당 문자열이 car.로 끝나는가, true 출력
console.log(efg.includes("is")); // 해당 문자열에 is가 존재하는가, true 출력
