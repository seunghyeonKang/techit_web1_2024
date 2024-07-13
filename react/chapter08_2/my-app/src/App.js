import { createGlobalStyle } from "styled-components";
import { Example } from "./components/Example";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  span{
    color: red;
    font-size:12px;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>hello world</h1>
      <span>hello world with span</span>
      <br />
      <Example />
    </div>
  );
}
export default App;
