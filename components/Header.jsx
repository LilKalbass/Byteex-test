import React from 'react'

export const Header = () => {
    return (
        <header>
            <h4 className='text-[12px] leading-[36px] md:flex items-center justify-center text-[#565656] ph:hidden'>
                <span>CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)</span>
                <span className='px-2'> | </span>
                <span>FREE SHIPPING on orders &gt; $200</span>
                <span className='px-2'> | </span>
                <span>easy 45 day return window.</span>
            </h4>
            <h4 className='text-[12px] leading-[36px] md:hidden items-center justify-center text-[#565656] ph:flex'>
                FREE SHIPPING on orders &gt; $200
            </h4>
        </header>
    )
}
