import { useState } from "react";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";

const Text2Binary = () => {

    const [textInput, setTextInput] = useState("");
    const [binaryInput, setBinaryInput] = useState("");
    const [binaryOutput, setBinaryOutput] = useState("");
    const [textOutput, setTextOutput] = useState("");
  
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
    return ( 
        <div className="main">
      <h2>Text 2 Binary</h2>
      <div className="input-section">
        <textarea
          name="text"
          id="textarea"
          cols="90"
          rows="15"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></textarea>
      </div>
      <button onClick={convertToBinary}>Convert to Binary</button>
      <div className="output-section">
        <textarea
          name="text"
          id="opTextarea"
          cols="90"
          rows="15"
          defaultValue={binaryOutput}
        ></textarea>
        <button
          id="copyBtn"
          onClick={() => {
            copyToClipboard(binaryOutput);
          }}
        >
          Copy
        </button>
      </div>
      <h2>Binary to Text</h2>
      <div className="input-section2">
        <textarea
          name="text"
          id="textarea2"
          cols="90"
          rows="15"
          value={binaryInput}
          onChange={(e) => {
            setBinaryInput(e.target.value);
          }}
        ></textarea>
      </div>
      <button onClick={convertToText}>Convert to Text</button>
      <div className="output-section2">
        <textarea
          name="text"
          id="opTextarea2"
          cols="90"
          rows="15"
          defaultValue={textOutput}
        ></textarea>
        <button
          id="copyBtn"
          onClick={() => {
            copyToClipboard(textOutput);
          }}
        >
          Copy
        </button>
      </div>
    </div>
     );
}
 
export default Text2Binary;