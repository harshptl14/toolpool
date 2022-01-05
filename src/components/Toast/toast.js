import styled from "styled-components";
import { createPortal } from "react-dom";
import { useContext, useEffect } from "react";
import { ToastContext } from "./toastcontext";

const ToastDiv = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 5rem;
`;

const ToastContainer = styled.div`
  width: 25vw;
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  font-size: var(--fz-md);
  background-color: ${({ theme }) => theme.shade};
`;

const Toast = (props) => {
  const [state, dispatch] = useContext(ToastContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "HIDE",
      });
    }, 2000);
  }, []);

  return (
    <>
      {createPortal(
        <ToastDiv>
          <ToastContainer>{state.message}</ToastContainer>
        </ToastDiv>,
        document.getElementById("err-toast")
      )}
    </>
  );
};

export default Toast;
