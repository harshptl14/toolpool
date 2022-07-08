import mixins from "./mixins";
import logoDark from "../public/svg/logoDark.svg";
import logoLight from "../public/svg/logo.svg";
import waveLight from "../public/svg/waveLight.svg";
import waveDark from "../public/svg/waveDark.svg";
import infoDark from "../public/svg/infoDark.svg";
import infoLight from "../public/svg/infoLight.svg";

export const lightTheme = {
  color: `var(--green)`,
  background: `var(--back-light)`,
  shade: `var(--shade-light)`,
  hover: `var(--hover-light)`,
  shadeVarient: `var(--shade-light-varient)`,
  shadeBackcard: "var(--shade-light-backcard)",
  descfont: `var(--fontdesc-light)`,
  text: `var(--font-light)`,
  nav: `var(--nav-light)`,
  border: `var(--border-light)`,
  footer: `var(--strike-dark)`,
  toolInput: "#ffffff",
  shadow: "#dddddd",
  contrast: "#000000",
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
  shadeBackcard: "var(--shade-dark-backcard)",
  descfont: `var(--fontdesc-dark)`,
  text: `var(--font-dark)`,
  nav: `var(--nav-dark)`,
  border: `var(--border-dark)`,
  footer: `var(--strike-light)`,
  toolInput: "#000000",
  shadow: "#0a4909",
  contrast: "#ffffff",
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
