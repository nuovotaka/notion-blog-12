import Link from 'next/link'
import styles from '../styles/page.module.scss'

const RootPage = () => (
  <>
    <div className={styles.container}>
      <div>
        <h2>Welcome!</h2>
        <p>Your easy-notion-blog deployed successfully!</p>
        <p>Have fun!</p>
        <p>
          easy-notion-blog powered by{' '}
          <Link href="https://github.com/otoyo/easy-notion-blog">
            otoyo/easy-notion-blog
          </Link>
        </p>
      </div>
    </div>
  </>
)

export default RootPage