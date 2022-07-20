import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ToastContext } from "../Toast/toastcontext";

const StyledButtonDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;

  @media (min-width: 800px) {
    justify-content: space-between;
  }
`;

const ChangeButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    width: 70%;
    justify-content: flex-start;
  }
`;
const OutputButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (min-width: 800px) {
    width: 30%;
    justify-content: flex-end;
    margin-top: 0px;
    height: min-content;
  }
`;

const StyledButton = styled.button`
  --submit-color: ${({ theme }) => theme.shade};
  ${({ theme }) => theme.mixins.smallButton};
  background-color: ${(props) =>
    props.type === "submit" ? "var(--submit-color)" : "transparent"};
  margin-right: 20px;
  margin-bottom: 20px;

  :hover {
    background-color: ${(props) =>
      props.type === "submit" ? "transparent" : "var(--submit-color)"};
  }

  @media (min-width: 800px) {
    margin-right: ${(props) => (props.rightpadd === "true" ? "20px" : "0px")};
    margin-left: ${(props) => (props.rightpadd === "true" ? "0px" : "20px")};
  }
`;

const ButtonDiv = ({ filter, finalButtons, display }) => {
  const [state, dispatch] = useContext(ToastContext);

  return (
    <StyledButtonDiv display={display}>
      <ChangeButtonDiv>
        {filter.map(({ title, method, key }) => {
          return (
            <StyledButton
              type="normal"
              rightpadd="true"
              key={key}
              onClick={(e) => {
                method();
              }}
            >
              {title}
            </StyledButton>
          );
        })}
        {/* {showToast && <Toast>Copied!!</Toast>} */}
      </ChangeButtonDiv>

      <OutputButtonDiv>
        {finalButtons.map(({ title, method, key, type, disabled }) => {
          return (
            <StyledButton
              type={type}
              rightpadd="false"
              key={key}
              disabled={disabled}
              onClick={(e) => {
                if (
                  title === "Copy" ||
                  title === "Copy Words" ||
                  title === "Copy As JSON"
                ) {
                  if (!state.show) {
                    dispatch({
                      type: "SHOW",
                      message: "Copied to Clipboard!!",
                    });
                  }
                }

                method();
              }}
            >
              {title}
            </StyledButton>
          );
        })}
      </OutputButtonDiv>
    </StyledButtonDiv>
  );
};

export default ButtonDiv;
