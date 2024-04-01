import React from 'react'
import eventImg1 from '../assets/event-img1.png'
import '../pages/News.css'
import { Link } from 'react-router-dom'
import { Footer } from '../component/Footer'

export const NewsEvents = () => {
  return (
    <>
      <div className='news-event'>
        <div className='event-container'>
          <div className='row'>
            <div className='col-md-6 bg'>
              <p id='event-date'>19th August 2021</p>
              <h1 id='event-h'>President of IRITA</h1>
              <p id='event-content'>Anirudh Balaji of Horizon Group appointed
                as the new president of Indo-Russian IT
                Association.</p>
            </div>
            <div className='col-md-6'>
              <div className='event-img'>
                <img src={eventImg1} alt='event-img' className="img-fluid" />
              </div>
            </div>
            <div className='col-md-6 third'>
              <h1>Speeches and published materials</h1>
              <p>Signed agreements which would take the
                Kudankulam project forward.
              </p>
            </div>
            <div className='col-md-6 four'>
              <h1>News and Notices</h1>
              <p>Signed agreements which would take the
                Kudankulam project forward.</p>
            </div>
            <div className='col-md-6 five pt-4 pb-4'>
              <div className='hr mb-4'></div>
              <h5 className='text-white'>STATEGY</h5>
              <p className='text-white'>FOR A FREE PEACEFULL</p>
              <p className='text-white'>AND PROSPEROUS</p>
              <h5 className='text-white'>INDIAN PACIFIC</h5>
              <h5 className='text-white'>REGION</h5>
              <div className='hr mt-4'></div>
            </div>
            <div className='col-md-6 six p-4'>
              <h1 className='mb-3'>Press Release</h1>
              <div className='press'>
                <Link to='https://www.business-standard.com/content/press-releases-ani/anirudh-balaji-of-horizon-group-appointed-as-the-new-president-of-indo-russian-it-association-121081900891_1.html' className='link'>Business Standard</Link>
                <p>From L-R: Oleg N. Avdeev, Consul General - Russian Federation in SI, Anirudh Balaji, President, Indo-Russian IT Association, Gennadii A Rogalev, Director, RCSC, Chennai</p>
              </div>
              <div className='hr'></div>
              <div className='press'>
                <Link to='https://aninews.in/topic/indo-russian-it-association/' className='link'>Ani - South Asian Leading Multimedia News Agency</Link>
                <p>Chennai (Tamil Nadu) [India], August 19 (ANI/NewsVoir): Anirudh Balaji, Founder and CEO of Horizon Group, has been elected as the new President of the Indo-Russian IT Association (IRITA), a first-of-its-kind forum for the promotion of the IT industry of the two countries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
