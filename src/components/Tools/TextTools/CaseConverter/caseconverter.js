import { useState, useEffect, useContext } from "react";
import "../../../../static/helpers/string_extensions";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import styled from "styled-components";
import ButtonDiv from "../../ButtonDiv";
import { ToastContext } from "../../../Toast/toastcontext";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const CaseConverter = () => {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useContext(ToastContext);

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
      method: () => {
        if (inputText === "" || inputText.length === 0) {
          dispatch({
            type: "SHOW",
            message:"Please enter some text!!"
          });
          return;
        }
        copyToClipboard(inputText);
      },
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

export default CaseConverter;
