import { useState, useEffect } from "react";
import "../../../../static/helpers/string_extensions";

const CaseConverter = () => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {}, [inputText]);

  return (
    <div className="main">
      <div className="input">
        <textarea
          name="text"
          id="textarea"
          cols="90"
          rows="15"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="controllers">
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toUpperCase());
          }}
        >
          Uppercase
        </button>
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toLowerCase());
          }}
        >
          Lowercase
        </button>
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toMixedCase());
          }}
        >
          Mixedcase
        </button>
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toInverseCase());
          }}
        >
          InverseCase
        </button>
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toSentenceCase());
          }}
        >
          SentenceCase
        </button>
        <button
          className="case-btn"
          onClick={(e) => {
            setInputText(inputText.toTitleCase());
          }}
        >
          TitleCase
        </button>
      </div>
    </div>
  );
};

export default CaseConverter;
