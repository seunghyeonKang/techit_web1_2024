import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 01. JSX
import Exam from "./jsx-exam"; // 02. 시간 표시
import Exam02 from "./jsx-exam02"; // 03. 리스트 렌더링

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Exam02 />
  </React.StrictMode>
);
