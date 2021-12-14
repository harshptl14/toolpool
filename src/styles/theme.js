import mixins from "./mixins";
import logoDark from "../static/svg/logoDark.svg";
import logoLight from "../static/svg/logo.svg";

export const lightTheme = {
  color: `var(--green)`,
  background: `var(--back-light)`,
  shade: `var(--shade-light)`,
  shadeVarient: `var(--shade-light-varient)`,
  descfont: `var(--font-light)`,
  text: `var(--strike-light)`,
  nav: `var(--nav-light)`,
  border: `var(--border-light)`,
  footer: `var(--strike-dark)`,
  logo: logoLight,
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};

export const darkTheme = {
  color: `var(--green)`,
  background: `var(--back-dark)`,
  shade: `var(--shade-dark)`,
  shadeVarient: `var(--shade-dark-varient)`,
  descfont: `var(--font-dark)`,
  text: `var(--strike-dark)`,
  nav: `var(--nav-dark)`,
  border: `var(--border-dark)`,
  footer: `var(--strike-light)`,
  logo: logoDark,

  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};
