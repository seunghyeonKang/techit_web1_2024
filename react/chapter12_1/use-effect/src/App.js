import { useEffect, useState } from "react";

// 타임(시계) 함수
function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  console.log("렌더링");

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [today]);

  return (
    <>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </>
  );
}

// 카운터 함수
function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert(`${count}은(는) 홀수입니다.`);
      } else {
        alert(`${count}은(는) 짝수입니다.`);
      }
    } else {
      setCheckRender(true);
    }
    // eslint-disable-next-line
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

// App 함수
function App() {
  return (
    <div className="App">
      <Counter />
      <Time />
    </div>
  );
}
export default App;
