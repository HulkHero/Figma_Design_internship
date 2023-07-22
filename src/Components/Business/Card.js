import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            borderRadius: '40px',
            border: '1px solid #F2F2F2',
            background: '#FFF',
            boxShadow: '0px 10px 50px 0px rgba(0, 0, 0, 0.05)'
        }} className='h-[23.4rem] min-h-[23.4rem]  w-[19rem] max-w-[19rem] flex flex-col items-center justify-center space-y-8 my-2 pb-4  px-[5px] '>
            <div className=''>
                <div style={props.s} className='rounded-[20px] min-h-[100px] min-w-[100px] flex justify-center items-center'>
                    {props.icon}
                </div>
            </div>
            <div className='text-2xl w-[80%] text-center text-black font-semibold pl-[5px]'>
                <h2>{props.heading}</h2>
            </div>
            <div className='text-center w-[90%] text-[#757575] leading-6'>
                <h4>{props.caption}</h4>
            </div>

        </div>
    )
}

export default Card