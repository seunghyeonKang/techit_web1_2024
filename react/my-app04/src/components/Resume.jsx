import React from "react";

function Resume({ name, hello, hobby, food, color }) {
  return (
    <>
      <h1>{name} 자기소개서</h1>
      <h2>{hello}</h2>
      <dl>
        <dt>취미 : </dt>
        <dd>{hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd style={{ color: color }}>{color}</dd>
      </dl>
    </>
  );
}

export default Resume;
