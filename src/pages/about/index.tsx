import DocumentHead from '../../components/document-head'

import styles from '../../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead title="About"/>

    <div>
      <h2>About</h2>
      <p>Mac関連のこと、日常的な事などを書いていきます。</p>
      <p>最近は病気の事とレザークラフトのことが多いです。</p>
      <p>時々更新のブログ。</p>
    </div>
  </div>
)

export default RenderPage
