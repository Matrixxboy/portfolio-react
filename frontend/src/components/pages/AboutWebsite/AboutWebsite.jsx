import React from 'react';

const AboutWebsite = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20">
            <div className="w-full max-w-5xl text-center space-y-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-fade-in">
                    About This Website
                </h1>

                <p className="text-base sm:text-lg  animate-slide-up">
                    This portfolio was originally developed using <span className="font-semibold text-color-primary">Laravel</span>. Although I enjoyed working with it, deployment proved difficult due to my limited experience with Laravel pipelines. After several attempts, I transitioned the project to <span className="font-semibold text-color-primary">React with Vite</span> — a stack I'm more confident in and have used successfully for previous projects.
                </p>

                <p className="text-base sm:text-lg  animate-slide-up delay-150">
                    The result is a lightweight, fast, and fully responsive website. Thanks to my experience deploying React-based academic and personal projects, the migration was smooth and fulfilling.
                </p>

                <p className="text-base sm:text-lg  animate-slide-up delay-300">
                    I personally designed the entire <span className="text-color-primary font-medium">UI/UX</span> of this website, reflecting my creative vision and personal style. I also received helpful feedback from friends and classmates to refine the user experience and design consistency.
                </p>

                <p className="text-base sm:text-lg  animate-slide-up delay-400">
                    This portfolio is more than just a website — it's a dynamic space for growth, creativity, and exploration as I evolve in the tech world.
                </p>
                <br />
                <h2 className="text-2xl sm:text-3xl font-semibold mt-10 animate-fade-in">
                    What’s Coming Next?
                </h2>
                <div className='flex justify-center'>
                    <ul className="text-left text-base sm:text-lg space-y-3 animate-slide-up delay-500 list-disc list-inside">
                        <li>🔗 Backend integration to dynamically showcase my <span className="text-color-primary font-medium">projects and certifications</span>.</li>
                        <li>🧠 Launch of a <span className="text-color-primary font-medium">blog</span> focused on AI & Machine Learning, sharing tutorials and personal learnings.</li>
                        <li>📈 Implementation of analytics to monitor and enhance user engagement and performance.</li>
                        <li>🛠️ Admin panel and authentication features to manage dynamic content easily.</li>
                    </ul>
                </div>
                <br />
                <p className="text-base sm:text-lg  animate-slide-up delay-700">
                    I’m always learning, building, and improving — and this website reflects that journey. Thank you for visiting and supporting my work!
                </p>
            </div>
        </div>
    );
};

export default AboutWebsite;
