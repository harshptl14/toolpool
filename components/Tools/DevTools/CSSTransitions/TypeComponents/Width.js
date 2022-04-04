import { useContext } from "react";
import Slider from "../../../../Common/SliderInput";
import { TransitionContext } from "../context/TransitionContext";

const WidthInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);
  return (
    <>
      <Slider
        label="Initial Width"
        min={10}
        max={300}
        step={1}
        defaultValue={100}
        onChange={(e) => {
          const mainCode = `width: ${e.target.value}px;`;
          dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
        }}
      />
      <Slider
        label="Pseudo Width"
        min={10}
        max={300}
        step={1}
        defaultValue={150}
        onChange={(e) => {
          const pseudoCode = `width: ${e.target.value}px;`;
          dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
        }}
      />
    </>
  );
};

export default WidthInputs;

