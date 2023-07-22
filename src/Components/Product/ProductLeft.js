import Image from 'next/image'
import React from 'react'
import Productimg from '../../assets/ProductImage.png'
const ProductLeft = () => {
    return (
        <div className='w-1/2 ' >
            <figure style={{}} className='relative w-[500px] h-[350px]  my-auto'>
                <Image src={Productimg} className='mx-auto my-auto' width={500} height={350}>
                </Image>
                <div className='absolute top-[46%] left-[48%] transform -translate-x-[50%] -translate-y-[50%] '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 78 78" fill="none">
                        <g clip-path="url(#clip0_2_593)">
                            <rect x="20.6939" y="17.5102" width="42.9796" height="42.9796" fill="white" />
                            <path d="M39 0C17.55 0 0 17.55 0 39C0 60.45 17.55 78 39 78C60.45 78 78 60.45 78 39C78 17.55 60.45 0 39 0ZM31.2 56.55V21.45L54.6 39L31.2 56.55Z" fill="#2639ED" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_593">
                                <rect width="78" height="78" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className='absolute bottom-0 right-0 -z-10 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" fill="none">
                        <circle cx="64.5" cy="64.5" r="64.5" fill="#FFF5DB" />
                    </svg>
                </div>

            </figure>

        </div>
    )
}

export default ProductLeft