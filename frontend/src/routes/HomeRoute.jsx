import React, { useState } from "react";

import '../styles/HomeRoute.scss'
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { openModal } = props;
  const [favourites, setFavourites] = useState([]);

  const changeFavourites = (photoData) => {
    const isFav = favourites.some((photo) => photo.id === photoData.id);
    
    if (isFav) {
      setFavourites(favourites.filter((photo) => photo.id !== photoData.id));
    } else {
      setFavourites([...favourites, photoData]);
    }
  };
  
  const hasFavouritedPhotos = favourites.length > 0;

  return (
    <div className="HomeRoute">
      <TopNavigationBar hasFavouritedPhotos={hasFavouritedPhotos}/>
      <PhotoList favourites={favourites} changeFavourites={changeFavourites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;