import React from 'react';
import Menu from "./header/menu"
import Hero from "./hero/hero"
import Footer from "./footer/footer"
import Employees from "../../pages/employees/employees";
import Layout from "../Layout/Layout";
import Header from "./header/header";

const Home = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Hero/>
            <Footer/>
        </>
    );
};

export default Home;