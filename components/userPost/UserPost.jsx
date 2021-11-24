import React, { useState, useEffect } from "react";
import "./UserPost.css";

import { useParams } from "react-router-dom";

import axios from "axios";

import { GiEarthAmerica } from "react-icons/Gi";
import { FiMoreHorizontal } from "react-icons/Fi";
import { AiFillLike, AiOutlineLike } from "react-icons/Ai";
import { GoComment } from "react-icons/Go";
import { FaRegShareSquare } from "react-icons/Fa";

const { innerWidth: width, innerHeight: height } = window;

const UserPost = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}/post?limit=10`, {
        headers: { "app-id": "61911adc3864ca518755e018" },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="newsfeedContainer" style={{ width: width }}>
        {data.map((el, index) => {
          return (
            <div className="postContainer" key={el.id}>
              <div className="postTitleContainer">
                <img
                  className="postProfileImage"
                  src={el.owner.picture}
                  alt=""
                />
                <div className="postTitleRow-1">
                  <span className="postProfileName">
                    {`${el.owner.lastName} ${el.owner.firstName}`}
                  </span>
                  <div className="postTitleRow-1-1">
                    <span className="postProfileDate">
                      {`${el.publishDate} `} ·{" "}
                    </span>
                    <GiEarthAmerica className="earthIcon" />
                  </div>
                </div>
                <FiMoreHorizontal className="moreIcon" />
              </div>
              <div className="postBodyContainer">
                <div className="postDescription">{el.text}</div>
                <img src={el.image} alt="" className="postBodyImage" />
                <div className="reactionCountContainer">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "20px",
                    }}
                  >
                    <AiFillLike className="likeIcon" />
                    <div className="likeCount">{el.likes}</div>
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

export default UserPost;
