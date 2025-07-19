import ProfileLayout from '../layouts/ProfileLayout'



const NewRequest = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl pb-12">
                <div className='flex justify-end'>
                    <div className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white cursor-pointer">Yeni Talep</div>
                </div>
                <div className="bg-[var(--pink-gray)] rounded-lg mt-4">
                    <div className="p-4 flex gap-8 border-b-2 border-[var(--primary)]">
                        <div className={` text-2xl font-bold cursor-pointer`}>Talep Oluştur</div>
                    </div>
                    <form className='p-4 flex flex-col gap-4 px-2 lg:px-60 xl:px-72'>
                        <div>
                            <div className="text-gray-500 text-sm">Talep Başlığı</div>
                            <input name='request_header' type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Başlık' />
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Talep Detay</div>
                            <textarea name='request_detail' rows={5} type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='Talep Detay' />
                            <div className="w-full flex justify-end gap-1 items-center">
                                <label htmlFor='request_file'>Dosya Ekle</label>
                                <input id='request_file' type="file" hidden name='request_file' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M8.25 18q-2.6 0-4.425-1.825T2 11.75t1.825-4.425T8.25 5.5h9.25q1.875 0 3.188 1.313T22 10t-1.312 3.188T17.5 14.5H8.75q-1.15 0-1.95-.8T6 11.75t.8-1.95T8.75 9H18v2H8.75q-.325 0-.537.213T8 11.75t.213.538t.537.212h8.75q1.05-.025 1.775-.737T20 10t-.725-1.775T17.5 7.5H8.25q-1.775-.025-3.012 1.225T4 11.75q0 1.75 1.238 2.975T8.25 16H18v2z" /></svg>
                            </div>

                        </div>
                        <button type="submit" className="bg-[var(--primary)] w-full rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Oluştur</button>
                    </form>


                </div>
            </div>
        </ProfileLayout>
    )
}

export default NewRequest