import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/notion-block.module.css'

const Pdf = ({ block }) => {
  const url = new URL(block.Pdf.File.Url).href
  const [pdfdata, setPdfdata] = useState(null)
  
  if (/^https:\/\/s3\.us-west-2\.amazonaws\.com/.test(block.Pdf.File.Url)) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        axios.get(url, {
          headers: {contentType: 'application/pdf'},
          responseType: 'arraybuffer',
        })
        .then(res => {
          const blob = new Blob([res.data],{ type:'application/pdf'})
          const url = window.URL || window.webkitURL
          const src = url.createObjectURL(blob)
          setPdfdata(src)
        })
      } catch (e) {
        console.log(e.message)
      }
    }, [url])

    console.log(pdfdata)
    if(!pdfdata) return null
  } else { return null }

  return (
    <div className={styles.pdf}>

    </div>
  )
}

export default Pdf
