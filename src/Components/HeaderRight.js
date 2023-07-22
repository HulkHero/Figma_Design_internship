import React from 'react'
import Image from 'next/image'
import Headerimg from '../assets/Headerimg.png'
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
                <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" >
                    <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
                </svg>
            </div>
            {/* <div className='absolute -top-0 left-[50%] z-20 -translate-x-[50%]  '>
                <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" >
                    <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
                </svg>
            </div> */}
        </div>

        // <div className='z-30 max-w-[50%] relative flex flex-col'>
        //     <figure className='z-40  order-2 relative'>
        //         <div className="padding-bottom: 100%;">
        //             <Image src={Headerimg} width={"100%"} height={"100%"} alt="hello" class='object-cover absolute top-0 left-0' />
        //         </div>
        //     </figure>
        //     <span className='absolute -bottom-20 right-10 z-5 order-1' style={{ backgroundColor: "#FFF5DB", minWidth: "9.125rem", minHeight: "9.125rem", borderRadius: "0rem 0rem 6.25rem 0rem" }} >

        //     </span>
        // </div>
    )
}

export default HeaderRight