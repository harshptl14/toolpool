import { useState, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import TweetCard from "./tweetcard";
import TestImg1 from "../../../../public/assets/posters/posterToolpool.jpg";
import TestImg2 from "../../../../public/assets/posters/posterWhitespace.jpg";
import TestImg3 from "../../../../public/assets/posters/posterLoremipsum.jpg";
import TestImg4 from "../../../../public/assets/posters/posterLettercounter.jpg";
import DP from "../../../../public/assets/dp.jpeg";
import { Months } from "../../../../static/helpers/helperfunctions";
import { toPng } from "html-to-image";

const MainDiv = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  width: 100%;
  height: max-content;
`;

const Tweet = styled.div`
  width: 100%;
`;

const TweetInputs = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn}
  margin-top:2rem;

  .TImg-previews {
    display: flex;
  }

  .preview-item {
    width: 50px;
    height: 50px;
    position: relative;
  }

  .pop {
    width: 20px;
    height: 20px;
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 1000;
    background-color: red;
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
  const [likes, setLikes] = useState();
  const [replies, setReplies] = useState();
  const [rts, setRts] = useState();

  const tweetRef = useRef();

  const handleDownload = async () => {
    toPng(tweetRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "tweet.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainDiv>
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
          ref={tweetRef}
        />
      </Tweet>
      <TweetInputs>
        {/* Profile image upload field */}
        <div className="actions">
          <button onClick={handleDownload}>Download</button>
        </div>
        <input
          type="file"
          placeholder="Profile image"
          accept="image/*"
          onChange={(e) => {
            if (!e.target.files || e.target.files.length === 0) {
              setProfileImage(undefined);
              return;
            }
            // var reader = new FileReader();
            // reader.onload = function () {
            //   var dataURL = reader.result;
            //   setProfileImage(dataURL);
            // };
            // reader.readAsDataURL(e.target.files[0]);
            setProfileImage(window.URL.createObjectURL(e.target.files[0]));
          }}
        />
        {/* Tweet images upload field */}
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple="multiple"
          disabled={tweetImages.length === 4}
          onChange={(e) => {
            if (!e.target.files || e.target.files.length === 0) {
              return;
            }
            var len = e.target.files.length > 4 ? 4 : e.target.files.length;
            var imgStack = [];
            var imgUrl;

            if (tweetImages.length === 0) {
              for (var i = 0; i < len; i++) {
                imgUrl = window.URL.createObjectURL(e.target.files[i]);
                imgStack.push(imgUrl);
              }
              setTweetImages(imgStack);
              return;
            } else {
              for (var i = 0; i < len; i++) {
                imgUrl = window.URL.createObjectURL(e.target.files[i]);
                imgStack.push(imgUrl);
              }
              setTweetImages(tweetImages.concat(imgStack));
              return;
            }
          }}
        />
        {/* Small previews of tweet images with remove option */}
        <div className="TImg-previews">
          {tweetImages.map((item, index) => {
            return (
              <div className="preview-item" key={index}>
                <Image src={item} alt={index} width="50px" height="50px" />
                <div
                  className="pop"
                  onClick={() => {
                    setTweetImages(
                      tweetImages.filter((data, i) => i !== index)
                    );
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        {/* input for name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
        {/* input for username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onInput={(e) => setUsername(e.target.value)}
        />
        {/* checkbox for verified */}
        <div>
          <input
            type="checkbox"
            name="verified"
            onInput={(e) => setVerified(!verified)}
          />
          <label>Verified</label>
        </div>
        {/* input for date */}
        <input
          type="datetime-local"
          name="date"
          onInput={(e) => {
            const d = new Date(e.target.value);
            setDate(
              `${d.getDate()} ${Months[d.getMonth()]} ${d.getFullYear()}`
            );
          }}
        />
        {/* input for tweet text */}
        <input
          type="text"
          name="tweettext"
          placeholder="Tweet"
          onInput={(e) => setTweet(e.target.value)}
        />
        <div>
          <input
            type="number"
            name="reply"
            placeholder="Replies"
            onInput={(e) => setReplies(e.target.value)}
          />
          <input
            type="number"
            name="rt"
            placeholder="Retweets"
            onInput={(e) => setRts(e.target.value)}
          />
          <input
            type="number"
            name="like"
            placeholder="Likes"
            onInput={(e) => setLikes(e.target.value)}
          />
        </div>
      </TweetInputs>
    </MainDiv>
  );
};

export default TweetGenerator;
