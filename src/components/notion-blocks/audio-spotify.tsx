import Spotify from 'react-spotify-embed'

import styles from '../../styles/notion-block.module.css'


const AudioSpotify = ({ url }) => {
    return (
        <div className={styles.spotifyEmbed}>
            <Spotify link={url} />
        </div>
    )
}

export default AudioSpotify
