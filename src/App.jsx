import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Loader from './components/Loader'
import { div } from 'framer-motion/client'
import bgVideo from './assets/bgvideo2.mp4';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
      
      {!isLoaded && <Loader onLoaded={() => setIsLoaded(true)} />}
      
     {isLoaded && (
      <>
        <video className="video-background" autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>
      <div>
       <Navbar></Navbar>
       <Home></Home>
       <About></About>
       <Skills></Skills>
       <Portfolio></Portfolio>
       <Contact></Contact>
       <Footer></Footer>
       </div>
       </>
     )}
     {/* <Loader></Loader> */}
    </div>
  )
}

export default App;