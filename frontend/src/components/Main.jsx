import react from "react";
import { Link } from "react-router-dom";
import Aboutme from "./pages/homepage/Aboutme";
import Landingpage from "./pages/homepage/Landingpage";
import Cards from "./pages/homepage/Cards";
import Certificate from "./pages/homepage/Certificates";

const Main = ()=>{
    return(
        <div class="text-color-secondary">
            <Landingpage />
            <Aboutme />
            <Cards />
            <Certificate />
        </div>
    );
}