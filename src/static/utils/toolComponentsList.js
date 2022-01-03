import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";
import ImageResizer from "../../components/Tools/ImageTools/ImageResizer/imageresizer";
import LetterCounter from "../../components/Tools/TextTools/LetterCounter/LetterCounter";
import WhiteSpace from "../../components/Tools/TextTools/WhiteSpaceRemover/WhiteSpace";
import {
  caseconverter,
  lorem,
  resize,
  count,
  binary,
  unique,
  whiteSpace,
} from "../icons/index";

import {
  CaseReadme,
  Lettercountreadme,
  LoremReadme,
  T2BReadme,
  UniqueReadme,
  WhitespaceReadme,
} from "../toolDescriptions/toolReadmes";

// List of all the tool components with category
export const TOOLS = {
  texttools: {
    lorem: {
      title: "Lorem Ipsum Generator",
      component: <LoremGenerator />,
      url: "texttools/lorem",
      description:
        "Create your placeholder texts with desired number of paragraphs and properties",
      readme: LoremReadme,
      icon: lorem,
    },
    caseconverter: {
      title: "Case Converter",
      component: <CaseConverter />,
      url: "texttools/caseconverter",
      description:
        "Convert your text or string to uppercase, lowercase, title case & sentence case",
      readme: CaseReadme,
      icon: caseconverter,
    },
    t2b: {
      title: "Text 2 Binary",
      component: <Text2Binary />,
      url: "texttools/t2b",
      description: "Convert text to binary strings and vice versa.",
      readme: T2BReadme,
      icon: binary,
    },
    uniquewords: {
      title: "Unique Word Finder",
      component: <UniqueWordsFinder />,
      url: "texttools/uniquewords",
      description: "Find all the uniques words used in a text.",
      readme: UniqueReadme,
      icon: unique,
    },

    lettercounter: {
      title: "Letter Counter",
      component: <LetterCounter />,
      url: "texttools/lettercounter",
      description:
        "Count letters, words and sentences in a text and analyze this numbers with common limits",
      readme: Lettercountreadme,
      icon: count,
    },

    whitespaceremover: {
      title: "Multiple Whitespace Remover",
      component: <WhiteSpace />,
      url: "texttools/whitespaceremover",
      description:
        "Remove multiple whitespaces and linebreaks in a text and clear unwanted characters",
      readme: WhitespaceReadme,
      icon: whiteSpace,
    },
  },
  imagetools: {
    imageresizer: {
      title: "Image Resizer",
      component: <ImageResizer />,
      url: "imagetools/uniquewords",
      description: "Resize your image in dimensions you want.",
      icon: resize,
    },
  },
};
