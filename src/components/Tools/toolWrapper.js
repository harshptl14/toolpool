import { useParams } from "react-router-dom";
import { useState } from "react";
import { TOOLS } from "../../static/utils/toolComponentsList";
import ReactMarkdown from "react-markdown";
import { tool1 } from "../../static/toolDescriptions/tool1";

// A wrapper component to display various tools dynamically according to their ID (from URL)
const ToolWrapper = () => {
  //fetch toolId from URL params
  const { category, toolName } = useParams();
  
  console.log("Tool name : ", toolName);
  console.log("Tool category : ", category);
  return (
    <div>
      {TOOLS[category][toolName]["component"]}
      {/* Markdown component to display description */}
      <div>
        <ReactMarkdown children={tool1} />
      </div>
    </div>
  );
};

export default ToolWrapper;
