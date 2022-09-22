jest.mock('../../../src/lib/notion/blog-index-cache')

import { render } from '@testing-library/react'
import Index from '../../../src/pages'

import {
  getPosts,
  getFirstPost,
  getRankedPosts,
  getAllTags,
} from '../../../src/lib/notion/client'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/blog',
      pathname: '/blog',
    }
  },
}))

describe('Index', () => {
  it('renders the page unchanged', async () => {
    const posts = await getPosts()
    const firstPost = await getFirstPost()
    const rankedPosts = await getRankedPosts()
    const tags = await getAllTags()

    const { container } = render(
      <Index
        posts={posts}
        firstPost={firstPost}
        rankedPosts={rankedPosts}
        tags={tags}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
