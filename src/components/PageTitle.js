import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  ${({ theme }) => theme.mixins.pageTitle};
  line-height: 53px;
`;

const PageTitle = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default PageTitle;
