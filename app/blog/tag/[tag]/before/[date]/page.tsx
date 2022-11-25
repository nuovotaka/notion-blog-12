import { notFound, useRouter } from 'next/navigation'
import { NUMBER_OF_POSTS_PER_PAGE } from '../../../../../../app/server-constants'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  NoContents,
  PostDate,
  PostExcerpt,
  PostTags,
  PostTitle,
  ReadMoreLink,
} from '../../../../../../components/blog-parts'
import {
  getPosts,
  getRankedPosts,
  getPostsByTagBefore,
  getFirstPostByTag,
  getAllTags,
} from '../../../../../../lib/notion/client'
import styles from '../../../../../../styles/blog.module.scss'
import Mystyles from '../../../../../../styles/mystyles.module.scss'

export const revalidate = 3600

const BlogTagBeforeDatePage = async ({ params: { tag: encodedTag, date: encodedDate } }) => {
  const tag = decodeURIComponent(encodedTag)
  const date = decodeURIComponent(encodedDate)
  const router = useRouter()

  if (!Date.parse(date) || !/^\d{4}-\d{2}-\d{2}/.test(date)) {
    notFound()
  }

  const [posts, firstPost, rankedPosts, recentPosts, tags] = await Promise.all([
    getPostsByTagBefore(tag, date, NUMBER_OF_POSTS_PER_PAGE),
    getFirstPostByTag(tag),
    getRankedPosts(),
    getPosts(5),
    getAllTags(),
  ])

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <header>
          <h2>{tag} before {date.split('T')[0]}</h2>
        </header>

        <NoContents contents={posts} />

        {posts.map(post => {
          return (
            <div className={styles.post} key={post.Slug}>
              <PostDate post={post} />
              <PostTags post={post} />
              <PostTitle post={post} />
              <PostExcerpt post={post} />
              <ReadMoreLink post={post} />
            </div>
          )
        })}

        <footer>
          <div className={Mystyles.PageLinkContainer}>
            <div>
              <a onClick={() => router.back()}>← Newer Page</a>
            </div>
            <NextPageLink firstPost={firstPost} posts={posts} tag={tag} />
          </div>
        </footer>
      </div>

      <div className={styles.subContent}>
        <BlogPostLink heading="Recommended" posts={rankedPosts} />
        <BlogPostLink heading="Latest Posts" posts={recentPosts} />
        <BlogTagLink heading="Categories" tags={tags} />
      </div>
    </div>
  )
}

export default BlogTagBeforeDatePage