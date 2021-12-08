import { css } from "styled-components";

const variables = css`
  :root {
    --green: #2b7537;
    --back-light: #f8fffa;
    --back-dark: #010e04;
    --shade-light: #ddffe7;
    --shade-light-varient: #b6ffcb;
    --shade-dark-varient: #0b4115;
    --shade-dark: #07290d;
    --font-light: #96a798;
    --font-dark: #cacaca;
    --strike-light: #000000;
    --strike-dark: #ffffff;

    --nav-light: rgba(248, 255, 250, 0.85);
    --nav-dark: rgba(1, 14, 4, 0.85);

    --navy-shadow: rgba(2, 12, 27, 0.7);

    --font-sans: "Open Sans", -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-headingxlM: 45px;
    --fz-headingxl: 62px;

    --border-radius: 4px;
    --border-circle: 50%;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
