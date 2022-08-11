import { createContext } from "react";

export const TransitionContext = createContext({
  mainCode: "",
  pseudoCode: "",
  transitionType: "",
  duration: 1,
  durationUnit: "s",
  timingFunction: "ease",
  delay: 0,
  delayUnit: "s",
});
