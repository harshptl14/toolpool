import React from 'react'
import { Children } from 'react/cjs/react.production.min';
import styled from 'styled-components';

const OutputStyle = styled.div`
  display: ${(props) => (props.data === "" ? "none" : "block")};
  padding: 30px;
  background: ${({ theme }) => theme.shadeVarient};
  margin: 20px 0;
  transition: var(--easing);
`;

const ButtonStyle = styled.button`
  display: ${(props) => (props.data === "" ? "none" : "block")};
  --submit-color: ${({ theme }) => theme.shadeVarient};
  ${({ theme }) => theme.mixins.smallButton};
  background-color: "var(--submit-color)";
  margin-bottom: 20px;

  :hover {
    background-color: ${(props) =>
      props.type === "submit" ? "transparent" : "var(--submit-color)"};
  }
`;

const StyledOutput = (props) => {
    return <OutputStyle data={props.data}>{props.children}</OutputStyle>;
}

const StyledButton = ({data, func}) => {
    return <ButtonStyle data={data} onClick={() => func}>{Children}</ButtonStyle>;
}

export { StyledOutput, StyledButton }
