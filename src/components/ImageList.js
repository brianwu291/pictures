import "./ImageList.css";
import React from 'react';
import ImageCard from './ImageCard.js';

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  
  return <div className="image-List">{images}</div>;
}

export default ImageList;
