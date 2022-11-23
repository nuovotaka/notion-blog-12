import { useRouter } from 'next/router'

import { NUMBER_OF_POSTS_PER_PAGE } from '../../../lib/notion/server-constants'
import DocumentHead from '../../../components/document-head'
import {
  BlogPostLink,
  BlogTagLink,
  NextPageLink,
  NoContents,
  PostDate,
  PostExcerpt,
  PostTags,
  PostTitle,
  PostsNotFound,
} from '../../../components/blog-parts'
import styles from '../../../styles/blog.module.scss'
import { getTagLink } from '../../../lib/blog-helpers'
import { useEffect } from 'react'
import {
  getPosts,
  getRankedPosts,
  getPostsByTag,
  getFirstPostByTag,
  getAllTags,
} from '../../../lib/notion/client'
import Masonry from 'react-masonry-css'

export async function getStaticProps({ params: { tag } }) {
  const posts = await getPostsByTag(tag, NUMBER_OF_POSTS_PER_PAGE)

  if (posts.length === 0) {
    console.log(`Failed to find posts for tag: ${tag}`)
    return {
      props: {
        redirect: '/',
      },
      revalidate: 30,
    }
  }

  const [firstPost, rankedPosts, recentPosts, tags] = await Promise.all([
    getFirstPostByTag(tag),
    getRankedPosts(),
    getPosts(5),
    getAllTags(),
  ])

  return {
    props: {
      posts,
      firstPost,
      rankedPosts,
      recentPosts,
      tags,
      tag,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()

  return {
    paths: tags.map(tag => getTagLink(tag)),
    fallback: 'blocking',
  }
}

const RenderPostsByTags = ({
  tag,
  posts = [],
  firstPost,
  rankedPosts = [],
  recentPosts = [],
  tags = [],
  redirect,
}) => {
  const router = useRouter()

  useEffect(() => {
    if (redirect && posts.length === 0) {
      router.replace(redirect)
    }
  }, [router, redirect, posts])

  if (!posts) {
    return <PostsNotFound />
  }

  const breakpointColumnsObj = {
    default: 2,
    1280: 2,
    1100: 2,
    800: 2,
    500: 1
  };

  return (
    <div className={styles.container}>
      <DocumentHead description={`Posts in ${tag}`} />

      <div className={styles.mainContent}>
        <header>
          <h2>{tag}</h2>
        </header>

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

export default RenderPostsByTags
