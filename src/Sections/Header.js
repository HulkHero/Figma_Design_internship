
import React from 'react'
import HeaderLeft from '../Components/Header/HeaderLeft'
import HeaderRight from '../Components/Header/HeaderRight'
const Header = () => {
    return (
        <header>
            <div className=" mt-10 z-0 flex flex-col md:flex-row  relative ">
                <HeaderLeft></HeaderLeft>
                <HeaderRight></HeaderRight>

            </div>
        </header>
    )
}

export default Header