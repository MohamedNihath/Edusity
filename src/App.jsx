import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/programs/program'
import Title from './Components/Title/Title'
import Aboute from './Components/Aboute/Aboute'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Conduct from './Components/Conduct/Conduct'
import Fooder from './Components/Fooder/Fooder'
import Videoplayer from './Components/Videopalyer/Videoplayer'





const App = () => {


  const [playState,setplayState]=useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>
          <Title  subTitle='Our Program' title='What we offer'/>
         <Program/>
         <Aboute setplayState={setplayState}/>
         <Title subTitle='Gallery' title='Campu Photos' />
         <Campus/>
         <Title subTitle='TESTIMONIALS' title='What Student Says' />
         <Testimonial/>
         <Title subTitle='Counduct-us' title='Get in touch' />
         <Conduct/>
         <Fooder/>
      </div>
     
         <Videoplayer  playstate={playState}  setplaySatate= {setplayState}/>
      
      

    </div>
  )
}

export default App;
