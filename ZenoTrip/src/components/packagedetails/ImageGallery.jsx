// components/ImageGallery.jsx
import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [imageList, setImageList] = useState([...images]);

  const handleImageClick = (index) => {
    if (index === 0) return;
    const newImages = [...imageList];
    [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
    setImageList(newImages);
  };

  return (
    <div className="grid h-[600px] grid-cols-6 grid-rows-6 gap-4">
      {/* Main Image */}
      <div
        onClick={() => handleImageClick(0)}
        style={{ backgroundImage: `url(${imageList[0]})` }}
        className="col-span-6 row-span-4 bg-cover bg-center cursor-pointer"
      ></div>

      {/* Thumbnails */}
      {imageList.slice(1, 4).map((img, i) => {
        const realIndex = i + 1;
        const colStart = realIndex === 1 ? 1 : realIndex === 2 ? 3 : 5;
        return (
          <div
            key={realIndex}
            onClick={() => handleImageClick(realIndex)}
            style={{ backgroundImage: `url(${img})` }}
            className={`col-span-2 row-span-2 bg-cover bg-center cursor-pointer row-start-5 col-start-${colStart}`}
          ></div>
        );
      })}
    </div>
  );
}

export default ImageGallery;
