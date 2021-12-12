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
    justify-content: flex-start;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  flexBeside: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  padding: css`
    width: 90%;
    max-width: 1240px;
    margin: 100px auto 50px auto;
    flex-grow: 1;

    @media (min-width: 600px) {
      width: 90%;
    }

    @media (min-width: 1000px) {
      width: 80%;
    }
  `,

  iconBackground: css`
    display: flex;
    padding: 0.94rem;
    width: 55px;
    border: 0px;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-circle);
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

  titleDiv: css`
    font-weight: 500;
    font-size: var(--fz-heading);
    margin: 50px 0 30px 0;

    @media (min-width: 600px) {
      margin: 60px 0 30px 0;
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

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  backColor: css`
    background-color: red;
  `,
};



export default mixins;
