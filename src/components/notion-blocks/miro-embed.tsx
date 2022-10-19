import React from 'react'

import styles from '../../styles/notion-block.module.css'

const MiroEmbed = ({url}) => {

    return (
        <iframe className={styles.miroEmbed}
            src={url}
            scrolling="no">
        </iframe>
    )
}

export default MiroEmbed
