import lorem from "../assets/paragraph.png";
import resize from "../assets/resize.png";
import whiteSpace from "../assets/whitespace.png";
import count from "../assets/counter.png";
import caseconverter from "../assets/text.png";
import binary from "../assets/binary.png";
import unique from "../assets/book.png";
import textTools from "../assets/texttools.png";
import imageTools from "../assets/image.png";
import codingTools from "../assets/coding.png";
import colorsTools from "../assets/color.png";
import socialmediaTools from "../assets/network.png";

const config = {
  //HomeScreen featured tools
  featuredTools: [
    {
      title: "Case Converter",
      desc: "Convert your text or string to uppercase, lowercase, title case & sentence case",
      link: "texttools/caseconverter",
      icon: caseconverter,
    },

    {
      title: "Lorem Ipsum Generator",
      desc: "Create your placeholder texts with desired number of paragraphs and properties",
      link: "texttools/lorem",
      icon: lorem,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/imagetools/imageresizer",
      icon: resize,
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ],

  footerLinks: [
    {
      name: "About",
      url: "/about",
    },

    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Terms of Use",
      url: "/terms",
    },
    {
      name: "Privacy Policy",
      url: "/privacy",
    },
  ],

  // Categorylist of all tools
  categoryList: [
    {
      name: "Text Tools",
      logo: textTools,
      id: "textTools",
    },
    {
      name: "Image Tools",
      logo: imageTools,
      id: "imageTools",
    },
    {
      name: "Developers Tools",
      logo: codingTools,
      id: "developerTools",
    },
    {
      name: "Colors Tools",
      logo: colorsTools,
      id: "colorTools",
    },
    {
      name: "Social Media Tools",
      logo: socialmediaTools,
      id: "socialmediaTools",
    },
  ],

  textTools: [
    {
      title: "Case Converter",
      desc: "Convert your text or string to uppercase, lowercase, title case & sentence case",
      link: "texttools/caseconverter",
      icon: caseconverter,
    },

    {
      title: "Lorem Ipsum Generator",
      desc: "Create your placeholder texts with desired number of paragraphs and properties",
      link: "texttools/lorem",
      icon: lorem,
    },

    {
      title: "Letter Counter",
      desc: "Count letters, words and sentences in a text and analyze this numbers with common limits",
      link: "texttools/lettercounter",
      icon: count,
    },
    {
      title: "Multiple Whitespace Remover",
      desc: "Remove multiple whitespaces and linebreaks in a text and clear unwanted characters",
      link: "texttools/whitespaceremover",
      icon: whiteSpace,
    },
    {
      title: "Text 2 Binary",
      desc: "Convert text to binary strings and vice versa.",
      link: "texttools/t2b",
      icon: binary,
    },
    {
      title: "Unique words finder",
      desc: "Find all the uniques words used in a text.",
      link: "texttools/uniquewords",
      icon: unique,
    },
  ],

  imageTools: [
    {
      title: "Image Cropper",
      desc: "Crop unwanted parts of images and download desired part of the image as a new file",
      link: "/image-tools/image-cropper",
      icon: resize,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/imagetools/imageresizer",
      icon: lorem,
    },
    {
      title: "Image Color Extractor",
      desc: "Extract all colors from an image and get color codes and details of this colors as a list",
      link: "/imagetools/image-color-extractor",
      icon: lorem,
    },
    {
      title: "Image Color Picker",
      desc: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
      link: "/imagetools/image-color-picker",
      icon: lorem,
    },
  ],
  developerTools: [
    {
      title: "Image Cropper",
      desc: "Crop unwanted parts of images and download desired part of the image as a new file",
      link: "/image-tools/image-cropper",
      icon: lorem,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/image-tools/image-resizer",
      icon: lorem,
    },
    {
      title: "Image Color Extractor",
      desc: "Extract all colors from an image and get color codes and details of this colors as a list",
      link: "/image-tools/image-color-extractor",
      icon: lorem,
    },
    {
      title: "Image Color Picker",
      desc: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
      link: "/image-tools/image-color-picker",
      icon: lorem,
    },
  ],

  colorTools: [
    {
      title: "Image Cropper",
      desc: "Crop unwanted parts of images and download desired part of the image as a new file",
      link: "/image-tools/image-cropper",
      icon: lorem,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/image-tools/image-resizer",
      icon: lorem,
    },
    {
      title: "Image Color Extractor",
      desc: "Extract all colors from an image and get color codes and details of this colors as a list",
      link: "/image-tools/image-color-extractor",
      icon: lorem,
    },
    {
      title: "Image Color Picker",
      desc: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
      link: "/image-tools/image-color-picker",
      icon: lorem,
    },
  ],
  socialmediaTools: [
    {
      title: "Image Cropper",
      desc: "Crop unwanted parts of images and download desired part of the image as a new file",
      link: "/image-tools/image-cropper",
      icon: lorem,
    },
    {
      title: "Image Resizer",
      desc: "Resize any image to desired width and height either by protecting aspect ratio or not",
      link: "/image-tools/image-resizer",
      icon: lorem,
    },
    {
      title: "Image Color Extractor",
      desc: "Extract all colors from an image and get color codes and details of this colors as a list",
      link: "/image-tools/image-color-extractor",
      icon: lorem,
    },
    {
      title: "Image Color Picker",
      desc: "Pick any color from an image with an eyedropper and get detailed info about the color you picked",
      link: "/image-tools/image-color-picker",
      icon: lorem,
    },
  ],
};

export default config;
