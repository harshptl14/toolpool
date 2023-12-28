import styled, { ThemeProvider } from "styled-components";
import ToastContextProvider from "./Toast/toastreducer";
import GlobalStyle from "../styles/GlobalStyle";
import Navbar from "./Navbar";
import { useDarkMode } from "../hooks/useDarkMode";
import { lightTheme, darkTheme } from "../styles/theme";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

const GlobalPadding = styled.div`
  ${({ theme }) => theme.mixins.padding};
`;

let home = false;
const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar isHome={home} toggleTheme={themeToggler} />
      <GlobalPadding>
        <Analytics />
        <ToastContextProvider>{children}</ToastContextProvider>
      </GlobalPadding>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
