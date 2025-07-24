import React from 'react'

const GameCard = () => {
    return (
        <div className="h-[300px] min-w-[40vw] md:min-w-0 md:w-full bg-[url(/gta5.jpg)] bg-cover bg-center rounded-2xl md:rounded-lg relative">
            <div className="absolute right-2 top-2">
                <div className="w-[25px] rounded-full h-[25px] flex items-center justify-center bg-black/70">
                    <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" /></svg>
                </div>
                <div className="w-[25px] rounded-full h-[25px] flex items-center justify-center bg-red-500 text-white text-inter-500" style={{ fontSize: '10px' }}>
                    %20
                </div>
            </div>
            <div className="p-1 h-full flex flex-col-reverse">
                <div className='h-2/6 relative w-full rounded-xl flex flex-col p-2 bg-black/30 backdrop-blur-md'>
                    <div>
                        <div className='text-white font-bold text-sm md:text-lg inter-500 line-clamp-1'>GTA 5</div>
                        <div className="flex gap-2 items-center">
                            <img src="/microsoftstore.png" className='w-[15px] h-[15px]' alt="" />
                            <img src="/steam.png" className='w-[15px] h-[15px]' alt="" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col-reverse inter-500">
                        <div className='text-white font-bold'>320 ₺</div>
                        <div className='line-through text-red-500 text-xs'>380 ₺</div>
                    </div>
                    <a href='/product/valorant' className="absolute right-2 bottom-2">
                        <div className="w-[45px] h-[45px] cursor-pointer hover:bg-[var(--primary-light)] duration-200 bg-[var(--primary)] flex items-center justify-center text-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11t-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11t-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4t-1.412.588T10 6M6 20V8z" /></svg>

                        </div>
                    </a>
                </div>
            </div>
        </div>)
}

export default GameCard