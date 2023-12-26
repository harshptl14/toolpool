import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledTitleDiv = styled.div`
  ${({ theme }) => theme.mixins.flexStart};
  gap: 15px;
  font-size: var(--fz-xxxl);
  line-height: "25px";
  margin-bottom: 1em;
`;

const StyledIcon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0.8rem;
  svg,
  img {
    height: auto;
    width: 1.7rem;
    transition: all 0.3s linear;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: ${(props) =>
    props.size === "small" ? "var(--fz-xxxl)" : "var(--fz-xxxl)"};
  line-height: ${(props) => (props.size === "small" ? "25px" : "25px")};

  @media (min-width: 600px) {
    font-size: ${(props) =>
      props.size === "small" ? "var(--fz-heading)" : "var(--fz-headingxlM)"};
    line-height: ${(props) => (props.size === "small" ? "53px" : "53px")};
  }
`;

const TitleDiv = ({ imageSrc, altText, titleText, fontSize }) => {
  return (
    <StyledTitleDiv>
      {imageSrc && (
        <StyledIcon>
          <Image height={30} width={30} src={imageSrc} alt={altText} />
        </StyledIcon>
      )}
      <StyledTitle id="title" size={fontSize}>
        {titleText}
      </StyledTitle>
    </StyledTitleDiv>
  );
};

export default TitleDiv;
