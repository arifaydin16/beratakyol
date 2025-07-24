import React from 'react';

const Cart = ({ cartState, setCartState }) => {
    return (
        <div
            id="cart"
            className={`fixed w-screen flex justify-end h-screen left-0 top-0 z-[100] ${cartState ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
        >
            <div
                onClick={() => setCartState(false)}
                className={`absolute bg-black/40 w-full h-full left-0 top-0 transition-opacity duration-500 ${cartState ? 'opacity-100' : 'opacity-0'
                    }`}
            ></div>
            <div className={`bg-white dark:bg-stone-900 flex flex-col duration-500 w-[80vw] md:w-[40vw] pb-20 lg:w-[35vw] h-screen ${cartState ? 'translate-x-0' : ' translate-x-[80vw] md:translate-x-[40vw] lg:translate-x-[35vw]'} p-2 lg:p-8`}>
                <div className="flex justify-end">
                    <svg className='cursor-pointer' onClick={() => setCartState(false)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M7 7l10 10" /></svg>
                </div>
                <div className="mt-8 flex-1 pr-4 overflow-y-auto">
                    <div className="flex justify-between">
                        <div className="text-lg md:text-2xl font-bold">Sepet Detayı</div>
                        <div className="border border-gray-200 rounded-lg text-[11px] flex items-center gap-2 px-1 md:px-4 text-gray-500">
                            <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
                            <span>Seçilenleri Sil</span>
                        </div>
                    </div>


                    <div className="mt-8 flex flex-col gap-8">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='lg:h-16 lg:w-16 h-12 w-12 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-sm lg:text-base'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-sm whitespace-nowrap'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='lg:h-16 lg:w-16 h-12 w-12 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-sm lg:text-base'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-sm whitespace-nowrap'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='lg:h-16 lg:w-16 h-12 w-12 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-sm lg:text-base'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-sm whitespace-nowrap'>300.50 ₺</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 lg:gap-4 items-center">
                                <input type="checkbox" className='w-4 h-4' />
                                <img src="/valorantilan.png" className='lg:h-16 lg:w-16 h-12 w-12 border-2 border-[var(--primary)] object-cover rounded-full' alt="" />

                                <div className="flex flex-col gap-2">
                                    <div className='text-sm lg:text-base'>Valorant 1000 VP</div>
                                    <div className="flex items-center gap-4">
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">-</button>
                                        <span className="font-bold">1</span>
                                        <button className="w-6 h-6 rounded outline-none border border-gray-200 text-[var(--primary)] flex items-center justify-center text-lg font-bold">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-sm whitespace-nowrap'>300.50 ₺</div>
                        </div>
                        

                    </div>
                    <div className="mt-8">
                        <a href='/cart' type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer block text-center w-full hover:bg-[var(--primary-light)] duration-200">Alışverişi Tamamla</a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Cart;
