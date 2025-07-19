import React from 'react'

const Topbar = () => {
    return (
        <div className='hidden md:flex h-[50px] bg-[radial-gradient(circle,rgba(196,137,217,1)_0%,rgba(137,25,186,1)_100%)] w-screen p-2 px-2 lg:px-8 xl:px-32 flex gap-12 items-center text-white font-semibold text-sm'>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" /><path stroke-linecap="round" stroke-linejoin="round" d="m9.5 12.4l1.429 1.6l3.571-4" /></g></svg>
                %100 Güvenlik Garantisi
            </div>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M24 14a4.5 4.5 0 0 0-3-4.24V9A9 9 0 0 0 3 9v.76a4.5 4.5 0 0 0 0 8.48a1.54 1.54 0 0 0 1.37-.18A1.53 1.53 0 0 0 5 16.83V9a7 7 0 0 1 14 0v7.83a1.5 1.5 0 0 0 .5 1.1v.57c0 1.48-1.29 2-2.5 2h-1.78a2 2 0 1 0-1.72 3a2 2 0 0 0 1.72-1H17c2.65 0 4.5-1.64 4.5-4V18a4.5 4.5 0 0 0 2.5-4" /><path fill="currentColor" d="M10.75 16.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M9.5 10.5a1.25 1.25 0 0 0 1.25-1.25a1.25 1.25 0 1 1 1.75 1.15a2.91 2.91 0 0 0-1.75 2.67v.56a1.25 1.25 0 1 0 2.5 0v-.56a.42.42 0 0 1 .25-.38a3.75 3.75 0 1 0-5.25-3.44A1.25 1.25 0 0 0 9.5 10.5" /></svg>
                7/24 Canlı Destek
            </div>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2zM9 7h6m-6 4h6m-2 4h2" /></svg>
                Anında Teslimat
            </div>
        </div>
    )
}

export default Topbar