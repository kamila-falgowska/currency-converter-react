import Form from "./Features/Form";
import { Container } from "./Container/styled";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;
