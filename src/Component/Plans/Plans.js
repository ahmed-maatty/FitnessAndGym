import React from 'react' ;
import './Plans.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCrown , faHeartCirclePlus , faDumbbell } from '@fortawesome/free-solid-svg-icons' ;
import WhiteTick from '../../assets/whiteTick.png' ;
import rightArrow from '../../assets/rightArrow.png' ;

function Plans() {
    return (
        <section id='plans'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='Header-programs'>
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now with us</span>
            </div>
            <div className='cards-Plans'>
                <div className='card-plan'>
                    <FontAwesomeIcon icon={faHeartCirclePlus} />
                    <span className='plan-type'>basic plan</span>
                    <h1 className='price'>$ 25</h1>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>2 hours of excercises</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Free consultaion to coaches</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Access to The Community</span>
                    </p>
                    <span className='more-benefit'>
                        <span>See more benefits</span>
                        <img src = {rightArrow} />
                    </span>
                    <button className='btn'>join now</button>
                </div>
                <div className='card-plan effects'>
                    <FontAwesomeIcon icon={faCrown} />
                    <span className='plan-type'>premium plan</span>
                    <h1 className='price'>$ 30</h1>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>5 hours of excercises</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Free consultaion to coaches</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Accessto minibar</span>
                    </p>
                    <span className='more-benefit'>
                        <span>See more benefits</span>
                        <img src = {rightArrow} />
                    </span>
                    <button className='btn'>join now</button>
                </div>
                <div className='card-plan'>
                    <FontAwesomeIcon icon={faDumbbell} />
                    <span className='plan-type'>pro plan</span>
                    <h1 className='price'>$ 40</h1>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>8 hours of excercises</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Consultation of Private Coach</span>
                    </p>
                    <p className='plan-desc'> 
                        <img src={WhiteTick} />
                        <span>Free Fitness Merchandises</span>
                    </p>
                    <span className='more-benefit'>
                        <span>See more benefits</span>
                        <img src = {rightArrow} />
                    </span>
                    <button className='btn'>join now</button>
                </div>
            </div>
        </section>
    )
}

export default Plans