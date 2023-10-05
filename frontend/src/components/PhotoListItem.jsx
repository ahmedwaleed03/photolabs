import React from "react";
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { dataForPhotoListItem } = props;
  return(
    <div className="photo-list__item">
      <div className="photo-list__fav-button">
        <PhotoFavButton /> 
      </div>
      <img src={dataForPhotoListItem.urls.regular} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={dataForPhotoListItem.user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <div className="photo-list__username">
            {dataForPhotoListItem.user.username}
          </div>
          <div className="photo-list__user-location">
            {dataForPhotoListItem.location.city}, {dataForPhotoListItem.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
