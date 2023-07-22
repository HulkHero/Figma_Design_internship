import React from 'react'
import ClientLeft from '../Components/ClientsCom/ClientLeft'
import ClientRight from '../Components/ClientsCom/ClientRight'
const Client = () => {
    return (
        <div className='pl-[2%] text-black flex flex-col  lg:flex-row mt-24'>
            <ClientLeft />
            <ClientRight />
        </div>
    )
}

export default Client