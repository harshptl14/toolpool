import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import RouteBuilder from "./routeBuilder";
import { useDarkMode } from "../src/hooks/useDarkMode";
import { lightTheme, darkTheme } from "./styles/theme";
import styled from "styled-components";

const GlobalPadding = styled.div`
  ${({ theme }) => theme.mixins.padding};
`;

let home = true;

function App() {
  // Custom hook to set theme.
  // Destructured useDarkMode functional component.
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Navbar isHome={home} toggleTheme={themeToggler} />
          <GlobalPadding>
            <RouteBuilder />
          </GlobalPadding>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
