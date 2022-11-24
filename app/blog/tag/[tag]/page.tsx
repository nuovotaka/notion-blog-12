import { notFound } from 'next/navigation'
import { NUMBER_OF_POSTS_PER_PAGE } from '../../../../app/server-constants'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  PostDate,
  PostExcerpt,
  PostTags,
  PostTitle,
} from '../../../../components/blog-parts'
import styles from '../../../../styles/blog.module.scss'
import {
  getPosts,
  getRankedPosts,
  getPostsByTag,
  getFirstPostByTag,
  getAllTags,
} from '../../../../lib/notion/client'
import Masonry from 'react-masonry-css'

export const revalidate = 60
export const dynamicParams = false

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(tag => ({ tag: tag }))
}

const BlogTagPage = async ({ params: { tag: encodedTag } }) => {
  const tag = decodeURIComponent(encodedTag)

  const posts = await getPostsByTag(tag, NUMBER_OF_POSTS_PER_PAGE)

  if (posts.length === 0) {
    notFound()
  }

  const [firstPost, rankedPosts, recentPosts, tags] = await Promise.all([
    getFirstPostByTag(tag),
    getRankedPosts(),
    getPosts(5),
    getAllTags(),
  ])

  const breakpointColumnsObj = {
    default: 2,
    1280: 2,
    1100: 2,
    800: 2,
    500: 1
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <header>
          <h2>{tag}</h2>
        </header>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >

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
        </Masonry>

        <footer>
          <NextPageLink firstPost={firstPost} posts={posts} tag={tag} />
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

export default BlogTagPage