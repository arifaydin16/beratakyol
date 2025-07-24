import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'

const SecuritySettings = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 bg-gray-100 dark:bg-stone-800 rounded-lg p-4">
                <div className="p-2 rounded-lg dark:bg-stone-900 gap-4 grid md:grid-cols-2 bg-white">
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>2FA Doğrulama</div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>Mail Doğrulama</div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>SMS Doğrulama</div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>KYC(Kimlik) Doğrulama</div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>

                </div>
            </div>
        </ProfileLayout>
    )
}

export default SecuritySettings