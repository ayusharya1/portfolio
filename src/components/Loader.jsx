import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "../scss/Loader.scss"

const Loader = ({ onLoaded }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Counter increment logic
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 25);

        // GSAP timeline animations
        const tl = gsap.timeline({
            onComplete: () => onLoaded(), // Call parent function to remove loader
        });

        // tl.from(".line h1", {
        //     y: 150,
        //     stagger: 0.25,
        //     duration: 0.6,
        //     delay: 0.5,
        // });

        tl.to(".line h2", {
            opacity: 1,
        });
        tl.to("#loader", {
            opacity: 0,
            delay: 2.2, // Adjusted delay to match correction
            duration: 0.2,
        });
        tl.set("#loader", {
            display: "none",
        });

        return () => clearInterval(interval);
    }, [onLoaded]);

    return (
        <div id="loader">
            <div className="line">
                <div className="line1-part1">
                    <h5 id="count">{count}</h5>
                    <h6>- 100</h6>
                </div>
                <h1>Portfolio</h1>
            </div>
            {/* <div className="line line-2">
                <h1 style={{opacity:1}}>Is</h1>
            </div> */}
            <div className="line line-3">
                <h1 style={{opacity:1}}>IS Loading</h1>
                <h2>Now</h2>
            </div>
        </div>
    );
};

export default Loader;
