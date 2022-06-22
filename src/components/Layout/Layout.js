
import React from 'react';
import Footer from '../pages/footer/Footer';
import Header from '../pages/header/Header';
// import Menu from "../pages/Menu/menu";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;