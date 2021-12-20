import { useEffect, useState } from "react";
import { LOREM_WORDS } from "./lorem_words";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import styled from "styled-components";
import ButtonDiv from "../../ButtonDiv";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const StyledInputDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart}

  @media (min-width: 600px) {
    ${({ theme }) => theme.mixins.flexBetween}

    input{
      width: 100%;
    }
  }
`;

//Lorem Ipsum text generator component
const LoremGenerator = () => {
  const [outputText, setOutputText] = useState(""); // variable to store output.
  const [sentencesPerPara, setSentences] = useState(3); // variable to store no. of sentences peer paragraph.
  const [wordsPerSentence, setWords] = useState(5); // variable to store no. of words per sentence.
  const [paragraphs, setParagraphs] = useState(1); // variable to store no. of paragraphs in text.

  useEffect(() => {
    generateText(paragraphs, sentencesPerPara, wordsPerSentence);
  }, [paragraphs, sentencesPerPara, wordsPerSentence]);

  // Function to generate lorem ipsum text according to user requirements
  function generateText(paragraphs, sentencePerPara, wordsPerSentence) {
    var result = "";
    for (var i = 0; i < paragraphs; i++) {
      result += generateParagraph(sentencePerPara, wordsPerSentence);
    }
    setOutputText(result);
  }

  // Function to generate a paragraph with `sentencesPerPara` number of sentence per paragraph
  // and `wordsPerSentence` number of words per sentence.
  function generateParagraph(sentencesPerPara, wordsPerSentence) {
    var result = "";
    for (var i = 0; i < sentencesPerPara; i++) {
      result += generateSentence(wordsPerSentence);
    }
    return result + "\n\n";
  }

  //Function to generate a sentence with `wordsPerSentence` number of words.
  function generateSentence(wordsPerSentence) {
    var result = "";
    for (var i = 0; i < wordsPerSentence; i++) {
      if (i === wordsPerSentence - 1) {
        result += generateWord() + ". ";
      } else if (i === 0) {
        result += generateWord() + " ";
        result = result.charAt(0).toUpperCase() + result.slice(1);
      } else {
        result += generateWord() + " ";
      }
    }
    return result;
  }

  //Function to get a Random word from LOREM_WORDS list
  function generateWord() {
    return LOREM_WORDS.at(Math.floor(Math.random() * LOREM_WORDS.length));
  }

  const filter = [];

  const finalButtons = [
    {
      key: "7",
      title: "Reset",
      method: () => {
        setSentences(3);
        setWords(5);
        setParagraphs(1);
      },
      type: "normal",
    },
    {
      key: "8",
      title: "Copy",
      method: () => copyToClipboard(outputText),
      type: "submit",
    },
  ];

  return (
    <div className="main-div">
      <StyledInputDiv>
        <div className="para-input">
          <label>No. of Paragraphs</label>

          <input
            type="range"
            className="slider"
            value={paragraphs}
            min="1"
            max="50"
            step="1"
            onInput={(e) => {
              setParagraphs(e.target.value);
              generateText(paragraphs, sentencesPerPara, wordsPerSentence);
            }}
          />
          <div className="bubble">{paragraphs}</div>
        </div>
        <div className="sentence-input">
          <label>No. of sentences per Paragraph</label>
          <input
            type="range"
            className="slider"
            value={sentencesPerPara}
            min="3"
            max="25"
            onInput={(e) => {
              setSentences(e.target.value);
              generateText(paragraphs, sentencesPerPara, wordsPerSentence);
            }}
          />
          <div className="bubble">{sentencesPerPara}</div>
        </div>
        <div className="words-input">
          <label>No. of words per sentence</label>

          <input
            type="range"
            className="slider"
            value={wordsPerSentence}
            min="5"
            max="50"
            onInput={(e) => {
              setWords(e.target.value);
              generateText(paragraphs, sentencesPerPara, wordsPerSentence);
            }}
          />
          <div className="bubble">{wordsPerSentence}</div>
        </div>
      </StyledInputDiv>
      <div className="output-section">
        <br />
        <h3>Generated Text</h3>
        <StyledTextArea
          rows={10}
          cols={150}
          className="result"
          value={outputText}
        />
        <ButtonDiv filter={filter} finalButtons={finalButtons}></ButtonDiv>
      </div>
    </div>
  );
};

export default LoremGenerator;
