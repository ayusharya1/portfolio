import React, { Children, useEffect, useRef, useState } from 'react'
import "../scss/Portfolio.scss"
import { FiGithub, FiEye } from "react-icons/fi"
import {motion} from "framer-motion"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power4 } from "gsap/all";
import movieapp from "../assets/movieapp.png"
import gamingwebsite from "../assets/gamingwebsite.png"
import jsecommerce from "../assets/jsecommerce.png"
import obys from "../assets/obys.png"
import protiensite from "../assets/protiensite.png"
import blogger from "../assets/blogger.jpg"
import foodRecipe from "../assets/foodRecipe.jpg"
gsap.registerPlugin(useGSAP);

const BentoTilt=({children,className =''})=>{
  const [transformStyle, setTransformStyle] = useState("")
    const itemRef = useRef(null)
    const handleMouseMove = (e) => {
        if (!itemRef.current) return
        //now getting item position
        const { left, top, width, height } = itemRef.current.getBoundingClientRect();   
        // event.clientX sh cursor ki position pata chalti h x axis mein
        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height
        const tiltX = (relativeY - 0.5) * -20
        const tiltY = (relativeX - 0.5) * 20
        const newTransform=`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97,0.97,0.97)`
        setTransformStyle(newTransform)

    }
    const handleMouseLeave = () => {
        setTransformStyle("")
    }
  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform:transformStyle }}>{children}</div>
  )
}

function Portfolio() {
const CYCLES_PER_LETTER =2
const  SHUFFLE_TIME=50
 const CHARS = "!@#$%^&*():{};|,.<>";
  const children = "connect with me";
  const intervalRef = useRef(null);
  const TARGET_TEXT = children;
  const [text, setText] = useState(TARGET_TEXT );
  const scrumble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };
  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  const workNavs = ["All", "MERN based", "React based","Javascript based"]
  const workimages = [{ id: 1, img:blogger , category: "MERN based",view:"https://blogger-website-frontend.vercel.app/",git:"https://github.com/ayusharya1/Blogger-Website-with-docker-and-jenkins" },{ id: 2, img:foodRecipe , category: "MERN based",view:"https://food-recipe-frontend-one.vercel.app/",git:"https://github.com/ayusharya1/food-recipe"},{ id: 3, img:movieapp , category: "React based",view:"https://movie-webapp-two.vercel.app/",git:"https://github.com/ayusharya1/movie-webapp" },{ id: 4, img:gamingwebsite , category: "React based",view:"https://storied-raindrop-6fc381.netlify.app/",git:"https://github.com/ayusharya1/gaming-website" },{ id: 5, img:obys , category: "Javascript based",view:"https://incomparable-babka-11ae54.netlify.app/",git:"https://github.com/ayusharya1/obys-agency-clone" },{ id: 6, img:jsecommerce , category: "Javascript based",view:"",git:"https://github.com/ayusharya1/javascript-ecomerce-website" },{ id: 7, img:protiensite , category: "Javascript based",view:"https://creative-tapioca-550fdc.netlify.app/",git:"https://github.com/ayusharya1/ELITE_Reimagine_Round2" },]
  const [tab, setTab] = useState({ name: "All" })
  const [works, setWorks] = useState([])
  const [active, setActive] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (tab.name === "All") {
      setWorks(workimages)
    }
    else {
      setWorks(workimages.filter(work => work.category === tab.name))
    }
  }, [tab])
  const isActive = (e, index) => {
    setTab({ name:e.target.textContent})
    // console.log(e.target.textContent);
    
    setActive(index)
  }
  // console.log(tab);
   
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 900);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
  
    }, []);
  
  return (
    <div className='container' id="portfolio" >
      <motion.div initial={{opacity:0}}
      whileInView={{y:[-100,0],opacity:1}} 
      transition={{duration:0.5}} className="title">
        <span>My work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div initial={{opacity:0}}
      whileInView={{y:[50,0],opacity:1}} 
      transition={{duration:0.5}} className="buttons">
        {workNavs.map((work, index) => {
          return (
            <button key={index} onClick={(e) => isActive(e, index)} className={active === index ? "active" : ""}>{work}</button>
          )
        })}
      </motion.div>
      <motion.div 
       initial={{x:0,opacity:0}} 
       whileInView={!isSmallScreen ? { x: [-120, 0], opacity: 1 } : { opacity: 1 }}
        transition={{duration:1.2}}
         className="work_Images">
        {works.map((work, index) => {
          return (
            <BentoTilt key={index}  className="work_Image">
              <img src={work.img} alt="" />
              <motion.div initial={{opacity:0}} whileHover={{opacity:[0,1]}} transition={{duration:0.3,ease:"easeInOut"}}  className='hoverlayer'>
                <motion.a whileInView={{scale:[0,1]}} whileHover={{scale:[1,1.1]}} transition={{duration:0.3}} href={work.git} target='_blank'>
                  <FiGithub />
                </motion.a>
                <motion.a whileInView={{scale:[0,1]}} whileHover={{scale:[1,1.1]}} transition={{duration:0.3}} target='_blank' href={work.view}>
                  <FiEye />
                </motion.a>
              </motion.div>
            </BentoTilt>
          )
        })}

      </motion.div>
      <motion.div  
      initial={{x:0,opacity:0}} 
      whileInView={!isSmallScreen ? { x: [-120, 0], opacity: 1 } : { opacity: 1 }}
        transition={{duration:1}}
         className="talk">
        <div className="talk_left">
          <h3>so let's talk about <br />
          <span>your next projects</span></h3>
        </div>
        <motion.div onMouseEnter={scrumble} onMouseLeave={stopScramble} whileHover={{scale:1.1}} transition={{duration:0.3}} className="talk_right">
          <a  href="#contact">{text}</a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio