import React from 'react'
import '../pages/Membership.css'
import member from '../assets/membership.png'
// import { Carousel } from 'react-bootstrap'
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 

export const Membership = () => {
  return (
    <div>
      <div className='container mt-5 member'>
        <h1 className='mb-4'>Membership For Everyone</h1>
        <p className='mb-4'>All Lions clubs share a single mission: we serve. Yet, no two Lions are exactly alike. That’s what makes our service so strong. The same can be said of our clubs—no two clubs are exactly alike. We offer a variety of club models and membership types to meet the needs of all those looking to serve. Here, we have a membership that’s right for you.</p>
      </div>

      {/* <Carousel nextIcon={<BsChevronRight style={{ fontSize: '2rem', color: 'black'}} />} // Custom next arrow icon
      prevIcon={<BsChevronLeft style={{ fontSize: '2rem', color: 'black'}} />} >
        <Carousel.Item> */}
      <div className='container mt-5 pt-5 pb-2'>
        <div className='row member-content'>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
            <img src={member} alt='' className="img-fluid" />
          </div>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
            <div className='corporate'>
              <h3 className='mb-4'>Corporate Membership</h3>
              <p>We welcome Professionals and Business Entrepreneurs from India as corporate members into our forum. Together we will strive towards conducting seminars, conferences, creating solutions that will be bridged in joint projects & deliberations between the committee.</p>
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
      {/* </Carousel.Item> */}
      {/* Add Carousel.Item for each membership option */}
      {/* <Carousel.Item> */}
      <div className='container mt-5 pt-5 pb-2'>
        <div className='row member-content'>

          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
            <div className='corporate'>
              <h3 className='mb-4'>Individual Membership</h3>
              <p>Individuals from private as well as public sectors, including MNCs, Enterprises, Industrial Bodies, Academic Institutions, MSMEs.</p>
            </div>
            <div className='corporate'>
              <h3 className='mb-4'>Individual Membership Benefits</h3>
              <div>
                <ul>
                  <li className='mb-3'>Exclusive e-Certificate of Membership.</li>
                  <li className='mb-3'>Access to premium digital books.</li>
                  <li className='mb-3'>Special concessions for events and programs. Opportunity for publication.</li>
                  <li className='mb-3'>Prestigious IRITA logo for profile display.</li>
                  <li className='mb-3'>Membership Fee: ₹3,000 with renewal at ₹1,500.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
            <img src={member} alt='' className="img-fluid" />
            {/* <div className="position-absolute bottom-0 end-0 btn-container">
                  <img src={corporate} alt='' className="img-fluid" style={{ zIndex: 1 }} />
                  <button variant="primary" className='btn'>JOIN</button>
                </div> */}
          </div>
        </div>
      </div>
      {/* </Carousel.Item>
      </Carousel> */}

      <div className='container mt-5 pt-5 pb-2'>
        <div className='row member-content'>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
            <img src={member} alt='' className="img-fluid" />
          </div>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
            <div className='corporate'>
              <h3 className='mb-4'>Institutional Membership</h3>
              <p>Individuals from private as well as public sectors, including MNCs, Enterprises, Industrial Bodies, Academic Institutions, MSMEs.</p>
            </div>
            <div className='corporate'>
              <h3 className='mb-4'>Intitutional Membership Benefits</h3>
              <div>
                <ul>
                  <li className='mb-3'>Networking opportunities with experts. Brand promotion and business development support.</li>
                  <li className='mb-3'>Access to digital books and resources for industry insights.</li>
                  <li className='mb-3'>Policy advocacy and updates. Concessions on events and publications.</li>
                  <li className='mb-3'>Membership Fee: ₹25,000 with renewal at ₹10,000.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5 pt-5 pb-2'>
        <div className='row member-content'>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
            <div className='corporate'>
              <h3 className='mb-4'>Student Membership</h3>
              <p>We welcome Professionals and Business Entrepreneurs from India as corporate members into our forum. Together we will strive towards conducting seminars, conferences, creating solutions that will be bridged in joint projects & deliberations between the committee.</p>
            </div>
            <div className='corporate'>
              <h3 className='mb-4'>Student Membership Benefits</h3>
              <div>
                <ul>
                  <li className='mb-3'>Networking events and student chapters. Internship and job placement assistance.</li>
                  <li className='mb-3'>Exclusive access to educational resources. Mentorship opportunities and career development
                    workshops.</li>
                  <li className='mb-3'>Discounted registration for conferences and events.</li>
                  <li className='mb-3'>Membership Fee: ₹,1000 with renewal at ₹5,00.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
            <img src={member} alt='' className="img-fluid" />
          </div>
        </div>
      </div>

      <div className='container mt-5 pt-5'>
        <div className='row member-content'>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 position-relative'>
            <img src={member} alt='' className="img-fluid" />
          </div>
          <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-2'>
            <div className='corporate'>
              <h3 className='mb-4'>Startup Membership</h3>
              <p>Individuals from private as well as public sectors, including MNCs, Enterprises, Industrial Bodies, Academic Institutions, MSMEs.</p>
            </div>
            <div className='corporate'>
              <h3 className='mb-4'>Startup Membership Benefits</h3>
              <div>
                <ul>
                  <li className='mb-3'>Tailored mentorship program</li>
                  <li className='mb-3'>Exposure, visibility, and capacity building.</li>
                  <li className='mb-3'>Access to funding opportunities and strategic partnerships.</li>
                  <li className='mb-3'>Discounted services and resources. Recognition and awards.</li>
                  <li className='mb-3'>Membership Fee: ₹10,000 with a Yearly Renewal Fee of ₹5,000.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
