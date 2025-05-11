import React from "react";
import { Link } from "react-router-dom";
import Aboutme from "./pages/homepage/Aboutme";
import Landingpage from "./pages/homepage/Landingpage";
import Cards from "./pages/homepage/Cards";
import Certificate from "./pages/homepage/Certificates";

const MainPage = () => {
    return (
        <>
            <Landingpage />
            <Aboutme />
            <Cards />
            <Certificate />
        </>
    );
};

export default MainPage;
