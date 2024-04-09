import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>

        <div className='hero-text'>

            <h1>We Ensure Better education for a better world</h1>
            <p>Welcome to TM Campus  Sri Lanka's Premier Destination for Higher Education Excellence</p>
            <button className='btn'>Explore more<img src={dark_arrow}/></button>

        </div>
      
    </div>
  )
}

export default Hero
