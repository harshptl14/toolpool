import React, { useEffect } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import PageTitle from "../components/PageTitle";
import Head from "next/head";
import Image from "next/image";
import IconStyle from "../components/Common/IconStyle";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Kofi } from "@styled-icons/simple-icons/Kofi";
import ContactIllustration from "../public/svg/contact.svg";

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
    font-size: var(--fz-sm);
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

const StyledContactIcons = styled.div`
  ${({ theme }) => theme.mixins.flexStart}
  gap: 0.7em;
  margin-top: 0.5em;
`;

const StyledContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 65%;
    margin-top: 0px;
  }

  .contactusCaption {
    font-size: var(--fz-heading);
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
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.descfont};
    font-size: var(--fz-sm);
    /* text-transform: uppercase; */
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

const StyledContactImage = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 600px) {
    display: flex;
    svg {
      height: 320px;
      width: 100%;
    }
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

  const contactDetails = {
    email: "hey.10devs@gmail.com",
    twitter: "https://twitter.com/toolpool_10devs",
    kofi: "https://ko-fi.com/arshpatel",
  };
  return (
    <StyledContactDiv>
      <Head>
        <title>ToolPool - Contact</title>
        <meta
          name="Keywords"
          content="online tools, free online tools, text tools, image tools, developers tools, social media tools, color tools, lorem ipsum, letter count,
          space remover, text to binary, binary to text, unique word, upper case, lower case, image resize, crop image"
        />
        <meta
          name="description"
          content="Contact the developers behind this project"
        />
        <meta property="og:title" content="ToolPool - Contact" />
        <meta
          property="og:description"
          content="Contact the developers behind this project"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://toolpool.cool/assets/posters/posterContact.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://toolpool.cool/assets/posters/posterContact.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content="https://toolpool.cool/contact" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="ToolPool - Contact" />
        <meta
          name="twitter:description"
          content="Contact the developers behind this project"
        />
        <meta
          name="twitter:image"
          content="https://toolpool.cool/assets/posterContact.jpg"
        />
      </Head>
      <StyledHeading>
        <PageTitle size="big">Contact Us</PageTitle>
        <div className="desc">{contactDetails.email}</div>
        <StyledContactIcons>
          <IconStyle padding="0.5rem">
            <Twitter
              width="25px"
              color="#2b7537"
              cursor="pointer"
              onClick={() => window.open(contactDetails.twitter, "_blank")}
            />
          </IconStyle>
          <IconStyle padding="0.5rem">
            <Kofi
              width="35px"
              color="#2b7537"
              cursor="pointer"
              onClick={() => window.open(contactDetails.kofi, "_blank")}
            />
          </IconStyle>
        </StyledContactIcons>
      </StyledHeading>
      <StyledContent onSubmit={handleSubmit}>
        <StyledContactImage>
          <Image src={ContactIllustration} alt="about us" />
        </StyledContactImage>
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
