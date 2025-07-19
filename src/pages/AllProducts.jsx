import React from 'react'

const AllProducts = () => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500'>

            <div className='flex h-fit flex rounded-lg border w-full md:w-fit border-gray-200 text-sm'>
                <div className='px-3 p-1 flex items-center justify-center border-r border-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                </div>
                <input type="text" className='p-2 outline-none w-full lg:w-[10vw]' placeholder='Ürün Ara' />
            </div>
            <div className="mt-12">
                <div className="flex overflow-x-auto items-center gap-4 justify-evenly">
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/netflix2.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/amazon.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/steam.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/netflix2.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/amazon.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/steam.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/netflix2.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/amazon.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                    </div>
                    <div className='rounded-lg flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2'>
                        <img src="/steam.png" className='w-[120px] h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                    </div>
                </div>
                <div className="flex mt-12 max-md:overflow-x-auto items-center gap-4 justify-evenly">

                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-4xl flex flex-col md:w-auto max-md:min-w-1/3 items-center justify-center border border-gray-200 p-2 px-2 md:px-8'>
                        <img src="/gta5.jpg" className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover' alt="" />
                        <div className="mt-2 font-bold text-center text-lg">PC Oyunları</div>
                        <div className="flex items-center gap-2">
                            <span className='font-bold text-[var(--primary)]'>54.50 ₺</span>
                            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className='my-6 !font-bold text-xl mt-12 hidden md:block'>Birlikte Daha Ucuz!</h3>

            <div className="p-8 px-12 bg-[var(--pink-gray)] rounded-2xl gap-8 hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <div className='p-2 px-3 bg-[var(--primary-red)] rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-white text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red inline text-4xl shadow-md shadow-gray-600 w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 px-12">
                        <div className="dbutton-yellow w-full justify-center rounded-lg text-2xl flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full justify-center rounded-lg flex gap-2 text-2xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-[var(--primary-red)] rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-white text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red inline text-4xl shadow-md shadow-gray-600 w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 px-12">
                        <div className="dbutton-yellow w-full justify-center rounded-lg text-2xl flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full justify-center rounded-lg flex gap-2 text-2xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-[var(--primary-red)] rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-white text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red inline text-4xl shadow-md shadow-gray-600 w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 px-12">
                        <div className="dbutton-yellow w-full justify-center rounded-lg text-2xl flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full justify-center rounded-lg flex gap-2 text-2xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
                <div className='p-2 px-3 bg-[var(--primary-red)] rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-white text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                    </div>
                    <div className="flex mt-2 items-center justify-between gap-2">
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 1000 VP
                        </div>
                        <div className="w-full">

                        </div>
                        <div className="w-full text-center text-2xl font-bold text-white">
                            Valorant 450 VP
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <div className="dbutton-red inline text-4xl shadow-md shadow-gray-600 w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-4 px-12">
                        <div className="dbutton-yellow w-full justify-center rounded-lg text-2xl flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                            <span>Hemen Al</span>
                        </div>
                        <div className="dbutton w-full justify-center rounded-lg flex gap-2 text-2xl items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                            <span>Sepete Ekle</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllProducts