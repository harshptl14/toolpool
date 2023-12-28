import { css } from "styled-components";

const variables = css`
  :root {
    --green: #1b7921;
    --dark-green: #86e48c;

    --back-light: #ecf8ed;
    --back-dark: #071308;

    --secondary-light: #68ed73;
    --secondary-dark: #12971d;

    --accent-light: #08e717;
    --accent-dark: #18f727;

    /* --border-light: #505050; */
    /* --border-dark: #093e13; */
    /* --border-light: #b1edc2; */
    --border-light: #d4dfd5;
    --border-dark: #1d3422;

    --shade-light: #d2f5d5;
    --shade-dark: #0a2d0c;

    --shade-light-varient: #def7e1;
    --shade-dark-varient: #08200a;

    --shade-light-backcard: #e1f1e3;
    --shade-dark-backcard: #0e1d0f;

    --footer-light: #e1ece2;
    --footer-dark: #131e14;

    --font-light: #0c180d;
    --font-dark: #e7f3e8;

    --fontdesc-light: #636363;
    --fontdesc-dark: #cacaca;

    --font-light-contrast: #ecf8ed;
    --font-dark-contrast: #071308;

    --hover-light: #eefff1;
    --hover-dark: #041b08;

    --card-light: #e3ffe8;
    --card-dark: #042209;

    --strike-light: #000000;
    --strike-dark: #ffffff;

    --border-button-light: #b1edc2;
    --border-button-dark: #093e13;

    --nav-light: rgba(236, 248, 237, 0.75);
    --nav-dark: rgba(7, 19, 8, 0.75);

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
