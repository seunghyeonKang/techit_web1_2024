import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 01. JSX
import Date from "./Exam01-Date"; // 02. 시간 표시
import List from "./Exam02-List"; // 03. 리스트 렌더링

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <List />
  </React.StrictMode>
);
