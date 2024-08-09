import React from 'react'
import '../pages/Program.css'
//import { Link } from 'react-router-dom'
import { Footer } from '../component/Footer'
import pro1 from '../assets/pro-1.png'
import pro2 from '../assets/pro-2.png'
import pro3 from '../assets/pro-3.png'
import pro4 from '../assets/pro-4.png'
import pro5 from '../assets/pro-5.png'
import pro6 from '../assets/pro-6.png'
import pro7 from '../assets/pro-7.png'
import event1 from '../assets/event1.png'
import event2 from '../assets/event2.png'
import event3 from '../assets/event3.png'
import event4 from '../assets/event4.png'
import event5 from '../assets/event5.png'
import event6 from '../assets/event6.png'
import event7 from '../assets/event7.png'
// import event8 from '../assets/event8.png'
//import event9 from '../assets/event9.png'
import event8 from '../assets/event8.jpeg'

export const Programmes = () => {

    const handleButtonClick = () => {
        const nextSection = document.getElementById('gallery');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handleButtonClick2 = () => {
        const nextSection = document.getElementById('why-irita');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className='programmes'>
                <div className='program-bg p-5'>
                    <div className='d-flex p-5 text-white mt-5 mb-5 program-first-comp' style={{ flexDirection: 'column', textAlign: 'left' }}>
                        <h3 style={{ fontWeight: 'normal' }}>PROGRAMME</h3>
                        <h1 className='mb-5 text-white' style={{ fontSize: '80px' }}>HIGHLIGHTS</h1>
                        <p className='mb-4 text-white' style={{ fontWeight: '300', fontSize: '20px' }}>Worshops, Seminars, Conference meetings.</p>
                        <button style={{ width: '150px', border: 'none', borderRadius: '20px', color: 'white', padding: '.5rem .2rem', background: 'linear-gradient(90deg, #B10F0F 0%, #09236B 100%)' }} onClick={handleButtonClick2}>KNOW MORE</button>
                    </div>
                </div>

                <div className='program-area' id='why-irita'>
                    <div className='row'>
                        <div className='col-md-10 col-12 p-5 mt-5' style={{ textAlign: 'left' }} id='why-container'>
                            <h1 style={{ fontSize: '50px', fontWeight: '300', color: 'rgba(62, 88, 160, 1)' }} id='why'>WHY</h1>
                            <h1 style={{ fontSize: '50px', color: 'rgba(237, 28, 46, 1)', fontWeight: 800 }} id='partn'><span style={{ fontWeight: '300', color: 'rgba(62, 88, 160, 1)' }}>PARTNER</span> IRITA</h1>
                            <div className='row mt-5 pt-5' id='ties'>
                                <div className='col-md-4 mb-4'>
                                    <h2>Longstanding ties</h2>
                                    <p className='mt-4'>In <br></br><span style={{ color: 'rgba(237, 28, 46, 1)' }}>technology and innovation</span><br></br> between INDIA and RUSSIA.<br></br> Platform for <span style={{ color: 'rgba(237, 28, 46, 1)' }}>intellectual exchange</span> and <br></br><span style={{ color: 'rgba(237, 28, 46, 1)' }}>collaboration</span>.</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <button className='mt-4' style={{ width: '200px', border: 'none', borderRadius: '20px', color: 'white', padding: '.8rem .2rem', background: 'linear-gradient(90deg, #B10F0F 0%, #09236B 100%)' }} onClick={handleButtonClick}>EXPLORE GALLERY</button>
                                </div>
                                <div className='col-md-4 col-12 mb-4' id='president'>
                                    <img src={pro1} alt='program-img' className='img-fluid' />
                                    <h5 className='mt-4'>PRESIDENT OF IRITA</h5>
                                    {/* <p className='mt-4'>Have you ever wondered why some brands become a household name in india</p> */}
                                </div>
                                <div className='col-md-4 col-12' id='cyber'>
                                    <img src={pro2} alt='program-img' className='img-fluid' />
                                    <h5 className='mt-4'>CYBER SECURITY SUMMIT AGAINST WOMEN</h5>
                                    {/* <p className='mt-4'>Have you ever wondered why some brands become a household name in india</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 col-2' id='blue-img'>
                            <img src={pro3} alt='program-img' className='img-fluid' />
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-md-2 col-2 d-flex  me-5' style={{ flexDirection: 'column' }}>
                            <h5 style={{ position: 'absolute', left: '0', marginTop: '50px', transform: 'rotate(-90deg)' }}>
                                <span>I</span>
                                <span>R</span>
                                <span>I</span>
                                <span>T</span>
                                <span>A</span>
                            </h5>
                            <img src={pro5} alt='program-img' className='img-fluid' style={{ width: '50px', marginTop: '100px' }} />
                            <img src={pro4} alt='program-img' className='img-fluid' style={{ width: '50px' }} />
                            <h5 style={{ position: 'absolute', left: '0', marginTop: '350px', marginLeft: '-20PX', transform: 'rotate(-90deg)' }}>
                                <span>F</span>
                                <span>o</span>
                                <span>l</span>
                                <span>l</span>
                                <span>o</span>
                                <span>w</span>
                                <span> </span>
                                <span>u</span>
                                <span>s</span>
                            </h5>
                        </div>
                        <div className='col-md-9 col-10 d-flex' style={{ marginLeft: '-50px' }}>
                            <div className='row'>
                                <div className='col-md-4 col-10 mb-4' id='asso'>
                                    <div className='d-flex' style={{ flexDirection: 'column' }} id='asso-sub'>
                                        <div className='pt-4 d-flex justify-content-between' style={{ flexDirection: 'column', height: '250px', textAlign: 'left', border: '1px solid black' }} id='box-height'>
                                            <h4 className='p-3'>IRITA - Indo russia IT <br></br>association</h4>
                                            {/* <p className='p-3'>Registration links for <br></br>Upcoming events</p> */}
                                        </div>
                                        <div className='mt-4' id='img-height'>
                                            <img src={pro6} alt='program-img' className='img-fluid ' />
                                        </div>
                                        {/* <div className='col-md-4 pt-4 ms-2 text-white' style={{ textAlign: 'left', background: 'rgba(14, 36, 98, 1)', height: '180px' }}>
                                            <h4>Event Highlights:</h4>
                                            <p className='mt-4'>Event Highlights: Workshops, webinars, conferences organized by IRITA. Information on past events</p>
                                        </div>
                                        <div className='col-md-3 mt-4' style={{ textAlign: 'left' }}>
                                            <h4>Upcoming Events:</h4>
                                            <p className='mt-4'>will let you know. Stay Tuned...</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='col-md-8 col-10' id='follow-comp'>
                                    <div className='row'>
                                        <div className='col-md-6 col-12 pt-4 ms-2 text-white' style={{ textAlign: 'left', background: 'rgba(14, 36, 98, 1)', height: '180px' }} id='highlight-comp'>
                                            <h4>Event Highlights:</h4>
                                            <p className='mt-4'>Event Highlights: Workshops, webinars, conferences organized by IRITA. Information on past events</p>
                                        </div>
                                        <div className='col-md-5 c0l-12 pt-4 ms-4' style={{ textAlign: 'left', border: '1px solid black'}} id='upcoming-comp'>
                                            <h4>Upcoming Events:</h4>
                                            <p className='mt-4'><a href='https://hackathonx.in/' style={{textDecoration: 'none', color: 'black'}}>Hackathon X</a></p>
                                        </div>
                                        <div className='col-md-12 mt-1 me-2'>
                                            <img src={pro7} alt='program-img' className='img-fluid' id='upcom-img'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='gallery'>
                    <div className="row pt-3 custom-gallery">
                        <div className="col-lg-4 col-md-12 mb-2 mb-lg-0">
                            <img src={event1} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            <img src={event4} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            <img src={event7} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                        </div>

                        <div className="col-lg-4 col-md-12 mb-2 mb-lg-0">
                            <img src={event2} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            <img src={event5} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            <img src={event8} className="w-100 shadow-1-strong mb-4" id='event-img'
                                alt="event-img" />
                        </div>

                        <div className="col-lg-4 col-md-12 mb-2 mb-lg-0">
                            <img src={event3} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            <img src={event6} className="w-100 shadow-1-strong mb-4"
                                alt="event-img" />
                            {/* <img src={event9} class="w-100 shadow-1-strong mb-4"
                                alt="event-img" /> */}

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
