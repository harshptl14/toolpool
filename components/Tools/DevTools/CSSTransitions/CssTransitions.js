import CSSTransitionProvider from "./context/TransitionReducer";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { TransitionContext } from "./context/TransitionContext";
import LabeledInput from "../../../Common/LabeledInput";
import { TypeComponents } from "./TypeComponents";

// CSS code generator for various transition animations
const TranstionParentWrapper = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputSection = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const ResultSection = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  font-size: var(--fz-md);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CSSTransitions = (props) => {
  const [state, dispatch] = useContext(TransitionContext);

  // Changin the resultant code whenever a property is changed
  useEffect(() => {
    dispatch({ type: "CHANGECODE" });
  }, [
    state.transitionType,
    state.duration,
    state.delay,
    state.timingFunction,
    state.delay,
  ]);

  const onTypeSelect = (e) => {
    console.log(e.target.value);
    dispatch({ type: "CHANGETYPE", transitionType: e.target.value });
  };

  const onTFSelect = (e) => {
    console.log(e.target.value);
    dispatch({ type: "CHANGETFUNCTION", tfvalue: e.target.value });
  };

  const onDurationChange = (e) => {
    dispatch({ type: "CHANGEDURATION", duration: e.target.value });
  };

  const onDelayChange = (e) => {
    dispatch({ type: "CHANGEDELAY", delay: e.target.value });
  };

  return (
    <TranstionParentWrapper>
      <InputSection>
        <LabeledInput label="Type">
          <select name="type" onChange={onTypeSelect}>
            <option value="opacity">Opacity</option>
            <option value="background-color">Background color</option>
            <option value="width">Width</option>
            <option value="height">Height</option>
            <option value="outline">Outline</option>
          </select>
        </LabeledInput>
        {/* Component to take input for specific types */}
        {TypeComponents[state.transitionType]}
        <LabeledInput label="Duration">
          <input
            type="number"
            name="duration"
            placeholder="In seconds"
            onChange={onDurationChange}
          />
        </LabeledInput>
        <LabeledInput label="Timing Function">
          <select name="type" onChange={onTFSelect}>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
            <option value="linear">linear</option>
          </select>
        </LabeledInput>
        <LabeledInput label="Delay">
          <input
            type="number"
            name="delay"
            placeholder="In seconds"
            onChange={onDelayChange}
          />
        </LabeledInput>
      </InputSection>
      <ResultSection>
        {state.mainCode}
        <br />
        {state.pseudoCode}
      </ResultSection>
    </TranstionParentWrapper>
  );
};

const CSSTransitionsWrapper = (props) => {
  return (
    <CSSTransitionProvider>
      <CSSTransitions />
    </CSSTransitionProvider>
  );
};

export default CSSTransitionsWrapper;
