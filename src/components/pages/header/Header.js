import '../../../Style/Header/Header.scss'
import vector from '../../img/Group1.svg'
import m from '../../img/M.svg'
import home from '../../img/Category.svg'
import rate from '../../img/rate.svg'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines, faGear, faMagnifyingGlass, faRightFromBracket, faUser} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

const Header = () => {
    // const [focus,setFocus] = useState("home")
    const link = window.location.href.split("/").pop();
    console.log(link,"link")
    return (
        <div>
            <div className='w-[75%] flex h-[15%] items-center justify-around  absolute mt-2 ml-[25%]'>
                <div className='w-[35%]'>
                    <div className='flex justify-between items-center w-full'>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className='hover:text-gray-700 cursor-pointer text-[#1D1929] px-2 absolute z-2'
                        />
                        <input
                            type="text"
                            autoComplete='off'
                            name='search'
                            placeholder='Поиск...'
                            className='w-full bg-[#E8E8EA] border-none rounded-3xl pl-9 py-2'
                        />
                    </div>
                </div>
                <NavLink to='/rate' className='rate flex justify-center w-[10%] h-[35px] mt-7'>
                  <div className='flex justify-between items-center'>
                      <img className='px-2' src={rate} alt=""/>
                      <p className='px-2 text-[#DA8517]'>Тариф</p>
                  </div>
                </NavLink>
                <div className='flex mt-7 items-center'>
                    <div className='w-[48px] h-[48px] rounded-5xl bg-blue-900 flex items-center justify-center'
                    style={{borderRadius:"40%"}}>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faUser}/>
                        {/*<img className='' src={rate} alt=""/>*/}
                    </div>
                    <div className='ml-2'>
                        <p className='text-[#858585]'>Oroskul uulu Ermat</p>
                        <p className='text-[#CCCCCC]'>Oroskul uulu Ermat</p>
                    </div>
                </div>
            </div>
            <div className='header  absolute'>
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
                        <NavLink to='/'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link ?"" : "active"}`}>
                                <img className='mx-3' src={home} alt=""/>
                                <p>Главная</p>
                            </button>
                        </NavLink>
                    </div>
                    <div  className='ml-5 my-5 h-[40px]'>
                        <NavLink to='/employees'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "employees" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                <p>Сотрудники</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className=' ml-5 my-5 h-[40px]'>
                        <NavLink to='/branches'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "branches" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                <p>Филиалы</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className='ml-5  my-5 h-[40px]'>
                        <NavLink to='/departments'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "departments" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                <p>Отделы</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className='ml-5  my-5 h-[40px]'>
                        <NavLink to='/reports'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "reports" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faFileLines}/>
                                <p>Отчеты</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className='ml-5  my-5 h-[40px]'>
                        <NavLink to='/settings'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "settings" || link === "rate" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faGear}/>
                                <p>Настройки</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className='mt-16 w-[70%]'>
                        <p className='text-center font-medium text-white text-xl'>MY PROFILE</p>
                    </div>
                    <div className='ml-5  my-5 h-[40px]'>
                        <NavLink to='/profile'>
                            <button className={`header__navbar my-5 w-full h-[40px] flex ml-1  items-center ${link === "profile" ? "active" : ""}`}>
                                <FontAwesomeIcon className='mx-3' icon={faUser}/>
                                <p>Профиль</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className='ml-5  my-5 h-[40px]'>
                        <NavLink to='/login'>
                            <button className='header__navbar my-5 w-full h-[40px] flex ml-1  items-center'>
                                <FontAwesomeIcon className='mx-3' icon={faRightFromBracket}/>
                                <p>Выйти</p>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;