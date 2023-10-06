import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto}/> }
    </div>
  );
};

export default App;
