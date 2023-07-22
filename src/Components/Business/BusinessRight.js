import React from 'react'
import Card from './Card'
import Business1 from '@/src/svgs/Business1'
import Business2 from '@/src/svgs/Business2'
import Business3 from '@/src/svgs/Business3'
import Business4 from '@/src/svgs/Business4'
import Elipse from '@/src/svgs/Elipse'
const BusinessRight = () => {
    return (
        <div className='min-h-[38rem] ml-24  relative '>
            <div className=' before:block before:content-[""] before:-z-10 before:w-full before:top-0 before:bg-blueLight before:h-[37rem]  before:absolute  before:rounded-tl-[150px] max-h-[600px]  z-30  '>
                <div className='relative grid grid-cols-[repeat(2,1fr)]  justify-center items-center justify-items-end  gap-x-4'>
                    <div className='relative col-start-1 -top-8 col-end-2 max-w-[350px] '>
                        <Card heading={"Business Idea Planning"} caption={'We present you a proposal and discuss niffty-gritty like'} icon={<Business1 />} s={{ backgroundColor: "#F1F7FF" }} />
                    </div>
                    <div className='justify-self-start max-w-[350px] relative col-start-2 -top-20 col-end-3 '>
                        <Card heading={'Financial Planning System'} caption={'Protocols apart from aengage models, pricing billing'} icon={<Business2 />} s={{ backgroundColor: "#FFF7E3" }} />
                    </div>
                    <div className=' relative  col-start-1 max-w-[350px] col-end-2 row-start-2 row-end-2'>
                        <Card heading={'Development Website and App'} caption={'Communication protocols apart from engagement models'} icon={<Business4 />} s={{ backgroundColor: "#FFF2F8" }} />
                    </div>
                    <div className='justify-self-start max-w-[350px] relative -top-12 col-start-2 col-end-3 row-start-2 row-end-2'>
                        <Card heading={'Market Analysis Project'} caption={'Protocols apart from aengage models, pricing billing'} icon={<Business3 />} s={{ backgroundColor: "#DEFFEE" }} />
                        <div className='absolute -right-7 -bottom-8 -z-40 '>
                            <Elipse />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BusinessRight