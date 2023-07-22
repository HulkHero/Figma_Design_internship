import React from 'react'
import SVG from '../../assets/Rectangle 31.svg'
import Button from '../SharedComponents/Button'
const Right = () => {
    return (
        <div className=' text-black relative self-center'>
            <div className=' max-h-[300px] relative  -z-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="497" height="292" viewBox="0 0 497 292" fill="none">
                    <path d="M7.07175 158.172C-19.0148 80.4252 38.8318 0 120.839 0H422C463.421 0 497 33.5786 497 75V217C497 258.421 463.421 292 422 292H123.901C80.9308 292 42.7643 264.549 29.0954 223.81L7.07175 158.172Z" fill="#2639ED" />
                </svg>
            </div>
            <div className='z-20 absolute top-[50%] left-[32%] transform -translate-x-[50%] -translate-y-[50%]  '>
                <div className='relative'>
                    <input type='text' style={{
                        borderRadius: '3.75rem',
                        border: '1px solid #F1F1F1',
                        background: '#FFF',
                        boxShadow: '10px 20px 50px 0px rgba(0, 0, 0, 0.15)'
                    }} placeholder='Enter your email address..' className='px-4 w-[29rem] h-[4.5rem]'></input>
                    <div className='absolute bottom-2 right-2 z-30'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right