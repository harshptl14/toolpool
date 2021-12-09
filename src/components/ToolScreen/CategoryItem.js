import React from "react";
import config from "../../static/utils/config";
import styled from "styled-components";

const StyledCategoryItems = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  --color-primary: ${({ theme }) => theme.shade};
  --color-text: ${({ theme }) => theme.color};
  --color-text-nonactive: ${({ theme }) => theme.text};
  gap: 15px;
  padding: 20px 30px;
  user-select: none !important;
  cursor: pointer;
  width: max-content;

  background-color: ${(props) =>
    props.active === "true" ? "var(--color-primary)" : "transperent"};
  color: ${(props) =>
    props.active === "true"
      ? "var(--color-text)"
      : "var(--color-text-nonactive)"};

  :hover {
    color: ${({ theme }) => theme.color};
  }

  @media (min-width: 600px) {
    /* width: 100px; */
  }
`;

const Icon = styled.img`
  ${({ theme }) => theme.mixins.iconBackground};
  padding: 0rem;
  height: 30px;
  width: 30px;
  background-color: transparent;
  svg {
    height: auto;
    width: 1.8rem;
    transition: all 0.3s linear;
  }
`;

const StyledMobileCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 4.4rem;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.shade};
  @media (min-width: 600px) {
    display: none;
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
        key={obj.name}
        active={menuItem === obj.name ? "true" : "false"}
        onClick={() => {
          setMenuItem(obj.name);
          executeScroll();
        }}
      >
        <Icon src={obj.logo} alt="" />
        {obj.name}
      </StyledCategoryItems>
    );
  });
};

const CategoryItemMobile = ({ executeScroll, menuItem, setMenuItem }) => {
  return (
    <StyledMobileCategory>
      <ChangeCat
        onClick={(e) => {
          setMenuItem(e.target.value);
          executeScroll();
        }}
      >
        {config.categoryList.map((obj) => {
          return <option> {obj.name}</option>;
        })}
      </ChangeCat>
    </StyledMobileCategory>
  );
};

export { CategoryItem, CategoryItemMobile };
