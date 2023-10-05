import React from 'react';

import HomeRoute from './components/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);
  // const photoListItems = photos.map((data, index) => (
  //   <PhotoListItem key={index} sampleDataForPhotoListItem={data} />
  // ))

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
