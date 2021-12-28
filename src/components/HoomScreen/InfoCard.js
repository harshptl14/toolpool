import React from "react";
import styled,{useTheme} from "styled-components";
// import { ReactComponent as InfoMobile } from "../../static/svg/infoNew.svg";

const StyledInfoCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  color: var(--font-light);
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 30px;
  margin: 50px auto;
  font-size: var(--fz-md);

  @media (min-width: 800px) {
    ${({ theme }) => theme.mixins.flexBetween};
    margin: 60px auto;
    padding: 40px;
    font-size: var(--fz-sm);
  }

  @media (min-width: 1000px) {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 50px;
    margin: 80px auto;
    font-size: var(--fz-md);
  }
`;

const StyledContent = styled.div`
  .heading {
    color: ${({ theme }) => theme.color};
    font-size: var(--fz-xxxl);
    margin: 10px 0 20px 0;
    font-weight: 500;
  }

  @media (min-width: 800px) {
    height: auto;
    width: 60%;
    .heading {
      font-size: var(--fz-xxxl);
    }
  }

  @media (min-width: 1000px) {
    height: auto;
    .heading {
      font-size: var(--fz-heading);
    }
  }
`;

const StyledSvg = styled.div`
  svg, img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 40%;
  }

  @media (min-width: 1000px) {
  }
`;

const InfoCard = () => {
      const theme = useTheme();

  return (
    <StyledInfoCard bg={theme.wave}>
      <StyledSvg>
        <img src={theme.info} alt="text here" />

        {/* <InfoMobile /> */}
        {/* {theme.info} */}
      </StyledSvg>
      <StyledContent>
        <div className="heading">Pool with tons of Tools</div>
        Tool Pool is a one-stop solution for your day-to-day tasks which takes
        up a lot of time unnecessarily. In just a few clicks you can get such
        tasks done which distracts you from your main work. Take it as your
        helper tool.<br></br>
        <br></br> All the tools are designed and developed with a very clean and
        elegant User Interface to provide the best user experience. <br></br>
        <br></br>We have a lot of tools in the pool but it is not done yet. A
        lot more are on their way to come. Stay tuned and keep using and sharing
        Tool Pool.
      </StyledContent>
    </StyledInfoCard>
  );
};

export default InfoCard;
