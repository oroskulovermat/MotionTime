import {FC} from 'react';
import '../../../Style/Register/Register.scss';
import  Email from '../../img/email.svg'
import { useForm } from 'react-hook-form';
import {NavLink, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'react-router-dom'
import {publicApi} from "../../HTTP/pudlicApi";
import Layout from "../../Layout/Layout";



const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        publicApi.post("user/sendemail/",data)
            .then(data => {
                alert("вам отправлено код")
                navigate("/register/config")
                console.log(data)
            }).catch(error => {
                toast.error('error')
            console.log(error)
        })
        console.log(data)
    }

    // console.log(errors);

    return (
           <div className='register'>
               <ToastContainer />
               <div className='register__container relative'>
                   <div className='register__container__left absolute z-10'>
                       <div className='register__container__left__content'>
                           <h2 className='register__container__left__content__title text-2xl text-center  mb-6'>Вы уже зарегистрировались?</h2>
                           <p className=' register__container__left__content__text mb-6'>Если вы уже зарегистрированы,
                               нажмите кнопку ниже и войдите.</p>
                           <NavLink className='h-[60px] register__container__left__content__btn mb-6 flex justify-center' to='/login'>
                               <button className='font-bold'>
                                   Войти
                               </button>
                           </NavLink>
                       </div>
                   </div>
                   <div className='register__container__end '>
                       <div className='register__container__end__content flex justify-center'>
                           <form onSubmit={handleSubmit(onSubmit)}
                                 className='register__container__end__content__form'>
                               <h1 className='register__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Создать аккаунт</h1>
                               <p className='text-blue-900 font-medium text-center pb-6' >Для регистрации необходимо пройти почтовую
                                   аутентификацию</p>
                               <div className='flex items-center'>
                                   <img className='px-2 absolute z-2' src={Email} alt=""/>
                                   <input type="email"
                                          className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />

                                   {/*<input type="text"*/}
                                   {/*       {...register("who", {required: true})}*/}
                                   {/*       className="bg-none h-[0px] w-[0px]  "*/}
                                   {/*       value='C'*/}
                                   {/*       placeholder="Кто" required/>*/}

                                   {/*<input type="email" id="email"*/}
                                   {/*       placeholder="Email" required/>*/}
                               </div>
                               <button
                                   type='submit'
                                   className=" mt-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                   Отправить
                               </button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
    );
};

export default Register;

// <div className='flex items-center h-full justify-center' >
//     <div className='form-container max-w-[450px]  w-full '>
//         <div className='bg-gray-200 p-8 rounded-lg'>
//             <div className='max-w-[300px] mx-auto'>
//                 <img src="https://storage.worktime.kg/main-backend-static/img/png/%D0%BB%D0%BE%D0%B3%D0%BE.png" alt=""/>
//                 <div  className='my-5'>
//                     <h3 className='text-2xl font-bold'>Регистрация</h3>
//                     <p className='text-sm my-3'>Для регистрации необходимо пройти аунтентификацию телефонного номера</p>
//                     <form>
//                         <div>
//                             <input type="email" id="email"
//                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                    placeholder="name@gmail.com" required/>
//                         </div>
//                         <button
//                             type='submit'
//                             className=" mt-5 w-full py-2 px-4 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
//                             Отправить
//                         </button>
//                     </form>
//
//                     <div className='flex justify-center mt-4'>
//                         <p>Уже есть аккаунт?</p>  &nbsp;&nbsp;
//                         <a href="/login/" className='text-purple-900 cursor-pointer' >Войти</a>
//                         {/*<NavLink to='/login' className='text-purple-900 cursor-pointer'>Войти</NavLink>*/}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


// import React from 'react';
//
// const Layout = ({children}) => {
//     return (
//         <div>
//             <Header/>
//             {children}
//             <Footer/>
//         </div>
//     );
// };
//
// export default Layout;


