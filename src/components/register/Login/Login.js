import {FC} from 'react';
import '../../../Style/Login/Login.scss';
import  Email from '../../img/email.svg'
import { useForm } from 'react-hook-form';
import {NavLink} from "react-router-dom";

import Link from 'react-router-dom'
import {publicApi} from "../../HTTP/pudlicApi";
import Layout from "../../Layout/Layout";
import code from "../../img/code.svg";



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        publicApi.post("user/")
            .then(data => {
                console.log("ok")
            })
        console.log(data)
    }

    // console.log(errors);

    return (
        <div className='login'>
            <div className='login__container relative '>
                <div className='login__container__left absolute z-10'>
                    <div className='login__container__left__content'>
                        <h2 className='login__container__left__content__title text-2xl text-center  mb-6'>У вас еще нет аккаунта?</h2>
                        <p className=' login__container__left__content__text mb-6'>
                            Если у вас еще нет аккаунта, нажмите кнопку ниже и зарегистрируйтесь.
                        </p>
                        <NavLink className='h-[60px] login__container__left__content__btn mb-6 flex justify-center' to='/register'>
                            <button className='font-bold'>
                                Зарегистрироваться
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className='login__container__end '>
                    <div className='login__container__end__content pt-16'>
                        <form onSubmit={handleSubmit(onSubmit)}
                              className='login__container__end__content__form'>
                            <h1 className='login__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Войти</h1>
                            <p className='text-blue-900 font-medium text-center pb-6' >или используйте вашу электронную почту
                                для регистрации</p>
                            <div className='flex items-center mb-6'>
                                <img className='px-2 absolute z-2' src={Email} alt=""/>
                                <input type="email"
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            </div>
                            <div className='flex justify-between items-center mb-3'>
                                <img className='px-2 absolute z-2' src={code} alt=""/>
                                <input type="password" id="password"
                                       {...register("password", {required: true})}
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Пароль" required/>
                            </div>

                            <div className='flex justify-between  items-center my-6 '>
                                {/*<input type="checkbox"*/}
                                {/*       {...register("checkbox",)}*/}
                                {/*       className="bg-[#DFDFDF] h-[18px] w-[18px]  p-2.5 "*/}
                                {/*       placeholder="Пароль" required/>*/}
                                <NavLink to='/forgot-password' className='font-medium text-[#000346] hover:text-blue-500'>
                                    Забыли пароль?
                                </NavLink>
                            </div>

                            <button
                                type='submit'
                                className=" w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;























// import {FC} from 'react';
// import '../../Style/Login/Login.scss';
// import  Email from '../../../img/email.svg'
// import { useForm } from 'react-hook-form';
// import {NavLink} from "react-router-dom";
//
// import Link from 'react-router-dom'
// import {publicApi} from "../../HTTP/pudlicApi";
// import Layout from "../../Layout";
//
//
//
// const Login: FC = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = (data:any) => {
//         console.log(data)
//     }
//
//     // console.log(errors);
//
//     return (
//         <div className='login'>
//             <div className='login__container relative '>
//                 <div className='login__container__left absolute z-10'>
//                     <div className='login__container__left__content pt-20'>
//                         <form onSubmit={handleSubmit(onSubmit)}
//                               className='login__container__left__content__form'>
//
//                             <h1 className='login__container__left__content__form__title font-bold text-3xl  text-center pb-6'>Создать аккаунт</h1>
//                             <p className='text-blue-900 font-medium text-center pb-6' >Для регистрации необходимо пройти почтовую
//                                 аутентификацию</p>
//                             <div className='flex items-center'>
//                                 <img className='px-2 absolute z-2' src={Email} alt=""/>
//                                 <input type="email"
//                                        className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                        placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//
//
//                                 {/*<input type="email" id="email"*/}
//                                 {/*       placeholder="Email" required/>*/}
//                             </div>
//                             <button
//                                 type='submit'
//                                 className=" mt-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
//                                 Отправить
//                             </button>
//                         </form>
//                     </div>
//
//
//
//
//
//                     {/*<div className='login__container__left__content'>*/}
//                     {/*    <h2 className='login__container__left__content__title text-2xl text-center  mb-6'>Вы уже зарегистрировались?</h2>*/}
//                     {/*    <p className=' login__container__left__content__text mb-6'>Если вы уже зарегистрированы,*/}
//                     {/*        нажмите кнопку ниже и войдите.</p>*/}
//                     {/*    <NavLink className='h-[60px] login__container__left__content__btn mb-6 flex justify-center' to='/login'>*/}
//                     {/*        <button className='font-bold'>*/}
//                     {/*            Войти*/}
//                     {/*        </button>*/}
//                     {/*    </NavLink>*/}
//                     {/*</div>*/}
//                 </div>
//
//
//
//                 <div className='login__container__end '>
//                     <div className='login__container__end__content'>
//                     <h2 className='login__container__end__content__title text-2xl text-center  mb-6'>Вы уже зарегистрировались?</h2>
//                     <p className=' login__container__end__content__text mb-6'>Если вы уже зарегистрированы,
//                         нажмите кнопку ниже и войдите.</p>
//                     <NavLink className='h-[60px] login__container__end__content__btn mb-6 flex justify-center' to='/login'>
//                         <button className='font-bold'>
//                             Войти
//                         </button>
//                     </NavLink>
//                 </div>
//
//                     {/*<div className='login__container__end__content pt-20'>*/}
//                     {/*    <form onSubmit={handleSubmit(onSubmit)}*/}
//                     {/*          className='login__container__end__content__form'>*/}
//
//                     {/*        <h1 className='login__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Создать аккаунт</h1>*/}
//                     {/*        <p className='text-blue-900 font-medium text-center pb-6' >Для регистрации необходимо пройти почтовую*/}
//                     {/*            аутентификацию</p>*/}
//                     {/*        <div className='flex items-center'>*/}
//                     {/*            <img className='px-2 absolute z-2' src={Email} alt=""/>*/}
//                     {/*            <input type="email"*/}
//                     {/*                   className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
//                     {/*                   placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />*/}
//
//
//                     {/*            /!*<input type="email" id="email"*!/*/}
//                     {/*            /!*       placeholder="Email" required/>*!/*/}
//                     {/*        </div>*/}
//                     {/*        <button*/}
//                     {/*            type='submit'*/}
//                     {/*            className=" mt-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">*/}
//                     {/*            Отправить*/}
//                     {/*        </button>*/}
//                     {/*    </form>*/}
//                     {/*</div>*/}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Login;
//
//
//
