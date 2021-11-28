import { createGlobalStyle } from "styled-components"
import variables from "./variables"
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
${fonts};
${variables}

html{
    box-sizing: border-box;
    width: 100%;
}

*, 
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--pink);
    color: var(--lightest-pink);
  }

  :focus {
    outline: 2px dashed var(--lightest-pink);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--pink);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-pink-light);
    border: 3px solid var(--lightest-pink);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-pink);
    color: var(--light-pink);
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

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
`

export default GlobalStyle
