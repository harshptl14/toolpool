import { css } from "styled-components";

const variables = css`
  :root {
    --green: #008315;
    --dark-green: #40ac35;
    /* --dark-green: #268f1b; */

    --back-light: #f8fffa;
    --back-dark: #031d09;

    --shade-light: #d7ffe3;
    --shade-dark: #072f0e;

    --hover-light: #eefff1;
    --hover-dark: #041b08;

    --card-light: #e3ffe8;
    --card-dark: #042209;

    --shade-light-varient: #b6ffcb;
    --shade-dark-varient: #0b4115;

    --shade-light-backcard: #e3ffe8;
    --shade-dark-backcard: #06290c;

    --fontdesc-light: #636363;
    --fontdesc-dark: #cacaca;

    --font-light: #303031;
    --font-dark: #e4f0e6;

    --strike-light: #000000;
    --strike-dark: #ffffff;

    /* --border-light: #505050; */
    --border-light: #b1edc2;
    --border-dark: #093e13;

    --border-button-light: #b1edc2;
    --border-button-dark: #093e13;

    --nav-light: rgba(248, 255, 250, 0.75);
    --nav-dark: rgba(3, 29, 9, 0.75);

    --navy-shadow: rgba(2, 12, 27, 0.7);

    --font-sans: "Open Sans", -apple-system, system-ui, sans-serif;
    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

    --fz-xxs: 10px;
    --fz-small: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-xxxl: 25px;
    --fz-heading: 23px;
    --fz-headingsm: 20px;
    --fz-headingm: 35px;
    --fz-headingxl: 50px;
    --fz-headingxxl: 60px;

    --border-radius-normal: 1.6px;
    --border-radius-light: 1px;
    --border-thick: 2px;
    --border-radius: 4px;
    --border-circle: 25px;
    --nav-height: 80px;
    --nav-height-phone: 70px;
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
