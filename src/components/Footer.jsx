import React from "react";
import '../styles/landingPage.css'
const Footer = () => {
    const links1 = [
        {
            name: 'Team', link: '/'
        },
        {
            name: 'Brand Guidelines', link: '/'
        },
        {
            name: 'History', link: '/'
        },
        {
            name: 'Terms & Privacy', link: '/'
        }
    ]
    const links2 = [
        {
            name: 'Contact Us', link: '/'
        },
        {
            name: 'How To Order', link: '/'
        },
        {
            name: 'Menu', link: '/'
        },
        {
            name: 'Tracing Status', link: '/'
        }
    ]

    return <div className="w-screen overflow-hidden gap-32 flex md:flex-row flex-col py-11 lg:px-48 px-10 bg-[#393939] text-white">
        <div className="flex flex-col md:items-start items-center">
            <h1 className="header01 md:text-3xl text-xl mb-10">About Us</h1>
            <p className="header01Sub md:text-base text-sm md:max-w-xs">Lorem ipsum dolor sit amet, consec
                tetur adipisicing elit, sed do eiumod tempor incididunt ultimam </p>
        </div>
        <div className="flex md:flex-row flex-col gap-20">
            <div className="flex flex-col md:items-start items-center">
                <h1 className="linksHeader text-xl mb-12">About</h1>
                {
                    links1.map((link, index) => (
                        <p className="text-base header01Sub cursor-pointer hover:text-[#7f2e21]" key={index}>{link.name}</p>
                    ))
                }
            </div>
            <div className="flex flex-col md:items-start items-center">
                <h1 className="linksHeader text-xl mb-12">Services</h1>
                {
                    links2.map((link, index) => (
                        <p className="text-base header01Sub cursor-pointer hover:text-[#7f2e21]" key={index}>{link.name}</p>
                    ))
                }
            </div>
            <div className="flex flex-col md:items-start items-center">
                <h1 className="linksHeader text-xl mb-12">Outlet</h1>
                <p className="header01Sub max-w-xs">5 Abu Seaada Street, Asyut,<br /> Egypt </p>
            </div>
        </div>

    </div>;
};

export default Footer;
