import DocumentHead from '../../components/document-head'
import styles from '../../styles/page.module.scss'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Mystyles from '../../styles/mystyles.module.scss'

const PrivacyPage = () => (
  <div className={styles.container}>
    <DocumentHead title="Privacy" />

    <div>
      <h2>Privacy</h2>
      <p>
        当サイトにおける個人情報の取扱いについて、以下のとおりにプライバシーポリシーを定めます。
      </p>
      <p className={Mystyles['font-bold']}>Cookieについて</p>
      <p>
        当サイトでは、一部のコンテンツにおいてCookieを利用しています。
        Cookieとは、webコンテンツへのアクセスに関する情報であり、お名前・メールアドレス・住所・電話番号は含まれません。
        また、お使いのブラウザ設定からCookieを無効にすることが可能です。
      </p>
      <p className={Mystyles['font-bold']}>広告の配信について</p>
      <p>
        当サイトは第三者配信の広告サービス「Googleアドセンス」を利用しています。
        広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
        Googleアドセンスの詳細は「Googleポリシーと規約」をご覧ください。
      </p>
      <p>
        このプログラムにより、第三者がコンテンツ、及び宣伝を提供し、サイトの訪問者から直接情報を収集し、
        訪問者のブラウザにcookieを設定したり、これを認識したりする場合があります。
      </p>
      <p className={Mystyles['font-bold']}>アクセス解析ツールについて</p>
      <p>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
        この規約に関して、詳しくは
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>
        、または
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja">こちら</a>
        をクリックしてください。
      </p>
      <p className={Mystyles['font-bold']}>著作権について</p>
      <p>
        当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属します。権利を侵害する目的ではありません。
        記事の内容や掲載画像等に問題がある場合、各権利所有者様本人がツイッターのDMでご連絡下さい。本人確認後、対応致します。
      </p>
      <p>
        また、当サイトのコンテンツ（記事・画像・その他プログラム）について、許可なく転載することを禁じます。
        引用の際は、当サイトへのリンクを掲載するとともに、転載であることを明記してください。
      </p>
      <p className={Mystyles['font-bold']}>免責事項</p>
      <p>
        当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        当サイトのコンテンツについて、可能な限り正確な情報を掲載するよう努めていますが、誤情報が入り込んだり、情報が古くなっている場合があります。
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </p>
      <p className={Mystyles['font-bold']}>プライバシーポリシーの変更について</p>
      <p>
        当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
      </p>
      <p>修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
    </div>
  </div>
)

export default PrivacyPage
