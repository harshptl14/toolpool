/* eslint-disable no-unused-vars */
import { URLLIST, TOOLS } from "../../../static/utils/toolComponentsList";
import { useContext, useEffect } from "react";
import { ToastContext } from "../../../components/Toast/toastcontext";
// import PageTitle from "../../../components/PageTitle";
import Toast from "../../../components/Toast/toast";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const paths = URLLIST.map((obj) => {
    return {
      params: { category: obj.split("/")[0], toolname: obj.split("/")[1] },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const toolname = context.params.toolname;
  const category = context.params.category;

  // console.log(toolname);
  // console.log(category);

  return {
    props: {
      category: category,
      toolname: toolname,
    },
  };
};

const StyledDesc = styled.div`
  background: ${({ theme }) => theme.hover};
  margin-top: 50px;
  padding: 20px;
  color: ${({ theme }) => theme.descfont};

  @media (min-width: 600px) {
    padding: 20px 50px;
  }

  pre {
    overflow: auto;
  }
`;

const StyledTitleDiv = styled.div`
  ${({ theme }) => theme.mixins.flexStart};
  gap: 15px;
  font-size: "var(--fz-xxxl)";
  line-height: "25px";
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0.8rem;
  svg,
  img {
    height: auto;
    width: 1.7rem;
    transition: all 0.3s linear;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: ${(props) =>
    props.size === "small" ? "var(--fz-xxxl)" : "var(--fz-xxxl)"};
  line-height: ${(props) => (props.size === "small" ? "25px" : "25px")};

  @media (min-width: 600px) {
    font-size: ${(props) =>
      props.size === "small" ? "var(--fz-heading)" : "var(--fz-headingxl)"};
    line-height: ${(props) => (props.size === "small" ? "53px" : "53px")};
  }
`;

const LoadingWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
`;

const ToolWrapper = ({ category, toolname }) => {
  const [state, dispatch] = useContext(ToastContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    img: ({ alt, src, title }) => (
      <img alt={alt} src={src} title={title} style={{ maxWidth: 250 }} />
    ),
  };

  const router = useRouter();

  if (router.isFallback) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  return (
    <div>
      <Head>
        <title>{TOOLS[category][toolname]["title"]}</title>
        <meta
          name="description"
          content={TOOLS[category][toolname]["description"]}
        />
        <meta
          property="og:title"
          content={TOOLS[category][toolname]["title"]}
        />
        <meta
          property="og:description"
          content={TOOLS[category][toolname]["description"]}
        />
        <meta
          property="og:image"
          content={TOOLS[category][toolname]["poster"]}
        />
        <meta
          property="og:image:secure_url"
          content={TOOLS[category][toolname]["poster"]}
        />
        <meta
          property="og:url"
          content={`https://toolpool.cool/tools/${category}/${toolname}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={TOOLS[category][toolname]["title"]}
        />
        <meta
          name="twitter:description"
          content={TOOLS[category][toolname]["description"]}
        />
        <meta
          name="twitter:image"
          content={TOOLS[category][toolname]["poster"]}
        />
      </Head>
      <StyledTitleDiv>
        <Icon>
          <Image
            height={30}
            width={30}
            src={TOOLS[category][toolname]["icon"]}
            alt={TOOLS[category][toolname]["title"]}
          />
        </Icon>
        <StyledTitle id="title" size="small">
          {TOOLS[category][toolname]["title"]}
        </StyledTitle>
      </StyledTitleDiv>

      <br></br>
      {TOOLS[category][toolname]["component"]}
      {/* Error Toast */}
      {state.show && <Toast></Toast>}
      {/* Markdown component to display description */}
      <StyledDesc>
        <ReactMarkdown
          children={TOOLS[category][toolname]["readme"] ?? ``}
          skipHtml={false}
          components={renderers}
        />
      </StyledDesc>
    </div>
  );
};

export default ToolWrapper;
