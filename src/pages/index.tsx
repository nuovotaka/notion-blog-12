import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import { SITE_TITLE } from '../components/document-head'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <ExtLink href="https://nuovotaka.com/"> NUOVOTAKA.com</ExtLink>
      <h2>About</h2>
      <p>Mac関連のこと、日常的な事などを書いていきます。</p>
      <p>最近は病気の事とレザークラフトのことが多いです。</p>
      <p>時々更新のブログ。</p>
      <p>
        {SITE_TITLE} powered by{' '}
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          otoyo/easy-notion-blog
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
