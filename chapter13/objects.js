var student = {
  grade: 1,
  school: "lion school",
};

// console.log(student);
// console.log(typeof student);

// 객체의 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);

// 객체에 속성 추가
student.class = 3;
console.log(student);

// 객체에서 속성값을 불러오는 두 가지 방법(일반,대괄호 표기법)
console.log(student.class);
console.log(student["class"]);

// 비어 있는 객체 만드는 두 가지 방법
var teacher = new Object();
var teacher = {};
