import React from "react";

import "./Profile.css";

const Profile = () => {
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
        <img
          src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.6435-9/117166564_201615918066148_461168283158008667_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G_MQL2pZJG8AX8Y__2N&_nc_oc=AQmHFMEDcl6TMJ83RGuMzuZ75qIjDzQ_V3YAcoCBXEKX_BJ_sJNq9DwlKYaowqSBrNk&_nc_ht=scontent.fuln8-1.fna&oh=31b8405a62a7c79e8dde509625c2b1aa&oe=61B21EE6"
          alt=""
          className="userProfileImage"
        />
        <div className="userAbout">
          <h3 className="userName">Мөнх Сувд</h3>
          <p className="userBio">Хамгийн сайхан нь...</p>
        </div>
        <div className="editProfile">
          <button className="editButton">Edit Profile</button>
        </div>
      </div>

      {/* <div className="profileColumn-2">
        <img
          src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.6435-9/117166564_201615918066148_461168283158008667_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G_MQL2pZJG8AX8Y__2N&_nc_oc=AQmHFMEDcl6TMJ83RGuMzuZ75qIjDzQ_V3YAcoCBXEKX_BJ_sJNq9DwlKYaowqSBrNk&_nc_ht=scontent.fuln8-1.fna&oh=31b8405a62a7c79e8dde509625c2b1aa&oe=61B21EE6"
          alt=""
          className="userProfileImage"
        />
        <div className="profileNameContainer">
          <p className="aboutUser">Овог : Хүрэлбаатар</p>

          <p className="aboutUser">Нэр : Мөнхсувд</p>
          <p className="aboutUser">Утас : 94794205</p>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
