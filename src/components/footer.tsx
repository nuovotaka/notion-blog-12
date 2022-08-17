import ExtLink from './ext-link'
import { Config } from '../utils/Config'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      © Copyright
      {' '}
      {new Date().getFullYear()}
      {' '}
      {Config.site_name}
    </div>
    <div>
      <span>Powered by </span>
      <ExtLink href="https://github.com/otoyo/easy-notion-blog">
        easy-notion-blog
      </ExtLink>
    </div>
  </footer>
)

export default Footer
