import { notFound } from 'next/navigation'
import { NUMBER_OF_POSTS_PER_PAGE } from '../../../../app/server-constants'
import {
  getRankedPosts,
  getPostsBefore,
  getFirstPost,
  getAllTags,
} from '../../../../lib/notion/client'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  NoContents,
  PostDate,
  PostExcerpt,
  PostTags,
  PostTitle,
} from '../../../../components/blog-parts'
import styles from '../../../../styles/blog.module.scss'
import Mystyles from '../../../../styles/mystyles.module.scss'

export const revalidate = 3600

const BlogBeforeDatePage = async ({ params: { date: encodedDate } }) => {
  const date = decodeURIComponent(encodedDate)
  // const router = useRouter()

  if (!Date.parse(date) || !/^\d{4}-\d{2}-\d{2}/.test(date)) {
    notFound()
  }

  const [posts, firstPost, rankedPosts, tags] = await Promise.all([
    getPostsBefore(date, NUMBER_OF_POSTS_PER_PAGE),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
  ])

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <header>
          <h2>Posts before {date.split('T')[0]}</h2>
        </header>

        <NoContents contents={posts} />

        <div className={styles.template}>
        {posts.map(post => {
          return (
            <div className={styles.post} key={post.Slug}>
              <PostDate post={post} />
              <PostTags post={post} />
              <PostTitle post={post} />
              <PostExcerpt post={post} />
              {/* <ReadMoreLink post={post} /> */}
            </div>
          )
        })}
        </div>

        <footer>
          <div className={Mystyles.PageLinkContainer}>
            <div>
              {/* <a onClick={() => router.back()}>← Newer Page</a> */}
            </div>
            <NextPageLink firstPost={firstPost} posts={posts} />
          </div>
        </footer>
      </div>

      <div className={styles.subContent}>
        <BlogPostLink heading="Recommended" posts={rankedPosts} />
        <BlogTagLink heading="Categories" tags={tags} />
      </div>
    </div>
  )
}

export default BlogBeforeDatePage