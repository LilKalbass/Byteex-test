import React from 'react'
import {TbShoppingCartCheck, TbSunMoon, TbLeaf} from "react-icons/tb";
import {BsArrowRight} from "react-icons/bs";
import {Rating} from "@/components/Rating";

export const Order = () => {
    return (
        <section>
            <div className='container mx-auto pt-[76px]'>
                <h2 className='text-center text-[#01005B] text-[32px] leading-[40px] pb-[46px]'>Comfort made easy</h2>
                <div className='flex gap-x-10 justify-center pb-[56px]'>
                    <div className='flex flex-col items-center bg-[#F0EEEF] px-[36px] py-[78px] rounded-xl'>
                        <TbShoppingCartCheck className='text-[#01005B] text-6xl'/>
                        <h4 className='text-[22px] leading-[40px] text-[#01005B] pb-[20px] pt-[16px]'>You save.</h4>
                        <p className='text-[16px] leading-[24px] text-[#676869] max-w-[280px] text-center'>
                            Browse our comfort sets and save 15% when you bundle.
                        </p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F9F0E6] px-[36px] py-[78px] rounded-xl'>
                        <TbShoppingCartCheck className='text-[#01005B] text-6xl'/>
                        <h4 className='text-[22px] leading-[40px] text-[#01005B] pb-[20px] pt-[16px]'>We ship.</h4>
                        <p className='text-[16px] leading-[24px] text-[#676869] max-w-[280px] text-center'>
                            We ship your items within 1-2 days of receiving your order.
                        </p>
                    </div>
                    <div className='flex flex-col items-center bg-[#F0EEEF] px-[36px] py-[78px] rounded-xl'>
                        <TbShoppingCartCheck className='text-[#01005B] text-6xl'/>
                        <h4 className='text-[22px] leading-[40px] text-[#01005B] pb-[20px] pt-[16px]'>You enjoy!</h4>
                        <p className='text-[16px] leading-[24px] text-[#676869] max-w-[280px] text-center'>
                            Wear hernest around the house, out on the town, or in bed.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-y-[10px]'>
                    <div className='flex'>
                        <button className='gap-x-2 hover:pl-2 transition-all duration-300 w-[369]'>
                            Customize Your Outfit
                            <BsArrowRight className='text-2xl'/>
                        </button>
                    </div>
                    <div className='flex items-start gap-x-[14px]'>
                        <Rating value={5}/>
                        <p className='font-secondary text-[12px] leading-[20px] text-[#828282]'>
                            Over 500+ 5 Star Reviews Online
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
