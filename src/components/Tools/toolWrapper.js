import { useParams } from "react-router-dom";
import { TOOLS } from "../../static/utils/toolComponentsList";
import ReactMarkdown from "react-markdown";
import PageTitle from "../PageTitle";
import { useEffect } from "react";
import styled from "styled-components";
import { LoremReadme } from "../../static/toolDescriptions/toolReadmes";
import Toast from "../Toast/toast";
import { ToastContext } from "../Toast/toastcontext";
import { useContext } from "react";


const StyledTitleDiv = styled.div`
  ${({ theme }) => theme.mixins.flexStart};
  gap: 15px;
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0.8rem;
  svg,
  img {
    height: auto;
    width: 1.7rem;
    transition: all 0.3s linear;
  }
`;



// A wrapper component to display various tools dynamically according to their ID (from URL)
const ToolWrapper = () => {
  const [state, dispatch] = useContext(ToastContext);

  //fetch toolId from URL params
  const { category, toolName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("Tool name : ", toolName);
  console.log("Tool category : ", category);
  return (
    <div>
      <StyledTitleDiv>
        <Icon>
          <img
            src={TOOLS[category][toolName]["icon"]}
            alt={TOOLS[category][toolName]["title"]}
          />
        </Icon>
        <PageTitle id="title" size="small">
          {TOOLS[category][toolName]["title"]}
        </PageTitle>
      </StyledTitleDiv>

      <br></br>
      {TOOLS[category][toolName]["component"]}
      {/* Markdown component to display description */}
      {state.show && <Toast></Toast>}
      <div style={{ marginTop: "50px" }}>
        <ReactMarkdown children={TOOLS[category][toolName]["readme"] ?? ``} />
      </div>
      </div>
  );
};

export default ToolWrapper;
