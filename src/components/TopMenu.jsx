import React from 'react'
import Select from './ui/Select'

const TopMenu = () => {
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32 flex inter-500 flex-col gap-4'>
            <div className='flex justify-between items-center hidden md:flex'>
                <div className='flex items-center gap-4'>
                    <Select
                        data={[
                            {
                                label: 'Netflix',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Steam',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Amazon',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Apple',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Xbox',
                                href: '/product/valorant'
                            },
                        ]}
                        className={'md:px-2 lg:px-4 xl:px-8'}
                        placeholder={'Hediye Kartları'}
                    />
                    <Select
                        data={[
                            {
                                label: 'Valorant',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Free Fire',
                                href: '/product/valorant'
                            },
                            {
                                label: 'LoL',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Counter Strike 2',
                                href: '/product/valorant'
                            },
                            {
                                label: 'Valorant',
                                href: '/product/valorant'
                            },
                        ]}
                        className={'md:px-2 lg:px-4 xl:px-8'}
                        placeholder={'PC Oyunları'}
                    />
                    <button className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 text-white outline-none rounded-lg bg-[#E13A71] border border-[#E13A71]'>İndirimdekiler</button>
                    <a href='/products' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 duration-200 active:bg-white'>Tüm Ürünler</a>
                </div>
                <div className='flex items-center gap-4 '>

                    <button className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 duration-200 active:bg-white'>S.S.S</button>
                    <a href='/support-requests' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 duration-200 active:bg-white'>Destek</a>
                    <a href='/blog' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 duration-200 active:bg-white'>Blog</a>
                    <button className='p-1 fredoka-600 text-[#1A5739] font-bold md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border bg-lime-500 border-lime-200 hover:bg-lime-400 duration-200 active:bg-lime-500 cursor-pointer flex items-center gap-2'>
                        Bakiye Yükle
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" /></svg>
                    </button>
                </div>
            </div>

            <div className="flex justify-between gap-2 lg:gap-4 xl:gap-8">
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/netflix.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Netflix</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/freefire.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Free Fire</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/valorant.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Valorant</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/lol.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>LoL</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/razergold.jpg" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Razer Gold</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/apple.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Apple</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/xbox.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Xbox</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/playstation.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Playstation</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
            </div>
        </div>
    )
}

export default TopMenu