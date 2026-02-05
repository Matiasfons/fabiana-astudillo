import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from "@/lib/i18n/language-context"

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
  title: 'Psic. Fabiana Astudillo | Psicóloga Clínica en Cuenca | Terapias de Tercera Generación',
  description: 'Psicóloga Clínica especializada en Terapias de Tercera Generación (ACT, DBT, Mindfulness). Atención presencial en Cuenca y online. Ansiedad, depresión, regulación emocional. Universidad del Azuay + Maestría UNIR España.',
  keywords: [
    'psicóloga Cuenca',
    'terapia de aceptación y compromiso',
    'ACT',
    'DBT',
    'mindfulness',
    'terapias de tercera generación',
    'ansiedad',
    'depresión',
    'regulación emocional',
    'psicóloga online Ecuador',
    'María Fabiana Astudillo',
    'salud mental',
    'terapia psicológica'
  ],
  authors: [{ name: 'Fabiana Astudillo' }],
  openGraph: {
    title: 'Psic. Fabiana Astudillo | Psicóloga Clínica',
    description: 'Especialista en Terapias de Tercera Generación. Atención presencial en Cuenca y online.',
    type: 'website',
    locale: 'es_EC',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
