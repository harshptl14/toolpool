import CSSTransitionProvider from "./context/TransitionReducer";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { TransitionContext } from "./context/TransitionContext";
import LabeledInput from "../../../Common/LabeledInput";
import { TypeComponents } from "./TypeComponents";
import { copyToClipboard } from "../../../../static/helpers/helperfunctions";
import ButtonDiv from "../../ButtonDiv";
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

const OutputBox = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.shadeVarient};

  .output {
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color};
    text-align: center;
    color: ${({ theme }) => theme.text};
    ${(props) => props.mainCode}
    ${(props) => props.transitionCode}
  }

  .output:hover {
    ${(props) => props.pseudoCode}
  }
`;

const ResultCodeSection = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  flex-direction: column;

  .desc {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .desc p {
    min-width: max-content;
  }

  .maincode {
    min-width: 100%;
  }

  .code {
    background-color: ${({ theme }) => theme.shadeVarient};
    padding: 1em;
    border-radius: 10px;
    font-weight: 500;
  }
`;

const CSSTransitionsGenerator = (props) => {
  const [state, dispatch] = useContext(TransitionContext);

  // Changing the resultant code whenever a property is changed
  useEffect(() => {
    dispatch({ type: "INITCODE" });
  }, [state.transitionType]);

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

  const mainCopyButtons = [
    {
      key: "1",
      title: "Copy",
      method: () => {
        copyToClipboard(state.mainCode + "\n" + state.transitionCode);
      },
      type: "normal",
    },
  ];

  const pseudoCopyButtons = [
    {
      key: "1",
      title: "Copy",
      method: () => {
        copyToClipboard(state.pseudoCode);
      },
      type: "normal",
    },
  ];

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
        <OutputBox
          mainCode={state.mainCode}
          transitionCode={state.transitionCode}
          pseudoCode={state.pseudoCode}
        >
          <div className="output">Hover me</div>
        </OutputBox>
        <ResultCodeSection>
          <h2>Code</h2>
          <div className="maincode">
            <div className="desc">
              <p>Code for main element</p>
              <ButtonDiv filter={[]} finalButtons={mainCopyButtons} />
            </div>
            <div className="code">
              <div>{state.mainCode}</div>
              <div>{state.transitionCode}</div>
            </div>
          </div>
          <div className="pseudocode">
            <div className="desc">
              <p>Code for pseudo element</p>
              <ButtonDiv filter={[]} finalButtons={pseudoCopyButtons} />
            </div>
            <div className="code">
              <div>{state.pseudoCode}</div>
            </div>
          </div>
        </ResultCodeSection>
      </ResultSection>
    </TranstionParentWrapper>
  );
};

const CSSTransitionsWrapper = (props) => {
  return (
    <CSSTransitionProvider>
      <CSSTransitionsGenerator />
    </CSSTransitionProvider>
  );
};

export default CSSTransitionsWrapper;
