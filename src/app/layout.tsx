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
    <html className='bg-gradient-to-br from-slate-950 to-indigo-950' lang="pt-BR">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
