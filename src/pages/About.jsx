import React from 'react';
import '../pages/About.css'
import aboutImg from '../assets/About-img.png'
import { Footer } from '../component/Footer';

export const About = () => {
  return (
    <>
      <div className="container mt-5 pt-4">
        <div className='About'>
          <h1 className="mb-5">About IRITA</h1>
          <p className='mb-4'>
            Indo Russian IT Association <span>(IRITA) </span> is a prestigious forum dedicated to fostering intellectual and technological exchange between India and Russia. Our core mission is to enhance the IT sectors of both nations by <span>bringing together leaders and experts</span> from various domains within the industry. Through collaborative initiatives, <span>knowledge-sharing sessions</span>, and strategic partnerships, IRITA endeavors to propel innovation, drive growth, and foster synergy between the IT ecosystems of India and Russia.
          </p>
          <p className="mb-4">
            INDO-Russian IT Association (IRITA) is a forum for intellectual and technological exchange. IRITA focuses on bettering the IT sector of India and Russia while bringing the leaders & people of the respective departments together.
          </p>
          <div className="text-center mb-4">
            <img src={aboutImg} alt='' className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
