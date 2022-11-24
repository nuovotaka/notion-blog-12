import TweetEmbed from './tweet-embed'
import Bookmark from './bookmark'
import AudioSpotify from './audio-spotify'
import GoogleMapsEmbed from './google-maps'
import CodepenEmbedded from './codepen'

const Embed = ({ block }) => {
  if (/^https:\/\/twitter\.com/.test(block.Embed.Url)) {
    return <TweetEmbed url={block.Embed.Url} />
  } else if (/^https:\/\/gist\.github\.com/.test(block.Embed.Url)) {
    return <Bookmark block={block} />
  } else if (/^https:\/\/open\.spotify\.com/.test(block.Embed.Url)) {
    return <AudioSpotify url={block.Embed.Url} />
  } else if (/^https:\/\/www\.google\.com/.test(block.Embed.Url) || /^https:\/\/goo\.gl/.test(block.Embed.Url)) {
    return <GoogleMapsEmbed block={block} />
  } else if (/^https:\/\/miro\.com/.test(block.Embed.Url)) {
    return <Bookmark block={block} />
  } else if (/^https:\/\/codepen\.io/.test(block.Embed.Url)) {
    return <CodepenEmbedded url={block.Embed.Url} />
  }

  return null
}

export default Embed
