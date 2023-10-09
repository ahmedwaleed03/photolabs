import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhoto, favourites, addFavourites, removeFavourites } = props;

  const similarPhotos = Object.values(selectedPhoto.similar_photos);


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
            addFavourites={addFavourites} 
            removeFavourites={removeFavourites}
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
            addFavourites={addFavourites} 
            removeFavourites={removeFavourites}
            photos={similarPhotos}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;