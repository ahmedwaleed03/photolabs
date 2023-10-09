import React, { useState } from "react";

import '../styles/HomeRoute.scss'
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from "../mocks/photos"

const HomeRoute = (props) => {
  const { openModal, favourites, addFavourites, removeFavourites } = props;
  
  const hasFavouritedPhotos = favourites.length > 0;

  return (
    <div className="HomeRoute">
      <TopNavigationBar hasFavouritedPhotos={hasFavouritedPhotos}/>
      <PhotoList favourites={favourites} addFavourites={addFavourites} removeFavourites={removeFavourites} openModal={openModal} photos={photos} />
    </div>
  );
};

export default HomeRoute;