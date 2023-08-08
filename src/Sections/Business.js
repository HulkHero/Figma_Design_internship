import React from 'react'
import Dots from '../Components/SharedComponents/Dots'
import BusinessRight from '../Components/Business/BusinessRight'
import { forwardRef } from 'react'


const Business = forwardRef((props, ref) => {
    return (
        <section >
            <div ref={ref} className='pl-[2%]  text-black w-[100%] grid grid-cols-6 items-center mb-10 mt-36 h-[800px]  '>
                <div id="left" className='col-start-1 row-start-1 row-end-2  col-end-3 justify-items-center flex flex-col justify-center min-h-[800px] relative ' >
                    <div className='flex flex-col justify-end items-start  '>
                        <div>
                            <div className='relative -left-[4%] top-[5.5rem] -z-10 w-[8rem] h-[8rem] bg-rectangle rounded-tl-[100px] '></div>
                            <h1 className=' font-bold text-3xl w-[15rem]'>How can we help you business </h1>
                            <h4 className='font-normal mt-4 text-secondary '>We build readymade websites, mobile applications,<br></br> and elaborate online business services.</h4>
                        </div>
                        <div className=' left-0 bottom-16 mr-auto mt-[14.5rem] max-h-[100px] -z-40 '>
                            <Dots s={'fill-[#E7F0FC]'} />
                        </div>
                    </div>
                </div>
                <div className='col-start-2  col-end-[-1] row-start-1 row-end-2  col-span-3  '>
                    <BusinessRight />
                </div>
            </div>
        </section >
    )
})

export default Business