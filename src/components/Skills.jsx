import React, { useEffect, useState } from 'react'
import "../scss/Skills.scss"
// import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { TailwindCSS_Light, JavaScript, CSS,HTML,React_Light,Redux,MongoDB,NodeJS_Light,ExpressJS_Light,Docker,Jenkins_Light} from "react-skillicons";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';
function Skills() {
  const [active, setActive] = useState(1)
  const icons = [<HTML />, 	<CSS/>, <JavaScript />,	<React_Light />, 	<TailwindCSS_Light />,<NodeJS_Light />,	<Redux />,	<MongoDB />,<ExpressJS_Light />,<Docker />,<Jenkins_Light />]

  return (
    <div className='container skill' id="skills">
      <motion.div
      //  initial={{opacity:0}}
      // whileInView={{y:[-100,0],opacity:1}} 
      // transition={{duration:0.5}}
      className="title">
        <span>What I Expert</span>
        <h1>Skills</h1>
      </motion.div>
      <motion.div 
      // initial={{opacity:0}} whileInView={{y:[10,0],opacity:1}} transition={{duration:0.5,delay:0.2}}
      className="select">
        <button onClick={() => { setActive(1) }}
          className={active == 1 ? "active" : ""}>Skills</button>
      </motion.div>
      <div className="skills">
        {active == 1 && icons.map((icon, index) => {
          return (
            <div className="icon" key={index}>{icon}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills