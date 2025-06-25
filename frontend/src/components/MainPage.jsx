import React from "react";
import { Link } from "react-router-dom";
import Aboutme from "./pages/homepage/Aboutme";
import Landingpage from "./pages/homepage/Landingpage";
import Experience from "./pages/homepage/ExperienceSection";
import CertificateSlider from "./pages/homepage/CertificateSlider";

const MainPage = () => {
    return (
        <>
            <Landingpage />
            <Aboutme />
            <CertificateSlider />
            <Experience />
        </>
    );
};

export default MainPage;
