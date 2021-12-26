import { useState } from "react";
import {
  copyToClipboard,
  copyAsJSON,
} from "../../../../static/helpers/helperfunctions";
import ButtonDiv from "../../ButtonDiv";
import styled from "styled-components";
import { StyledOutput } from "../../StyledOutput";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const UniqueWordsFinder = () => {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");
  const [outputJSON, setOutputJSON] = useState({});

  //Function to find unique words from text
  function findUniqueWords() {
    if (inputText === "") {
      return "";
    } else {
      var map = new Map();
      var pattern = /\s{1,}/;
      var list = "";
      var json;
      var words = inputText.split(pattern);
      for (var i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) ?? 0) + 1);
      }
      for (let key of map.keys()) {
        list += key + " ";
      }
      //Converting list of words to JSON
      json = Object.fromEntries(map);
      setOutputJSON(json);
      setOutput(list);
    }
  }

  const filterInput = [
    {
      key: "1",
      title: "Generate Unique Words",
      method: () => findUniqueWords(),
    },
  ];

  const finalInput = [
    {
      key: "2",
      title: "Reset",
      method: () => {
        setInputText("");
        setOutput("");
      },
      type: "normal",
    },
  ];

  const filterOutput = [];

  const finalOutput = [
    {
      key: "2",
      title: "Copy Words",
      method: () => copyToClipboard(output),
      type: "submit",
    },
    {
      key: "3",
      title: "Copy As JSON",
      method: () => copyAsJSON(outputJSON),
      type: "submit",
    },
  ];

  return (
    <div className="main">
      <div className="input-section">
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
      <ButtonDiv filter={filterInput} finalButtons={finalInput} />

      <StyledOutput data={output}>{output}</StyledOutput>
      <ButtonDiv
        display={output === "" ? "none" : "flex"}
        filter={filterOutput}
        finalButtons={finalOutput}
      />
    </div>
  );
};

export default UniqueWordsFinder;
