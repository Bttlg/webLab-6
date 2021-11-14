import React from "react";
import ReactDOM from "react-dom";

import "./Header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import Body from "../body/Body";

const Header = () => {
  return (
    <div className="headerContainer">
      <HashRouter component={Body}>
        <Navbar />
        <div className="componentContainer">
          <Switch>
            <Route path="/Body" component={Body} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Route path="/Profile" component={Profile} />
            </div>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default Header;
