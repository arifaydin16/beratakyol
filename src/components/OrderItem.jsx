import React, { useState } from 'react'

const OrderItem = ({ order }) => {
    const [tabOpen, setTabOpen] = useState(false);
    return (
        <div className="p-2 rounded-4xl bg-[var(--pink-gray)] relative">
            <div className="flex justify-between">
                <div className="flex flex-col items-between">
                    <div className="md:flex items-center gap-4">
                        <div className="relative flex">
                            {
                                order?.products?.map((product, $index) => (
                                    <div className="w-8 relative">
                                        <img key={$index} src="/valorantilan.png" className={`min-w-16 border border-[var(--primary)] min-h-16 w-16 h-16 rounded-full`} alt="" />
                                        {
                                            $index === order?.products.length - 1 ?
                                                <div className="absolute -right-8 bottom-0 p-1 bg-white rounded-full flex items-center justify-center">
                                                    {
                                                        order?.order_status === 'APPROVED' ?
                                                            <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                                                            :
                                                            order?.order_status === 'DECLINED' ?
                                                                <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" /></svg>
                                                                :
                                                                order?.order_status === 'PROGRESS' ?
                                                                    <svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4t3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22m2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4zM5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75z" /></svg>
                                                                    : ''
                                                    }
                                                </div>
                                                : ''
                                        }
                                    </div>
                                ))
                            }

                        </div>
                        <div className="md:ml-8">
                            <div className="">Sipariş No: {order?.order_id}</div>
                            <div className="text-gray-500 text-xs">Adet: {order?.products?.length}</div>

                        </div>
                        <div className={`md:ml-8 md:mt-0 mt-4 ${tabOpen ? '' : 'h-[0px]'} overflow-hidden flex flex-col gap-2`}>
                            {
                                order?.products?.map((product, $index) => (
                                    <div key={$index} className="flex gap-4 items-center">
                                        <span className="font-normal text-sm">{product?.product_name}</span>
                                        <span className="font-normal text-gray-500 text-sm">Ürün Kodu:</span>
                                        <span className="font-normal p-1 bg-gray-200 rounded text-sm flex items-center gap-1 cursor-pointer" onClick={() => window.navigator.clipboard.writeText(product?.product_code)}>
                                            {product?.product_code}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z" /></svg>

                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {
                        order?.order_note ?
                            <div className="text-gray-500 text-sm p-2">Sipariş Notu: {order?.order_note}</div>
                            : ''
                    }
                    <div className="flex gap-2 items-center md:p-2 mt-4 md:mt-0">
                        <div className="p-1 bg-gray-200 flex gap-2 items-center text-xs rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="15" height="15" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M9 10c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 0.98 -0.47 1.85 -1.2 2.4c-0.73 0.55 -1.3 0.6 -1.8 1.6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0" /></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0" /></path></g></svg>
                            Nasıl Kullanılır?
                        </div>
                        <div className="p-1 bg-gray-200 flex gap-2 items-center text-xs rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500" width="15" height="15" viewBox="0 0 24 24">
                                <g fill="none"><path fill="currentColor" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" opacity=".16" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" /></g></svg>
                            Yorum Yap
                        </div>
                        <div className="p-1 bg-gray-200 flex gap-2 items-center text-xs rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="15" height="15" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
                            Sorun Bildir
                        </div>
                    </div>

                </div>


                <div className="p-4">
                    <div onClick={() => setTabOpen(prev => !prev)} className="flex justify-end">
                        <svg className="text-[var(--primary)] duration-200" style={tabOpen ? { rotate: '180deg' } : {}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">

                            <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" /></path></svg>
                    </div>
                    <div className="text-xs text-gray-500 text-right">{new Date(order?.order_date).toLocaleString('tr-TR')}</div>
                    <div className="font-bold text-xl text-right whitespace-nowrap">{Intl.NumberFormat('tr-TR').format(order?.price)} ₺</div>
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-end mt-4">
                        {
                            order?.order_status === 'DECLINED' ?
                                <div className="flex flex-col items-center justify-center">
                                    <svg className='bg-white text-red-500 p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z" /><path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5" /></g></svg>
                                    <div className="text-gray-500 text-center text-xs">Desteğe Bağlan</div>
                                </div>
                                : ''
                        }
                        <div className="flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-white text-blue-500 p-1 rounded-full" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13q0-.425.288-.712T4 12t.713.288T5 13q0 2.925 2.038 4.963T12 20t4.963-2.037T19 13t-2.037-4.962T12 6h-.15l.85.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L8.7 5.7q-.3-.3-.3-.7t.3-.7l2.575-2.575q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-.85.85H12q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 13t-.712 3.513t-1.925 2.85t-2.85 1.925T12 22" /></svg>
                            <div className="text-gray-500 text-xs text-center">Tekrar Al</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem