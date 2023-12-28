import React from "react";
import config from "../../static/utils/config";
import styled, { css } from "styled-components";
import { useScrollDirection } from "../../hooks";
import Image from "next/image";

const StyledCategoryItems = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  --color-primary: ${({ theme }) => theme.shadeVarient};
  --color-text: ${({ theme }) => theme.color};
  --color-hover: ${({ theme }) => theme.shadeBackcard};
  --color-text-nonactive: ${({ theme }) => theme.text};
  --color-border: ${({ theme }) => theme.border};
  gap: 15px;
  padding: 10px 20px;
  user-select: none !important;
  cursor: pointer;
  width: max-content;
  font-size: var(--fz-sm);

  background-color: ${(props) =>
    props.active === "true" ? "var(--color-primary)" : "transperent"};

  border: 1px solid
    ${(props) =>
      props.active === "true" ? "var(--color-border)" : "transperent"};

  color: ${(props) =>
    props.active === "true"
      ? "var(--color-text)"
      : "var(--color-text-nonactive)"};

  :hover {
    /* color: ${({ theme }) => theme.color}; */
    background-color: ${(props) =>
      props.active === "true" ? "transperent" : "var(--color-hover)"};
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    /* width: 100px; */
    /* font-size: var(--fz-md); */
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0rem;
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: 0;
  svg,
  img {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
  }
`;

const StyledMobileCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  text-align: center;
  position: sticky;
  background-color: ${({ theme }) => theme.shade};
  border: 1.8px dashed ${({ theme }) => theme.color};
  z-index: 1;

  margin: 1em -100%; // for old browsers
  margin: 1em calc(50% - 50vw);

  @media (min-width: 600px) {
    display: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      // !props.scrolledToTop &&
      css`
        /*       height: var(--nav-scroll-height);*/
        top: 4.4rem;
        /* box-shadow: 0 10px 30px -10px var(--navy-shadow); */
      `};

    ${(props) =>
      props.scrollDirection === "down" &&
      // !props.scrolledToTop &&
      css`
        top: 0rem;
        /* box-shadow: 0 10px 30px -10px var(--navy-shadow); */
      `};
  }
`;

const ChangeCat = styled.select`
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;

  ::-ms-expand {
    display: none; /* remove default arrow on ie10 and ie11 */
  }

  :focus {
    outline: 0px dashed ${({ theme }) => theme.color};
  }

  color: ${({ theme }) => theme.color};
  text-align: center;
  width: 100%;
  padding: 15px;
  margin: 3px;
  font-size: var(--fz-md);
`;

const CategoryItem = ({ executeScroll, menuItem, setMenuItem }) => {
  return config.categoryList.map((obj) => {
    return (
      <StyledCategoryItems
        key={obj.id}
        active={menuItem === obj.id ? "true" : "false"}
        onClick={() => {
          setMenuItem(obj.id);
          window.location.hash = obj.id;
          executeScroll();
        }}
      >
        {/* <Icon src={obj.logo} alt="" /> */}
        <Icon>
          <Image width={23} height={23} src={obj.logo} alt={obj.name} />
        </Icon>
        {obj.name}
      </StyledCategoryItems>
    );
  });
};

const CategoryItemMobile = ({ executeScroll, setMenuItem }) => {
  const scrollDirection = useScrollDirection("down");
  return (
    <StyledMobileCategory scrollDirection={scrollDirection}>
      <ChangeCat
        onChange={(e) => {
          setMenuItem(e.target.value);
          window.location.hash = e.target.value;
          executeScroll();
        }}
      >
        {config.categoryList.map((obj) => {
          return (
            <option value={obj.id} key={obj.key}>
              {" "}
              {obj.name}
            </option>
          );
        })}
      </ChangeCat>
    </StyledMobileCategory>
  );
};

export { CategoryItem, CategoryItemMobile };
