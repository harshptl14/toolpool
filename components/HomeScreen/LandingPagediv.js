import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-size: var(--fz-heading);
  text-align: center;
  /* width: 80%; */
  font-weight: 700;
  line-height: 30px;
  color: ${({ theme }) => theme.color};

  @media (min-width: 600px) {
    font-size: var(--fz-headingm);
    line-height: 40px;
    /* width: 70%; */
  }

  @media (min-width: 1200px) {
    font-size: var(--fz-headingxl);
    line-height: 55px;
    /* width: 60%; */
  }

  .homeDesc {
    width: 80%;
    font-size: var(--fz-xs);
    font-weight: 400;
    margin: 10px auto;
    line-height: 20px;
    color: ${({ theme }) => theme.descfont};

    @media (min-width: 600px) {
      font-size: var(--fz-sm);
      margin: 10px auto;
    }

    @media (min-width: 1200px) {
      margin: 20px auto;
      /* width: 40%; */
    }
  }

  .allToolsButton {
    ${({ theme }) => theme.mixins.smallButton}
  }
`;

const LandingPagediv = ({ executeScroll }) => {
  return (
    <HomeDiv>
      {/* <a
        href="https://www.producthunt.com/posts/toolpool-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-toolpool&#0045;2"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=361987&theme=light"
          alt="ToolPool - One&#0045;Stop&#0032;solution&#0032;with&#0032;all&#0032;tools&#0032;for&#0032;your&#0032;work | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a> */}
      <div>
        One-Stop solution with all <br />
        tools for your work
      </div>
      <div className="homeDesc">
        No need to bookmark tools seperately. It’s a free website with all
        important tools together
      </div>
      <button className="allToolsButton" onClick={() => executeScroll()}>
        Explore all tools
      </button>
    </HomeDiv>
  );
};

export default LandingPagediv;
