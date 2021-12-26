import React from "react";
import styled from "styled-components";
import { ReactComponent as CardIcon } from "../static/svg/text-size.svg";
import { Link } from "react-router-dom";
const CardDiv = styled.div`
  ${({ theme }) => theme.mixins.openCard};
  width: 99%;
  margin: 0 0 30px 0;

  @media (min-width: 600px) {
    width: 47%;
  }

  @media (min-width: 1000px) {
    width: 31%;
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
    <Link
      to={props.link}
      style={{
        color: "inherit",
        textDecoration: "inherit",
        width: "100%",
      }}
    >
      <CardDiv>
        <Icon>
          <CardIcon />
        </Icon>
        {props.title}
      </CardDiv>
    </Link>
  );
};

export default Card;
