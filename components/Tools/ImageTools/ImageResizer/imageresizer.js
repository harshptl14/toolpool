import { useState, useCallback, useRef, useContext } from "react";
import Canvas from "../canvas";
import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";
import ButtonDiv from "../../ButtonDiv";
import { ToastContext } from "../../../Toast/toastcontext";

const StyledFilearea = styled.div`
  ${({ theme }) => theme.mixins.imageUploader}
`;

const StyledPreviewimageDiv = styled.div`
  position: relative;
  margin: 16px 0px;
  padding: 30px 0;
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
  cursor: not-allowed;
  transition: all 0.25s ease 0s;
  .previewImage {
    width: auto;
    max-width: calc(100% - 40px);
    height: auto;
    max-height: 420px;
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

const StyledFilterDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBetween}
  gap: 30px;
  margin: 20px 0 10px 0;
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textbox};
`;

const StyledCheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  font-size: var(--fz-lg);
  ${({ theme }) => theme.mixins.checkbox}
`;

const ImageResizer = () => {
  // const [imageInput, setimageInput] = useState();
  const [previewImage, setpreviewImage] = useState(null);
  const previewImageRef = useRef();
  // const [isClicked, setisClicked] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);

  const [state, dispatch] = useContext(ToastContext);

  const MAX_WIDTH = 10000;
  const MAX_HEIGHT = 10000;

  const onSelectFile = (file) => {
    // console.log("File", file);
    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(file);
    // console.log(objectUrl);
    var image = new Image();
    image.name = file.name;
    image.src = objectUrl;
    setpreviewImage(image);
  };

  const maintainAspectRatio = (newWidth) => {
    var ratio =
      previewImageRef.current.naturalHeight /
      previewImageRef.current.naturalWidth;
    var updatedHeight = ratio * newWidth;
    setWidth(newWidth);
    setHeight(updatedHeight.toFixed(2));
  };

  const changeWidth = (val) => {
    if (isChecked) {
      maintainAspectRatio(val);
    } else {
      setWidth(val);
    }
  };
  const changeHeight = (val) => {
    if (!isChecked) {
      setHeight(val);
    }
  };

  const draw = useCallback(
    (ctx) => {
      // The most common aspect ratios for standard photography and art prints are 3:2 and 5:4
      if (previewImage) {
        var image = new Image();
        image.src = previewImage.src;
        // if (width > MAX_WIDTH || width < 9) {
        //   image.onload = () => {
        //     // resizing and drawing image on canvas
        //     ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
        //   };
        //   console.log("Width should be between 9 to 5000 pixels");
        //   dispatch({
        //     type: "SHOW",
        //     message: "Width should be between 9 to 5000 pixels",
        //   });
        //   return;
        // }
        // if (height > MAX_HEIGHT || height < 9) {
        //   image.onload = () => {
        //     // resizing and drawing image on canvas
        //     ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
        //   };
        //   console.log("Height should be between 9 to 20000 pixels");
        //   dispatch({
        //     type: "SHOW",
        //     message: "Height should be between 9 to 5000 pixels",
        //   });
        //   return;
        // }

        // converting image file to Image object to access it in JS logic
        image.onload = () => {
          // resizing and drawing image on canvas
          ctx.drawImage(image, 0, 0, width, height);
        };
      }
    },
    [previewImage, width, height]
  );

  const filter = [];

  const finalButtons = [
    {
      key: "2",
      title: "Reset",
      method: () => {
        setpreviewImage(null);
      },
      type: "normal",
    },
    {
      key: "3",
      title: "Download",
      method: () => DownloadCanvasAsImage(),
      type: "submit",
    },
  ];

  function DownloadCanvasAsImage() {
    try {
      if (width > MAX_WIDTH || width < 9) {
        // console.log("Width should be between 9 to 5000 pixels");
        dispatch({
          type: "SHOW",
          message: "Width should be between 9 to 5000 pixels",
        });
        return;
      }
      if (height > MAX_HEIGHT || height < 9) {
        // console.log("Height should be between 9 to 20000 pixels");
        dispatch({
          type: "SHOW",
          message: "Height should be between 9 to 5000 pixels",
        });
        return;
      }
      let downloadLink = document.createElement("a");
      downloadLink.setAttribute("download", `${previewImage.name}`);
      let canvas = document.getElementById("canvas");
      canvas.toBlob(function (blob) {
        let url = URL.createObjectURL(blob);
        downloadLink.setAttribute("href", url);
        downloadLink.click();
      });
    } catch (err) {
      // console.log(err.message);
    }
  }

  return (
    <div>
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
            // console.log(e.target.files);
            if (!e.target.files || e.target.files.length === 0) {
              setpreviewImage(undefined);
              return;
            }
            onSelectFile(e.target.files[0]);
          }}
        />

        <div className="file-dummy">
          <div className="success">
            Great, your files are selected. Drag your image or click to chanage.
          </div>
          <div className="default">
            <UploadFile width="40px" color="#2b7537" />
            Drag your image here, or click to browse
          </div>
        </div>
      </StyledFilearea>

      {previewImage && (
        <div>
          <div>
            <StyledPreviewimageDiv>
              <img
                ref={previewImageRef}
                src={previewImage.src}
                alt="previewImage"
                className="previewImage"
                onLoad={() => {
                  setWidth(previewImageRef.current.naturalWidth);
                  setHeight(previewImageRef.current.naturalHeight);
                }}
              />
              <div className="title">{previewImage.name}</div>
              <div className="size">
                Size: {width} x {height}
              </div>
            </StyledPreviewimageDiv>

            <StyledFilterDiv>
              <StyledInput
                type="number"
                name="width"
                value={width}
                placeholder="Width"
                onChange={(e) => {
                  changeWidth(e.target.value);
                }}
              />
              <StyledInput
                type="number"
                name="height"
                placeholder="Height"
                disabled={isChecked}
                value={height}
                onChange={(e) => {
                  changeHeight(e.target.value);
                }}
              />
            </StyledFilterDiv>

            <StyledCheckboxDiv>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setisChecked(!isChecked)}
              />
              <label>Maintain aspect ratio</label>
            </StyledCheckboxDiv>

            <ButtonDiv filter={filter} finalButtons={finalButtons} />
          </div>
        </div>
      )}

      {previewImage && (
        <div>
          <Canvas
            id="canvas"
            style={{ display: "none" }}
            draw={draw}
            width={width > MAX_WIDTH ? previewImage.width : width}
            height={height > MAX_HEIGHT ? previewImage.height : height}
          />
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
