import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './Layout'
import LoginModal from './Components/Modals/LoginModal'
import RegisterModal from './Components/Modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <RegisterModal/>
  <LoginModal/>
  <Layout>
    
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
