import React from 'react'
import ClientLeft from '../Components/ClientsCom/ClientLeft'
import ClientRight from '../Components/ClientsCom/ClientRight'
const Client = () => {
    return (
        <section className='pl-[2%] text-black flex flex-col  lg:flex-row mt-28'>
            <ClientLeft />
            <ClientRight />
        </section>
    )
}

export default Client