import React from 'react'
import eventImg1 from '../assets/event-img1.png'
import '../pages/News.css'
import { Link } from 'react-router-dom'

export const NewsEvents = () => {
  return (
    <div className='news-event'>
      <div className='event-container'>
        <div className='row'>
          <div className='col-md-6 bg'>
            <p id='event-date'>14th February 2024</p>
            <h1 id='event-h'>India Russia Joint Statement</h1>
            <p id='event-content'>Created in 2012 with the support of the Ministry of Foreign Affairs & International
              Development in France, IFCCI’s HR & Recruitment Services has shown
              phenomenal growth over these years.</p>
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
              <Link to='/Speeches' className='link'>Anirudh Balaji of Horizon Group appointed
                as the new president of Indo-Russian IT
                Association</Link>
              <p>at the Kremlin. On the Russian side, the meeting was attended by
                Foreign Minister Sergei Lavrov, Deputy Prime Minister and Chair of the
                Russian side </p>
            </div>
            <div className='hr'></div>
            <div className='press'>
              <Link to='/' className='link'>Russian President Vladimir Putin met with
                Minister of External Affairs of India Dr S
                Jaishankar </Link>
              <p>
                at the Kremlin. On the Russian side, the meeting was attended by
                Foreign Minister Sergei Lavrov, Deputy Prime Minister and Chair of the
                Russian side </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
