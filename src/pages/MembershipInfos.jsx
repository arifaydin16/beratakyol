import React, { useState } from 'react'
import Select from '../components/ui/Select'
import { href } from 'react-router-dom'
import ProfileLayout from '../layouts/ProfileLayout';

const MembershipInfos = () => {
    const [tab, setTab] = useState(0);
    const [phoneInputOpen, setPhoneInputOpen] = useState(false);
    return (
        <ProfileLayout>

            <div className="col-span-3 md:bg-[var(--pink-gray)] rounded-4xl pb-12">
                <div className="p-4 flex gap-8 border-b-2 border-[var(--primary)]">
                    <div onClick={() => setTab(0)} className={`${tab === 0 ? 'text-[var(--primary)]' : ''} text-base md:text-2xl font-bold cursor-pointer`}>Kişisel Bilgilerim</div>
                    <div onClick={() => setTab(1)} className={`${tab === 1 ? 'text-[var(--primary)]' : ''} text-base md:text-2xl font-bold cursor-pointer`}>Fatura Bilgilerim</div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <div className="justify-end w-full mb-2 text-blue-400 flex gap-2 items-center">
                        Bilgileri Düzenle
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" /></svg>
                    </div>

                    {
                        tab === 0 ?
                            <form className='w-full md:w-1/2 flex flex-col gap-6'>
                                {/* Kişisel Bilgilerim */}

                                <div>
                                    <div className="text-gray-500 text-sm">Ad Soyad</div>
                                    <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Ad Soyad' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Email</div>
                                    <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='örnek@gmail.com' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Telefon Numarası</div>
                                    <div className='flex h-fit flex rounded-lg border border-gray-200 text-sm'>

                                        <div className='p-1 flex items-center justify-center relative border-r border-gray-200'>
                                            <div className="flex cursor-pointer items-center justify-center gap-2" onClick={() => setPhoneInputOpen(prev => !prev)}>
                                                <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                    <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" /></path></svg>
                                            </div>
                                            <div className={`absolute bg-white left-1/2 rounded-lg border border-gray-200 -translate-x-1/2 top-11 w-fit ${phoneInputOpen ? '' : 'hidden'}`}>
                                                <div onClick={() => setPhoneInputOpen(false)} className="flex mb-2 cursor-pointer hover:bg-gray-100 duration-200 p-2 items-center gap-2">
                                                    <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                                    <span>+90</span>
                                                </div>
                                                <div onClick={() => setPhoneInputOpen(false)} className="flex mb-2 cursor-pointer hover:bg-gray-100 duration-200 p-2 items-center gap-2">
                                                    <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                                    <span>+90</span>
                                                </div>
                                                <div onClick={() => setPhoneInputOpen(false)} className="flex mb-2 cursor-pointer hover:bg-gray-100 duration-200 p-2 items-center gap-2">
                                                    <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                                    <span>+90</span>
                                                </div>
                                                <div onClick={() => setPhoneInputOpen(false)} className="flex mb-2 cursor-pointer hover:bg-gray-100 duration-200 p-2 items-center gap-2">
                                                    <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                                    <span>+90</span>
                                                </div>

                                            </div>
                                        </div>

                                        <input type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg w-full text-base' placeholder='Telefon Numarası' />
                                    </div>

                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Şifre</div>
                                    <input type="password" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='******' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Kimlik Doğrulaması</div>
                                    <div className="p-2 w-full border bg-white dark:bg-stone-800 border-gray-200 rounded-lg flex items-center justify-between">
                                        <span>Tamamlandı</span>
                                        <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                                    </div>
                                </div>
                                <a href='/change-password' className="text-right text-[var(--primary)]">Şifre Değiştir</a>
                                <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Kaydet</button>

                            </form>
                            :
                            <form className='w-full md:w-1/2 flex flex-col gap-6'>
                                {/* Fatura Bilgilerim */}

                                <div>
                                    <div className="text-gray-500 text-sm">Ad Soyad</div>
                                    <input name='namesurname' type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Ad Soyad' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">TC Kimlik Numarası/Pasaport No/Yurtdışı Kimlik No</div>
                                    <input name='tckn' type="text" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Adres</div>
                                    <textarea name='address' rows={4} className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='Açık Adres' />
                                </div>

                                <div>
                                    <div className="text-gray-500 text-sm">Ülke</div>
                                    <select name="country" className='bg-white dark:bg-stone-800 p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">Türkiye</option>
                                        <option value="de">Almanya</option>
                                        <option value="fr">Fransa</option>
                                        <option value="it">İtalya</option>
                                        <option value="en">İngiltere</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Şehir</div>
                                    <select name="city" className='bg-white dark:bg-stone-800 p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="izmir">İzmir</option>
                                        <option value="istanbul">İstanbul</option>
                                        <option value="ankara">Ankara</option>
                                        <option value="bursa">Bursa</option>
                                        <option value="antalya">Antalya</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Fatura Dili</div>
                                    <select name="bill_lang" className='bg-white dark:bg-stone-800 p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">Türkçe</option>
                                        <option value="de">Almanca</option>

                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Para Birimi</div>
                                    <select name="country" className='bg-white dark:bg-stone-800 p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">TL</option>
                                        <option value="tr">USD</option>
                                        <option value="tr">GBP</option>
                                        <option value="tr">WON</option>
                                    </select>
                                </div>

                                <div className="flex gap-2 items-center text-sm text-gray-500">
                                    <input type="checkbox" />
                                    E-fatura gönderilmesini onaylıyorum.
                                </div>
                                <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Kaydet</button>

                            </form>
                    }



                </div>

            </div>
        </ProfileLayout>
    )
}

export default MembershipInfos