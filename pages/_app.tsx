import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import Layout from './Layout'
import LoginModal from './Components/Modals/LoginModal'
import RegisterModal from './Components/Modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RegisterModal/>
    <LoginModal/>
    <Layout>
      
    <Component {...pageProps} />
    </Layout>
  </SessionProvider>
  )
}
