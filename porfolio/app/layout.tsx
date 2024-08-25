import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body className={`${inter.className} min-h-screen max-w-full bg-dark`} >
        <header>
          <NavBar />
        </header>
        <div>
          {children}
        </div>
        <footer className="sticky top-[100vh]">
          <Footer />
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-FMFWNCYELS" />
    </html>
  )
}
