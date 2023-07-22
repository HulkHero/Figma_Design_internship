import React from 'react'

const ProductRight = () => {
    return (
        <div className='w-1/2 flex flex-col justify-center gap-3 '>
            <div className='w-[90%] relative'>

                <div className='absolute -left-[4%] -top-7 -z-10 w-[10rem] h-[10rem] bg-[#EFF1FF] rounded-br-[100px] '></div>
                <h1 className='text-4xl font-semibold ' >
                    Great Digital Product Agency since 2016
                </h1>
                <h4 className='text-[#565656] mt-6 text-lg leading-6'>
                    Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
                </h4>
            </div>
        </div>
    )
}

export default ProductRight