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
<<<<<<< HEAD:src/styles/GlobalStyle.js
=======
    transition: var(--transition);
>>>>>>> 619625bd20db855af2b7da783476e5ccfe709859:styles/GlobalStyle.js
    background-color: ${({ theme }) => theme.shade};
    color: ${({ theme }) => theme.color};
  }

  :focus {
<<<<<<< HEAD:src/styles/GlobalStyle.js
    outline: 2px dashed ${({ theme }) => theme.shade};
=======
    outline: 1.8px dashed ${({ theme }) => theme.color};
>>>>>>> 619625bd20db855af2b7da783476e5ccfe709859:styles/GlobalStyle.js
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
<<<<<<< HEAD:src/styles/GlobalStyle.js
    background: ${({ theme }) => theme.shade};
=======
    /* background: ${({ theme }) => theme.shade}; */
>>>>>>> 619625bd20db855af2b7da783476e5ccfe709859:styles/GlobalStyle.js
  }
  
  body::-webkit-scrollbar-thumb {
<<<<<<< HEAD:src/styles/GlobalStyle.js
    background-color: ${({ theme }) => theme.shade};;
    border: 3px solid ${({ theme }) => theme.color};;
=======
    background-color: ${({ theme }) => theme.border};
    /* border: 1px solid ${({ theme }) => theme.color}; */
>>>>>>> 619625bd20db855af2b7da783476e5ccfe709859:styles/GlobalStyle.js
    border-radius: 10px;
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
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
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
<<<<<<< HEAD:src/styles/GlobalStyle.js
    /* display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%; */
=======
>>>>>>> 619625bd20db855af2b7da783476e5ccfe709859:styles/GlobalStyle.js
  }
`;

export default GlobalStyle;
