import { createGlobalStyle } from "styled-components";
import variables from "./variables";
// import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
/* ${fonts}; */
${variables}

html{
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}


*, 
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    transition: var(--transition);
    background-color: ${({ theme }) => theme.shade};
    color: ${({ theme }) => theme.color};
  }

  :focus {
    outline: 1px dashed ${({ theme }) => theme.color};
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.color};
  }
  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    /* background: ${({ theme }) => theme.shade}; */
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border};
    /* border: 1px solid ${({ theme }) => theme.color}; */
    /* border-radius: 10px; */
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.text};
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }

  }

  #root, #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
