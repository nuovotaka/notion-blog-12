import Script from 'next/script'
import { NEXT_PUBLIC_G_ADS_ID } from '../app/server-constants'

const GoogleADS = () => {
  if (!NEXT_PUBLIC_G_ADS_ID) {
    return null
  }

  return (
    <>
        <Script
            data-ad-client={NEXT_PUBLIC_G_ADS_ID}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
    </>
  )
}

export default GoogleADS
