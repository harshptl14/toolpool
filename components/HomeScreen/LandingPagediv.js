import React from 'react'
import styled from 'styled-components';

const HomeDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-size: var(--fz-headingxlM);
  text-align: center;
  width: 100%;
  font-weight: 700;
  line-height: 53px;

  @media (min-width: 600px) {
    font-size: var(--fz-headingxl);
    line-height: 67px;
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 65%;
  }

  .homeDesc {
    width: 70%;
    font-size: var(--fz-sm);
    font-weight: 400;
    margin: 10px auto;
    line-height: 20px;
    color: ${({ theme }) => theme.descfont};

    @media (min-width: 600px) {
      font-size: var(--fz-md);
      margin: 20px auto;
    }

    @media (min-width: 1000px) {
      width: 40%;
    }
  }

  .allToolsButton {
    ${({ theme }) => theme.mixins.smallButton}
  }
`;

const LandingPagediv = ({executeScroll}) => {
    return (
      <HomeDiv>
        One-Stop solution with all tools for your work
        <div className="homeDesc">
          No need to bookmark tools seperately. It’s a free website with all
          important tools together
        </div>
        <button className="allToolsButton" onClick={() => executeScroll()}>
          Explore all tools
        </button>
      </HomeDiv>
    );
}

export default LandingPagediv
