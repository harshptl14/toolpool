import React from 'react'
import { usePosition } from '../hooks/usePosition';
import styled from 'styled-components';

const Relative = styled("div")`
  position: relative;
`;

const Flex = styled("div")`
  display: flex;
`;

const CarouserContainer = styled(Relative)`
  overflow: hidden;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;

  margin-left: 1rem;
`;

const CarouselButton = styled.button`
  position: absolute;

  cursor: pointer;

  top: 50%;
  z-index: 1;

  transition: transform 0.1s ease-in-out;

  background: white;
  border-radius: 15px;
  border: none;
  padding: 0.5rem;
`;
const LeftCarouselButton = styled(CarouselButton)`
  left: 0;
  transform: translate(-100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `all` : `hidden`)};
`;

const RightCarouselButton = styled(CarouselButton)`
  right: 0;
  transform: translate(100%, -50%);

  ${CarouserContainer}:hover & {
    transform: translate(0%, -50%);
  }

  visibility: ${({ hasItemsOnRight }) => (hasItemsOnRight ? `all` : `hidden`)};
`;

// export const CarouserContainerInner = styled(Flex)`
//   overflow-x: scroll;
//   scroll-snap-type: x mandatory;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   margin-left: -1rem;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   & > * {
//     scroll-snap-align: center;
//     margin-left: 1rem;
//   }
// `;

 const CarouserContainerInner = styled(Flex)`
   overflow-x: scroll;
   scroll-snap-type: x mandatory;
   -ms-overflow-style: none;
   scrollbar-width: none;

   // offset for children spacing
   margin-left: -1rem;

   &::-webkit-scrollbar {
     display: none;
   }

   ${CarouselItem} & {
     scroll-snap-align: center;
   }
 `;

const ArrowLeft = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </svg>
);

const ArrowRight = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

const InnerCarousel = ({ children }) => {
  const ref = React.useRef();

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);

  return (
    <CarouserContainer role="region" aria-label="Colors carousel">
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton
        hasItemsOnLeft={hasItemsOnLeft}
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </LeftCarouselButton>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
        aria-label="Next slide"
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouserContainer>
  );
};

export default InnerCarousel
