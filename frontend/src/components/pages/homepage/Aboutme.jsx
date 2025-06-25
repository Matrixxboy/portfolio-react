import React from "react";
import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import profileImage from "../../../../public/utsav.svg"; // Update this path if needed

const Aboutme = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6">

        {/* Photo Box */}
        <div className="lg:col-span-3 sm:col-span-2 rounded-md">
          <div className="grid grid-rows-[auto_1fr_auto] gap-1 h-full">

            {/* Image */}
            <div className="row-span-2 glass-white rounded flex justify-center items-center shadow-lg overflow-hidden">
              <img
                src={profileImage}
                alt="Utsav Lankapati"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Name */}
            <div className="row-span-1 glass-white rounded flex justify-center items-center text-center text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold py-2">
              <p>Utsav Lankapati</p>
            </div>
          </div>
        </div>

        {/* Text + Circles */}
        <div className="grid grid-rows-1 lg:col-span-7 sm:col-span-2 glass-white rounded-md p-6 shadow-lg space-y-6 relative">
          <div className="row-span-1">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-color-primary mb-4">About me</p>
            {/* First Paragraph */}
            <div>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                Hi, I’m <span className="font-semibold" style={{ color: "#BBAED0" }}>Utsav Lankapati</span> — a
                <span className="font-medium" style={{ color: "#BBAED0" }}> curious and creative developer</span> who loves turning ideas into real, working solutions.
                I’ve had the chance to work with a variety of technologies like
                <span className="font-medium" style={{ color: "#BBAED0" }}> Python, TensorFlow, Keras, OpenCV, Flask, Laravel, Tailwind CSS, MongoDB</span>,
                as well as frontend tools like
                <span className="font-medium" style={{ color: "#BBAED0" }}> Vanilla JavaScript, React</span>, and
                <span className="font-medium" style={{ color: "#BBAED0" }}> Laravel Blade</span>.
                Over the years, I’ve built several projects — some for college, some just for fun, and others for clients through freelancing.
              </p>
            </div>

            {/* Second & Third Paragraph */}
            <div className="grid grid-cols-1w md:grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  One of the highlights of my journey has been
                  <span className="font-semibold" style={{ color: "#BBAED0" }}> winning the InnovateX Hackathon</span>, hosted by
                  <span className="font-medium" style={{ color: "#BBAED0" }}> BMCCA</span>.
                  It was an amazing experience that pushed my
                  <span className="font-medium" style={{ color: "#BBAED0" }}> creativity and teamwork</span>.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Beyond just coding, I enjoy
                  <span className="font-medium" style={{ color: "#BBAED0" }}> exploring new tech trends</span>,
                  working on side projects, and collaborating with others who share the same
                  <span className="font-medium" style={{ color: "#BBAED0" }}> passion for innovation</span>.
                </p>
              </div>
              {/* Circles */}
              <div className="relative w-full h-48 md:h-64 lg:h-auto">
                <div className="absolute  top-15 bottom-0 left-0 w-32 h-32 bg-color-primary rounded-full z-10"></div>
                <div className="absolute top-7 bottom-0 left-12 w-20 h-20 bg-[#442B59] rounded-full z-20"></div>
              </div>
            </div>
          </div>

          <div className="row-span-1 ">
            <div className="flex flex-col item-center justify-center  gap-4 animate-slide-up delay-300">

              {/* Social Links */}
              <div className="flex flex- items-center gap-3">
                {/* GitHub */}
                <div className="flex items-center justify-center">
                  <a href="https://github.com/Matrixxboy" target="_blank" className="text-color-primary hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>

                {/* GitLab */}
                <div className="flex items-center justify-center">
                  <a href="https://gitlab.com/Matrixxboy" target="_blank" className="text-color-primary hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-gitlab" viewBox="0 0 16 16">
                      <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z" />
                    </svg>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-center">
                  <a href="https://in.linkedin.com/in/utsav-lankapati-aa407b307" target="_blank" className="text-color-primary hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <Link to="/projects" className="px-6 py-3 w-full  
                md:w-41 lg:w-41
                text-center
                bg-purple-500 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg transition">
                  View My Work
                </Link>
                <a href="https://wa.me/917041634002" target="_blank" className="hiremebtn 
                w-full  
                md:w-41 lg:w-41
                text-center
                px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;