import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  const { hasFavouritedPhotos } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon selected={true} displayAlert={hasFavouritedPhotos} />
    </div>
  )
}

export default TopNavigation;