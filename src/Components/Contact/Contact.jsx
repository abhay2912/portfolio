import React, { useContext, useRef } from 'react'
import "./Contact.css"

// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { themeContext } from '../../Context';


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const[done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_an32hog', 'template_1i7gve9', form.current, 'WjEkTKvlViwas0HpN')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'White': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        {/* right sider */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" className="user" id="" />
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="meassage" className='user' id="" placeholder='Message'></textarea>
                <input type="submit" value="send" className="button" />
                <span>{done && "Thanks for contacting me "} </span>
                <div className="blur c-blur1"></div>
            </form>
        </div>

    </div>
  )
}

export default Contact