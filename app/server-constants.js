/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling

const path = require('path')

const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const NEXT_PUBLIC_SITE_TITLE = 'dev.NUOVOTAKA'
const NEXT_PUBLIC_SITE_DESCRIPTION = '時々更新ブログ'
const NEXT_PUBLIC_G_ADS_ID = process.env.NEXT_PUBLIC_G_ADS_ID
const NEXT_PUBLIC_GCMaps_API_KEY = process.env.NEXT_PUBLIC_GCMaps_API_KEY
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')
const NUMBER_OF_POSTS_PER_PAGE = 10

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID,
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GA_TRACKING_ID,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NEXT_PUBLIC_G_ADS_ID,
  NEXT_PUBLIC_GCMaps_API_KEY,
  BLOG_INDEX_CACHE,
  NUMBER_OF_POSTS_PER_PAGE,
}
