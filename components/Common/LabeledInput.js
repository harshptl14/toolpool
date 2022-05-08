import styled from "styled-components";

// Custom input component with label above the input field
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;

  span {
    display: block;
    margin-bottom: 0.4em;
    font-size: var(--fz-xs);
  }

  select {
    width: 100%;
    display: block;
    border: 1px solid ${({ theme }) => theme.color};
    padding: 0.5em 1em;
    border-radius: 5px;
  }

  input {
    width: 100%;
    display: block;
    border: 1px solid ${({ theme }) => theme.color};
    padding: 0.5em 1em;
    border-radius: 5px;
  }
`;

const LabeledInput = (props) => {
  return (
    <Wrapper>
      <span>{props.label}</span>
      {props.children}
    </Wrapper>
  );
};

export default LabeledInput;
