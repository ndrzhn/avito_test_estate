import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GalleryImages = ({ images }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="gallery">
      <img className="image" src={ images[count] }></img>
      <button onClick={() => setCount((count+1) %  images.length)}>cледующая</button>
    </div>
  );
};

GalleryImages.propTypes = {
  images: PropTypes.array,
}

export default GalleryImages;
