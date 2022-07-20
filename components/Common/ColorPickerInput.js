import styled from "styled-components";
import LabeledInput from "./LabeledInput";

const ColorInputWrapper = styled.div`
  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 50px;
    height: 35px;
    cursor: pointer;
    background-color: transparent;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border-radius: 3px;
    border: none;
  }

  .color-input {
    display: flex;
    align-items: center;
    width: inherit;
    padding: 0.8em;
    gap: 1em;
    background-color: ${({ theme }) => theme.shadeBackcard};
    /* border: 1.5px solid ${({ theme }) => theme.shadeVarient}; */
    /* border-radius: 5px; */
  }

  .color-input span {
    font-size: var(--fz-md);
    font-weight: 500;
    margin-bottom: 0;
  }
`;

const ColorInput = (props) => {
  return (
    <ColorInputWrapper>
      <LabeledInput label={props.label}>
        <div className="color-input">
          <input type="color" onChange={props.onChange} value={props.value} />
          <span>{props.value}</span>
        </div>
      </LabeledInput>
    </ColorInputWrapper>
  );
};

export default ColorInput;
