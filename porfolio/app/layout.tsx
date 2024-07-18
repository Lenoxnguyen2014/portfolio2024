import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'lezen',
  description: 'lezen'
}

export const revalidate = 3600

export default async function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full bg-black`} >
        <header>
          <NavBar />
        </header>
        <div className='mb-24'>
          {children}
        </div>
        <footer className="sticky top-[100vh]">
          <Footer />
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
