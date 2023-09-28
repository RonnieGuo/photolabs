import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList'; 

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__icons">
        <div className="top-nav-bar__icon">
          <i className="fas fa-heart"></i>
          <FavBadge count={0} /> 
        </div>
        <div className="top-nav-bar__icon">
          <i className="fas fa-th"></i>
          <TopicList /> 
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;