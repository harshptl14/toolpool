import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { UploadFile } from "@styled-icons/material";
import { useCallback } from "react";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import ButtonDiv from "../../ButtonDiv";
import RGBToHex from "../../ColorTools/RgbToHex/converterFunctions";

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
  label {
    gap: 10px;
    font-size: var(--fz-lg);
    ${({ theme }) => theme.mixins.flexStart};
    margin-top: 15px;
  }
  ${({ theme }) => theme.mixins.checkbox};



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
  ${({ theme }) => theme.mixins.colorSelection}
`;

const ChoiceSection = styled.div`
  margin-top: 15px;
`;

const OutputSection = styled(SlidersSection)`
  border: 1.8px dashed ${({ theme }) => theme.shade};
  /* background: rgba(255, 255, 255, 1); */
  height: 430px;
  background-image: ${(props) =>
    props.isbgimage === true && `url(${props.bgimage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => {
    return (
      props.isbgcolor === true &&
      `rgba(
        ${props.bgcolor.r},
        ${props.bgcolor.g},
        ${props.bgcolor.b},
        1
      )`
    );
  }};
  @media (min-width: 800px) {
    width: 60%;
  }

  .glass {
    margin: auto;
    width: 50%;
    height: 50%;
    background: rgba(
      ${(props) => props.color.r},
      ${(props) => props.color.g},
      ${(props) => props.color.b},
      ${(props) => props.opacity}
    );
    -webkit-backdrop-filter: blur(${(props) => props.blur}px);
    backdrop-filter: blur(${(props) => props.blur}px);
    border-radius: 15px;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.8px;
  }
`;

const FileSelection = styled.div`
  ${({ theme }) => theme.mixins.imageUploader};
  margin-top: 15px;
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



const GlassMorphismGenerator = () => {
  const HexToRGBobj = (hex) => {
    return {
      r: ("0x" + hex[1] + hex[2]) | 0,
      g: ("0x" + hex[3] + hex[4]) | 0,
      b: ("0x" + hex[5] + hex[6]) | 0,
    };
  };
  const theme = useTheme();
  const [blur, setBlur] = useState(10);
  const [opacity, setOpacity] = useState(0.5);
  const [isBGColor, setIsBGColor] = useState(false);
  const [isBGImage, setisBGImage] = useState(false);
  const [RGBColor, setRGBColor] = useState(() => HexToRGBobj(theme.contrast));
  const [bgImage, setBgImage] = useState(null);
  const [bgColor, setBgColor] = useState({ r: 0, g: 0, b: 0 });

  const onSelectFile = useCallback((file) => {
    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
    setBgImage(objectUrl);
  }, []);

  const HexToRGB = (hex) => {
    return [
      ("0x" + hex[1] + hex[2]) | 0,
      ("0x" + hex[3] + hex[4]) | 0,
      ("0x" + hex[5] + hex[6]) | 0,
    ];
  };



  const filter = [];

  const finalButtons = [
    {
      key: "1",
      title: "Copy",
      method: () => {
        let node = document.getElementById("output");
        let text = node.textContent;
        copyToClipboard(text);
      },
      type: "submit",
    },
  ];

  useEffect(() => {
    setRGBColor(() => HexToRGBobj(theme.contrast));
    console.log(RGBColor)
    console.log(theme.contrast)
  }, [theme])

  return (
    <StyledOuterDiv>
      <StyledUpper>
        <SlidersSection>
          <ColorSection>
            <input
              type="color"
              // value={
              //   () => {
              //     const hexColor = RGBToHex(`rgb(255, 12, 12)`)
              //     console.log(hexColor);
              //     return hexColor;
              //   }
              // }
              onInput={(e) => {
                const rgb = HexToRGB(e.target.value);
                setRGBColor({
                  r: rgb[0],
                  g: rgb[1],
                  b: rgb[2],
                });
              }}
            />
            Glass Color
          </ColorSection>
          <SliderDiv>
            <div className="sliderTitle">Blur</div>
            <input
              type="range"
              className="slider"
              value={blur}
              min="1"
              max="50"
              step="1"
              onInput={(e) => {
                setBlur(e.target.value);
              }}
            />

            <div className="bubble">{blur + "px"}</div>
          </SliderDiv>
          <SliderDiv>
            <div className="sliderTitle">Opacity</div>
            <input
              type="range"
              className="slider"
              value={opacity}
              min="0.0"
              max="1.0"
              step="0.05"
              onInput={(e) => {
                setOpacity(e.target.value);
              }}
            />

            <div className="bubble">{opacity}</div>
          </SliderDiv>

          <ChoiceSection>
            <label>
              <input
                type="checkbox"
                checked={isBGImage}
                name="image"
                onChange={(e) => {
                  if (isBGColor) {
                    setIsBGColor(false);
                  }
                  setisBGImage((b) => !b);
                }}
              />
              Test with a Background Image
            </label>
            {isBGImage && (
              <FileSelection>
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files);
                    if (!e.target.files || e.target.files.length === 0) {
                      setBgImage(null);
                      return;
                    }
                    onSelectFile(e.target.files[0]);
                  }}
                />
                <div className="file-dummy">
                  <div className="success">
                    Drag your image here, or click to browse
                  </div>
                  <div className="default">
                    <UploadFile width="40px" color="#2b7537" />
                    Drag your image here, or click to browse
                  </div>
                </div>
              </FileSelection>
            )}
            <label>
              <input
                type="checkbox"
                checked={isBGColor}
                name="color"
                onChange={(e) => {
                  if (isBGImage) {
                    setisBGImage(false);
                  }
                  setIsBGColor((b) => !b);
                }}
              />
              Test with a Background Color
            </label>
            {isBGColor && (
              <ColorSection>
                <input
                  type="color"
                  onInput={(e) => {
                    const rgb = HexToRGB(e.target.value);
                    setBgColor({
                      r: rgb[0],
                      g: rgb[1],
                      b: rgb[2],
                    });
                  }}
                />
                Background Color
              </ColorSection>
            )}
          </ChoiceSection>
        </SlidersSection>
        <OutputSection
          blur={blur}
          opacity={opacity}
          color={RGBColor}
          isbgcolor={isBGColor}
          bgcolor={bgColor}
          isbgimage={isBGImage}
          bgimage={
            bgImage === null ? "../../../../static/assets/shapebg.png" : bgImage
          }
        >
          <div className="glass">
            <div className="content">
              Hey, there!!
              <br />
              ToolPool is da best!
            </div>
          </div>
        </OutputSection>
      </StyledUpper>
      <CSSGenerationDiv>
        Code for Glass component only*
        <CSSProps id="output">
          <span>
            background:{" "}
            {`rgba(${RGBColor.r},${RGBColor.g},${RGBColor.b},${opacity})`};{" "}
          </span>
          <span>-webkit-backdrop-filter: blur({`${blur}px`});</span>
          <span>backdrop-filter: blur({`${blur}px`});</span>
        </CSSProps>
      </CSSGenerationDiv>
      <ButtonDiv filter={filter} finalButtons={finalButtons} />
    </StyledOuterDiv>
  );
};

export default GlassMorphismGenerator;
