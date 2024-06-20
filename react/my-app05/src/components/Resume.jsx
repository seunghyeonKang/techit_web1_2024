import React, { useState } from "react";

function Resume({ name, hobby, food }) {
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
    console.log(useState);
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

      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
    </>
  );
}

export default Resume;
