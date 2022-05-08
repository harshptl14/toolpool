import { useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";
import Slider from "../../../../Common/SliderInput";

const OpacityInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);

  const onInitOpacityChangeHandler = (e) => {
    const mainCode = `
    opacity: ${e.target.value};
    `;
    dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
  };

  const onPseudoOpacityChangeHandler = (e) => {
    const pseudoCode = `
    opacity: ${e.target.value};
    `;
    dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
  };

  return (
    <>
      <Slider
        label="Initial Opacity"
        min={0}
        max={1}
        step={0.01}
        defaultValue={0.5}
        onChange={onInitOpacityChangeHandler}
      />
      <Slider
        label="Pseudo Opacity"
        min={0}
        max={1}
        step={0.01}
        defaultValue={1}
        onChange={onPseudoOpacityChangeHandler}
      />
    </>
  );
};

export default OpacityInputs;
