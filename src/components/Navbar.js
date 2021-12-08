import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { usePrefersReducedMotion, useScrollDirection } from "../hooks/index";
// import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
// import useScrollDirection from "../hooks/useScrollDirection";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

// const NavDiv = styled.div`
//   padding: 0 3rem;
//   height: var(--nav-height);
//   background-color: ${({ theme }) => !theme.text};
//   ${({ theme }) => theme.mixins.flexBetween};
// `;

// const ButtonToogle = styled.button`
//   ${({ theme }) => theme.mixins.button};
//   padding: 1rem 1rem;
// `;

// const Navbar = (props) => {
//   return (
//     <NavDiv>
//       ToolPool
//       <ButtonToogle onClick={props.toggleTheme}>Toggle theme</ButtonToogle>
//     </NavDiv>
//   );
// };

const navLinks = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Experience",
    url: "/#jobs",
  },
  {
    name: "Work",
    url: "/#projects",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: ${({ theme }) => theme.nav};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(8px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: ${({ theme }) => theme.nav};
        /* box-shadow: 0 10px 30px -10px var(--navy-shadow); */
      `};

    ${(props) =>
      props.scrollDirection === "down" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        /* box-shadow: 0 10px 30px -10px var(--navy-shadow); */
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color};
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      /* width: 42px;
      height: 42px; */
      text-decoration: none;
      color: inherit;
      
      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.shade};
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        text-decoration: none;
        color: inherit;

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: ${({ theme }) => theme.color};
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Navbar = ({ isHome, toggleTheme }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loaderDelay = 2000;
  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          ToolPool
        </a>
      ) : (
        <Link to="/" aria-label="home">
          ToolPool
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <button
      className="resume-button"
      onClick={toggleTheme}
      // href="/resume.pdf"
      // target="_blank"
      // rel="noopener noreferrer"
    >
      Resume
    </button>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
              </ol>
              <div>{ResumeLink}</div>
            </StyledLinks>
            {/* <Menu /> */}
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition
                        key={i}
                        classNames={fadeDownClass}
                        timeout={timeout}
                      >
                        <li
                          key={i}
                          style={{
                            transitionDelay: `${isHome ? i * 100 : 0}ms`,
                          }}
                        >
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div
                      style={{
                        transitionDelay: `${
                          isHome ? navLinks.length * 100 : 0
                        }ms`,
                      }}
                    >
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>

            {/* <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu /> 
                </CSSTransition>
              )}
            </TransitionGroup> */}
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
