import { ThemeProvider } from "styled-components";
import Form from "./Features/Form";
import { Container } from "./Container/styled";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
