import React from "react";
import styled, { useTheme } from "styled-components";
import { FavoriteBorder } from "@styled-icons/material";
import config from "../static/utils/config";
import Link from "next/link";
import Image from "next/image";

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexColumn};
  flex-shrink: 0;
  padding: 40px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.descfont};

  @media (min-width: 900px) {
    ${({ theme }) => theme.mixins.flexBetween};
    margin: 0 auto;
    padding: 30px 70px;
  }

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

  ul {
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFooter>
      <StyledLogo>
        <Link href="/">
          <a aria-label="home">
            <Image src={theme.logo} height="50" width="80" alt="Toolpool" />
          </a>
        </Link>
      </StyledLogo>
      <StyledLinks>
        <ul>
          {config.footerLinks &&
            config.footerLinks.map(({ url, name, included }, i) => (
              <li key={i}>
                {included ? (
                  <Link href={url}>{name}</Link>
                ) : (
                  <a href={url} target="_blank">
                    {name}
                  </a>
                )}
              </li>
            ))}
        </ul>
      </StyledLinks>
      <StyledMadewith>
        Made with <FavoriteBorder width="20px" /> on Earth
      </StyledMadewith>
    </StyledFooter>
  );
};

export default Footer;
