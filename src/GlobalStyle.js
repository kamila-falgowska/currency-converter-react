import { createGlobalStyle } from "styled-components";
import bgImage from "./Currency-converter.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    margin: 0;
  }
`;
