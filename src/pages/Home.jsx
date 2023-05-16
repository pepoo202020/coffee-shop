import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Popular from "../components/Popular";
import Testimonials from "../components/Testimonials";
import SpecialOffers from "../components/SpecialOffers";
import Order from "../components/Order";
import Socials from "../components/Socials";

const Home = () => {
    return <div className="overflow-x-hidden">
        <Landing />
        <About />
        <Popular />
        <Testimonials />
        <SpecialOffers />
        <Order />
        <Socials />
    </div>;
};

export default Home;
