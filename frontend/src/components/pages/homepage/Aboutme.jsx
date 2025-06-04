import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../../../public/utsav.svg"; // Update this path if needed

const Aboutme = () => {
  return (
    <div className="container px-4 py-8 md:px-10 md:py-12">
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
        <div className="lg:col-span-7 sm:col-span-2 glass-white rounded-md p-6 shadow-lg space-y-6 relative">
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 items-start">
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
      </div>
    </div>
  );
};

export default Aboutme;