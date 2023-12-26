import React from "react";
import styled, { useTheme } from "styled-components";
import { ReactComponent as InfoMobile } from "../../public/svg/info.svg";
import Image from "next/image";

const StyledInfoCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  color: ${({ theme }) => theme.descfont};
  background: ${({ theme }) => theme.shadeBackcard};
  /* url(${(props) => props.bg}); */
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 30px;
  margin: 50px auto;
  font-size: var(--fz-md);

  @media (min-width: 800px) {
    ${({ theme }) => theme.mixins.flexAround};
    margin: 60px auto;
    padding: 40px;
    font-size: var(--fz-sm);
  }

  @media (min-width: 1000px) {
    ${({ theme }) => theme.mixins.flexAround};
    padding: 50px;
    margin: 80px auto;
    font-size: var(--fz-lg);
  }
`;

const StyledContent = styled.div`
  .heading {
    color: ${({ theme }) => theme.color};
    font-size: var(--fz-xl);
    margin: 10px 0 20px 0;
    font-weight: 500;
  }

  .desc {
    color: ${({ theme }) => theme.descfont};
    font-size: var(--fz-xs);
    line-height: 1.5;
    font-weight: 400;
  }

  @media (min-width: 800px) {
    height: auto;
    width: 60%;
    .heading {
      font-size: var(--fz-xxl);
    }

    .desc {
      font-size: var(--fz-sm);
    }
  }

  @media (min-width: 1200px) {
    width: 70%;
    height: auto;
    .heading {
      font-size: var(--fz-heading);
    }
    .desc {
      font-size: var(--fz-md);
    }
  }
`;

const StyledSvg = styled.div`
  svg,
  Image {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 40%;

    svg,
    Image {
      width: 100%;
    }
  }

  @media (min-width: 1000px) {
    width: 30%;
    svg,
    Image {
      width: 100%;
    }
  }
`;

const InfoCard = () => {
  const theme = useTheme();

  return (
    <StyledInfoCard bg={theme.wave}>
      <StyledSvg>
        <Image height={200} width={200} src={theme.info} alt="Toolpool Info" />

        {/* <InfoMobile /> */}
        {/* {theme.info} */}
      </StyledSvg>
      <StyledContent>
        <div className="heading">Pool with tons of Tools</div>
        <div className="desc">
          Tool Pool is a one-stop solution for your day-to-day tasks which takes
          up a lot of time unnecessarily. In just a few clicks you can get such
          tasks done which distracts you from your main work. Take it as your
          helper tool.<br></br>
          <br></br> All the tools are designed and developed with a very clean
          and elegant User Interface to provide the best user experience.{" "}
          <br></br>
          <br></br>We have a lot of tools in the pool but it is not done yet. A
          lot more are on their way to come. Stay tuned and keep using and
          sharing Tool Pool.
        </div>
      </StyledContent>
    </StyledInfoCard>
  );
};

export default InfoCard;
