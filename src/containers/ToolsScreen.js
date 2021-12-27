import React, { useState } from "react";
import styled from "styled-components";
import {
  CategoryItem,
  CategoryItemMobile,
} from "../components/ToolScreen/CategoryItem";
import ToolCard from "../components/ToolScreen/ToolCard";
import config from "../static/utils/config";

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

const ToolsScreen = ({ executeScroll, elRef}) => {
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
          {config[menuItem].map(({ title, desc, link }) => {
            return <ToolCard title={title} desc={desc} link={link} />;
          })}
        </StyledWrapper>
      </OuterDiv>
    </>
  );
};

export default ToolsScreen;
