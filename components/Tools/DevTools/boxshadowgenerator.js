import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { copyToClipboard } from "../../../static/helpers/helperfunctions";
import ButtonDiv from "../ButtonDiv";

const StyledOuterDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
`;

const StyledUpper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 100%;
  margin-bottom: 30px;
  gap: 40px;

  @media (min-width: 800px) {
    ${({ theme }) => theme.mixins.flexBetween};
    flex-flow: row;
    gap: 80px;
  }
`;

const SlidersSection = styled.div`
  ${({ theme }) => theme.mixins.slider}
  ${({ theme }) => theme.mixins.flexColumnStart}
  width: 100%;

  .sliderTitle {
    font-size: var(--fz-sm);
  }

  .bubble {
    font-size: var(--fz-sm);
    color: ${({ theme }) => theme.color};
  }

  @media (min-width: 800px) {
    flex: 1 0 fill;
    align-items: stretch;
    width: 50%;

    .sliderTitle {
      font-size: var(--fz-md);
    }
  }
`;

const SliderDiv = styled.div`
  width: 100%;
  margin-top: 15px;

  @media (min-width: 800px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ColorSection = styled.div`
  ${({ theme }) => theme.mixins.flexStart}
  width: 100%;
  height: 100%;
  margin-top: 15px;
  flex-wrap: wrap;
  gap: 20px;
  font-family: var(--font-mono);

  label {
    gap: 10px;
    font-size: var(--fz-lg);
    ${({ theme }) => theme.mixins.flexStart}
  }

  input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }

  ${({ theme }) => theme.mixins.checkbox};

  .colordiv {
    ${({ theme }) => theme.mixins.flexStart};
    gap: 10px;
    font-size: var(--fz-sm);
    color: ${({ theme }) => theme.color};
    padding: 13px;
    background-color: ${({ theme }) => theme.shadeBackcard};
  }
  /* justify-content: flex-start; */
`;

const OutputSection = styled(SlidersSection)`
  border: 1.8px dashed ${({ theme }) => theme.shade};
  background-color: ${(props) => props.backgroundColor};
  height: 430px;

  @media (min-width: 800px) {
    width: 60%;
  }

  .box {
    margin: auto;
    width: 50%;
    height: 50%;
    background-color: ${(props) => props.boxColor};
    -webkit-box-shadow: ${(props) => props.inset}
      ${(props) => props.horizontalOffset} ${(props) => props.verticalOffset}
      ${(props) => props.blur} ${(props) => props.spread}
      ${(props) => props.shadowColor};
    -moz-box-shadow: ${(props) => props.inset}
      ${(props) => props.horizontalOffset} ${(props) => props.verticalOffset}
      ${(props) => props.blur} ${(props) => props.spread}
      ${(props) => props.shadowColor};
    box-shadow: ${(props) => props.inset} ${(props) => props.horizontalOffset}
      ${(props) => props.verticalOffset} ${(props) => props.blur}
      ${(props) => props.spread} ${(props) => props.shadowColor};
  }
`;

const CSSGenerationDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: flex-start;
  /* margin-bottom: 20px; */
`;

const CSSProps = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  color: ${({ theme }) => theme.color};
  width: 100%;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 5px;
  font-family: var(--font-mono);
  background-color: ${({ theme }) => theme.shadeBackcard};
  font-size: var(--fz-sm);

  @media (min-width: 800px) {
    font-size: var(--fz-lg);
    padding: 2rem;
    margin-top: 1rem;
  }
`;

var backgroundFlag = false;

const BoxShadowGenerator = () => {
  const theme = useTheme();
  const [horizontalOffset, setHorizontalOffset] = useState("5");
  const [verticalOffset, setVerticalOffset] = useState("5");
  const [blur, setBlur] = useState("10");
  const [spread, setSpread] = useState("5");
  const [backgroundColor, setBackgroundColor] = useState(theme.toolInput);
  const [boxColor, setBoxColor] = useState("#5ec655");
  const [shadowColor, setShadowColor] = useState(theme.shadow);
  const [inset, setinset] = useState(false);

  const filter = [];

  const finalButtons = [
    {
      key: "1",
      title: "Reset",
      method: () => {
        backgroundFlag = false;
        setHorizontalOffset("5");
        setVerticalOffset("5");
        setBlur("10");
        setSpread("5");
        setBoxColor("#5ec655");
        setShadowColor(theme.shadow);
        setinset(false);
        setBackgroundColor(theme.toolInput);
      },
      type: "normal",
    },
    {
      key: "2",
      title: "Copy",
      method: () => {
        let node = document.getElementById("output");
        let text = node.textContent;
        copyToClipboard(text);
      },
      type: "submit",
    },
  ];

  const changeBackground = (e) => {
    setBackgroundColor(e.target.value);
    backgroundFlag = true;
  };

  const changeShadow = (e) => {
    setShadowColor(e.target.value);
    backgroundFlag = true;
  };

  useEffect(
    () => {
      // Runs ONCE after initial rendering
      // and after every rendering ONLY IF `prop` or `state` changes
      setBackgroundColor(theme.toolInput);
      setShadowColor(theme.shadow);
      // console.log("IN");
    },
    backgroundFlag ? [] : [theme]
  );

  return (
    <StyledOuterDiv>
      <StyledUpper>
        <SlidersSection>
          <SliderDiv>
            <div className="sliderTitle">Horizontal Offset</div>
            <input
              type="range"
              className="slider"
              value={horizontalOffset}
              min="-32"
              max="32"
              step="1"
              onInput={(e) => {
                setHorizontalOffset(e.target.value);
              }}
            />

            <div className="bubble">{horizontalOffset + "px"}</div>
          </SliderDiv>
          <SliderDiv>
            <div className="sliderTitle">Vertical Offset</div>
            <input
              type="range"
              className="slider"
              value={verticalOffset}
              min="-32"
              max="32"
              step="1"
              onInput={(e) => {
                setVerticalOffset(e.target.value);
              }}
            />
            <div className="bubble">{verticalOffset + "px"}</div>
          </SliderDiv>
          <SliderDiv>
            <div className="sliderTitle">Blur</div>
            <input
              type="range"
              className="slider"
              value={blur}
              min="0"
              max="32"
              step="1"
              onInput={(e) => {
                setBlur(e.target.value);
              }}
            />
            <div className="bubble">{blur + "px"}</div>
          </SliderDiv>
          <SliderDiv>
            <div className="sliderTitle">Spread</div>
            <input
              type="range"
              className="slider"
              value={spread}
              min="-32"
              max="32"
              step="1"
              onInput={(e) => {
                setSpread(e.target.value);
              }}
            />
            <div className="bubble">{spread + "px"}</div>
          </SliderDiv>
          {/* </SlidersSection> */}
          <ColorSection>
            <div className="colordiv">
              <input
                type="color"
                onInput={(e) => {
                  changeBackground(e);
                }}
                value={backgroundColor}
              />
              Backgroud
            </div>

            <div className="colordiv">
              <input
                type="color"
                onInput={(e) => {
                  setBoxColor(e.target.value);
                }}
                value={boxColor}
              />
              Color
            </div>
            <div className="colordiv">
              <input
                type="color"
                onInput={(e) => {
                  changeShadow(e);
                }}
                value={shadowColor}
              />
              Shadow
            </div>

            <label>
              <input
                type="checkbox"
                value={inset}
                onChange={(e) => {
                  setinset(!inset);
                }}
              />
              Inset
            </label>
          </ColorSection>
        </SlidersSection>

        <OutputSection
          backgroundColor={backgroundColor}
          boxColor={boxColor}
          shadowColor={shadowColor}
          horizontalOffset={horizontalOffset + "px"}
          verticalOffset={verticalOffset + "px"}
          blur={blur + "px"}
          spread={spread + "px"}
          inset={inset ? "inset" : ""}
        >
          <div className="box"></div>
        </OutputSection>
      </StyledUpper>
      <CSSGenerationDiv>
        <CSSProps id="output">
          <span>background-color: {boxColor}; </span>
          <span>
            -webkit-box-shadow: {inset ? "inset" : ""} {horizontalOffset + "px"}{" "}
            {verticalOffset + "px"} {blur + "px"} {spread + "px"} {shadowColor}
          </span>
          <span>
            -moz-box-shadow: {inset ? "inset" : ""} {horizontalOffset + "px"}{" "}
            {verticalOffset + "px"} {blur + "px"} {spread + "px"} {shadowColor}
          </span>
          <span>
            box-shadow: {inset ? "inset" : ""} {horizontalOffset + "px"}{" "}
            {verticalOffset + "px"} {blur + "px"} {spread + "px"} {shadowColor}
          </span>
        </CSSProps>
      </CSSGenerationDiv>

      <ButtonDiv filter={filter} finalButtons={finalButtons} />
    </StyledOuterDiv>
  );
};

export default BoxShadowGenerator;
