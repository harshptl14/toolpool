import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import PageTitle from "../components/PageTitle";

const StyledContactDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn}
  align-items: flex-start;

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween}
    align-items: flex-start;
  }
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .desc {
    color: ${({ theme }) => theme.descfont};
    font-size: var(--fz-lg);
    margin-top: 10px;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1000px) {
    position: sticky;
    top: 4.4rem;
    width: 30%;
  }
`;

const StyledContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  @media (min-width: 600px) {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width: 1000px) {
    width: 65%;
    margin-top: 0px;
  }

  .contactusCaption {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 13px;
  }

  .app-form-group {
    margin: 30px 0px;
  }

  .app-form-group.message {
    margin-top: 40px;
  }

  .app-form-group.buttons {
    margin-bottom: 0;
    text-align: right;
  }

  .app-form-control {
    width: 100%;
    padding: 20px 0;
    background: none;
    border: none;
    border-bottom: 1px solid rgb(206, 206, 206);
    color: ${({ theme }) => theme.descfont};
    font-size: 16px;
    /* text-transform: uppercase; */
    font-family: "spartan", sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }

  .app-form-control::placeholder {
    color: rgb(185, 185, 185);
  }

  .app-form-control:focus {
    border-bottom-color: ${({ theme }) => theme.color};
  }

  .allToolsButton {
    ${({ theme }) => theme.mixins.smallButtonFilled}
  }
`;

const Contact = () => {
  const {
    value: firstName,
    bind: bindName,
    reset: resetFirstName,
  } = useInput("");

  const {
    value: email,
    bind: bindEmail,
    reset: resetLastName,
  } = useInput("");

  const {
    value: message,
    bind: bindMessage,
    reset: resetMessage,
    } = useInput("");
    
  const handleSubmit = (evt) => {
    evt.preventDefault();
      window.open(
        `mailto:email@example.com?subject=${firstName}%20is%20trying%20to%20contact&body=${message}`
      );
    resetFirstName();
      resetLastName();
      resetMessage();
  };

  return (
    <StyledContactDiv>
      <StyledHeading>
        <PageTitle>Contact Us</PageTitle>
        <div className="desc">toolpool@gmail.com</div>
      </StyledHeading>
      <StyledContent onSubmit={handleSubmit}>
        <div className="contactusCaption">
          Have an inquiry or some feedback for us?
        </div>
        <div>Fill out the form below to contact.</div>
        <div>
          <div className="app-form-group">
            <input
              className="app-form-control"
              placeholder="Name"
              name="name"
              id="name"
              required
              {...bindName}
            />
          </div>
          <div className="app-form-group">
            <input
              className="app-form-control"
              placeholder="Email"
              name="email"
              id="email"
              required
              {...bindEmail}
            />
          </div>
          <div className="app-form-group message">
            <input
              className="app-form-control"
              placeholder="Message"
              name="message"
              id="message"
              required
              {...bindMessage}
            />
          </div>
          <button className="allToolsButton">SEND</button>
        </div>
      </StyledContent>
    </StyledContactDiv>
  );
};

export default Contact;
