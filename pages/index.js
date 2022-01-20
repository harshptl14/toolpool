import styled from "styled-components";
import LandingPagediv from "../components/HoomScreen/LandingPagediv";
import Link from "next/link";
import TitleDiv from "../components/TitleDiv";
// import Card from '../components/Card';
import useScroll from "../hooks/useScroll";
import ToolsScreen from "../components/ToolsScreen";
import InfoCard from "../components/HoomScreen/InfoCard";
import config from "../static/utils/config";
import Image from "next/image";
import Head from "next/head";

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  align-items: start;
  width: 98%;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  @media (min-width: 1000px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};
  }
`;

const CardDiv = styled.a`
  ${({ theme }) => theme.mixins.openCard};
  width: 98%;
  flex-shrink: 1;
  margin: 0 0 30px 0;
  font-weight: 500;
  font-size: var(--fz-xxl);

  /* :focus{
    outline: 1.8px dashed ${({ theme }) => theme.color};
    } */

  @media (min-width: 600px) {
    width: 47%;
  }

  @media (min-width: 1000px) {
    width: 31.5%;
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0.8rem;
  svg,
  Image {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
  }
  margin-bottom: 10px;
`;

export default function Homescreen() {
  const [executeScroll, elRef] = useScroll();

  return (
    <>
      <Head>
        <title>ToolPool - Free Online Helper Tools</title>
        <meta
          name="Keywords"
          content="online tools, free online tools, text tools, image tools, developers tools, social media tools, color tools, lorem ipsum, letter count,
     space remover, text to binary, binary to text, unique word, upper case, lower case, image resize, crop image"
        />
        <meta
          name="description"
          content="Free online tools to get your day-to-day tedious tasks get done in just a few clicks. Lorem-ipsum generator, Image resizer, Case converter and so more."
        />
        <meta
          property="og:title"
          content="ToolPool - Free Online Helper Tools"
        />
        <meta
          property="og:description"
          content="Free online tools to get your day-to-day tedious tasks get done in just a few clicks. Lorem-ipsum generator, Image resizer, Case converter and so more."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://toolpool.ml/assets/posters/posterToolpool.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://toolpool.ml" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image:secure_url"
          content="https://toolpool.ml/assets/posters/posterToolpool.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />

        <meta name="twitter:site" content="https://toolpool.ml" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ToolPool - Free Online Helper Tools"
        />
        <meta
          name="twitter:description"
          content="Free online tools to get your day-to-day tedious tasks get done in just a few clicks. Lorem-ipsum generator, Image resizer, Case converter and so more."
        />
        <meta
          name="twitter:image"
          content="https://toolpool.ml/assets/posters/posterToolpool.jpg"
        />
        <meta name="twitter:creator" content="" />
      </Head>
      <LandingPagediv executeScroll={executeScroll} />
      <TitleDiv>Featured Tools</TitleDiv>
      <Content>
        {config.featuredTools.map((obj) => {
          console.log(obj.link);
          return (
            <Link passHref href={obj.link} key={obj.key}>
              {/* <Card title={obj.title} icon={obj.icon} /> */}
              <CardDiv>
                <Icon>
                  <Image
                    width={30}
                    height={30}
                    src={obj.icon}
                    alt={obj.title}
                  />
                </Icon>
                {obj.title}
              </CardDiv>
            </Link>
          );
        })}
      </Content>
      <ToolsScreen executeScroll={executeScroll} elRef={elRef} />
      <InfoCard />
    </>
  );
}
