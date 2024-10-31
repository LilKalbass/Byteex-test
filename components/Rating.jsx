import { IoIosStarOutline, IoIosStar } from "react-icons/io";

export const Rating = ({ value}) =>
{
    if (value) {
        const stars = Array.from({length: 5}, () => <IoIosStarOutline className='text-[16px]'/>);
        let i;
        for (i = 0; i < value; i++) {
            stars[i] = <IoIosStar className='text-[16px]'/>;
        }

        // if (value % 1 != 0) {
        //     stars[i - 1] = <IoIosStarHalf className='text-[24px]'/>;
        // }
        return <div className='flex items-center gap-x-1'>
            <div className='flex items-center text-[#FFB801]'>{stars}</div>
        </div>;
    }
};