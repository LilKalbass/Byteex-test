import React from 'react'
import Image from "next/image";
import {urlFor} from "@/lib/sanity";
import {Rating} from "@/components/Rating";

export const FeaturedTestimonial = ({test}) => {
    return (
        <div className='flex flex-col shadow-2xl drop-shadow-xl px-5 py-4 box-content max-w-[440px] border-[1px] rounded-xl'>
            <div className='flex items-center gap-x-6 pb-3'>
                <div className='flex gap-x-[14px] items-center'>
                    <Image src={urlFor(test[0].image.asset._ref).url()} alt='testim_avatar' width={40} height={40}/>
                    <p className='text-[16px] leading-[24px]'>
                        {test[0].name}
                    </p>
                </div>
                <div className='flex items-center gap-x-[8px]'>
                    <Rating value={test[0].rating}/>
                    <p className='text-[12px] leading-[20px] text-[#828282]'>
                        One of 500+ 5 Star Reviews Online
                    </p>
                </div>
            </div>
            <p className='text-[#676869] text-[12px] leading-[24px]'>{test[0].description}</p>
        </div>
    )
}
