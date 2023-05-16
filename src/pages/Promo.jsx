import React from "react";
import SpecialOffers from "../components/SpecialOffers";
import Order from "../components/Order";
import Socials from "../components/Socials";
import Section from "../components/Section";

const Promo = () => {
    return <div>
        <Section title={'Promo'} />
        <SpecialOffers />
        <Order />
        <Socials />
    </div>;
};

export default Promo;
