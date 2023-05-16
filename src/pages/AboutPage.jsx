import React from "react";
import About from "../components/About";
import Socials from "../components/Socials";
import Section from "../components/Section";

const AboutPage = () => {
    return <div>
        <Section title={'About'} />
        <About />
        <Socials />
    </div>;
};

export default AboutPage;
