import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => setSelected(!selected);

  return (
    <div className="photo-list__fav-icon" onClick={toggleSelected}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;