import React from 'react'
import './Program.css'
import rihgtArrow from '../../assets/rightArrow.png' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell , faPersonRunning , faFireFlameCurved , faHeartPulse } from '@fortawesome/free-solid-svg-icons'



function Program() {
    return (
        <section className='program' id='programs'>
            <div className=''>
                <div className='Header-programs'>
                    <span className='stroke-text'>explore our</span>
                    <span>programs</span>
                    <span className='stroke-text'>to shape you</span>
                </div>
                <div className='Boxes'>
                    <div className='box'>
                        <FontAwesomeIcon icon={faDumbbell} />
                        <h5>Strength Training</h5>
                        <span>
                            In this program, you are trained to improve your strength through many exercises.
                        </span>
                        <div>
                            <span>join now</span>
                            <span><img src = {rihgtArrow}/></span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon icon={faPersonRunning} />
                        <h5>Cardio Training</h5>
                        <span>
                            In this program, you are trained to do sequential moves in range of 20 until 30 minutes.
                        </span>
                        <div>
                            <span>join now</span>
                            <span><img src = {rihgtArrow}/></span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon icon={faFireFlameCurved}/>
                        <h5>Fat Burning</h5>
                        <span>
                            This program is suitable for you who wants to get rid of your fat and lose their weight.
                        </span>
                        <div>
                            <span>join now</span>
                            <span><img src = {rihgtArrow}/></span>
                        </div>
                    </div>
                    <div className='box'>
                        <FontAwesomeIcon icon={faHeartPulse}/>
                        <h5>Health Fintness</h5>
                        <span>
                            This programs is designed for those who exercises only for their body fitness not body building.
                        </span>
                        <div>
                            <span>join now</span>
                            <span><img src = {rihgtArrow}/></span>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Program ;