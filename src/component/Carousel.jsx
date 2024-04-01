import React from 'react'
import { Carousel } from 'react-bootstrap';
//import image from '../assets/Rectangle 3.png'
import event from '../assets/Rectangle 3.jpg'
import img from '../assets/Rectangle 3 (2).jpg'
import caro from '../assets/caro-1.jpg'


export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={event}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

  )
}
