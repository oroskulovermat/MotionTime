import '../../../Style/Header/Header.scss'
// import {useState} from "react"
import rate from '../../img/rate.svg'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';
import Menu from "../Menu/menu";

const Header = () => {

    return (
        <div>
            <Menu/>
            <div className='w-[75%] flex h-[15%] items-center justify-around  absolute mt-2 ml-[25%]'>
                <div className='w-[35%]'>
                    <div className='flex justify-between items-center w-full'>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className='hover:text-gray-700 cursor-pointer text-white px-2 absolute z-2'
                        />
                       <div className="input-group">
                           <label htmlFor="in">поиск</label>
                           <input
                               id="in"
                               type="search"
                               autoComplete='off'
                               name='search'
                           />
                       </div>
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
                         style={{borderRadius: "40%"}}>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faUser}/>
                        {/*<img className='' src={rate} alt=""/>*/}
                    </div>
                    <div className='ml-2'>
                        <p className='text-[#858585]'>Oroskul uulu Ermat</p>
                        <p className='text-[#CCCCCC]'>Oroskul uulu Ermat</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;