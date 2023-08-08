"use client"
import React from 'react'
import { forwardRef } from 'react'

const Footer = forwardRef((props, ref) => {

    return (
        <div className='w-[90%] mt-20 mb-2 mx-[5%]' ref={ref}>
            <div className='w-full h-[0.06rem] bg-[#E4E4E4] ' ></div>
            <div className='flex flex-row justify-between pt-10 text-black '>
                <div className='flex-grow-[2]'>
                    <h1 className='text-2xl inline-block font-semibold'>A+</h1>
                    <h4 className=' inline-block text-2xl ml-2 '>Studio</h4>
                    <p className='mt-5 text-sm text-secondary max-w-[14rem]'>
                        Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                    </p>
                    <div className='flex flex-row mt-7 gap-3  '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_2_627)">
                                <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z" fill="#3B5998" />
                                <path d="M22.5252 18.7046H19.3133V30.4715H14.447V18.7046H12.1326V14.5693H14.447V11.8933C14.447 9.97961 15.3561 6.98303 19.3566 6.98303L22.9613 6.99811V11.0122H20.3459C19.9169 11.0122 19.3136 11.2265 19.3136 12.1394V14.5731H22.9503L22.5252 18.7046Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_627">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_2_631)">
                                <path d="M18.0002 35.9997C27.9412 35.9997 36 27.9409 36 17.9998C36 8.0588 27.9412 0 18.0002 0C8.05917 0 0.000366211 8.0588 0.000366211 17.9998C0.000366211 27.9409 8.05917 35.9997 18.0002 35.9997Z" fill="#55ACEE" />
                                <path d="M29.0257 12.9359C28.2543 13.278 27.4246 13.5093 26.5544 13.6126C27.4428 13.0803 28.1247 12.238 28.4465 11.2328C27.6151 11.7259 26.6939 12.0837 25.7143 12.2766C24.9295 11.4407 23.8113 10.9183 22.5731 10.9183C20.1974 10.9183 18.2706 12.8451 18.2706 15.2208C18.2706 15.558 18.3088 15.8863 18.3826 16.2014C14.8069 16.022 11.6364 14.3092 9.51424 11.7054C9.14396 12.3407 8.93155 13.0803 8.93155 13.8687C8.93155 15.361 9.69167 16.6785 10.8455 17.4498C10.1406 17.4277 9.4767 17.2342 8.89689 16.9111C8.89657 16.9294 8.89657 16.9477 8.89657 16.9657C8.89657 19.0503 10.3803 20.7891 12.3481 21.1841C11.9875 21.2829 11.6066 21.3352 11.2148 21.3352C10.9369 21.3352 10.6677 21.3086 10.4053 21.2585C10.9527 22.9674 12.5413 24.2114 14.4244 24.2464C12.9517 25.4005 11.0967 26.0882 9.08043 26.0882C8.7339 26.0882 8.39057 26.0679 8.05463 26.0278C9.95767 27.249 12.2198 27.961 14.6493 27.961C22.5631 27.961 26.891 21.4051 26.891 15.7191C26.891 15.5327 26.8868 15.3469 26.8784 15.1627C27.7198 14.5563 28.4491 13.7987 29.0257 12.9359Z" fill="#F1F2F2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_631">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <g clip-path="url(#clip0_2_636)">
                                <path d="M18 35.9998C27.9411 35.9998 36 27.9409 36 17.9998C36 8.05863 27.9411 -0.000244141 18 -0.000244141C8.05884 -0.000244141 -3.05176e-05 8.05863 -3.05176e-05 17.9998C-3.05176e-05 27.9409 8.05884 35.9998 18 35.9998Z" fill="#007AB9" />
                                <path d="M28.7548 19.4483V26.8693H24.4523V19.9456C24.4523 18.2071 23.8311 17.0199 22.2733 17.0199C21.0845 17.0199 20.3783 17.8192 20.0664 18.5931C19.9531 18.8697 19.9239 19.2538 19.9239 19.6417V26.8689H15.6211C15.6211 26.8689 15.6788 15.1425 15.6211 13.9287H19.9242V15.7625C19.9156 15.7769 19.9034 15.791 19.8957 15.8048H19.9242V15.7625C20.496 14.8826 21.5157 13.6248 23.8019 13.6248C26.6326 13.6248 28.7548 15.4743 28.7548 19.4483ZM11.12 7.69104C9.64813 7.69104 8.68521 8.65717 8.68521 9.92652C8.68521 11.1689 9.62022 12.163 11.0635 12.163H11.0914C12.5921 12.163 13.5252 11.1689 13.5252 9.92652C13.4966 8.65717 12.5921 7.69104 11.12 7.69104ZM8.94094 26.8693H13.2422V13.9287H8.94094V26.8693Z" fill="#F1F2F2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_636">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>



                    </div>
                </div>

                <div className='flex-grow'>
                    <h1 className='text-2xl font-semibold'>What we do</h1>
                    <ul className='mt-5 text-sm  space-y-2'>
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Social Media Manage</li>
                        <li>Market Analysis Project</li>
                    </ul>

                </div>
                <div className='flex-grow'>
                    <h1 className='text-2xl font-semibold'>Company</h1>
                    <ul className='mt-5 text-sm  space-y-2'>
                        <li>About us</li>
                        <li>Career</li>
                        <li>Become Investor</li>
                    </ul>
                </div>
                <div className='flex-grow'>
                    <h1 className='text-2xl font-semibold'>Support</h1>
                    <ul className='mt-5 text-sm  space-y-2'>
                        <li>FAQ</li>
                        <li>Policy</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div className='flex-grow'>
                    <h1 className='text-2xl font-semibold' >
                        Contact
                    </h1>
                    <ul className='mt-5 text-sm  space-y-2'>
                        <li>Whatsapp</li>
                        <li>Support 24</li>

                    </ul>

                </div>

            </div>
            <div className='mt-10 mx-auto'>
                <h4 className='text-[#A4A4A4] text-center text-sm'>
                    Copyright © 2022 Avi Yansah
                </h4>
            </div>
        </div>
    )
})

export default Footer