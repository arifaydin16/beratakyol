import React from 'react'

const Product = () => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500'>
            <div className="flex gap-2 items-center">
                <div className='p-1 bg-gray-100 rounded-lg text-center text-sm px-4'>Anasayfa</div>
                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                <div className='p-1 bg-gray-100 rounded-lg text-center text-sm px-4'>Pc Oyunları</div>
                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                <div className='p-1 rounded-lg text-center text-sm px-4 bg-[var(--primary)] text-white'>Valorant</div>
            </div>

            <div className="mt-12 h-[150px] bg-gray-100 rounded-lg px-24">

                <div className="w-1/2 h-full flex items-center justify-end text-4xl relative font-semibold">
                    <div className="absolute rounded-lg overflow-hidden left-0 top-1/2 -translate-y-1/2 h-[120%]">
                        <img src="/valorant.png" className='h-full object-cover' alt="" />
                    </div>
                    Valorant Point (VP)
                </div>
            </div>

            <div className="mt-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className='flex flex-col gap-4'>
                        <div className="p-4 rounded-full bg-gray-100 flex justify-between text-xl items-center">
                            <div className='font-bold'>Ürün Açıklaması</div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" /></path></svg>
                        </div>
                        <div className="p-4 rounded-4xl bg-gray-100 text-xl">
                            <div className='text-[var(--primary)] font-bold'>Valorant</div>

                            <div className="mt-2 text-gray-800 text-sm">
                                Valorant, yakın gelecekte geçen takım tabanlı bir taktik nişancı ve birinci şahıs nişancı oyunudur. Oyuncular, dünyadaki çeşitli ülke ve kültürlere göre tasarlanmış bir dizi ajan karakter olarak oynarlar. Ana oyun modunda, oyuncular, her bir takımın beş oyuncuya sahip olduğu saldıran veya savunan takıma atanır. Temsilcilerin, her biri ücret gerektiren benzersiz yeteneklerinin yanı sıra öldürme, ölüm veya ani hareketler yoluyla hücum gerektiren benzersiz bir nihai yeteneğe sahiptirler.                            </div>

                        </div>
                        <div className="p-4 rounded-full bg-gray-100 flex justify-between text-xl items-center">
                            <div className='font-bold'>Valorant VP Nasıl Yüklenir?</div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" /></path></svg>
                        </div>
                        <div className="p-4 rounded-full bg-gray-100 flex justify-between text-xl items-center">
                            <div className='font-bold'>Yorumlar(244)</div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" /></path></svg>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col gap-4'>
                        <div className="bg-gray-100 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col gap-2 p-2'>
                                    <div className='font-bold text-2xl'>Valorant 1000 VP</div>
                                    <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                    <div className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="dbutton-yellow rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col gap-2 p-2'>
                                    <div className='font-bold text-2xl'>Valorant 1000 VP</div>
                                    <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                    <div className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="dbutton-yellow rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col gap-2 p-2'>
                                    <div className='font-bold text-2xl'>Valorant 1000 VP</div>
                                    <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                    <div className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="dbutton-yellow rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 flex justify-between items-center rounded-2xl">
                            <div className="flex gap-2">
                                <img src="/valorantilan.png" className='h-[160px] rounded-2xl' alt="" />
                                <div className='flex flex-col gap-2 p-2'>
                                    <div className='font-bold text-2xl'>Valorant 1000 VP</div>
                                    <img src="/flag_tr.png" className='w-[20px] h-[20px] rounded-full' alt="" />
                                    <div className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white">196.98 ₺</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="dbutton-yellow rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" /></svg>
                                    <span>Hemen Al</span>
                                </div>
                                <div className="dbutton rounded-lg flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                                    <span>Sepete Ekle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h3 className='my-6 !font-bold text-xl'>Birlikte Daha Ucuz!</h3>

            <div className="p-8 px-12 bg-[var(--primary-light)]/50 rounded-2xl gap-8 grid grid-cols-4">
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

export default Product