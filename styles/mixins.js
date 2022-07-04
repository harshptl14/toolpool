import { css } from "styled-components";

const button = css`
  color: ${({ theme }) => theme.color};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.shade};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

const card = css`
  position: relative;
  /* height: 30%; */
  padding: 2rem;
  /* width: 30%; */
  /* max-width: 400px; */
  border: 2px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  top: 0;
  right: 0;

  &:hover {
    box-shadow: 10px 10px 0 ${({ theme }) => theme.color};
    top: -10px;
    right: 10px;
  }
`;

const openCard = css`
  ${card}
  box-shadow: 10px 10px 0 ${({ theme }) => theme.color};
  &:hover {
    box-shadow: none;
    top: 10px;
    right: -10px;
  }
`;

const mixins = {
  button,
  card,
  openCard,

  flexStart: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexColumnSpacebetween: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
  `,

  flexColumnStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  flexBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  flexEven: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,

  flexBeside: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  padding: css`
    width: 90%;
    max-width: 1240px;
    margin: 115px auto 50px auto;
    /* flex-grow: 1; */
    flex: 1 0 auto;

    @media (min-width: 600px) {
      width: 90%;
    }

    @media (min-width: 1000px) {
      width: 80%;
    }
  `,

  iconBackground: css`
    display: flex;
    padding: 1.3rem;
    width: max-content;
    border: 0px;
    /* box-shadow: 2px 2px 0 ${({ theme }) => theme.shadeVarient}; */
    /* justify-content: center; */
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.shade};
    text-align: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.color};
      outline: 0;
    }
  `,

  linkColored: css`
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    color: var(--green);
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.color};
      outline: 0;
    }
  `,

  titleDiv: css`
    font-weight: 500;
    font-size: var(--fz-heading);
    margin: 50px 0 30px 0;

    @media (min-width: 600px) {
      margin: 30px 0 20px 0;
    }
  `,

  pageTitle: css`
    font-weight: 500;
    font-size: var(--fz-headingxl);
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: ${({ theme }) => theme.color};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.color};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.color} !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.color};
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${({ theme }) => theme.color};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.shade};
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  smallButtonFilled: css`
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.shade};
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${({ theme }) => theme.color};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.shade};
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--pink-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--pink-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.color};
      }
    }
  `,

  textarea: css`
    width: 100%;
    /* resize: none; */
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.shade};
    font-size: var(--fz-lg);
    padding: 15px 20px;
    /* margin: 0px 0 15px 0; */
    font-family: "Open Sans", -apple-system, system-ui, sans-serif;
    color: ${({ theme }) => theme.text};

    :disabled{
      background-color: ${({ theme }) => theme.shadeBackcard};
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  backColor: css`
    background-color: red;
  `,

  slider: css`
    input[type="range"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100%;
      height: 5px;
      padding: 0;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
      background: ${({ theme }) => theme.shade};
    }

    /*Chrome thumb*/

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-border-radius: 5px;
      /*16x16px adjusted to be same as 14x14px on moz*/
      height: 16px;
      width: 16px;
      border-radius: 5px;
      background: ${({ theme }) => theme.color};
      /* border: 1px solid #c5c5c5; */
    }

    /*Mozilla thumb*/

    input[type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      -moz-border-radius: 5px;
      height: 14px;
      width: 14px;
      border-radius: 5px;
      background: #e7e7e7;
      border: 1px solid #c5c5c5;
    }

    /*IE & Edge input*/

    input[type="range"]::-ms-track {
      width: 300px;
      height: 6px;
      /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
      background: transparent;
      /*leave room for the larger thumb to overflow with a transparent border */
      border-color: transparent;
      border-width: 2px 0;
      /*remove default tick marks*/
      color: transparent;
    }

    /*IE & Edge thumb*/

    input[type="range"]::-ms-thumb {
      height: 14px;
      width: 14px;
      border-radius: 5px;
      background: #e7e7e7;
      border: 1px solid #c5c5c5;
    }

    /*IE & Edge left side*/

    input[type="range"]::-ms-fill-lower {
      background-color: ${({ theme }) => theme.shade};
      /* border-radius: 2px; */
    }

    /*IE & Edge right side*/

    input[type="range"]::-ms-fill-upper {
      background-color: ${({ theme }) => theme.color};
      /* border-radius: 2px; */
    }

    /*IE disable tooltip*/

    input[type="range"]::-ms-tooltip {
      display: none;
    }

    input[type="text"] {
      border: none;
    }
  `,

  checkbox: css`
    input[type="checkbox"] {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      /* Remove most all native input styles */
      appearance: none;
      /* For iOS < 15 */
      background-color: ${({ theme }) => theme.background};
      /* Not removed via appearance */
      margin: 0;

      font: inherit;
      color: ${({ theme }) => theme.color};
      width: 1.15em;
      height: 1.15em;
      border: 0.1em solid ${({ theme }) => theme.color};
      border-radius: 0.15em;
      transform: translateY(-0.075em);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="checkbox"]::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      transform: scale(0);
      transform-origin: bottom left;
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${({ theme }) => theme.color};
      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }

    input[type="checkbox"]:focus {
      /* outline: max(2px, 0.15em) solid ${({ theme }) => theme.color}; */
      outline-offset: max(2px, 0.15em);
    }
  `,

  textbox: css`
    background-color: ${({ theme }) => theme.toolInput};
    padding: 10px;
    width: 100%;
    border: 1.5px solid ${({ theme }) => theme.shadeVarient};
    color: ${({ theme }) => theme.text};

    :active {
      outline: 1.8px dashed ${({ theme }) => theme.color};
    }

    :disabled{
      background-color: ${({ theme }) => theme.shadeBackcard};
      cursor: not-allowed;
    }
  `,

  selectInput: css`
    width: 100%;
      display: block;
      /* border: 1px solid ${({ theme }) => theme.color}; */
      background-color: ${({ theme }) => theme.toolInput};
      padding: 0.5em 1em;
      /* border-radius: 5px; */

      border: 1.5px solid ${({ theme }) => theme.shadeVarient};
      color: ${({ theme }) => theme.text};
      padding: 10px;
      /* padding-right: 2em; */
      
      /* border-right: 16px solid transparent; */

      :active {
        outline: 1.8px dashed ${({ theme }) => theme.color};
      }
  `,

  colorSelection: css`
    ${({ theme }) => theme.mixins.flexStart}
  gap: 20px;
  width: max-content;
  height: 100%;
  margin-top: 15px;
  flex-wrap: wrap;
  font-family: var(--font-mono);

    /* ${({ theme }) => theme.mixins.flexStart}; */
    gap: 10px;
    font-size: var(--fz-sm);
    color: ${({ theme }) => theme.color};
    padding: 13px;
    background-color: ${({ theme }) => theme.shadeBackcard};

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }
  `,

  imageUploader: css`
    width: 100%;
    position: relative;

    input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      cursor: pointer;
    }

    .file-dummy {
      width: 100%;
      padding: 30px;
      background-color: ${({ theme }) => theme.footer};
      border: 1.8px dashed ${({ theme }) => theme.shade};
      text-align: center;
      transition: background 0.3s ease-in-out;
      color: ${({ theme }) => theme.descfont};

      .success {
        display: none;
      }

      .default {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
      }
    }

    &:hover .file-dummy {
      border: 1.8px dashed ${({ theme }) => theme.color};

      /* background: ${({ theme }) => theme.hover}; */
    }

    input[type="file"]:focus + .file-dummy {
      /* outline: 2px solid rgba(255, 255, 255, 0.5); */
      /* outline: -webkit-focus-ring-color auto 5px; */
    }

    input[type="file"]:valid + .file-dummy {
      .success {
        display: inline-block;
        color: ${({ theme }) => theme.color};
      }
      .default {
        display: none;
      }
    }
  `,
};

export default mixins;
