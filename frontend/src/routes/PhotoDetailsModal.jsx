import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhoto, favourites, changeFavourites } = props;

  const similarPhotos = Object.values(selectedPhoto.similar_photos);

  const handleFavClick = () => {
    changeFavourites(selectedPhoto);
  };

  const isFav = favourites.some((photo) => photo.id === selectedPhoto.id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
        <div className="photo-details-modal__header">
          <PhotoListItem
            dataForPhotoListItem={selectedPhoto}
            favourites={favourites}
            changeFavourites={changeFavourites}
            openModal={null}
          />
        </div>
      )}
      <div className="photo-details-modal__header">
        <p>Similar Photos</p>
        <div className="photo-details-modal__images">
          <PhotoList
            openModal={null}
            favourites={favourites} 
            changeFavourites={changeFavourites}
            photos={similarPhotos}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;