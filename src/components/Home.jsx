import React, { useRef, useState } from "react";
import "../scss/Home.scss";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { useScroll } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Power4 } from "gsap/all";
import movieapp from "../assets/movieapp.png"
import gamingwebsite from "../assets/gamingwebsite.png"
import blogger from "../assets/blogger.jpg"
import foodRecipe from "../assets/foodRecipe.jpg"
gsap.registerPlugin(useGSAP);

// style={{textAlign:"center",fontSize:"2rem",margin:"0.5rem"}}
function Home() {
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 40;
  const CHARS = "9559479212";
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

  let txt = "Passionate<br />to craft innovative <br /> web products.";
  const containerRef = useRef(null);
  useGSAP(() => {
    // const element = containerRef.current
    const element = containerRef.current;
    gsap.fromTo(
      ".text-div",
      {
        transformOrigin: "left",
        y: "50%",
        // rotate: 15,
        opacity: 0,
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 3,
        delay: 0.3,
        ease: Power4.easeOut,
        stagger: 0.2,
      }
    );
  });
  const moveVariants = {
    animation: {
      y: [0, -10],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        delay: 0.5,
      },
    },
  };
  const [images, setVal] = useState([
    {
      url:movieapp,
      top: "35%",
      left: "-25%",
      isActive: false,
    },
    {
      url: gamingwebsite,
      top: "85%",
      left: "-25%",
      isActive: false,
    },
    {
      url: blogger,
      top: "35%",
      left: "130%",
      isActive: false,
    },
    {
      url: foodRecipe,
      top: "85%",
      left: "130%",
      isActive: false,
    },
    // {
    //   url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
    //   top: "43%",
    //   left: "45%",
    //   isActive: false,
    // }
  ]);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imgShow(arr) {
      setVal((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imgShow([]);
        break;
      case 1:
        imgShow([0]);
        break;
      case 2:
        imgShow([0, 1]);
        break;
      case 3:
        imgShow([0, 1, 2]);
        break;
      case 4:
        imgShow([0, 1, 2, 3]);
        break;
      // case 5:
      //   imgShow([0, 1, 2, 3, 4])
      //   break;
      // case 6:
      //   imgShow([0, 1, 2, 3, 4, 5])
      //   break;
    }
  });

  //  style={{width:"30rem",backgroundColor:"transparent",color:"white",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:0.18,marginTop:"3rem"}}
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="container"
      id="home"
    >
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span> Ayush Arya</span>
        </h3>
        <span className="job">Web Developer</span>
        {/* <span className="text">Passionate<br />to craft innovative <br /> web products.</span> */}
        <div ref={containerRef} className="text">
          {txt.split("<br />").map((line, idx) => (
            <div className="text-div" key={idx}>
              {line.split(" ").map((wrd, i) => (
                <span dangerouslySetInnerHTML={{ __html: wrd }} />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 w-full h-full scrolldiv">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                src={elem.url}
                className={`w-[17%] rounded-lg absolute -translate-x-[50%] -translate-y-[50%] scrollImg`}
                style={{ top: elem.top, left: elem.left }}
              ></img>
            ) : null
          )}
        </div>
        <motion.a
          variants={moveVariants}
          animate="animation"
          href="#contact"
          whileHover={{ scale: 1.1,backgroundColor:" #c3447a",color:"#fff" }}
          transition={{ duration: 0.3 }}
          onMouseEnter={scrumble}
          onMouseLeave={stopScramble}
        >
          {text}
        </motion.a>
        <div className="web">
          <span>Mern Stack Developer</span>
        </div>
        <div className="freelance">
          <span>Freelancer</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

// {heading.map((wrd,i)=>(
// <div }/>
// ))}
