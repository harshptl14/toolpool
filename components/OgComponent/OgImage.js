import "./styles.css";
import styled from "styled-components";
import { useRouter } from "next/router";
const OGWrapper = styled.div`
  width: 1200px;
  height: 630px;
  background-color: #ddffe7;
  display: flex;
`;

const PatternImage = styled.div`
  width: 50%;
  height: 630px;
  background-image: url("https://user-images.githubusercontent.com/58077762/158007490-ed841970-c8f8-4c1f-abaf-ba1d671c45b5.png");
`;

const ContentSection = styled.div`
  width: 50%;
  height: 630px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleText = styled.h1`
  color: #2b7537;
  font-size: 80px;
`;

const OGImage = (props) => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url");

  if (!link) return null;

  const linkURL = new URL(link);
  const title = searchParams.get("title");
  
  return (
    <OGWrapper>
      <PatternImage></PatternImage>
      <ContentSection>
        <TitleText>{title}</TitleText>
        <img
          src="https://www.toolpool.ml/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6b3f095d.svg&w=48&q=36"
          alt="logo"
          width="20%"
          style={{ marginBottom: "50px" }}
        />
      </ContentSection>
    </OGWrapper>
  );
};

export default OGImage;
