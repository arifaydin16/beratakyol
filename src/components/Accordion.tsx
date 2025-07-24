import React, { useState, useRef, useEffect } from 'react';

const Accordion = ({ header, content }) => {
    const [opened, setOpened] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (opened && contentRef.current) {
            (contentRef.current as HTMLDivElement).style.maxHeight = (contentRef.current as HTMLDivElement).scrollHeight + 'px';
        } else if (contentRef.current) {
            (contentRef.current as HTMLDivElement).style.maxHeight = '0px';
        }
    }, [opened]);

    return (
        <>
            <div onClick={() => setOpened(prev => !prev)} className="p-4 rounded-full bg-gray-100 dark:bg-stone-800 flex justify-between text-xl items-center cursor-pointer">
                <div className='font-bold'>{header}</div>
                <svg
                    className={`text-[var(--primary)] transform transition-transform duration-300 ${opened ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="10"
                        strokeDashoffset="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15l-5 -5M12 15l5 -5"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.3s"
                            values="10;0"
                        />
                    </path>
                </svg>
            </div>

            <div style={{ maxHeight: '0px' }} className='duration-500 transition-all overflow-hidden' ref={contentRef}>
                <div
                    className={`rounded-4xl bg-gray-100 dark:bg-stone-800 text-xl text-[var(--primary)] font-bold overflow-hidden p-4`}

                >
                    <div>Valorant</div>
                    <div className="mt-2 text-gray-600 text-sm font-semibold">{content}</div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
