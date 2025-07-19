import React, { useState } from 'react'
import GameCard from '../components/GameCard'

const Homepage = () => {
    const [activeBlogTab, setActiveBlogTab] = useState('CAMPAIGNS');
    return (
        <div className='p-4 px-2 lg:px-8 xl:px-32'>
            <div className='p-4 rounded-4xl md:rounded-lg gap-4 items-center bg-gray-100 flex'>
                <div className='flex-4/6 h-[50vh]'>
                    <img src="/banner_image.jpg" className='rounded-4xl md:rounded-lg object-cover object-center h-full overflow-hidden w-full' alt="" />
                </div>
                <div className="flex-2/6 gap-2 hidden md:flex flex-col h-[50vh]">
                    <div className="flex-1 overflow-hidden">
                        <img src="/banner_image.jpg" className='rounded-lg object-cover object-center h-full overflow-hidden w-full' alt="" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <img src="/banner_image.jpg" className='rounded-lg object-cover object-center h-full overflow-hidden w-full' alt="" />
                    </div>
                </div>
            </div>


            <div className="w-full inter-500 hidden md:flex justify-between">
                <h3 className='my-6 !font-bold text-xl'>Popüler Kategoriler</h3>
                <a href='#' className="flex hover:text-[var(--primary)] duration-200 items-center gap-2">
                    <div className="text-xs">Tümünü Gör</div>
                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                </a>
            </div>

            <div className='hidden md:flex justify-between items-center gap-8'>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/netflix2.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/amazon.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/steam.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/netflix2.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/amazon.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/steam.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/netflix2.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Netflix Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/amazon.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Amazon Hediye Kartları</div>
                </div>
                <div className='rounded-lg flex flex-col items-center justify-center border border-gray-200 p-2'>
                    <img src="/steam.png" className='w-[60px] h-[60px] rounded-full object-cover' alt="" />
                    <div className="mt-2 font-bold text-center text-lg">Steam Hediye Kartları</div>
                </div>
            </div>

            <div className="w-full inter-500 flex justify-between">
                <h3 className='my-6 !font-bold text-xl'>İndirimdekiler</h3>
                <a href='#' className="flex hover:text-[var(--primary)] duration-200 items-center gap-2">
                    <div className="text-xs">Tümünü Gör</div>
                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                </a>
            </div>

            <div className="flex md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 max-w-screen w-full overflow-x-auto scroll-smooth custom-scrollbar">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />

            </div>
            <div className="w-full inter-500 flex justify-between">
                <h3 className='my-6 !font-bold text-xl'>Popüler PC Oyunları</h3>
                <a href='#' className="flex hover:text-[var(--primary)] duration-200 items-center gap-2">
                    <div className="text-xs">Tümünü Gör</div>
                    <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                </a>
            </div>

            <div className="flex md:grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 max-w-screen w-full overflow-x-auto scroll-smooth custom-scrollbar">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />

            </div>


            <div className="hidden md:grid grid-cols-4 rounded-lg overflow-hidden mt-8 bg-[var(--primary-light)] inter-500">
                <div onClick={()=>setActiveBlogTab('CAMPAIGNS')} className={`rounded-lg cursor-pointer hover:bg-[var(--primary)]/60 duration-200 font-bold w-full text-center p-2 text-white ${activeBlogTab === 'CAMPAIGNS' ? 'bg-[var(--primary)]' : 'bg-[var(--primary-light)]'}`}>
                    Kampanyalar
                </div>
                <div onClick={()=>setActiveBlogTab('NEWS')} className={`rounded-lg cursor-pointer hover:bg-[var(--primary)]/60 duration-200 font-bold w-full text-center p-2 text-white ${activeBlogTab === 'NEWS' ? 'bg-[var(--primary)]' : 'bg-[var(--primary-light)]'}`}>
                    Haberler
                </div>
                <div onClick={()=>setActiveBlogTab('GUIDES')} className={`rounded-lg cursor-pointer hover:bg-[var(--primary)]/60 duration-200 font-bold w-full text-center p-2 text-white ${activeBlogTab === 'GUIDES' ? 'bg-[var(--primary)]' : 'bg-[var(--primary-light)]'}`}>
                    Rehberler
                </div>
                <div onClick={()=>setActiveBlogTab('BLOG')} className={`rounded-lg cursor-pointer hover:bg-[var(--primary)]/60 duration-200 font-bold w-full text-center p-2 text-white ${activeBlogTab === 'BLOG' ? 'bg-[var(--primary)]' : 'bg-[var(--primary-light)]'}`}>
                    Blog
                </div>
            </div>

            <div className="mt-2 hidden md:grid grid-cols-4 gap-8 inter-500">
                <div>
                    <img src="/campaign.jpg" className='h-[250px] object-cover rounded-4xl w-full' alt="" />
                    <div className="text-xs text-right my-2">9 Temmuz 2025</div>
                    <div className='font-bold text-lg'>Mobile-First Design: Why It’s More Important Than Ever!</div>
                    <div className="mt-2">Mobile-First Design: Why It’s More Important Than Ever! Mobile-First Design: Why It’s More Important Than Ever!Mobile-First Design: Why It’s More Important Than Ever!</div>
                </div>
                <div>
                    <img src="/campaign.jpg" className='h-[250px] object-cover rounded-4xl w-full' alt="" />
                    <div className="text-xs text-right my-2">9 Temmuz 2025</div>
                    <div className='font-bold text-lg'>Mobile-First Design: Why It’s More Important Than Ever!</div>
                    <div className="mt-2">Mobile-First Design: Why It’s More Important Than Ever! Mobile-First Design: Why It’s More Important Than Ever!Mobile-First Design: Why It’s More Important Than Ever!</div>
                </div>
                <div>
                    <img src="/campaign.jpg" className='h-[250px] object-cover rounded-4xl w-full' alt="" />
                    <div className="text-xs text-right my-2">9 Temmuz 2025</div>
                    <div className='font-bold text-lg'>Mobile-First Design: Why It’s More Important Than Ever!</div>
                    <div className="mt-2">Mobile-First Design: Why It’s More Important Than Ever! Mobile-First Design: Why It’s More Important Than Ever!Mobile-First Design: Why It’s More Important Than Ever!</div>
                </div>
                <div>
                    <img src="/campaign.jpg" className='h-[250px] object-cover rounded-4xl w-full' alt="" />
                    <div className="text-xs text-right my-2">9 Temmuz 2025</div>
                    <div className='font-bold text-lg'>Mobile-First Design: Why It’s More Important Than Ever!</div>
                    <div className="mt-2">Mobile-First Design: Why It’s More Important Than Ever! Mobile-First Design: Why It’s More Important Than Ever!Mobile-First Design: Why It’s More Important Than Ever!</div>
                </div>
            </div>


            <div className="w-full flex flex-col lg:flex-row justify-between my-12 inter-500 gap-8 lg:gap-24">
                <div className='flex gap-4 items-center border-2 border-[var(--primary-light)] w-full rounded-lg p-2'>
                    <svg className='text-[var(--primary)] min-w-[45px]' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z" /></svg>
                    <div className="flex items-center justify-center">
                        <span className="text-center text-sm">Güvenli Alışverişi, Güvenlik ticaret sistemi ve 3D Secure & SSL Güvenlik sistemleriyle sorunsuz alışveriş yapın!</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-2 border-[var(--primary-light)] w-full rounded-lg p-2'>
                    <svg className='text-[var(--primary)] min-w-[45px]' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14.54 23H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2h10a2 2 0 0 1 2 2v10c-.7 0-1.37.13-2 .35V5H7v14h6c0 1.54.58 2.94 1.54 4m3.21-.84l-2.75-3L16.16 18l1.59 1.59L21.34 16l1.16 1.41z" /></svg>
                    <div className="flex items-center justify-center">
                        <span className="text-center text-sm">7/24 Canlı Destek hizmetimize, Whatsapp üzerinden ulaşabilirsiniz.</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-2 border-[var(--primary-light)] w-full rounded-lg p-2'>
                    <svg className='text-[var(--primary)] min-w-[45px]' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 16q1.2 0 2.138-.712T15.5 13.45h-7q.425 1.125 1.363 1.838T12 16m-2.5-4q.625 0 1.063-.437T11 10.5t-.437-1.062T9.5 9t-1.062.438T8 10.5t.438 1.063T9.5 12m5 0q.625 0 1.063-.437T16 10.5t-.437-1.062T14.5 9t-1.062.438T13 10.5t.438 1.063T14.5 12M7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z" /></svg>
                    <div className="flex items-center justify-center">
                        <span className="text-center text-sm">Müşterimize kalite hizmeti vermenin mutluluğunu yaşıyoruz.</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center border-2 border-[var(--primary-light)] w-full rounded-lg p-2'>
                    <svg className='text-[var(--primary)] min-w-[45px]' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M14.818 9.444h.91c1.004 0 1.818.796 1.818 1.778m0 0v.889m0-.889a.9.9 0 0 1 .909-.889c1.004 0 1.818.796 1.818 1.778m0 0V13m0-.889c0-.465.427-.82.896-.743l.312.051c.876.143 1.519.885 1.519 1.754v.42c0 1.931 0 2.897-.301 3.666c-.175.447-.636 1.015-1.004 1.427a1.93 1.93 0 0 0-.514 1.279V21m-6.363-9.778V6.333c0-.736-.61-1.333-1.363-1.333c-.754 0-1.364.597-1.364 1.333v7.078l-1.473-1.445a1.553 1.553 0 0 0-2.282.124a1.48 1.48 0 0 0-.03 1.842l3.273 4.088c.626.782.966 1.987.966 2.98" /><path d="M7.002 18c-1.224-.01-1.941-.058-2.532-.302a4 4 0 0 1-2.165-2.165C2 14.798 2 13.866 2 12.002v-2c0-3.773 0-5.659 1.172-6.83S6.231 2 10.004 2h4.001c3.773 0 5.66 0 6.832 1.172C21.78 4.115 21.964 5.52 22 8" /></g></svg>
                    <div className="flex items-center justify-center">
                        <span className="text-center text-sm">Stok problemi yaşamadan, Epin kodlarınız saniyeler içinde elinizde.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage