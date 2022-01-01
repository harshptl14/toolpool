import { useParams } from "react-router-dom";
import { TOOLS } from "../../static/utils/toolComponentsList";
import ReactMarkdown from "react-markdown";
import PageTitle from "../PageTitle";
import { useEffect } from "react";
import { LoremReadme } from "../../static/toolDescriptions/toolReadmes";

// A wrapper component to display various tools dynamically according to their ID (from URL)
const ToolWrapper = () => {
  //fetch toolId from URL params
  const { category, toolName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("Tool name : ", toolName);
  console.log("Tool category : ", category);
  return (
    <div>
      <PageTitle id="title" size="small">
        {TOOLS[category][toolName]["title"]}
      </PageTitle>
      <br></br>
      {TOOLS[category][toolName]["component"]}
      {/* Markdown component to display description */}
      <div>
        <ReactMarkdown children={TOOLS[category][toolName]["readme"] ?? ``} />
      </div>
    </div>
  );
};

export default ToolWrapper;
