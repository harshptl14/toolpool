import { useContext } from "react";
import Slider from "../../../../Common/SliderInput";
import { TransitionContext } from "../context/TransitionContext";

const HeightInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);
  return (
    <>
      <Slider
        label="Initial height"
        min={10}
        max={300}
        step={1}
        defaultValue={100}
        onChange={(e) => {
          const mainCode = `height: ${e.target.value}px;`;
          dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
        }}
      />
      <Slider
        label="New height"
        min={10}
        max={300}
        step={1}
        defaultValue={150}
        onChange={(e) => {
          const pseudoCode = `height: ${e.target.value}px;`;
          dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
        }}
      />
    </>
  );
};

export default HeightInputs;
