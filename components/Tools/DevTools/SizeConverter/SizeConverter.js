import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as ufun from "./helperFunctions";
import { PencilAlt } from '@styled-icons/heroicons-outline/PencilAlt'
import CustomInput from './CustomInput';

const Styledchip = styled.input`
    padding: 0 25px;
    color: rgba(0, 0, 0, .87);
    align-items: center;
    height: 42px;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
    border-radius: var(--border-circle);
    border-color: ${({ theme }) => theme.shade};
    background-color: ${({ theme }) => theme.toolInput};
    font-size: var(--fz-md);

    :active{
      border: 1px solid ${({ theme }) => theme.color};
      border-radius: var(--border-circle);
      background-color: ${({ theme }) => theme.shade};
      color: ${({ theme }) => theme.color};
    }

`;




const StyledOuterDiv = styled.div`
${({ theme }) => theme.mixins.flexBetween};
gap: 2em;
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textbox};
  font-size: var(--fz-lg);
`;

const StyledOuterChip = styled.ul`
  list-style-type: none;
  margin: 25px 0 0 0;
  padding: 0;
  display: flex;

  li{
    /* float: left; */
    margin: 0 5px 0 0;
    padding: 0 60px;
    height: 40px;
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.text};
    font-size: var(--fz-md);

    /* border: 1px solid ${({ theme }) => theme.border}; */

/* 
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: var(--border-radius);
    padding: 0 4em;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition); */
  }

  
  label, input{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: var(--border-radius);
    /* padding: 0 4em; */
    /* font-size: var(--fz-md);
    font-family: var(--font-mono); */
    /* line-height: 1; */
    /* text-decoration: none; */
    transition: var(--transition);
  }

  input[type="radio"] {
    opacity: 0.01;
    z-index: 100;
}

input[type="radio"]:checked+label,
.Checked+label {
  background: ${({ theme }) => theme.shade};
  color: ${({ theme }) => theme.color};
}

label {
  padding: 5px;
  /* border: 1px solid #CCC; */
  /* cursor: pointer; */
  z-index: 90;


}

li:hover {
  background: ${({ theme }) => theme.shade};
}
`;


const ChipComp = ({ chipName }) => {
  return (

    <label>
      <Styledchip
        type="radio"
        name={chipName}
        value={chipName}
        checked={false}
      />
      {chipName}
    </label>
  )
}

const SizeConverter = () => {
  const [defPixel, setdefPixel] = useState(16);
  const [em, setEM] = useState(null);
  const [px, setPX] = useState(null);
  const [pt, setPT] = useState(null);
  const [pr, setPR] = useState(null);

  const inputpxRef = useRef();
  const inputemRef = useRef();
  const inputptRef = useRef();
  const inputprRef = useRef();
  const defPixRef = useRef();

  useEffect(() => {
    console.log("in useEffect");
  }, [em, px, pt, pr, defPixel]);

  const clearFun = () => {
    setEM("");
    setPX("");
    setPR("");
    setPT("");
  };

  const pxTo = async (pixValue) => {
    if (pixValue !== "") {
      const tempEM = ufun.pxToem(pixValue, setPX, setEM, defPixel);
      ufun.pxTopt(pixValue, setPX, setPT);
      ufun.pxTopr(pixValue, tempEM, setPX, setPR);
    } else {
      clearFun();
    }
  };

  const emTo = (emValue) => {
    if (emValue !== "") {
      ufun.emTopx(emValue, setEM, setPX, defPixel);
      ufun.emTopt(emValue, setEM, setPT);
      ufun.emTopr(emValue, setEM, setPR);
    } else {
      clearFun();
    }
  };

  const ptTo = (ptValue) => {
    if (ptValue !== "") {
      const tempEM = ufun.ptToem(ptValue, setPT, setEM);
      console.log(tempEM);
      ufun.emTopx(tempEM, setEM, setPX, defPixel);
      ufun.emTopr(tempEM, setEM, setPR);
    } else {
      clearFun();
    }
  };

  const prTo = (prValue) => {
    if (prValue !== "") {
      const tempEM = ufun.prToem(prValue, setPR, setEM);
      console.log(tempEM);
      ufun.emTopx(tempEM, setEM, setPX, defPixel);
      ufun.emTopt(tempEM, setEM, setPT);
    } else {
      clearFun();
    }
  };

  const changeDefVal = (defPixValue) => {
    console.log(defPixValue);
    if (defPixValue !== "") {
      setdefPixel(defPixValue);
    } else {
      clearFun();
      setdefPixel("");
      // inputemRef.current.
    }
  };

  return (
    // <div>
    //   {/* <ChipComp chipName="px to em" /> */}
    //   <StyledOuterChip class="donate-now">
    //     <li>
    //       <input type="radio" id="a25" name="amount" />
    //       <label for="a25">EM TO PX</label>
    //     </li>
    //     <li>
    //       <input type="radio" id="a50" name="amount" />
    //       <label for="a50">PT TO PX</label>
    //     </li>
    //   </StyledOuterChip>
    // </div>
    <div>
      <StyledOuterDiv>
          <StyledInput
            placeholder='EM'
            ref={inputemRef}
            onChange={() => emTo(inputemRef.current.value)}
            value={em}
            disabled={defPixel === ""}
            name="input em"
          />
        
        {/* <StyledInput
          placeholder='PX'
          ref={inputpxRef}
          onChange={() => pxTo(inputpxRef.current.value)}
          value={px}
          name="input px"
          disabled={defPixel === ""}
        /> */}

        <CustomInput
          name="PX"
          inputRef={inputpxRef}
          onChangeFun={() => pxTo(inputpxRef.current.value)}
          curValue={px}
          defPixel={defPixel}
        />
        <StyledInput
          placeholder='PT'
          ref={inputptRef}
          onChange={() => ptTo(inputptRef.current.value)}
          value={pt}
          name="input pt"
          disabled={defPixel === ""}
        />
        <StyledInput
          placeholder='PR'
          ref={inputprRef}
          onChange={() => prTo(inputprRef.current.value)}
          value={pr}
          name="input pt"
          disabled={defPixel === ""}
        />

      </StyledOuterDiv>
      <div>
        Base size of fonts is 16px <PencilAlt width="30px" color="#2b7537" />
        <StyledInput
          ref={defPixRef}
          onChange={() => changeDefVal(defPixRef.current.value)}
          value={defPixel}
          name="input default pixel"
        />
      </div>
    </div>
  )
}

export default SizeConverter