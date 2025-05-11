import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap'
import './landingpage.css'

const Landingpage = ()=>{
    return(
        
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
    <div className="w-full text-center  rounded-2xl p-5 animate-fade-in">

        {/* <!-- Typewriter Header --> */}
        <div className="mx-auto text-center flex justify-center items-center px-4 py-6">
    <h1 className="typewriter break-words text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  leading-snug ">
    Dream ~ Code ~ Build
    </h1>
</div>




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
        </div>

        {/* <!-- Call to Action Buttons --> */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-slide-up delay-500">
            <a href="../certificatepage/Certificatepage.jsx" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg transition">
                View My Work
            </a>
            <a href="https://wa.me/917041634002" target="_blank" className="px-6 py-3 border-2 border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 rounded-full font-semibold transition">
                Hire Me
            </a>
        </div>

    </div>
</div>
    );
}

export default Landingpage;