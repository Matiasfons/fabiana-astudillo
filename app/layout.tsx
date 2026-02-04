import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Psicóloga Fabiana Astudillo Abad | Terapia Presencial y Online',
  description: 'Psicóloga clínica especializada en regulación emocional, adaptación y desarrollo de habilidades. Terapia presencial y online en español e inglés.',
  keywords: ['psicóloga', 'terapia online', 'salud mental', 'Ecuador', 'terapia psicológica', 'regulación emocional'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
