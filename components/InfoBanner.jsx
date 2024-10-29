import React from 'react'
import {TbBolt, TbCloudExclamation, TbDropletDown} from "react-icons/tb";

export const InfoBanner = () => {
    return (
        <section className='pt-[40px] pb-[32px] bg-[#F0EEEF]'>
            <div className='container mx-auto flex flex-col items-center'>
                <h4 className='text-[26px] leading-[40px] text-[#15005B] pb-[14px]'>Our total green impact</h4>
                <div className='flex gap-x-[58px]'>
                    <div className=' flex flex-col items-center py-[14px]'>
                        <TbCloudExclamation className='text-5xl text-[#2A2996] bg-[#E4E4E4] py-[10px] px-[6px] rounded-full'/>
                        <h6 className='font-bold text-[22px] leading-[20px] text-[#15005B] pt-[14px] pb-[10px]'>3,927 kg</h6>
                        <p className='text-[14px] leading-[20px] text-[#15005B]'>of CO2 saved</p>
                    </div>
                    <div className='border-x border-[#4C4C480] flex flex-col items-center py-[14px] px-[48px]'>
                        <TbDropletDown className='text-5xl text-[#2A2996] bg-[#E4E4E4] py-[10px] px-[6px] rounded-full'/>
                        <h6 className='font-bold text-[22px] leading-[20px] text-[#15005B] pt-[14px] pb-[10px]'>2,546,167 days</h6>
                        <p className='text-[14px] leading-[20px] text-[#15005B]'>of drinking water saved</p>
                    </div>
                    <div className=' flex flex-col items-center py-[14px]'>
                        <TbBolt className='text-5xl text-[#2A2996] bg-[#E4E4E4] py-[10px] px-[6px] rounded-full'/>
                        <h6 className='font-bold text-[22px] leading-[20px] text-[#15005B] pt-[14px] pb-[10px]'>7,321 kWh</h6>
                        <p className='text-[14px] leading-[20px] text-[#15005B]'>of energy saved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
