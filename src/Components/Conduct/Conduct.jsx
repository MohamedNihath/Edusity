

import React from 'react'
import './Conduct.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Conduct = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a24b9483-b957-4b98-acd2-564dc9489ae9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='Conduct'>

        <div className="conduct-col">

            <h3>Send us message <img src={msg_icon}/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est
             natus vero eaque, sunt, veniam neque dolor distinctio at animi labore pariatur
             voluptas officia? Amet ipsa quod inventore sunt natus!</p>

             <ul>
                <li><img src={mail_icon}/>tmnihath351@gmail.com</li>
                <li><img src={phone_icon}/>+94 77 113 2015</li>
                <li><img src={location_icon}/>Sri Lanka</li>



             </ul>
        </div>
        <div className="conduct-col">

            <form onSubmit={onSubmit} >
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                <label >Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile number' required />

                <label >Write your message</label>
                 <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>

                 <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Conduct
