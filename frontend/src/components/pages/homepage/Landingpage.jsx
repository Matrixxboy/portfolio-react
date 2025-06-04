import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap'
import './landingpage.css'

const Landingpage = () => {
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
          <p className="animate-slide-up delay-300">
            Curious about how this site was built? Explore the story behind it here:{" "}
            <Link to="/about-website" className="aboutwebsite transition">
              About Website
            </Link>
          </p>

        </div>

        <br />
        <p className="text-gray-300 animate-slide-up delay-300">Connect with me on these platforms:</p>
        <div className="flex wrap justify-center gap-3 animate-slide-up delay-300">
          {/* Github profile */}
          <div className="flex items-center justify-center sm:justify-start space-x-2 ">
            <a href="https://github.com/Matrixxboy" target="_blank" className="text-color-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </div>

          {/* Gitlab Profile */}
          <div className="flex items-center justify-center sm:justify-start space-x-2 ">
            <a href="https://gitlab.com/Matrixxboy" target="_blank" className="text-color-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-gitlab" viewBox="0 0 16 16">
                <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z" />
              </svg>
            </a>
          </div>

          {/* Linkedin Profile  */}
          <div className="flex items-center justify-center sm:justify-start space-x-2 ">
            <a href="https://in.linkedin.com/in/utsav-lankapati-aa407b307" target="_blank" className="text-color-primary hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>

        </div>
        {/* <!-- Call to Action Buttons --> */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-slide-up delay-500">
          <Link to="/projects" className="px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg transition">
            View My Work
          </Link>
          <a href="https://wa.me/917041634002" target="_blank" className="hiremebtn px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 rounded-full font-semibold transition">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;