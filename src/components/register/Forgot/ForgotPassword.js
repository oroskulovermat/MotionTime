// import {FC} from 'react';
import '../../../Style/Forgot/ForgotPassword.scss';
import  Email from '../../../assets/img/email.svg'
import { useForm } from 'react-hook-form';
import {NavLink} from "react-router-dom";

// import Link from 'react-router-dom'
// import {publicApi} from "../../HTTP/pudlicApi";
// import Layout from "../../Layout/Layout";
// import code from "../../img/code.svg";



const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors  } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    // console.log(errors);

    return (
        <div className='forgot'>
            <div className='forgot__container relative '>
                <div className='forgot__container__left absolute z-10'>
                    <div className='forgot__container__left__content'>
                        <h2 className='forgot__container__left__content__title text-2xl text-center  mb-6'>У вас еще нет аккаунта?</h2>
                        <p className=' forgot__container__left__content__text mb-6'>
                            Если у вас еще нет аккаунта, нажмите кнопку ниже и зарегистрируйтесь.
                        </p>
                        <NavLink  to='/register' className='h-[60px] forgot__container__left__content__btn mb-6 flex justify-center'>
                            <button className='font-bold'>
                                Зарегистрироваться
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className='forgot__container__end '>
                    <div className='forgot__container__end__content pt-16'>
                        <form onSubmit={handleSubmit(onSubmit)}
                              className='forgot__container__end__content__form '>
                            <h1 className='forgot__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Забыли пароль</h1>
                            <p className='text-[ #676767] w-[80%] font-medium text-center pb-6' >Напишите email, чтобы получить подтверждение кода</p>
                            <div className='flex items-center mb-6'>
                                <img className='px-2 absolute z-2' src={Email} alt=""/>
                                <input type="email"
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            </div>
                            <NavLink to='/config-forgot-password'>
                                <button
                                    type='submit'
                                    className="my-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Отправить
                                </button>
                            </NavLink>
                            <div className='flex justify-center '>
                                <NavLink to='/login' className='font-medium text-2xl text-[#000346] hover:text-blue-900'>
                                    Назад
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
