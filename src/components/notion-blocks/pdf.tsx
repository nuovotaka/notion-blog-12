import React, { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'

// ensure pdfjs can find its worker script regardless of how react-notion-x is bundled
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

const Pdf = ({ block }) => {
	const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

	if (!(/^https:\/\/s3\.us-west-2\.amazonaws\.com/.test(block.Pdf.File.Url))) {
    return null
  }

	const sURL = new URL(block.Pdf.File.Url)
	let matched: Array<string>
  try {
    matched = new URL(sURL).pathname.match(/\.pdf$/)
  } catch (error) {
    console.log(error)
    return null
  }

  if (!matched) {
    return null
  }

	const url = (new URL(sURL).origin).concat(new URL(sURL).pathname)

  return (
    <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (_, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  )
}

export default Pdf
