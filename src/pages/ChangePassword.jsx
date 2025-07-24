import ProfileLayout from '../layouts/ProfileLayout'



const ChangePassword = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl">

                <div className="bg-[var(--pink-gray)] rounded-lg mt-4">
                    <div className="p-4 flex gap-8 border-b-2 border-[var(--primary)]">
                        <div className={`text-[var(--primary)] text-lg md:text-2xl font-bold cursor-pointer`}>Kişisel Bilgilerim</div>
                        <div className={`text-lg md:text-2xl font-bold cursor-pointer`}>Fatura Bilgilerim</div>
                    </div>
                    <form className='p-4 flex flex-col gap-4 px-2 lg:px-60 xl:px-72 py-24'>
                        <div>
                            <div className="text-gray-500 text-sm">Şifre</div>
                            <input type="password" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='******' />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Şifre Tekrar</div>
                            <input type="password" className='p-2 outline-none bg-white dark:bg-stone-800 rounded-lg border border-gray-200 w-full' placeholder='******' />
                        </div>

                        <button type="submit" className="bg-[var(--primary)] w-full rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Oluştur</button>
                    </form>


                </div>
            </div>
        </ProfileLayout>
    )
}

export default ChangePassword