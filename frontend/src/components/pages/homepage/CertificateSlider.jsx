// CertificateSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    image: "../../../../public/certificates/InoovaterX_page-0001.jpg",
    title: "InnocateX Hackathon winner",
    date: "March 2025",
    description: "We built an AI-powered VS Code Debugger Extension that takes debugging to the next level by not only fixing errors but also explaining cod and adding meaningful comments automatically! 💡⚡",
  },
  {
    id: 2,
    image: "../../../../public/certificates/DataYB.png",
    title: "GenAI Master Class Participation",
    date: "May 2025",
    description: "Successfully completed the YBAI GenAI Masterclass, gaining foundational knowledge in Generative AI, including large language models (LLMs), prompt engineering, and real-world applications of AI in automation and content generation.",
  },
  {
    id: 3,
    image: "../../../../public/certificates/DataYB_Internship.png",
    title: "Machine Learning A-Z",
    date: "May 2025",
    description: "Completed the YBAI GenAI Master Internship Program, where I gained hands-on experience in Generative AI concepts, including large language models, prompt engineering, and AI-driven project development.",
  },
  {
    id: 4,
    image: "../../../../public/certificates/HP-ML_page-0001.jpg",
    title: "HP AI-ML fundamental",
    date: "June 2023",
    description: "Completed the HP LIFE AI & ML Fundamentals course, gaining a foundational understanding of artificial intelligence and machine learning concepts, including real-world applications and basic model workflows.",
  },
];

const CertificateSlider = () => {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const card = container.querySelector(".certificate-card");
    if (!card) return;
    const scrollAmount = card.offsetWidth + 16;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative container pt-5">
      <div className="certificates-wrapper bg-gradient-to-b glass-white py-12 px-4 sm:px-6 md:px-10 rounded-md shadow-lg">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-color-primary mb-4">Certificates</p>

        <div className="slider-container relative">
          <button
            onClick={() => scroll("left")}
            className="slider-btn left w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm ring-1 ring-white/30"
          >
            <center>
              <FaChevronLeft />
            </center>
          </button>
          <div
            className="certificate-list flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 snap-x snap-mandatory"
            ref={containerRef}
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="certificate-card w-full max-w-[90vw] sm:max-w-[18rem] shrink-0 snap-start bg-white/5  backdrop-blur-md rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 shadow-lg cursor-pointer"
                onClick={() => setSelected(cert)}
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>

              </div>


            ))}
          </div>
          
          <button
            onClick={() => scroll("right")}
            className="slider-btn right w-8 h-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm ring-1 ring-white/30"
          >
            <center>
              <FaChevronRight />
            </center>
          </button>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center px-4 backdrop-blur-2xl bg-black/60"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white/10 p-6 rounded-2xl max-w-md w-full text-white relative backdrop-blur-md border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 object-contain rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-1">{selected.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{selected.date}</p>
            <p className="text-sm text-gray-100">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-3 text-white text-2xl hover:text-red-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateSlider;