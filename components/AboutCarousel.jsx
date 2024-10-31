'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { urlFor } from "@/lib/sanity"

export const AboutCarousel = ({ data }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className="flex flex-col items-center">
            <div className="relative max-w-[544px]">
                <Swiper
                    loop={true}
                    navigation
                    slidesPerView={1}
                    initialSlide={2}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    className=""
                >
                    {data.map((productItem) => (
                        <SwiperSlide key={productItem._id}>
                            <div className="flex items-center justify-center relative">
                                <Image
                                    src={urlFor(productItem.image.asset._ref).url()}
                                    alt="Main Image"
                                    width={432}
                                    height={648}
                                    className=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] flex justify-center z-20">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={2}
                        slidesPerView={5}
                        modules={[Thumbs]}
                        watchSlidesVisibility
                        watchSlidesProgress
                        className="thumbs"
                    >
                        {data.map((productItem) => (
                            <SwiperSlide key={productItem._id}>
                                {({ isActive }) => (
                                    <div className="cursor-pointer flex justify-center">
                                        <Image
                                            src={urlFor(productItem.image.asset._ref).url()}
                                            width={50}
                                            height={50}
                                            alt="Thumbnail"
                                            loading='lazy'
                                            className={`border ${isActive ? '' : ''} w-12 h-12 `}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
