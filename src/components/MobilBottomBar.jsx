
const MobilBottomBar = ({ setMobileMenuState }) => {
    return (
        <div style={{ zIndex: 10000 }} className='h-[60px] inter-500 p-2 fixed left-0 bottom-0 bg-[var(--primary)] w-screen flex md:hidden justify-evenly text-white'>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-4xl w-fit">
                <a href='/add-balance' className="w-15 h-15 bg-[#1C9304] relative rounded-xl flex items-center overflow-hidden justify-center p-4">
                    <div className="absolute opacity-50 left-0 top-0 w-full h-full bg-[url(/pattern2.png)]"></div>
                    <svg className='relative' fill="white" width="38" height="38" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="20.224"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path> </g></svg>

                </a>
            </div>
            <a href='/' className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" /></svg>
                <div className="text-center text-xs">Anasayfa</div>
            </a>
            <a href='#' className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                <div className="text-center text-xs">Arama</div>
            </a>
            <a href='/add-balance' className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" /></svg>
                <div className="text-center text-xs">Bakiye Ekle</div>
            </a>
            <a href='/support-requests' className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M24 14a4.5 4.5 0 0 0-3-4.24V9A9 9 0 0 0 3 9v.76a4.5 4.5 0 0 0 0 8.48a1.54 1.54 0 0 0 1.37-.18A1.53 1.53 0 0 0 5 16.83V9a7 7 0 0 1 14 0v7.83a1.5 1.5 0 0 0 .5 1.1v.57c0 1.48-1.29 2-2.5 2h-1.78a2 2 0 1 0-1.72 3a2 2 0 0 0 1.72-1H17c2.65 0 4.5-1.64 4.5-4V18a4.5 4.5 0 0 0 2.5-4" /><path fill="currentColor" d="M10.75 16.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M9.5 10.5a1.25 1.25 0 0 0 1.25-1.25a1.25 1.25 0 1 1 1.75 1.15a2.91 2.91 0 0 0-1.75 2.67v.56a1.25 1.25 0 1 0 2.5 0v-.56a.42.42 0 0 1 .25-.38a3.75 3.75 0 1 0-5.25-3.44A1.25 1.25 0 0 0 9.5 10.5" /></svg>
                <div className="text-center text-xs">Destek</div>
            </a>
            <button onClick={() => setMobileMenuState(prev => !prev)} href='/membership-information' className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" /></svg>
                <div className="text-center text-xs">Hesabım</div>
            </button>
        </div >
    )
}

export default MobilBottomBar