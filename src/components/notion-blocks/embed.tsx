import dynamic from 'next/dynamic'

const TweetEmbed = dynamic(() => import('./tweet-embed'))
const Bookmark = dynamic(() => import('./bookmark'))
const AudioSpotify = dynamic(() => import('./audio-spotify'))
const GoogleMapsEmbed = dynamic(() => import('./google-maps'))
// const MiroEmbed = dynamic(() => import('./miro-embed'))

const Embed = ({ block }) => {
  if (/^https:\/\/twitter\.com/.test(block.Embed.Url)) {
    return <TweetEmbed url={block.Embed.Url} />
  } else if (/^https:\/\/gist\.github\.com/.test(block.Embed.Url)) {
    return <Bookmark block={block} />
  } else if (/^https:\/\/open\.spotify\.com/.test(block.Embed.Url)) {
    return <AudioSpotify url={block.Embed.Url} />
  } else if (/^https:\/\/www\.google\.com/.test(block.Embed.Url)) {
    return <GoogleMapsEmbed url={block.Embed.Url} />
  } else if (/^https:\/\/miro\.com/.test(block.Embed.Url)) {
    // return <MiroEmbed url={block.Embed.Url} />
    return null
  }

  return null
}

export default Embed
