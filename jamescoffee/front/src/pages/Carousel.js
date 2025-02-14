import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselCom = () => {
  return (
    <Carousel className='carousel-cont'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/vaso.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/chemex.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src="imagenes/barista.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCom;