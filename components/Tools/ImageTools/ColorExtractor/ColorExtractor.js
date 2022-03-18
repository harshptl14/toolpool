import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";
import { useState, useCallback } from "react";
import Canvas from "../canvas";

const Wrapperdiv = styled.div`
  .canvas-preview {
    /*  overflow-x: scroll;*/
    margin: auto;
    width: fit-content;
    border: 1px solid red;
  }
`;

const StyledFilearea = styled.div`
  ${({ theme }) => theme.mixins.imageUploader}
`;

const ResultWrapper = styled.div`
  max-width: 100%;
  min-width: 50%;
  margin: auto;
  padding: 1em;
  background-color: ${(theme) => theme.shadeVarient};

  .color-display {
    width: 150px;
    height: inherit;
    background-color: red;
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

const ImageColorPicker = () => {
  const [previewImage, setpreviewImage] = useState(null);
  const [rgb, setRgb] = useState(null);

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

  return (
    <Wrapperdiv>
      <StyledFilearea>
        <input
          type="file"
          name="images"
          id="images"
          required="required"
          onClick={(e) => {
            setpreviewImage(undefined);
          }}
          onChange={(e) => {
            if (e.target.files.length === 0) {
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
      {rgb && (
        <ResultWrapper>
          <div className="color-display"></div>
          <div className="color-data">
            <span>RGB : {rgb[0] + `,` + rgb[1] + `,` + rgb[2]}</span>
            <span>Hex : </span>
            <span>HSV : </span>
          </div>
        </ResultWrapper>
      )}
      {previewImage && (
        <div className="canvas-preview">
          <Canvas
            id="canvas"
            draw={draw}
            width={600}
            height={400}
            onClick={(e, ctx) => {
              var pos = findPos(ctx.canvas);
              const x = e.pageX - pos.x;
              const y = e.pageY - pos.y;
              var imageData = ctx.getImageData(x, y, 1, 1).data;
              const [r, g, b] = imageData;
              setRgb([r, g, b]);
            }}
          />
        </div>
      )}
    </Wrapperdiv>
  );
};

export default ImageColorPicker;
