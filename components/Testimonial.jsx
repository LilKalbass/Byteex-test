import React from 'react'
import {Gallery} from "@/components/Gallery";
import {client} from "@/lib/sanity";
import {TestimonialCarousel} from "@/components/TestimonialCarousel";
import {BsArrowRight} from "react-icons/bs";
import {Rating} from "@/components/Rating";

const getGallery = async () => {
    const query = `*[_type == 'gallery']`
    return await client.fetch(query)
}


export const Testimonial = async () => {
    const gallery = await getGallery()

    return (
        <section className='pt-[64px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center gap-y-[32px] pb-[54px]'>
                    <h2 className='text-[32px] leading-[40px] text-[#01005B]'>What are our fans saying?</h2>
                    <p className='text-[16px] leading-[24px] text-[#676869] max-w-[590px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                        In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
                    </p>
                </div>
            </div>
            <Gallery gallery = {gallery[0].images}/>
            <div className='container mx-auto pt-[76px]'>
                <TestimonialCarousel/>
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
