'use client'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.scss'
import '../styles/syntax-coloring.scss'
import styles from '../styles/shared.module.scss'
import GoogleAnalytics from '../components/google-analytics'
import GoogleADS from '../components/google-ads'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const [progress,setProgress] = useState(0);
  const barColor = '#0fa8ff'
  return (
  <html lang="ja">
    <body>
      <LoadingBar color={barColor} progress={progress} onLoaderFinished={() => setProgress(0)} />
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