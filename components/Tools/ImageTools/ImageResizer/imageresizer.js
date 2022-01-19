import { useState, useCallback, useRef, useContext } from "react";
import Canvas from "../canvas";
import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";
import ButtonDiv from "../../ButtonDiv";
import { ToastContext } from "../../../Toast/toastcontext";
const StyledFilearea = styled.div`
  width: 100%;
  position: relative;

  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-dummy {
    width: 100%;
    padding: 30px;
    background-color: ${({ theme }) => theme.footer};
    border: 1.8px dashed ${({ theme }) => theme.color};
    text-align: center;
    transition: background 0.3s ease-in-out;

    color: ${({ theme }) => theme.descfont};

    .success {
      display: none;
    }

    .default {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
    }
  }

  &:hover .file-dummy {
    background: ${({ theme }) => theme.shade};
  }

  input[type="file"]:focus + .file-dummy {
    /* outline: 2px solid rgba(255, 255, 255, 0.5); */
    /* outline: -webkit-focus-ring-color auto 5px; */
  }

  input[type="file"]:valid + .file-dummy {
    /* background-color: ${({ theme }) => theme.shade}; */

    .success {
      display: inline-block;
      color: ${({ theme }) => theme.color};
    }
    .default {
      display: none;
    }
  }
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
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
`;
const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.footer};
  padding: 10px;
  width: 49%;
  border: 1.5px solid ${({ theme }) => theme.shadeVarient};
  color: ${({ theme }) => theme.text};

  :active {
    outline: 1.8px dashed ${({ theme }) => theme.color};
  }
`;

const StyledCheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  font-size: var(--fz-lg);
  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: ${({ theme }) => theme.background};
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: ${({ theme }) => theme.color};
    width: 1.15em;
    height: 1.15em;
    border: 0.1em solid ${({ theme }) => theme.color};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.color};
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    /* outline: max(2px, 0.15em) solid ${({ theme }) => theme.color}; */
    outline-offset: max(2px, 0.15em);
  }
`;

const ImageResizer = () => {
  // const [imageInput, setimageInput] = useState();
  const [previewImage, setpreviewImage] = useState(null);
  const previewImageRef = useRef();
  // const [isClicked, setisClicked] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);

  const [state, dispatch] = useContext(ToastContext);

  const MAX_WIDTH = 5000;
  const MAX_HEIGHT = 5000;

  const onSelectFile = (file) => {
    console.log("File", file);
    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl);
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
        if (width > MAX_WIDTH || width < 9) {
          image.onload = () => {
            // resizing and drawing image on canvas
            ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
          };
          console.log("Width should be between 9 to 5000 pixels");
          dispatch({
            type: "SHOW",
            message: "Width should be between 9 to 5000 pixels",
          });
          return;
        }
        if (height > MAX_HEIGHT || height < 9) {
          image.onload = () => {
            // resizing and drawing image on canvas
            ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
          };
          console.log("Height should be between 9 to 20000 pixels");
          dispatch({
            type: "SHOW",
            message: "Height should be between 9 to 5000 pixels",
          });
          return;
        }

        // console.log("New width * height : ", width, " * ", height);
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
        console.log("Width should be between 9 to 5000 pixels");
        dispatch({
          type: "SHOW",
          message: "Width should be between 9 to 5000 pixels",
        });
        return;
      }
      if (height > MAX_HEIGHT || height < 9) {
        console.log("Height should be between 9 to 20000 pixels");
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
      console.log(err.message);
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
            console.log(e.target.files);
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
