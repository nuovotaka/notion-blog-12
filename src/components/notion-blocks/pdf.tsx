import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/notion-block.module.css'

const Pdf = ({ block }) => {
  if (/^https:\/\/s3\.us-west-2\.amazonaws\.com/.test(block.Pdf.File.Url)) {

    const url = new URL(block.Pdf.File.Url).href
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pdfdata, setPdfdata] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        axios.get(url, {
          headers: {contentType: 'application/pdf'},
          responseType: 'arraybuffer',
        })
        .then(res => {
          const blob = new Blob([res.data],{ type:'application/pdf'})
          const src = URL.createObjectURL(blob)
          setPdfdata(src)
        })
      } catch (e) {
        console.log(e.message)
      }
    }, [url])

    if(!pdfdata) return null

    return (
      <div className={styles.pdf}>
        <iframe src={pdfdata} width='100%' height='100%'></iframe>
        <a href={pdfdata} download='pdfdata.pdf'>PDFダウンロードリンク</a>
      </div>
    )
  } else {
    return null
  }
}

export default Pdf
