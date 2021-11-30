import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  padding: 0 3rem;
  height: var(--nav-height);
  background-color: ${({ theme }) => !theme.text};
  ${({ theme }) => theme.mixins.flexBetween};
`;

const ButtonToogle = styled.button`
  ${({ theme }) => theme.mixins.button};
  padding: 1rem 1rem;
`;


const Navbar = (props) => {
  return (
    <NavDiv>
      ToolPool
      <ButtonToogle onClick={props.toggleTheme}>Toggle theme</ButtonToogle>
    </NavDiv>
  );
};

export default Navbar;
