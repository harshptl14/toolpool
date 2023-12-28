import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const StyledCouterOuterDiv = styled.div`
  /* display: flex; */
  ${({ theme }) => theme.mixins.flexColumnSpacebetween}
  gap: 1em;
  width: 100%;
  margin-top: 1em;

  @media (min-width: 600px) {
    ${({ theme }) => theme.mixins.flexBetween}
  }
`;

const StyledCounterDiv = styled.div`
  text-align: center;
  width: 100%;
  padding: 30px;
  background: ${({ theme }) => theme.shade};
  transition: var(--easing);
  font-size: var(--fz-md);
  color: ${({ theme }) => theme.descfont};
`;

const Counter = styled.div`
  font-size: var(--fz-heading);
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  margin-bottom: 10px;
`;

const LetterCounter = () => {
  // const { handleChange, letterCount, inputString } =
  //   UseLetterCountHook(wordCounter, sentenceCounter, letterCounter);

  const [input, setInput] = useState("");
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [input]);

  const wordCounter = () => {
    const wordCount = input.split(" ").length;
    return input === "" ? wordCount - 1 : wordCount;
  };

  const sentenceCounter = () => {
    const re = /[.!?]/;
    const numOfSentences = input.split(re);
    return numOfSentences.length - 1;
  };

  const letterCounter = () => {
    const letterCount = input.split("").length;
    return letterCount;
  };

  return (
    <div>
      <form>
        <StyledTextArea
          type="text"
          id="inputString"
          name="inputString"
          cols="90"
          rows="13"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <StyledCouterOuterDiv>
          <StyledCounterDiv>
            <Counter>{wordCounter()}</Counter>
            Word
          </StyledCounterDiv>
          <StyledCounterDiv>
            <Counter>{sentenceCounter()}</Counter>
            Sentence
          </StyledCounterDiv>
          <StyledCounterDiv>
            <Counter> {letterCounter()}</Counter>
            Character
          </StyledCounterDiv>
        </StyledCouterOuterDiv>
      </form>
    </div>
  );
};

export default LetterCounter;
