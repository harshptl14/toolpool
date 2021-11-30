import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import RouteBuilder from "./routeBuilder";
import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import styled from "styled-components";

const GlobalPadding = styled.div`
  ${({theme}) => theme.mixins.padding};
`;


function App() {
  // false stands for light theme
  const [mode, setTheme] = useState(false);

  const toggleTheme = () => {
    if (mode === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={mode === false ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Navbar toggleTheme={toggleTheme} />
          <GlobalPadding>
          <RouteBuilder />
          </GlobalPadding>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
