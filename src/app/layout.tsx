import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Portfólio Gustavo Nardino',
  description: 'Site hospedado na AWS para portfólio e estudos de diversas ferramentas',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
