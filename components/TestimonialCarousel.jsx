'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { urlFor } from "@/lib/sanity"
import { Rating } from "@/components/Rating";

export const TestimonialCarousel = ({ testimData }) => {
    console.log(testimData)
    return (
        <div className='pt-[76px] max-w-[1258px] mx-auto'>
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    320:{
                        pagination: {
                            enabled:true
                        },
                        navigation: {
                            enabled:false
                        },
                        slidesPerView: 1
                    },
                    680:{
                        pagination: {
                            clickable:false,
                            enabled:false
                        },
                        navigation: {
                            enabled:true
                        },
                        slidesPerView: 2
                    },
                    800: {
                        pagination: {
                            clickable:false,
                            enabled:false
                        },
                        navigation: {
                            enabled:true
                        },
                        slidesPerView: 3
                    }
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    {testimData.map((testimItem) => (
                        <SwiperSlide key={testimItem._id} className='border-2 rounded-xl px-[40px] py-[30px]'>
                            <div className=''>
                                <div className='flex items-center gap-x-[14px] pb-[20px] '>
                                    <Image src={urlFor(testimItem.image.asset._ref).url()} alt='qwe' width={40} height={40} />
                                    <div className='flex flex-col'>
                                        <Rating value={testimItem.rating} />
                                        <h6>{testimItem.name}</h6>
                                    </div>
                                </div>
                                <p>{testimItem.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    )
}
