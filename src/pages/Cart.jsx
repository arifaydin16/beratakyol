import React from 'react'

const CartPage = () => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500'>
            <div className="md:grid grid-cols-5 gap-16">
                <div className="col-span-3">
                    <div className="flex justify-between">
                        <div className="text-lg md:text-2xl font-bold">Sepet Detayı</div>
                        <div className="border border-gray-200 rounded-lg text-xs md:text-sm flex items-center gap-2 px-4 text-gray-500">
                            <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                            <button className='cursor-pointer'>Seçilenleri Sil</button>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='h-16 w-16 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-base md:text-2xl'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-base md:text-2xl'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='h-16 w-16 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-base md:text-2xl'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-base md:text-2xl'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='h-16 w-16 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-base md:text-2xl'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-base md:text-2xl'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='h-16 w-16 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-base md:text-2xl'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-base md:text-2xl'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='h-16 w-16 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-base md:text-2xl'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-base md:text-2xl'>300.50 ₺</div>
                        </div>

                    </div>
                </div>
                <div className='col-span-2 md:mt-0 mt-12'>
                    <div className="text-2xl font-bold">Ödeme Özeti</div>
                    <div className="mt-8 w-full rounded-2xl bg-[var(--gray-light)] dark:bg-stone-800 p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm md:text-xl">Sipariş Numarası</div>
                            <div className="text-[var(--primary)] font-bold text-sm md:text-xl">4687648754543</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm md:text-xl">Sipariş Tutarı</div>
                            <div className="text-[var(--primary)] font-bold text-sm md:text-xl">550.60 ₺</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm md:text-xl">KDV(%20)</div>
                            <div className="text-[var(--primary)] font-bold text-sm md:text-xl">110.10 ₺</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm md:text-xl">İndirim</div>
                            <div className="text-[var(--primary)] font-bold text-sm md:text-xl">50.50 ₺</div>
                        </div>
                    </div>
                    <div className='border-t-2 border-black border-dashed mx-2'></div>
                    <div className="w-full rounded-2xl bg-[var(--gray-light)] dark:bg-stone-800 p-4 flex flex-col gap-4 relative">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500 text-sm md:text-xl">Genel Toplam</div>
                            <div className="text-[var(--primary)] font-bold text-sm md:text-xl">390.10 ₺</div>
                        </div>
                        <div className='border-t-8 border-white border-dotted dark:border-stone-900 mx-2 absolute -bottom-1 h-[10px] w-full left-0'></div>
                    </div>
                    <div className="mt-8">
                        <div>
                            <div className="text-gray-500 text-sm">İndirim Kodu</div>
                            <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='İndirim Kodu' />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer w-full hover:bg-[var(--primary-light)] duration-200">Siparişi Tamamla</button>
                    </div>
                </div>
            </div>
            <h3 className='my-6 !font-bold text-xl mt-24 hidden md:block'>Birlikte Daha Ucuz!</h3>

            <div className="p-8 px-12 bg-[var(--primary-light)]/50 rounded-2xl gap-8 hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
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
                        <div className="dbutton-red inline text-3xl w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
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
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
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
                        <div className="dbutton-red inline text-3xl w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
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
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
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
                        <div className="dbutton-red inline text-3xl w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
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
                <div className='p-2 px-3 bg-white/20 rounded-2xl'>
                    <div className="flex items-center justify-between gap-2">
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
                        <div className='text-[var(--primary)] text-6xl'>+</div>
                        <img src="/valorantilan.png" className='h-[160px] rounded-2xl object-cover' alt="" />
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
                        <div className="dbutton-red inline text-3xl w-fit mt-auto rounded-lg text-white ">196.98 ₺</div>
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

export default CartPage