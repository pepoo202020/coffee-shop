import React from "react";
import '../styles/landingPage.css'
import Product from "./Product";
import product01 from '../assets/product01.png'
import product02 from '../assets/product02.png'
import product03 from '../assets/product03.png'
import product04 from '../assets/product04.png'
import product05 from '../assets/product05.png'
import product06 from '../assets/product06.png'
import Actions from "./Actions";

const Popular = () => {
    const products = [
        {
            image: product01, title: 'Product 01', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        },
        {
            image: product02, title: 'Product 02', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        },
        {
            image: product03, title: 'Product 03', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        },
        {
            image: product04, title: 'Product 04', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        },
        {
            image: product05, title: 'Product 05', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        },
        {
            image: product06, title: 'Product 06', description: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.'
        }
    ]
    return <div className="w-screen py-36 overflow-hidden md:px-0 px-10 bg-[#e19063] flex flex-col items-center justify-center">
        <h1 className="popularHeading md:text-8xl text-3xl text-white capitalize mb-10">Popular Menu</h1>
        <p className="paragraph md:max-w-md md:text-lg text-xs text-white mb-10 text-center">
            Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.
        </p>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 mb-10  gap-10">
            {
                products.map((product, index) => (
                    <Product key={index} image={product.image} title={product.title} desc={product.description} />
                ))
            }
        </div>
        <Actions text={'see more menu'} link={'/'} color={'bg-[#a35638]'} borderColor={'border-[#a35638]'} />
    </div>;
};

export default Popular;
