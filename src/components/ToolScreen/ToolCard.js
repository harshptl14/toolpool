import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CardIcon } from "../../static/svg/text-size.svg";
import { ReactComponent as ArrowIcon } from "../../static/svg/arrow.svg";

const StyledToolCard = styled.div`
  ${({ theme }) => theme.mixins.card}
  padding: 2.2rem;
  width: 100%;
  margin-bottom: 60px;
  position: static;

  @media (min-width: 600px) {
    width: 100%;
    position: relative;
  }

  @media (min-width: 1000px) {
    width: 45%;
    position: relative;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: var(--fz-xl);
`;

const StyledDesc = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.descfont};
  margin-bottom: 20px;
`;

const StyledOpen = styled.div`
  ${({ theme }) => theme.mixins.flexBeside}
  font-size: 17px;
  color: ${({ theme }) => theme.color};
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

const Arrow = styled.div`
  svg {
    width: 1.4rem;
    transition: all 0.3s linear;
  }
`;

const ToolCard = ({ title, desc, link }) => {
  return (
    <StyledToolCard component={Link} to={link}>
      <Link to={link} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Icon>
          <CardIcon />
        </Icon>
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{desc}</StyledDesc>
        <StyledOpen>
          open
          <Arrow>
            <ArrowIcon />
          </Arrow>
        </StyledOpen>
      </Link>
    </StyledToolCard>
  );
};

export default ToolCard;
