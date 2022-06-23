import React from 'react'
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
${({ theme }) => theme.mixins.flexColumnStart}
gap: 0.5em;
width: 100%;
`;


const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textbox};
  font-size: var(--fz-lg);
`;


const CustomInput = ({name, inputRef, onChangeFun, curValue, defPixel}) => {
    return (
        <StyledInputWrapper>
            {name}
            <StyledInput
                placeholder={name}
                ref={inputRef}
                onChange={onChangeFun}
                value={curValue}
                disabled={defPixel === ""}
                name={name}
            />
        </StyledInputWrapper>
    )
}

export default CustomInput