import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-white text-black mt-7 pl-[2%] flex flex-row justify-between '>
            <div className=''>
                <h1 className='inline-block font-semibold '>A+</h1>
                <h4 className='inline-block ml-1'>Studio</h4>

            </div>
            <div className=''>
                <ul className='flex flex-row space-x-14 mr-14'>
                    <li className=''>Home</li>
                    <li className=''>What we do</li>
                    <li className=''>Service</li>
                    <li className=''>Project</li>
                    <li className=''>Blog</li>
                    <li className=''>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar