import Header from '@/src/Sections/Header'

import Image from 'next/image'
import Client from '@/src/Sections/Client'
import Business from '@/src/Sections/Business'
import Product from '@/src/Sections/Product'
import HappyClients from '@/src/Sections/HappyClients'
import Newsletter from '@/src/Sections/Newsletter'
import Footer from '@/src/Sections/Footer'
export default function Home() {
  return (
    <>
      <Header></Header>
      <Client></Client>
      <Business></Business>
      <Product></Product>
      <HappyClients></HappyClients>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>

  )
}
