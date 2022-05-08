import styled from "styled-components";
import ColorInput from "../../../../Common/ColorPickerInput";
import { useContext, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";

const ColorInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BGColorInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);
  const [initColor, setInitColor] = useState("#ff0000");
  const [newColor, setNewColor] = useState("#00ff00");

  return (
    <ColorInputsWrapper>
      <ColorInput
        label="Initial Background Color"
        onChange={(e) => {
          setInitColor(e.target.value);
          const mainCode = `background-color: ${e.target.value};`;
          dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
        }}
        value={initColor}
      />
      <ColorInput
        label="Pseudo Background Color"
        onChange={(e) => {
          setNewColor(e.target.value);
          const pseudoCode = `background-color: ${e.target.value};`;
          dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
        }}
        value={newColor}
      />
    </ColorInputsWrapper>
  );
};

export default BGColorInputs;
