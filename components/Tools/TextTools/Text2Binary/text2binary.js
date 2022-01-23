import { useContext, useState } from "react";
import styled from "styled-components";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import ButtonDiv from "../../ButtonDiv";
import useScroll from "../../../../hooks/useScroll";
import { ToastContext } from "../../../Toast/toastcontext";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const StyledOutput = styled.div`
  display: ${(props) => (props.data === "" ? "none" : "block")};
  padding: 30px;
  background: ${({ theme }) => theme.shadeVarient};
  margin: 20px 0;
  transition: var(--easing);
`;

const StyledButton = styled.button`
  display: ${(props) => (props.data === "" ? "none" : "block")};
  --submit-color: ${({ theme }) => theme.shadeVarient};
  ${({ theme }) => theme.mixins.smallButton};
  background-color: "var(--submit-color)";
  margin-bottom: 20px;

  :hover {
    background-color: ${(props) =>
      props.type === "submit" ? "transparent" : "var(--submit-color)"};
  }
`;

const Text2Binary = () => {
  const [textInput, setTextInput] = useState("");
  const [binaryInput, setBinaryInput] = useState("");
  const [binaryOutput, setBinaryOutput] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [executeScrollBinary, elRefBinary] = useScroll();
  const [executeScrollText, elRefText] = useScroll();
  const [state, dispatch] = useContext(ToastContext);

  function convertToBinary() {
    setBinaryOutput(
      textInput
        .split("")
        .map(function (char) {
          return char.charCodeAt(0).toString(2);
        })
        .join(" ")
    );
  }

  function convertToText() {
    setTextOutput(
      binaryInput
        .split(" ")
        .map(function (bin) {
          return String.fromCharCode(parseInt(bin, 2));
        })
        .join("")
    );
  }

  const textToBinaryFilter = [
    {
      key: "1",
      title: "Convert to Binary",
      method: () => {
        if (textInput === "" || textInput.length === 0) {
          dispatch({
            type: "SHOW",
            message: "Please enter some text!!",
          });
          return;
        }
        convertToBinary();
        executeScrollBinary();
      },
    },
  ];

  const textToBinaryOutput = [
    {
      key: "2",
      title: "Reset",
      method: () => {
        setTextInput("");
        setBinaryOutput("");
      },
      type: "normal",
    },
  ];

  const binaryToTextFilter = [
    {
      key: "3",
      title: "Convert to Text",
      method: () => {
        if (binaryInput === "" || binaryInput.length === 0) {
          dispatch({
            type: "SHOW",
            message: "Please enter some text!!",
          });
          return;
        }
        convertToText();
        executeScrollText();
      },
    },
  ];

  const binaryToTextOutput = [
    {
      key: "4",
      title: "Reset",
      method: () => {
        setBinaryInput("");
        setTextOutput("");
      },
      type: "normal",
    },
  ];

  return (
    <div>
      <StyledTextArea
        name="text"
        id="textarea"
        cols="90"
        rows="15"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      ></StyledTextArea>
      <ButtonDiv
        filter={textToBinaryFilter}
        finalButtons={textToBinaryOutput}
      />
      <StyledOutput ref={elRefBinary} data={binaryOutput}>
        {" "}
        {binaryOutput}
      </StyledOutput>
      <StyledButton
        data={binaryOutput}
        onClick={() => {
          copyToClipboard(binaryOutput);
          dispatch({
            type: "SHOW",
            message: "Binary copied!!",
          });
        }}
      >
        Copy
      </StyledButton>
      <h2>Binary to Text</h2>
      <div>
        <StyledTextArea
          name="text"
          id="textarea2"
          cols="90"
          rows="15"
          value={binaryInput}
          onChange={(e) => {
            setBinaryInput(e.target.value);
          }}
        ></StyledTextArea>
      </div>
      <ButtonDiv
        filter={binaryToTextFilter}
        finalButtons={binaryToTextOutput}
      />

      <div>
        <StyledOutput ref={elRefText} data={textOutput}>
          {" "}
          {textOutput}
        </StyledOutput>
        <StyledButton
          data={textOutput}
          onClick={() => {
            copyToClipboard(textOutput);
            dispatch({
              type: "SHOW",
              message: "Text copied!!",
            });
          }}
        >
          Copy
        </StyledButton>
      </div>
    </div>
  );
};

export default Text2Binary;
