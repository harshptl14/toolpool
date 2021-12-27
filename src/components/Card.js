import React from "react";
import styled from "styled-components";
import { ReactComponent as CardIcon } from "../static/svg/text-size.svg";

const CardDiv = styled.div`
  ${({ theme }) => theme.mixins.openCard};
  width: 100%;
  flex-shrink: 1;
  margin: 0 0 30px 0;

  @media (min-width: 600px) {
    width: 95%;
  }

  @media (min-width: 1000px) {
    width: 95%;
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  svg {
    height: auto;
    width: 1.8rem;
    transition: all 0.3s linear;
  }
  margin-bottom: 10px;
`;

const Card = (props) => {
  return (
    <CardDiv>
      <Icon>
        <CardIcon />
      </Icon>
      {props.title}
    </CardDiv>
  );
};

export default Card;
