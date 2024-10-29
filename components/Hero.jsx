import React from 'react'
import Image from "next/image";
import {TbShoppingCartCheck, TbSunMoon} from "react-icons/tb";
import {PiWaves} from "react-icons/pi";
import {BsArrowRight} from "react-icons/bs";
import {FeaturedTestimonial} from "@/components/FeaturedTestimonial";
import {HeroCarousel} from "@/components/HeroCarousel";
import {getFeaturedProductsHero, getFeaturedTestimonial} from "@/lib/sanityQueries";

export const Hero = async () => {
    const featuredTestim = await getFeaturedTestimonial()
    const displayedProducts = await getFeaturedProductsHero()

    return (
        <section className='pt-8 z-50'>
            <div className='container mx-auto'>
                <div className='pb-[62px]'>
                    <Image src='/assets/Logo.svg' alt='logo_img' className='object-contain' width={200} height={36}/>
                </div>
                <div className='flex justify-between relative '>
                    <div className='flex flex-col'>
                        <h1 className='text-[38px] leading-[46px] text-[#01005B] pb-[26px] max-w-[530px]'>
                            Don’t apologize for being comfortable.
                        </h1>
                        <div className='flex flex-col gap-y-6 pb-10'>
                            <div className= 'flex items-center gap-x-[10px]'>
                                <TbSunMoon className='text-[36px] text-[#15005B] bg-[#F9F0E5] rounded-full p-1'/>
                                <p className='text-[16px] leading-[24px] text-[#676869] max-w-[400px]'>
                                    Beautiful, comfortable loungewear for day or night.
                                </p>
                            </div>
                            <div className= 'flex items-center gap-x-[10px]'>
                                <TbShoppingCartCheck className='text-[36px] text-[#15005B] bg-[#F9F0E5] rounded-full p-1'/>
                                <p className='text-[16px] leading-[24px] text-[#676869] max-w-[400px]'>
                                    No wasteful extras, like tags or plastic packaging.
                                </p>
                            </div>
                            <div className= 'flex gap-x-[10px]'>
                                <PiWaves className='text-[36px] text-[#15005B] bg-[#F9F0E5] rounded-full p-1'/>
                                <p className='text-[16px] leading-[24px] text-[#676869] max-w-[400px]'>
                                    Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.
                                </p>
                            </div>
                        </div>
                        <button className='gap-x-2 hover:pl-2 transition-all duration-300 mb-[142px]'>
                            Customize Your Outfit
                            <BsArrowRight className='text-2xl'/>
                        </button>
                        <div className='absolute -bottom-20'>
                            <FeaturedTestimonial test={featuredTestim} />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <HeroCarousel data={displayedProducts}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
