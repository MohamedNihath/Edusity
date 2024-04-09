
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import User_1 from '../../assets/user-1.png'
import User_2 from '../../assets/user-2.png'
import User_3 from '../../assets/user-3.png'
import User_4 from '../../assets/user-4.png'




const Testimonial = () => {

    const slider = useRef()

    let tx = 0;
    
const slideForward = ()=>{

    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackward= ()=>{

    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  


}




  return (
    <div className='testimonials'>
        <img src={next_icon} className='next-btn' onClick={slideForward}/>
        <img src={back_icon} className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">

                        <div className="user-info">
                            <img src={User_1}/>
                            <div>
                                <h3>Willam Jackson</h3>
                                <span>TM ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quaerat consequuntur rerum maxime molestias quasi a aspernatur nihil aliquam! Animi sapiente odit cumque! 
                         Explicabo reprehenderit neque repellat! Reiciendis voluptas consequuntur officia!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">

                        <div className="user-info">
                            <img src={User_2}/>
                            <div>
                                <h3>Willam Jackson</h3>
                                <span>TM ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quaerat consequuntur rerum maxime molestias quasi a aspernatur nihil aliquam! Animi sapiente odit cumque! 
                         Explicabo reprehenderit neque repellat! Reiciendis voluptas consequuntur officia!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">

                        <div className="user-info">
                            <img src={User_3}/>
                            <div>
                                <h3>Willam Jackson</h3>
                                <span>TM ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quaerat consequuntur rerum maxime molestias quasi a aspernatur nihil aliquam! Animi sapiente odit cumque! 
                         Explicabo reprehenderit neque repellat! Reiciendis voluptas consequuntur officia!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">

                        <div className="user-info">
                            <img src={User_4}/>
                            <div>
                                <h3>Willam Jackson</h3>
                                <span>TM ,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quaerat consequuntur rerum maxime molestias quasi a aspernatur nihil aliquam! Animi sapiente odit cumque! 
                         Explicabo reprehenderit neque repellat! Reiciendis voluptas consequuntur officia!</p>
                    </div>
                </li>
            </ul>
        </div>
 
      
    </div>
  )
}

export default Testimonial
