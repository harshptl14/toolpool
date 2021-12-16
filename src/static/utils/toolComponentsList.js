import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";

// List of all the tool components with category
export const TOOLS = {
  texttools: {
    lorem: [
      "Lorem Ipsum Generator",
      <LoremGenerator />,
      "texttools/lorem",
      "Create your placeholder texts with desired number of paragraphs and properties",
    ],
    caseconverter: [
      "Case Converter",
      <CaseConverter />,
      "texttools/caseconverter",
      "Convert your text or string to uppercase, lowercase, title case & sentence case",
    ],
    t2b: [
      "Text 2 Binary",
      <Text2Binary />,
      "texttools/t2b",
      "Convert text to binary strings and vice versa.",
    ],
    uniquewords: [
      "Unique Word Finder",
      <UniqueWordsFinder />,
      "texttools/uniquewords",
      "Find all the uniques words used in a text.",
    ],
  },
};
