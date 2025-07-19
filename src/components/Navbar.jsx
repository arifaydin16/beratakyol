import React, { useState } from 'react'
import Select from './ui/Select'
import Cart from './Cart';
import MobilBottomBar from './MobilBottomBar';
const Navbar = () => {
    const [mobileMenuState, setMobileMenuState] = useState(false);
    const [cartState, setCartState] = useState(false);
    return (
        <>
            <nav className='h-[100px] flex inter-500 justify-between items-end p-4 md:border-b border-gray-200 px-2 lg:px-8 xl:px-32'>


                {/* Sepet */}

                <Cart cartState={cartState} setCartState={setCartState} />



                <div style={{ position: 'fixed', transform: (mobileMenuState ? 'translateX(0px)' : 'translateX(100vw)') }} className="mobile-menu duration-500 flex md:hidden justify-end z-10 w-screen relative h-screen left-0 top-0 overflow-hidden">
                    <div onClick={() => setMobileMenuState(false)} className="absolute left-0 top-0 w-full h-full bg-black/50"></div>
                    <div className="relative p-4 flex flex-col items-center w-8/10 bg-white h-screen ">
                        <div className="rounded-lg max-w-full shadow-lg shadow-gray-500 relative overflow-hidden bg-[radial-gradient(circle,rgba(196,137,217,1)_0%,rgba(137,25,186,1)_100%)] w-full p-4">
                            <img src="/avatar.png" className='w-[60px] h-[60px]' alt="" />
                            <div className="text-lg text-white font-bold inter-500">Kullanıcı Adı</div>
                            <a href='/add-balance' className='dbutton rounded-lg w-fit -right-2 top-4 absolute'>0.00 TL</a>
                        </div>
                        <div className="flex flex-col w-full h-full">
                            <div className="mt-4 w-full flex flex-col">
                                <a href='/membership-information' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" /></svg>
                                        Üyelik Bilgilerim
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/orders' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>
                                        Siparişlerim
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/payments' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .825-.587 1.413T19 21zm8-4q-.825 0-1.412-.587T11 15V9q0-.825.588-1.412T13 7h7q.825 0 1.413.588T22 9v6q0 .825-.587 1.413T20 17zm7-2V9h-7v6zm-4-1.5q.625 0 1.063-.437T17.5 12t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5" /></svg>
                                        Ödemelerim
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/bills' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z" /></svg>
                                        Faturalarım
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/favorites' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" /></svg>
                                        Favorilerim
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/support-requests' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" /><path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" /></g></svg>
                                        Destek Taleplerim
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/security-settings' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9" /></svg>
                                        Güvenlik Ayarlarım
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/sss' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1" /><path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z" /></svg>
                                        SSS
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>
                                <a href='/blog' className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                                    <div className="flex p-2 gap-2 items-center">
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z" /></svg>
                                        Blog
                                    </div>
                                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                                </a>

                            </div>
                            <div className='flex w-full justify-between items-center border-b border-red-500'>
                                <div className="flex p-2 gap-2 items-center">
                                    <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M11 12V4q0-.425.288-.712T12 3t.713.288T13 4v8q0 .425-.288.713T12 13t-.712-.288T11 12m1 9q-1.85 0-3.488-.712T5.65 18.35t-1.937-2.863T3 12q0-1.725.638-3.312T5.425 5.85q.275-.3.7-.3t.725.3q.275.275.25.688t-.3.737q-.85.95-1.325 2.163T5 12q0 2.9 2.05 4.95T12 19q2.925 0 4.963-2.05T19 12q0-1.35-.475-2.588t-1.35-2.187q-.275-.3-.288-.7t.263-.675q.3-.3.725-.3t.7.3q1.175 1.25 1.8 2.838T21 12q0 1.85-.712 3.488t-1.925 2.862t-2.85 1.938T12 21" /></svg>
                                    Çıkış Yap
                                </div>
                                <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:gap-4 md:gap-2 lg:gap-12 items-end">
                    <a href='/' className="h-[50px] w-[200px] lg:w-[230px] xl:w-[300px]">
                        <img src="/pinatapin.png" className='h-full object-contain' alt="" />
                    </a>

                    <div className='flex h-fit hidden md:flex rounded-lg border border-gray-200 text-sm'>
                        <div className='px-3 p-1 flex items-center justify-center border-r border-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                        </div>
                        <input type="text" className='p-2 outline-none w-[10vw] lg:min-w-[15vw] xl:min-w-[25vw]' placeholder='Arama...' />
                    </div>
                </div>


                <div className="flex items-center gap-2 xl:gap-4 hidden md:flex">
                    <button onClick={() => setCartState(true)} className="flex outline-none cursor-pointer hover:text-[var(--primary)] duration-200 gap-2 font-normal">
                        <div className="relative">
                            <div className="absolute w-[4px] h-[4px] rounded-full right-0 top-0 bg-red-500"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1m-1 6v-2m-6 2v-2" /><path d="M4 12c0-1.886 0-2.828.586-3.414S6.114 8 8 8h8c1.886 0 2.828 0 3.414.586S20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z" /></g></svg>
                        </div>
                        <div>Sepet</div>
                    </button>

                    <div className="dbutton h-full cursor-pointer rounded-lg flex items-center gap-2">
                        <img src="/flag_tr.png" className='w-[15px] h-[15px] rounded-full object-cover overflow-hidden flex items-center justify-center' alt="" />
                        <div>TRY</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
                    </div>
                    <a href='/add-balance' className="dbutton whitespace-nowrap h-full cursor-pointer rounded-lg flex items-center gap-2">
                        <div>0.00 ₺</div>
                    </a>
                    <div className={`md:flex h-fit fredoka-300 justify-end px-2 items-center hidden`}>
                        <a href='/signup' className="dbutton rounded-l-lg p-2 gap-2 flex items-center whitespace-nowrap">
                            Kayıt Ol

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="12" cy="6" r="4" fill="currentColor" /><path fill="currentColor" fill-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" clip-rule="evenodd" /><path fill="currentColor" d="M15.415 13.507A11.3 11.3 0 0 0 12 13c-3.866 0-7 1.79-7 4c0 2.14 2.942 3.888 6.642 3.995a5 5 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034c.086-.643.293-1.347.874-1.928c.581-.582 1.285-.788 1.928-.875a10 10 0 0 1 1.035-.07" /></svg>
                        </a>
                        <a href='/signin' className="dbutton-green !text-[#1A5739] rounded-r-lg gap-2 p-2 flex items-center whitespace-nowrap gap-2">
                            Giris Yap
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z" /></svg>
                        </a>
                    </div>

                    <Select
                        icon={(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>)}
                        placeholder={'Hesabım'}
                        data={[
                            {
                                label: 'Üyelik Bilgilerim',
                                href: '/membership-information',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" /></svg>)
                            },
                            {
                                label: 'Siparişlerim',
                                href: '/orders',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>)
                            },
                            {
                                label: 'Ödemelerim',
                                href: '/payments',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .825-.587 1.413T19 21zm8-4q-.825 0-1.412-.587T11 15V9q0-.825.588-1.412T13 7h7q.825 0 1.413.588T22 9v6q0 .825-.587 1.413T20 17zm7-2V9h-7v6zm-4-1.5q.625 0 1.063-.437T17.5 12t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5" /></svg>)
                            },
                            {
                                label: 'Faturalarım',
                                href: '/bills',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z" /></svg>)
                            },
                            {
                                label: 'Favorilerim',
                                href: '/favorites',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" /></svg>)
                            },
                            {
                                label: 'Destek Taleplerim',
                                href: '/support-requests',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" /><path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" /></g></svg>)
                            },
                            {
                                label: 'Güvenlik Ayarlarım',
                                href: '/security-settings',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9" /></svg>)
                            },
                            {
                                label: 'SSS',
                                href: '/sss',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1" /><path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z" /></svg>)
                            },
                            {
                                label: 'Blog',
                                href: '/blog',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z" /></svg>)
                            },
                            {
                                label: 'Çıkış Yap',
                                href: '#',
                                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414" clip-rule="evenodd" /></svg>)
                            },
                        ]}
                    />


                </div>

                <div className='flex items-center md:hidden gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                    <div onClick={() => setCartState(true)} className="relative">
                        <div className="absolute w-[4px] h-[4px] rounded-full right-0 top-0 bg-red-500"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M8 8V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1m-1 6v-2m-6 2v-2" /><path d="M4 12c0-1.886 0-2.828.586-3.414S6.114 8 8 8h8c1.886 0 2.828 0 3.414.586S20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z" /></g></svg>
                    </div>
                    <svg onClick={() => setMobileMenuState(true)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18" /></svg>


                </div>

            </nav>
            <div className={`flex fredoka-300 justify-end px-2 items-center md:hidden`}>
                <a href='/signup' className="dbutton rounded-l-lg p-2 gap-2 flex items-center">
                    Kayıt Ol

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="4" fill="currentColor" /><path fill="currentColor" fill-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" clip-rule="evenodd" /><path fill="currentColor" d="M15.415 13.507A11.3 11.3 0 0 0 12 13c-3.866 0-7 1.79-7 4c0 2.14 2.942 3.888 6.642 3.995a5 5 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034c.086-.643.293-1.347.874-1.928c.581-.582 1.285-.788 1.928-.875a10 10 0 0 1 1.035-.07" /></svg>
                </a>
                <a href='/signin' className="dbutton-green !text-[#1A5739] rounded-r-lg gap-2 p-2 flex items-center gap-2">
                    Giris Yap
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z" /></svg>
                </a>
            </div>
            <MobilBottomBar />
        </>
    )
}

export default Navbar