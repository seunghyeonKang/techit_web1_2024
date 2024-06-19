import React from "react";
import Hello from "./components/Hello";
import Time from "./components/Time";
import { HelloProps01, HelloProps02 } from "./components/HelloProps";
import Resume from "./components/Resume";
import ColorText from "./components/ColorText";
import { Practice } from "./components/Practice";

function App() {
  return (
    <React.Fragment>
      {/* <Hello name="gary" />
      <Time />
      <HelloProps01
        name="jaehyun"
        age={25}
        someFunc={() => "so awesome!!!"}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
      />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="skyblue" />
      <ColorText color="seagreen" />
      <ColorText color="teal" /> */}

      <Practice />
    </React.Fragment>
  );
}

export default App;
