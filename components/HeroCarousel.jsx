"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { urlFor } from '@/lib/sanity';


export const HeroCarousel = ({ displayedProducts}) => {
    return (
        <div className="flex max-w-[720px]">
            <Swiper
                effect={'coverflow'}
                autoHeight={true}
                allowTouchMove={false}
                watchSlidesProgress={true}
                spaceBetween={20}
                centeredSlides={true}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier:3
                }}
                slidesPerView={3}
                modules={[EffectCoverflow]}
            >
                {displayedProducts.map((productItem, index) => (
                    <SwiperSlide key={productItem._id} className=''>
                        {({ isActive }) => (
                            <div className={`${isActive ? 'scale-110 transition-transform duration-300 ease-linear' : ''}`}>
                                <Image
                                    src={urlFor(productItem.image.asset._ref).url()}
                                    width={240}
                                    height={400}
                                    alt='Product Image'
                                    className={`overflow-visible h-[400px]`}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
