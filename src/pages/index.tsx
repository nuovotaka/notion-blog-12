import DocumentHead from '../components/document-head'
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
} from '../components/blog-parts'
import styles from '../styles/blog.module.scss'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Mystyles from '../styles/mystyles.module.scss'
import {
  getPosts,
  getFirstPost,
  getRankedPosts,
  getAllTags,
} from '../lib/notion/client'

export async function getStaticProps() {
  const [posts, firstPost, rankedPosts, tags] = await Promise.all([
    getPosts(),
    getFirstPost(),
    getRankedPosts(),
    getAllTags(),
  ])

  return {
    props: {
      posts,
      firstPost,
      rankedPosts,
      tags,
    },
    revalidate: 60,
  }
}


const Index = ({
  posts = [],
  firstPost,
  rankedPosts = [],
  tags = [],
}) => {
  return (
    <div className={styles.container}>
      <DocumentHead title="Home" />

      <div className={styles.mainContent}>
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
          <div className={Mystyles.nextPageLink}>
            <NextPageLink firstPost={firstPost} posts={posts} />
          </div>
        </footer>
      </div>

      <div className={styles.subContent}>
        <a id="Recommended"></a>
        <BlogPostLink heading="Recommended" posts={rankedPosts} />
        <BlogTagLink heading="Categories" tags={tags} />
      </div>
    </div>
  )
}


export default Index;