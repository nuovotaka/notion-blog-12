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
} from '../components/blog-parts'
import styles from '../styles/blog.module.scss'
import Mystyles from '../styles/mystyles.module.scss'
import {
  getPosts,
  getFirstPost,
  getRankedPosts,
  getAllTags,
} from '../lib/notion/client'

import Masonry from 'react-masonry-css'

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
  const breakpointColumnsObj = {
    default: 2,
    1280: 2,
    1100: 2,
    800: 2,
    500: 1
  };
  return (
    <div className={styles.container}>
      <DocumentHead title="Home" />

      <div className={styles.mainContent}>
        <NoContents contents={posts} />
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