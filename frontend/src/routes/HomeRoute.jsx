import React, { useState } from "react";

import '../styles/HomeRoute.scss'
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { openModal, favourites, addFavourites, removeFavourites, photos, topics, fetchPhotosByTopicId } = props;
  
  const hasFavouritedPhotos = favourites.length > 0;

  return (
    <div className="HomeRoute">
      <TopNavigationBar hasFavouritedPhotos={hasFavouritedPhotos} topics={topics} fetchPhotosByTopicId={fetchPhotosByTopicId}/>
      <PhotoList favourites={favourites} addFavourites={addFavourites} removeFavourites={removeFavourites} openModal={openModal} photos={photos} />
    </div>
  );
};

export default HomeRoute;