import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledOutput } from "../../StyledOutput";

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
`;

const StyledCouterOuterDiv = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 0%;
  justify-content: space-between;
`;

const StyledCounterDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  text-align: center;
  width: 32%;
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
