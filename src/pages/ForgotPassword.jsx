import React from 'react'

const ForgotPassword = () => {
    return (

        <div className='p-4 px-2 lg:px-8 xl:px-32 inter-500 min-h-[80vh]'>
            <div className="h-full p-4 flex justify-center md:bg-gray-100 py-24 rounded-xl">
                <div className="w-full md:w-1/3">
                    <div className="text-3xl text-center font-bold">Doğrulama Kodu</div>
                    <div className="text-sm text-gray-500 text-center mt-1">Şifrenizi yenilemek için doğrulama kodunu giriniz.</div>
                    <form className='mt-8 flex flex-col gap-4'>
                        <div>
                            <div className="text-gray-500 text-sm">Doğrulama Kodu</div>
                            <input type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Doğrulama kodunu girin.' />
                        </div>

                        <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Kod İste</button>
                    </form>




                </div>
            </div>
        </div>
    )
}

export default ForgotPassword