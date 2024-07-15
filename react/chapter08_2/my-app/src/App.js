import { createGlobalStyle, styled, css } from "styled-components";
import { Example } from "./components/Example";
import reset from "styled-reset";

// const GlobalStyle = createGlobalStyle`
//   ${reset}

//   span{
//     color: red;
//     font-size:12px;
//   }
// `;

const ContentDiv = styled.div`
  padding: 30px;
`;

const ContentH3 = styled.h3`
  color: ${(props) => (props.name === "hello" ? "hotpink" : "seagreen")};
  font-size: 20px;
  text-align: center;
`;

const ContentExtends = styled(ContentH3)`
  border: 3px solid black;
`;

const One = css`
  color: hotpink;
`;
const Two = css`
  border: 1px solid black;
`;
const Three = styled.strong`
  ${One}
  ${Two}
`;

const Button1 = styled.button`
  background-color: royalblue;
  color: white;
  padding: 10px;
`;
const Button2 = styled(Button1)`
  font-weight: 900;
  color: black;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
`;
const Button3 = styled(Button1)`
  font-weight: 900;
  background-color: lightgreen;
  border: none;
  border-radius: 16px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
`;

function App() {
  return (
    <ContentDiv>
      {/* <GlobalStyle /> */}
      <Button1>버튼1</Button1>
      <Button2>버튼2</Button2>
      <Button3>버튼3</Button3>
      <br />
      <br />
      <Three>또 다른 확장 스타일입니다.</Three>
      <ContentExtends>확장 스타일입니다.</ContentExtends>
      <h1>hello world</h1>
      <ContentH3 name="hello">I am h3 with styled components</ContentH3>
      <span>hello world with span</span>
      <br />
      <Example />
    </ContentDiv>
  );
}
export default App;
