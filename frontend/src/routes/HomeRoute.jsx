import React, { useState } from "react";

import '../styles/HomeRoute.scss'
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from "../mocks/photos"

const HomeRoute = (props) => {
  const { openModal, favourites, changeFavourites } = props;
  
  const hasFavouritedPhotos = favourites.length > 0;

  return (
    <div className="HomeRoute">
      <TopNavigationBar hasFavouritedPhotos={hasFavouritedPhotos}/>
      <PhotoList favourites={favourites} changeFavourites={changeFavourites} openModal={openModal} photos={photos} />
    </div>
  );
};

export default HomeRoute;