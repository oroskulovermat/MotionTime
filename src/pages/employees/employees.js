import React from 'react';
import Layout from "../../components/Layout/Layout";
import logoImport from '../../assets/img/imgImport.svg'

const Employees = () => {
    return (
        <Layout>
            <section id='employees'>
                <div className='container'>
                    <h1 className='text-[#DA8517] text-[24px] text-center mb-6'>Сотрудники</h1>
                    <div className='employees--general'>
                        <div className='employees--general__block'>
                            <div className='employees--general__block__left'>
                                <h1 className='text-[#DA8517] text-[24px]'>Design</h1>
                                <p className='text-[#AAAAAA] '>10 сотрудников</p>
                                <p className='text-[#DA8517] text-end'>Посмотреть все</p>
                                <div className='employees--general__block__left__status'>
                                    <div className='employees--general__block__left__status__left'>
                                        <p>Статус</p>
                                        <p>Сотрудник</p>
                                    </div>
                                    <div className='employees--general__block__left__status__right'>
                                        <p>Дата</p>
                                        <p>Пришел</p>
                                        <p>Ушел</p>
                                    </div>
                                </div>
                                <div className='employees--general__block__left__information'>
                                    <div className='w-full flex mt-6 justify-between'>
                                        <div className='flex items-center  justify-around w-[40%]'>
                                            <div className='employees--general__block__left__information__red'/>
                                            <div>
                                                <h1 className='text-[#B1B1B1] text-[16px]'> Cholponbaevvna</h1>
                                                <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                            </div>
                                        </div>
                                        <div className='employees--general__block__left__information__line'>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                        </div>
                                    </div>
                                    <div className='w-full flex mt-6 justify-between'>
                                        <div className='flex items-center justify-around  w-[40%]'>
                                            <div className='employees--general__block__left__information__green'/>
                                            <div>
                                                <h1 className='text-[#B1B1B1] text-[16px]'> Cholponbaevvna</h1>
                                                <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                            </div>
                                        </div>
                                        <div className='employees--general__block__left__information__line'>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                            <div className='employees--general__block__left__information__line__dashed'/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='employees--general__block__right'>
                                    <h1 className='text-[#B4B4B4] text-[18px]'>За последний месяц</h1>
                                   {/*кызыл жашыл*/}
                                <div className='employees--general__block__right__diagram my-2'>
                                    <div/>
                                </div>
                                   {/*кызыл жашыл*/}
                                    <div className='flex justify-between '>
                                        <p className='text-[#989898] text-[14px]'>Вовремя:6</p>
                                        <p className='text-[#989898] text-[14px]'>Опозданий:10</p>
                                    </div>
                                    <button className='bg-[#EEA950] my-5 p-2  w-full bg-opacity-[27%] rounded-[5px] flex  items-center hover:bg-opacity-[35%]'>
                                        <i className="fas fa-user  text-[#A8A8A8] m-1"/><span className='text-[#DA8517]'>Добавить сотрудника</span></button>
                                    <button className='bg-[#EEA950] my-5 p-2 w-full bg-opacity-[27%] rounded-[5px] flex  items-center hover:bg-opacity-[35%]'>
                                        <img src={logoImport} alt="img"/> <span className='text-[#DA8517]'>Импортировать сотрудника</span></button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Employees;