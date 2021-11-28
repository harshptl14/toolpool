import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import ContentBuilder from "./ContentBuilder";
import { useState } from "react";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [mode, setTheme] = useState("light");

  const toggleTheme = () => {
    if (mode === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    console.log(mode),
    (
      <>
        <BrowserRouter>
          <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar toggleTheme={toggleTheme} />
            <ContentBuilder />
          </ThemeProvider>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
