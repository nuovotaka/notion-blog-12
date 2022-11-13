import '../styles/global.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Header from '../components/header'
import Footer from '../components/footer'
import GoogleAnalytics from '../components/google-analytics'
import GoogleADS from '../components/google-ads'

import '../styles/syntax-coloring.scss'
import styles from '../styles/shared.module.scss'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (location.host !== 'localhost') {
        gtag.pageview(pageProps.title, url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, pageProps.title])

  return (
    <>
      <GoogleAnalytics />
      <GoogleADS />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
