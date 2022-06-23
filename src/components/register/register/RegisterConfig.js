import React from 'react';
import '../../../Style/Register/configRegister.scss';
import  code from '../../../assets/img/code.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {publicApi} from "../../../HTTP/pudlicApi";
import {toast, ToastContainer} from "react-toastify";
import Email from "../../../assets/img/email.svg";


const RegisterConfig = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {  } } = useForm();
    const onSubmit = (data) => {
        publicApi.post("/user/authorization/",data)
            .then(response => {
                alert("ok")
                console.log(response)
                localStorage.setItem('email', JSON.stringify(data.email))
                console.log(data)
                navigate("/create-account")
            }).catch(error => {
            toast.error('error')
            console.log(error)
        })
        console.log(data)
    }

    return (
        <>
            <ToastContainer className='absolute' />
            <div className='config'>
                <div className='config__container relative '>
                    <div className='config__container__left absolute z-10'>
                        <div className='config__container__left__content'>
                            <h2 className='config__container__left__content__title text-2xl text-center  mb-6'>Вы уже зарегистрировались?</h2>
                            <p className='config__container__left__content__text mb-6'>Если вы уже зарегистрированы,
                                нажмите кнопку ниже и войдите.</p>
                            <NavLink to='/login' className='config__container__left__content__btn h-[60px] flex justify-center'>
                                <button>
                                    Войти
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='config__container__end '>
                        <div className='config__container__end__content mt-20'>
                            <form onSubmit={handleSubmit(onSubmit)}
                                  className='config__container__end__content__form'>
                                <h1 className='config__container__end__content__form__title font-bold text-3xl  text-center pb-6'>Создать аккаунт</h1>
                                <p className='text-blue-900 font-medium text-center pb-6' >Для регистрации необходимо пройти почтовую
                                    аутентификацию</p>
                                <div className='flex items-center mb-6'>
                                    <img className='px-2 absolute z-2' src={Email} alt=""/>
                                    <input type="email"
                                           className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} required />

                                </div>
                                <div className='flex items-center '>
                                    <img className='px-3 absolute z-2' src={code} alt=""/>
                                    <input type="text"
                                           {...register("pin_code", {required: true})}
                                           className="bg-[#DFDFDF] px-10 h-[55px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder='Код потверждения'
                                           required/>
                                </div>
                                <button
                                    type='submit'
                                    className=" mt-5 w-full py-3 px-4  bg-[#000234] hover:bg-[#000346] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Подвердить
                                </button>
                                <div className='flex justify-center py-3 text-2xl font-normal'>
                                    <NavLink to='/login' className='text-[#000346] text-center text-2xl cursor-pointer'>Назад</NavLink>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterConfig;


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


