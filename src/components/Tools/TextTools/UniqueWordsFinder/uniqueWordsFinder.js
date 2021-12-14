import { useState } from "react";
import {
  copyToClipboard,
  copyAsJSON,
} from "../../../../static/helpers/helperfunctions";

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
        list += key + "\n";
      }
      //Converting list of words to JSON
      json = Object.fromEntries(map);
      setOutputJSON(json);
      setOutput(list);
    }
  }
  return (
    <div className="main">
      <div className="input-section">
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
      <button onClick={findUniqueWords}>Generate Unique words</button>
      <div className="output-section">
        <textarea
          name="text"
          id="opTextarea"
          cols="90"
          rows="15"
          defaultValue={output}
        ></textarea>
        <button
          id="copyBtn"
          onClick={() => {
            copyToClipboard(output);
          }}
        >
          Copy Words
        </button>
        <button
          id="copyJSONBtn"
          onClick={() => {
            copyAsJSON(outputJSON);
          }}
        >
          Copy As JSON
        </button>
      </div>
    </div>
  );
};

export default UniqueWordsFinder;
