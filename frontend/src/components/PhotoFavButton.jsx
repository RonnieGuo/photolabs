import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

// component for photofavbutton
function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={() => props.toggleFavourite(props.id)}>
          <FavIcon selected={props.favouriteList.includes(props.id)} />{" "}
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;