import Hello from "./components/Hello";
import Time from "./components/Time";
import { HelloProps01, HelloProps02 } from "./components/HelloProps";

function App() {
  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps01
        name="jaehyun"
        age={25}
        someFunc={() => "so awesome!!!"}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
      />
      <HelloProps02
        name="jaehyun"
        age={25}
        someFunc={() => "so awesome!!!"}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
      />
    </div>
  );
}

export default App;
