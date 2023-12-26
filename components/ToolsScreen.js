import React, { useEffect, useState } from "react";
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
  top: 6.5rem;
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
  width: 100%;
  padding: 1.5rem;
  /* min-height: 280px; */
  margin: 0px auto 40px auto;
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    width: 100%;
    position: relative;
  }

  @media (min-width: 1200px) {
    padding: 1.4rem;
    min-height: 280px;
    width: 45%;
    position: relative;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: var(--fz-md);

  @media (min-width: 600px) {
    font-size: var(--fz-xl);
  }

  @media (min-width: 1000px) {
    font-size: var(--fz-xl);
  }
`;

const StyledDesc = styled.div`
  color: ${({ theme }) => theme.descfont};
  margin-bottom: 20px;
  font-size: var(--fz-xs);

  @media (min-width: 600px) {
    font-size: var(--fz-xs);
  }

  @media (min-width: 1000px) {
    font-size: var(--fz-xs);
  }
`;

const StyledOpen = styled.div`
  ${({ theme }) => theme.mixins.flexBeside}
  font-family: var(--font-mono);
  color: ${({ theme }) => theme.color};
  font-size: var(--fz-xs);

  @media (min-width: 600px) {
    font-size: var(--fz-sm);
  }

  @media (min-width: 1000px) {
    font-size: var(--fz-sm);
  }
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
  padding: 0.7rem;

  @media (min-width: 600px) {
    padding: 1rem;
  }
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
  function saveMenuItem(url) {
    const menuItemHistory = { item: menuItem };
    sessionStorage.setItem(url, JSON.stringify(menuItemHistory));
  }

  function restoreMenuItem(url) {
    const menuItemHistory = JSON.parse(sessionStorage.getItem(url));
    if (menuItemHistory) {
      setMenuItem(menuItemHistory.item);
      // window.scrollTo(scrollPos.x, scrollPos.y);
    }
  }

  useEffect(() => {
    console.log(window.location.hash.substring(1));
    console.log(window.location.pathname);
    window.location.hash
      ? setMenuItem(window.location.hash.substring(1))
      : setMenuItem("textTools");
    window.onhashchange = () => {
      window.location.hash
        ? setMenuItem(window.location.hash.substring(1))
        : setMenuItem("textTools");
    };
    // save menu item if url changes, and restore if we go back
    // console.log("useEffect called", window.location.hash);
  }, [menuItem]);

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
          {config[menuItem]?.length !== 0 ? (
            config[menuItem]?.map(({ title, desc, link, icon, key }) => {
              return (
                <Link href={link} passHref key={key}>
                  <StyledToolCard>
                    <Icon>
                      <Image height={25} width={25} src={icon} alt={title} />
                    </Icon>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledDesc>{desc}</StyledDesc>
                    <StyledOpen>open</StyledOpen>
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
