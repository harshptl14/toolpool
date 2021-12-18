import { useState, useEffect } from "react";
import "../../../../static/helpers/string_extensions";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import styled from "styled-components";

const StyledButton = styled.button`
  --submit-color: ${({ theme }) => theme.shade};
  ${({ theme }) => theme.mixins.smallButton};
  background-color: ${(props) =>
    props.type === "submit" ? "var(--submit-color)" : "transparent"};
  margin-right: 20px;
  margin-bottom: 20px;

  :hover {
    background-color: ${(props) =>
      props.type === "submit" ? "transparent" : "var(--submit-color)"};
  }

  @media (min-width: 800px) {
    margin-right: ${(props) => (props.rightpadd === "true" ? "20px" : "0px")};
    margin-left: ${(props) => (props.rightpadd === "true" ? "0px" : "20px")};
  }
`;

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

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (min-width: 800px) {
    justify-content: space-between;
  }
`;

const ChangeButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    width: 70%;
    justify-content: flex-start;
  }
`;
const OutputButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (min-width: 800px) {
    width: 30%;
    justify-content: flex-end;
    margin-top: 0px;
    height: min-content;
  }
`;

const CaseConverter = () => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {}, [inputText]);

  const caseConverterData = [
    {
      key: "1",
      title: "UpperCase",
      method: inputText.toUpperCase(),
    },
    {
      key: "2",
      title: "LowerCase",
      method: inputText.toLowerCase(),
    },
    {
      key: "3",
      title: "MixedCase",
      method: inputText.toMixedCase(),
    },
    {
      key: "4",
      title: "InverseCase",
      method: inputText.toInverseCase(),
    },
    {
      key: "5",
      title: "SentenceCase",
      method: inputText.toSentenceCase(),
    },
    {
      key: "6",
      title: "TitleCase",
      method: inputText.toTitleCase(),
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
      <ButtonDiv>
        <ChangeButtonDiv>
          {caseConverterData.map(({ title, method, key }) => {
            return (
              <StyledButton
                type="normal"
                rightpadd="true"
                key={key}
                onClick={(e) => {
                  setInputText(method);
                }}
              >
                {title}
              </StyledButton>
            );
          })}
        </ChangeButtonDiv>

        <OutputButtonDiv>
          <StyledButton
            type="normal"
            rightpadd="false"
            onClick={(e) => {
              setInputText("");
            }}
          >
            Reset
          </StyledButton>
          <StyledButton
            type="submit"
            rightpadd="false"
            onClick={(e) => {
              copyToClipboard(inputText);
            }}
          >
            Copy
          </StyledButton>
        </OutputButtonDiv>
      </ButtonDiv>
    </div>
  );
};

export default CaseConverter;
