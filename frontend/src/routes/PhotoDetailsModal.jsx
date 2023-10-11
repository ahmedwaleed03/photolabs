import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhoto, favourites, addFavourites, removeFavourites } = props;
  let photos = null;
  let isFav = false;

  if (selectedPhoto) {
    photos = Object.values(selectedPhoto.similar_photos);
    isFav = favourites.some((photo) => photo.id === selectedPhoto.id);
  } else {
    photos = favourites;
  }
  
  const handleFavClick = () => {
    if (isFav) {
      removeFavourites(selectedPhoto);
    } else {
      addFavourites(selectedPhoto)
    }
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
      <div className="photo-details-modal__images ">
        <div className="photo-list__fav-button">
          <PhotoFavButton onClick={handleFavClick} isFav={isFav} />
        </div>
        <img src={selectedPhoto.urls.full} className="photo-details-modal__image"/>
          <div className="photo-details-modal__photographer-details">
            <img src={selectedPhoto.user.profile} className="photo-details-modal__photographer-profile"/>
            <div className="photo-details-modal__photographer-info">
              <div className="photo-details-modal__photographer-name">
                {selectedPhoto.user.name}
              </div>
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      )}
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__images">
          <PhotoList
            openModal={null}
            favourites={favourites} 
            addFavourites={addFavourites} 
            removeFavourites={removeFavourites}
            photos={photos}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;