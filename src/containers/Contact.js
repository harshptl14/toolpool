import React, {useEffect} from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import PageTitle from "../components/PageTitle";
import { ReactComponent as ContactPC } from "../static/svg/contact.svg";
import { ReactComponent as ContactMobile } from "../static/svg/contactMobile.svg";

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

const StyledContactPC = styled.div`
  display: none;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    display: flex;
    svg {
      height: 320px;
      width: 100%;
    }
  }
`;

const StyledContactMobile = styled.div`
  display: flex;
  svg {
    height: 400px;
    width: 100%;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const Contact = () => {
  const {
    value: firstName,
    bind: bindName,
    reset: resetFirstName,
  } = useInput("");

  const {
    value: subject,
    bind: bindSubject,
    reset: resetSubject,
  } = useInput("");

  const {
    value: message,
    bind: bindMessage,
    reset: resetMessage,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.open(
      `mailto:octruszamp@gmail.com?subject=${subject}&body=Hey%20${firstName}%20here,%0D%0A${message}`
    );
    resetFirstName();
    resetSubject();
    resetMessage();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledContactDiv>
      <StyledHeading>
        <PageTitle size="big">Contact Us</PageTitle>
        <div className="desc">octruszamp@gmail.com</div>
      </StyledHeading>
      <StyledContent onSubmit={handleSubmit}>
        <StyledContactPC>
          <ContactPC />
        </StyledContactPC>
        <StyledContactMobile>
          <ContactMobile />
        </StyledContactMobile>
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
              placeholder="Subject"
              name="subject"
              id="subject"
              required
              {...bindSubject}
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
