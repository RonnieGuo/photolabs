import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, updateFavouritedPhotoIDs, updateModalData, photoIDs }) => {
  return (
    <ul className="photo-list">
      {photos && photos.map((item) => (
        <li key={item.id}>
          <PhotoListItem
            item={item}
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
            updateModalData={updateModalData}
            photoIDs={photoIDs}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
