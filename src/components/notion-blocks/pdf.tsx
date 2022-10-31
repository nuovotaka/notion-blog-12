import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/notion-block.module.css'

const Pdf = ({ block }) => {
  const url = new URL(block.Pdf.File.Url).href
  const [pdfdata, setPdfdata] = useState(null)

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
    </div>
  )
}

export default Pdf
