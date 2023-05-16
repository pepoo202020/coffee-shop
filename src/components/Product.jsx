import React from "react";
import '../styles/landingPage.css'
const Product = ({ image, title, desc, key }) => {
    return <div className="flex flex-col items-center mb-10" key={key}>
        <img src={image} alt='product' className="rounded-full w-60 mb-10" />
        <h1 className="productTitle md:text-xl text-center text-sm font-bold text-white mb-5">{title}</h1>
        <p className="md:max-w-sm md:text-base text-xs text-center text-white productDesc">{desc}</p>
    </div>;
};

export default Product;
