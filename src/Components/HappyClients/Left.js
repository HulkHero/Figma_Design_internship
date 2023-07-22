import React from 'react'
import Image from 'next/image'
import Img from '../../assets/happyCientMain.png'
const Left = () => {
    return (
        <div className='w-1/3 max-h-[320px]'>
            <div className='relative'>
                <Image src={Img} style={{ borderRadius: '31.25rem 0rem 31.25rem 31.25rem' }} width={400} height={380} ></Image>
                <div className='absolute bottom-10 -z-10 left-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="55.6" stroke="#FF007A" stroke-width="8.8" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Left