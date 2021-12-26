import { useState, useEffect } from "react";
import Canvas from "../canvas";

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
    <div>
      {/* <form> */}
      {/* Input section */}
      <input type="file" onChange={onSelectFile} />
      {previewImage && (
        <div>
          <div>
            <img src={previewImage.src} alt="previewImage" />
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
    </div>
  );
};

export default ImageResizer;
