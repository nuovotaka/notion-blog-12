import React from 'react'

import styles from '../../styles/notion-block.module.css'

const GoogleMapsEmbed = ({url}) => {

    return (
        <iframe className={styles.googlemapsEmbed}
            loading='lazy'
            allowFullScreen
            src={url}
        />
    )
}

export default GoogleMapsEmbed
