import React from 'react'
import '../pages/Home.css'
import { MyCarousel } from '../component/Carousel'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import { Link } from 'react-router-dom'
import newsImg1 from '../assets/news-2.jpg'
import newsImg2 from '../assets/news-1.jpg'
import newsImg3 from '../assets/Rectangle 13059.png'
import newsImg8 from '../assets/news8.jpg'
import newsImg7 from '../assets/friendship.jpg'
//import mediaImg from '../assets/Capture 1.png'
import { Carousel } from 'react-bootstrap'
//import event from '../assets/Rectangle 3.png'
import { Footer } from '../component/Footer'
import video2 from '../../src/pages/Irita launch.mp4'
import '../pages/About.css'
import aboutImg from '../assets/about.jpg'

export const Home = () => {
  return (
    <div className='home'>
      <div>
        <MyCarousel />
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
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg8} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>28 April 2024 </p>
                    <h2 id='news-h'>Indian officials, Russian Deputy Minister attend India-Russia Investment Forum</h2>
                    <p id='news-content'>Secretary at the Department for Promotion of Industry and Internal Trade of the Ministry of Commerce and Industry Rajesh Kumar Singh, India’s Ambassador to Russia, Vinay Kumar, and Russian Deputy Minister of Economic Development Vladimir Ilyichev attended the first India-Russia Investment Forum.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://theprint.in/world/indian-officials-russian-deputy-minister-attend-india-russia-investment-forum/2060948/'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg1} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>2 April 2024 </p>
                    <h2 id='news-h'>Putin’s Ex-Classmate Nominated to Head Russian Supreme Court</h2>
                    <p id='news-content'>President Vladimir Putin’s former university classmate has been nominated as the sole candidate to head Russia’s Supreme Court after the recent death of its longtime chairman, the legal news outlet Rapsi reported Monday.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://www.themoscowtimes.com/2024/04/01/putins-ex-classmate-nominated-to-head-russian-supreme-court-a84697'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg2} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>1 April 2024</p>
                    <h2 id='news-h'>Good governance in India visible to world, says Jaishankar as he cites Micron CEO's experience</h2>
                    <p id='news-content'>Micron led by CEO Sanjay Mehrotra has committed to invest over USD 800 million in Gujarat's semiconductor plant of the over USD 2.75 billion total cost.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://indianexpress.com/article/india/micron-ceo-jaishankar-mea-pm-modi-gujarat-semiconductor-plant-investors-9245463/'><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg3} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>20 March 2024</p>
                    <h2 id='news-h'>From just 8% in 2000, share of women CAs now 30%</h2>
                    <p id='news-content'>A recent report has revealed a significant  rise.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to='https://timesofindia.indiatimes.com/india/from-just-8-in-2000-share-of-women-cas-now-30/articleshow/108627341.cms'><span>&rarr;</span>(read...)</Link>
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



      <div className="container mt-5 pt-4" >
        <div className='About'>
          <h1 className="mb-5">About IRITA</h1>
          <p className='mb-4'>
            Indo Russian IT Association <span>(IRITA) </span> is a prestigious forum dedicated to fostering intellectual and technological exchange between India and Russia. Our core mission is to enhance the IT sectors of both nations by <span>bringing together leaders and experts</span> from various domains within the industry. Through collaborative initiatives, <span>knowledge-sharing sessions</span>, and strategic partnerships, IRITA endeavors to propel innovation, drive growth, and foster synergy between the IT ecosystems of India and Russia.
          </p>
          <p className="mb-4">
            INDO-Russian IT Association (IRITA) is a forum for intellectual and technological exchange. IRITA focuses on bettering the IT sector of India and Russia while bringing the leaders & people of the respective departments together.
          </p>
          <div className="text-center mb-4">
            <img src={aboutImg} alt='' className="img-fluid w-50" />
          </div>
        </div>
      </div>

      <video width="100%" height="440" className='mb-4' controls>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Footer />

    </div>
  )
}
