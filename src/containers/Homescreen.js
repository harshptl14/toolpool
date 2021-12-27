import React from "react";
import config from "../static/utils/config";
import styled from "styled-components";
import Card from "../components/Card";
import ToolsScreen from "./ToolsScreen";
import TitleDiv from "../components/TitleDiv";
import LandingPagediv from "../components/HoomScreen/LandingPagediv";
import useScroll from "../hooks/useScroll";
import InfoCard from "../components/HoomScreen/InfoCard";
import { Link } from "react-router-dom";

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: start;
  width: 98%;
  flex-wrap: wrap;

  .linkDiv {
    width: 98%;
    color: inherit;
    text-decoration: inherit;
    /* :focus{
    outline: 1.8px dashed ${({ theme }) => theme.color};
    } */
  }

  @media (min-width: 600px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};

    .linkDiv {
      width: 47%;
    }
  }

  @media (min-width: 1000px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};

    .linkDiv {
      width: 31.5%;
    }
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
          return (
            <Link to={obj.link} className="linkDiv">
              <Card title={obj.title} icon={obj.icon}/>
            </Link>
          );
        })}
      </Content>
      <ToolsScreen executeScroll={executeScroll} elRef={elRef} />
      <InfoCard />
    </>
  );
};

export default Homescreen;
