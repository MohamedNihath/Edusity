import React from 'react'
import './Aboute.css'
import aboute_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const Aboute = ({setplayState}) => {
  return (
    <div className='aboute'>

        <div className='aboute-left'>
            <img src={aboute_img} className='aboute_img'/>
            <img src={play_icon} className='play_icon' onClick={()=>{setplayState(true)}} />

        </div>

        <div className='aboute-right'>

            <h3>Aboute University</h3>

            <h2>Nurturing Tommorow's Leaders Today </h2>
            <p>ESOFT is dedicated to shaping futures through diverse programs in ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training, and Corporate Training. Initially focused on Computing, we’ve evolved into an academic beacon of diversity and excellence. As the premier provider for the BIT External Degree program by the University of Colombo School of Computing (UCSC), ESOFT consistently produces top-tier BIT graduates. Our Pearson Platinum Partner status, affiliated with the UK’s largest awarding body, reflects our commitment to elevating education standards.</p>
            <p>Accredited by the British Computer Society (BCS), ESOFT is the world’s largest provider of BCS Higher Education Qualifications (HEQ), with over 50 prize-winners showcasing academic excellence and dedication to student success.</p>
            <p>ESOFT breaks boundaries as the strategic partner of London Metropolitan University (UK), offering local students the chance to pursue UK qualifications in Sri Lanka. Affiliated with Kingston University (UK), ranked among the top 500 globally, we provide cutting-edge MSc programs for students to stay ahead in their chosen fields.</p>
        </div>
      
    </div>
  )
}

export default Aboute
