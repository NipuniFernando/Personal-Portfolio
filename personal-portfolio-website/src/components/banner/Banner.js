import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter";

function Banner() {
  const Banner = () => {
    const [text] = useTypewriter({
      words: ["Web Developer.", "Mobile Developer,", "Front-end Developer.", "Full Stack Developer,", "UI Designer."],
      Loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    
  }
  return (
    <section 
        id='home' 
        className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"
        >
            <div className="w-1/2">
              <div className="flex flex-col gap-5"> 
                <h4 className="text-lg font- normal" >WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                  Hi, I'm {" "}
                    <span className="text-designColor capitalize">Nipuni </span>
                  </h1>
                  <h2 className="text-4xl font-bold text-white">a 
                    <span> Lorem, ipsum</span>
                  </h2>
                  <p className="text-base font-bodyFont leading-6 tracking-wide">
                  I am a passionate and dedicated software engineer in designing, developing, and deploying scalable software solutions. My journey in the world of technology began with a curiosity for problem-solving and a keen interest in building innovative applications that make a difference.

                  </p>
              </div>
            </div>
            <div>

            </div>
    </section>
  )
}

export default Banner