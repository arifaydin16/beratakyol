import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'


const requests = [
    {
        title: 'Talep Başlığı 1',
        status: 'DONE',
        created_at: '2025-07-19T11:55:08.324Z',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt voluptas. Mollitia cum error voluptatem molestiae quo vitae quis, nemo accusantium soluta voluptas fuga impedit at dolore nobis provident recusandae voluptate ab, quae quod! Sapiente omnis nihil accusantium, atque quas est, ex maxime eligendi amet similique sit nostrum consequuntur velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt voluptas. Mollitia cum error voluptatem molestiae quo vitae quis, nemo accusantium soluta voluptas fuga impedit at dolore nobis provident recusandae voluptate ab, quae quod! Sapiente omnis nihil accusantium, atque quas est, ex maxime eligendi amet similique sit nostrum consequuntur velit.'
    },
    {
        title: 'Talep Başlığı 2',
        status: 'WAITING_ANSWER',
        created_at: '2025-07-19T11:55:08.324Z',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt voluptas. Mollitia cum error voluptatem molestiae quo vitae quis, nemo accusantium soluta voluptas fuga impedit at dolore nobis provident recusandae voluptate ab, quae quod! Sapiente omnis nihil accusantium, atque quas est, ex maxime eligendi amet similique sit nostrum consequuntur velit.'
    },
    {
        title: 'Talep Başlığı 2',
        status: 'WAITING',
        created_at: '2025-07-19T11:55:08.324Z',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, incidunt voluptas. Mollitia cum error voluptatem molestiae quo vitae quis, nemo accusantium soluta voluptas fuga impedit at dolore nobis provident recusandae voluptate ab, quae quod! Sapiente omnis nihil accusantium, atque quas est, ex maxime eligendi amet similique sit nostrum consequuntur velit.'
    },
]
const SupportRequests = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl pb-12">
                <div className='flex justify-end'>
                    <a href='/new-request' className="dbutton-red inline text-2xl w-fit mt-auto rounded-lg text-white cursor-pointer">Yeni Talep</a>
                </div>
                <div className="bg-[var(--pink-gray)] rounded-lg mt-4">
                    <div className="p-4 flex gap-8 border-b-2 border-[var(--primary)]">
                        <div className={` text-2xl font-bold cursor-pointer`}>Bekleyen</div>
                        <div className={`text-[var(--primary)] text-2xl font-bold cursor-pointer`}>Tamamlanan</div>
                    </div>
                    <div className='p-4 flex flex-col gap-4'>
                        {
                            requests?.map((request, index) => (
                                <div key={index} className='p-2 border border-gray-200 rounded-xl'>
                                    <div className="flex justify-between md:items-center">
                                        <div className="flex flex-col md:flex-row gap-2 md:items-center text-gray-500">
                                            <div>{request.title}</div>
                                            {
                                                request?.status === 'DONE' ?
                                                    <div className='p-1 text-center text-xs rounded bg-green-100 text-green-500'>Tamamlandı</div>
                                                    :
                                                    request.status === 'WAITING' ?
                                                        <div className='p-1 text-center text-xs rounded bg-yellow-100 text-yellow-500'>Bekliyor</div>
                                                        :
                                                        request.status === 'WAITING_ANSWER' ?
                                                            <div className='p-1 text-center text-xs rounded bg-blue-100 text-blue-500'>Yanıt Bekliyor</div>
                                                            : ''

                                            }
                                        </div>
                                        <div className='text-gray-500 text-xs'>{new Date(request.created_at).toLocaleString('tr-TR')}</div>
                                    </div>
                                    <div className="mt-2 line-clamp-4 text-sm font-thin text-gray-500">
                                        {
                                            request.content
                                        }
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="#" className='flex text-[var(--primary)] items-center gap-2'>
                                            <span>
                                                Detay
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" /></svg>

                                        </a>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </ProfileLayout>
    )
}

export default SupportRequests