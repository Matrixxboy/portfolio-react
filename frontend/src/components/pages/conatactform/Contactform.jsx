import React from "react";
import { Link } from "react-router-dom";

const Contactform = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Form</h1>
        <p className="text-lg text-gray-300">Coming Soon... Stay Tuned!</p>
        <p className="text-lg text-gray-300">~ Feel free to reach out to me via WhatsApp or email ~</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-slide-up delay-500">
          <a href="https://wa.me/917041634002" target="_blank" className="hiremebtn px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 rounded-full font-semibold transition">
            Whatsapp Me
          </a>
          <a href="mailto:matrix.utsav.lankapati@gmail.com" target="_blank" className="hiremebtn px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 rounded-full font-semibold transition">
            Mail Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
