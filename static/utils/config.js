import {
  caseconverter,
  lorem,
  resize,
  count,
  binary,
  unique,
  whiteSpace,
  textTools,
  imageTools,
  codingTools,
  colorsTools,
  socialmediaTools,
  loading,
  shadow,
} from "../icons/index";

const config = {
  //HomeScreen featured tools
  featuredTools: [
    {
      title: "Case Converter",
      desc: "Convert your text or string to uppercase, lowercase, title case & sentence case",
      link: "/tools/text/caseconverter",
      icon: caseconverter,
      key: 1,
    },

    {
      title: "Lorem Ipsum Generator",
      desc: "Create your placeholder texts with desired number of paragraphs and properties",
      link: "/tools/text/lorem",
      icon: lorem,
      key: 2,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/tools/image/imageresizer",
      icon: resize,
      key: 3,
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/about",
      key: 1,
    },
    {
      name: "Contact",
      url: "/contact",
      key: 2,
    },
  ],

  footerLinks: [
    {
      name: "About",
      url: "/about",
      key: 1,
    },

    {
      name: "Contact",
      url: "/contact",
      key: 2,
    },
    {
      name: "Terms of Use",
      url: "/terms",
      key: 3,
    },
    {
      name: "Privacy Policy",
      url: "/privacy",
      key: 4,
    },
  ],

  // Categorylist of all tools
  categoryList: [
    {
      name: "Text Tools",
      logo: textTools,
      id: "textTools",
      key: 1,
    },
    {
      name: "Image Tools",
      logo: imageTools,
      id: "imageTools",
      key: 2,
    },
    {
      name: "Developers Tools",
      logo: codingTools,
      id: "developerTools",
      key: 3,
    },
    {
      name: "Colors Tools",
      logo: colorsTools,
      id: "colorTools",
      key: 4,
    },
    {
      name: "Social Media Tools",
      logo: socialmediaTools,
      id: "socialmediaTools",
      key: 5,
    },
  ],

  textTools: [
    {
      title: "Case Converter",
      desc: "Convert your text or string to uppercase, lowercase, title case & sentence case",
      link: "tools/text/caseconverter",
      icon: caseconverter,
      key: 1,
    },

    {
      title: "Lorem Ipsum Generator",
      desc: "Create your placeholder texts with desired number of paragraphs and properties",
      link: "tools/text/lorem",
      icon: lorem,
      key: 2,
    },

    {
      title: "Letter Counter",
      desc: "Count letters, words and sentences in a text and analyze this numbers with common limits",
      link: "tools/text/lettercounter",
      icon: count,
      key: 3,
    },
    {
      title: "Multiple Whitespace Remover",
      desc: "Remove multiple whitespaces and linebreaks in a text and clear unwanted characters",
      link: "tools/text/whitespaceremover",
      icon: whiteSpace,
      key: 4,
    },
    {
      title: "Text 2 Binary",
      desc: "Convert text to binary strings and vice versa.",
      link: "tools/text/t2b",
      icon: binary,
      key: 5,
    },
    {
      title: "Unique words finder",
      desc: "Find all the uniques words used in a text.",
      link: "tools/text/uniquewords",
      icon: unique,
      key: 6,
    },
  ],

  imageTools: [
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "tools/image/imageresizer",
      icon: resize,
      key: 1,
    },
  ],
  developerTools: [
    {
      title: "CSS Box-Shadow Generator",
      desc: "Create the box shadow you need by tuning the parameters, preview it as a box, circle or header and get the CSS code directly.",
      link: "tools/dev/box-shadow-generator",
      icon: shadow,
      key: 1,
    },
    {
      title: "CSS Glass-morphism Generator",
      desc: "Generate CSS code for Glassmorphism effect on elements",
      link: "tools/dev/glass-morphism-generator",
      icon: shadow,
      key: 2,
    }
  ],

  colorTools: [],
  socialmediaTools: [
    {
      title: "Tweet Generator",
      desc: "Generate a fake tweet screenshot just for fun.",
      link: "tools/social/tweet-generator",
      icon: loading,
      key: 1,
    },
  ],
};

export default config;
