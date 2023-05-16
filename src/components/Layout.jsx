import React from "react";
import Routes from "../routes/Routes";
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    return <div className="overflow-x-hidden">
        <Header />
        <Routes />
        <Footer />
    </div>;
};

export default Layout;
