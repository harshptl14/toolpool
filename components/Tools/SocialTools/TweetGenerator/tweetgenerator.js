import styled from "styled-components";
import TweetCard from "./tweetcard";

const MainDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  width: 100%;
  height: max-content;
`;

const Tweet = styled.div`
width:100%;
`;

const TweetGenerator = () => {
  return (
    <MainDiv>
      <Tweet>
        <TweetCard />
      </Tweet>
    </MainDiv>
  );
};

export default TweetGenerator;
