import React from "react";
import testimonialsImg from '../assets/testimonials.png'
import '../styles/landingPage.css'
const Testimonials = () => {
  return <div className="h-screen w-screen overflow-hidden relative ">
    <div className="w-full -z-10 h-full absolute top-0 left-0">
      <img src={testimonialsImg} alt="testimonials" className="bg-cover w-full h-full" />
    </div>
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#a3563880]">
      <h1 className="text-center testimonialsHeading md:text-6xl text-2xl mb-10  text-white">Peace On Earth A <br />
        Wonderful Wish But No Way</h1>
      <h1 className="testimonialsSubTitle md:text-4xl text-xl text-white">Lloyd Garcia</h1>
    </div>
  </div>;
};

export default Testimonials;
