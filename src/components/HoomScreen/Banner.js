import styled from "styled-components";
import { createPortal } from "react-dom";

const BannerDiv = styled.div`
  position: absolute;
  z-index: 12;
  font-size: var(--fz-lg);
  width: 100vw;
  height: 2rem;
  background-color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media (max-width: 480px) {
    font-size: var(--fz-sm);
  }
`;

const Banner = () => {
  return (
    <>
      {createPortal(
        <BannerDiv>
          Site is under construction 🚧, stay tuned for updates!!
        </BannerDiv>,
        document.getElementById("banner")
      )}
    </>
  );
};

export default Banner;
