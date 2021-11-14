import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsFillBellFill, BsMessenger } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineHome,
  AiFillCaretDown,
} from "react-icons/Ai";
import { FiUsers } from "react-icons/Fi";
import { MdOutlineOndemandVideo } from "react-icons/Md";
import { HiOutlineUserGroup } from "react-icons/Hi";
import { CgMenuGridO } from "react-icons/cg";

import "./Navbar.css";

const Navbar = () => {
  const homeFocus = () => {
    var select = document.querySelector(".firstChild");
    select.classList.add("focus");
  };
  return (
    <div className="navbarContainer">
      <div className="row-1">
        <BsFacebook className="facebookIcon" />
        <div className="searchContainer">
          <AiOutlineSearch className="searchIcon" />
          <input
            type="search"
            className="searchInput"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="row-2">
        <Link
          to="/Body"
          className="iconItems firstChild focus"
          onClick={homeFocus}
        >
          <AiOutlineHome className="homeIcon" />
        </Link>

        <div className="iconItems">
          <FiUsers className="friendIcon" />
        </div>
        <div className="iconItems">
          <MdOutlineOndemandVideo className="videoIcon" />
        </div>
        <div className="iconItems">
          <AiOutlineShop className="shopIcon" />
        </div>
        <div className="iconItems">
          <HiOutlineUserGroup className="groupIcon" />
        </div>
      </div>
      <div className="row-3">
        <div className="profile">
          <img
            src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/243952068_176293694635186_7633966180256714058_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ZEwZEwCoPEkAX810T0M&_nc_ht=scontent.fuln4-1.fna&oh=c8365b73bb5c4b7bb316cc5adf11c4de&oe=61B229C2"
            alt="profilePic"
            className="profilePic"
          />
          <p className="profileName">Бат</p>
        </div>
        <CgMenuGridO className="menuIcon" />
        <BsMessenger className="messengerIcon" />
        <BsFillBellFill className="notificationIcon" />
        <AiFillCaretDown className="settingsIcon" />
      </div>
    </div>
  );
};

export default Navbar;
