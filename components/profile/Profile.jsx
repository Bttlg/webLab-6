import React from "react";
import ReactDom from "react-dom";

import { Link, useParams } from "react-router-dom";

import { AiOutlinePhone } from "react-icons/Ai";

import "./Profile.css";

const Profile = ({ location }) => {
  const userData = location.state.data;
  return (
    <div className="profileContainer">
      <div>
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
          className="coverImage"
        />
      </div>
      <div className="profileColumn-2">
        <img src={userData.picture} alt="" className="userProfileImage" />
        <div className="userAbout">
          <h3 className="userName">{`${userData.lastName} ${userData.firstName}`}</h3>
          <p className="userBio">{userData.title.toUpperCase()}</p>
        </div>
        <div className="editProfile">
          <Link to={`/UserPost/${userData.id}`}>
            <button className="editButton">Пост харах</button>
          </Link>
        </div>
      </div>
      <div className="profileColumn-3">
        <div className="userPhone">
          <AiOutlinePhone className="phoneIcon" /> : 88780778
        </div>
      </div>
    </div>
  );
};

export default Profile;
