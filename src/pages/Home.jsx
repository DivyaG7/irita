import React from 'react'
import '../pages/Home.css'
//import { MyCarousel } from '../component/Carousel'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import { Link } from 'react-router-dom'
import newsImg1 from '../assets/Rectangle 13057.png'
import newsImg2 from '../assets/Rectangle 13058.png'
import newsImg3 from '../assets/Rectangle 13059.png'
import newsImg4 from '../assets/Rectangle 13060.png'
import newsImg5 from '../assets/Rectangle 13038.png'
import newsImg6 from '../assets/Rectangle 13041.png'
import newsImg7 from '../assets/Rectangle 13056.png'
//import mediaImg from '../assets/Capture 1.png'
import { Carousel } from 'react-bootstrap'
import event from '../assets/Rectangle 3.png'

export const Home = () => {
  return (
    <div className='home'>
      <div>
        {/* <MyCarousel /> */}
        <img
          className="d-block w-100"
          src={event}
          alt="First slide"
        />
      </div>

      <section className='statement'>
        <div className='statement-container'>
          <Carousel>
          <Carousel.Item>
              <div className="row row-bg">
                {/* Content */}
                <div className="col-md-6 content">
                  <div className="statement_content">
                    <p id='statement_date'>18th Febrauary 2022</p>
                    <h2 id='statement_h'>National Day of Russia</h2>
                    <p id='statement_content'>Our President Mr. Anirudh Balaji with Mr. Krishnan IAS -  Additional Chief Secretary to
                      Government - Industries Department & Mr. Gennadii Rogalov - Director of Russian House,
                      Chennai.</p>
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
                    <p id='statement_date'>18th May 2022</p>
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
                    <p id='statement_date'>19th June 2022</p>
                    <h2 id='statement_h'>National Day of Russia</h2>
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
                    <p id='statement_date'>18th July 2022</p>
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
          <div className="col-md-6">
            <h1>Latest news</h1>
            <div className='horizontal-line'></div>
            <div className='mt-4 mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg1} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>19 March 2024</p>
                    <h2 id='news-h'>MEA appoints Vinay Kumar as new ambassador in
                      Russia</h2>
                    <p id='news-content'>Moscow, along with Washington, London, Tokyo and Canberra, is among
                      the top postings for an Indian diplomat and Kumar will be responsible for
                      steering India’s relations with Russia</p>
                    <div className="read">
                      <Link className="text-decoration-none" to=''><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg2} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>18 March 2024</p>
                    <h2 id='news-h'>Vladimir Putin | Reign of the patriarch</h2>
                    <p id='news-content'>If in the late 1990s, Vladimir Putin was seen as the man who could fix Russia’s
                      problems, now he is the face of the state that’s at war in Ukraine “with the
                      collective West” and has built a water-tight authoritarian system at home that
                      allows no dissent.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to=''><span>&rarr;</span>(read...)</Link>
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
                    <p id='news-content'>A recent report has revealed a significant  rise</p>
                    <div className="read">
                      <Link className="text-decoration-none" to=''><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='left-news row align-items-center'>
                <div className='col-md-4'>
                  <div className='news-image smaller-image'>
                    <img src={newsImg4} alt='newsImage' />
                  </div>
                </div>
                <div className='col-md-8 right-news'>
                  <div className='news-content'>
                    <p id='news-date'>20 March 2024</p>
                    <h2 id='news-h'>Pvt investments rise in India very visible, says ADB</h2>
                    <p id='news-content'>ADB, under Dasgupta's leadership, aims to increase private investments in
                      India, focusing on clean energy and financial inclusion. Reforms and new
                      models like IF-CAP are set to strengthen ADB's role in climate finance.</p>
                    <div className="read">
                      <Link className="text-decoration-none" to=''><span>&rarr;</span>(read...)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
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
          </div>
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

      <footer>
        <div className='footer'>
          <div className='footer-content '>
            <p>Copyright policy</p>
            <span className='vertical-line'></span>
            <p>Terms and condition</p>
            <span className='vertical-line'></span>
            <p>Privacy Policy</p>
            <span className='vertical-line'></span>
            <p>Accessibility Option</p>
            <span className='vertical-line'></span>
            <p>Help </p>
            <span className='vertical-line'></span>
            <p>Contact Us</p>
            <span className='vertical-line'></span>
          </div>
          <div className='footer-content1'>
            <p>Content Owned by Embassy of India in Moscow</p>
            <span className='vertical-line'></span>
            <p>Visitors: Page last updated : Feb 15, 2024</p>
            <span className='vertical-line'></span>
            <p>Working Hours Monday to Friday - 9.00 A.M to 5.30 PM </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
