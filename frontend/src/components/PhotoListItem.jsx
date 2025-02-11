import React from "react";
import PhotoFavButton from './PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { dataForPhotoListItem, favourites, addFavourites, removeFavourites, openModal } = props;
  
  const isFav = favourites.some((photo) => photo.id === dataForPhotoListItem.id);
 
  const handleFavClick = () => {
    if (isFav) {
      removeFavourites(dataForPhotoListItem);
    } else {
      addFavourites(dataForPhotoListItem)
    }
  };

  return(
    <div className="photo-list__item">
      <div className="photo-list__fav-button">
        <PhotoFavButton onClick={handleFavClick} isFav={isFav} />
      </div>
      <img src={dataForPhotoListItem.urls.regular} className="photo-list__image" onClick={() => openModal && openModal(dataForPhotoListItem)}/>
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