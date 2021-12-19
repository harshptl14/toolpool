import { useState, useEffect } from "react";
import Canvas from "../canvas";

const ImageResizer = () => {
  const [imageInput, setimageInput] = useState();
  const [previewImageURL, setpreviewImageURL] = useState();
  const [isClicked, setisClicked] = useState(false);

  useEffect(() => {
    if (!imageInput) {
      setimageInput(undefined);
      return;
    }

    // generating ObjectURL for input image to preview
    const objectUrl = URL.createObjectURL(imageInput);
    setpreviewImageURL(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageInput]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setimageInput(undefined);
      return;
    }
    console.log(e.target.files[0]);
    setimageInput(e.target.files[0]);
  };

  const onClickResize = () => {
    console.log("Resizer function");
    setisClicked(true);
  };

  const draw = (ctx) => {
    //TODO Maintain aspect ratio (resizing algorithm)
    // The most common aspect ratios for standard photography and art prints are 3:2 and 5:4
    if (imageInput) {
      // converting image file to Image object to access it in JS logic
      var image = new Image();
      image.src = previewImageURL;

      image.onload = () => {
        // resizing and drawing image on canvas
        ctx.drawImage(image, 0, 0, 50, 50);
      };
    }
  };

  return (
    <div>
      {/* <form> */}
      {/* Input section */}
      <input type="file" onChange={onSelectFile} />
      {imageInput && (
        <div>
          <div>
            <img src={previewImageURL} alt="previewImageURL" />
            <h5>Original image</h5>
            {/* 
              //TODO Input fields for width, height
              //TODO option to maintain default aspect ratio or custom ratio 
            */}
          </div>
        </div>
      )}
      <button onClick={onClickResize}>Resize image to 50x50</button>

      {/* Output section */}
      {isClicked && (
        <div>
          {/* //TODO Display image according to its width and height */}
          <Canvas draw={draw} width={50} height={50} />
          {/* //TODO Download button */}
        </div>
      )}
      {/* </form> */}
    </div>
  );
};

export default ImageResizer;
