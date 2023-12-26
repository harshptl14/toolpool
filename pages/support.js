import React from "react";
import TitleDiv from "../components/Title/TitleDiv";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

const StyledParentCard = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart};
  width: 100%;
  gap: 1em;
  margin-bottom: 1em;

  @media (min-width: 600px) {
    ${({ theme }) => theme.mixins.flexBetween};
  }
`;

const StyledCard = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.card};
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.border};

  .styledImg {
    width: 100%;
    /* padding: 1em; */
  }

  .cardTitle {
    font-weight: 600;
    font-size: var(--fz-heading);
    color: ${(props) => props.color};
  }

  .cardDesc {
    width: 100%;
    margin-bottom: 1.8em;
  }

  :hover,
  :active {
    cursor: pointer;
    outline: 1px dashed ${({ theme }) => theme.color};
  }

  @media (min-width: 600px) {
    /* width: 49%; */
    .cardDesc {
      width: 70%;
      margin-bottom: 1.8em;
    }
  }
`;

const Support = () => {
  const links = {
    github: "https://github.com/harshptl14/toolpool",
    share:
      "http://twitter.com/share?text=Check%20out%20this%20website&url=https://toolpool.cool&hashtags=saas,toolpool",
    kofi: "https://ko-fi.com/arshpatel",
  };

  return (
    <>
      <Head>
        <title>ToolPool - Support</title>
        <meta
          name="Keywords"
          content="support, online tools, free online tools, text tools, image tools, developers tools, social media tools, color tools, lorem ipsum, letter count,
                        space remover, text to binary, binary to text, unique word, upper case, lower case, image resize, crop image"
        />
        <meta
          name="description"
          content="Support the project by donating, contributing or by sharing!"
        />
        <meta property="og:title" content="ToolPool - Support" />
        <meta
          property="og:description"
          content="Support the project by donating, contributing or by sharing!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://toolpool.cool/assets/posters/posterSupport.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://toolpool.cool/assets/posters/posterSupport.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://toolpool.cool/support" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="ToolPool - Support" />
        <meta
          name="twitter:description"
          content="Support the project by donating, contributing or by sharing!"
        />
        <meta
          name="twitter:image"
          content="https://toolpool.cool/assets/posterSupport.jpg"
        />
      </Head>

      <TitleDiv
        titleText="Support the project"
        imageSrc=""
        altText=""
        fontSize="big"
      />
      <StyledParentCard>
        <StyledCard
          color="#515197"
          onClick={() => window.open(links.kofi, "_blank")}
        >
          <div className="cardTitle">Donation</div>
          <div className="cardDesc">
            Not required or expected, but always appreciated!
          </div>
          <div className="styledImg">
            <Image src="/assets/kofi.png" height={300} width={600} />
          </div>
        </StyledCard>
        <StyledCard
          color="#51DB46"
          onClick={() => window.open(links.github, "_blank")}
        >
          <div className="cardTitle">Contribute</div>
          <div className="cardDesc">
            Join other developers to make this site more amazing!!
          </div>
          <div className="styledImg">
            <Image src="/assets/github.png" height={300} width={600} />
          </div>
        </StyledCard>
      </StyledParentCard>
      <StyledCard
        color="#53C0D1"
        onClick={() => window.open(links.share, "_blank")}
      >
        <div className="cardTitle">Share</div>
        <div className="cardDesc">
          Share across social media or with a friend who needs it{" "}
        </div>
        <div className="styledImg">
          <Image src="/assets/share.png" height={200} width={1400} />
        </div>
      </StyledCard>
    </>
  );
};

export default Support;
