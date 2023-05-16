import React from "react";
import aboutHeroImg from '../assets/aboutScreen.png'
import '../styles/landingPage.css'
import Actions from "./Actions";
const About = () => {
    return <div className="h-screen w-screen overflow-hidden flex">
        <div className="md:w-1/2 w-full h-full bg-[#dec89d] flex flex-col md:items-start items-center justify-center px-10 lg:px-48">
            <h1 className="aboutHeading lg:text-8xl text-6xl text-[#a35638] capitalize mb-10">About us</h1>
            <p className="paragraph lg:max-w-md w-full lg:text-lg text-xs text-[#a35638] mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolorem magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            <Actions link={'/'} color={'bg-[#a35638]'} text={'read more'} borderColor={'border-[#a35638]'} />
        </div>
        <div className="w-1/2 md:block hidden h-full">
            <img src={aboutHeroImg} alt='aboutImage' className="h-full w-full bg-cover" />
        </div>
    </div>;
};

export default About;
