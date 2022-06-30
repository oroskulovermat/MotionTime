import React from 'react';
import Layout from "../../components/Layout/Layout";
import logoImport from "../../assets/img/imgImport.svg";
import {Link} from "react-router-dom";

const DepartmentsPage = () => {
    return (
        <Layout>
            <section id='depart-page'>
                <div className="container">
                    <div className="depart-page">
                        <div className='depart-page__general'>
                           <div className='depart-page__general__left'>
                               <div className='depart-page__general__left__head'>
                                   <h1>Front-End</h1>
                                   <p>9 сотрудников</p>
                               </div>
                               <h1 className='text-[#DA8517] text-[16px] text-end'>Посмотреть все</h1>
                               <div className='depart-page__general__left__block'>
                                   <div className='depart-page__general__left__block__left'>
                                       <p className='text-[#DA8517] text-[16px]'>Статус </p>
                                       <p className='text-[#DA8517] text-[16px]'>Сотрудник</p>
                                   </div>
                                   <div className='depart-page__general__left__block__right'>
                                       <p className='text-[#DA8517] text-[16px]'>Дата</p>
                                       <p className='text-[#DA8517] text-[16px]'>Пришел</p>
                                       <p className='text-[#DA8517] text-[16px]'>Ушел</p>
                                   </div>
                               </div>
                               <div className='depart-page__general__left__info'>
                                   <div className='depart-page__general__left__info__block'>
                                       <Link to='/employee-page' className='flex w-full' >
                                           <div className='depart-page__general__left__info__block__left'>
                                               <div className='depart-page__general__left__info__block__left__red'/>
                                               <div className='ml-[28%]'>
                                                   <h1 className='text-[#B1B1B1] text-[16px]'>Cholponbaevna Shirin</h1>
                                                   <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                               </div>
                                               {/*<div className='depart-page__general__left__info__left__green'/>*/}
                                           </div>
                                           <div className='depart-page__general__left__info__block__right'>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                           </div>
                                       </Link>
                                       <div className='depart-page__general__left__info__block__line'>
                                       </div>
                                   </div>
                                   <div className='depart-page__general__left__info__block'>
                                       <div className='flex w-full' >
                                           <div className='depart-page__general__left__info__block__left'>
                                               <div className='depart-page__general__left__info__block__left__green'/>
                                               <div className='ml-[28%]'>
                                                   <h1 className='text-[#B1B1B1] text-[16px]'>Cholponbaevna Shirin</h1>
                                                   <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                               </div>
                                           </div>
                                           <div className='depart-page__general__left__info__block__right'>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                               <div className='depart-page__general__left__info__block__right__line'/>
                                           </div>
                                       </div>
                                       <div className='depart-page__general__left__info__block__line'>
                                       </div>
                                   </div>
                                   <div className='depart-page__general__left__info__block'>
                                       <div className='flex w-full' >
                                           <div className='depart-page__general__left__info__block__left'>
                                               <div className='depart-page__general__left__info__block__left__green'/>
                                               <div className='ml-[28%]'>
                                                   <h1 className='text-[#B1B1B1] text-[16px]'>Cholponbaevna Shirin</h1>
                                                   <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                               </div>
                                           </div>
                                           <div className='depart-page__general__left__info__block__right'>
                                               <p>01.07.22</p>
                                               <p>08.01</p>
                                               <p>18.11</p>
                                           </div>
                                       </div>
                                       <div className='depart-page__general__left__info__block__line'>
                                       </div>
                                   </div>

                               </div>
                           </div>
                            <div className='depart-page__general__right'>
                                    <div className='depart-page__general__right__block'>
                                        <h1 className='text-[#B4B4B4] text-[18px] '>За последний месяц</h1>
                                        {/*кызыл жашыл*/}
                                        <div className='depart-page__general__right__block__diagram my-2'>
                                            <div/>
                                        </div>
                                        {/*кызыл жашыл*/}
                                        <div className='flex justify-between  '>
                                            <p className='text-[#989898] text-[14px]'>Вовремя:6</p>
                                            <p className='text-[#989898] text-[14px]'>Опозданий:10</p>
                                        </div>
                                        <button className='w-full bg-[#EEA950] my-5 p-2   bg-opacity-[27%] rounded-[5px] flex  items-center hover:bg-opacity-[35%]'>
                                            <i className="fas fa-user  text-[#A8A8A8] m-1"/><span className='text-[#DA8517] text-[14px]'>Добавить сотрудника</span></button>
                                        <button className='bg-[#EEA950] my-5 p-2 w-full bg-opacity-[27%] rounded-[5px] flex  items-center hover:bg-opacity-[35%]'>
                                            <img src={logoImport} alt="img"/> <span className='text-[#DA8517] text-[14px]'>Импортировать сотрудника</span></button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DepartmentsPage;