import React from 'react';
import Carousel from 'nuka-carousel';
import "./styles.scss"

const PhotoCarousel = () => {
  return (
    <Carousel
    wrapAround={true}
    autoplay={true}
    speed={1000}
  >
      <img src={require ("../../images/photos/restaurante1.jpg")} alt="Foto Restaurante 1"/>
      <img src={require ("../../images/photos/restaurante2.jpg")} alt="Foto Restaurante 2"/>
      <img src={require ("../../images/photos/restaurante3.jpg")} alt="Foto Restaurante 3"/>
      <img src={require ("../../images/photos/restaurante4.jpg")} alt="Foto Restaurante 4"/>
      <img src={require ("../../images/photos/restaurante5.jpg")} alt="Foto Restaurante 5"/>
      <img src={require ("../../images/photos/restaurante6.jpg")} alt="Foto Restaurante 6"/>
      <img src={require ("../../images/photos/restaurante7.jpg")} alt="Foto Restaurante 7"/>
  </Carousel>
  )
}

export default PhotoCarousel;