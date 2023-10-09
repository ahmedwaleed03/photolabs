import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { favourites, addFavourites, removeFavourites, openModal, photos } = props;
  return (
    <ul className="photo-list">
      {photos.map((photoData, index) => (
        <PhotoListItem key={index} dataForPhotoListItem={photoData} favourites={favourites} addFavourites={addFavourites} removeFavourites={removeFavourites}  openModal={openModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
