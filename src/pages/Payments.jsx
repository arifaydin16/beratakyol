import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'


const typeConversations = {
    'CREDIT_CARD': 'Kredi Kartı',
    'PAYPAL': 'PayPal',
    'CRYPTO': 'Kripto Ödeme'
}
const payments = [
    {
        payment_type: 'CREDIT_CARD',
        created_at: '2025-07-19T11:55:08.324Z',
        payment_no: '897548978548',
        amount: 300.50,
        status: 'APPROVED',
    },
    {
        payment_type: 'PAYPAL',
        created_at: '2025-07-19T11:55:08.324Z',
        payment_no: '897548978548',
        amount: 300.50,
        status: 'DECLINED',
    },
    {
        payment_type: 'CRYPTO',
        created_at: '2025-07-19T11:55:08.324Z',
        payment_no: '897548978548',
        amount: 300.50,
        status: 'DECLINED',
    },
]
const Payments = () => {
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
                        payments?.map((payment, index) => (
                            <div key={index} className='p-2 bg-[var(--pink-gray)] rounded-lg flex justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-12 relative h-12 bg-[var(--primary-light)]/50 flex items-center justify-center rounded-full'>
                                        <div className="absolute -right-2 -bottom-2 p-1 bg-white rounded-full flex items-center justify-center">
                                            {
                                                payment?.status === 'APPROVED' ?
                                                    <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                                                    :
                                                    payment?.status === 'DECLINED' ?
                                                        <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" /></svg>
                                                        :
                                                        payment?.status === 'PROGRESS' ?
                                                            <svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z" /></svg>
                                                            : ''
                                            }
                                        </div>
                                        {
                                            payment.payment_type === 'CREDIT_CARD' ?
                                                <svg xmlns="http://www.w3.org/2000/svg" className='text-[var(--primary)]' width="32" height="32" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-8h16V8H4z" /></svg>
                                                :
                                                payment.payment_type === 'PAYPAL' ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.13" height="32" viewBox="0 0 256 302">
                                                        <path fill="#27346A" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765" /><path fill="#27346A" d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74" /><path fill="#2790C3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477" /><path fill="#1F264F" d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865" /></svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='text-[var(--primary)]' width="32" height="32" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a1 1 0 0 0-1 1h-1a1 1 0 0 0-2 0a1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167-.394 2-1.527 2-2.85l-.005-.175a3.06 3.06 0 0 0-.734-1.827c.46-.532.739-1.233.739-1.998c0-1.323-.833-2.456-2-2.85V7a1 1 0 0 0-1-1m.09 7c.492 0 .91.437.91 1s-.418 1-.91 1H11v-2zm0-4c.492 0 .91.437.91 1c0 .522-.36.937-.806.993L13.09 11H11V9z" /></svg>
                                        }
                                    </div>

                                    <div>
                                        <div>{typeConversations[payment.payment_type]}</div>
                                        <div className='text-xs text-gray-500'>{new Date(payment.created_at).toLocaleString('tr-TR')}</div>
                                        <div className='text-xs text-gray-500'>No:{payment.payment_no}</div>
                                    </div>
                                    {
                                        payment?.status === 'DECLINED' ?
                                            <div className="flex flex-col items-center justify-center">
                                                <svg className='bg-white text-red-500 p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" /><path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" /></g></svg>
                                                <div className="text-gray-500 text-xs text-center">Desteğe <br />Bağlan</div>
                                            </div>
                                            :
                                            <div className="flex flex-col items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bg-white text-blue-500 p-1 rounded-full" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13q0-.425.288-.712T4 12t.713.288T5 13q0 2.925 2.038 4.963T12 20t4.963-2.037T19 13t-2.037-4.962T12 6h-.15l.85.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L8.7 5.7q-.3-.3-.3-.7t.3-.7l2.575-2.575q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-.85.85H12q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22" /></svg>
                                                <div className="text-gray-500 text-xs text-center">Tekrar Et</div>
                                            </div>
                                    }

                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className='font-bold text-xl whitespace-nowrap'>{Intl.NumberFormat('tr-TR').format(payment.amount)} ₺</div>
                                    <div className='hidden md:block'>
                                        <div className='text-center text-gray-500 text-xs text-center'>Durum</div>
                                        {
                                            payment.status === 'APPROVED' ?
                                                <div className='p-1 text-center text-xs rounded bg-green-100 text-green-500'>Tamamlandı</div>
                                                :
                                                <div className='p-1 text-center text-xs rounded bg-red-100 text-red-500'>Reddedildi</div>

                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Payments