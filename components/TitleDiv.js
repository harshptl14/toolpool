import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.div`
  ${({ theme }) => theme.mixins.titleDiv};
`;

const TitleDiv = (props) => {
    return <StyledTitle>
        {props.children}
    </StyledTitle>;
}

export default TitleDiv
