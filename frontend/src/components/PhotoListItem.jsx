//PhotoListItem.jsx
import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photoData }) => {
  return (
    <div className="photo-list-item" key={photoData.id}>
      {/* Render the photo data using props */}
      <img src={photoData.imageSource} alt={`Photo by ${photoData.username}`} />
      <div className="photo-details">
        <p>{photoData.location.city}, {photoData.location.country}</p>
        <p>{photoData.username}</p>
        <img src={photoData.profile} alt={`Profile of ${photoData.username}`} />
      </div>
    </div>
  );
};

export default PhotoListItem;
