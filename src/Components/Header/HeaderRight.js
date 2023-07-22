import React from 'react'
import Image from 'next/image'
import Headerimg from '../../assets/Headerimg.png'
import Circle from '../SharedComponents/Circle'
const HeaderRight = () => {
    return (
        <div className='z-30 min-w-[50%] relative flex flex-col'>
            <figure className='z-40  order-2'>
                <Image src={Headerimg} width={"100%"}
                    height={"auto"} alt="hello" className='object-cover ' ></Image>

            </figure>
            <span className='absolute md:bottom-20 lg:-bottom-4  xl:-bottom-16 right-14 z-5 order-1' style={{ backgroundColor: "#FFF5DB", minWidth: "9.125rem", minHeight: "9.125rem", borderRadius: "0rem 0rem 6.25rem 0rem" }} >
            </span>
            <div className='absolute top-0 -left-[64px] '>
                <Circle s={'fill-[#DAE9FF] w-[129px] h-[129px]'}></Circle>
            </div>
        </div>
    )
}

export default HeaderRight