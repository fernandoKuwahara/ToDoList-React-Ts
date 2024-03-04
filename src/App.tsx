import { ThemeProvider } from "styled-components";
import { BodyContainer } from "./styles/Style-Components/App/App";
import { GlobalStyle } from "./styles/Global/Global";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

import { ThemeDefault } from "./styles/Theme/Theme";

export function App() {
  return (
    <ThemeProvider theme={ ThemeDefault }>
      <BodyContainer>
        <Header />
        <Form />
        <GlobalStyle />
      </BodyContainer>
    </ThemeProvider>
  );
}