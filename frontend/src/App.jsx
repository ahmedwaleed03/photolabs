import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const { state, dispatch, fetchPhotosByTopicId } = useApplicationData();

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoData });
  };

  return (
    <div className="App">
      <HomeRoute 
        openModal={openModal} 
        favourites={state.favourites} 
        addFavourites={(photoData) => {
          dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoData }); // Dispatch the FAV_PHOTO_ADDED action
        }}
        removeFavourites={(photoData) => {
          dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoData }); // Dispatch the FAV_PHOTO_ADDED action
        }}
        photos={state.photoData}
        topics={state.topicData}
        fetchPhotosByTopicId={fetchPhotosByTopicId}
      />
      {state.isModalOpen && 
      <PhotoDetailsModal 
        closeModal={() => {
          dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false }); // Dispatch the DISPLAY_PHOTO_DETAILS action
        }}
        selectedPhoto={state.selectedPhoto} 
        favourites={state.favourites} 
        addFavourites={(photoData) => {
          dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoData }); // Dispatch the FAV_PHOTO_ADDED action
        }}
        removeFavourites={(photoData) => {
          dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoData }); // Dispatch the FAV_PHOTO_ADDED action
        }}
      /> }
    </div>
  );
};

export default App;
