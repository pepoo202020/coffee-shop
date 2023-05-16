import React from "react";
import { Routes as Routers, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import AboutPage from "../pages/AboutPage";
import Menu from "../pages/Menu";
import Promo from "../pages/Promo";
import Contact from "../pages/Contact";
const Routes = () => {
    return <Routers>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/contact" element={<Contact />} />
    </Routers>;
};

export default Routes;
