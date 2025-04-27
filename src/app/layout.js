import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 