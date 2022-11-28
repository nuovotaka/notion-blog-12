import React from 'react'
import styles from '../styles/loading.module.scss'

const ProgressBar = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.bar}></div>
    </div>
  )
}

export default React.memo(ProgressBar)