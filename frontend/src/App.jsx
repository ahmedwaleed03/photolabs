import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const changeFavourites = (photoData) => {
    const isFav = favourites.some((photo) => photo.id === photoData.id);
    
    if (isFav) {
      setFavourites(favourites.filter((photo) => photo.id !== photoData.id));
    } else {
      setFavourites([...favourites, photoData]);
    }
  };

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal} favourites={favourites} changeFavourites={changeFavourites}/>
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favourites={favourites} changeFavourites={changeFavourites}/> }
    </div>
  );
};

export default App;
