import React from 'react';
import Layout from "../../components/Layout/Layout";

const EmployeePage = () => {
    return (
        <Layout>
            <section id='employee-page'>
                <div className='container'>
                    <div className='employee-page'>
                        <div className='employee-page__general'>
                            <div className='employee-page__general__head'>
                                <div className="employee-page__general__head__info">
                                    <div className='employee-page__general__head__info__left'>
                                        <p>ФИО</p>
                                        <p>Должность</p>
                                        <p>Филиал</p>
                                    </div>
                                    <div className='employee-page__general__head__info__right'>
                                        <p>Cholponbaevna Shirin</p>
                                        <p>UX/UI Дизайнер</p>
                                        <p>Motion Web</p>
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

export default EmployeePage;