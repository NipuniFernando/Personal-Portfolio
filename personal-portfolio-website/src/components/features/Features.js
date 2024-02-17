import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title'
import Card from './Card'

function Features() {
  return (
    <section 
        id='features'
        className="w-full  py-20  border-b-[1px] border-b-black"
    >
    <Title title="Features" des = "What I Do"/>
    <div className="mt-10 grid grid-cols-3 gap-20">
    
      <Card
        title = "Web Development"
        desc= "Passionate and innovative web developer with a keen eye for detail and a drive for creating exceptional user experiences. Proficient in modern web technologies such as HTML5, CSS3, JavaScript, and React.js."
        icon = {<AiFillAppstore />}
      />
      <Card
        title = "Mobile Development"
        desc= "A passionate Flutter mobile app developer, skilled in creating visually stunning, user-friendly, and efficient solutions for cross-platform mobile applications, focusing on user experience and functionality. "
        icon = {<FaMobile />}
      />
      <Card
        title = "UI/UX designing"
        desc= "Passionate UI/UX Designer proficient in leveraging industry-leading design tools such as Figma and Adobe XD to craft engaging and intuitive user experiences. Skilled in translating complex concepts into user-friendly interfaces."
        icon = {<SiAntdesign />}
      />
      <Card
        title = "Blogging"
        desc= "Writting blogs"
        icon = {<FaGlobe />}
      />
    
    </div>
    </section>
  )
}

export default Features