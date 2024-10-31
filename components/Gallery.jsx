import React from 'react'
import Image from "next/image";
import {urlFor} from "@/lib/sanity";

export const Gallery = ({gallery}) => {
    return (
        <div className='flex gap-y-[6px] gap-x-[6px] ph:justify-center flex-wrap max-w-[1468px] mx-auto'>
            {gallery.map((image) => {
                return (
                    <div key = {image._key}>
                        <Image src={urlFor(image.asset._ref).url()} alt='testimGalleryItem' width={128} height={128} layout='fixed' loading='lazy'/>
                    </div>
                )
            })}
        </div>
    )
}
