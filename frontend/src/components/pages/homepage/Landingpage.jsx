import React from "react";
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap'
import './landingpage.css'

const Landingpage = () => {
    const indicatorRef = useRef(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        if (indicatorRef.current) {
          const top = window.scrollY;
          setVisible(top < 100); // Fade out after 100px scroll
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="w-full text-center  rounded-2xl p-5 animate-fade-in">
        <div className="w-full mx-auto text-center flex justify-center items-center px-2 py-4">
          <h1 className="typewriter break-words font-extrabold  leading-snug ">
            Dream ~ Code ~ Build
          </h1>
        </div>

        {/* <!-- Typewriter Header --> */}




        <br />
        {/* <!-- Subheading --> */}
        <p className="text-lg md:text-xl sm:text-md animate-slide-up">
          Explore my digital journey — skills, certifications, and real-world projects — all in one place.
        </p>

        {/* <!-- Paragraph --> */}
        <div className="space-y-6">
          <p className="text-base md:text-lg sm:text-sm text-gray-400 animate-slide-up delay-150">
            Welcome to my personal portfolio — a curated space where I showcase my journey as a developer.
            From hands-on projects to industry-recognized certifications, this site reflects my passion for technology and growth.
          </p>

          <p className="text-base md:text-lg text-gray-400 animate-slide-up delay-300">
            I built this platform not just to show what I’ve done, but what I can do for <span className="font-semibold text-white">you</span>.
            Whether you're a recruiter or a client, I'm always excited to collaborate and bring ideas to life.
          </p>
          <br />
          {/* <p className="animate-slide-up delay-300">
            Curious about how this site was built? Explore the story behind it here:{" "}
            <Link to="/about-website" className="aboutwebsite transition">
              About Website
            </Link>
          </p> */}
          <div
            ref={indicatorRef}
            className={`flex flex-col items-center mt-14 space-y-4 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <p className="text-sm md:text-base text-purple-200 tracking-widest font-semibold uppercase drop-shadow-md transition duration-300 group-hover:text-white">
              Scroll to know more about me
            </p>

            <div className="relative">
              {/* Glowing Glass Circle */}
              <div className="w-14 h-14 backdrop-blur-md bg-white/5 border border-purple-500 rounded-full flex items-center justify-center shadow-inner ring-1 ring-purple-400/30 hover:ring-purple-300/60 transition-all duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-300 group-hover:text-purple-200 animate-bounce transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>

              {/* Glow Pulse Effect */}
              <span className="absolute inset-0 rounded-full bg-purple-400 opacity-20 blur-lg animate-ping pointer-events-none"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;