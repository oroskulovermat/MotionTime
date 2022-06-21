import '../../../Style/Register/CreateAccount.scss';
import  code from '../../img/code.svg'
import Email from "../../img/email.svg";
import User from "../../img/User.svg";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {publicApi} from "../../HTTP/pudlicApi";
import {toast} from "react-toastify";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {getCompany} from "../../redux/action/Action";
import {useEffect} from "react";


const CreateAccount = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const company = useSelector(state => state.getCompany);
    console.log(company,"copm")
    useEffect(() => {
        dispatch(getCompany())
    },[])
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Введите name'),
        password: Yup.string()
            .required('Введите пароль'),
        confirmPassword: Yup.string()
            .required('Введите пароль')
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')

    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (company){
            publicApi.put(`company/${company.id}/`,data)
                .then(data => {
                    alert("ok")
                    navigate("/profile")

                    console.log(data)
                }).catch(error => {
                toast.error('error')
                console.log(error)
            })
        }
        console.log(data)
    }
    return (
        <div className='account'>
            <div className='account__container relative '>
                <div className='account__container__left absolute z-10'>
                    <div className='account__container__left__content'>
                        <h2 className='account__container__left__content__title text-2xl text-center  mb-6'>Вы уже зарегистрировались?</h2>
                        <p className='account__container__left__content__text mb-6'>Если вы уже зарегистрированы,
                            нажмите кнопку ниже и войдите.</p>
                        <button className='account__container__left__content__btn h-[60px] mb-6 '>
                            Войти
                        </button>
                    </div>
                </div>
                <div className='account__container__end '>
                    <div className='account__container__end__content'>
                        <form onSubmit={handleSubmit(onSubmit)} className='account__container__end__content__form'>
                            <h1 className='account__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Создать аккаунт</h1>
                            <div className='flex items-center mb-3'>
                                <img className='px-2 absolute z-2' src={User} alt=""/>
                                <input type="text" id="text"
                                       {...register("name", {required: true})}
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Название компании" required/>
                            </div>

                            <div className='flex items-center mb-3'>
                                <img className='px-2 absolute z-2' src={Email} alt=""/>
                                <input type="email"
                                       value={company.email}
                                       {...register("email",)}
                                       className="bg-[#DFDFDF]  px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Email" required/>
                            </div>
                            <div className='flex items-center mb-3'>
                                <img className='px-2 absolute z-2' src={code} alt=""/>
                                <input type="password"
                                       {...register("password", {required: true})}
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Пароль" required/>
                            </div>
                            <div className='flex items-center mb-3'>
                                <img className='px-2 absolute z-2' src={code} alt=""/>
                                <input type="password"
                                       {...register("confirmPassword", {required: true})}
                                       className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Код потверждения" required/>
                            </div>
                            <button
                                type='submit'
                                className=" mt-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Зарегистрироваться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;


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


