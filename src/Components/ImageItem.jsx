import React from 'react';

const ImageItem = ({ image, onDelete }) => {
  return (
    <div className="image-item">
      <img src={image.urls.thumb} alt={image.alt_description} />
      <span>{image.alt_description}</span>
      <button onClick={() => onDelete(image.id)}>Delete</button>
    </div>
  );
};

export default ImageItem;
