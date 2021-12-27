import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  ${({ theme }) => theme.mixins.openCard};
  width: 100%;
  flex-shrink: 1;
  margin: 0 0 30px 0;
  font-weight: 500;
  font-size: var(--fz-xxl);

  @media (min-width: 600px) {
    width: 95%;
  }

  @media (min-width: 1000px) {
    width: 95%;
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0.9rem;
  svg,
  img {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
  }
  margin-bottom: 10px;
`;

const Card = (props) => {
  return (
    <CardDiv>
      <Icon>
        <img src={props.icon} alt="error" />
      </Icon>
      {props.title}
    </CardDiv>
  );
};

export default Card;
