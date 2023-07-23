import NavBar from '@/src/Components/NavBar'
import './globals.css'

import { Roboto } from 'next/font/google'

import LocalFont from "@next/font/local"


const Local = LocalFont({ src: './fonts/FontsFree-Net-AvertaDemoPECuttedDemo-Regular.ttf' })


export const metadata = {
  title: 'Figma Design',
  description: 'Figma Design to Web Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Local.className} style={{ maxWidth: '1440px', paddingLeft: "3%", background: "white" }}>
        <NavBar />
        {children}</body>
    </html>
  )
}
