import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 50px;
  background-color: ${({ theme }) => theme.shade};
`;

const Navbar = (props) => {
  return (
    <NavDiv>
      ToolPool
      <button onClick={props.toggleTheme}>Toggle theme</button>
    </NavDiv>
  );
};

export default Navbar;
