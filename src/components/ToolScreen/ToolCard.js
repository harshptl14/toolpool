import React from 'react'
import styled from 'styled-components';


const StyledToolCard = styled.div`
  ${({ theme }) => theme.mixins.card}
  height: 300px;
  width: 100%;
  margin-bottom: 30px;
  position: static;

  @media (min-width: 600px) {
    width: 47%;
    position: relative;
  }
`;

const ToolCard = (props) => {
    return <StyledToolCard>{props.children}</StyledToolCard>;
}

export default ToolCard
