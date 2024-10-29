import React from 'react'
import {CtaCarousel} from "@/components/CtaCarousel";
import {BsArrowRight} from "react-icons/bs";
import {TbClockHour3, TbCloudExclamation, TbShoppingCartCheck} from "react-icons/tb";
import {GrAmex} from "react-icons/gr";
import {FaApplePay, FaCcDiscover, FaCcMastercard, FaGooglePay, FaPaypal} from "react-icons/fa";
import {RiVisaLine} from "react-icons/ri";
import {GoShieldCheck} from "react-icons/go";
import {getCTA} from "@/lib/sanityQueries";

export const Footer = async() => {
    const ctaData = await getCTA()

    return (
        <footer className='bg-gradient-to-t from-[#F9F0E5] via-[#F9F0E5]/[0.18] to-transparent py-[84px]'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='flex flex-col items-center gap-y-[52px] text-center pb-[88px]'>
                    <h2 className='text-[32px] leading-[40px] text-[#01005B]'>Find something you love.</h2>
                    <p className='text-[16px] leading-[22px] text-[#676869] max-w-[588px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                        In eget ipsum et felis finibus consequat.
                    </p>
                </div>
                <CtaCarousel ctaData={ctaData}/>
                <div className='pb-[18px] pt-[58px]'>
                    <button className='gap-x-2 hover:pl-2 transition-all duration-300 w-[374px]'>Customize Your Outfit<BsArrowRight className='text-2xl'/></button>
                    <div className='flex items-center gap-x-4'>
                        <div className='flex items-center text-[#1FAD40] gap-x-1'>
                            <TbClockHour3 className='text-sm'/>
                            <p className='text-[10px] leading-[18px]'>Ships in 1-2 Days</p>
                        </div>
                        <div className='flex gap-x-3 text-2xl '>
                            <GrAmex />
                            <FaApplePay/>
                            <FaCcDiscover/>
                            <FaGooglePay/>
                            <FaCcMastercard/>
                            <FaPaypal/>
                            <RiVisaLine/>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className=' flex items-center  py-[14px] gap-x-[12px] border-r'>
                        <TbCloudExclamation className='text-5xl text-[#676869] bg-[#01005B] bg-opacity-10 py-[10px] px-[6px] rounded-full'/>
                        <p className='text-[14px] leading-[20px] text-[#676869] max-w-[152px]'>
                            FREE Shipping on Orders over $200
                        </p>
                    </div>
                    <div className='flex items-center py-[14px] gap-x-[12px] pl-10'>
                        <GoShieldCheck className='text-5xl text-[#676869] bg-[#01005B] bg-opacity-10 py-[10px] px-[6px] rounded-full'/>
                        <p className='text-[14px] leading-[20px] text-[#676869] max-w-[152px]'>
                            Over 500+ 5 Star Reviews Online
                        </p>
                    </div>
                    <div className=' flex items-center  py-[14px] gap-x-[12px] border-l pl-10'>
                        <TbShoppingCartCheck className='text-5xl text-[#676869] bg-[#01005B] bg-opacity-10 py-[10px] px-[6px] rounded-full'/>
                        <p className='text-[14px] leading-[20px] text-[#676869] max-w-[152px]'>
                            Made ethically and responsibly.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
