import React from "react";
import '../styles/landingPage.css'
const Section = ({ title }) => {
    return <div className="w-screen bg-[#af6d4c] flex justify-center items-center pt-48 pb-10 md:text-8xl text-4xl sectionHead text-white">{title}</div>;
};

export default Section;
