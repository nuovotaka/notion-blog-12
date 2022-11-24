'use client'

import React from "react"
import Codepen from 'react-codepen-embed'

import styles from '../../styles/notion-block.module.scss'

const CodepenEmbedded = ({ url }) => {
  let matched: string[]
  try {
    matched = new URL(url).pathname.match(/^\/(.+)\/pen\/(.+)$/)
  } catch (error) {
    console.log(error)
    return null
  }

  if (!matched) {
    return null
  }

  return (
		<div className={styles.codepenembed}>
			<Codepen height={450} hash={matched[2]} user={matched[1]} />
		</div>
	)
}

export default CodepenEmbedded