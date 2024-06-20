import React, { useState } from "react";

function FeelBTN(props) {
  function updateFeeling(text) {
    return () => {
      props.setFeel(text);
    };
  }

  return (
    <dd>
      <button onClick={updateFeeling(props.text)}>{props.text}</button>
    </dd>
  );
}

function FeelCompo() {
  const [feeling, setFeeling] = useState("기분을 선택해주세요!");

  return (
    <>
      <dl>
        <FeelBTN text="기분이 좋아요." setFeel={setFeeling} />
        <FeelBTN text="기분이 정말 좋아요!" setFeel={setFeeling} />
        <FeelBTN text="기분이 최고에요!" setFeel={setFeeling} />
        <FeelBTN text="기분이 미쳤어요~~" setFeel={setFeeling} />
      </dl>
      <div>{feeling}</div>
    </>
  );
}
function Hook02() {
  return (
    <>
      <h1>오늘의 기분을 선택해주세요.</h1>
      <FeelCompo />
    </>
  );
}

export default Hook02;
