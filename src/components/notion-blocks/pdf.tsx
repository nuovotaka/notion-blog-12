import React from 'react'

const Pdf = ({ block }) => {

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

  const openBlobPdf = () => {
    fetch(`${url}`)
      .then(res => {
        res.blob().then(blobResponse => {
          const fileUrl = URL.createObjectURL(blobResponse)
          window.open(fileUrl)
        })
      })
  }

  return (
    <div>
      <button type="button" onClick={openBlobPdf}>PDFを開く</button>
    </div>
  )
}

export default Pdf
