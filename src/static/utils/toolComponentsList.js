import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";
import ImageResizer from "../../components/Tools/ImageTools/ImageResizer/imageresizer";
import LetterCounter from "../../components/Tools/TextTools/LetterCounter/LetterCounter";
import WhiteSpace from "../../components/Tools/TextTools/WhiteSpaceRemover/WhiteSpace";
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
        "Generate Lorem Ipsum text with desired number of paragraphs and properties",
      readme: LoremReadme,
    },
    caseconverter: {
      title: "Case Converter",
      component: <CaseConverter />,
      url: "texttools/caseconverter",
      description:
        "Convert your text to uppercase, lowercase, title case, sentence case and many more",
      readme: CaseReadme,
    },
    t2b: {
      title: "Text 2 Binary",
      component: <Text2Binary />,
      url: "texttools/t2b",
      description: "Convert text to binary strings and vice versa.",
      readme: T2BReadme,
    },
    uniquewords: {
      title: "Unique Word Finder",
      component: <UniqueWordsFinder />,
      url: "texttools/uniquewords",
      description: "Find all the uniques words used in a text.",
      readme: UniqueReadme,
    },

    lettercounter: {
      title: "Letter Counter",
      component: <LetterCounter />,
      url: "texttools/lettercounter",
      description:
        "Count letters, words and sentences in a text and analyze this numbers with common limits",
      readme: Lettercountreadme,
    },

    whitespaceremover: {
      title: "Multiple Whitespace Remover",
      component: <WhiteSpace />,
      url: "texttools/whitespaceremover",
      description:
        "Remove multiple whitespaces and linebreaks in a text and clear unwanted spaces",
      readme: WhitespaceReadme,
    },
  },
  imagetools: {
    imageresizer: {
      title: "Image Resizer",
      component: <ImageResizer />,
      url: "imagetools/uniquewords",
      description: "Resize your image in dimensions you want.",
    },
  },
};
