import { useParams } from "react-router-dom";
import { TOOLS } from "../../static/utils/toolComponentsList";
import ReactMarkdown from "react-markdown";
import { tool1 } from "../../static/toolDescriptions/tool1";
import PageTitle from "../PageTitle";

// A wrapper component to display various tools dynamically according to their ID (from URL)
const ToolWrapper = () => {
  //fetch toolId from URL params
  const { category, toolName } = useParams();
  
  console.log("Tool name : ", toolName);
  console.log("Tool category : ", category);
  return (
    <div>
      <PageTitle size="small">{TOOLS[category][toolName]["title"]}</PageTitle>
      {TOOLS[category][toolName]["component"]}
      {/* Markdown component to display description */}
      <div>
        <ReactMarkdown children={tool1} />
      </div>
    </div>
  );
};

export default ToolWrapper;
