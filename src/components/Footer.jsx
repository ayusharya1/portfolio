import React from 'react'
import "../scss/Footer.scss"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <div className="footer">
      <div className="copyRight">
        <p>Copyright&copy:2025 All rights reserved| Made by <span>Ayush Arya</span> </p></div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons" >
        <div>
          <a href="https://github.com/ayusharya1" target='_blank'>
            <FaGithub style={{ opacity: 0.6, marginLeft: "1rem", transition: "0.3s", color: "#fff", cursor: "pointer" }}></FaGithub></a></div>
        <div><a href="https://www.linkedin.com/in/ayush-arya-b261862a8/" target='_blank'>
          <FaLinkedin style={{ opacity: 0.6, marginLeft: "1rem", transition: "0.3s", color: "#fff", cursor: "pointer" }}></FaLinkedin></a></div>
        <div><a href="https://www.instagram.com/__ayush.arya_/?next=%2F" target='_blank'><FaInstagram style={{ opacity: 0.6, marginLeft: "1rem", transition: "0.3s", color: "#fff", cursor: "pointer" }}></FaInstagram></a></div>
      </div>
      </div>
      
    </div>
  )
}

export default Footer