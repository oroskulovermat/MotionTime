import React from 'react';
import Menu from "./header/menu"
import Hero from "./hero/hero"
import Header from "./header/header";

const Home = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Hero/>
        </>
    );
};

export default Home;