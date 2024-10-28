import React from 'react'
import Image from "next/image";
import {AboutCarousel} from "@/components/AboutCarousel";
import {TbShoppingCartCheck, TbSunMoon, TbLeaf} from "react-icons/tb";
import {PiWaves} from "react-icons/pi";



export const About = () => {
    return (
        <section className='bg-gradient-to-b from-[#F9F0E5] via-[#F9F0E5]/[0.18] to-transparent pt-[78px] pb-[54px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-4'>
                    <h4 className='text-[20px] text-center leading-[24px] text-[#868787]'>as seen in</h4>
                    <div className = 'flex justify-between items-center'>
                        <div className='mr-4'>
                            <Image src='/assets/partnersLogos/Artboard1.svg' alt='logoPart_Img' width={178} height={22}/>
                        </div>
                        <div className='mr-8'>
                            <Image src='/assets/partnersLogos/Artboard2.svg' alt='logoPart_Img' width={111} height={52}/>
                        </div>
                        <div>
                            <Image src='/assets/partnersLogos/Artboard3.svg' alt='logoPart_Img' width={270} height={52}/>
                        </div>
                        <div>
                            <Image src='/assets/partnersLogos/Artboard4.svg' alt='logoPart_Img' width={194} height={38}/>
                        </div>
                        <div>
                            <Image src='/assets/partnersLogos/Artboard5.svg' alt='logoPart_Img' width={192} height={58}/>
                        </div>
                    </div>
                </div>
                <div className='pt-[110px] flex gap-x-[180px] justify-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-[32px] leading-[40px] text-[#01005B] pb-[74px]'>Loungewear you can be proud of.</h2>
                        <div className='flex flex-col gap-y-4'>
                            <div className='flex gap-x-[30px] max-w-[500px]'>
                                <div className=''>
                                    <TbShoppingCartCheck className='text-[46px] text-[#01005B] bg-[#F9F0E5] rounded-full p-1.5'/>
                                </div>
                                <div className='flex flex-col gap-y-[12px] pt-2'>
                                    <h5 className='text-[22px] leading-[24px] text-[#01005B]'>Ethically sourced.</h5>
                                    <p className='text-[16px] leading-[24px] text-[#6C6C6C]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                                        In eget ipsum et felis finibus consequat.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-x-[30px] max-w-[500px]'>
                                <div className=''>
                                    <TbLeaf className='text-[46px] text-[#01005B] bg-[#F9F0E5] rounded-full p-1.5'/>
                                </div>
                                <div className='flex flex-col gap-y-[12px] pt-2'>
                                    <h5 className='text-[22px] leading-[24px] text-[#01005B]'>Responsibly made.</h5>
                                    <p className='text-[16px] leading-[24px] text-[#6C6C6C]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                                        In eget ipsum et felis finibus consequat.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-x-[30px] max-w-[500px]'>
                                <div className=''>
                                    <TbSunMoon className='text-[46px] text-[#01005B] bg-[#F9F0E5] rounded-full p-1.5'/>
                                </div>
                                <div className='flex flex-col gap-y-[12px] pt-2'>
                                    <h5 className='text-[22px] leading-[24px] text-[#01005B]'>Made for living in.</h5>
                                    <p className='text-[16px] leading-[24px] text-[#6C6C6C]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                                        In eget ipsum et felis finibus consequat.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-x-[30px] max-w-[500px]'>
                                <div className=''>
                                    <PiWaves className='text-[46px] text-[#01005B] bg-[#F9F0E5] rounded-full p-1.5'/>
                                </div>
                                <div className='flex flex-col gap-y-[12px] pt-2'>
                                    <h5 className='text-[22px] leading-[24px] text-[#01005B]'>Unimaginably comfortable.</h5>
                                    <p className='text-[16px] leading-[24px] text-[#6C6C6C]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Fusce lobortis sapien facilisis tincidunt pellentesque.
                                        In eget ipsum et felis finibus consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[540px]'>
                        <AboutCarousel/>
                    </div>
                </div>
            </div>
        </section>
    )
}
