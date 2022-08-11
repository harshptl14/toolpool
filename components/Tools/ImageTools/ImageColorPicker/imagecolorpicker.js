import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";
import { useState, useCallback, useContext } from "react";
import Canvas from "../canvas";
import ButtonDiv from "../../ButtonDiv";
import { Copy } from "@styled-icons/boxicons-regular";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import { ToastContext } from "../../../Toast/toastcontext";
import { RGBAToHexA } from "../../ColorTools/RgbToHex/converterFunctions";


const Wrapperdiv = styled.div`
  .canvas-preview {
    margin: 1em auto;
    max-width: fit-content;
    overflow-x: scroll;
  }

  .result {
    width: max-content;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 830px) {
    .result {
      flex-direction: column;
    }
  }

  .action-btns {
    margin: auto;
    width: max-content;
  }
`;

const StyledCopyButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color}
`;

const StyledFilearea = styled.div`
  ${({ theme }) => theme.mixins.imageUploader}
`;

const StyledPreviewimageDiv = styled.div`
  position: relative;
  margin: 16px 0px;
  padding: 0;
  width: 100%;
  height: max-content;
  background: ${({ theme }) => theme.shade};
  border: 1px solid ${({ theme }) => theme.shade};
  /* border-radius: 8px; */
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(97, 98, 150);
  /* opacity: 0.5; */
  transition: all 0.25s ease 0s;
  margin: 1em auto;
  /* max-width: fit-content; */
  overflow-x: hidden; 

  canvas {
    width: auto;
    max-width: calc(100% - 40px);
    height: auto;
    max-height: 620px;
  }

  .title {
    color: ${({ theme }) => theme.color};
    margin-top: 10px;
    font-size: var(--fz-lg);
  }

  .size {
    margin-top: 5px;
    font-size: var(--fz-lg);
    color: ${({ theme }) => theme.text};
  }
`;

const ResultWrapper = styled.div`
  margin: 2em auto;
  padding: 1em;
  max-width: max-content;
  /* border-radius: 10px; */
  background-color: ${({ theme }) => theme.shadeVarient};
  display: flex;

  .color-display {
    min-width: 100px;
    height: inherit;
    background-color: ${(props) => `${props.hex}`};
    border-radius: 10px;
  }

  .color-data {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }
`;

function findPos(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    // finding closest parent element to calculate coords of pointer with respect to it.
    // The script moves up the tree of offsetParents and adds the offsetTop and offsetLeft of each.
    // Eventually, regardless of the actual composition of the offsetParent tree,
    // this leads to the real coordinates of the element on the screen.
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

const hexToRgb = (hex) => {
  console.log("hexToRgb", hex)
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  console.log("result of hexToRgb", result)
  return result
    ? `
        ${parseInt(result[1], 16)},
        ${parseInt(result[2], 16)},
        ${parseInt(result[3], 16)}
      `
    : null;
};

const ImageColorPicker = () => {
  const [previewImage, setpreviewImage] = useState(null);
  const [hex, setHex] = useState({ hex: "#ffffff", rgba: "rgb(255,255,255,1)" });
  const [state, dispatch] = useContext(ToastContext);

  const draw = useCallback(
    (ctx) => {
      if (previewImage) {
        // scaling an image to fit in canvas completely
        var canvas = ctx.canvas;
        var hRatio = canvas.width / previewImage.width;
        var vRatio = canvas.height / previewImage.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - previewImage.width * ratio) / 2;
        var centerShift_y = (canvas.height - previewImage.height * ratio) / 2;
        ctx.drawImage(
          previewImage,
          0,
          0,
          previewImage.width,
          previewImage.height,
          centerShift_x,
          centerShift_y,
          previewImage.width * ratio,
          previewImage.height * ratio
        );
      }
    },
    [previewImage]
  );

  const finalButtons = [
    {
      key: "1",
      title: "Pick color",
      method: () => {
        const eyeDropper = new EyeDropper();
        try {
          eyeDropper.open().then((data) => {
            setHex({
              hex: RGBAToHexA(data.sRGBHex).slice(0, -2),
              rgba: data.sRGBHex,
            });
          });
        } catch (err) {
          console.log(err);
        }
      },
      type: "normal",
    },
    {
      key: "2",
      title: "Reset",
      method: () => {
        setpreviewImage(null);
        setHex({ hex: "#ffffff", rgba: "rgb(255,255,255,1)" });
      },
      type: "normal",
    },
  ];

  return (
    <Wrapperdiv>
      <StyledFilearea>
        <input
          type="file"
          name="images"
          id="images"
          required="required"
          onClick={(e) => {
            e.target.value = null;
          }}
          onChange={(e) => {
            if (!e.target.files || e.target.files.length === 0) {
              setpreviewImage(undefined);
              return;
            }
            var image = new Image();
            image.src = URL.createObjectURL(e.target.files[0]);
            image.onload = () => {
              setpreviewImage(image);
            };
          }}
        />

        <div className="file-dummy">
          <div className="success">
            Great, your files are selected. Drag your image or click to change.
          </div>
          <div className="default">
            <UploadFile width="40px" color="#2b7537" />
            Drag your image here, or click to browse
          </div>
        </div>
      </StyledFilearea>

      {previewImage && (
        <div className="result">
          <ResultWrapper hex={hex.hex}>
            <div className="color-display"></div>
            <div className="color-data">
              <span>
                RGBA : {hex.rgba}
                <StyledCopyButton
                  onClick={(e) => {
                    copyToClipboard(hex.rgba);
                    dispatch(
                      {
                        type: "SHOW",
                        message: "Copied",
                      }
                    );
                  }}
                >
                  <Copy width={25} />
                </StyledCopyButton>
              </span>
              <span>
                Hex : {hex.hex}
                <StyledCopyButton
                  onClick={(e) => {
                    copyToClipboard(hex.hex);
                    dispatch({
                      type: "SHOW",
                      message: "Copied",
                    });
                  }}
                >
                  <Copy width={25} />
                </StyledCopyButton>
              </span>
            </div>
          </ResultWrapper>
          <div className="action-btns">
            {previewImage && (
              <ButtonDiv filter={[]} finalButtons={finalButtons} />
            )}
          </div>
        </div >
      )}

      {
        previewImage && (
          <StyledPreviewimageDiv>
            <Canvas
              id="canvas"
              draw={draw}
              width={700}
              height={500}
              onClick={(e, ctx) => {
                // var pos = findPos(ctx.canvas);
                // const x = e.pageX - pos.x;
                // const y = e.pageY - pos.y;
                // var imageData = ctx.getImageData(x, y, 1, 1).data;
                // const [r, g, b] = imageData;
                // setRgb([r, g, b]);
              }}
            />
          </StyledPreviewimageDiv>
        )
      }
    </Wrapperdiv >
  );
};

export default ImageColorPicker;
