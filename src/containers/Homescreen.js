import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  margin: 70px auto;
  font-size: var(--fz-headingxl);
  text-align: center;
  max-width: 45%;
  font-weight: 700;
  line-height: 60px;
`;

const HomeDesc = styled.div`
  font-size: var(--fz-md);
  font-weight: 400;
  width: 300px;
  margin: 20px auto;
  line-height: 20px;
  color: ${({ theme }) => theme.descFont};
`;

const homescreen = () => {
  return (
    <HomeDiv>
      Website with all tools for your work
      <HomeDesc>
        No need to bookmark tools seperately. It’s a free website with all
        important tools together.
      </HomeDesc>
    </HomeDiv>
  );
};

export default homescreen;
