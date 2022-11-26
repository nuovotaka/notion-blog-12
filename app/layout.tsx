'use client'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.scss'
import '../styles/syntax-coloring.scss'
import styles from '../styles/shared.module.scss'
import GoogleADS from '../components/google-ads'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
  <html lang="ja">
    <body>
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