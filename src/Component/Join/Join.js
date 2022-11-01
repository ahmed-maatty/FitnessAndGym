import React from 'react'
import './Join.css'

function Join() {
    return (
        <section className='join'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 joinleft'>
                    <span className='line'></span>
                    <div>
                        <span className='stroke-text'>ready to </span>{' '}
                        <span className='joinspan'> level up</span>
                    </div>
                    <div>
                        <span className='joinspan'>your body </span> {' '}
                        <span className='stroke-text'> with us?</span>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 joinright'>
                    <div className='email'>
                        <input type={'text'} placeholder = {'Enter Your Email Address Her ...'} />
                        <button className='btn'>join now</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Join