import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: ${(props) =>
    props.size === "small" ? "var(--fz-heading)" : "var(--fz-headingxl)"};
  line-height: ${(props) => (props.size === "small" ? "53px" : "53px")};
`;

const PageTitle = (props) => {
  return <StyledTitle size={props.size}>{props.children}</StyledTitle>;
};

export default PageTitle;
