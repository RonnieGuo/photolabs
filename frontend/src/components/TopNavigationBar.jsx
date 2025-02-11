import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigationBar = (props) => (
  <div className="top-nav-bar">
    <span className="top-nav-bar__logo">PhotoLabs</span>
    <div className="nav-topic">
      <TopicList {...props} />
    </div>
    <div className="nav-badge">
      <FavBadge count={props.favouriteList?.length} />
    </div>
  </div>
);

export default TopNavigationBar;
