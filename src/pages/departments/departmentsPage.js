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