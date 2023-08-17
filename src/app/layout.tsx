import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gustavonardino.com.br"),
  title: {
    default: "Gustavo Nardino",
    template: `%s | Gustavo Nardino`,
  },
  description: 'Portfólio e estudos de diversas ferramentas',
  verification:{
    google: `google-site-verification=${process.env.NEXT_PUBLIC_GA}`
  },
  category: 'tecnologia',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html className='bg-customGeneralBackground' lang="pt-BR">
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
