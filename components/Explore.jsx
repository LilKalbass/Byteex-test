import React from 'react'
import Image from "next/image";

export const Explore = () => {
    return (
        <section className='bg-[#F0EEEF] pt-[130px] pb-[100px]'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-x-[162px] lg:items-start'>
                <div className='relative w-full lg:w-1/2'>
                    <div className="relative w-4/5 mx-auto">
                        <Image width={382} height={570} src="/assets/explore/explore.webp" alt="Main Image" className="w-full shadow-md"/>
                    </div>

                    <div className="absolute top-0 left-0 transform -translate-x-1/5 -translate-y-1/4 w-1/3 border-[4px] border-[#F0EEEF]">
                        <Image width={166} height={176} src="/assets/explore/exploreSmall1.webp" alt="Top Left" className="w-full  shadow-md"/>
                    </div>

                    <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-1/3 border-[4px] border-[#F0EEEF]">
                        <Image width={128} height={176} src="/assets/explore/exploreSmall2.webp" alt="Bottom Right" className="w-full shadow-md"/>
                    </div>
                </div>
                <div className='flex-col lg:w-1/2'>
                    <h2 className='text-[32px] leading-[40px] text-[#2A2996] pb-[40px]'>Be your best self.</h2>
                    <div className='text-[16px] leading-[24px] text-[#6C6C6C] gap-y-[20px] flex flex-col'>
                        <p className=''>
                            Hi! My name’s [Insert Name], and I founded [Insert] in ____.
                        </p>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce lobortis sapien facilisis tincidunt pellentesque.
                            In eget ipsum et felis finibus consequat.
                        </p>
                        <p className=''>
                            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula,
                            ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
                            Vivamus id arcu congue, faucibus libero nec, placerat ligula.
                        </p>
                        <p className=''>
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Sed eu nisl a metus ultrices sodales.
                        </p>
                        <p>
                            Fusce non ante velit. Sed auctor odio eu semper molestie.
                            Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus,
                            ac convallis urna massa at nibh.
                        </p>
                        <p className=''>
                            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut.
                            Vivamus in felis eu lacus feugiat aliquam nec in sapien.
                        </p>
                        <p className='pb-[10px]'>
                            Cras mattis varius mollis
                        </p>
                        <button>Customize Your Outfit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
