import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleADS from '../components/google-ads'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <GoogleADS />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
