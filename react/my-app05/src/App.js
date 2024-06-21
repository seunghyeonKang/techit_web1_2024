import Resume from "./components/Resume";
import Hook01 from "./components/Q1Hook";
import Hook02 from "./components/Q2Hook";
import { DisplayMood } from "./components/DisplayMood/DisplayMood";
import { MenuList } from "./components/MenuList/MenuList";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      {/* <Resume name="개리" hobby="게임" food="고기" /> */}
      {/* <Hook01 name="개리" hobby="게임" food="고기" /> */}
      {/* <Hook02 /> */}
      <h1>
        오늘의 기분을
        <br />
        선택해 주세요!
      </h1>
      <div className="app-main">
        <MenuList mood={currentMood} onItemClick={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}
export default App;
