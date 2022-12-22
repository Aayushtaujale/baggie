

import React,{useState} from "react";
import emailjs from "emailjs-com";
import '../styles/contact.css';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';



const Result =(e)=>{
    return(

        <p className="pick">Your message has been successfully sent.</p>
    )
}

function ContactUs(props) {
    const [result,showResult] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4qamdzp', 'template_f1ljryc', e.target, '1WHlxpXqI5LED7Gwa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);

    };
    setTimeout(()=>{
        showResult(false);
    }, 5000);



    return (
        <form action="" onSubmit={sendEmail}>
            <div className="contact-back">
            <div className='forms'>
           
           <div className='form-content-left'>
          
            <div className="formWord">
            <Bounce top cascade>
            
                <h2> Contact Us and Let's  Grow Together</h2>
                </Bounce>

                <Slide right cascade>
                <span className='form-label'>Full Name</span>
                </Slide>
                <br />
                <Slide right cascade>
                <input className='form-input' type="text" name="fullName" required/>
                </Slide>
                <br/>
                <Slide left cascade>
                <span className='form-label'>Phone Number</span>
                </Slide>
                <br/>
                <Slide left cascade>
                <input className='form-input' type="text" name="phone" required/>
                </Slide>
                <br/>
                <Slide right cascade>
                <span className='form-label'>Enter Email</span>
                </Slide>
                <br/>
                <Slide right cascade>
                <input className='form-input' type="text" name="email" required/>
                </Slide>
                <br/>


            </div>
            <div className="formWord">
            <Slide left cascade>
                <span className='form-label'>Message</span>
                </Slide>
                <br/>
                <Slide left cascade>
                <textarea className='form-input' name="message" required></textarea>
                </Slide>
                <br/>
                <Bounce bottom>
                <button className='form-input-btn'>SUBMIT</button>
                <div className="row">{
                    result? <Result/> :null}
                </div>
                </Bounce>
            </div>
            </div>
            </div>
            </div>
            
        </form>
    );
}

export default ContactUs;