import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-12 inter-500'>
            <div className='bg-gray-100 p-4 overflow-x-auto flex justify-evenly md:gap-0 gap-12'>
                <img src="/amazon.png" className='h-16' alt="" />
                <img src="/steam.png" className='h-16' alt="" />
                <img src="/xbox.png" className='h-16' alt="" />
                <img src="/lol.png" className='h-16' alt="" />
                <img src="/apple.png" className='h-16' alt="" />
                <img src="/playstation.png" className='h-16' alt="" />
                <img src="/microsoftstore.png" className='h-16' alt="" />
            </div>

            <div className="my-20 px-24 flex items-center justify-end">
                <a href='#' className="w-9 h-9 flex items-center justify-center rounded-lg text-white bg-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" /></svg>
                </a>
            </div>

            <div className='py-8 pb-12 px-2 lg:px-8 xl:px-32 border-t-2 border-[var(--primary)]'>
                <img src="/pinatapin.png" className='h-20' alt="" />

                {/* Masaüstü */}
                <div className="mt-12 hidden md:grid grid-cols-4">
                    <div className='flex flex-col gap-3'>
                        <a href="#" className="block">Hakkımızda</a>
                        <a href="#" className="block">Bayi Başvurusu</a>
                        <a href="#" className="block">İş Ortaklığı</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className="block">Kişisel Verilerin Korunması</a>
                        <a href="#" className="block">Gizlilik Politikası</a>
                        <a href="#" className="block">Aydınlatma Metni</a>
                        <a href="#" className="block">Üyelik Sözleşmesi</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <a href="#" className="block">İletişim</a>
                        <div className="flex gap-2 items-center">
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z" /></svg>
                            <a href='mailto:Support@pinatapin.com'>Support@pinatapin.com</a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>
                            <a href='tel:995558486256'>+995 558 48 62 56</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex gap-2 items-center">
                            <img src="/visa.png" className='h-12' alt="" />
                            <img src="/mastercard.png" className='h-12' alt="" />

                        </div>
                        <img src="/paypal.png" className='h-12 object-contain' alt="" />
                        <img src="/safeshopping.jpg" className='h-12 object-contain' alt="" />
                    </div>
                </div>

                {/* Mobil */}
                <div className="block md:hidden">
                    <div className="mt-12 flex justify-between items-center">
                        <div className='flex flex-col gap-3 text-sm'>
                            <a href="#" className="block">Hakkımızda</a>
                            <a href="#" className="block">Bayi Başvurusu</a>
                            <a href="#" className="block">İş Ortaklığı</a>
                            <a href="#" className="block">Kişisel Verilerin Korunması</a>
                            <a href="#" className="block">Gizlilik Politikası</a>
                            <a href="#" className="block">Aydınlatma Metni</a>
                            <a href="#" className="block">Üyelik Sözleşmesi</a>
                        </div>


                        <div className="flex flex-col items-center justify-center gap-8">
                            <div className="flex gap-2 items-center">
                                <img src="/visa.png" className='h-8' alt="" />
                                <img src="/mastercard.png" className='h-8' alt="" />

                            </div>
                            <img src="/paypal.png" className='h-8 object-contain' alt="" />
                            <img src="/safeshopping.jpg" className='h-12 object-contain' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-8'>
                        <a href="#" className="block text-sm">İletişim</a>
                        <div className="flex gap-2 items-center">
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z" /></svg>
                            <a href='mailto:Support@pinatapin.com' className='font-bold'>Support@pinatapin.com</a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg className='text-[var(--primary)]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>
                            <a href='tel:995558486256' className='font-bold'>+995 558 48 62 56</a>
                        </div>
                    </div>
                </div>




                <div className="flex mt-4 items-center justify-center gap-4">
                    <img src="/instagram.png" className='h-14' alt="" />
                    <img src="/youtube.png" className='h-14' alt="" />
                    <img src="/facebook.png" className='h-14' alt="" />
                    <img src="/xcom.png" className='h-14' alt="" />
                    <img src="/linkedin.png" className='h-14' alt="" />
                </div>

                <p className="mt-4 max-w-1/3 text-xs text-center mx-auto">Copyright © 2025 - Pinatapin Pinatapin.com, Brain Information Technologies markası olup, tüm hakları saklıdır.</p>
            </div>
        </footer>
    )
}

export default Footer