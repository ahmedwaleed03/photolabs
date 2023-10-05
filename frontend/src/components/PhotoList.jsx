import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoData, index) => (
        <PhotoListItem key={index} dataForPhotoListItem={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
