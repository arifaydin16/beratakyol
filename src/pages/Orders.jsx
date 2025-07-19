import OrderItem from "../components/OrderItem"
import ProfileLayout from "../layouts/ProfileLayout"


const orders = [
    {
        order_id: '12123321',
        order_date: '2025-07-19T11:55:08.324Z',
        products: [
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XYXY-XYXY-XYXY-XYXY'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XZXZ-XZXZ-XZXZ-XZXZ'
            },
        ],
        price: 300.50,
        order_status: 'APPROVED'
    },
    {
        order_id: '12123321',
        order_date: '2025-07-19T11:55:08.324Z',
        products: [
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XYXY-XYXY-XYXY-XYXY'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XZXZ-XZXZ-XZXZ-XZXZ'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XYXY-XYXY-XYXY-XYXY'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XZXZ-XZXZ-XZXZ-XZXZ'
            },
        ],
        price: 300.50,
        order_status: 'DECLINED',
        order_note: 'Ödeme banka tarafından reddedildi!'
    },
    {
        order_id: '12123321',
        order_date: '2025-07-19T11:55:08.324Z',
        products: [
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XYXY-XYXY-XYXY-XYXY'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XZXZ-XZXZ-XZXZ-XZXZ'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XYXY-XYXY-XYXY-XYXY'
            },
            {
                product_id: 1,
                product_name: 'Valorant 1000 VP',
                product_code: 'XZXZ-XZXZ-XZXZ-XZXZ'
            },
        ],
        price: 300.50,
        order_status: 'PROGRESS'
    },
]
const Orders = () => {

    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl pb-12">
                <div className="flex justify-between items-center">
                    <div className='flex h-fit max-w-1/2 rounded-lg border border-gray-200 text-sm'>
                        <div className='px-3 p-1 flex items-center justify-center border-r border-gray-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" /></svg>
                        </div>
                        <input type="text" className='p-2 outline-none' placeholder='Arama...' />
                    </div>
                    <div className='flex h-fit max-w-1/2 rounded-lg border border-gray-200 text-sm'>
                        <input type="date" className='p-2 outline-none' placeholder='Arama...' />
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                    {
                        orders?.map((order, index) => (
                            <OrderItem order={order} key={index} />
                        ))
                    }
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Orders