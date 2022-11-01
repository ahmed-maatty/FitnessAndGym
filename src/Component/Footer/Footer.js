import React from 'react'
import './Footer.css'
import github from '../../assets/github.png' ;
import instagram from '../../assets/instagram.png' ;
import linkedIn from '../../assets/linkedin.png' ;
import logo from '../../assets/logo.png' ;

function Footer() {
    return (
        <footer>
            <hr />
            <div className='mediaimg'>
                <img src={github} />
                <img src={instagram} />
                <img src={linkedIn} />
            </div>
            <img src={logo} className='footerLogo' />
            <div className='blur blur-footer-1'></div>
            <div className='blur blur-footer-2'></div>
        </footer>
    )
}

export default Footer