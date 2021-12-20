import { useState, useEffect } from "react";
import "../../../../static/helpers/string_extensions";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import styled from "styled-components";
import ButtonDiv from "../../ButtonDiv";

const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.footer};
  border: 2px solid ${({ theme }) => theme.shade};
  font-size: var(--fz-lg);
  padding: 15px 20px;
  margin: 15px 0;
  font-family: "Open Sans", -apple-system, system-ui, sans-serif;
  color: ${({ theme }) => theme.descfont};
  &:focus,
  &:active {
  }
`;

const CaseConverter = () => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {}, [inputText]);

  const filter = [
    {
      key: "1",
      title: "UpperCase",
      method: () => setInputText(inputText.toUpperCase()),
    },
    {
      key: "2",
      title: "LowerCase",
      method: () => setInputText(inputText.toLowerCase()),
    },
    {
      key: "3",
      title: "MixedCase",
      method: () => setInputText(inputText.toMixedCase()),
    },
    {
      key: "4",
      title: "InverseCase",
      method: () => setInputText(inputText.toInverseCase()),
    },
    {
      key: "5",
      title: "SentenceCase",
      method: () => setInputText(inputText.toSentenceCase()),
    },
    {
      key: "6",
      title: "TitleCase",
      method: () => setInputText(inputText.toTitleCase()),
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
    <div className="main">
      <div className="input">
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
      </div>

      <ButtonDiv filter={filter} finalButtons={finalButtons} />
    </div>
  );
};

export default CaseConverter;
