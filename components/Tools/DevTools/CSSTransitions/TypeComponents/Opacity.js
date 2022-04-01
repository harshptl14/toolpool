import { useContext } from "react";
import styled from "styled-components";
import LabeledInput from "../../../../Common/LabeledInput";
import { TransitionContext } from "../context/TransitionContext";
const Wrapper = styled.div`
  width: 100%;
`;

const SlidersSection = styled.div`
  ${({ theme }) => theme.mixins.slider}
  ${({ theme }) => theme.mixins.flexColumnStart}
  min-width: 100%;

  .sliderTitle {
    font-size: var(--fz-sm);
  }

  .bubble {
    font-size: var(--fz-sm);
    color: ${({ theme }) => theme.color};
  }

  @media (min-width: 800px) {
    flex: 1 0 fill;
    align-items: stretch;
    width: 50%;

    .sliderTitle {
      font-size: var(--fz-md);
    }
  }
`;

const SliderDiv = styled.div`
  width: 100%;
  margin-top: 15px;

  @media (min-width: 800px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const OpacityInputs = () => {
  const [state, dispatch] = useContext(TransitionContext);

  const onInitOpacityChangeHandler = (e) => {
    const mainCode = `
    opacity: ${e.target.value};
    `;
    dispatch({ type: "CHANGEMAINCODE", mainCode: mainCode });
  };

  const onPseudoOpacityChangeHandler = (e) => {
    console.log(e.target.value);
    const pseudoCode = `
    opacity: ${e.target.value};
    `;
    dispatch({ type: "CHANGEPSEUDOCODE", pseudoCode: pseudoCode });
  };

  return (
    <Wrapper>
      <SlidersSection>
        <SliderDiv>
          <LabeledInput label="Initial opacity">
            <input
              type="range"
              name="initOpacity"
              className="slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={0.5}
              onChange={onInitOpacityChangeHandler}
            />
            {/* <div className="bubble">{"ded"}</div> */}
          </LabeledInput>
        </SliderDiv>
        <SliderDiv>
          <LabeledInput label="New opacity">
            <input
              type="range"
              name="newOpacity"
              className="slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={1}
              onChange={onPseudoOpacityChangeHandler}
            />
            {/* <div className="bubble">{"ded"}</div> */}
          </LabeledInput>
        </SliderDiv>
      </SlidersSection>
    </Wrapper>
  );
};

export default OpacityInputs;
