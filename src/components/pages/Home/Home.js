import Layout from "../../Layout/Layout";
import Burger from "../burger";

const Home = () => {
    return (
        <Layout>
            <div className='home flex  ml-[22%] pt-[10%] text-white text-5xl'>
              <div className='home__left w-[55%] mt-[5px]  mx-5'>
                  <div className=' pt-4'>
                      <div className='pl-5'>
                          <p className='text-[#FFC881] text-2xl'>Текущая активность - Motion Web</p>
                          <p className='text-[#AAAAAA] text-lg'>0 отделов</p>
                      </div>
                          <p className='text-[#7C7C7C] text-lg flex justify-end pr-5'>Показать все</p>
                          <div className='home__left__content h-[50px] flex items-center '>
                              <p className='text-[#DA8517] text-xl pl-6'>Отдел</p>
                              <p className='text-[#DA8517] text-xl px-12'>Дата cоздания</p>
                              <p className='text-[#DA8517] text-xl'>Сотрудник</p>
                          </div>
                  </div>
              </div>
                <div className='home__right mx-5 w-[35%] h-[390px] mt-[5px]'>
                    <div className="flex justify-end pt-8 pr-3 w-full text-[#010049]">
                        <select
                            // onChange={(e)=> handleSelect(e)}
                            className="home__right--select" aria-label="">
                            <option value="">Прошлая неделя</option>
                            <option value="">Прошлая месяц </option>
                        </select>
                    </div>
                    <div className='flex flex-col pl-6'>
                        <p className='text-white text-lg py-3 pt-5'>09:00</p>
                        <p className='text-white text-lg py-3'>10:00</p>
                        <p className='text-white text-lg py-3'>11:00</p>
                        <p className='text-white text-lg py-3'>12:00</p>
                        <p className='text-white text-lg py-3'>13:00</p>
                    </div>
                    <div className='flex pl-10'>
                        <p className='text-white text-lg px-3'>Пн</p>
                        <p className='text-white text-lg px-3'>Вт</p>
                        <p className='text-white text-lg px-3'>Ср</p>
                        <p className='text-white text-lg px-3'>Чт</p>
                        <p className='text-white text-lg px-3'>Пт</p>
                        <p className='text-white text-lg px-3'>Сб</p>
                        <p className='text-white text-lg px-3'>Вс</p>
                    </div>
              </div>
            </div>
        </Layout>
    );
};

export default Home;