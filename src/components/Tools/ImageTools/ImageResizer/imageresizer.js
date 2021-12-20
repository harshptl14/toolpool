import { useState, useEffect } from "react";
import Canvas from "../canvas";

const ImageResizer = () => {
  // const [imageInput, setimageInput] = useState();
  const [previewImage, setpreviewImage] = useState();
  // const [isClicked, setisClicked] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(75);

  useEffect(() => {
    if (!previewImage) {
      setpreviewImage(undefined);
      return;
    }

    // // generating ObjectURL for input image to preview
    // const objectUrl = URL.createObjectURL(imageInput);
    // var image = new Image();
    // image.src = objectUrl
    // setpreviewImage(image);

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl);
  }, []);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setpreviewImage(undefined);
      return;
    }
    console.log(e.target.files[0]);
    // setimageInput(e.target.files[0]);
    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    console.log(objectUrl);
    var image = new Image();
    image.src = objectUrl;
    setpreviewImage(image);
  };

  const changeWidth = (val) => {
    if (isChecked) {
      setWidth(val);
    } else {
      setWidth(val);
    }
  };

  const changeHeight = (val) => {
    setHeight(val);
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
    //TODO Maintain aspect ratio (resizing algorithm)
    // The most common aspect ratios for standard photography and art prints are 3:2 and 5:4
    if (previewImage) {
      if (width > 20000 || width < 9) {
        console.log("Width should be between 9 to 20000 pixels");
        return;
      }
      if (height > 20000 || height < 9) {
        console.log("Height should be between 9 to 20000 pixels");
        return;
      }

      // console.log("New width * height : ", width, " * ", height);
      // converting image file to Image object to access it in JS logic
      var image = new Image();
      image.src = previewImage.src;
      image.onload = () => {
        // resizing and drawing image on canvas
        ctx.drawImage(image, 0, 0, width, height);
      };
    }
  };

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
          <Canvas draw={draw} width={width} height={height} />
          {/* //TODO Download button */}
        </div>
      )}
      {/* </form> */}
    </div>
  );
};

export default ImageResizer;
