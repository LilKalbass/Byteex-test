import React from 'react'
import Image from "next/image";
import {urlFor} from "@/lib/sanity";
import {Rating} from "@/components/Rating";

export const FeaturedTestimonial = ({test}) => {
    return (
        <div className='flex bg-[#FFFFFF] flex-col shadow-2xl drop-shadow-xl px-5 py-4 box-content max-w-[402px] border-[1px] rounded-xl'>
            <div className='flex items-center gap-x-4 pb-3'>
                <div className='flex gap-x-3 items-center'>
                    <Image src={urlFor(test[0].image.asset._ref).url()} alt='testim_avatar' width={40} height={40}/>
                    <p className='text-[16px] leading-[24px]'>
                        {test[0].name}
                    </p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <Rating value={test[0].rating}/>
                    <p className='text-[12px] leading-[20px] text-[#828282] font-secondary'>
                        One of 500+ 5 Star Reviews Online
                    </p>
                </div>
            </div>
            <p className='text-[#676869] text-[12px] leading-[24px] font-secondary'>{test[0].description}</p>
        </div>
    )
}
