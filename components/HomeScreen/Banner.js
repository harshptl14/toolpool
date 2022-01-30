import styled from "styled-components";
import { createPortal } from "react-dom";
// import Document from "next/document";

const BannerDiv = styled.div`
  /* position: absolute; */
  z-index: 12;
  font-size: var(--fz-lg);
  width: 100vw;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.background};

  @media (max-width: 480px) {
    font-size: var(--fz-sm);
  }
`;

const Banner = () => {
  return (
    <>
      {/* {createPortal(
        Document.getElementById("banner")
      )} */}
        <BannerDiv>
          Site is under construction 🚧, stay tuned for updates!!
        </BannerDiv>
    </>
  );
};

export default Banner;
