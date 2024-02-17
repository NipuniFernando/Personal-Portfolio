import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaBlogger } from 'react-icons/fa';


function Banner() {
  const BannerContent = () => {
    const [text] = useTypewriter({
      words: [
        'Web Developer.',
        'Mobile Developer,',
        'Front-end Developer.',
        'Full Stack Developer,',
        'UI Designer.',
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

    return (
      <>
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nipuni </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate and dedicated software engineer in designing, developing, and deploying scalable software solutions. My journey in the world of technology began with a curiosity for problem-solving and a keen interest in building innovative applications that make a difference.
        </p>
        
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaBlogger />
            </span>
          </div>
        
      </>
    );
  };

  return (
    <section id="home" className="w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black">
      <div className="w-1/2">
       
        <div className="flex flex-col gap-5">
          <BannerContent />
        </div>
      </div>
    </section>
  );
}

export default Banner;
