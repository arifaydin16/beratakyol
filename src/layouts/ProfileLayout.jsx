

const ProfileLayout = ({ children }) => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500'>
            <div className="p-2 bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] rounded-lg shadow-lg shadow-gray-500 relative">
                <img src="/pattern1.png" alt="" className="absolute left-0 top-0 w-full h-full object-cover opacity-30" />
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="relative">
                            <div className="w-24 md:w-36 h-24 md:h-36 relative rounded-full">
                                <div className="absolute w-8 h-8 bg-white right-0 bottom-0 flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-[var(--primary)]' viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" /></svg>
                                </div>
                                <img src="/avatar.png" className='w-full h-full' alt="" />
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className="font-bold text-white text-lg md:text-2xl">Ad Soyad</div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" className='text-white z-2' height="98" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" /></svg>
                </div>
            </div>

            <div className="mt-8 md:grid grid-cols-4 gap-8">
                <div className="hidden md:flex flex-col w-full h-full">
                    <div className="mt-4 w-full flex flex-col flex-1">
                        <div className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <a href="/membership-information" className={`flex p-2 gap-2 items-center ${window.location.pathname === '/membership-information' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8" /></svg>
                                Üyelik Bilgilerim
                            </a>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </div>
                        <div className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <a href="/orders" className={`flex p-2 gap-2 items-center ${window.location.pathname === '/orders' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>
                                Siparişlerim
                            </a>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </div>
                        <a href="/payments" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === '/payments' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .825-.587 1.413T19 21zm8-4q-.825 0-1.412-.587T11 15V9q0-.825.588-1.412T13 7h7q.825 0 1.413.588T22 9v6q0 .825-.587 1.413T20 17zm7-2V9h-7v6zm-4-1.5q.625 0 1.063-.437T17.5 12t-.437-1.062T16 10.5t-1.062.438T14.5 12t.438 1.063T16 13.5" /></svg>
                                Ödemelerim
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/bills" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === '/bills' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z" /></svg>
                                Faturalarım
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/favorites" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === 'membership-information' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" /></svg>
                                Favorilerim
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/support-requests" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === 'membership-information' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" /><path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" /></g></svg>
                                Destek Taleplerim
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/security-settings" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === '/security-settings' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9" /></svg>
                                Güvenlik Ayarlarım
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/sss" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === 'membership-information' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1" /><path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z" /></svg>
                                SSS
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>
                        <a href="/blog" className='flex w-full justify-between items-center border-b border-[var(--primary)]'>
                            <div className={`flex p-2 gap-2 items-center ${window.location.pathname === 'membership-information' ? 'text-[var(--primary)]' : ''}`}>
                                <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z" /></svg>
                                Blog
                            </div>
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                        </a>

                    </div>

                </div>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout