import React, { useState } from "react";
import styled from "styled-components";
import {
  CategoryItem,
  CategoryItemMobile,
} from "../components/ToolScreen/CategoryItem";
import ToolCard from "../components/ToolScreen/ToolCard";

const OuterDiv = styled.div`
  display: flex;
  /* justify-content: space-around; */
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
    width: 35%;
    margin-bottom: 0px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  //MediaQuery
  @media (min-width: 600px) {
    width: 60%;
    justify-content: space-between;
  }
`;

const TitleDiv = styled.div`
 ${({ theme }) => theme.mixins.titleDiv}

 @media (min-width: 600px){
   margin-top:  80px;
 }
`;

const ToolsScreen = ({ executeScroll, elRef}) => {
  const [menuItem, setMenuItem] = useState("Text Tools");

  return (
    <>
      <TitleDiv ref={elRef}>All Tools</TitleDiv>
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
          menuItem={menuItem}
          setMenuItem={setMenuItem}
        />
        <StyledWrapper>
          <ToolCard className="placeHolder">Hi</ToolCard>
          <ToolCard className="placeHolder">Hi</ToolCard>
          <ToolCard className="placeHolder">Hi</ToolCard>
          <ToolCard className="placeHolder">Hi</ToolCard>
          <ToolCard className="placeHolder">Hi</ToolCard>
          <ToolCard className="placeHolder">Hi</ToolCard>
        </StyledWrapper>
      </OuterDiv>
    </>
  );
};

export default ToolsScreen;
