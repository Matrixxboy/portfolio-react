import React from "react";
import { Link } from "react-router-dom";
import Aboutme from "./pages/homepage/Aboutme";
import Landingpage from "./pages/homepage/Landingpage";
import Cards from "./pages/homepage/Cards";
import Certificate from "./pages/homepage/Certificates";

const Main = ()=>{
    return(
        <>
        <h1>Hellow</h1>
            <div className="text-color-secondary">
                <Landingpage />
                <Aboutme />
                <Cards />
                <Certificate />
            </div>
        </>
    );
}

export default Main;