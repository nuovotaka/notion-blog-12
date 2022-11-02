import React from "react"
import Codepen from 'react-codepen-embed'

import styles from '../../styles/notion-block.module.css'

const CodepenEmbedded = ({ url }) => {
	let username
	let hash
  try {
    username = new URL(url).pathname.match(/^\/(.+)\/pen/)
		hash = new URL(url).pathname.match(/pen\/(.+)$/)
  } catch (error) {
    console.log(error)
    return null
  }

  if (!username) {
    return null
  }

  return (
		<div className={styles.codepenembed}>
			<Codepen hash={hash[1]} user={username[1]} />
		</div>
	)
}

export default CodepenEmbedded