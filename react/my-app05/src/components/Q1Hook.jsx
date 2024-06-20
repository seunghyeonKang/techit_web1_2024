import React, { useState } from "react";

function Hook01({ name, hobby, food }) {
  const [like, setLike] = useState("");

  function clickLike() {
    if (like === "") {
      setLike("like");
    } else {
      setLike("");
    }
  }

  return (
    <>
      <h1>{name} 자기소개서</h1>
      <dl>
        <dt>취미 : </dt>
        <dd>{hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{food}</dd>
      </dl>

      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </>
  );
}

export default Hook01;
