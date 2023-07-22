
import React from 'react'
import HeaderLeft from '../Components/HeaderLeft'
import HeaderRight from '../Components/HeaderRight'
const Header = () => {
    return (
        <header>
            <div className=" mt-10 z-0 flex flex-col md:flex-row  relative ">
                <HeaderLeft></HeaderLeft>
                <HeaderRight></HeaderRight>
                <div className='absolute -top-0 left-[50%] z-20 -translate-x-[50%]  '>
                    <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" >
                        <circle cx="64.5" cy="64.5" r="64.5" fill="#DAE9FF" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header