import { useState, useEffec, useContext, useEffect } from "react";
import styled from "styled-components";
import ButtonDiv from "../../ButtonDiv";
import * as conFun from "./converterFunctions";
import { regexColorCodeTypes } from "../../../../static/helpers/helperfunctions";
import { ToastContext } from "../../../Toast/toastcontext";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";

const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textbox};
  font-size: var(--fz-xxxl);
  height: 100%;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.border};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.border};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.border};
  }
`;

const StyledInputDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart};
  gap: 10px;
  /* height: auto; */

  .inputDiv {
    width: 100%;
    height: 100%;
  }

  .colordiv {
    input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: 60px;
      height: 100%;
      background-color: transparent;
      cursor: pointer;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }

    input[type="color"]:invalid {
      background-color: pink;
    }

    ${({ theme }) => theme.mixins.flexStart}
    gap: 20px;
    font-size: var(--fz-xl);
    color: ${({ theme }) => theme.color};
    height: 50px;
    padding-right: 20px;
    background-color: ${({ theme }) => theme.shadeBackcard};
  }

  @media (min-width: 800px) {
    height: 60px;
    ${({ theme }) => theme.mixins.flexStart};
    flex-direction: row;
    gap: 20px;

    .inputDiv {
      width: 70%;
      height: 100%;
    }
    .colordiv {
      height: 100%;
    }
  }
`;

const StyledOutputDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart};
  width: 100%;
  background-color: ${({ theme }) => theme.hover};
  margin-top: 20px;

  .outputColorDiv {
    width: 100%;
    height: 200px;
    background: ${(props) => props.color};
  }

  @media (min-width: 600px) {
    width: 100%;
    margin-top: 50px;
    gap: 40px;
    ${({ theme }) => theme.mixins.flexStart};
    align-items: flex-start;

    .outputColorDiv {
      width: 50%;
      height: 250px;
    }
  }

  @media (min-width: 800px) {
    width: 100%;
    margin-top: 50px;
    gap: 50px;
    ${({ theme }) => theme.mixins.flexStart};
    align-items: flex-start;

    .outputColorDiv {
      width: 50%;
      height: 300px;
    }
  }
`;

const StyledDetails = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart};
  width: 100%;
  padding: 20px 40px;
  font-size: var(--fz-md);

  .titleDiv {
    color: ${({ theme }) => theme.color};
    font-size: var(--fz-heading);
    font-weight: 600;
    margin: 20px 0 20px 0;
  }

  @media (min-width: 600px) {
    width: 50%;
    height: 250px;
    padding: 0;
    font-size: var(--fz-lg);
    .titleDiv {
      font-size: var(--fz-heading);
      margin: 0px 0 20px 0;
    }
  }

  @media (min-width: 800px) {
    width: 40%;
    height: 300px;
    padding: 0;
    font-size: var(--fz-lg);
    .titleDiv {
      font-size: var(--fz-headingxlM);
      margin: 0px 0 20px 0;
    }
  }
`;

const StyledColorListDiv = styled.div`
  ${({ theme }) => theme.mixins.flexBeside};
  margin-bottom: 7px;
  .typeName {
    color: ${({ theme }) => theme.descfont};
    width: 64px;
    margin-right: 10px;
  }

  .copyText {
    margin: 0 15px;
    text-align: center;
    display: none;
    color: ${({ theme }) => theme.color};
  }

  .outputCode {
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.color};
      outline: 1.8px dashed ${({ theme }) => theme.color};
      .copyText {
        display: inline;
      }
    }
  }
`;

const rgbHexConverter = () => {
  const [userInput, setUserInput] = useState();
  const [output, setOutput] = useState([]);
  const [state, dispatch] = useContext(ToastContext);

  const removeState = () => {
    setOutput([]);
  };

  useEffect(() => {
    userInput !== null && removeState();
  }, [userInput]);

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setUserInput(() => inputVal);
  };

  const handleConvert = () => {
    const currentValue = userInput;
    // console.log(output);
    handleValidation(currentValue);
  };

  const hexConverter = (hex) => {
    let hexRegex = regexColorCodeTypes("hex");
    if (hexRegex.test(hex)) {
      const hexRgb = conFun.hexToRGB(hex);
      const hexHsl = conFun.hexToHSL(hex);
      const hexCmyk = conFun.HEXToCmyk(hex);
      const conveterObj = [
        {
          type: "HEX",
          code: hex,
        },
        {
          type: "RGB",
          code: hexRgb,
        },
        {
          type: "HSL",
          code: hexHsl,
        },
        {
          type: "CMYK",
          code: hexCmyk,
        },
      ];
      setOutput(conveterObj);
    } else {
      // console.log("Invalid input");
    }
  };

  const hexaConverter = (hexa) => {
    let hexaRegex = regexColorCodeTypes("hexa");
    if (hexaRegex.test(hexa)) {
      const hexaRgb = conFun.hexAToRGBA(hexa, false);
      const hexaHsl = conFun.hexAToHSLA(hexa, false);
      const conveterObj = [
        {
          type: "HEXA",
          code: hexa,
        },
        {
          type: "RGBA",
          code: hexaRgb,
        },
        {
          type: "HSLA",
          code: hexaHsl,
        },
      ];
      setOutput(conveterObj);
    } else {
      // console.log("Invalid input");
    }
  };

  const handleValidation = (currentValue) => {
    // let ex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
    let hexRegex = regexColorCodeTypes("hex");
    let hexaRegex = regexColorCodeTypes("hexa");
    let rgbRegex = regexColorCodeTypes("rgb");
    let rgbaRegex = regexColorCodeTypes("rgba");
    let hslRegex = regexColorCodeTypes("hsl");
    let hslaRegex = regexColorCodeTypes("hsla");

    // console.log(currentValue)

    if (hexRegex.test(currentValue)) {
      hexConverter(currentValue);
    } else if (hexaRegex.test(currentValue)) {
      hexaConverter(currentValue);
    } else if (rgbRegex.test(currentValue)) {
      const rgbHex = conFun.RGBToHex(currentValue);
      hexConverter(rgbHex);
    } else if (rgbaRegex.test(currentValue)) {
      const rgbaHex = conFun.RGBAToHexA(currentValue, false);
      hexaConverter(rgbaHex);
    } else if (hslRegex.test(currentValue)) {
      const hslHex = conFun.HSLToHex(currentValue);
      hexConverter(hslHex);
    } else if (hslaRegex.test(currentValue)) {
      const hslaHex = conFun.HSLAToHexA(currentValue, false);
      hexaConverter(hslaHex);
    } else {
      dispatch({
        type: "SHOW",
        message: "Invalid Input",
      });
      return;
    }
  };

  const changeColor = (e) => {
    const pickedColor = e.target.value;
    setUserInput(pickedColor);
  };

  const handleCopy = (code) => {
    copyToClipboard(code);
    dispatch({
      type: "SHOW",
      message: "Copied",
    });
    return;
  };

  const filter = [
    {
      key: "1",
      title: "Convert",
      method: () => handleConvert(),
      type: "submit",
    },
  ];

  const finalButtons = [];
  // console.log();
  return (
    <>
      <StyledInputDiv>
        <div className="inputDiv">
          <StyledInput
            type="text"
            onChange={handleChange}
            value={userInput}
            placeholder="#, rgb(), hsl()"
          />
        </div>
        <div className="colordiv">
          <input
            type="color"
            onInput={(e) => {
              changeColor(e);
            }}
            value={userInput}
          />
          Pick a color
        </div>
      </StyledInputDiv>
      <ButtonDiv filter={filter} finalButtons={finalButtons} />

      {output.length !== 0 && (
        <StyledOutputDiv color={output[0].code}>
          <div className="outputColorDiv"></div>
          <StyledDetails>
            <div className="titleDiv">Color Info</div>
            {output.map((obj) => {
              return (
                <StyledColorListDiv>
                  <div className="typeName">{obj.type}</div>
                  <div
                    className="outputCode"
                    onClick={() => handleCopy(obj.code)}
                  >
                    {obj.code}
                    <span className="copyText">Copy</span>
                  </div>
                </StyledColorListDiv>
              );
            })}
          </StyledDetails>
        </StyledOutputDiv>
      )}
    </>
  );
};

export default rgbHexConverter;
