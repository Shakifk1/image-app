import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images, onDelete }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <ImageItem key={image.id} image={image} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ImageList;
