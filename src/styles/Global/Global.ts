import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    line-height: 140%;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px transparent;
  }
`;