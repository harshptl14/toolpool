import mixins from "./mixins";
import logoDark from "../static/svg/logoDark.svg";
import logoLight from "../static/svg/logo.svg";
import waveLight from "../static/svg/waveLight.svg";
import waveDark from "../static/svg/waveDark.svg";
import infoDark from "../static/svg/infoDark.svg";
import infoLight from "../static/svg/infoLight.svg";

export const lightTheme = {
  color: `var(--green)`,
  background: `var(--back-light)`,
  shade: `var(--shade-light)`,
  hover: `var(--hover-light)`,
  shadeVarient: `var(--shade-light-varient)`,
  descfont: `var(--fontdesc-light)`,
  text: `var(--font-light)`,
  nav: `var(--nav-light)`,
  border: `var(--border-light)`,
  footer: `var(--strike-dark)`,
  logo: logoLight,
  wave: waveLight,
  info: infoLight,
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
  color: `var(--dark-green)`,
  background: `var(--back-dark)`,
  shade: `var(--shade-dark)`,
  hover: `var(--hover-dark)`,
  shadeVarient: `var(--shade-dark-varient)`,
  descfont: `var(--fontdesc-dark)`,
  text: `var(--font-dark)`,
  nav: `var(--nav-dark)`,
  border: `var(--border-dark)`,
  footer: `var(--strike-light)`,
  logo: logoDark,
  wave: waveDark,
  info: infoDark,

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
