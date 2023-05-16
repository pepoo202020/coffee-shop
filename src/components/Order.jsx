import React from "react";
import '../styles/landingPage.css'
import orderImg from '../assets/orderBg.png'
import Actions from "./Actions";
const Order = () => {
    return <div className="h-screen w-screen overflow-hidden relative bg-[#a35638]">
        <div className="w-full z-10 py-20 h-full absolute top-0 left-0">
            <img src={orderImg} alt="order" className="bg-cover h-full w-full" />
        </div>
        <div className="w-full h-full absolute top-0 left-0 md:px-0 px-10 z-20 flex flex-col justify-center items-center ">
            <h1 className="text-center orderHeading md:text-7xl text-2xl mb-10  text-white">Want to Order?</h1>
            <p className="orderSubTitle md:text-base text-sm text-white md:max-w-lg mb-10 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolorem magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <Actions link={'/'} color={'bg-[#e19063]'} text={'get voucher code'} borderColor={'border-[#e19063]'} />
        </div>
    </div>;
};


export default Order;
