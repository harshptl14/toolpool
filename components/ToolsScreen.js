import React, { useState } from "react";
import styled from "styled-components";
import { CategoryItem, CategoryItemMobile } from "./ToolScreen/CategoryItem";
import config from "../static/utils/config";
import Link from "next/link";
import Image from "next/image";

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: max-content;
  width: 100%;

  //MediaQuery
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCategory = styled.div`
  /* flex: 1 1 auto; */
  width: 100%;
  position: sticky;
  top: 4.4rem;
  margin-bottom: 30px;
  display: none;

  //MediaQuery
  @media (min-width: 600px) {
    display: block;
    width: 30%;
    margin-bottom: 0px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  //MediaQuery
  @media (min-width: 600px) {
    width: 55%;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    width: 65%;
    justify-content: space-between;
  }
`;

const TitleDiv = styled.div`
  ${({ theme }) => theme.mixins.titleDiv}
  margin: 0px 0 20px 0;
  padding-top: 20px;

  @media (min-width: 600px) {
    margin-top: 40px;
    padding: 25px 0;
  }
`;

// styling toolcard
const StyledToolCard = styled.a`
  ${({ theme }) => theme.mixins.card}
  padding: 1.8rem;
  width: 100%;
  margin: 0px auto 40px auto;
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
  svg,
  Image {
    height: auto;
    width: 2.5rem;
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

const NoTools = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.color};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.shade};
`;

const ToolsScreen = ({ executeScroll, elRef }) => {
  const [menuItem, setMenuItem] = useState("textTools");
  return (
    <>
      <TitleDiv ref={elRef}>Tool Categories</TitleDiv>
      <OuterDiv>
        <StyledCategory>
          <CategoryItem
            executeScroll={executeScroll}
            menuItem={menuItem}
            setMenuItem={setMenuItem}
          />
        </StyledCategory>
        <CategoryItemMobile
          executeScroll={executeScroll}
          setMenuItem={setMenuItem}
        />
        <StyledWrapper>
          {config[menuItem].length !== 0 ? (
            config[menuItem].map(({ title, desc, link, icon, key }) => {
              return (
                <Link href={link} passHref key={key}>
                  <StyledToolCard>
                    <Icon>
                      <Image height={50} width={50} src={icon} alt={title} />
                    </Icon>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDesc>{desc}</StyledDesc>
                    <StyledOpen>
                      open
                      {/* <Arrow>
              <ArrowIcon />
            </Arrow> */}
                    </StyledOpen>
                  </StyledToolCard>
                </Link>
              );
            })
          ) : (
            <NoTools>
              <p>Under development...🚧</p>
            </NoTools>
          )}
        </StyledWrapper>
      </OuterDiv>
    </>
  );
};

export default ToolsScreen;
