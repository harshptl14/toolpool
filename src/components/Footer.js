import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@styled-icons/material";
import config from "../static/utils/config";

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexColumn};
  flex-shrink: 0;
  padding: 40px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.descfont};

  @media (min-width: 1000px) {
    ${({ theme }) => theme.mixins.flexBetween};
    margin: 0 auto;
    padding: 30px 150px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  font-size: var(--fz-sm);
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    flex-wrap: wrap;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      color: ${({ theme }) => theme.descfont};

      :hover {
        color: ${({ theme }) => theme.color};
      }

      a {
        padding: 10px;
        text-decoration: none;
        color: inherit;

        &:before {
          /* content: "0" counter(item) "."; */
          margin-right: 5px;
          color: ${({ theme }) => theme.color};
          font-size: var(--fz-xs);
          text-align: right;
        }
      }
    }
  }
`;

const StyledMadewith = styled.div`
  font-size: var(--fz-xs);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo>ToolPoool</StyledLogo>
      <StyledLinks>
        {" "}
        <StyledLinks>
          <ol>
            {config.footerLinks &&
              config.footerLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>
        </StyledLinks>
      </StyledLinks>
      <StyledMadewith>
        Made with <FavoriteBorder width="20px" /> in Earth
      </StyledMadewith>
    </StyledFooter>
  );
};

export default Footer;
