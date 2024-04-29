import React from 'react'
import { Carousel } from 'react-bootstrap';
//import image from '../assets/Rectangle 3.png'
import main from '../assets/Main_slide.png'
import friend from '../assets/Friendship.png'
import president from '../assets/President.png'
import partner from '../assets/partnership.png'
//import video2 from '../../src/Irita launch.mp4'
import banner from '../../src/assets/banner.png'


export const MyCarousel = () => {
  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={main}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={friend}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* <video
            autoPlay
            muted
            loop
            controls
            style={{
              position: 'absolute',
              width: '38%',
              height: '50%',
              top: '25%',
              left: '58%',
              border: '5px solid white',
              borderRadius: '25px 0 25px 0',
              objectFit: 'cover',
              zIndex: 2, // Ensure the video is placed in front
            }}
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src={banner} alt='banner-img' style={{
              position: 'absolute',
              width: '38%',
              height: '50%',
              top: '25%',
              left: '58%',
              border: '5px solid white',
              borderRadius: '25px 0 25px 0',
              objectFit: 'cover',
              zIndex: 2, // Ensure the video is placed in front
            }}/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <img
              className="d-block w-100"
              src={president}
              alt="First slide"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={partner}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

  )
}
