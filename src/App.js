import styled from "@emotion/styled";
import Header from "./Header";

function App() {
  return (
    <AppWrap className="App">
      <Header />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  height: 2000px;
`;