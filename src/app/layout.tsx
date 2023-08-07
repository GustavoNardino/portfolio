import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio Gustavo Nardino',
  description: 'Site hospedado na AWS para portfólio e estudos de diversas ferramentas',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
