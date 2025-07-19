import React from 'react'
import ProfileLayout from '../layouts/ProfileLayout'

const SecuritySettings = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 bg-gray-100 rounded-lg p-4">
                <div className="p-2 rounded-lg gap-4 grid md:grid-cols-2 bg-white">
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>2FA Doğrulama</div>
                        <div className="checkbox-apple">
                            <input className="yep" id="check-2fa" type="checkbox" />
                            <label for="check-2fa"></label>
                        </div>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>Mail Doğrulama</div>
                        <div className="checkbox-apple">
                            <input className="yep" id="check-m" type="checkbox" />
                            <label for="check-m"></label>
                        </div>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>SMS Doğrulama</div>
                        <div className="checkbox-apple">
                            <input className="yep" id="check-sms" type="checkbox" />
                            <label for="check-sms"></label>
                        </div>
                    </div>
                    <div className='flex justify-between p-2 border-b border-gray-300'>
                        <div className='text-sm'>KYC(Kimlik) Doğrulama</div>
                        <div className="checkbox-apple">
                            <input className="yep" id="check-kyc" type="checkbox" />
                            <label for="check-kyc"></label>
                        </div>
                    </div>

                </div>
            </div>
        </ProfileLayout>
    )
}

export default SecuritySettings