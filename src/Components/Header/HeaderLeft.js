import React from 'react'
import Dots from '../SharedComponents/Dots'
import Button from '../SharedComponents/Button'

const HeaderLeft = () => {
    return (
        <main className='pl-[2%] pt-24 w-1/2  z-10 text-black flex flex-col  justify-center '>
            <section>
                <h1 className='font-bold text-4xl'>A Digital Product Agency</h1>
                <h4 className='mt-[2.5rem] w-3/4 text-secondary'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</h4>
            </section>
            <div>
                <Button></Button>
            </div>
            <div className='relative -top-9 -left-[20%] z-20'>
                <Dots s={'fill-[#F4F4F4]'} />
            </div>
        </main>
    )
}

export default HeaderLeft