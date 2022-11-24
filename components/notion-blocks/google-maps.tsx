'use client'

import React from 'react'
import { isGoogleMapsURL } from '../../lib/blog-helpers'

import styles from '../../styles/notion-block.module.scss'
import Bookmark from './bookmark'

const GoogleMapsEmbed = ({ block }) => {
    const url = block.Embed.Url
    if (!isGoogleMapsURL(url)) {
        return null
    }

    if (new URL(url).hostname.match(/goo\.gl/)) {
        return <Bookmark block={block} />
    }

    return (
        <iframe className={styles.googlemapsEmbed}
            loading='lazy'
            allowFullScreen
            src={url}
        />
    )
}

export default GoogleMapsEmbed
