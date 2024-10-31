'use client'
import React from 'react';
import { TbMinus, TbPlus } from "react-icons/tb";

export const FaqQA = ({ faqData }) => {
    const [isOpen, setIsOpen] = React.useState({});

    const toggleFaq = (id) => {
        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            {faqData.map((data) => (
                <div key={data._id} className='border-y border-[#EAEAEA] xl:w-[630px] w-full cursor-pointer' onClick={() => toggleFaq(data._id)}>
                    <div className='flex items-center justify-between py-[28px]'>
                        <h6 className='text-[18px] leading-[24px] text-[#01005B]'>{data.question}</h6>
                        <div className='transition-all duration-500 text-2xl'>
                            {isOpen[data._id] ? <TbMinus /> : <TbPlus />}
                        </div>
                    </div>
                    <p className={`${isOpen[data._id] ? 'text-[16px] leading-[22px] text-[#676869] mb-[24px]' : 'hidden'}`}>
                        {data.answer}
                    </p>
                </div>
            ))}
        </>
    );
};
