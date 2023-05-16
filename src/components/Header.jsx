import React, { useState } from "react";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'
const Header = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(pre => !pre)
    }


    const links = [
        {
            displayName: 'Home',
            navigation: '/home'
        },
        {
            displayName: 'About',
            navigation: '/about'
        },
        {
            displayName: 'Menu',
            navigation: '/menu'
        },
        {
            displayName: 'Promo',
            navigation: '/promo'
        },
        {
            displayName: 'Contact',
            navigation: '/contact'
        }
    ]

    return <header className="w-screen h-[118px] bg-[#a3563880] fixed z-50 transition-all">
        <div className="w-full h-full relative transition-all">
            <div className="flex items-center justify-around h-full">
                <div className="">
                    <Link to={'/home'}>
                        <img src={logo} alt="logo" className="md:w-auto h-6" />
                    </Link>
                </div>
                <div className="md:flex hidden items-center gap-8">
                    {
                        links.map((link, index) => (
                            <NavLink className={navActive => navActive.isActive ? 'text-[#7f2e21] cursor-default' : 'text-white'} to={link.navigation} key={index}>
                                <span className={` text-xl font-bold`}> {link.displayName}</span>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="md:hidden text-white text-xl cursor-pointer" onClick={handleMenu}>
                    <BiMenu />

                </div>
            </div>
            {
                menu && <div className="flex flex-col py-3 w-full items-center gap-8 bg-[#a35638] transition-all">
                    {
                        links.map((link, index) => (
                            <NavLink className={navActive => navActive.isActive ? 'text-[#7f2e21] cursor-default' : 'text-white'} to={link.navigation} key={index}>
                                <span className={` text-xl font-bold`}> {link.displayName}</span>
                            </NavLink>
                        ))
                    }
                </div>
            }
        </div>
    </header>;
};

export default Header;
