import React from 'react'
import Accordion from '../components/Accordion'

const Product = () => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500'>
            <div className="flex md:gap-2 items-center">
                <div className='p-1 bg-gray-100 dark:bg-stone-800 rounded-lg text-center text-sm px-2 md:px-4'>Anasayfa</div>
                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                <div className='p-1 bg-gray-100 dark:bg-stone-800 rounded-lg text-center text-sm px-2 md:px-4'>Pc Oyunları</div>
                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                <div className='p-1 rounded-lg text-center text-sm px-2 md:px-4 bg-[var(--primary)] text-white'>Valorant</div>
            </div>

            <div className="mt-12 hidden md:block h-[90px] xl:h-[120px] bg-gray-100 dark:bg-stone-800 rounded-lg px-2 lg:px-16 xl:px-24">

                <div className="w-full xl:w-1/2 h-full flex items-center justify-end text-lg lg:text-2xl xl:text-3xl relative font-semibold">
                    <div className="absolute rounded-lg overflow-hidden left-0 top-1/2 -translate-y-1/2 h-[120%]">
                        <img src="/valorant.png" className='h-full object-cover' alt="" />
                    </div>
                    <span>Valorant Point (VP)</span>
                </div>
            </div>
            <div className="mt-4 h-[90px] p-2 gap-2 bg-gray-100 dark:bg-stone-800 rounded-lg flex md:hidden items-center">
                <img src="/valorant.png" className='h-full rounded-lg object-cover' alt="" />
                <span className='text-lg'>Valorant Point (VP)</span>
            </div>

            <div className="mt-12">
                <div className="flex flex-col-reverse md:grid grid-cols-3 gap-4">
                    <div className='flex flex-col gap-4 md:mb-0 mb-4'>
                        <Accordion
                            content={'Valorant, yakın gelecekte geçen takım tabanlı bir taktik nişancı ve birinci şahıs nişancı oyunudur. Oyuncular, dünyadaki çeşitli ülke ve kültürlere göre tasarlanmış bir dizi ajan karakter olarak oynarlar. Ana oyun modunda, oyuncular, her bir takımın beş oyuncuya sahip olduğu saldıran veya savunan takıma atanır. Temsilcilerin, her biri ücret gerektiren benzersiz yeteneklerinin yanı sıra öldürme, ölüm veya ani hareketler yoluyla hücum gerektiren benzersiz bir nihai yeteneğe sahiptirler.'}
                            header={'Ürün Açıklaması'}
                        />
                        <Accordion
                            content={'Valorant, yakın gelecekte geçen takım tabanlı bir taktik nişancı ve birinci şahıs nişancı oyunudur. Oyuncular, dünyadaki çeşitli ülke ve kültürlere göre tasarlanmış bir dizi ajan karakter olarak oynarlar. Ana oyun modunda, oyuncular, her bir takımın beş oyuncuya sahip olduğu saldıran veya savunan takıma atanır. Temsilcilerin, her biri ücret gerektiren benzersiz yeteneklerinin yanı sıra öldürme, ölüm veya ani hareketler yoluyla hücum gerektiren benzersiz bir nihai yeteneğe sahiptirler.'}
                            header={'Valorant VP Nasıl Yüklenir?'}
                        />
                        <Accordion
                            content={'Valorant, yakın gelecekte geçen takım tabanlı bir taktik nişancı ve birinci şahıs nişancı oyunudur. Oyuncular, dünyadaki çeşitli ülke ve kültürlere göre tasarlanmış bir dizi ajan karakter olarak oynarlar. Ana oyun modunda, oyuncular, her bir takımın beş oyuncuya sahip olduğu saldıran veya savunan takıma atanır. Temsilcilerin, her biri ücret gerektiren benzersiz yeteneklerinin yanı sıra öldürme, ölüm veya ani hareketler yoluyla hücum gerektiren benzersiz bir nihai yeteneğe sahiptirler.'}
                            header={'Yorumlar(244)'}
                        />


                    </div>
                    <div className='col-span-2 flex flex-col gap-4'>
                        <div className="bg-gray-100 dark:bg-stone-800 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col md:gap-2 p-2'>
                                    <div className='font-bold text-xs md:text-xl'>Valorant 1000 VP</div>
                                    <div className="flex gap-2 items-center">

                                        <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                        <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                                    </div>
                                    <div className="dbutton-red inline text-xs md:text-xl w-fit mt-auto rounded-lg text-white shadow-md shadow-gray-500 dark:shadow-stone-600">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
                                <div className="dbutton-yellow rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-stone-800 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col md:gap-2 p-2'>
                                    <div className='font-bold text-xs md:text-xl'>Valorant 1000 VP</div>
                                    <div className="flex gap-2 items-center">

                                        <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                        <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                                    </div>
                                    <div className="dbutton-red inline text-xs md:text-xl w-fit mt-auto rounded-lg text-white shadow-md shadow-gray-500 dark:shadow-stone-600">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
                                <div className="dbutton-yellow rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-stone-800 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col md:gap-2 p-2'>
                                    <div className='font-bold text-xs md:text-xl'>Valorant 1000 VP</div>
                                    <div className="flex gap-2 items-center">

                                        <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                        <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                                    </div>
                                    <div className="dbutton-red inline text-xs md:text-xl w-fit mt-auto rounded-lg text-white shadow-md shadow-gray-500 dark:shadow-stone-600">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
                                <div className="dbutton-yellow rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-stone-800 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col md:gap-2 p-2'>
                                    <div className='font-bold text-xs md:text-xl'>Valorant 1000 VP</div>
                                    <div className="flex gap-2 items-center">

                                        <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                        <svg className='text-blue-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
                                    </div>
                                    <div className="dbutton-red inline text-xs md:text-xl w-fit mt-auto rounded-lg text-white shadow-md shadow-gray-500 dark:shadow-stone-600">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
                                <div className="dbutton-yellow rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex md:gap-2 max-md:!p-1 whitespace-nowrap text-xs md:text-base items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className='my-12 !font-bold text-xl md:block'>Birlikte Daha Ucuz!</h3>
            <div className="px-2 bg-[var(--gray-light)] rounded-2xl flex md:hidden justify-between gap-2">
                <div className="w-3/5 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-5 w-full items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='col-span-2 w-full h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-4xl w-full'>+</div>
                        <img src="/valorantilan.png" className='col-span-2 h-[100px] w-full md:h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="grid grid-cols-5 mt-2 items-center justify-between gap-2">
                        <div className="w-full col-span-2 text-center text-sm font-bold">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full col-span-2 text-center text-sm font-bold">
                            Valorant 450 VP
                        </div>
                    </div>
                </div>
                <div className='w-2/5 p-4'>
                    <div className="flex justify-center mb-3">
                        <div className="dbutton-red shadow-md shadow-gray-500 inline text-2xl w-full mt-auto rounded-lg text-white text-center">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-3 w-full mx-auto">
                        <div className="dbutton-yellow w-full rounded-lg text-xs md:text-base flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full rounded-lg flex md:gap-2 whitespace-nowrap text-xs md:text-base text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 px-12 bg-[var(--primary-light-20)] rounded-2xl gap-16 hidden md:grid md:grid-cols-2 lg:grid-cols-4">
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red shadow-md shadow-gray-500 inline text-3xl w-fit !px-8 mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 w-fit mx-auto">
                        <div className="dbutton-yellow w-full rounded-lg text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full rounded-lg flex md:gap-2 whitespace-nowrap text-xs md:text-base text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red shadow-md shadow-gray-500 inline text-3xl w-fit !px-8 mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 w-fit mx-auto">
                        <div className="dbutton-yellow w-full rounded-lg text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full rounded-lg flex md:gap-2 whitespace-nowrap text-xs md:text-base text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red shadow-md shadow-gray-500 inline text-3xl w-fit !px-8 mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 w-fit mx-auto">
                        <div className="dbutton-yellow w-full rounded-lg text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full rounded-lg flex md:gap-2 whitespace-nowrap text-xs md:text-base text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[100px] md:h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red shadow-md shadow-gray-500 inline text-3xl w-fit !px-8 mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 w-fit mx-auto">
                        <div className="dbutton-yellow w-full rounded-lg text-lg flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full rounded-lg flex md:gap-2 whitespace-nowrap text-xs md:text-base text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Product