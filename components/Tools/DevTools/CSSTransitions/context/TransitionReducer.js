import { useReducer } from "react";
import { MainCodeTemplates, PseudoCodeTemplates } from "./CodeTemplates";
import { TransitionContext } from "./TransitionContext";

const INITCODE = "INITCODE";
const CHANGETYPE = "CHANGETYPE";
const CHANGEDURATION = "CHANGEDURATION";
const CHANGEDUNIT = "CHANGEDUNIT";
const CHANGETFUNCTION = "CHANGETFUNCTION";
const CHANGEDELAY = "CHANGEDELAY";
const CHANGEDLUNIT = "CHANGEDLUNIT";
const CHANGEMAINCODE = "CHANGEMAINCODE";
const CHANGEPSEUDOCODE = "CHANGEPSEUDOCODE";

const initialState = {
  mainCode: "",
  pseudoCode: "",
  transitionCode: "",
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
  var tCode = "";
  switch (action.type) {
    case INITCODE:
      mainCode = `${MainCodeTemplates[state.transitionType]}`;
      tCode = `transition: ${state.transitionType} ${state.duration}${state.durationUnit} ${state.timingFunction} ${state.delay}${state.delayUnit};`;
      pseudoCode = `${PseudoCodeTemplates[state.transitionType]}`;
      return {
        ...state,
        mainCode: mainCode,
        pseudoCode: pseudoCode,
        transitionCode: tCode,
      };
    case CHANGEMAINCODE:
      mainCode = action.mainCode;
      return {
        ...state,
        mainCode: mainCode,
      };
    case CHANGEPSEUDOCODE:
      pseudoCode = action.pseudoCode;
      return {
        ...state,
        pseudoCode: action.pseudoCode,
      };
    case CHANGETYPE:
      tCode = `\ntransition: ${action.transitionType} ${state.duration}${state.durationUnit} ${state.timingFunction} ${state.delay}${state.delayUnit};`;
      return {
        ...state,
        transitionType: action.transitionType,
        transitionCode: tCode,
      };
    case CHANGETFUNCTION:
      tCode = `\ntransition: ${state.transitionType} ${state.duration}${state.durationUnit} ${action.tfvalue} ${state.delay}${state.delayUnit};`;
      return {
        ...state,
        timingFunction: action.tfvalue,
        transitionCode: tCode,
      };
    case CHANGEDURATION:
      tCode = `\ntransition: ${state.transitionType} ${action.duration}${state.durationUnit} ${state.timingFunction} ${state.delay}${state.delayUnit};`;
      return {
        ...state,
        duration: action.duration,
        transitionCode: tCode,
      };
    case CHANGEDELAY:
      tCode = `\ntransition: ${state.transitionType} ${state.duration}${state.durationUnit} ${state.timingFunction} ${action.delay}${state.delayUnit};`;
      return {
        ...state,
        delay: action.delay,
        transitionCode: tCode,
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
