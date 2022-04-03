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
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 5px;
  }

  .color-input span {
    font-size: var(--fz-sm);
    margin: 1em;
    font-weight: 500;
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
