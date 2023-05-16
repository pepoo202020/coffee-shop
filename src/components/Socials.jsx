import React from "react";
import { BsFacebook, BsTelegram, BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillGooglePlusCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
const Socials = () => {
    return <div className="w-screen flex flex-wrap items-center justify-center gap-5 py-10 bg-[#af6d4c]">
        <Link to='https://www.facebook.com/abanob.shosh/?locale=ar_AR' >
            <BsFacebook className="text-4xl text-white hover:text-[#7f2e21] hover:scale-x-110 transition-all" />
        </Link>
        <Link to='https://wa.me/01126884803'>
            <IoLogoWhatsapp className="text-4xl text-white hover:text-[#7f2e21] hover:scale-x-110 transition-all" />
        </Link>
        <Link to='https://t.me/popo01126'>
            <BsTelegram className="text-4xl text-white hover:text-[#7f2e21] hover:scale-x-110 transition-all" />
        </Link>
        <Link to='https://github.com/pepoo202020'>
            <BsGithub className="text-4xl text-white hover:text-[#7f2e21] hover:scale-x-110 transition-all" />
        </Link>
        <Link to='mailto:poposhosh23@gmail.com'>
            <AiFillGooglePlusCircle className="text-4xl text-white hover:text-[#7f2e21] hover:scale-x-110 transition-all" />
        </Link>

    </div>;
};

export default Socials;
