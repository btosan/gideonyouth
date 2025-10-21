
import {
  Navbar,
  Footer,
} from "../components/index";
import './globals.css'


export const viewport = {
  themeColor: '#311145',
  
  width: 'device-width',

}

export const metadata = {
  generator: 'Next.js',
  title: 'Gideon Youth Foundation',
  description: '. We help disadvantaged young people to escape a future of low self-esteem, drugs, poverty, and being excluded from society.',
  keywords: ['students', 'public schools', 'drugs', 'empowerment', 'youth', 'scholarship', 'Gideon', 'youth', 'foundation', 'poverty' ],
  creator: 'Best Tosan',
  publisher: 'BE Tosan',
  canonical: '/',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/logo/icon-48x48.png',
    other: {
      rel: 'logo/icon-72x72.png',
      url: '/logo/icon-72x72.png',
    }
  },

  manifest: '/manifest.json',

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className='relative overflow-x-hidden'>
        <>
          {/* <Navbar /> */}
            {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
