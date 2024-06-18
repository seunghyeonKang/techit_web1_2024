function Exam() {
  const today = new Date();
  //   console.log(today);
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 인덱스 정보를 주기 때문에 1을 더해야 한다.
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return (
    <div style={{ backgroundColor: "royalblue", color: "white" }}>
      <h1 style={{ color: "yellow" }}>{year}년</h1>
      <h1>
        {month}월 {date}일
      </h1>
      <h1>
        {hours}시 {minutes}분 {seconds}초
      </h1>
    </div>
  );
}

export default Exam;
