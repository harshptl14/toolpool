import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";
import { useState, useCallback } from "react";
import Canvas from "../canvas";
import ButtonDiv from "../../ButtonDiv";
import { Copy } from "@styled-icons/boxicons-regular";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
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

const CopyButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledFilearea = styled.div`
  ${({ theme }) => theme.mixins.imageUploader}
`;

const ResultWrapper = styled.div`
  margin: 2em auto;
  padding: 1em;
  max-width: max-content;
  border-radius: 10px;
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
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
  const [hex, setHex] = useState("#ffffff");

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
            setHex(data.sRGBHex);
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
        setHex(null);
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
            setpreviewImage(null);
          }}
          onChange={(e) => {
            if (e.target.files.length === 0) {
              setpreviewImage(null);
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
          <ResultWrapper hex={hex}>
            <div className="color-display"></div>
            <div className="color-data">
              <span>
                RGB : ({`${hexToRgb(hex)}`})
                <CopyButton
                  onClick={(e) => {
                    copyToClipboard(hexToRgb(hex));
                  }}
                >
                  <Copy width={20} />
                </CopyButton>
              </span>
              <span>
                Hex : {hex}
                <CopyButton
                  onClick={(e) => {
                    copyToClipboard(hex);
                  }}
                >
                  <Copy width={20} />
                </CopyButton>
              </span>
            </div>
          </ResultWrapper>
          <div className="action-btns">
            {previewImage && (
              <ButtonDiv filter={[]} finalButtons={finalButtons} />
            )}
          </div>
        </div>
      )}

      {previewImage && (
        <div className="canvas-preview">
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
        </div>
      )}
    </Wrapperdiv>
  );
};

export default ImageColorPicker;
