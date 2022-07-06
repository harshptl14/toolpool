import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";
import ImageResizer from "../../components/Tools/ImageTools/ImageResizer/imageresizer";
import LetterCounter from "../../components/Tools/TextTools/LetterCounter/LetterCounter";
import WhiteSpace from "../../components/Tools/TextTools/WhiteSpaceRemover/WhiteSpace";
import RgbHexConverter from "../../components/Tools/ColorTools/RgbToHex/rgbHexConverter";
// import SizeConverter from '../../components/Tools/DevTools/SizeConverter'
import SizeConverter from "../../components/Tools/DevTools/SizeConverter/SizeConverter";
import {
  BoxShadowReadme,
  CaseReadme,
  ImageResizerreadme,
  Lettercountreadme,
  LoremReadme,
  T2BReadme,
  UniqueReadme,
  WhitespaceReadme,
  GlassMorphReadme,
  ImageColorPickerReadme,
  CSSTransitionsReadme,
  SizeConverterReadme,
  RgbHexConverterReadme
} from "../toolDescriptions/toolReadmes";
import BoxShadowGenerator from "../../components/Tools/DevTools/BoxShadow/boxshadowgenerator";
import {
  caseconverter,
  lorem,
  resize,
  count,
  binary,
  unique,
  whiteSpace,
  shadow,
  tweetGenerator,
  colorConverter,
  colorPicker,
  transition,
  scale,
  glass
} from "../icons/index";
import TweetGenerator from "../../components/Tools/SocialTools/TweetGenerator/tweetgenerator";
import GlassMorphismGenerator from "../../components/Tools/DevTools/GlassMorphism/GlassMorphismGenerator";
import ImageColorPicker from "../../components/Tools/ImageTools/ImageColorPicker/imagecolorpicker";
import CSSTransitionsWrapper from "../../components/Tools/DevTools/CSSTransitions/CssTransitions";
import QrcodeGenerator from "../../components/Tools/MiscellaneousTools/QrcodeGenerator/QrcodeGenerator";

export const URLLIST = [
  "text/lorem",
  "text/caseconverter",
  "text/t2b",
  "text/uniquewords",
  "text/whitespaceremover",
  "text/lettercounter",
  "image/imageresizer",
  "image/imagecolorpicker",
  "dev/box-shadow-generator",
  "dev/glass-morphism-generator",
  "dev/css-transition-generator",
  "social/tweet-generator",
  "color/rgb-hex-converter",
];

// List of all the tool components with category
export const TOOLS = {
  text: {
    lorem: {
      title: "Lorem Ipsum Generator",
      component: <LoremGenerator />,
      url: "text/lorem",
      description:
        "Generate Lorem Ipsum text with desired number of paragraphs and properties",
      readme: LoremReadme,
      icon: lorem,
      poster: "https://toolpool.ml/assets/posters/posterLoremipsum.jpg",
    },
    caseconverter: {
      title: "Case Converter",
      component: <CaseConverter />,
      url: "text/caseconverter",
      description:
        "Convert your text to uppercase, lowercase, title case, sentence case and many more",
      readme: CaseReadme,
      icon: caseconverter,
      poster: "https://toolpool.ml/assets/posters/posterCaseconverter.jpg",
    },
    t2b: {
      title: "Text 2 Binary",
      component: <Text2Binary />,
      url: "text/t2b",
      description: "Convert text to binary strings and vice versa.",
      readme: T2BReadme,
      icon: binary,
      poster: "https://toolpool.ml/assets/posters/posterText2binary.jpg",
    },
    uniquewords: {
      title: "Unique Word Finder",
      component: <UniqueWordsFinder />,
      url: "text/uniquewords",
      description: "Find all the uniques words used in a text.",
      readme: UniqueReadme,
      icon: unique,
      poster: "https://toolpool.ml/assets/posters/posterUniqueword.jpg",
    },

    lettercounter: {
      title: "Letter Counter",
      component: <LetterCounter />,
      url: "text/lettercounter",
      description:
        "Count letters, words and sentences in a text and analyze this numbers with common limits",
      readme: Lettercountreadme,
      icon: count,
      poster: "https://toolpool.ml/assets/posters/posterLettercounter.jpg",
    },

    whitespaceremover: {
      title: "Multiple Whitespace Remover",
      component: <WhiteSpace />,
      url: "text/whitespaceremover",
      description:
        "Remove multiple whitespaces and linebreaks in a text and clear unwanted spaces",
      readme: WhitespaceReadme,
      icon: whiteSpace,
      poster: "https://toolpool.ml/assets/posters/posterWhitespace.jpg",
    },
  },
  image: {
    imageresizer: {
      title: "Image Resizer",
      component: <ImageResizer />,
      url: "image/imageresizer",
      description: "Resize your image in dimensions you want.",
      readme: ImageResizerreadme,
      icon: resize,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
    imagecolorpicker: {
      title: "Image Color Picker",
      component: <ImageColorPicker />,
      url: "image/imagecolorpicker",
      description: "Get exact pixel color from an image.",
      readme: ImageColorPickerReadme,
      icon: colorPicker,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
  },
  dev: {
    "box-shadow-generator": {
      title: "CSS Box Shadow Generator",
      component: <BoxShadowGenerator />,
      url: "dev/box-shadow-generator",
      description:
        "Create the box shadow you need by tuning the parameters, preview it as a box, circle or header and get the CSS code directly.",
      icon: shadow,
      readme: BoxShadowReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
    "glass-morphism-generator": {
      title: "CSS Glass-morphism Generator",
      component: <GlassMorphismGenerator />,
      description: "Generate CSS code for Glassmorphism effect on elements",
      url: "dev/glass-morphism-generator",
      icon: glass,
      readme: GlassMorphReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
    "css-transition-generator": {
      title: "CSS Transition Generator",
      component: <CSSTransitionsWrapper />,
      description: "Generate CSS code for transitions and animations",
      url: "dev/css-transition-generator",
      icon: transition,
      readme: CSSTransitionsReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
    "size-converter": {
      title: "Size Converter",
      component: <SizeConverter />,
      description: "Generate CSS code for transitions and animations",
      url: "dev/size-converter",
      icon: scale,
      readme: SizeConverterReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    }
    
  },
  social: {
    "tweet-generator": {
      title: "Tweet Generator",
      component: <TweetGenerator />,
      url: "social/tweet-generator",
      description:
        "Create the box shadow you need by tuning the parameters, preview it as a box, circle or header and get the CSS code directly.",
      icon: tweetGenerator,
      readme: ``,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
  },
  color: {
    "rgb-hex-converter": {
      title: "Rgb-Hex-Hsl Converter",
      component: <RgbHexConverter />,
      url: "color/rgb-hex-converter",
      description:
        "Convert RGB or Hex color into different types of color codes",
      icon: colorConverter,
      readme: RgbHexConverterReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
  },

  miscellaneous: {
    "qrcode-generator": {
      title: "QR Code Generator",
      component: <QrcodeGenerator />,
      url: "miscellaneous/qrcode-generator",
      description:
        "Generate a QR code for given text input.",
      icon: colorConverter,
      readme: RgbHexConverterReadme,
      poster: "https://toolpool.ml/assets/posters/posterImageresizer.jpg",
    },
  }
};
