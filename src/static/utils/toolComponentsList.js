import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";
import ImageResizer from "../../components/Tools/ImageTools/ImageResizer/imageresizer";

// List of all the tool components with category
export const TOOLS = {
  texttools: {
    lorem: {
      title: "Lorem Ipsum Generator",
      component: <LoremGenerator />,
      url: "texttools/lorem",
      description:
        "Create your placeholder texts with desired number of paragraphs and properties",
    },
    caseconverter: {
      title: "Case Converter",
      component: <CaseConverter />,
      url: "texttools/caseconverter",
      description:
        "Convert your text or string to uppercase, lowercase, title case & sentence case",
    },
    t2b: {
      title: "Text 2 Binary",
      component: <Text2Binary />,
      url: "texttools/t2b",
      description: "Convert text to binary strings and vice versa.",
    },
    uniquewords: {
      title: "Unique Word Finder",
      component: <UniqueWordsFinder />,
      url: "texttools/uniquewords",
      description: "Find all the uniques words used in a text.",
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
