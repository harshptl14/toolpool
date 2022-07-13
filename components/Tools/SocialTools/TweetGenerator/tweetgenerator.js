import { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import TweetCard from "./tweetcard";
import DP from "../../../../public/assets/dp.jpeg";
import { Months } from "../../../../static/helpers/helperfunctions";
import { toPng } from "html-to-image";
import ButtonDiv from "../../ButtonDiv";
import { Cross } from "@styled-icons/entypo/Cross";

const StyledFilearea = styled.div`
  --limit-color: ${({ theme }) => theme.hover};
  --default-color: ${({ theme }) => theme.footer};
  ${({ theme }) => theme.mixins.imageUploader} /* width: 100%; */
  input[type="file"] {
    cursor: ${(props) => (props.islimit ? "no-drop" : "pointer")};
  }
  .file-dummy {
    padding: 20px;
    ${({ theme }) => theme.mixins.flexColumn};
    font-size: var(--fz-md);
    gap: 25px;
    padding-top: -10px;
    background-color: ${(props) =>
      props.islimit ? "var(--limit-color)" : "var(--default-color)"};
  }

  .info {
    ${({ theme }) => theme.mixins.flexColumn};
  }

  .uploadInfo {
    color: ${({ theme }) => theme.color};
    font-size: var(--fz-sm);
  }

  @media (min-width: 815px) {
    .info {
      ${({ theme }) => theme.mixins.flexColumnStart};
    }

    .file-dummy {
      padding: 25px;
      gap: 0;
      ${({ theme }) => theme.mixins.flexBetween};
    }
  }
`;

const Tweet = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.shade};
  overflow-x: scroll;
  padding: 30px;
  
  @media (min-width: 800px) {
    padding: 50px;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; 

    ::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
    }
  }

`;

const TweetInputs = styled.div`
  margin-top: 2rem;

  .TImg-previews {
    display: flex;
  }

  .preview-item {
    margin-left: 12px;
    width: 30px;
    height: 30px;
    position: relative;
    /* border: 1px solid ${({ theme }) => theme.color}; */
  }

  .pop {
    ${({ theme }) => theme.mixins.flexCenter};
    width: 20px;
    height: 20px;
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 1000;
    border-radius: 20%;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.shade};
    cursor: pointer;

    :hover {
      border: 1px dashed ${({ theme }) => theme.color};
    }
  }

  @media (min-width: 815px) {
    .TImg-previews {
      margin: -10px;
    }
  }
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textbox};
  width: 100%;
`;

const StyledCheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fz-sm);
  ${({ theme }) => theme.mixins.checkbox}
`;

const StyledImageCollectorDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 20px;

  @media (min-width: 815px) {
    gap: 20px;
    ${({ theme }) => theme.mixins.flexBetween};
  }
`;

const StyledMainInfo = styled.div`
  align-items: flex-start;
  margin: 20px 0;
  gap: 20px;
  ${({ theme }) => theme.mixins.flexColumnStart};

  @media (min-width: 800px) {
    ${({ theme }) => theme.mixins.flexBetween};
    align-items: flex-start;
    height: 230px;
  }
`;

const StyledLeftDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumnStart};
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (min-width: 800px) {
    width: 30%;
    gap: 15px;
    height: 230px;
  }
`;

const StyledRightDiv = styled.div`
  width: 100%;

  @media (min-width: 800px) {
    width: 70%;
    height: 230px;
  }
`;

const StyledStats = styled.div`
  ${({ theme }) => theme.mixins.flexStart};
  width: 100%;
  gap: 15px;
`;

const StyledTextArea = styled.textarea`
  ${({ theme }) => theme.mixins.textarea}
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const StyledInputDate = styled.input`
  appearance: none;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.shade};
  background: ${({ theme }) => theme.shadeBackcard};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color};
  padding: 8px;
  color-scheme: dark;
  width: 100%;

  ::-webkit-datetime-edit-text {
    padding: 0 0.2rem;
  }
  ::-webkit-datetime-edit-month-field {
    text-transform: uppercase;
  }
  ::-webkit-datetime-edit-day-field {
    text-transform: uppercase;
  }
  ::-webkit-datetime-edit-year-field {
    text-transform: uppercase;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(64%) sepia(31%) saturate(845%) hue-rotate(68deg)
      brightness(102%) contrast(82%);
    height: 20px;
    width: 20px;
  }
`;

const TweetGenerator = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [tweetImages, setTweetImages] = useState([]);
  const [name, setName] = useState("Piggy Pomp");
  const [username, setUsername] = useState("piggypomp");
  const [verified, setVerified] = useState(false);
  const [date, setDate] = useState("1s");
  const [tweet, setTweet] = useState("@ToolPool is #love 💚");
  const [likes, setLikes] = useState("");
  const [replies, setReplies] = useState("");
  const [rts, setRts] = useState("");
  const [tweetTheme, setTweetTheme] = useState(false);

  const tweetRef = useRef();

  const handleDownload = async () => {
    toPng(tweetRef.current, { cacheBust: true, width: 670 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "tweet.png";
        link.href = dataUrl;
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filter = [];

  const finalButtons = [
    {
      key: "3",
      title: "Download",
      method: () => handleDownload(),
      type: "submit",
    },
  ];

  return (
    <div>
      <Tweet>
        <TweetCard
          dp={profileImage ?? DP}
          name={name}
          username={username}
          verified={verified}
          date={date}
          tweettext={tweet}
          likes={likes}
          rt={rts}
          reply={replies}
          imgList={tweetImages}
          tTheme={tweetTheme}
          ref={tweetRef}
        />
      </Tweet>
      <TweetInputs>
        {/* Profile image upload field */}
        <StyledImageCollectorDiv>
          <StyledFilearea islimit={profileImage}>
            <input
              type="file"
              placeholder="Profile image"
              required="required"
              accept="image/*"
              id="profilePhoto"
              disabled={profileImage !== null}
              onChange={async (e) => {
                if (!e.target.files || e.target.files.length === 0) {
                  profileImage === null ? setProfileImage(undefined) : {};
                  return;
                }
                var objectUrl = await new Promise((resolve) => {
                  var reader = new FileReader();
                  reader.onload = (e) => resolve(reader.result);
                  reader.readAsDataURL(e.target.files[0]);
                });
                setProfileImage(objectUrl);
                // setProfileImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div className="file-dummy">
              <div className="info">
                Profile(Avatar) Image
                <div className="uploadInfo">Click/drag to upload</div>
              </div>
              {profileImage === null ? (
                <div></div>
              ) : (
                <div className="TImg-previews">
                  <div className="preview-item">
                    <Image
                      src={profileImage}
                      // alt={index}
                      width="50px"
                      height="50px"
                    />
                    <div
                      className="pop"
                      onClick={() => {
                        setProfileImage(null);
                        console.log(profileImage);
                      }}
                    >
                      <Cross size="15" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </StyledFilearea>
          {/* Tweet images upload field */}
          <StyledFilearea islimit={tweetImages.length === 4}>
            <input
              id="uploadedImages"
              placeholder="Uploaded Images"
              type="file"
              name="images"
              accept="image/*"
              multiple="multiple"
              disabled={tweetImages.length === 4}
              onChange={async (e) => {
                if (!e.target.files || e.target.files.length === 0) {
                  return;
                }
                var len = e.target.files.length > 4 ? 4 : e.target.files.length;
                var imgStack = [];
                var imgUrl;

                // console.log();

                // if (tweetImages.length > 0) {
                //   len = 4 - tweetImages.length;
                // }

                if (tweetImages.length === 0) {
                  for (var i = 0; i < len; i++) {
                    // imgUrl = URL.createObjectURL(e.target.files[i]);
                    imgUrl = await new Promise((resolve) => {
                      var reader = new FileReader();
                      reader.onload = (e) => resolve(reader.result);
                      reader.readAsDataURL(e.target.files[i]);
                    });
                    imgStack.push(imgUrl);
                  }
                  setTweetImages(imgStack);
                  return;
                } else {
                  for (var i = 0; i < len; i++) {
                    // imgUrl = URL.createObjectURL(e.target.files[i]);
                    imgUrl = await new Promise((resolve) => {
                      var reader = new FileReader();
                      reader.onload = (e) => resolve(reader.result);
                      reader.readAsDataURL(e.target.files[i]);
                    });
                    imgStack.push(imgUrl);
                  }
                  setTweetImages((timgs) => timgs.concat(imgStack));
                  return;
                }
              }}
            />
            <div className="file-dummy">
              <div className="info">
                Tweet Images (Up to 4)
                <div className="uploadInfo">Click/drag to upload</div>
              </div>
              <div className="TImg-previews">
                {tweetImages.map((item, index) => {
                  return (
                    <div className="preview-item" key={index}>
                      <Image
                        src={item}
                        alt={index}
                        width="50px"
                        height="50px"
                      />
                      <div
                        className="pop"
                        onClick={() => {
                          setTweetImages(
                            tweetImages.filter((data, i) => i !== index)
                          );
                        }}
                      >
                        <Cross size="15" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </StyledFilearea>
        </StyledImageCollectorDiv>
        {/* Small previews of tweet images with remove option */}
        <StyledMainInfo>
          {/* input for name */}
          <StyledLeftDiv>
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              onInput={(e) => {
                setName(e.target.value);
              }}
            />
            {/* input for username */}
            <StyledInput
              type="text"
              name="username"
              placeholder="Username"
              onInput={(e) => setUsername(e.target.value)}
            />
            {/* checkbox for verified */}
            <StyledCheckboxDiv>
              <input
                type="checkbox"
                name="verified"
                onInput={(e) => setVerified(!verified)}
              />
              <label>Verified</label>
              <input
                type="checkbox"
                name="theme"
                onInput={(e) => setTweetTheme(!tweetTheme)}
              />
              <label>Dark Theme</label>
            </StyledCheckboxDiv>
            {/* input for date */}
            <StyledInputDate
              type="datetime-local"
              name="date"
              onInput={(e) => {
                const d = new Date(e.target.value);
                setDate(
                  `${d.getDate()} ${Months[d.getMonth()]} ${d.getFullYear()}`
                );
              }}
            />

            <StyledStats>
              <StyledInput
                type="number"
                name="reply"
                placeholder="Replies"
                onInput={(e) => setReplies(e.target.value)}
              />
              <StyledInput
                type="number"
                name="rt"
                placeholder="Retweets"
                onInput={(e) => setRts(e.target.value)}
              />
              <StyledInput
                type="number"
                name="like"
                placeholder="Likes"
                onInput={(e) => setLikes(e.target.value)}
              />
            </StyledStats>
          </StyledLeftDiv>
          <StyledRightDiv>
            {/* input for tweet text */}
            <StyledTextArea
              type="text"
              name="tweettext"
              placeholder="Tweet (max. 280 characters)"
              maxLength={280}
              onInput={(e) => setTweet(e.target.value)}
            />
          </StyledRightDiv>
        </StyledMainInfo>

        <ButtonDiv filter={filter} finalButtons={finalButtons} />
      </TweetInputs>
    </div>
  );
};

export default TweetGenerator;
