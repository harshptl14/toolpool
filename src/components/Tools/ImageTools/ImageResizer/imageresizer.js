import { useState } from "react";
import Canvas from "../canvas";
import styled from "styled-components";
import { UploadFile } from "@styled-icons/material";

const StyledOuterdiv = styled.div`
  /* input[type="file"] {
    display: none;
  }
  .selectImage {
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.8px dashed ${({ theme }) => theme.color};
    cursor: pointer;
    gap: 10px;
    :focus {
      outline: 0px dashed ${({ theme }) => theme.color};
    }
  } */

`;

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
    background-color: ${({ theme }) => theme.shade};

    .success {
      display: inline-block;
    }
    .default {
      display: none;
    }
  }
`;

const StyledPreviewimageDiv = styled.div`
  /* width: 100%  */
  position: relative;
  margin: 16px 0px;
  padding: 24px;
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
`;

const ImageResizer = () => {
  // const [imageInput, setimageInput] = useState();
  const [previewImage, setpreviewImage] = useState();
  // const [isClicked, setisClicked] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const MAX_WIDTH = 5000;
  const MAX_HEIGHT = 5000;

  // useEffect(() => {
  //   // if (!previewImage) {
  //   //   setpreviewImage(undefined);
  //   //   return;
  //   // }
  //   // // generating ObjectURL for input image to preview
  //   // const objectUrl = URL.createObjectURL(imageInput);
  //   // var image = new Image();
  //   // image.src = objectUrl
  //   // setpreviewImage(image);
  //   // free memory when ever this component is unmounted
  //   // return () => URL.revokeObjectURL(objectUrl);
  // }, []);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setpreviewImage(undefined);
      return;
    }
    if (!e.target.files[0].name) {
      console.log("Please upload Image file of format .png,.jpeg, .jfif");
      return;
    }
    console.log(e.target.files[0]);
    // setimageInput(e.target.files[0]);
    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    console.log(objectUrl);
    var image = new Image();
    image.name = e.target.files[0].name;
    image.src = objectUrl;
    setpreviewImage(image);
  };

  const maintainAspectRatio = (newWidth) => {
    var ratio = previewImage.height / previewImage.width;
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

  // const onClickResize = () => {
  //   if (width > 20000 || width < 9) {
  //     console.log("Width should be between 9 to 20000 pixels");
  //     return;
  //   }
  //   if (height > 20000 || height < 9) {
  //     console.log("Height should be between 9 to 20000 pixels");
  //     return;
  //   }
  //   console.log("Resizer function");
  //   setisClicked(true);
  // };

  const draw = (ctx) => {
    // The most common aspect ratios for standard photography and art prints are 3:2 and 5:4
    if (previewImage) {
      var image = new Image();
      image.src = previewImage.src;
      if (width > MAX_WIDTH || width < 9) {
        image.onload = () => {
          // resizing and drawing image on canvas
          ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
        };
        console.log("Width should be between 9 to 20000 pixels");
        return;
      }
      if (height > MAX_HEIGHT || height < 9) {
        image.onload = () => {
          // resizing and drawing image on canvas
          ctx.drawImage(image, 0, 0, previewImage.width, previewImage.height);
        };
        console.log("Height should be between 9 to 20000 pixels");
        return;
      }

      // console.log("New width * height : ", width, " * ", height);
      // converting image file to Image object to access it in JS logic
      image.onload = () => {
        // resizing and drawing image on canvas
        ctx.drawImage(image, 0, 0, width, height);
      };
    }
  };

  function DownloadCanvasAsImage() {
    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", `${previewImage.name}`);
    let canvas = document.getElementById("canvas");
    canvas.toBlob(function (blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
  }

  return (
    <StyledOuterdiv>
      {/* <form> */}
      {/* Input section */}
      {/* <label className="selectImage" for="file">
        <UploadFile width="40px" color="#2b7537" />
        Click here to browse Image
      </label>
      <input id="file" type="file" onChange={onSelectFile} /> */}
      <StyledFilearea>
        <label for="images"></label>
        <input
          type="file"
          name="images"
          id="images"
          required="required"
          multiple="multiple"
          onChange={onSelectFile}
        />

        <div class="file-dummy">
          <div className="success">
            Great, your files are selected. Keep on.
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
                src={previewImage.src}
                alt="previewImage"
                className="previewImage"
              />
            </StyledPreviewimageDiv>
            <h5>Original image</h5>
            <input
              type="number"
              name="width"
              value={width}
              placeholder="Width"
              onChange={(e) => {
                changeWidth(e.target.value);
              }}
            />
            <input
              type="number"
              name="height"
              placeholder="Height"
              disabled={isChecked}
              value={height}
              onChange={(e) => {
                changeHeight(e.target.value);
              }}
            />
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setisChecked(!isChecked)}
            />
            <label>Maintain aspect ratio</label>
            <br />
            {/* <button onClick={onClickResize}>Resize image</button> */}
          </div>
        </div>
      )}

      {/* Output section */}
      {previewImage && (
        <div>
          <Canvas
            id="canvas"
            draw={draw}
            width={width > MAX_WIDTH ? previewImage.width : width}
            height={height > MAX_HEIGHT ? previewImage.height : height}
          />
          <button onClick={DownloadCanvasAsImage}>Download</button>
        </div>
      )}
      {/* </form> */}
    </StyledOuterdiv>
  );
};

export default ImageResizer;
