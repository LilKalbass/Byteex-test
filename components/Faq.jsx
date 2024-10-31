import React from 'react'
import Image from "next/image";
import { FaqQA } from "@/components/FaqQA";
import {getQAData} from "@/lib/sanityQueries";


export const Faq = async () => {
    const qa = await getQAData();

    return (
            <section className='pt-[110px] pb-[118px]'>
            <div className='container mx-auto grid lg:grid-cols-2 gap-x-[88px]'>
                <div className='flex flex-col xl:max-w-2xl'>
                    <h2 className='text-[32px] leading-[40px] text-[#01005B] pb-[24px]'>Frequently asked questions.</h2>
                    <FaqQA faqData={qa} />
                </div>

                <div className='relative xl:grid place-items-center hidden'>
                    <div className='absolute top-36 z-10'>
                        <Image
                            src="/assets/faq/faqImg2.jpg"
                            alt="Center Image"
                            width={228}
                            height={356}
                            className="w-full shadow-md"
                        />
                    </div>
                    <div className="absolute top-0 right-20 ">
                        <Image
                            src="/assets/faq/faqImg1.jpg"
                            alt="Top Right"
                            width={168}
                            height={254}
                            className="w-full relative shadow-md"
                        />
                    </div>
                    <div className="absolute top-[440px] left-20">
                        <Image
                            src="/assets/faq/faqImg3.jpg"
                            alt="Bottom Left"
                            width={216}
                            height={160}
                            className="w-full shadow-md relative"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
