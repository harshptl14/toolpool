import React from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Icon from "../static/icons/icon";
import { ReactComponent as About } from "../static/svg/about.svg";
import { ReactComponent as AboutMobile } from "../static/svg/aboutMobile.svg";

const StyledAboutDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: flex-start;

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween}
    align-items: flex-start;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .desc {
    color: ${({ theme }) => theme.descfont};
    font-size: var(--fz-lg);
    margin-top: 10px;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    position: sticky;
    top: 4.4rem;
    width: 30%;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width: 1000px) {
    width: 65%;
    margin-top: 0px;
  }

  .descHeading {
    ${({ theme }) => theme.mixins.titleDiv}
    font-size: var(--fz-xxxl);
    margin: 0px 0 10px 0;
    color: ${({ theme }) => theme.color};

    @media (min-width: 600px) {
      margin: 0px 0 10px 0;
    }
  }

  .descSmall {
    font-size: var(--fz-lg);
    color: ${({ theme }) => theme.descfont};
    margin-bottom: 30px;
    word-spacing: 2.5px;
  }
`;

const StyledAboutPC = styled.div`
  display: none;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    display: flex;
    svg {
      height: 320px;
      width: 100%;
    }
  }
`;

const StyledAboutMobile = styled.div`
  display: flex;
  svg {
    height: 400px;
    width: 100%;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const about = () => {
  return (
    <StyledAboutDiv>
      <StyledHeading>
        <PageTitle>About</PageTitle>
        <div className="desc">
          {/* <Icon Twitter/> */}
          Some hidden things about us!!</div>
      </StyledHeading>
      <StyledContent>
        <StyledAboutPC>
          <About />
        </StyledAboutPC>
        <StyledAboutMobile>
          <AboutMobile />
        </StyledAboutMobile>
        <div className="descHeading">What is ToolPool?</div>
        <div className="descSmall">
          ToolPool is a one-stop tool-pool for day to day needs. Aim to build
          this tool-pool is to reduce the number of tabs open in your browser to
          do some tiny tasks. This tool will also lower your burden to find a
          tool from bookmarks that you saved years ago. Now, you just have to
          bookmark one website and done...
        </div>
        <div className="descHeading">Why did we build this?</div>
        <div className="descSmall">
          There are lots of sites that provide various online tools but they are
          spread over the internet with different names and are topic-specific.
          The browser and bookmark manager were full of such tools. Two noob
          developers were bored doing some tiny but tedious tasks. As a result
          of this boredom this product or tool-pool idea popped up in our minds
          and we started building it.
          <br></br>
          <br></br>
          It's not fully developed yet, a lot of productive tools are in the
          womb.
        </div>
        <div className="descHeading"> Who are those two noob devs?</div>
        <div className="descSmall">
          ToolPool is designed and being built by Harsh Patel and Yash Paneliya.
          Both of them belong to the planet earth. They are not very experienced
          professionals but they are very enthusiastic developers. They are
          doing their best to build a one-stop solution for many problems with
          an elegant and user-friendly interface.
        </div>
      </StyledContent>
    </StyledAboutDiv>
  );
};

export default about;
