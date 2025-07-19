import React, { useState } from 'react'
import Select from '../components/ui/Select'
import { href } from 'react-router-dom'
import ProfileLayout from '../layouts/ProfileLayout';

const MembershipInfos = () => {
    const [tab, setTab] = useState(0);
    return (
        <ProfileLayout>

            <div className="col-span-3 md:bg-[var(--pink-gray)] rounded-4xl pb-12">
                <div className="p-4 flex gap-8 border-b-2 border-[var(--primary)]">
                    <div onClick={() => setTab(0)} className={`${tab === 0 ? 'text-[var(--primary)]' : ''} text-lg md:text-2xl font-bold cursor-pointer`}>Kişisel Bilgilerim</div>
                    <div onClick={() => setTab(1)} className={`${tab === 1 ? 'text-[var(--primary)]' : ''} text-lg md:text-2xl font-bold cursor-pointer`}>Fatura Bilgilerim</div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <div className="text-right w-full mb-2 text-blue-400">Bilgileri Düzenle</div>

                    {
                        tab === 0 ?
                            <form className='w-full md:w-1/2 flex flex-col gap-6'>
                                {/* Kişisel Bilgilerim */}

                                <div>
                                    <div className="text-gray-500 text-sm">Ad Soyad</div>
                                    <input type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Ad Soyad' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Email</div>
                                    <input type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='örnek@gmail.com' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Telefon Numarası</div>
                                    <div className='flex h-fit hidden md:flex rounded-lg border border-gray-200 text-sm'>

                                        <div className='p-1 flex items-center justify-center border-r border-gray-200'>
                                            <img src="/flag_tr.png" className='w-[24px] min-w-[24px] h-[24px] min-h-[24px] rounded-full' alt="" />
                                        </div>

                                        <input type="text" className='p-2 outline-none bg-white rounded-lg w-full text-base' placeholder='Telefon Numarası' />
                                    </div>

                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Şifre</div>
                                    <input type="password" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='******' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Kimlik Doğrulaması</div>
                                    <input type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Tamamlandı' disabled />
                                </div>
                                <a href='/change-password' className="text-right text-[var(--primary)]">Şifre Değiştir</a>
                                <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Kaydet</button>

                            </form>
                            :
                            <form className='w-full md:w-1/2 flex flex-col gap-6'>
                                {/* Fatura Bilgilerim */}

                                <div>
                                    <div className="text-gray-500 text-sm">Ad Soyad</div>
                                    <input name='namesurname' type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Ad Soyad' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">TC Kimlik Numarası/Pasaport No/Yurtdışı Kimlik No</div>
                                    <input name='tckn' type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='' />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Adres</div>
                                    <textarea name='address' rows={4} className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Açık Adres' />
                                </div>

                                <div>
                                    <div className="text-gray-500 text-sm">Ülke</div>
                                    <select name="country" className='bg-white p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">Türkiye</option>
                                        <option value="de">Almanya</option>
                                        <option value="fr">Fransa</option>
                                        <option value="it">İtalya</option>
                                        <option value="en">İngiltere</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Şehir</div>
                                    <select name="city" className='bg-white p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="izmir">İzmir</option>
                                        <option value="istanbul">İstanbul</option>
                                        <option value="ankara">Ankara</option>
                                        <option value="bursa">Bursa</option>
                                        <option value="antalya">Antalya</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Fatura Dili</div>
                                    <select name="bill_lang" className='bg-white p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">Türkçe</option>
                                        <option value="de">Almanca</option>

                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Para Birimi</div>
                                    <select name="country" className='bg-white p-2 w-full p-2 outline-none rounded-lg border border-gray-200'>
                                        <option value="tr">TL</option>
                                        <option value="tr">USD</option>
                                        <option value="tr">GBP</option>
                                        <option value="tr">WON</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm">Kimlik Doğrulaması</div>
                                    <input type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Tamamlandı' disabled />
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