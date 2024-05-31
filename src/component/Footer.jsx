import { Link } from 'react-router-dom';
import '../component/Footer.css'
import logo from '../assets/irita-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='row w-100' id='footer'>
                        <div className='col-md-4 mb-5' id='foot1'>
                            <Link to='/'>
                                <img src={logo} alt='logo' style={{ width: '100px' }} />
                            </Link>
                            <p className='mt-2'><span style={{ fontWeight: 700 }}>INDO-Russian IT Association (IRITA) </span>
                                is a forum for intellectual and
                                technological exchange.</p>
                            <div className="d-flex gap-2 justify-content-center align-items-center">
                                <Link to='https://www.facebook.com/irita.ru/'>
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faFacebookF} size="1x" />
                                    </div>
                                </Link>
                                <Link to='https://www.instagram.com/indorussianitassociation?igsh=MXZ1OHd3OXB0NmZjag=='>
                                    <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                                    </div>
                                </Link>
                                {/* <div className="facebook-icon">
                                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                                    </div> */}
                            </div>

                        </div>
                        <div className='col-md-4 mb-4' id='foot2'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <h4 style={{ fontWeight: '800' }}>Our Location</h4>
                                <div className='hor-line'></div>
                                <p className='text-left mt-3' style={{ fontWeight: '500' }}>C/o Russian Cultural Centre</p>
                                <p className='text-left' style={{ fontWeight: '500' }}>74, Kasturi Ranga Raod , Alwarpet, </p>
                                <p className='text-left' style={{ fontWeight: '500' }}>Chennai, India,</p>
                                <p className='text-left' style={{ fontWeight: '500' }}>Tamil Nadu</p></div>
                        </div>
                        <div className='col-md-4 mb-4' id='foot3'>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <h4 style={{ fontWeight: '800' }}>Email Us</h4>
                                <div className='hor-line'></div>
                                <p className='text-left mt-3' style={{ fontWeight: '500' }}>connect@irita.in</p><br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <div className='text-center' style={{ fontWeight: '500' }}>Copyright @ 2024. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
};