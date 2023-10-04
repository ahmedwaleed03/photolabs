import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { sampleDataForPhotoListItem } = props;
  return(
    <div className="photo-list__item">
      <img src={sampleDataForPhotoListItem.imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={sampleDataForPhotoListItem.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <div className="photo-list__username">
            {sampleDataForPhotoListItem.username}
          </div>
          <div className="photo-list__user-location">
            {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
