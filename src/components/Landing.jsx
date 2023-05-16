import React from "react";
import heroImg from '../assets/landingPage.png'
import '../styles/landingPage.css'
import Actions from "./Actions";
const Landing = () => {
    return <div className="w-screen overflow-hidden relative">
        <div className="absolute -z-10 h-full w-full">
            <img src={heroImg} alt="hero" className="w-full h-full bg-cover" />
        </div>
        <div className="my-36 lg:mx-48 sm:mx-10 mx-10">
            <h1 className="mainHead lg:text-9xl  text-4xl text-[#9baf6d] md:max-w-2xl mb-10">We are <br /> Opening Now!</h1>
            <h1 className="text-[#9baf6d] subtitle md:text-4xl text-base mb-10 uppercase">511 Kelvin Squares</h1>
            <Actions link={'/'} color={'bg-[#a35638]'} text={'get direction'} borderColor={'border-[#a35638]'} />

        </div>
    </div>;
};

export default Landing;
