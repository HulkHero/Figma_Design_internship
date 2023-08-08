"use client"
import Header from '@/src/Sections/Header'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Client from '@/src/Sections/Client'
import Business from '@/src/Sections/Business'
import Product from '@/src/Sections/Product'
import HappyClients from '@/src/Sections/HappyClients'
import Newsletter from '@/src/Sections/Newsletter'
import Footer from '@/src/Sections/Footer'
import NavBar from '@/src/Components/NavBar'
export default function Home() {
  const bottomRef = useRef(null)
  const businessRef = useRef(null)
  const navRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    businessRef.current.scrollIntoView({ behavior: 'smooth' })

    console.log(bottomRef)
  }, [])

  const scrolltoTop = () => {
    // window.scrollTo({ top: 0, behavior: 'smooth' })
    navRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrolltoBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 300) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })



  return (
    <div>
      <NavBar ref={navRef}></NavBar>
      <Header ></Header>
      <Client></Client>
      <Business ref={businessRef}></Business>
      <Product></Product>
      <HappyClients></HappyClients>
      <Newsletter></Newsletter>
      <Footer ref={bottomRef}></Footer>
      {
        visible == true ? <button onClick={scrolltoTop} className='bg-gray-500 fixed bottom-5 right-0 text-white px-4 py-2 opacity-80 hover:opacity-100 active:opacity-100'>&uarr;</button>
          : <button onClick={scrolltoBottom} className='bg-gray-500 fixed bottom-5 right-0 text-white px-4 py-2 opacity-80 hover:opacity-100 active:opacity-100'>&darr;</button>}
    </div>
  )
}
