
import React, { useState, useEffect, useRef } from 'react';
import "../scss/About.scss";
import { FaPaperPlane, FaPhoneAlt, FaUser } from 'react-icons/fa';
// import Resume from "../../Resume.pdf";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profile from "../assets/profile.jpg";


function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    // Set initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

  }, []);

  const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXspring = useSpring(x)
    const mouseYspring = useSpring(y)
    const rotateX = useTransform(mouseYspring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
    const rotateY = useTransform(mouseXspring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])
  const handleMouseMove=(e)=>{
    const rect=e.target.getBoundingClientRect()
    const width=rect.width
    const height=rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xpct = mouseX / width - 0.5
    const ypct = mouseY / height - 0.5
    x.set(xpct)
    y.set(ypct)
  }
  const handleMouseLeave = (e) => {
    x.set(0)
    y.set(0)
}

  const bios = [
    {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Ayush Arya",
    },
   
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "ayusharya967@gmail.com",
    },
  ];
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about_container">
        <motion.div onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} style={{rotateX,rotateY,
          transformStyle: "preserve-3d"
        }}
          initial={{ x: 0, opacity: 0 }}
          whileInView={!isSmallScreen ? { x: [-120, 0], opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="about_left"
        >
          <div className='img-div'  style={{
                    transform: "translateZ(45px)",
                    transformStyle: "preserve-3d",
                }}>
          <img  style={{
                        transform: "translateZ(45px)",
                    }}  className='img' src={profile} alt="" /></div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={!isSmallScreen ?{ x: [120, 0], opacity: 1 }:{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="about_right"
        >
          <div>
          <p> Hi, I'm Ayush Arya, a dedicated Full Stack Web Developer focused on the MERN stack. I’ve built production-ready web applications with clean architecture and responsive design, leveraging tools like Docker and CI/CD pipelines to streamline development and deployment.</p>
<p>Alongside my technical abilities, I bring strong leadership, effective time management, and a passion for building innovative digital experiences. I'm always eager to learn, improve, and take on new challenges in the ever-evolving world of web development.</p>
          </div>
          {bios.map((elem) => {
            return (
              <div className="bio" key={elem.id}>
                <span className="biokey">
                  {elem.icon}
                  {elem.key}
                </span>
                <span className="biovalue">{elem.value}</span>
              </div>
            );
          })}
          <motion.a
  href="/Resume.pdf"
  download
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
>
  Download Resume
</motion.a>

        </motion.div>
      </div>
    </div>
  );
}

export default About;
