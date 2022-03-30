import { useReducer } from "react";
import { MainCodeTemplates, PseudoCodeTemplates } from "./CodeTemplates";
import { TransitionContext } from "./TransitionContext";

const CHANGECODE = "CHANGECODE";
const CHANGETYPE = "CHANGETYPE";
const CHANGEPROPS = "CHANGEPROPS";
const CHANGEDURATION = "CHANGEDURATION";
const CHANGEDUNIT = "CHANGEDUNIT";
const CHANGETFUNCTION = "CHANGETFUNCTION";
const CHANGEDELAY = "CHANGEDELAY";
const CHANGEDLUNIT = "CHANGEDLUNIT";

const initialState = {
  mainCode: `${MainCodeTemplates.opacity}\ntransition: opacity 1s ease 0s`,
  pseudoCode: PseudoCodeTemplates.opacity,
  transitionType: "opacity",
  duration: 1,
  durationUnit: "s",
  timingFunction: "ease",
  delay: 0,
  delayUnit: "s",
};

const transitionReducer = (state, action) => {
  var mainCode = "";
  var pseudoCode = "";
  switch (action.type) {
    case CHANGECODE:
      mainCode = `
      ${MainCodeTemplates[state.transitionType]};
      ${"\n"}
      transition: ${state.transitionType} ${state.duration}${
        state.durationUnit
      } ${state.timingFunction} ${state.delay}${state.delayUnit};
      `;
      pseudoCode = `${PseudoCodeTemplates[state.transitionType]}`;

      return {
        ...state,
        mainCode: mainCode,
        pseudoCode: pseudoCode,
      };
    case CHANGETYPE:
      return {
        ...state,
        transitionType: action.transitionType,
      };
    case CHANGETFUNCTION:
      return {
        ...state,
        timingFunction: action.tfvalue,
      };
    case CHANGEDURATION:
      return {
        ...state,
        duration: action.duration,
      };
    case CHANGEDELAY:
      return {
        ...state,
        delay: action.delay,
      };
  }
};

const CSSTransitionProvider = (props) => {
  const [state, dispatch] = useReducer(transitionReducer, initialState);

  return (
    <TransitionContext.Provider value={[state, dispatch]}>
      {props.children}
    </TransitionContext.Provider>
  );
};

export default CSSTransitionProvider;
