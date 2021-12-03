import React from "react";
import styled from "styled-components";
import InnerCarousel from "./InnerCarousel";

const H1 = styled("h1")`
  text-align: center;
  margin: 0;
  padding-bottom: 3rem;
`;

const Flex = styled("div")`
  display: flex;
`;
const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;
const Container = styled("div")`
  /* height: 100vh; */
  width: 100%;
  /* background: #ecf0f1; */
`;
const Item = styled("div")`
  color: white;
  font-size: 2rem;
  text-transform: capitalize;
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const colors = [
  "#f1c40f",
  "#f39c12",
  "#e74c3c",
  "#16a085",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#95a5a6",
  "#95a5a6",
  "#95a5a6",
];
const colorsArray = colors.map((color) => (
  <Item
    height={13}
    width={25}
    style={{ background: color, borderRadius: "20px", opacity: 0.9 }}
    key={color}
  >
    {color}
  </Item>
));

const Carousel = () => {
  return (
    <Container>
      {/* <H1>Easy Carousel</H1> */}
      <HorizontalCenter>
        <InnerCarousel>{colorsArray}</InnerCarousel>
      </HorizontalCenter>
    </Container>
  );
};

export default Carousel;
