import React from "react";
import '../styles/landingPage.css'
import Section from '../components/Section'
import Socials from '../components/Socials'
import ContactUs from "../components/ContactUs";
const Contact = () => {
    return <div>
        <Section title={'Contact'} />
        <ContactUs />
        <Socials />
    </div>;
};

export default Contact;
