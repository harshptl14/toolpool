import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { ReactComponent as CardIcon } from "../static/assets/text-size.svg";

const HomeDiv = styled.div`
  margin: 70px auto;
  font-size: var(--fz-headingxl);
  text-align: center;
  max-width: 45%;
  font-weight: 700;
  line-height: 67px;
`;

const HomeDesc = styled.div`
  font-size: var(--fz-md);
  font-weight: 400;
  width: 300px;
  margin: 20px auto;
  line-height: 20px;
  color: ${({ theme }) => theme.descFont};
`;

const Padding = styled.div`
  margin: 0 100px;
`;

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  margin-bottom: 15px;
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

const TitleDiv = styled.div`
  ${({ theme }) => theme.mixins.titleDiv};
`;

const homescreen = () => {
  return (
    <Padding>
      <HomeDiv>
        Website with all tools for your work
        <HomeDesc>
          No need to bookmark tools seperately. It’s a free website with all
          important tools together
        </HomeDesc>
      </HomeDiv>
      <TitleDiv>Featured Tools</TitleDiv>
      <Content>
        <Card>
          <Icon>
            <CardIcon />
          </Icon>
          Text Tools
        </Card>

        <Card>
          <Icon>
            <CardIcon />
          </Icon>
          Text Tools
        </Card>

        <Card>
          <Icon>
            <CardIcon />
          </Icon>
          Text Tools
        </Card>
      </Content>
    </Padding>
  );
};

export default homescreen;
