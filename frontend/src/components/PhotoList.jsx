import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"

const PhotoList = (props) => {
  const { favourites, changeFavourites } = props;
  return (
    <ul className="photo-list">
      {photos.map((photoData, index) => (
        <PhotoListItem key={index} dataForPhotoListItem={photoData} favourites={favourites} changeFavourites={changeFavourites} />
      ))}
    </ul>
  );
};

export default PhotoList;
