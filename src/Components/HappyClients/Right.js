import React from 'react'
import Image from 'next/image'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import Circle from '../SharedComponents/Circle'
const Right = () => {
    return (
        <div className='w-1/3 pl-10  items-stretch' >
            <div className='relative  min-h-[300px]'>
                <Image src={img1} className='absolute top-[6rem] left-[6rem] ' />
                <Image src={img2} className='absolute top-4 ' />
                <Image src={img3} className='absolute top-36' />
                <Image src={img4} className='absolute top-56 left-16' />
                <Image src={img5} className='absolute top-52 left-48' />
                <Image src={img6} className='absolute top-40 left-[16rem]' />
                <Image src={img7} className='absolute top-20 left-[14.4rem]' />
                <Image src={img8} className='absolute top-0 left-32' />
                <div className='absolute top-16 left-3 -z-10'>
                    <Circle s={'fill-[#FFF5DB] w-[186px] h-[186px]'} />
                </div>
            </div>
        </div>
    )
}

export default Right