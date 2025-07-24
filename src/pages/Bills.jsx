import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'


const bills = [
    {
        bill_name: 'Ödeme_1577',
        created_at: '2025-07-19T11:55:08.324Z',
        amount: 300.50,
    },
    {
        bill_name: 'Ödeme_1277',
        created_at: '2025-07-19T11:55:08.324Z',
        amount: 300.50,
    },
    {
        bill_name: 'Ödeme_2596',
        created_at: '2025-07-19T11:55:08.324Z',
        amount: 300.50,
    },
    {
        bill_name: 'Ödeme_5571',
        created_at: '2025-07-19T11:55:08.324Z',
        amount: 300.50,
    },
]
const Bills = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl pb-12">
               <div className="flex justify-between items-center gap-2">
                    <div className='flex overflow-hidden h-fit max-w-full max-md:flex-1 rounded-lg border border-gray-200 text-sm'>
                        <div className='px-3 p-1 flex items-center justify-center border-r border-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                        </div>
                        <input type="text" className='p-2 outline-none dark:bg-stone-800' placeholder='Arama...' />
                    </div>
                    <div className='flex overflow-hidden h-fit max-w-full w-auto rounded-lg border border-gray-200 text-sm'>
                        <input type="date" className='p-2 outline-none dark:bg-stone-800' placeholder='Arama...' />
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                    {
                        bills?.map((bill, index) => (
                            <div key={index} className='p-2 bg-[var(--pink-gray)] rounded-lg flex justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-12 relative h-12 bg-[var(--primary-light)]/50 flex items-center justify-center rounded-full'>
                                        <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v20l-1.5-1.5L18 22l-1.5-1.5L15 22l-1.5-1.5L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5zm3-5h12v-2H6zm0-4h12v-2H6zm0-4h12V7H6z" /></svg>

                                    </div>

                                    <div>
                                        <div>{bill.bill_name}</div>
                                        <div className='text-xs text-gray-500'>{new Date(bill.created_at).toLocaleString('tr-TR')}</div>
                                    </div>


                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className='font-bold text-xl'>{Intl.NumberFormat('tr-TR').format(bill.amount)} ₺</div>
                                    <a href='#'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-500' width="32" height="32" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Bills