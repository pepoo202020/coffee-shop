import React from "react";
import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const Actions = ({ link, text, color, borderColor }) => {
    return <Link to={link} className={`w-fit action ${color} rounded-full md:px-11 px-5 py-4 font-bold capitalize text-white md:text-xl text-base transition-all hover:${color} hover:border hover:${borderColor} hover:bg-transparent hover:scale-105`}>
        {text}
    </Link>;
};

export default Actions;
