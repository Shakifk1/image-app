import React, { useState } from 'react';

function ImageAdd() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newImage = {
        id: Date.now(),
        name: file.name,
        dataUrl: reader.result,
      };

      setImages((prevImages) => [...prevImages, newImage]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div className="ImageAdd">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.dataUrl} alt={image.name} />
            <p>{image.name}</p>
            <button onClick={() => handleImageDelete(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageAdd;
