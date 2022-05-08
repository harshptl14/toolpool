import styled from "styled-components";
import LabeledInput from "./LabeledInput";

const SlidersSection = styled.div`
  ${({ theme }) => theme.mixins.slider}
  ${({ theme }) => theme.mixins.flexColumnStart}
  height:max-content;
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
  margin-top: 5px;

  @media (min-width: 800px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Slider = (props) => {
  return (
    <SlidersSection>
      <SliderDiv>
        <LabeledInput label={props.label}>
          <input
            type="range"
            className="slider"
            min={props.min}
            max={props.max}
            step={props.step}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
          />
        </LabeledInput>
      </SliderDiv>
    </SlidersSection>
  );
};

export default Slider;
