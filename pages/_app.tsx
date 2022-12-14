import '../styles/global.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import Header from '../components/header'
import Footer from '../components/footer'
import GoogleAnalytics from '../components/google-analytics'
import GoogleADS from '../components/google-ads'

import Loading from '../components/loading'

import '../styles/syntax-coloring.scss'
import styles from '../styles/shared.module.scss'

const App = ({ Component, pageProps }) => {
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
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
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
