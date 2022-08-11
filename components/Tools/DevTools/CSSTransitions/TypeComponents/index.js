import OpacityInputs from "./Opacity";
import WidthInputs from "./Width";
import HeightInputs from "./Height";
import BGColorInputs from "./BGColor";
import OutlineInputs from "./Outline";

// Map of components which will take inputs for respective transition types
export const TypeComponents = {
  opacity: <OpacityInputs />,
  width: <WidthInputs />,
  height: <HeightInputs />,
  "background-color": <BGColorInputs />,
  outline: <OutlineInputs />,
};
