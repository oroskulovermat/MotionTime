import React, {useState} from 'react';
import bg from "./../../../assets/img/Group1.svg"
import m from "./../../../assets/img/logoM.svg"
import {Link} from "react-router-dom"

const Menu = () => {
    const [menu, serMenu] = useState(false)

    return (
        <>
            <div className="menu" onClick={() => serMenu(true)}><i className="fas fa-bars"/></div>
            {
                menu && (
                    <section id="menu">
                        <div className="container">
                            <div className="menu--general">
                                <div className="menu--general__img">
                                    <img src={bg} alt="img"/>
                                    <div className="menu__close" onClick={() => serMenu(false)}><i
                                        className="fas fa-close"/></div>
                                </div>
                                <div className="menu--general__logo">
                                    <img src={m} alt=""/>
                                </div>
                                <div className="menu--general__navbar">
                                    <h1>WORKPLACE</h1>
                                    <div className="menu--general__navbar--nav">
                                        <div><Link to='/'><i className="fas fa-home"/><span>Главная</span></Link></div>
                                        <div><Link to='/employees'><i className="fas fa-home"/><span>Сотрудники</span></Link></div>
                                        <div><Link to='/branches'><i className="fas fa-home"/><span>Филиалы</span></Link></div>
                                        <div><Link to='/departments'><i className="fas fa-home"/><span>Отделы</span></Link></div>
                                    </div>
                                </div>
                                <div className="menu--general__navbar2">
                                    <h1>MY PROFILE</h1>
                                    <div className="menu--general__navbar--nav">
                                        <div><i className="fas fa-home"/> <span>Главная</span></div>
                                        <div><i className="fas fa-home"/> <span>Главная</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Menu;