import React from 'react';
import bgs from "./../../../assets/img/image 202 (Traced).svg";
import user from "./../../../assets/img/User.svg"
import {useState,useEffect} from "react";

const Header = () => {
    const [bg, setBg] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setBg(true)
        } else {
            setBg(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <header id="header" className={bg ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="header--general">
                    <div className="header--general__group">
                        <div><i className="fas fa-search"/></div>
                        <label htmlFor="in">поиск</label>
                        <input
                            id="in"
                            type="search"
                            autoComplete='off'
                            name='search'
                        />
                    </div>

                    <div>
                        <div className="header--general__block">
                            <img src={bgs} alt="img"/>
                            <h1>Тарифы</h1>
                        </div>
                    </div>
                    <div className="header--general__gen">
                        <img src={user} alt="img"/>
                        <div>
                            <h1>Cholponbaevvna</h1>
                            <p>cholponbaevnashi.....</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;