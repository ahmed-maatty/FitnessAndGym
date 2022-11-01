import React, { useState } from 'react' ;
import './Testimonials.css' ;
import './TestiData' ;
import { testimonialsData } from './TestiData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

function Testimonials() {
    const [selected,setselected] = useState(0)
    const tLength = testimonialsData.length ;
    


    return (
        <section className='testimonials' id='testimonials'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 Testleft'>
                    <span>testimonials</span>
                    <span className='stroke-text'>what they</span>
                    <span>say about us</span>
                    <span>{testimonialsData[selected].review}</span>
                    <span>
                        <span className='name'>
                            {testimonialsData[selected].name }
                        </span>
                        <span className='status'>
                            {" - "}
                            {testimonialsData[selected].status}
                        </span>
                    </span>
                </div>
                <div className='col-lg-6 col-md-12 Testright'>
                    <div></div>
                    <div></div>
                    <img src = {testimonialsData[selected].image} className='person'/>
                    <div className='arrows'>
                        <img
                            onClick={()=>{
                                selected === 0 ? setselected(0) : setselected((prev) => prev - 1)
                            }}
                        src = {leftArrow} />
                        <img 
                            onClick={()=>{
                                selected === tLength - 1 ? setselected(0) : setselected((prev) => prev +1)
                            }}
                        src = {rightArrow} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials