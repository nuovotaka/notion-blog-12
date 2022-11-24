import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.css'
import '../styles/syntax-coloring.css'
import styles from '../styles/shared.module.css'
import Loading from '../components/loading'
import GoogleAnalytics from '../components/google-analytics'
import GoogleADS from '../components/google-ads'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const router = useRouter()
  
  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  return (
  <html lang="ja">
    <body>
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
      <GoogleADS />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    </body>
  </html>
)}

export default RootLayout