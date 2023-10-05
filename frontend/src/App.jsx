import React from 'react';

import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);
  // const photoListItems = photos.map((data, index) => (
  //   <PhotoListItem key={index} sampleDataForPhotoListItem={data} />
  // ))

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
