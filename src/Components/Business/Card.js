import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            borderRadius: '40px',
            border: '1px solid #F2F2F2',
            background: '#FFF',
            boxShadow: '0px 10px 50px 0px rgba(0, 0, 0, 0.05)'
        }} className='h-[20rem] min-h-[20rem] bg-yellow-500 w-[16rem] max-w-[16rem] flex flex-col items-center justify-center gap-8 my-2  px-[5px] '>
            <div className=''>
                <div style={props.s} className='rounded-[20px] min-h-[100px] min-w-[100px] flex justify-center items-center'>
                    {props.icon}
                </div>
            </div>
            <div className='text-2xl w-[90%] text-center text-black font-semibold pl-[5px]'>
                <h2>{props.heading}</h2>
            </div>
            <div className='text-center text-[#757575] leading-6'>
                <h4>{props.caption}</h4>
            </div>

        </div>
    )
}

export default Card