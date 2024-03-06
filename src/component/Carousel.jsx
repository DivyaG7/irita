import React from 'react'
import { Carousel } from 'react-bootstrap';
import image from '../assets/Rectangle 3.png'


export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

  )
}
