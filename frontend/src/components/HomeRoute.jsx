import React, { useState } from "react";

import '../styles/HomeRoute.scss'
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const HomeRoute = () => {
  const [favourites, setFavourites] = useState([]);

  const changeFavourites = (photoData) => {
    const isFav = favourites.some((photo) => photo.id === photoData.id);
  
    if (isFav) {
      setFavourites(favourites.filter((photo) => photo.id !== photoData.id));
    } else {
      setFavourites([...favourites, photoData]);
    }
  };

  return (
    <div className="HomeRoute">
      <TopNavigationBar />
      <PhotoList favourites={favourites} changeFavourites={changeFavourites} />
    </div>
  );
};

export default HomeRoute;