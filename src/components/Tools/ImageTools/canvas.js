import React, { useRef, useEffect } from "react";

// Component to implement canvas
const Canvas = (props) => {
  // draw is a function which will be passed during the Element mounting.
  // It should consist logic to draw shapes/images on canvas
  // rest will consist extra arguments passed for Canvas element
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const render = () => {
      draw(context);
    };
    render();

    return () => {};
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      {...rest}
      width={props.width}
      height={props.height}
    />
  );
};

export default Canvas;
