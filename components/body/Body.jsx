import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import { GiEarthAmerica } from "react-icons/Gi";
import { FiMoreHorizontal } from "react-icons/Fi";
import { AiFillLike, AiOutlineLike } from "react-icons/Ai";
import { GoComment } from "react-icons/Go";
import { FaRegShareSquare } from "react-icons/Fa";

import axios from "axios";

import "./Body.css";
const Body = () => {
  const [dataArr, setDataArr] = useState([1, 2, 3]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?limit=10")
      .then((response) => {
        // setDataArr(response.data.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeFocus = () => {
    document.querySelector(".firstChild").classList.remove("focus");
  };

  return (
    <div>
      <div className="newsfeedContainer">
        {dataArr.map((el, index) => {
          return (
            <div className="postContainer" key={index}>
              <div className="postTitleContainer">
                <Link to="/Profile">
                  <img
                    className="postProfileImage"
                    src="https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/251790235_282500163768706_8484372885486565698_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=rExSB-jw43MAX_ukaFO&_nc_ht=scontent.fuln1-2.fna&oh=87d5d11a64597a7995341504330159b7&oe=61B26231"
                    alt=""
                    onClick={removeFocus}
                  />
                </Link>
                <div className="postTitleRow-1">
                  <span className="postProfileName">
                    Дээврийн өрөөн дэх тэмдэглэл
                  </span>
                  <div className="postTitleRow-1-1">
                    <span className="postProfileDate">
                      November 5 at 7:59 PM ·{" "}
                    </span>
                    <GiEarthAmerica className="earthIcon" />
                  </div>
                </div>
                <FiMoreHorizontal className="moreIcon" />
              </div>
              <div className="postBodyContainer">
                <div className="postDescription">
                  ..өөр ертөнцийн замчлагч гараа сунгавал чангахан хөтөлнө..
                </div>
                <img
                  src="https://scontent.fuln1-2.fna.fbcdn.net/v/t1.6435-9/253385749_285274640157925_6795512457734304217_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WtLXXPAFSpwAX_a-idM&_nc_ht=scontent.fuln1-2.fna&oh=b9f7b51a3e86b2ece616c3de76be3f3d&oe=61B2A5CD"
                  alt=""
                  className="postBodyImage"
                />
                <div className="reactionCountContainer">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "20px",
                    }}
                  >
                    <AiFillLike className="likeIcon" />
                    <div className="likeCount">1.5K</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                    }}
                  >
                    <div className="commentCount">341</div>
                    <div className="comment">Comments</div>
                  </div>
                </div>
                <div className="reactionContainer">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <AiOutlineLike className="reactLikeIcon" />
                    <div className="reactLike">Like</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <GoComment className="commentIcon" />
                    <div className="reactComment">Comment</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaRegShareSquare className="shareIcon" />
                    <div className="reactShare">Share</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
