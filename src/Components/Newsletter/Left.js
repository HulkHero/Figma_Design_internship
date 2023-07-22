import React from 'react'
import Typography from '../SharedComponents/Typography'

const Left = () => {
    return (
        <div className='pl-7 w-[45%] text-black ' >
            {/* <h1 className='text-4xl font-semibold'>Subscribe Newsletter</h1>
            <h4 className='text-[#757575] mt-4 text-lg leading-[1.8rem]  '>I will update good news and promotion service not spam</h4> */}
            <Typography heading={'Subscribe Newsletter'} caption={'I will update good news and promotion service not spam'} classes={'mt-4 text-lg leading[1.8rem]'} ></Typography>
        </div>
    )
}

export default Left