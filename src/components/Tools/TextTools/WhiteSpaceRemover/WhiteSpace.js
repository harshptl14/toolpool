import React, { useState, useEffect } from "react";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import styled from "styled-components";
import ButtonDiv from "../../ButtonDiv";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const WhiteSpace = () => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {}, [inputText]);

  // Function to remove white space
  const removeMulWhiteSpace = () => {
    return inputText.replace(/\s+/g, " ");
  };

  const filter = [
    {
      key: "1",
      title: "Remove white space",
      method: () => setInputText(removeMulWhiteSpace()),
    },
  ];

  const finalButtons = [
    {
      key: "7",
      title: "Reset",
      method: () => setInputText(""),
      type: "normal",
    },
    {
      key: "8",
      title: "Copy",
      method: () => copyToClipboard(inputText),
      type: "submit",
    },
  ];

  return (
    <div>
      <StyledTextArea
        name="text"
        id="textarea"
        cols="90"
        rows="15"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></StyledTextArea>
      <ButtonDiv filter={filter} finalButtons={finalButtons} />
    </div>
  );
};

export default WhiteSpace;
