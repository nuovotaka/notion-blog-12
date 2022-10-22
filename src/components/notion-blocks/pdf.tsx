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
        responseType: 'blob',
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

  return (
    <div className={styles.pdf}>

    </div>
  )
}

export default Pdf
