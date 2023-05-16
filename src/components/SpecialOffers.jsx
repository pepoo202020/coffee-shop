import React from "react";
import '../styles/landingPage.css'
import specialImg from '../assets/specialBg.png'
import Actions from "./Actions";

const SpecialOffers = () => {
    return <div className="h-screen w-screen overflow-hidden flex">
        <div className="w-1/2 md:block hidden h-full">
            <img src={specialImg} alt='special' className="w-full h-full bg-cover" />
        </div>
        <div className="md:w-1/2 w-full h-full bg-[#dec89d] flex flex-col md:items-start items-center justify-center lg:px-48 px-10">
            <h1 className="aboutHeading lg:text-7xl text-2xl text-[#a35638] capitalize mb-10">Special Offer</h1>
            <p className="paragraph lg:text-start text-center lg:max-w-md lg:text-lg text-xs text-[#a35638] mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolorem magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            <Actions link={'/'} color={'bg-[#a35638]'} text={'get voucher code'} borderColor={'border-[#a35638]'} />
        </div>
    </div>;
};

export default SpecialOffers;
