import styled from "styled-components";
import { useState } from "react";

const StyledOuterDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 100%;
  height: 100%;
`;

const InputSection = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.flexStart};
`;

const SlidersSection = styled.div`
  width: 30%;
  .sliderTitle {
    font-size: var(--fz-sm);
  }

  .bubble {
    font-size: var(--fz-sm);
  }

  ${({ theme }) => theme.mixins.flexColumn}

  ${({ theme }) => theme.mixins.slider}
`;

const SliderDiv = styled.div`
  width: 100%;
  margin-top: 10px;

  @media (min-width: 800px) {
    width: 30%;
    margin-top: 0px;
  }
`;

const ColorSection = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  width: 30%;
  height: 100%;
  justify-content: flex-start;
`;

const OutputSection = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};

  .box {
    width: 150px;
    height: 150px;
    background-color: ${(props) => props.boxColor};
    -webkit-box-shadow: ${(props) => props.horizontalOffset}
      ${(props) => props.verticalOffset} ${(props) => props.blur}
      ${(props) => props.spread} ${(props) => props.shadowColor};
    -moz-box-shadow: ${(props) => props.horizontalOffset}
      ${(props) => props.verticalOffset} ${(props) => props.blur}
      ${(props) => props.spread} ${(props) => props.shadowColor};
    box-shadow: ${(props) => props.horizontalOffset}
      ${(props) => props.verticalOffset} ${(props) => props.blur}
      ${(props) => props.spread} ${(props) => props.shadowColor};
  }
`;

const CSSGenerationDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: flex-start;
`;

const CSSProps = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  width:100%;
  align-items: flex-start;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.shade};
`;

const BoxShadowGenerator = () => {
  const [horizontalOffset, setHorizontalOffset] = useState("5px");
  const [verticalOffset, setVerticalOffset] = useState("5px");
  const [blur, setBlur] = useState("10px");
  const [spread, setSpread] = useState("5px");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#5ec655");
  const [shadowColor, setShadowColor] = useState("#dddddd");
  const [inset, setinset] = useState(false);

  return (
    <StyledOuterDiv>
      <InputSection>
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
                setHorizontalOffset(e.target.value + "px");
              }}
            />
            <div className="bubble">{horizontalOffset}</div>
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
                setVerticalOffset(e.target.value + "px");
              }}
            />
            <div className="bubble">{verticalOffset}</div>
          </SliderDiv>
          <SliderDiv>
            <div className="sliderTitle">Blur</div>
            <input
              type="range"
              className="slider"
              value={blur}
              min="-32"
              max="32"
              step="1"
              onInput={(e) => {
                setBlur(e.target.value + "px");
              }}
            />
            <div className="bubble">{blur}</div>
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
                setSpread(e.target.value + "px");
              }}
            />
            <div className="bubble">{spread}</div>
          </SliderDiv>
        </SlidersSection>
        <ColorSection>
          <input
            type="color"
            onInput={(e) => {
              setBackgroundColor(e.target.value);
            }}
            value={backgroundColor}
          />
          <input
            type="color"
            onInput={(e) => {
              setBoxColor(e.target.value);
            }}
            value={boxColor}
          />
          <input
            type="color"
            onInput={(e) => {
              setShadowColor(e.target.value);
            }}
            value={shadowColor}
          />
          <input
            type="checkbox"
            value={inset}
            onChange={(e) => setinset(e.target.value)}
          />
          <label>Inset</label>
        </ColorSection>
        <OutputSection
          backgroundColor={backgroundColor}
          boxColor={boxColor}
          shadowColor={shadowColor}
          horizontalOffset={horizontalOffset}
          verticalOffset={verticalOffset}
          blur={blur}
          spread={spread}
        >
          <div className="box"></div>
        </OutputSection>
      </InputSection>
      <CSSGenerationDiv>
        <CSSProps>
          <span>background-color: {boxColor}; </span>
          <span>
            -webkit-box-shadow: {horizontalOffset} {verticalOffset} {blur}{" "}
            {spread} {shadowColor}
          </span>
          <span>
            -moz-box-shadow: {horizontalOffset} {verticalOffset} {blur} {spread}{" "}
            {shadowColor}
          </span>
          <span>
            box-shadow: {horizontalOffset} {verticalOffset} {blur} {spread}{" "}
            {shadowColor}
          </span>
        </CSSProps>
        {/* TODO: Copy and Reset buttons */}
      </CSSGenerationDiv>
    </StyledOuterDiv>
  );
};

export default BoxShadowGenerator;
