var mbti = ["INFP", "ENFJ", "INTJ"];

console.log(mbti[0]); // INFP 출력
console.log(mbti.length); // 3 출력

mbti[3] = "ESFP"; // 추가로 값 할당
mbti[3] = "ISTJ"; // 값 덮어쓰기

console.log(mbti.push("ESFP", "ISTJ")); // 배열 마지막에 추가(원본을 직접 변경하는 방식)
var newMbti = [...mbti, "ESFP", "ISTJ"]; // 스프레드 문법(원본을 훼손하지 않고 변경하는 방식)

console.log(mbti.unshift("ESFP", "ISTJ")); // 배열 처음에 추가
var newMbti = ["ESFP", "ISTJ", ...mbti]; // 스프레드 문법

console.log(mbti.pop()); // 배열의 마지막 요소가 원본 배열에서 빠져나온다. 마지막 요소 출력
console.log(mbti.shift()); // 배열의 첫 요소가 원본 배열에서 빠져나온다. 첫 요소 출력

console.log(mbti.slice(0, 2)); // 배열의 0번째 요소부터 2번째 이전 요소까지 출력
console.log(mbti.slice()); // 배열의 모든 요소 복사
console.log(mbti.slice(-1)); // 배열의 마지막 요소 복사

console.log(mbti.join()); // 배열의 요소들이 문자열로 변환되어 출력(콤마,로 구분)
console.log(mbti.join("-")); // 배열의 요소들이 문자열로 변환되어 출력('-'로 구분)

console.log(mbti.sort()); // 배열을 알파벳 순으로 정렬한다. (오름차순)
console.log(mbti.sort().reverse()); // 배열을 알파벳 순으로 정렬한다. (내림차순)

console.log(mbti);
