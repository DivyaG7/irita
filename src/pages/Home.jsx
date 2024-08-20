import React from 'react'
import '../pages/Home.css'
import { MyCarousel } from '../component/Carousel'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import { Link } from 'react-router-dom'
import newsImg1 from '../assets/newsImg1.jpg'
import newsImg2 from '../assets/newsImg2.jpg'
import newsImg3 from '../assets/newsImg3.jpg'
import newsImg4 from '../assets/newsImg4.jpg'
import newsImg7 from '../assets/friendship.jpg'
//import mediaImg from '../assets/Capture 1.png'
import { Carousel } from 'react-bootstrap'
//import event from '../assets/Rectangle 3.png'
import { Footer } from '../component/Footer'
import video2 from '../../src/pages/Irita launch.mp4'
import '../pages/About.css'
import about from '../assets/about.jpg'

export const Home = () => {
  return (
    <div className='home'>
      <div>
        <MyCarousel/>
        {/* <img
          className="d-block w-100"
          src={event}
          alt="First slide"
        /> */}
      </div>

      <section className='statement'>
        <div className='statement-container'>
          <Carousel>
            <Carousel.Item>
              <div className="row row-bg">
                {/* Content */}
                <div className="col-md-6 content">
                  <div className="statement_content">
                    {/* <p id='statement_date'>18th Febrauary 2022</p> */}
                    <h2 id='statement_h'>Irita</h2>
                    <p id='statement_content'>Was Invited by the Consul General of the Russian Federation in South India for the
                      celebration of National Day of Russia.
                      In the Picture from the right Consul General, H.E. Mr. Oleg N.Avdeev, Mr.Anirudh Balaji
                      President Indo Russian IT Association, and Mr.Basha Director Indo Russian IT Association
                      (I-RITA).</p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6">
                  <div className="statement_image zoom-container">
                    <img src={home1} alt="statement_image" className="img-fluid zoom-effect" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row row-bg">
                {/* Content */}
                <div className="col-md-6 content">
                  <div className="statement_content">
                    {/* <p id='statement_date'>18th May 2023</p> */}
                    <h2 id='statement_h'>India Russia Friendship</h2>
                    <p id='statement_content'>Throwback to celebrating the Indian - Russian Friendship!</p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6">
                  <div className="statement_image zoom-container">
                    <img src={newsImg7} alt="statement_image" className="img-fluid zoom-effect" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row row-bg">
                {/* Content */}
                <div className="col-md-6 content">
                  <div className="statement_content">
                    {/* <p id='statement_date'>19th June 2022</p> */}
                    <h2 id='statement_h'>National Day of Russia</h2>
                    <p id='statement_content'>Our President Mr. Anirudh Balaji with Mr. Krishnan IAS -  Additional Chief Secretary to
                      Government - Industries Department & Mr. Gennadii Rogalov - Director of Russian House,
                      Chennai.</p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6">
                  <div className="statement_image zoom-container">
                    <img src={home2} alt="statement_image" className="img-fluid zoom-effect" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row row-bg">
                {/* Content */}
                <div className="col-md-6 content">
                  <div className="statement_content">
                    {/* <p id='statement_date'>18th July 2022</p> */}
                    <h2 id='statement_h'>Vice - President</h2>
                    <p id='statement_content'>We welcome Dr. E. Khalieraj as our Vice President for the vertical - Cyber Security of
                      the INDO - Russian IT Association.</p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-md-6">
                  <div className="statement_image zoom-container">
                    <img src={home3} alt="statement_image" className="img-fluid zoom-effect" />
                  </div>
                </div>
              </div>
            </Carousel.Item>


          </Carousel>
        </div>
      </section>

      <section className='news'>
        <div className="row news-screen">
          <div className="col-md-12">
            <h1>Latest news</h1>
            <div className='horizontal-line'></div>
            <div className='mt-4 mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4 '>
                  <div className='news-image smaller-image'>
                    <img src={newsImg4} alt='newsImage' className='img-fluid' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>20 Aug 2024</p>
                    <h2 id='news-h'>5 years of Article 370 abrogation: What can govt do to build sustainable, long-t ..</h2>
                    <p id='news-content'>In 2023, on this very day, Chandrayaan 3 accomplished the safe and soft landing of Vikram Lander on the lunar surface.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://government.economictimes.indiatimes.com/news/secure-india/5-years-of-article-370-abrogation-what-can-govt-do-to-build-sustainable-long-term-peace-in-jammu/112632034'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg1} alt='newsImage' className='img-fluid' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>19 Aug 2024</p>
                    <h2 id='news-h'>India To Celebrate First National Space Day On August 23</h2>
                    <p id='news-content'>In 2023, on this very day, Chandrayaan 3 accomplished the safe and soft landing of Vikram Lander on the lunar surface.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://www.ndtv.com/india-news/india-to-celebrate-first-national-space-day-on-august-23-6369632#:~:text=The%20Union%20Government%20has%20declared,surface%20near%20the%20South%20Pole.'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='mt-4 mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg2} alt='newsImage' className='img-fluid' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>15 Aug 2024</p>
                    <h2 id='news-h'>Russian Prez Putin underlines commitment to strong partnership with India</h2>
                    <p id='news-content'>Russian President Vladimir Putin on Thursday extended warm wishes to India on its Independence Day, underlining Moscow's commitment to strengthening the particularly "privileged strategic partnership" between the two nations.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://www.business-standard.com/external-affairs-defence-security/news/russian-prez-putin-underlines-commitment-to-strong-partnership-with-india-124081500709_1.html'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg3} alt='newsImage' className='img-fluid' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>15 Aug 2024</p>
                    <h2 id='news-h'>India imports $2.8 billion worth of crude oil from Russia in July</h2>
                    <p id='news-content'>India, the world's third largest oil consuming and importing nation, in July bought $ 2.8 billion worth of crude oil from Russia, second only to China which remains the largest importer of Russian oil, a report said.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://www.business-standard.com/economy/news/india-imports-2-8-billion-worth-of-crude-oil-from-russia-in-july-124081500280_1.html'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
                
              </div>
              <div id='about'>

              </div>
            </div>



          </div>

          {/* <div className="col-md-6">
            <div className='aside-content'>
              <div className='right-heading'>
                <h3>Briefings</h3>
              </div>
              <div className='right-container'>
                <div className='right-content'>
                  <div className='right-news-image'>
                    <img src={newsImg5} alt='newsImage' />
                  </div>
                  <div className='right-news-text'>
                    <p>U.S University Post-Graduate students fair in Bengaluru on Feb 12</p>
                  </div>
                </div>

                <div className='right-content'>
                  <div className='right-news-image'>
                    <img src={newsImg6} alt='newsImage' />
                  </div>
                  <div className='right-news-text'>
                    <p>U.S University Post-Graduate students fair in Bengaluru on Feb 12</p>
                  </div>
                </div>

                <div className='right-content'>
                  <div className='right-news-image'>
                    <img src={newsImg5} alt='newsImage' />
                  </div>
                  <div className='right-news-text'>
                    <p>U.S University Post-Graduate students fair in Bengaluru on Feb 12</p>
                  </div>
                </div>

              </div>
            </div>
          </div> */}



        </div>


      </section>


      {/* <section className='media-updates'>
        <div className='row'>
          <div className='col-md-4 media1'>
            <h2 className='mb-5'>Media Updates</h2>
            <p id='media-con1'>Swachhata Pakhwada 2024 in
              the ministry of External Affairs</p>
            <p id='media-con2'>February 09,2024</p>
            <p id='media-con3'>Press Releases</p>
          </div>
          <div className='col-md-4 media2'>
            <h2 className='mb-5'>View All</h2>
            <p id='media-con1'>Swachhata Pakhwada 2024 in
              the ministry of External Affairs</p>
            <p id='media-con2'>February 09,2024</p>
            <p id='media-con3'>Press Releases</p>
          </div>
          <div className='col-md-4 media3'>
            <div className='x-box'>
              <h6>Tweets from @MYCHCN NewDelhi</h6>
              <div className='hrl'></div>
              <div className='x-box1'>
                <img src={mediaImg} alt='social-logo' />
                <h2>Nothing to see
                  here - yet</h2>
                <p>When they tweet, their Tweets will show
                  up here.</p>
                <button>View in Twitter</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      <div className="p-5 mt-3 pt-2" style={{width: '100%', overflow: 'hidden'}}>
        <div className='About'>
          <h1 className="mb-5">About IRITA</h1>
          <p className='mb-4'>
            Indo Russian IT Association <span>(IRITA) </span> is a prestigious forum dedicated to fostering intellectual and technological exchange between India and Russia. Our core mission is to enhance the IT sectors of both nations by <span>bringing together leaders and experts</span> from various domains within the industry. Through collaborative initiatives, <span>knowledge-sharing sessions</span>, and strategic partnerships, IRITA endeavors to propel innovation, drive growth, and foster synergy between the IT ecosystems of India and Russia.
          </p>
          <p className="mb-4">
            INDO-Russian IT Association (IRITA) is a forum for intellectual and technological exchange. IRITA focuses on bettering the IT sector of India and Russia while bringing the leaders & people of the respective departments together.
          </p>
          <div className="text-center mb-4">
            <img src={about} alt='' className="img-fluid w-50" />
          </div>
        </div>
      </div>

      <video width="100%" height="440" className='mb-4' controls style={{width: '100%', overflow: 'hidden'}}>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Footer />

    </div>
  )
}
