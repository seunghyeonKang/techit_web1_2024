import { useState } from "react";

export function Login({ user, setIsLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    } else if (pw === "") {
      alert("비밀번호를 입력하지 않았습니다.");
    }
    // alert(`id : ${id}, pw : ${pw}`);

    if (id === user.idUser && pw == user.pwUser) {
      setIsLogin(true);
    }
  };

  const handleLoginInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPw(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <label>
          아이디 :
          <input type="text" onChange={handleLoginInput} />
        </label>
        <br />
        <label>
          비밀번호 :
          <input type="password" onChange={handlePasswordInput} />
        </label>
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
