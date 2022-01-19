import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  ${({ theme }) => theme.mixins.openCard};
`;

const card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default card;
