import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import AboutIllustration from "../public/svg/about.svg";

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
  font-size: var(--fz-lg);

  .desc {
    color: ${({ theme }) => theme.descfont};
    font-size: var(--fz-sm);
    margin-top: 10px;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    position: sticky;
    top: 7.5rem;
    width: 30%;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;

  a {
    ${({ theme }) => theme.mixins.linkColored}
  }

  @media (min-width: 600px) {
    width: 100%;
    /* margin-top: 50px; */
  }

  @media (min-width: 1000px) {
    width: 65%;
    margin-top: 0px;
  }

  .descHeading {
    ${({ theme }) => theme.mixins.titleDiv}
    font-size: var(--fz-xxxl);
    margin: 0px 0 10px 0;
    color: ${({ theme }) => theme.text};

    @media (min-width: 600px) {
      margin: 0px 0 10px 0;
    }
  }

  .descSmall {
    font-size: var(--fz-sm);
    color: ${({ theme }) => theme.descfont};
    margin-bottom: 30px;
    word-spacing: 2.5px;
  }
`;

const StyledAboutImage = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 600px) {
    display: flex;
    svg {
      height: 320px;
      width: 100%;
    }
  }
`;

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledAboutDiv>
      <Head>
        <title>ToolPool - About Us</title>
        <meta
          name="Keywords"
          content="online tools, free online tools, text tools, image tools, developers tools, social media tools, color tools, lorem ipsum, letter count,
     space remover, text to binary, binary to text, unique word, upper case, lower case, image resize, crop image"
        />
        <meta
          name="description"
          content="Get to know about the developers behind this project"
        />
        <meta property="og:title" content="ToolPool - About Us" />
        <meta
          property="og:description"
          content="Get to know about the developers behind this project"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://toolpool.cool/assets/posters/posterAbout.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://toolpool.cool/assets/posters/posterAbout.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://toolpool.cool/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="ToolPool - About Us" />
        <meta
          name="twitter:description"
          content="Get to know about the developers behind this project"
        />
        <meta
          name="twitter:image"
          content="https://toolpool.cool/assets/posters/posterAbout.jpg"
        />
      </Head>
      <StyledHeading>
        <PageTitle size="big">About</PageTitle>
        <div className="desc">Some hidden things about us!!</div>
      </StyledHeading>
      <StyledContent>
        <StyledAboutImage>
          <Image src={AboutIllustration} alt="about us" />
        </StyledAboutImage>
        {/* <StyledAboutMobile></StyledAboutMobile> */}
        <div className="descHeading">What is ToolPool?</div>
        <div className="descSmall">
          <b>ToolPool</b> is a one-stop tool-pool for day to day needs. Aim to
          build this tool-pool is to reduce the number of tabs open in your
          browser to do some tiny tasks. This tool will also lower your burden
          to find a tool from bookmarks that you saved years ago. Now, you just
          have to bookmark one website and done...
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
          It is not fully developed yet, a lot of productive tools are in the
          womb.
        </div>
        <div className="descHeading"> Who are those two noob devs?</div>
        <div className="descSmall">
          <b>ToolPool</b> is designed and being built by{" "}
          <a
            href="https://arshpatel.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harsh Patel{" "}
          </a>
          and
          <a
            href="https://expy.bio/yashpaneliya"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Yash Paneliya
          </a>
          . Both of them belong to the planet earth. They are not very
          experienced professionals but they are very enthusiastic developers.
          They are doing their best to build a one-stop solution for many
          problems with an elegant and user-friendly interface.
          <br />
          <br />
          To know more about toolpool, checkout our{" "}
          <a
            href="https://10devs.notion.site/Toolpool-Official-f0463623376447608bd80d89c18021c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontpage Of Toolpool
          </a>
        </div>
      </StyledContent>
    </StyledAboutDiv>
  );
};

export default AboutUs;
