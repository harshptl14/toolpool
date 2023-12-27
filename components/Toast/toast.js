import styled from "styled-components";
import { createPortal } from "react-dom";
import { useContext, useEffect } from "react";
import { ToastContext } from "./toastcontext";
import ClientOnlyPortal from "./ClientOnlyPortal";

const ToastDiv = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 5rem;
  z-index: 100;
`;

const ToastContainer = styled.div`
  width: 25vw;
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.color};
  font-size: var(--fz-md);
  background-color: ${({ theme }) => theme.shade};

  @media (max-width: 480px) {
    width: 80vw;
  }
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
    <ClientOnlyPortal selector="#err-toast">
      <ToastDiv>
        <ToastContainer>{state.message}</ToastContainer>
      </ToastDiv>
    </ClientOnlyPortal>
  );
};

export default Toast;
