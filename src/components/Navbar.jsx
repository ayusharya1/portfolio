import React, { useEffect, useState } from 'react'

import {FaLinkedin,FaInstagram,FaGithub} from "react-icons/fa"
import "./../scss/Navbar.scss"
import {HiMenuAlt4,HiX} from "react-icons/hi"
import {motion} from "framer-motion"

function Navbar() {
    const navlinks=["home","about","skills","portfolio","contact"]
    const [toggel,setToggle]=useState(false)
    const [scroll,setScroll]=useState(false)
    const toggleMenu={
        hidden:{
            scale:0,
        },
        visible:{
            scale:50,
            transition:{
                type:"tween",
                duration:0.5,
            }
        }
    }
    const navlinkVariants={
        hidden:{
            display:"none",
            opacity:0
        },
        visible:{
            opacity:1,
            y:-30,
            transition:{
                delay:0.7,
            }
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setScroll(window.scrollY>20)
        })
    })
  return (
    <motion.div initial={{y:-25}} animate={{y:-5}} transition={{duration:0.5}} className={scroll?"header active":"header"}>
        <div className="Nav-container">
            <div className="logo">
                <h3>A</h3>
            </div>
            <ul className="nav_links">
                {navlinks.map((navlink,index)=>{
                    return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                })}
            </ul>
            <div className="social_icons">
                
                <div>
                <a href="https://github.com/ayusharya1" target='_blank'>
                <FaGithub style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#fff",cursor:"pointer"}}></FaGithub></a></div>
                <div><a href="https://www.linkedin.com/in/ayush-arya-b261862a8/" target='_blank'>
                <FaLinkedin style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#fff",cursor:"pointer"}}></FaLinkedin></a></div>
                <div><a href="https://www.instagram.com/__ayush.arya_/?next=%2F" target='_blank'><FaInstagram style={{opacity:0.6,marginLeft:"1rem",transition: "0.3s",color:"#fff",cursor:"pointer"}}></FaInstagram></a></div>
            </div>
            <div className="menu">
                <HiMenuAlt4 onClick={()=>{
                    setToggle(true)
                }}></HiMenuAlt4>
            </div>
            <motion.div className="closeMenu" variants={toggleMenu} initial="hidden" animate={toggel ?"visible":"hidden"}></motion.div>
            <motion.div className="menuX"  variants={navlinkVariants} animate={toggel ? "visible":"hidden"}>
                <HiX onClick={()=>{
                    setToggle(false)
                }}>
                </HiX>
                {navlinks.map((elem,index)=>{
                        return (<li key={index} onClick={()=>{
                            setToggle(false)
                        }}>
                            <a href={`#${elem}`}>{elem}</a>
                        </li>)
                    })}
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Navbar