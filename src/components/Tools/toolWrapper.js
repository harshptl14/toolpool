import { useParams } from "react-router-dom";
import { TOOLS } from "../../static/utils/toolComponentsList";

// A wrapper component to display various tools dynamically according to their ID (from URL)
const ToolWrapper = () => {
  //fetch toolId from URL params
  const { category, toolName } = useParams();
  console.log("Tool name : ", toolName);
  console.log("Tool category : ", category);
  return TOOLS[category][toolName];
};

export default ToolWrapper;
