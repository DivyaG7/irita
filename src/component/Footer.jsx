import '../component/Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='d-flex'>
                    <p>Copyright policy</p>
                    <span className='vertical-line'></span>
                    <p>Terms and condition</p>
                    <span className='vertical-line'></span>
                    </div>
                    <div className='d-flex'>
                    <p>Privacy Policy</p>
                    <span className='vertical-line'></span>
                    <p>Help </p>
                    <span className='vertical-line'></span>
                    <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};