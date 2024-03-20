import React from 'react'
import { Link } from 'react-router-dom'
import '../component/Speeches.css'
import speech1 from '../assets/speech1.png'
import speech2 from '../assets/speech2.png'
import speech3 from '../assets/speech3.png'
import speech4 from '../assets/speech4.png'

export const Speeches = () => {
    return (
        <div>
            <div className='speech'>
                <div className='row'>
                    <div className='col-md-4 left-speech'>
                        <div className='left-links'>
                            <Link to='' className='text-decoration-none speech-link'>Speeches and published
                                materials</Link>
                            <Link to='' className='text-decoration-none speech-link'>News and Notices</Link>
                            <Link to='/Speeches' className='text-decoration-none speech-link' id='press'>Press Release</Link>
                        </div>
                        <div className='right-image'>
                            <p>Media Files</p>
                            <div className='speechImg'>
                                <img src={speech1} alt='press-img' />
                                <img src={speech2} alt='press-img' />
                                <img src={speech3} alt='press-img' />
                                <img src={speech4} alt='press-img' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 right-speech'>
                        <div className='top-hr'></div>
                        <h2 className='pt-3 pb-3'>Anirudh Balaji of Horizon Group appointed as the new president of Indo-Russian IT Association</h2>
                        <div className='d-flex gap-5 s-date'>
                            <p>Date : 19-08-2021</p>
                            <p>Time : 02:40PM</p>
                        </div>
                        <div className='bottom-hr'></div>
                        <p className='pt-3'>Chennai (Tamil Nadu) [India], August 19 (ANI/NewsVoir): Anirudh Balaji, Founder and CEO of Horizon Group, has been elected as the new President of the Indo-Russian IT Association (IRITA), a first-of-its-kind forum for the promotion of the IT industry of the two countries.</p>
                        <p>Anirudh Balaji has experience in various industry verticals including business solutions, design services, and event management. He is a close associate of several IT players in India and Russia. As the president of IRITA, Anirudh Balaji is expected to bring thought leaders in the IT sector of these two countries together to jointly explore the opportunities for Indo-Russian joint ventures to tap the global market not only in the areas of artificial intelligence and machine learning but in the whole of IT sector as well.</p>
                        <p>
                            In his comments, Anirudh Balaji said, "India and Russia have a long standing and stable relationship in research and development, economic and political spheres. However, their cooperation in the IT sector is left largely untapped. IRITA will strive towards conducting seminars, exchange programs, creating dialogue and deliberations between the leaders of the IT sectors of the two countries and finding ways to create formidable IT capabilities to serve the global market."
                            IRITA's core team includes Dhinesh Kumar, Vice President, an expert in business analytics and intelligence, and Mathiarasan, Treasurer, an entrepreneur, running a group of companies with interests in manufacturing, and software development.</p>
                        <p>IRITA was recently relaunched at Chennai with a new logo in the presence of Anbil Mahesh Poyyamozi, Education Minister of Tamil Nadu, His Excellency, Oleg N. Avdeev, Consul General of The Russian Federation, Chennai, and Gennadii A Rogalev, Director, The Russian Centre of Science and Culture.
                            This story is provided by NewsVoir. ANI will not be responsible in any way for the content of this article. (ANI/NewsVoir)
                            Disclaimer: No Business Standard Journalist was involved in creation of this content</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
