import React from 'react' 
import './Reasons.css' ;
import tick from '../../assets/tick.png' ;
import nbm from '../../assets/nb.png' ;
import adidas from '../../assets/adidas.png' ;
import nick from '../../assets/nike.png' ;
import first from '../../assets/image1.png' ;
import second from '../../assets/image2.png' ;
import third from '../../assets/image3.png' ;
import fourth from '../../assets/image4.png' ;


function Reasons() {
    return (
        <section className='Reasons' id='whyUs'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 photos'>
                    <img src ={first} />
                    <img src ={second} />
                    <img src ={third} />
                    <img src ={fourth} />
                </div>
                <div className='col-lg-6 col-md-12 text'>
                    <h5>some reasons</h5>
                    <h1><span className='stroke-text'>why</span> choose us ?</h1>
                    <p><img src = {tick}/> over 140+ expert coachs</p>
                    <p><img src = {tick}/> train smarter and faster than before</p>
                    <p><img src = {tick}/> 1 free program for a new member</p>
                    <p><img src = {tick}/> realiable partner</p>
                    <span>our partners</span>
                    <span className='lastspan'>
                        <img src = {nbm}/>
                        <img src = {adidas}/>
                        <img src = {nick}/>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Reasons