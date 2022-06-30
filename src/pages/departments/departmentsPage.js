import React from 'react';
import Layout from "../../components/Layout/Layout";

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
                                   <div className='depart-page__general__left__info__left'>
                                       <div className='depart-page__general__left__info__left__red'/>
                                       <div className='ml-[28%]'>
                                           <h1 className='text-[#B1B1B1] text-[16px]'>Cholponbaevna Shirin</h1>
                                           <p className='text-[#7C7C7C] text-[14px]'>UX/UI designer</p>
                                       </div>
                                       {/*<div className='depart-page__general__left__info__left__green'/>*/}
                                   </div>
                                   <div className='depart-page__general__left__info__right'>
                                       <div className='depart-page__general__left__info__right__line'/>
                                       <div className='depart-page__general__left__info__right__line'/>
                                       <div className='depart-page__general__left__info__right__line'/>
                                   </div>

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