import LoremGenerator from "../../components/Tools/TextTools/LoremGenerator/loremGenerator";
import CaseConverter from "../../components/Tools/TextTools/CaseConverter/caseconverter";
import Text2Binary from "../../components/Tools/TextTools/Text2Binary/text2binary";
import UniqueWordsFinder from "../../components/Tools/TextTools/UniqueWordsFinder/uniqueWordsFinder";

// List of all the tool components with category
export const TOOLS = {
  texttools: {
    lorem: <LoremGenerator />,
    caseconverter: <CaseConverter />,
    t2b: <Text2Binary />,
    uniquewords: <UniqueWordsFinder />,
  },
};
