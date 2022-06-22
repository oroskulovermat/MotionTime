import React from 'react';
import vector from "../../img/Group1.svg";
import m from "../../img/M.svg";
import {Link} from "react-router-dom";
import home from "../../img/Category.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileLines, faGear, faRightFromBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Menu = () => {
    const link = window.location.href.split("/").pop();
    console.log(link, "link")

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <h1 onClick={() => setMenu(true)} className="fixed text-white text-3xl">open</h1>
            {menu && (
                <div className='header'>
                    <div className='header__head flex items-center justify-center'>
                        <img src={vector} alt=""/>
                        <div className='flex justify-center items-center flex-col absolute z-10'>
                            <img className='' src={m} alt=""/>
                            <p className='font-medium text-xl text-[#FFC881]'>Motion Time</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-[70%]'>
                            <p className='text-center font-medium text-white text-xl'>WORKPLACE</p>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link ? "" : "active"}`}>
                                    <img className='mx-3' src={home} alt=""/>
                                    <p>Главная</p>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-5 my-5 h-[40px]'>
                            <Link to='/employees'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "employees" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                    <p>Сотрудники</p>
                                </button>
                            </Link>
                        </div>
                        <div className=' ml-5 my-5 h-[40px]'>
                            <Link to='/branches'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "branches" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                    <p>Филиалы</p>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/departments'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "departments" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                    <p>Отделы</p>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/reports'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "reports" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faFileLines}/>
                                    <p>Отчеты</p>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/settings'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "settings" || link === "rate" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faGear}/>
                                    <p>Настройки</p>
                                </button>
                            </Link>
                        </div>
                        <div className='mt-16 w-[70%]'>
                            <p className='text-center font-medium text-white text-xl'>MY PROFILE</p>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/profile'>
                                <button
                                    className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "profile" ? "active" : ""}`}>
                                    <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                    <p>Профиль</p>
                                </button>
                            </Link>
                        </div>
                        <div className='ml-5  my-5 h-[40px]'>
                            <Link to='/login'>
                                <button className='header__navbar my-5 w-full h-[40px] flex ml-1  items-center'>
                                    <FontAwesomeIcon className='mx-3' icon={faRightFromBracket}/>
                                    <p>Выйти</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <h1 onClick={() => setMenu(false)} className="fixed bottom-0 text-white text-3xl">close</h1>

        </div>
    );
};

export default Menu;