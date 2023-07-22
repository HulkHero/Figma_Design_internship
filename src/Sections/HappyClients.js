import React from 'react'
import Top from '../Components/HappyClients/Top'
import Left from '../Components/HappyClients/Left'
import Center from '../Components/HappyClients/Center'
import Right from '../Components/HappyClients/Right'
const HappyClients = () => {
    return (
        <section className='pl-[2%]'>
            <Top></Top>
            <div className='text-black mt-14  flex flex-row justify-center items-center gap-4'>
                <Left></Left>
                <Center></Center>
                <Right></Right>


            </div>

        </section>
    )
}

export default HappyClients