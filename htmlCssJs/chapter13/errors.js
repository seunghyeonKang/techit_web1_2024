try {
  // 에러가 발생한 가능성이 있는 코드
  myfunc(); // 정의되지 않은 함수 -> error
  throw new Error("에러"); // 에러가 뭔지 출력하기 위해 임의로 에러 설정
} catch (error) {
  // 에러가 발생했을 때 실행되는 코드
  console.log("에러 발생");
  console.log(error);
} finally {
  // 에러 발생 여부와 상관없이 무조건 실행
  console.log("무조건 실행");
}
