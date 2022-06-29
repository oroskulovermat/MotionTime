import React from 'react';
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";
import departments from '../../assets/img/departments.svg'

const Departments = () => {
    return (
        <Layout>
            <section id='departments'>
                <div className="container">
                    <div className='departments-general'>
                        <div className='departments-general__left'>
                            <h1 className='text-[#DA8517] text-[24px] mb-6'>Отделы</h1>
                            <Link to='/departments/page'>
                                <div className="departments-general__left__block">
                                    <p className='text-[#DA8517] text-[16px]'>Front-End</p>
                                </div>
                            </Link>
                            <Link to='/departments/page'>
                                <div className="departments-general__left__block">
                                    <p className='text-[#DA8517] text-[16px]'>Design</p>
                                </div>
                            </Link>
                        </div>
                        <div className='departments-general__right'>
                            <button className='departments-general__right__btn'>
                                <span>
                                    <img src={departments} alt=""/>
                                <p className='text-[#DA8517] mx-2'>Добавить филиал</p>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Departments;