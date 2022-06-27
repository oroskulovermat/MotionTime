import React from 'react';
import Header from "../main/header/header";
import Footer from "../main/footer/footer";
import Home from "../main/home";

const Layout = ({children}) => {
    return (
        <>
            <Home/>
                {children}
            <Footer/>

        </>
    );
};

export default Layout;