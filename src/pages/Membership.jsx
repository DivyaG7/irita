import React from 'react'
import '../pages/Membership.css'
import member from '../assets/member.png'
import corporate from '../assets/corporate.png'
import { Carousel } from 'react-bootstrap'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 

export const Membership = () => {
  return (
    <div>
      <div className='container mt-5 member'>
        <h1 className='mb-4'>Membership For Everyone</h1>
        <p className='mb-4'>All Lions clubs share a single mission: we serve. Yet, no two Lions are exactly alike. That’s what makes our service so strong. The same can be said of our clubs—no two clubs are exactly alike. We offer a variety of club models and membership types to meet the needs of all those looking to serve. Here, we have a membership that’s right for you.</p>
      </div>

      {/* <Carousel nextIcon={<BsChevronRight style={{ fontSize: '2rem', color: 'black'}} />} // Custom next arrow icon
      prevIcon={<BsChevronLeft style={{ fontSize: '2rem', color: 'black'}} />} >
        <Carousel.Item>
          <div className='container mt-5'>
            <div className='row member-content'>
              <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
                <img src={member} alt='' className="img-fluid" />
                <div className="position-absolute bottom-0 end-0 btn-container">
                  <img src={corporate} alt='' className="img-fluid" style={{ zIndex: 1 }} />
                  <button variant="primary" className='btn'>JOIN</button>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
                <div className='corporate'>
                  <h3 className='mb-4'>Corporate Membership</h3>
                  <p>Most Lions clubs are formed on the traditional club model.These clubs bring together a group of service-minded individuals who want to better their community, and meet locally on a regular basis. Learn more about traditional clubs.</p>
                </div>
                <div className='corporate'>
                  <h3 className='mb-4'>Corporate Membership Benefits</h3>
                  <div>
                    <ul>
                      <li className='mb-3'>Networking opportunities  with industry leaders and government officials.</li>
                      <li className='mb-3'>Business promotion through the association's platforms</li>
                      <li className='mb-3'>Access to industry reports, webinars, and training programs. Government liaison for advocacy and updates.</li>
                      <li className='mb-3'>Brand visibility and representation in industry committees. Exclusive events, discounts, and offers.</li>
                      <li className='mb-3'>Membership Fee: ₹50,000 with a Yearly Renewal Fee of ₹25,000.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className='container mt-5'>
            <div className='row member-content'>
              <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
                <img src={member} alt='' className="img-fluid" />
                <div className="position-absolute bottom-0 end-0 btn-container">
                  <img src={corporate} alt='' className="img-fluid" style={{ zIndex: 1 }} />
                  <button variant="primary" className='btn'>JOIN</button>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
                <div className='corporate'>
                  <h3 className='mb-4'>Corporate Membership</h3>
                  <p>Most Lions clubs are formed on the traditional club model.These clubs bring together a group of service-minded individuals who want to better their community, and meet locally on a regular basis. Learn more about traditional clubs.</p>
                </div>
                <div className='corporate'>
                  <h3 className='mb-4'>Corporate Membership Benefits</h3>
                  <div>
                    <ul>
                      <li className='mb-3'>Networking opportunities  with industry leaders and government officials.</li>
                      <li className='mb-3'>Business promotion through the association's platforms</li>
                      <li className='mb-3'>Access to industry reports, webinars, and training programs. Government liaison for advocacy and updates.</li>
                      <li className='mb-3'>Brand visibility and representation in industry committees. Exclusive events, discounts, and offers.</li>
                      <li className='mb-3'>Membership Fee: ₹50,000 with a Yearly Renewal Fee of ₹25,000.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}
