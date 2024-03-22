import React from 'react'
import { Carousel } from 'react-bootstrap';
//import image from '../assets/Rectangle 3.png'
import event from '../assets/event-img1.png'


export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={event}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={event}
          alt="Second slide"
        />
      </Carousel.Item> */}
    </Carousel>

  )
}
