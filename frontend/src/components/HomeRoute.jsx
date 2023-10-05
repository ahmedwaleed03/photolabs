import React from 'react';

import '../styles/HomeRoute.scss'
import PhotoList from './PhotoList';
import TopNavigationBar from './TopNavigationBar';

const  HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;