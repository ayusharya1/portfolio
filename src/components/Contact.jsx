import React, { useRef } from 'react'
import "../scss/Contact.scss"
import { FaGithub, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa'
import {color, motion} from "framer-motion"
import emailjs from 'emailjs-com';
function Contact() {
  const contacts = [{
    id: 1,
    icon: <FaMapMarkedAlt />,
    infoText: "KIET Group Of Institutions ,Muradnagar"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "ayusharya967@gmail.com"
  }
  ]
  const form=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault()
     emailjs.sendForm('service123', 'template_123', form.current, 'ZCaf8opBnCv9LQjBl')
      .then((result) => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message, please try again.");
        console.log(error.text);
      });

    e.target.reset();
  }
  return (
    <div className='container' id="contact">
      <motion.div initial={{opacity:0}}
      whileInView={{y:[-50,0],opacity:1}} 
      transition={{duration:0.8}} className="title">
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <div className="contact_left_container">
          <h3>Just say <span style={{color:" #C3447A",textTransform:"capitalize",fontWeight:"bolder"}}>hi</span></h3>
          <p className='contact_text'>I'm always excited to collaborate on new ideas, build impactful web products, or contribute to meaningful projects. With a strong foundation in full stack development and a commitment to clean, efficient code, I bring both technical skill and a problem-solving mindset to the table. Whether you're looking for a developer to build your next application, streamline an existing project, or join your team — I’m ready to dive in and deliver real value. Let’s turn your vision into a product that performs.
          </p>
          {contacts.map(contact => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            <div >
              <a href="https://github.com/ayusharya1" target='_blank'>
                <FaGithub style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#000",cursor:"pointer"}}></FaGithub></a></div>
            <div><a href="https://www.linkedin.com/in/ayush-arya-b261862a8/" target='_blank'>
              <FaLinkedin style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#000",cursor:"pointer"}}></FaLinkedin></a></div>
            <div><a href="https://www.instagram.com/__ayush.arya_/?next=%2F" target='_blank'><FaInstagram style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#000",cursor:"pointer"}}></FaInstagram></a></div>
          </div>
        </div>
        <div className="contact_right">
          <h3>Get in touch</h3>
        <form ref={form} onSubmit={handleSubmit}>
            <div className="row">
            <input type="text" name='firstname' placeholder='First Name' />
            <input type="text" name='lastname' placeholder='Last Name' />
          </div>
          {/* <div className="row">
            <input type="number" placeholder='Phone number' />

          </div> */}
          <div className="row">
            <input type="email" name='email' placeholder='Email' />

          </div>
          <div className="row">
            <textarea name='message' placeholder='message'></textarea>
          </div>
          <motion.button type='submit'
          whileHover={{scale:1.02}} transition={{duration:0.3}} className="btn">
            Send
          </motion.button>
        </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact