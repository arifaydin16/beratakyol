import React, { useState } from 'react'

const Select = ({ icon, data, placeholder, className, textAlign }) => {
    const [tabActive, setTabActive] = useState(false);
    return (
        <div className={`p-1 px-2 inter-500 relative rounded-lg text-sm border border-gray-200 flex items-center gap-4 ${className ? className : ''}`}>
            <div className="flex w-full cursor-pointer items-center gap-4" onClick={() => setTabActive(prev => !prev)}>
                {icon}
                {placeholder}
                <svg style={{ rotate: tabActive ? '180deg' : '0deg' }} className='duration-200' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" /></svg>
            </div>
            {
                tabActive ?
                    <div className={`absolute z-10 w-max min-w-full justify-center top-0 left-1/2 translate-x-[-50%] p-2 bg-white dark:bg-stone-800 border border-gray-200 top-[40px] rounded-lg flex flex-col gap-4 ${textAlign ? textAlign : 'text-center'}`}>
                        {
                            data ? data?.map((item, index) => (
                                <div key={index} className="flex w-full items-center gap-2">
                                    {
                                        item.icon ?
                                            <span className='text-[var(--primary)]'>
                                                {item.icon}
                                            </span> : ''
                                    }
                                    <a href={item.href} className='hover:text-[var(--primary)] w-full whitespace-nowrap duration-200'>{item.label}</a>
                                </div>
                            )) : ''
                        }
                    </div> : ''
            }
        </div>
    )
}

export default Select