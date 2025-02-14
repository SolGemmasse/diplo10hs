import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselCom2 = () => {
  return (
    <Carousel className='carousel-cont'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/tazaazul.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/bolsa.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/taza.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCom2;