import React from 'react'
import '../pages/Program.css'
import program1 from '../assets/program1.png'
import program2 from '../assets/program2.png'
import program3 from '../assets/program3.png'
import program4 from '../assets/program4.png'
import program5 from '../assets/irita (1) 2.png'
import { Link } from 'react-router-dom'

export const Programmes = () => {
    return (
        <div className='programmes'>
            <div className='row'>
                <h2>Programmes</h2>
                <div className='col-md-8'>
                    <div className='left-program'>
                        <p>01 March, 2023</p>
                        <h5>Workshop on cyber crime against women held</h5>
                        <div className='row left-content pt-4'>
                            <div className='col-md-4 pro-img mb-3'>
                                <img src={program1} alt='img' className="img-fluid" />
                            </div>
                            <div className='col-md-8 p-left'>
                                <p id='first-pro'>Chennai: State minister of information technology T Mano thangaraj inaugrated a
                                    workshop against on cyber crime against women in Indo Russian IT Association,
                                    Teynampet.</p>
                                <p id='second-pro'>Initiative by the National Cyber Security Research Council supported by the Indo-Russian IT association.</p>
                            </div>
                        </div>
                    </div>

                    <div className='left-program mt-5'>
                        <p>28 Febrauary , 2023</p>
                        <h5>Cyber Crime Against Women Summit ‘23</h5>
                        <div className='row left-content pt-4'>
                            <div className='col-md-4 pro-img mb-3'>
                                <img src={program2} alt='img' className="img-fluid" />
                            </div>
                            <div className='col-md-8 p-left'>
                                <p id='first-pro'>The Cyber Crime Against Women Summit ’23 was an event organized by C20 Amrita Vishwa Vidyapeetham on 28th February 2023, in association with the Government of Tamil Nadu and the Tamil Nadu State Commission for Women, an initiative by the National Cyber Security Research Council supported by the Indo-Russian IT association. </p>
                                <p id='second-pro'>Initiative by the National Cyber Security Research Council supported by the Indo-Russian IT association.</p>
                            </div>
                        </div>
                    </div>

                    <div className='left-program mt-5 women-event'>
                        <div className='row left-content pt-4'>
                            <div className='col-md-4 pro-img mb-3 women-bg'>
                                <img src={program5} alt='img' className="img-fluid" />
                            </div>
                            <div className='col-md-8 p-left'>
                                <Link to='' id='first-pro' className='women-links'>International Womens day - 2024</Link>
                                <p id='second-pro'>March - 12 (2024)</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-4 pe-4 pb-5'>
                    <div className='row gap-5'>
                        <div className='col-md-12 right-program'>
                            <div className='right-pro'>
                                <h5 className='ps-3 pt-1 pb-1'>Recent posts</h5>
                            </div>
                            <div className='right-pro-content'>
                                <p className='mt-2'> The U.S. Department of Commerce, International
                                    Trade Service </p>
                                <img src={program3} alt='img' className="img-fluid" />
                                <p className='mt-2'> The U.S. Department of Commerce, International
                                    Trade Service </p>
                                <img src={program4} alt='img' className="img-fluid" />
                            </div>
                        </div>
                        <div className='col-md-12 bottom-links'>
                            <div className='right-links-heading'>
                                <h5 className='ps-3 pt-1 pb-1'>Quick Links</h5>
                            </div>
                            <div className='right-links'>
                                <div className='pt-1'>
                                    <Link to='/speeches' className='text-decoration-none links'>Anirudh Balaji of Horizon Group appointed
                                        as the new president of Indo-Russian IT
                                        Association</Link>
                                    <div className="read">
                                        <Link className="text-decoration-none links" to=''><span>&rarr;</span>(read...)</Link>
                                    </div>
                                </div>

                                <div className='pt-3'>
                                    <Link to='' className='text-decoration-none links'>Russian President Vladimir Putin met with Minister of External Affairs of India Dr S Jaishankar</Link>
                                    <div className="read">
                                        <Link className="text-decoration-none links" to=''><span>&rarr;</span>(read...)</Link>
                                    </div>
                                </div>

                                <div className='pt-3'>
                                    <Link to='' className='text-decoration-none links'>International Womens day - 2024</Link>
                                    <div className="read">
                                        <Link className="text-decoration-none links" to=''><span>&rarr;</span>(read...)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
