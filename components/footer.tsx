import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from '../app/server-constants'
import BottomNav from './bottom-nav'

import styles from '../styles/footer.module.scss'
import Mystyles from '../styles/mystyles.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      © Copyright
      {' '}
      {new Date().getFullYear()}
      {' '}
      {NEXT_PUBLIC_SITE_TITLE}
    </div>
    <div>
      <span>Powered by </span>
      <Link href="https://github.com/otoyo/easy-notion-blog">
        easy-notion-blog
      </Link>
    </div>
    <div className={Mystyles.bottomNavLink}>
      <BottomNav />
    </div>
  </footer>
)

export default Footer
