import dynamic from 'next/dynamic'

const TweetEmbed = dynamic(() => import('./tweet-embed'))
const Bookmark = dynamic(() => import('./bookmark'))
const AudioSpotify = dynamic(() => import('./audio-spotify'))
const GoogleMapsEmbed = dynamic(() => import('./google-maps'))
const CodepenEmbedded = dynamic(() => import('./codepen'))

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
    return <Bookmark block={block} />
  } else if (/^https:\/\/codepen\.io/.test(block.Embed.Url)) {
    return <CodepenEmbedded url={block.Embed.Url} />
  }

  return null
}

export default Embed
