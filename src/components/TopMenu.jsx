import React, { useEffect, useState } from 'react'
import Select from './ui/Select'
import { disallowedTopMenu } from '../layout';

const TopMenu = () => {
    const [menuVisible, setMenuVisible] = useState(true);
    useEffect(() => {
        if (disallowedTopMenu.includes(window.location.pathname)) {
            setMenuVisible(true)
        } else {
            setMenuVisible(false)
        }
    }, [])
    return (
        <div className={`p-4 px-2 lg:px-8 xl:px-32 flex inter-500 flex-col gap-4 md:flex ${menuVisible ? 'hidden' : ''}`}>
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
                    <a href='/products' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer dark:hover:text-black hover:bg-gray-100 duration-200 active:bg-white'>Tüm Ürünler</a>
                </div>
                <div className='flex items-center gap-4 '>

                    <a href='/sss' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:text-black duration-200 active:bg-white'>S.S.S</a>
                    <a href='/support-requests' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer dark:hover:text-black hover:bg-gray-100 duration-200 active:bg-white'>Destek</a>
                    <a href='/blog' className='p-1 inter-500 md:px-2 lg:px-4 xl:px-8 outline-none rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:text-black duration-200 active:bg-white'>Blog</a>
                    <a href='/add-balance' className='p-1 fredoka-600 text-[#1A5739] font-bold md:px-2 lg:px-4 outline-none rounded-lg border bg-lime-500 border-lime-200 hover:bg-lime-400 duration-200 active:bg-lime-500 cursor-pointer flex items-center gap-2'>
                        Bakiye Yükle
                        <svg fill="#1A5739" width="24" height="24" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#1A5739" stroke-width="20.224"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path> </g></svg>                    </a>
                </div>
            </div>

            <div className="flex justify-between gap-2 lg:gap-4 xl:gap-8">
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/netflix.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Netflix</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/netflix.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Netflix</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/freefire.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Free Fire</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/valorant.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Valorant</div>
                </a>
                <a href='/product/valorant' className='flex flex-col gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/lol.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>LoL</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/razergold.jpg" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Razer Gold</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/apple.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Apple</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/apple.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Apple</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/apple.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Apple</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/xbox.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Xbox</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/playstation.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Playstation</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
                <a href='/product/valorant' className='flex flex-col hidden md:flex gap-2 justify-center items-center'>
                    <div className="w-[60px] h-[60px] rounded-full border bg-white dark:bg-gray-200 border-gray-200 relative flex items-center justify-center p-2">
                        <img src="/amazon.png" className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                    <div className='font-bold whitespace-nowrap'>Amazon</div>
                </a>
            </div>
        </div>
    )
}

export default TopMenu