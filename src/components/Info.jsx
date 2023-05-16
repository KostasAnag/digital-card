import avatar from './images/laptop-photo.jpg'
import React from 'react'
import envelope from './images/Icon.png'
import linkedIn from './images/linkedin.png'
 export default function Info(){
    return (
        <div className= "info-wrapper">
        <img src= {avatar} className= "avatar"/>
        <h2>Kostas Anagnostou</h2>
        <span>Frontend Developer</span>
        <p>kostasAnag.website</p>
         <div className='btn-wrapper'>
         <button className='mail-btn'><img src={envelope} /> Email</button> 
        <button className='linked-btn'><img src={linkedIn} /> LinkedIn</button>
        </div>
        </div>
    )
}
