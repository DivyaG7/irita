import React from 'react'
import '../pages/Home.css'
import { MyCarousel } from '../component/Carousel'
import statementImage from '../assets/Rectangle 13056.png'
import { Link } from 'react-router-dom'
import newsImg1 from '../assets/Rectangle 13057.png'
import newsImg2 from '../assets/Rectangle 13058.png'
import newsImg3 from '../assets/Rectangle 13059.png'
import newsImg4 from '../assets/Rectangle 13060.png'
import newsImg5 from '../assets/Rectangle 13038.png'
import newsImg6 from '../assets/Rectangle 13041.png'
import mediaImg from '../assets/Capture 1.png'

export const Home = () => {
  return (
    <div className='home'>
      <div>
        <MyCarousel />
      </div>

      <section className='statement'>

        <div className="row row-bg">
          {/* Content */}
          <div className="col-md-6 content">
            <div className="statement_content">
              <p id='statement_date'>14th February 2024</p>
              <h2 id='statement_h'>India Russia Joint Statement</h2>
              <p id='statement_content'>Created in 2012 with the support of the Ministry of Foreign Affairs & International Development in France, IFCCI’s HR & Recruitment Services has shown phenomenal growth over these years.</p>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6">
            <div className="statement_image zoom-container">
              <img src={statementImage} alt="statement_image" className="img-fluid zoom-effect" />
            </div>
          </div>
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
                      <p id='news-date'>30 January 2024</p>
                      <h2 id='news-h'>French President Emmanuel Macron announces the Launch of Classes Internationals</h2>
                      <p id='news-content'>An Exclusive Gateway to Higher Education in French for Indian Students</p>
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
                      <p id='news-date'>30 January 2024</p>
                      <h2 id='news-h'>French President Emmanuel Macron announces the Launch of Classes Internationals</h2>
                      <p id='news-content'>An Exclusive Gateway to Higher Education in French for Indian Students</p>
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
                      <p id='news-date'>30 January 2024</p>
                      <h2 id='news-h'>French President Emmanuel Macron announces the Launch of Classes Internationals</h2>
                      <p id='news-content'>An Exclusive Gateway to Higher Education in French for Indian Students</p>
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
                      <p id='news-date'>30 January 2024</p>
                      <h2 id='news-h'>French President Emmanuel Macron announces the Launch of Classes Internationals</h2>
                      <p id='news-content'>An Exclusive Gateway to Higher Education in French for Indian Students</p>
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


      <section className='media-updates'>
        <div className='row'>
          <div className='col-md-4 media1'>
            <h2>Media Updates</h2>
            <p id='media-con1'>Swachhata Pakhwada 2024 in
              the ministry of External Affairs</p>
            <p id='media-con2'>February 09,2024</p>
            <p id='media-con3'>Press Releases</p>
          </div>
          <div className='col-md-4 media2'>
            <h2>View All</h2>
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
      </section>

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
