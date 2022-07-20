import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
    ${({ theme }) => theme.mixins.iconBackground};
    padding: ${(props) => props.padding || "0.8rem"};
    svg,
    img {
        height: auto;
        width: 1.7rem;
        transition: all 0.3s linear;
    }
`;

const IconStyle = ({children, padding}) => {
    return (
        <StyledIcon padding={padding}>
            {children}
        </StyledIcon>
    )
}

export default IconStyle