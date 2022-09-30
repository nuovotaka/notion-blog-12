import React from 'react'
import ReactPlayer from 'react-player'

import styles from '../../styles/notion-block.module.css'

const Video = ({ block }) => {
  const block_type = block.Video.Type

  let video_url
  switch (block_type) {
    case 'external':
      video_url = block.Video.External.Url
      break;
    case 'file':
      video_url = block.Video.File.Url
      break;
    default:
      break;
  }
  return (
    <div className={styles.video}>
      <ReactPlayer
        className={styles['react-player']}
        width='100%'
        height='100%'
        url={video_url}
        playing={false}
        controls={true}
      />
    </div>
  )
}

export default Video
