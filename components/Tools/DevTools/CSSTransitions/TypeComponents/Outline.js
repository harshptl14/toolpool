import Slider from "../../../../Common/SliderInput";
import { TransitionContext } from "../context/TransitionContext";
import ColorInput from "../../../../Common/ColorPickerInput";
import { useContext, useState } from "react";

const OutlineInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);
  const [initWidth, setInitWidth] = useState(1);
  const [newWidth, setNewWidth] = useState(5);
  const [initColor, setInitColor] = useState("#ff0000");
  const [newColor, setNewColor] = useState("#00ff00");
  return (
    <div>
      <Slider
        label="Initial Width"
        min={1}
        max={30}
        step={1}
        defaultValue={1}
        onChange={(e) => {
          const mainCode = `outline: ${e.target.value}px solid ${initColor};`;
          dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
        }}
      />
      <ColorInput
        label="Initial Color"
        onChange={(e) => {
          setInitColor(e.target.value);
          const mainCode = `outline: ${initWidth}px solid ${e.target.value};`;
          dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
        }}
        value={initColor}
      />
      <Slider
        label="Pseudo Width"
        min={1}
        max={30}
        step={1}
        defaultValue={5}
        onChange={(e) => {
          const pseudoCode = `outline: ${e.target.value}px solid ${newColor};`;
          dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
        }}
      />
      <ColorInput
        label="Psuedo Color"
        onChange={(e) => {
          setNewColor(e.target.value);
          const pseudoCode = `outline: ${newWidth}px solid ${e.target.value};`;
          dispatch({ type: "CHANGEMAINCODE", pseudoCode: pseudoCode });
        }}
        value={newColor}
      />
    </div>
  );
};

export default OutlineInputs;
