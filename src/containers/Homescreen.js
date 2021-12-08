import React from "react";
import config from "../static/utils/config";
import styled from "styled-components";
import Card from "../components/Card";
import ToolsScreen from "./ToolsScreen";
import TitleDiv from "../components/TitleDiv";
import LandingPagediv from "../components/HoomScreen/LandingPagediv";
import useScroll from "../hooks/useScroll";

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: center;
  width: 98%;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};
  }
`;

const Homescreen = () => {
  const [executeScroll, elRef] = useScroll();

  return (
    <>
      <LandingPagediv executeScroll={executeScroll} />
      <TitleDiv>Featured Tools</TitleDiv>
      <Content>
        {config.featuredTools.map((obj) => {
          return <Card title={obj.title} />;
        })}
      </Content>
      <ToolsScreen executeScroll={executeScroll} elRef={elRef} />
    </>
  );
};

export default Homescreen;
