import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; 
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const openModal = (photoData) => {
    setPhotoSelected(photoData);
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal} favourites={state.favourites} changeFavourites={updateToFavPhotoIds}/>
      {state.isModalOpen && <PhotoDetailsModal closeModal={onClosePhotoDetailsModal} selectedPhoto={state.selectedPhoto} favourites={state.favourites} changeFavourites={updateToFavPhotoIds}/> }
    </div>
  );
};

export default App;
