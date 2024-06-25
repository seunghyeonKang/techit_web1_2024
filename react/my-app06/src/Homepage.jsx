// import { useState } from "react";

export function Homepage({ setIsLogin }) {
  return (
    <>
      <h1>홈페이지에 오신 것을 환영합니다!</h1>
      <p>로그인 성공</p>
      <button
        type="button"
        onClick={() => {
          setIsLogin(false);
        }}
      >
        로그아웃
      </button>
    </>
  );
}
