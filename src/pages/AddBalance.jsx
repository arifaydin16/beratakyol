import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'

const AddBalance = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 bg-[var(--pink-gray)] rounded-lg p-4 md:px-16">
                <div className="grid grid-cols-2 md:flex gap-4 items-center justify-center">
                    <div className='p-2 relative w-full md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 shadow-md shadow-gray-300 dark:shadow-stone-600 border-[var(--primary-red)]'>
                        <div className="absolute bg-[var(--primary-red)] rounded-t-lg p-1 px-2 text-white text-xs left-4 -top-5 pb-0">
                            Tavsiye Edilen
                        </div>
                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/visa.png" className='h-7 md:h-12' alt="" />
                            <img src="/mastercard.png" className='h-7 md:h-12' alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-xs md:text-lg">Kredi Kartı İle Ödeme <span className='text-[var(--primary-red)] text-[10px] md:text-sm font-thin'>(%2.5 Komisyon)</span></div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                    <div className='p-2 relative w-full md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 border-gray-200 shadow-md shadow-gray-300 dark:shadow-stone-600'>

                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/paypal.png" className='h-7 md:h-12' alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm md:text-lg">PayPal Kredi Kartı <span className='text-[var(--primary-red)] text-[10px] md:text-sm font-thin'>(%4 Komisyon)</span></div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                    <div className='p-2 relative w-full md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 border-gray-200 shadow-md shadow-gray-300 dark:shadow-stone-600'>

                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/paypal.png" className='h-7 md:h-12' alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm md:text-lg">PayPal ile Ödeme <span className='text-[var(--primary-red)] text-[10px] md:text-sm font-thin'>(%6 Komisyon)</span></div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                    <div className='block md:hidden p-2 relative w-full md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 border-gray-200 shadow-md shadow-gray-300 dark:shadow-stone-600'>

                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/btc.webp" className='h-7 md:h-12' alt="" />
                            <img src="/shiba.png" className='h-7 md:h-12' alt="" />
                            <img src="/eth.webp" className='h-7 md:h-12' alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm md:text-lg">Kripto ile Ödeme <span className='text-[var(--primary-red)] text-[10px] md:text-sm font-thin'>(%1 Komisyon)</span></div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center mt-4">
                    <div className='hidden md:block p-2 relative w-full md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 border-gray-200 shadow-md shadow-gray-300 dark:shadow-stone-600'>

                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/btc.webp" className='h-7 md:h-12' alt="" />
                            <img src="/shiba.png" className='h-7 md:h-12' alt="" />
                            <img src="/eth.webp" className='h-7 md:h-12' alt="" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm md:text-lg">Kripto ile Ödeme <span className='text-[var(--primary-red)] text-[10px] md:text-sm font-thin'>(%1 Komisyon)</span></div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                    <div className='p-2 relative w-1/2 md:w-[23%] bg-white dark:bg-stone-900 dark:border-stone-800 rounded-xl border-2 border-gray-200 shadow-md shadow-gray-300 dark:shadow-stone-600'>

                        <div className="flex gap-1 items-center bg-white relative dark:bg-stone-900">
                            <img src="/pinatapin_ico.jpg" className='h-7 md:h-12 rounded-full object-cover w-7 md:w-12' alt="" />

                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm md:text-lg">Pinatapin Hediye Kartı</div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                        </div>
                    </div>
                </div>

                <form className="mt-12 flex flex-col gap-8 px-2 md:px-36 lg:px-48">
                    <div>
                        <div className="text-gray-500 text-sm">Yüklenecek Tutarı Girin</div>
                        <input min={10} type="number" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='' />
                    </div>
                    <div className="flex items-center gap-4 mx-auto">
                        <div className="!p-2 rounded-lg bg-gray-200 dark:bg-stone-900 dbutton text-xl font-bold !px-4">
                            250 ₺
                        </div>
                        <div className="p-2 rounded-lg bg-gray-200 dark:bg-stone-900 text-xl font-bold px-4">
                            500 ₺
                        </div>
                        <div className="p-2 rounded-lg bg-gray-200 dark:bg-stone-900 text-xl font-bold px-4">
                            1000 ₺
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-sm">Kart Numarası</div>
                        <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Kart Numarası' />
                    </div>
                    <div className="flex items-center gap-4 w-full">
                        <div className='w-full'>
                            <div className="text-gray-500 text-sm">STT</div>
                            <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Ay/Yıl' />
                        </div>
                        <div className='w-full'>
                            <div className="text-gray-500 text-sm">CVV</div>
                            <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='CVV' />
                        </div>

                    </div>
                    <div>
                        <div className="text-gray-500 text-sm">Kart Üzerindeki Ad Soyad</div>
                        <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Ad Soyad' />
                    </div>
                    <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Ödemeyi Tamamla</button>

                </form>
            </div>
        </ProfileLayout>
    )
}

export default AddBalance