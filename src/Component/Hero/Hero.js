import React from 'react' ;
import './Hero.css'
import Header from '../Header/Header';
import heroImage from '../../assets/hero_image.png';
import heroBack from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png';
import heart from '../../assets/heart.png';


function Hero () {
    return (
        <div id='home'>
            <div className='blur hero-blur'></div>
                <div className='row'>
                    <div className='col-lg-9 col-md-12'>
                        <Header />

                        {/* Best Ads */}

                        <div className='Ads'>
                            <div></div>                        
                            <span>the best fitness club in the town</span>                        
                        </div>

                        {/* Hero Text */}
                        <div className='hero-text'>
                            <div>
                                <span className='stroke-text'>shape</span> 
                                <span> your</span>
                            </div>
                            <div>
                                <span>ideal body</span>
                            </div>
                            <div className='lastherotext'>
                                In here we will help you to shape and build your ideal body and live up your life to fullest
                            </div>
                        </div>

                        {/* Figures */}
                        <div className='figures'>
                            <div>
                                <span>+ 140</span>
                                <span>EXPERT COACHES</span>
                            </div>
                            <div>
                                <span>+ 978</span>
                                <span>MEMBERS JOINED</span>
                            </div>
                            <div>
                                <span>+ 50</span>
                                <span>FITNESS PROGRAMS</span>
                            </div>
                        </div>
                        {/* hero btns */}
                        <div className='heroBtn'>
                            <button className='btn'>get started</button>
                            <button className='btn'>learn more</button>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 Right'>
                        <button className='btn'>Join now</button>
                        <div className='HeartRate'>
                            <img src={heart} alt='' />
                            <span>Heart Rate</span>
                            <span>116 bpm</span>
                        </div>
                        <img src={heroImage} className='HeroImage'/>
                        <img src={heroBack} className = 'heroback' />

                        {/* calories */}
                        <div className='calories'>
                            <img src = {calories} />
                            <div>
                                <span>Burned <br /> calories</span>
                                <span>220 <br /> kcal</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Hero