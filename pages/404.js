import styled from "styled-components";
import Link from "next/link";

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  text-align: center;
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color};
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  margin: 0px;
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  width: 90%;
  font-weight: 400;
  font-size: clamp(22px, 1vw, 50px);
  color: ${({ theme }) => theme.descfont};

  @media (min-width: 600px) {
    width: 85%;
    font-size: clamp(29px, 1vw, 50px);
  }
`;
const StyledHomeButton = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <StyledMainContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>
        Oops! You are looking for a tool which is under development or out of
        our bucket list. If you have any new tool suggestion then send us a
        request...
      </StyledSubtitle>
      <Link href="/" passHref>
        <StyledHomeButton>Return Home</StyledHomeButton>
      </Link>
    </StyledMainContainer>
  );
};

export default NotFound;
