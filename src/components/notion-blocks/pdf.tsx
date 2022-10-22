import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pdf = ({ block }) => {
  const sURL = new URL(block.Pdf.File.Url)
  const url = (new URL(sURL).origin).concat(new URL(sURL).pathname)

  const [pdfdata, setPdfdata] = useState(null)

  useEffect(() => {
    axios.get(url, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      responseType: 'blob'
    })
    .then(res => {
      const blob = new Blob([res.data],{ type:'application/pdf'})
      const url = window.URL || window.webkitURL
      const src = url.createObjectURL(blob)
      setPdfdata(src)
    })
  }, [url])

  console.log(pdfdata)
  if(!pdfdata) return null

  return (
    <div>

    </div>
  )
}

export default Pdf
