import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
    {
        id: 1,
        company: "Biz-Insights IT Solutions LLP",
        website: "https://biz-insights.com/",
        role: "Data Analyst Intern",
        roleLink: "https://en.wikipedia.org/wiki/Quality_assurance",
        employee: "Full-Time",
        duration: "June 2025 – Current",
        description: "I’ve started my new role as a Data Analyst Intern at Biz Insights! Excited to begin this journey and looking forward to learning more about data analysis, working with real-world data, and improving my skills in tools like Excel, SQL, and data visualization. Grateful for the opportunity and ready to grow! 💻📊",
        skills: [
            { name: "Web Scraping", link: "https://en.wikipedia.org/wiki/Web_scraping" },
            { name: "LLM", link: "https://en.wikipedia.org/wiki/Large_language_model" },
            { name: "Python", link: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
            { name: "OpenCV", link: "https://en.wikipedia.org/wiki/OpenCV" },
            { name: "CV2", link: "https://docs.opencv.org/4.x/" }, // cv2 is the Python binding for OpenCV
            { name: "Image Pre-processing", link: "https://en.wikipedia.org/wiki/Image_processing" }
        ]

    },
    {
        id: 2,
        company: "YBAI Solutions",
        website: "https://www.ybaisolution.com/", // Update if you have a different link
        role: "AI-ML Trainee",
        roleLink: "https://en.wikipedia.org/wiki/Machine_learning",
        employee: "Internship",
        duration: "Jan 2025 – May 2025",
        description: "Completed hands-on training as an AI/ML Trainee where I was introduced to foundational concepts in Artificial Intelligence and Machine Learning. Built beginner-level projects involving supervised learning, data preprocessing, and exploratory data analysis using Python and libraries like Pandas and Scikit-learn.",
        skills: [
            { name: "Python", link: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
            { name: "Python OOP", link: "https://en.wikipedia.org/wiki/Object-oriented_programming" },
            { name: "Pandas", link: "https://pandas.pydata.org/" },
            { name: "Matplotlib", link: "https://matplotlib.org/" },
            { name: "Seaborn", link: "https://seaborn.pydata.org/" },
            { name: "Scikit-learn", link: "https://scikit-learn.org/" },
            { name: "CNN", link: "https://en.wikipedia.org/wiki/Convolutional_neural_network" },
            { name: "LLM", link: "https://en.wikipedia.org/wiki/Large_language_model" },
            { name: "LangChain", link: "https://www.langchain.com/" },
            { name: "GANs", link: "https://en.wikipedia.org/wiki/Generative_adversarial_network" },
            { name: "YOLO", link: "https://en.wikipedia.org/wiki/You_Only_Look_Once_(object_detection)" },
            { name: "Git", link: "https://en.wikipedia.org/wiki/Git" },
            { name: "CI/CD", link: "https://en.wikipedia.org/wiki/CI/CD" },
            { name: "Machine Learning", link: "https://en.wikipedia.org/wiki/Machine_learning" }
        ]

    },
    {
        id: 3,
        company: "InsideFPV",
        website: "https://insidefpv.com/pages/careers",
        role: "Drone QA Engineer",
        roleLink: "https://en.wikipedia.org/wiki/Quality_assurance",
        employee: "Freelancing",
        duration: "Feb 2025",
        description: "Freelance QA/QC engineer at InsideFPV, specialising in [e.g., software testing, hardware quality, process improvement]. Ensuring top-tier quality for all deliverables.",
        skills: [
            { name: "Drone Tech", link: "https://en.wikipedia.org/wiki/Drone" },
            { name: "QA", link: "https://en.wikipedia.org/wiki/Quality_assurance" },
            { name: "Problem Solving", link: "https://en.wikipedia.org/wiki/Problem_solving" },
            { name: "Agile", link: "https://en.wikipedia.org/wiki/Agile_software_development" }
        ]
    },
    {
        id: 4,
        company: "InsideFPV",
        website: "https://insidefpv.com/pages/careers",
        role: "Jnr. Drone QA Engineer",
        roleLink: "https://en.wikipedia.org/wiki/Quality_assurance",
        employee: "Part time",
        duration: "Jan 2024 – Dec 2024",
        description: "Worked part-time as a QA Engineer responsible for testing and validating various hardware devices related to drones. Led quality assurance for two drone models — BIR and BIR-V2. Additionally, contributed as a technical guide, providing hands-on drone operation training and knowledge sessions on BIR and BIR-V2 at Drone Arena events in VNSGU and DA-IICT.",
        skills: [
            { name: "Drones-Tech", link: "https://en.wikipedia.org/wiki/Drone" },
            { name: "Drones", link: "https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle" },
            { name: "QA", link: "https://en.wikipedia.org/wiki/Quality_assurance" },
            { name: "Drone Building Fundamentals", link: "https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle#Design" },
            { name: "Drone Piloting", link: "https://en.wikipedia.org/wiki/Remote_pilot" },
            { name: "Drone Photography", link: "https://en.wikipedia.org/wiki/Aerial_photography" },
            { name: "Drone Videography", link: "https://en.wikipedia.org/wiki/Aerial_videography" },
            { name: "Logistic Management", link: "https://en.wikipedia.org/wiki/Logistics" }
        ]

    },

];

const ExperienceSection = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="container pt-5">
            <div
                id="experience"
                className="px-6 py-10 rounded-md bg-gradient-to-br glass-white"
            >

                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-color-primary mb-4">
                    Experience
                </p>
                <br />
                <div className="w-full space-y-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="glass-white backdrop-blur-md border border-white/10 hover:border-purple-500/30 hover:shadow-purple-500/20 shadow-xl rounded-2xl p-6 transition-all duration-300 group"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer transition-all duration-300 group-hover:scale-[1.02]"
                                onClick={() => toggleExpand(exp.id)}
                            >
                                <div>
                                    <h3 className="text-xl font-semibold transition-colors group-hover:text-purple-300">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        <a
                                            href={exp.roleLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline hover:text-purple-300 transition"
                                        >
                                            {exp.role}
                                        </a> • {exp.duration} • {exp.employee}
                                    </p>
                                </div>
                                <span className={`text-purple-400 transition-transform duration-300 ${expanded === exp.id ? "rotate-180" : ""}`}>
                                    <FaChevronDown />
                                </span>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded === exp.id
                                    ? "max-h-96 opacity-100 mt-4"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-sm text-gray-300 space-y-3">
                                    <p>{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {Array.isArray(exp.skills) &&
                                            exp.skills.map((skill, index) => {
                                                // If skill is an object with `name` and `link`
                                                if (typeof skill === "object" && skill.name && skill.link) {
                                                    return (
                                                        <a
                                                            key={index}
                                                            href={skill.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-purple-900/40 px-3 py-1 rounded-full border border-purple-500/40 hover:bg-purple-700/50 transition hover:underline"
                                                        >
                                                            {skill.name}
                                                        </a>
                                                    );
                                                }

                                                // Fallback: if it's a string (for older or inconsistent data)
                                                return (
                                                    <span
                                                        key={index}
                                                        className="bg-purple-900/40 px-3 py-1 rounded-full border border-purple-500/40"
                                                    >
                                                        {skill}
                                                    </span>
                                                );
                                            })}
                                    </div>

                                    <a
                                        href={exp.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:underline mt-2 hover:text-pink-400 transition-colors"
                                    >
                                        Visit Website <FaExternalLinkAlt size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
